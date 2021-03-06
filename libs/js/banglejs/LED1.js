(function() { // by @allObjects
  return { 
    _v: false, // status on / off
    read: function() { return this._v; },
    set: function() { this.write(1); },
    reset: function() { this.write(0); },
    write: function(v) { g.setColor((this._v=!!v)?1:0,0,0).fillCircle(110,5,5).flip(); },
    toggle: function() { this.write(!this._v); }
  };
})
