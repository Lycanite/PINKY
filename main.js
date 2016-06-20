// ========== Setup PINKY ==========
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow


// ========== Create Window ==========
function createWindow () {
  mainWindow = new BrowserWindow({width: 1280, height: 720, frame: false})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


// ========== On Ready ==========
app.on('ready', createWindow)


// ========== Quit ==========
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})


// ========== Start ==========
