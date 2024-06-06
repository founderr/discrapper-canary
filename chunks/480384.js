"use strict";
n.r(t), n("653041");
var i, r, s, a, o = n("442837"),
  l = n("570140"),
  u = n("650774"),
  d = n("771845");
let _ = [];

function c() {
  _ = [];
  let e = d.default.getFlattenedGuildIds();
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      i = u.default.getMemberCount(n);
    if (null != i && i >= 2 && i <= 95 && (_.push(n), _.length >= 5)) return
  }
}
class E extends(i = o.default.Store) {
  initialize() {
    this.syncWith([u.default, d.default], c), c()
  }
  getPriorityGuilds() {
    return _
  }
}
a = "RecentlyOnlineExperimentPriorityGuildsStore", (s = "displayName") in(r = E) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new E(l.default, {})