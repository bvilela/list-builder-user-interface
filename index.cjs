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

  ipcMain.on("closeApp", () => mainWindow.destroy());
  ipcMain.on("makeListAssistencia", () => invokeJar("ASSISTENCIA"));
  ipcMain.on("makeListLimpeza", () => invokeJar("LIMPEZA"));

  function invokeJar(listType) {
    var args = "--spring.profiles.active=PRD --tipo.lista=" + listType;
    var commandExecute = path.join('java -jar ' + __dirname, 'jar/list-builder.jar ' + args);
    console.log("Command to Execute: " + commandExecute);

    var exec = require('child_process').exec, child;
    child = exec(commandExecute,
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
      });
  }
});