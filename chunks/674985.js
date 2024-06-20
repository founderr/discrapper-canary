var s, a, i, l, r = n(442837),
  c = n(570140),
  o = n(594174),
  d = n(981631);
let u = null;
class E extends(l = r.ZP.Store) {
  getHouseMembership() {
    return u
  }
}
i = "HypeSquadStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i, t.Z = new E(c.Z, {
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