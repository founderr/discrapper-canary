n.d(t, {
    Z: function () {
        return h;
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
function h(e) {
    let { className: t, clanTag: n, clanBadge: r, onTagClick: h, guildId: g, guildName: p, guildIcon: x, guildIconSize: S, memberCount: T } = e,
        E = s.useRef(null),
        [C, _] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = E.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && _(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: l()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: g,
                            guildName: p,
                            guildIcon: x,
                            iconSize: S,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, i.jsx)(a.Tooltip, {
                                    text: p,
                                    color: a.Tooltip.Colors.PRIMARY,
                                    shouldShow: C,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ref: E,
                                            ...e,
                                            className: m.guildName,
                                            children: p
                                        })
                                }),
                                null != T && (0, i.jsx)(c.Z, { count: T })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, i.jsx)(d.aG, {
                        guildId: g,
                        className: m.tag,
                        clanTag: n,
                        clanBadge: r,
                        onClick: h,
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
