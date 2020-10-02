"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const StreamSearch = require('streamsearch');
class NameCounter {
    constructor() {
        this.textFilePath = path_1.default.join(__dirname, '../inputs/oliver-twist.txt');
        this.countName = (name) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const titleCasedName = name[0].toUpperCase() + name.substr(1).toLowerCase();
            let needle = Buffer.from(titleCasedName, 'utf8');
            let streamSearch = new StreamSearch(needle);
            const readStream = fs_1.default.createReadStream(this.textFilePath, 'utf8');
            return new Promise((resolve, reject) => {
                readStream.on('data', (chunk) => {
                    streamSearch.push(chunk);
                }).on('end', () => {
                    resolve({
                        name: titleCasedName,
                        count: streamSearch.matches,
                    });
                });
            });
        });
    }
}
exports.default = NameCounter;
