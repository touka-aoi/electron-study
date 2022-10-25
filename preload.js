const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    fileOpen: () => ipcRenderer.invoke('fileOpen'),
    fileSend: () => ipcRenderer.invoke("fileSend"),
    pythonGraph: () => ipcRenderer.invoke("python-graph"),
})