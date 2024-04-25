"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("497189"),
  i = a("526282"),
  r = a("183993");
t.default = s.memo(function() {
  let e = (0, r.useEligibleGuildsForClans)();
  return 0 === e.length ? (0, n.jsx)(i.default, {}) : (0, n.jsx)(l.default, {
    guild: e[0]
  })
})