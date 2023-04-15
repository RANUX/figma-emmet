# Emmet Code Generator Plugin for Figma

The Emmet Code Generator Plugin for Figma allows you to quickly and easily generate Emmet code from your Figma designs. Emmet is a shorthand syntax for writing HTML and CSS that can significantly speed up your web development workflow. Plugin idea taked from https://github.com/joelbqz/sketch-emmet/

## Installation

To install the plugin, simply go to the Figma Community page and search for "Emmet Code Generator". Click the "Install" button and the plugin will be added to your Figma workspace.

## Usage

Open the Figma design you want to generate Emmet code for.
1. Select the layers you want to generate code for.
2. Open the Emmet Code Generator plugin by going to "Plugins" in the menu bar and selecting "Emmet Code Generator".
3. Click the "Generate" button to generate the Emmet code.
4. Copy the generated code and paste it into your text editor.


## Tips and tricks

1. Add a % or // character as prefix if you want to ignore or prevent a layer or group of layers to be copied.

2. If you have a block or a image with a prefix or name as "img" it will automatically add width and height attributes. Example:
  - img
  - img.classname
  - img.classname#id
  - img.classname#id[src=#]

3. Text layers just output the text inside it, unless you asign a proper HTML tag as name. Example:
  - p
  - h1
  - h2
  - h3
  - p.classname
  - p.classname#id
  - p.classname#id[attribute=value]
    
Learn more about Emmet Abbreviations Syntax https://docs.emmet.io/

## Contributing

If you find a bug or have a feature request, please open an issue on this repository. Pull requests are also welcome!

## How to develop

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.


## License
This plugin is licensed under the MIT License. See the LICENSE file for more information.