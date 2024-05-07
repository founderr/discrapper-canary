"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("594174"),
  d = n("981631");
let c = null;
class f extends(l = r.default.Store) {
  getHouseMembership() {
    return c
  }
}
i = "HypeSquadStore", (s = "displayName") in(a = f) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new f(o.default, {
  CONNECTION_OPEN: function() {
    let e = u.default.getCurrentUser();
    null != e && (e.hasFlag(d.UserFlags.HYPESQUAD_ONLINE_HOUSE_1) ? c = d.HypeSquadHouses.HOUSE_1 : e.hasFlag(d.UserFlags.HYPESQUAD_ONLINE_HOUSE_2) ? c = d.HypeSquadHouses.HOUSE_2 : e.hasFlag(d.UserFlags.HYPESQUAD_ONLINE_HOUSE_3) && (c = d.HypeSquadHouses.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    c = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    c = e.houseID
  }
})