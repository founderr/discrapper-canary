"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("689938");
let a = ["a", "b", "c", "d"],
  i = e => e;

function l(e, t) {
  let n = {},
    s = Math.min(e.length, a.length);
  for (let i = 0; i < s; ++i) n[a[i]] = (n, s) => t(e[i], s);
  return n
}
class r {
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
        return s.default.Messages.GENERIC_FORMATTED_LIST_TWO.format(l(this.items, e));
      case 3:
        return s.default.Messages.GENERIC_FORMATTED_LIST_THREE.format(l(this.items, e));
      default:
        return s.default.Messages.GENERIC_FORMATTED_LIST_FOUR.format(l(this.items, e))
    }
  }
  constructor(e) {
    var t, n, s;
    t = this, s = void 0, (n = "items") in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.items = e
  }
}