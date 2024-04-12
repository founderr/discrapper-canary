"use strict";
n.r(t), n.d(t, {
  transformClanBadgeColors: function() {
    return i
  }
});
var a = n("688619"),
  s = n.n(a);
let l = [{
  base: 1,
  tint: 5
}, {
  base: 2,
  tint: 1
}];

function i(e, t) {
  if (!s().valid(t)) return e;
  let n = s()(t),
    a = n.luminance();
  return e.map((e, t) => {
    let i = s()(e);
    return n.luminance((i.luminance() * l[t].base + a * l[t].tint) / (l[t].base + l[t].tint)).hex()
  })
}