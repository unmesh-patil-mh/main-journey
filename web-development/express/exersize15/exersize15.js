import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// console.log(fs)

const basepath = "C:\\Users\\LOQ\\OneDrive\\Desktop\\express\\exersize15"

let files = await fs.readdir(basepath)
// console.log(files)

let extensions = []

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(ext)
    if(fsn.existsSync(path.join(basepath, ext)) && ext!="js" && ext!="json" ){
        // MOVE FILE TO ITS DIRECTORY
        fs.rename(path.join(basepath, item) , path.join(basepath, ext, item))
    }   
    else{
        fs.mkdir(path.join(basepath, ext))
    }
    // console.log(item);
}