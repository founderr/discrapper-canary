var i = r(200651),
    a = r(192379),
    s = r(477660),
    o = r.n(s),
    l = r(481060),
    u = r(100527),
    c = r(906732),
    d = r(49012);
let f = 1;
n.Z = a.memo(function (e) {
    let { onClick: n, trusted: r, title: s, href: _, children: h, messageId: p, channelId: m, ...g } = e,
        { analyticsLocations: E } = (0, c.ZP)(u.Z.MASKED_LINK),
        v = a.useCallback((n) => (0, d.q)(e, n, E), [E, e]),
        I = a.useCallback(
            (e) => {
                e.button === f && v(e);
            },
            [v]
        ),
        T = o().sanitizeUrl(_);
    return (0, i.jsx)(l.Anchor, {
        ...g,
        title: s,
        target: '_blank',
        rel: 'noreferrer noopener',
        href: T,
        onClick: v,
        onAuxClick: I,
        children: null != h ? h : s
    });
});
