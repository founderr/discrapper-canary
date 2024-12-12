r.d(n, {
    vV: function () {
        return h;
    }
});
var i = r(789020);
var a = r(442837),
    s = r(271383),
    o = r(430824),
    l = r(594174),
    u = r(630388),
    c = r(372897);
let d = 86400000;
function f(e, n, r) {
    let { maxDaysOld: i, minDaysOld: a = 0 } = n,
        l = o.Z.getGuild(e),
        u = null == l ? void 0 : l.joinedAt;
    if (null != r) {
        let n = s.ZP.getMember(e, r);
        u = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
    }
    if (null == u) return !1;
    let c = Date.now() - u.getTime(),
        f = null == i || c <= d * i,
        _ = c >= d * a;
    return f && _;
}
function _(e, n, r) {
    return (0, a.e7)([], () => f(e, n, r), [n, e, r]);
}
let h = (e, n) => {
    let r = (0, a.e7)([s.ZP], () => {
            var r, i;
            return (0, u.yE)(null !== (i = null === (r = s.ZP.getMember(e, n)) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : 0, c.q.DID_REJOIN);
        }),
        i = (0, a.e7)([o.Z], () => {
            var n;
            return null === (n = o.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        d = (0, a.e7)([l.default], () => {
            var e;
            return null === (e = l.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, n) && !i && !d && !r;
};
