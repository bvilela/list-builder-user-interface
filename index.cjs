const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // autoHideMenuBar: true,
    width: 800,
    height: 600,
    icon: __dirname + '/icon/fav-icon.ico'
  });

  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  // mainWindow.webContents.openDevTools();
  mainWindow.maximize();
  mainWindow.setMenu(null);
});