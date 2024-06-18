"use strict";
n.d(t, {
  u: function() {
    return d
  }
}), n(653041);
var i = n(853856),
  r = n(706590),
  s = n(703656),
  o = n(769654),
  a = n(592125),
  l = n(496675),
  u = n(914010),
  _ = n(771845),
  c = n(981631);
let d = {
  binds: (() => {
    let e = [];
    for (let t = 1; t < 10; t++) e.push("mod+".concat(t));
    return e
  })(),
  comboKeysBindGlobal: !0,
  action(e, t) {
    let n, d = parseInt(t.split("+")[1], 10);
    return (0 === d && (d = 10), isNaN(d) || 0 === d || null == (n = 1 === d ? c.ME : (0, r.z)(i.Z, a.Z, l.Z) ? 2 === d ? c.I_8 : _.ZP.getFlattenedGuildIds()[d - 3] : _.ZP.getFlattenedGuildIds()[d - 2])) ? void 0 : n === c.ME && null == u.Z.getGuildId() ? ((0, s.uL)(c.Z5c.CHANNEL(n)), !1) : ((0, o.X)(n), !1)
  }
}