"use strict";
var r = n("859514"),
  a = n("868822");
r({
  target: "URL",
  proto: !0,
  enumerable: !0
}, {
  toJSON: function() {
    return a(URL.prototype.toString, this)
  }
})