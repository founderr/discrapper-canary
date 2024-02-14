"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, a = n("782340");
let s = ["a", "b", "c", "d"],
  i = e => e;

function r(e, t) {
  let n = {},
    l = Math.min(e.length, s.length);
  for (let a = 0; a < l; ++a) n[s[a]] = (n, l) => t(e[a], l);
  return n
}
l = class {
  asString() {
    return this.transformed(i)
  }
  isEmpty() {
    return 0 === this.items.length
  }
  transformed(e) {
    switch (this.items.length) {
      case 0:
        return "";
      case 1:
        return e(this.items[0], "");
      case 2:
        return a.default.Messages.GENERIC_FORMATTED_LIST_TWO.format(r(this.items, e));
      case 3:
        return a.default.Messages.GENERIC_FORMATTED_LIST_THREE.format(r(this.items, e));
      default:
        return a.default.Messages.GENERIC_FORMATTED_LIST_FOUR.format(r(this.items, e))
    }
  }
  constructor(e) {
    this.items = e
  }
}