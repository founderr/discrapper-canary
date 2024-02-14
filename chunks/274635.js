"use strict";
var n = e("859514"),
  i = e("868822");
n({
  target: "URL",
  proto: !0,
  enumerable: !0
}, {
  toJSON: function() {
    return i(URL.prototype.toString, this)
  }
})