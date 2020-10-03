import fs from 'fs';
import path from 'path';
const StreamSearch = require('streamsearch');

import { INameCounter } from '../entities/NameCounter';

export default class NameCounter {

  private readonly textFilePath = './inputs/oliver-twist.txt';

  public countName = async (name: string): Promise<INameCounter> => {

    const titleCasedName = name[0].toUpperCase() + name.substr(1).toLowerCase();
    let needle = Buffer.from(titleCasedName, 'utf8')
    let streamSearch = new StreamSearch(needle);
    const readStream = fs.createReadStream(this.textFilePath, 'utf8');

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
  }
}
