const dotenv = require('dotenv')
const message = require('./message')
const fs = require('fs')

dotenv.config()
const NAME = process.env.NAME
const NUMBER = process.env.NUMBER

const result = message.create(NAME, NUMBER)

fs.writeFile('result.txt', result, (err) => {
    if (err) {
      console.error('Error!!', err);
    } else {
      console.log('Success!!');
    }
  })