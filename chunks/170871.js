n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(979264),
    u = n(308083),
    m = n(984094);
function g(e) {
    let { className: t, clanTag: n, clanBadge: r, onTagClick: g, guildId: h, guildName: p, guildIcon: x, guildIconSize: T, memberCount: S } = e,
        _ = s.useRef(null),
        [E, C] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = _.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && C(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: l()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: h,
                            guildName: p,
                            guildIcon: x,
                            iconSize: T,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, i.jsx)(a.Tooltip, {
                                    text: p,
                                    color: a.Tooltip.Colors.PRIMARY,
                                    shouldShow: E,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ref: _,
                                            ...e,
                                            className: m.guildName,
                                            children: p
                                        })
                                }),
                                null != S && (0, i.jsx)(c.Z, { count: S })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, i.jsx)(d.aG, {
                        guildId: h,
                        className: m.tag,
                        clanTag: n,
                        clanBadge: r,
                        onClick: g,
                        badgeSize: u.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: m.badge
                    })
                })
            ]
        })
    );
}
