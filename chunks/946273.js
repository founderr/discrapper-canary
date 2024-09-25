n.d(t, {
    vV: function () {
        return E;
    }
});
var r = n(789020);
var i = n(442837),
    a = n(271383),
    o = n(430824),
    s = n(594174),
    l = n(630388),
    u = n(372897);
let c = 86400000;
function d(e, t, n) {
    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
        s = o.Z.getGuild(e),
        l = null == s ? void 0 : s.joinedAt;
    if (null != n) {
        let t = a.ZP.getMember(e, n);
        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let u = Date.now() - l.getTime(),
        d = null == r || u <= c * r,
        _ = u >= c * i;
    return d && _;
}
function _(e, t, n) {
    return (0, i.e7)([], () => d(e, t, n), [t, e, n]);
}
let E = (e, t) => {
    let n = (0, i.e7)([a.ZP], () => {
            var n, r;
            return (0, l.yE)(null !== (r = null === (n = a.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, u.q.DID_REJOIN);
        }),
        r = (0, i.e7)([o.Z], () => {
            var t;
            return null === (t = o.Z.getGuild(e)) || void 0 === t ? void 0 : t.isNew();
        }),
        c = (0, i.e7)([s.default], () => {
            var e;
            return null === (e = s.default.getUser(t)) || void 0 === e ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, t) && !r && !c && !n;
};
