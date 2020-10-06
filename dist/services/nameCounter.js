"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const StreamSearch = require('streamsearch');
class NameCounter {
    constructor() {
        this.textFilePath = './inputs/oliver-twist.txt';
        this.countName = (name) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const needle = Buffer.from(name, 'utf8');
            const streamSearch = new StreamSearch(needle);
            const readStream = fs_1.default.createReadStream(this.textFilePath, 'utf8');
            return new Promise((resolve) => {
                readStream.on('data', (chunk) => {
                    streamSearch.push(chunk);
                }).on('end', () => {
                    resolve({
                        name,
                        count: streamSearch.matches,
                    });
                });
            });
        });
    }
}
exports.default = NameCounter;
