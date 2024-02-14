var fs=require('fs')
fs.appendFile('calc1.js','console.log("appended")',function (err) {
  console.log("Data Saved")  
})