import express from 'express'
import { DownloadImg, ImgUpload } from '../controllers/ImgController.js';
import upload from '../utils/upload.js';

const router = express.Router();


//here "upload.signle" means upload only one file
router.post('/upload', upload.single('file'), ImgUpload);
// in this we are using get api bcz we are hit this directly by the url
router.get('/file/:fileId', DownloadImg);
export default router;