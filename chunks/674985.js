var s, i, a, l, r = n(442837),
  c = n(570140),
  o = n(594174),
  d = n(981631);
let u = null;
class E extends(l = r.ZP.Store) {
  getHouseMembership() {
    return u
  }
}
a = "HypeSquadStore", (i = "displayName") in(s = E) ? Object.defineProperty(s, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = a, t.Z = new E(c.Z, {
  CONNECTION_OPEN: function() {
    let e = o.default.getCurrentUser();
    null != e && (e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? u = d.gkr.HOUSE_1 : e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? u = d.gkr.HOUSE_2 : e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (u = d.gkr.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    u = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    u = e.houseID
  }
})