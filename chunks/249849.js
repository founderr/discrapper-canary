"use strict";
l.r(a), l.d(a, {
  transformClanBadgeColors: function() {
    return s
  }
});
var t = l("688619"),
  i = l.n(t);
let n = [{
  base: 1,
  tint: 5
}, {
  base: 2,
  tint: 1
}];

function s(e, a) {
  if (!i().valid(a)) return e;
  let l = i()(a),
    t = l.luminance();
  return e.map((e, a) => {
    let s = i()(e);
    return l.luminance((s.luminance() * n[a].base + t * n[a].tint) / (n[a].base + n[a].tint)).hex()
  })
}