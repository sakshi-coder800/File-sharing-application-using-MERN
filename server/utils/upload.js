import multer from 'multer';

const upload = multer({ dest: 'uploads' }) // here we are define it's destination


export default upload;