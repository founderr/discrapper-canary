var r = n(200651),
    i = n(192379),
    a = n(302454),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(49012);
t.Z = i.memo(function (e) {
    let { onClick: t, trusted: n, title: a, href: d, children: f, messageId: _, channelId: h, ...p } = e,
        { analyticsLocations: m } = (0, u.ZP)(l.Z.MASKED_LINK),
        g = i.useCallback((t) => (0, c.q)(e, t, m), [m, e]),
        E = i.useCallback(
            (e) => {
                1 === e.button && g(e);
            },
            [g]
        ),
        v = s().sanitizeUrl(d);
    return (0, r.jsx)(o.Anchor, {
        ...p,
        title: a,
        target: '_blank',
        rel: 'noreferrer noopener',
        href: v,
        onClick: g,
        onAuxClick: E,
        children: null != f ? f : a
    });
});
