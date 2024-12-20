const { app, BrowserWindow, Menu,screen, ipcMain } = require('electron');
const path = require('node:path');
const os = require('os')
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width:1280,
    height:height,
    fullscreen: false,  
    frame: true,  
    icon : path.join(__dirname, "./media/logo.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });


  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Menu.setApplicationMenu(null);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// handle request
ipcMain.handle('get-system-info',()=>{
  return {
    cpuArchitecture: os.arch(),
    osPlatform: os.platform(),
    osType: os.type(),
    osRelease: os.release(),
    osVersion: os.version(),
    systemUptime: os.uptime(), // Uptime in seconds
    userInfo: os.userInfo(), // User information object
    networkInterfaces: os.networkInterfaces() // Network interface details
};
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
