
const MainCollection = require('./main.js')


class Animals extends MainCollection {

  constructor() {
    super(id, db)
    this.fields = ['name', 'type', 'age'];
  }
  
}

module.exports = Animals