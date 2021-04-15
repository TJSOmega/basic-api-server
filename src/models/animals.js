
const MainCollection = require('./main.js')


class Animals extends MainCollection {

  constructor() {
    super (0, [])
    this.fields = ['name', 'type', 'age'];
  }
  
}

module.exports = Animals