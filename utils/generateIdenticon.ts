const Identicon = require('identicon.js');

import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateIdenticonService {
  generateIdenticon(input: string, size = 64) {
    const hash = require('crypto')
      .createHash('md5')
      .update(input)
      .digest('hex');
    const data = new Identicon(hash, size).toString();

    return `data:image/png;base64,${data}`;
  }
}
