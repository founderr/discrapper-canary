t.d(n, {
  Z: function() {
    return a
  }
});
var i = t(689938);
let l = ["a", "b", "c", "d"],
  s = e => e;

function r(e, n) {
  let t = {},
    i = Math.min(e.length, l.length);
  for (let s = 0; s < i; ++s) t[l[s]] = (t, i) => n(e[s], i);
  return t
}
class a {
  asString() {
    return this.transformed(s)
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
        return i.Z.Messages.GENERIC_FORMATTED_LIST_TWO.format(r(this.items, e));
      case 3:
        return i.Z.Messages.GENERIC_FORMATTED_LIST_THREE.format(r(this.items, e));
      default:
        return i.Z.Messages.GENERIC_FORMATTED_LIST_FOUR.format(r(this.items, e))
    }
  }
  constructor(e) {
    var n, t, i;
    n = this, i = void 0, (t = "items") in n ? Object.defineProperty(n, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : n[t] = i, this.items = e
  }
}