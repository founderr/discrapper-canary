    "use strict";
    var n = e("962557"),
      i = Function.prototype,
      o = i.apply,
      u = i.call;
    r.exports = "object" == typeof Reflect && Reflect.apply || (n ? u.bind(o) : function() {
      return u.apply(o, arguments)
    })