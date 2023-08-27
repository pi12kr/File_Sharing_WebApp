// jb api call hua data append hua uske badd backened me handling nhi kari isiliye error aaya iske liye humko routing krna padega 

// we do routing using express 

import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

export default router;

// router post take 3 objects - 1st one is endpoint , 2nd is middleWare, 3rd is a callback function 