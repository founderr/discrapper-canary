"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("689938");
let i = ["a", "b", "c", "d"],
  l = e => e;

function a(e, t) {
  let s = {},
    n = Math.min(e.length, i.length);
  for (let l = 0; l < n; ++l) s[i[l]] = (s, n) => t(e[l], n);
  return s
}
class r {
  asString() {
    return this.transformed(l)
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
        return n.default.Messages.GENERIC_FORMATTED_LIST_TWO.format(a(this.items, e));
      case 3:
        return n.default.Messages.GENERIC_FORMATTED_LIST_THREE.format(a(this.items, e));
      default:
        return n.default.Messages.GENERIC_FORMATTED_LIST_FOUR.format(a(this.items, e))
    }
  }
  constructor(e) {
    var t, s, n;
    t = this, n = void 0, (s = "items") in t ? Object.defineProperty(t, s, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = n, this.items = e
  }
}