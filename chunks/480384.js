"use strict";
n.r(t), n("653041");
var i, r, s, a, o = n("442837"),
  l = n("570140"),
  u = n("353926"),
  d = n("650774"),
  _ = n("771845");
let c = [];

function E() {
  c = [];
  let e = _.default.getFlattenedGuildIds();
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      i = d.default.getMemberCount(n);
    if (null != i && i >= 2 && i <= 95 && (c.push(n), c.length >= 5)) return
  }
}
class I extends(i = o.default.Store) {
  initialize() {
    this.syncWith([d.default, _.default, u.default], E), E()
  }
  getPriorityGuilds() {
    return c
  }
}
a = "RecentlyOnlineExperimentPriorityGuildsStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new I(l.default, {})