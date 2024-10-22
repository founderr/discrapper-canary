t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(114487),
    c = t(219039),
    d = t(979264),
    _ = t(308083),
    u = t(403893);
function E(e) {
    let { className: s, clanTag: t, clanBadge: i, onTagClick: E, guildId: T, guildName: S, guildIcon: I, guildIconSize: N, memberCount: m } = e,
        C = a.useRef(null),
        [A, g] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = C.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && g(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, n.jsxs)('div', {
            className: r()(u.container, s),
            children: [
                (0, n.jsxs)('div', {
                    className: u.guildPrefixContainer,
                    children: [
                        (0, n.jsx)(l.b, {
                            guildId: T,
                            guildName: S,
                            guildIcon: I,
                            iconSize: N,
                            className: u.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, n.jsxs)('div', {
                            className: u.details,
                            children: [
                                (0, n.jsx)(o.Tooltip, {
                                    text: S,
                                    color: o.Tooltip.Colors.PRIMARY,
                                    shouldShow: A,
                                    children: (e) =>
                                        (0, n.jsx)('span', {
                                            ref: C,
                                            ...e,
                                            className: u.guildName,
                                            children: S
                                        })
                                }),
                                null != m && (0, n.jsx)(c.Z, { count: m })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: u.tagContainer,
                    children: (0, n.jsx)(d.aG, {
                        guildId: T,
                        className: u.tag,
                        clanTag: t,
                        clanBadge: i,
                        onClick: E,
                        badgeSize: _.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: u.badge
                    })
                })
            ]
        })
    );
}
