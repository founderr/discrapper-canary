n.d(t, {
    Y: function () {
        return o;
    },
    o: function () {
        return l;
    }
});
var r = n(18323),
    i = n(49012),
    a = n(591759),
    s = n(616922);
function o(e) {
    let t = a.Z.safeParseWithQuery(e);
    if ((null == t ? void 0 : t.protocol) != null && (null == t ? void 0 : t.hostname) != null)
        (0, i.q)({
            href: a.Z.format(t),
            trusted: !1
        });
}
function l(e, t) {
    let n = r.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(e, t) : s.C7.WEB_OPEN(e, t);
    (0, i.q)({
        href: n,
        trusted: !1
    });
}
