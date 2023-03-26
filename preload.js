const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld(
    "electron", 
    {
        closeApp: () => ipcRenderer.send("closeApp"),
        makeListAssistencia: () => ipcRenderer.send("makeListAssistencia"),
        makeListLimpeza: () => ipcRenderer.send("makeListLimpeza"),
    }
);