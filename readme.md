# emojify-shorten

[![Build Status](https://travis-ci.org/jlobos/emojify-shorten.svg?branch=master)](https://travis-ci.org/jlobos/emojify-shorten)

Shorten your links with emoji by [Emojify](http://emojify.tk) 🎉

> Emojify converts your regular links to fun and exciting emoji links. Add a personal touch to your posts or make your links more consistent with your branding! – [Emojify](http://emojify.tk/about)

## Install

```
$ npm install --save emojify-shorten
```

## Usage

```js
const emojify = require('emojify-shorten')

emojify('www.google.com').then(console.log)
/*
[ 'http://emojify.tk/c',
  'http://⛷.cf/c',
  'http://🍷.ga/c',
  'http://🍸.ga/c',
  'http://🍹.cf/c',
  'http://🍾.cf/c',
  'http://🎖.tk/c',
  'http://🎤.tk/c',
  'http://🎬.tk/c', ...
*/
```

## License

MIT © [Jesús Lobos](http://jlobos.com)
