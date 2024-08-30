t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(114487),
    c = t(219039),
    d = t(979264),
    u = t(308083),
    _ = t(703422);
function E(e) {
    let { className: s, clanTag: t, clanBadge: i, onTagClick: E, guildId: T, guildName: I, guildIcon: S, guildIconSize: N, memberCount: m } = e,
        C = a.useRef(null),
        [g, A] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = C.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, n.jsxs)('div', {
            className: r()(_.container, s),
            children: [
                (0, n.jsxs)('div', {
                    className: _.guildPrefixContainer,
                    children: [
                        (0, n.jsx)(l.b, {
                            guildId: T,
                            guildName: I,
                            guildIcon: S,
                            iconSize: N,
                            className: _.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, n.jsxs)('div', {
                            className: _.details,
                            children: [
                                (0, n.jsx)(o.Tooltip, {
                                    text: I,
                                    color: o.Tooltip.Colors.PRIMARY,
                                    shouldShow: g,
                                    children: (e) =>
                                        (0, n.jsx)('span', {
                                            ref: C,
                                            ...e,
                                            className: _.guildName,
                                            children: I
                                        })
                                }),
                                null != m && (0, n.jsx)(c.Z, { count: m })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: _.tagContainer,
                    children: (0, n.jsx)(d.aG, {
                        guildId: T,
                        className: _.tag,
                        clanTag: t,
                        clanBadge: i,
                        onClick: E,
                        badgeSize: u.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: _.badge
                    })
                })
            ]
        })
    );
}
