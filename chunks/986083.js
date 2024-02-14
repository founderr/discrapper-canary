"use strict";
n("854508"), e.exports = function(e, t, r) {
  var a, o, i, s, c = {},
    l = 0,
    u = !1;
  for (o = 0, a = this.getMatches(e, t, r); o < a.length; ++o) a[o].seq && (l = Math.max(l, a[o].level));
  for (o = 0; o < a.length; ++o) {
    if (a[o].seq) {
      if (a[o].level !== l) continue;
      u = !0, c[a[o].seq] = 1, this.fireCallback(a[o].callback, r, a[o].combo, a[o].seq);
      continue
    }!u && this.fireCallback(a[o].callback, r, a[o].combo)
  }
  s = "keypress" === r.type && this.ignoreNextKeypress, i = n("275750"), r.type === this.nextExpectedAction && !i(e) && !s && this.resetSequences(c), this.ignoreNextKeypress = u && "keydown" === r.type
}