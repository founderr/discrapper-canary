r.d(n, {
    J: function () {
        return f;
    },
    n: function () {
        return d;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(271383),
    o = r(430824),
    l = r(607744),
    u = r(594174),
    c = r(983736);
function d(e) {
    let [n, r, i, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.Z, u.default, s.ZP];
    if (null == e) return !1;
    let d = n.getGuild(e),
        { notClaimed: f } = r.getCheck(e),
        _ = i.getCurrentUser(),
        h = !1;
    if (null != _) {
        var p, m;
        h = null !== (m = null === (p = a.getMember(e, _.id)) || void 0 === p ? void 0 : p.isPending) && void 0 !== m && m;
    }
    return (h || f) && !!(0, c.Dc)(d);
}
function f(e) {
    return (0, a.e7)([o.Z, l.Z, u.default, s.ZP], () => null != e && d(e, [o.Z, l.Z, u.default, s.ZP]), [e]);
}
