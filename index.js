'use strict';

const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, } = electron;

let startUpWindow;
let startNewTab;

// Listen for app to be ready
app.on('ready', function () {
  // Create new window
  startUpWindow = new BrowserWindow({});

  // Load HTML into window
  startUpWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'store.html'),
    protocol: 'file:',
    slashes: true
  }));

  //Quit app when closed
  startUpWindow.on('closed', function () {
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// Open window in new tab, pass through path as argument 1

// function openNewTab(path) {
//   startNewTab = new BrowserWindow({});

//   startNewTab.loadURL(url.format({
//     pathname: path.join(__dirname, path),
//     protocol: 'file:',
//     slashes: true
//   }));
// }

// document.getElementById('store').click(function () {
//   openNewTab('/blend-press/apps/store/index.html');
// });


// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Home',
        role: 'reload'
      },


    ]
  }
];

// If mac, add empty object to menu
if (process.platform === 'darwin') {
  mainMenuTemplate.unshift({});
}

// Add developer tools item if not in production
if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform === 'darwin' ? 'Commmand+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  });
}



