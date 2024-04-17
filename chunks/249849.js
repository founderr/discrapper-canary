"use strict";
l.r(e), l.d(e, {
  transformClanBadgeColors: function() {
    return s
  }
});
var t = l("688619"),
  n = l.n(t);
let i = [{
  base: 1,
  tint: 5
}, {
  base: 2,
  tint: 1
}];

function s(a, e) {
  if (!n().valid(e)) return a;
  let l = n()(e),
    t = l.luminance();
  return a.map((a, e) => {
    let s = n()(a);
    return l.luminance((s.luminance() * i[e].base + t * i[e].tint) / (i[e].base + i[e].tint)).hex()
  })
}