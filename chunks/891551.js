var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(846027),
    o = n(793148),
    c = n(131951),
    u = n(36703),
    d = n(358085),
    h = n(618158),
    p = n(3910);
t.Z = l.ZP.connectStores([c.Z], (e) => {
    let { userId: t, context: n } = e;
    return {
        currentVolume: c.Z.getLocalVolume(t, n),
        muted: c.Z.isLocalMute(t, n)
    };
})(function (e) {
    let { className: t, iconClassName: n, sliderClassName: s, userId: l, currentVolume: c, muted: m, context: _, currentWindow: f = window } = e;
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(o.Z, {
            currentWindow: f,
            iconClassName: a()(n, p.controlIcon),
            sliderClassName: s,
            className: t,
            value: (0, u.P)(c),
            muted: m,
            maxValue: d.isPlatformEmbedded ? 200 : 100,
            onValueChange: (e) => {
                var t, n, i, s;
                return (t = e), (n = l), (i = m), (s = _), void (t > 0 && i && r.Z.toggleLocalMute(n, s), r.Z.setLocalVolume(n, (0, u.A)(t), s));
            },
            onToggleMute: () => {
                var e, t;
                return (e = l), (t = _), void r.Z.toggleLocalMute(e, t);
            }
        })
    });
});
