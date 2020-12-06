#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
// const lstat = fs.promises.lstat;
const {
    lstat
} = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        throw new Error(err);
    }

    for (let filename of filenames) {
        try {
            const stats = await lstat(filename);

            console.log(filename, stats.isFile());
        } catch (err) {
            throw new Error(err);
        }
    }
});

// Method #1
// const lstat = filename => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(stats);
//         })
//     });
// }