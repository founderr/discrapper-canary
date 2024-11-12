n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(606992),
    o = n(314897),
    l = n(944486),
    u = n(843693),
    c = n(576125),
    d = n(112843),
    f = n(524484),
    _ = n(981631),
    p = n(675654);
function h(e) {
    var t, n;
    let { editorHeight: r, textValue: c } = e,
        f = i.useRef(c),
        h = (0, s.Z)({ editorHeight: r }),
        m = (0, d.Z)(),
        g = (0, a.e7)([u.ZP, o.default, l.Z], () => {
            var e;
            return u.ZP.isComboing(o.default.getId(), null !== (e = l.Z.getChannelId()) && void 0 !== e ? e : _.lds);
        }),
        E = null !== (t = null == h ? void 0 : h.left) && void 0 !== t ? t : 0,
        v = (null !== (n = null == h ? void 0 : h.top) && void 0 !== n ? n : 0) - 16,
        I = i.useMemo(() => 0.05 > Math.random(), [0 === c.length]);
    return (
        i.useEffect(() => {
            0 !== c.length && c !== f.current && g && (m.fire(E, v, I ? { sprite: p.vv } : null), (f.current = c));
        }, [c, g, E, v, I, m]),
        null
    );
}
function m(e) {
    return (0, r.jsx)(c.Z, {
        confettiLocation: f.Hn.CHAT_INPUT,
        children: (0, r.jsx)(h, { ...e })
    });
}
