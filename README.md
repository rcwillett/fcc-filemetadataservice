Willitt's File Meta Data Service
--------------------------

Description
===========

This is willitt's implementation of a file meta data service. It uses express.js and the multer libraries to implement an endpoint (/get-size) that returns the size of a file uploaded to it.

Use
=====
Navigate to the index.html page and use the file uploader to submit a file and receive a json response with the file size returned. The json response uses the following format:
{size: <File Size>}