// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 500, height: 700 });

function isGroup(layer: SceneNode): layer is GroupNode {
  return 'children' in layer;
}

function isText(layer: SceneNode): layer is TextNode {
  return layer.type === 'TEXT';
}

function getText(layer: TextNode): string {
  return layer.characters.replace(/(\r\n|\n|\r)/gm, '<br/>');
}

function isImage(layer: SceneNode): boolean {
  return layer.name.startsWith('img.');
}

function isTag(layer: SceneNode): boolean {
  const re = /(\w)+[#\.(\[)]/;  // regex to get tag name
  return re.test(layer.name);
}

function isTextTag(layer: SceneNode): boolean {
  const tagName = layer.name.toLowerCase();
  return [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'blockquote',
    'i',
    'strong',
    'b',
    'li',
    'a',
  ].some(tag => tag === tagName);
}

function setEmmetTag(name: string): string {
  let layerName = name;
  const reg = /(\[(.*?)\])/g; // regex to get attributes
  const layerAtts = layerName.match(reg);
  if (layerAtts) {
    layerName = layerName.replace(reg, '');
  }
  layerName = layerName.replace(/[\s]+/g, '-');
  layerName = layerName.replace(/[^aA-z0-9:_*$%!#\s.-]/g, '-');
  return layerAtts ? layerName + layerAtts[0] : layerName;
}

function isIgnored(layer: SceneNode): boolean {
  return layer.name.startsWith('%');
}

function getEmmetMarkup(layers: ReadonlyArray<SceneNode>): string {
  let emmetString = '';
  for (let i = layers.length - 1; i >= 0; i--) {
    const layer = layers[i];
    const layerName = setEmmetTag(layer.name);
    if (isIgnored(layer)) {
      continue;
    }

    if (isGroup(layer)) {
      emmetString += `(${layerName}>`;
      const subLayers = layer.children;
      emmetString += getEmmetMarkup(subLayers);
      emmetString += ')';
    } else if (isText(layer)) {
      if (isTag(layer) || isTextTag(layer)) {
        emmetString += `${layerName}{${getText(layer)}}`;
      } else {
        emmetString += `{${getText(layer)}}`;
      }
    } else if (isImage(layer)) {
      const { width, height } = layer;
      emmetString += `${layerName}[width=${width} height=${height}]`;
    } else {
      emmetString += layerName;
    }
    if (i !== 0) {
      emmetString += '+';
    }
  }
  return emmetString;
}


figma.ui.onmessage = msg => {
  if (msg.type === 'generateEmmetCode') {
    
    const emmetCode = getEmmetMarkup(figma.currentPage.selection);
    figma.ui.postMessage({ type: 'generateEmmetCode', payload: emmetCode }, { origin: '*' });
  }
};
