"use strict";
n("424973"), n("854508"), e.exports = function(e, t) {
  var r, a, o, i, s, c, l = [];
  for (o = 0, r = n("87552")(e), i = n("973809"), s = n("325688"), c = n("275750"); o < r.length; ++o) i[a = r[o]] && (a = i[a]), t && "keypress" !== t && s[a] && (a = s[a], l.push("shift")), c(a) && l.push(a);
  return t = this.pickBestAction(a, l, t), {
    key: a,
    modifiers: l,
    action: t
  }
}