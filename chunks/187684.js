    "use strict";
    var n = e("936940"),
      i = e("879");
    r.exports = !n(function() {
      var r = Error("a");
      return !("stack" in r) || (Object.defineProperty(r, "stack", i(1, 7)), 7 !== r.stack)
    })