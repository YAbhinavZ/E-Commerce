import DataUriParser from "datauri/parser.js"
import path from "path"

const bufferGenerator = (file) =>{
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString(); // fetch the extension of the file
    return parser.format(extName,file.buffer);  //convert file buffer into Data URI
};
export default bufferGenerator;