// インポート
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { PythonShell } = require('python-shell');
const path = require('path');

let filePaths = {};

// ブラウザの作成
const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },

      
    });


    ipcMain.handle('fileOpen', async (_e, _arg) => {
      return dialog
        .showOpenDialog(mainWindow, {
          properties: ['openFile'],
        })
        .then((result) => {
          if (result.canceled) return '';
          let ext = result.filePaths[0].split(".").slice(-1)[0];
          filePaths[ext] = result.filePaths;
          console.log(filePaths);
          return result.filePaths[0];
        });
    });

    ipcMain.handle("fileSend", async (_e, _arg) => {
      // pythonにファイル名を送信
      
      
      // pythonからグラフが返ってくる

    });

    mainWindow.loadFile('index.html')
  }

  



// アプリの実行
app.whenReady().then(() => {
createWindow()
})

// ウィンドウを閉じるとappを終了
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

// pythonスクリプトの実行

PythonShell.run('app.py', null, function (err, result) {
    if (err) throw err;
    console.log(result);
});

