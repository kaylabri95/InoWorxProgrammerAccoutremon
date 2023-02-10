const { app, BrowserWindow, dialog } = require('electron')
const path = require('path');

// const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        // width: isDev ? 1000 : 500, 
        width: 800,
        height: 600,
        icon: './assets/icon.png',
        webPreferences:{
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, '/index.html'));
};

app.whenReady().then(() => {
    createMainWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        };
    })
});

app.on('windows-all-closed', () => {
    if(!isMac){
    app.quit();
    }
});
