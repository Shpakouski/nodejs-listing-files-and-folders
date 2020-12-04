#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, fileNames) => {
    if (err) {
        throw new Error(err);
    }
    console.log(fileNames);
});