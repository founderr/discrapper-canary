"use strict";
n.r(t), n("653041");
var i, r, s, a, o = n("442837"),
  l = n("570140"),
  u = n("353926"),
  d = n("650774"),
  _ = n("771845"),
  c = n("280234");
let E = [];

function I() {
  E = [];
  let {
    isGuildMemberListEnabled: e
  } = c.default.getCurrentConfig({
    location: "RecentlyOnlineExperimentPriorityGuildsStore"
  }, {
    autoTrackExposure: !1
  });
  if (!e) return;
  let t = _.default.getFlattenedGuildIds();
  for (let e = 0; e < t.length; e++) {
    let n = t[e],
      i = d.default.getMemberCount(n);
    if (null != i && i <= 95 && (E.push(n), E.length >= 5)) return
  }
}
class T extends(i = o.default.Store) {
  initialize() {
    this.syncWith([d.default, _.default, u.default], I), I()
  }
  getPriorityGuilds() {
    return E
  }
}
a = "RecentlyOnlineExperimentPriorityGuildsStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new T(l.default, {})