"use strict";
a.r(t), a.d(t, {
  transformClanBadgeColors: function() {
    return i
  }
});
var n = a("688619"),
  s = a.n(n);
let l = [{
  base: 1,
  tint: 5
}, {
  base: 2,
  tint: 1
}];

function i(e, t) {
  if (!s().valid(t)) return e;
  let a = s()(t),
    n = a.luminance();
  return e.map((e, t) => {
    let i = s()(e);
    return a.luminance((i.luminance() * l[t].base + n * l[t].tint) / (l[t].base + l[t].tint)).hex()
  })
}