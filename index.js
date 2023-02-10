const { app, BrowserWindow, dialog } = require('electron')
const path = require('path');

// const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';
// Forces dev to prod for TESTTTINGGGG
Object.defineProperty(app, 'isPackaged', {
  get() {
    return true;
  }
});

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        // width: isDev ? 1000 : 500, 
        width: 1000,
        height: 600,
        icon: __dirname + 'build/icons/icon.ico',
        webPreferences:{
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, '/index.html'));
};

app.whenReady().then(() => {
    createMainWindow();
    app.on('activeate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        };
    })
});

app.on('window-all-closed', () => {
    if(!isMac){
    app.quit();
    }
});
