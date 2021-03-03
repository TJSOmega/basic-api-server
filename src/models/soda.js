const MainCollection = require('./main.js')

class Soda extends MainCollection {

  constructor() {
    super(id, db)
    this.fields = ['name', 'flavor', 'color'];
  }
  
  
}


module.exports = Soda