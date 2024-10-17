var s,
    a,
    r,
    i,
    l = n(442837),
    o = n(570140),
    c = n(594174),
    _ = n(981631);
let d = null;
class E extends (i = l.ZP.Store) {
    getHouseMembership() {
        return d;
    }
}
(r = 'HypeSquadStore'),
    (a = 'displayName') in (s = E)
        ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = r),
    (t.Z = new E(o.Z, {
        CONNECTION_OPEN: function () {
            let e = c.default.getCurrentUser();
            null != e && (e.hasFlag(_.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? (d = _.gkr.HOUSE_1) : e.hasFlag(_.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? (d = _.gkr.HOUSE_2) : e.hasFlag(_.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (d = _.gkr.HOUSE_3));
        },
        HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function () {
            d = null;
        },
        HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function (e) {
            d = e.houseID;
        }
    }));
