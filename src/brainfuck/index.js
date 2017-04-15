'use strict';

import _ from 'lodash';
const overflowPoint = 256;

class Brainfuck {
  decode(string) {
    const characterPieces = _.trim(string, '.').split('.');

    return _.flow([
      this._transformToCharLengths,
      this._transformToAsciiCodes,
      this._transformToAsciiChars
    ])(characterPieces);
  }

  _transformToCharLengths(characterPieces) {
    return characterPieces.map(val => val.length);
  }

  _transformToAsciiCodes(charLengths) {
    return charLengths.map((val, idx, map) => {
      const prevAsciiCode = map[idx - 1] || 0;
      let asciiCode = val + prevAsciiCode;
      if (asciiCode >= overflowPoint) {
        asciiCode -= overflowPoint;
      }

      map[idx] = asciiCode;
      return asciiCode;
    });
  }

  _transformToAsciiChars(asciiCodes) {
    return asciiCodes.reduce((acc, asciiCode) => {
      return acc + String.fromCharCode(asciiCode);
    }, '');
  }

  static create() {
    return new Brainfuck();
  }
}
module.exports = Brainfuck;