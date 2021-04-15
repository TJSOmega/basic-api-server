const MainCollection = require('./main.js')

class Soda extends MainCollection {

  constructor() {
    super (0, [])
    this.fields = ['name', 'flavor', 'color'];
  }
  
  
}


module.exports = Soda