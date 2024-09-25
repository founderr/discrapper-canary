var r = n(735250),
    i = n(470079),
    a = n(302454),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(49012);
let d = 1;
t.Z = i.memo(function (e) {
    let { onClick: t, trusted: n, title: a, href: _, children: E, messageId: f, channelId: h, ...p } = e,
        { analyticsLocations: m } = (0, u.ZP)(l.Z.MASKED_LINK),
        I = i.useCallback((t) => (0, c.q)(e, t, m), [m, e]),
        T = i.useCallback(
            (e) => {
                e.button === d && I(e);
            },
            [I]
        ),
        g = o().sanitizeUrl(_);
    return (0, r.jsx)(s.Anchor, {
        ...p,
        title: a,
        target: '_blank',
        rel: 'noreferrer noopener',
        href: g,
        onClick: I,
        onAuxClick: T,
        children: null != E ? E : a
    });
});
