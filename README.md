# f4t
A package for formatting times.

## Usage
w = weeks, d = days, h = hours, m = minutes, s = seconds, ms = milli seconds
```js
const { decode, encode } = require('f4t');

console.log(decode('2w3d18h40m3s2ms')); // 153960003002
console.log(encode(1536003002)); // '2w3d18h40m3s2ms'
console.log(decode('abc')); // NaN
console.log(encode(-1000)); // NaN
console.log(decode('0ms')); // 0
console.log(encode(0)); // '0ms'

// encode(milliseconds, formatOption);
// The usage of time symbols is restricted by formatOption (The use of 'ms' cannot be restricted).
console.log(encode(1536003002, ['w'])); // '17d18h40m3s2ms'
console.log(encode(1536003002, ['w', 's'])); // '17d18h40m3002ms'
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>