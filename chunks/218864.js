i.d(t, {
    Z: function () {
        return d;
    }
});
var n = i(200651),
    a = i(192379),
    r = i(481060),
    o = i(924489),
    l = i(950854),
    s = i(824606),
    c = i(735382);
function d(e) {
    var t, i, d, u, h;
    let { application: p, onClick: m, imageSrc: _, className: f, animatesOnHover: g } = e,
        x = (0, s.Z)({ application: p }),
        C = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
        b = (null !== (u = null === (i = p.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== u ? u : 0) > 0 || x.length > 0,
        I = a.useCallback(() => {
            m({ mutualGuilds: x });
        }, [m, x]),
        v = (0, n.jsx)(o.Z, {
            application: p,
            textVariant: 'text-xs/normal',
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0
        });
    return (0, n.jsx)(l.Z, {
        className: f,
        imageSrc: _,
        onClick: I,
        header: p.name,
        subheader: (0, n.jsxs)('div', {
            className: c.subheader,
            children: [
                null != C &&
                    (0, n.jsx)(r.Text, {
                        tag: 'span',
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        children: C.name
                    }),
                b &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != C &&
                                (0, n.jsx)('span', {
                                    className: c.bullet,
                                    children: '\u2022'
                                }),
                            v
                        ]
                    })
            ]
        }),
        animatesOnHover: g,
        children:
            null != p.description &&
            (0, n.jsx)('div', {
                className: c.__invalid_children,
                children: (0, n.jsx)(r.Text, {
                    className: c.listingDescription,
                    variant: 'text-sm/normal',
                    lineClamp: 2,
                    children: null !== (h = null === (d = p.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== h ? h : p.description
                })
            })
    });
}
