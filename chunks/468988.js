n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(689938);
let i = ["a", "b", "c", "d"],
  l = e => e;

function a(e, t) {
  let n = {},
    s = Math.min(e.length, i.length);
  for (let l = 0; l < s; ++l) n[i[l]] = (n, s) => t(e[l], s);
  return n
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
        return s.Z.Messages.GENERIC_FORMATTED_LIST_TWO.format(a(this.items, e));
      case 3:
        return s.Z.Messages.GENERIC_FORMATTED_LIST_THREE.format(a(this.items, e));
      default:
        return s.Z.Messages.GENERIC_FORMATTED_LIST_FOUR.format(a(this.items, e))
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