var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(442837),
    a = n(846027),
    o = n(793148),
    c = n(131951),
    u = n(36703),
    d = n(358085),
    h = n(618158),
    m = n(3910);
t.Z = s.ZP.connectStores([c.Z], (e) => {
    let { userId: t, context: n } = e;
    return {
        currentVolume: c.Z.getLocalVolume(t, n),
        muted: c.Z.isLocalMute(t, n)
    };
})(function (e) {
    let { className: t, iconClassName: n, sliderClassName: l, userId: s, currentVolume: c, muted: p, context: f, currentWindow: g = window } = e;
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(o.Z, {
            currentWindow: g,
            iconClassName: r()(n, m.controlIcon),
            sliderClassName: l,
            className: t,
            value: (0, u.P)(c),
            muted: p,
            maxValue: d.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                var t, n, i, l;
                return (t = e), (n = s), (i = p), (l = f), void (t > 0 && i && a.Z.toggleLocalMute(n, l), a.Z.setLocalVolume(n, (0, u.A)(t), l));
            },
            onToggleMute: () => {
                var e, t;
                return (e = s), (t = f), void a.Z.toggleLocalMute(e, t);
            }
        })
    });
});
