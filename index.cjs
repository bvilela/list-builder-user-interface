const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // autoHideMenuBar: true,
    width: 800,
    height: 600,
    icon: __dirname + '/icon/fav-icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();
  mainWindow.maximize();
  // mainWindow.setMenu(null);

  ipcMain.on("titlebar", (event, arg) => {
    if (arg === "destroy") {
      mainWindow.destroy();
    } else if (arg === "kill") {
      var exec = require('child_process').exec, child;
      child = exec('java -jar jar/list-builder.jar',
        function (error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
    }
  })
});

