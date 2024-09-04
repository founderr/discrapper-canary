a.d(t, {
    Z: function () {
        return c;
    }
});
var n = a(470079),
    l = a(442837),
    s = a(592125),
    r = a(594174),
    i = a(292584),
    o = a(158631);
function c(e) {
    var t;
    let a = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
        c = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
        d = (0, l.e7)([i.Z], () => (null != e ? i.Z.getBroadcastByChannel(e) : null)),
        u = (0, o.ZP)(),
        m = n.useMemo(() => {
            var e, t;
            return null !== (t = null == c ? void 0 : null === (e = c.recipients) || void 0 === e ? void 0 : e.map((e) => r.default.getUser(e)).filter((e) => null != e && e.id !== (null == d ? void 0 : d.userId))) && void 0 !== t ? t : [];
        }, [null == d ? void 0 : d.userId, null == c ? void 0 : c.recipients]);
    return null == a ? [] : u ? m : null !== (t = m.length > 0 ? [a].concat(m) : null == d ? void 0 : d.viewers) && void 0 !== t ? t : [];
}
