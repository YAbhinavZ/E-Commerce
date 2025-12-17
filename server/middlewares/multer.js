import multer from "multer"
 
// use multer.diskStorage() -> when you want to store on your server but in our case we want to store it on cloud
const storage = multer.memoryStorage()
const uploadFiles = multer({storage}).array("files",10);
export default uploadFiles;