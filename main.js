const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        // autoHideMenuBar: true,
        width: 800,
        height: 600,
        icon: __dirname + '/icon/fav-icon.ico'
    });

    win.loadFile('index.html');
    win.maximize();
    // win.setMenu(null);

    ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system'
    })
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});