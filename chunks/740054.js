let r;
n.d(e, {
  c: function() {
    return a
  }
});
var i = n(442853);
class a {
  constructor() {
    a.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "FunctionToString"
  }
  __init() {
    this.name = a.id
  }
  setupOnce() {
    r = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...t) {
        let e = (0, i.HK)(this) || this;
        return r.apply(e, t)
      }
    } catch (t) {}
  }
}
a.__initStatic()