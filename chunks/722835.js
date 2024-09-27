n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(553813),
    a = n.n(i),
    s = n(872810),
    r = n(579806),
    l = n(594190),
    o = n(199902),
    c = n(592125),
    d = n(430824),
    u = n(131951),
    _ = n(496675),
    h = n(944486),
    E = n(449224),
    m = n(358085),
    I = n(382182),
    g = n(74299),
    p = n(299570),
    T = n(960861),
    f = n(989941),
    S = n(70722);
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(0, g.Z)(u.Z) || null != o.Z.getCurrentUserActiveStream()) return !1;
    let t = h.Z.getVoiceChannelId(),
        n = c.Z.getChannel(t);
    if (null == n) return !1;
    let i = n.getGuildId();
    if (!(0, I.JL)(n, d.Z, _.Z, !1)) return !1;
    if (T.ZP.enabled()) (0, m.isMac)() && a().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, S.jR) ? (0, p.T)() : (0, p.T)('window');
    else {
        let t = (0, f.Z)(l.ZP, E.Z);
        if (null == t || (t.isLauncher && !e)) return !1;
        (0, s.WH)(i, n.id, { pid: t.pid });
    }
    return !0;
}
