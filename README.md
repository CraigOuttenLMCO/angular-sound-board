# Angular Sound Board

A sound board application written with Angular. Make funny sounds to annoy/entertain co-workers/family.

## Getting Started

Here are the tools used to get this up and running

### Prerequisites

[VSCode Portable](https://go.microsoft.com/fwlink/?Linkid=850641)

[NodeJS](https://nodejs.org/dist/v10.7.0/node-v10.7.0-win-x64.zip)
[Git Portable 64-bit](https://github.com/git-for-windows/git/releases/download/v2.18.0.windows.1/PortableGit-2.18.0-64-bit.7z.exe)

### Installing

Place VSCode Portable where ever you wish, it really doesn't matter. Preferrably, some sort of workspace directory would be nice.

Extract NodeJS and place it in a similar nice spot. Add NodeJS to your environment so you are able to access it from ANYWHERE with a simple "node" command.
npm is packaged with NodeJS so no worries!

Extract Git into a similar nice spot along side NodeJS and VSCode. We like to keep them all together, you should too.

Once this is all set up and VSCode is happy hunky dorey, you can run the command below to pull the project:

`git clone https://github.com/CraigOuttenLMCO/angular-sound-board.git`

Tada! You've got an Angular Sound Board! Now go make beautiful sounds!

## Build

### Angular Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Electron App Build

Run `npm run electron-build` to build and run with electron. Note: the app will not automatically reload when changes
to the source files are made.

### Electron Package Build

Run `npm run package:win` to build a desktop app for Windows.
Run `npm run package:linux` to build a desktop app for Linux.
Run `npm run package:all` to build a desktop app for All distributions and architectures.

The electron package build artifacts will be stored in the `packages/` directory.

## Deployment

To serve the sound board, you can run `npm start`

or if you're behind a super secure firewall at an ultra large multi-billion dollar corporation:
`npm run start-lm` - Note - Be sure to change the IP address used for hosting to your own,

## Built With

* [Angular](https://angular.io/) - The web framework used
* [YouTube](https://www.youtube.com//) - Used to find audio files
* [OnlineVideoConverter](https://rometools.github.io/rome/) - Convert videos to audio format
* [Audacity](https://www.audacityteam.org/) - Edit the audio files