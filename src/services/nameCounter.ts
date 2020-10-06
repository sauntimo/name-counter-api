import fs from 'fs';
// eslint-disable-next-line
const StreamSearch = require('streamsearch');

import { INameCounter } from '../entities/NameCounter';

export default class NameCounter {

  private readonly textFilePath = './inputs/oliver-twist.txt';

  /**
   * Takes a name and returns it titlecased and the count of occurrences in Oliver Twist
   * @param name name a name to search the text for
   */
  public countName = async (name: string): Promise<INameCounter> => {

    const needle = Buffer.from(name, 'utf8')
    const streamSearch = new StreamSearch(needle);
    const readStream = fs.createReadStream(this.textFilePath, 'utf8');

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
  }
}
