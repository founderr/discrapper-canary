n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(470079),
    i = n(410030),
    a = n(695346),
    o = n(798628),
    s = n(275344),
    l = n(918088),
    u = n(562293);
function c(e, t) {
    var n;
    let c = (0, s.v)(e),
        d = (0, o.cE)(c.getChannelId())[c.id],
        _ = (0, u.Z)(null === (n = c.poll) || void 0 === n ? void 0 : n.expiry),
        E = a.Yk.useSetting(),
        f = (0, i.ZP)(),
        h = null != t ? t : f;
    return r.useMemo(
        () =>
            (0, l.ZP)(c, d, {
                animateEmoji: E,
                theme: h,
                formattedExpirationLabel: _
            }),
        [E, c, d, _, h]
    );
}
