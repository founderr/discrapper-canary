var n, a, i, r, l = s(442837),
  o = s(570140),
  c = s(594174),
  E = s(981631);
let _ = null;
class u extends(r = l.ZP.Store) {
  getHouseMembership() {
    return _
  }
}
i = "HypeSquadStore", (a = "displayName") in(n = u) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i, t.Z = new u(o.Z, {
  CONNECTION_OPEN: function() {
    let e = c.default.getCurrentUser();
    null != e && (e.hasFlag(E.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? _ = E.gkr.HOUSE_1 : e.hasFlag(E.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? _ = E.gkr.HOUSE_2 : e.hasFlag(E.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (_ = E.gkr.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    _ = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    _ = e.houseID
  }
})