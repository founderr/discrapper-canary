"use strict";
s.r(t);
var n, a, l, i, r = s("442837"),
  o = s("570140"),
  u = s("594174"),
  d = s("981631");
let c = null;
class E extends(i = r.default.Store) {
  getHouseMembership() {
    return c
  }
}
l = "HypeSquadStore", (a = "displayName") in(n = E) ? Object.defineProperty(n, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = l, t.default = new E(o.default, {
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