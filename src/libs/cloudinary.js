// libs/cloudinary.js
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
});

export default cloudinary;
