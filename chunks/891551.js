var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(846027),
    o = n(793148),
    c = n(131951),
    d = n(36703),
    u = n(358085),
    h = n(618158),
    p = n(3910);
t.Z = r.ZP.connectStores([c.Z], (e) => {
    let { userId: t, context: n } = e;
    return {
        currentVolume: c.Z.getLocalVolume(t, n),
        muted: c.Z.isLocalMute(t, n)
    };
})(function (e) {
    let { className: t, iconClassName: n, sliderClassName: l, userId: r, currentVolume: c, muted: m, context: f, currentWindow: g = window } = e;
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(o.Z, {
            currentWindow: g,
            iconClassName: a()(n, p.controlIcon),
            sliderClassName: l,
            className: t,
            value: (0, d.P)(c),
            muted: m,
            maxValue: u.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                var t, n, i, l;
                return (t = e), (n = r), (i = m), (l = f), void (t > 0 && i && s.Z.toggleLocalMute(n, l), s.Z.setLocalVolume(n, (0, d.A)(t), l));
            },
            onToggleMute: () => {
                var e, t;
                return (e = r), (t = f), void s.Z.toggleLocalMute(e, t);
            }
        })
    });
});
