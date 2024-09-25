i.d(t, {
    Z: function () {
        return d;
    }
});
var n = i(735250),
    a = i(470079),
    r = i(481060),
    s = i(924489),
    o = i(950854),
    l = i(491576),
    c = i(735382);
function d(e) {
    var t, i, d, u, h;
    let { application: _, onClick: p, imageSrc: m, className: g, animatesOnHover: C } = e,
        x = (0, l.Z)({ application: _ }),
        f = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        I = (null !== (u = null === (i = _.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== u ? u : 0) > 0 || x.length > 0,
        b = a.useCallback(() => {
            p({ mutualGuilds: x });
        }, [p, x]),
        N = (0, n.jsx)(s.Z, {
            application: _,
            textVariant: 'text-xs/normal',
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        });
    return (0, n.jsx)(o.Z, {
        className: g,
        imageSrc: m,
        onClick: b,
        header: _.name,
        subheader: (0, n.jsxs)('div', {
            className: c.subheader,
            children: [
                null != f &&
                    (0, n.jsx)(r.Text, {
                        tag: 'span',
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        children: f.name
                    }),
                I &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != f &&
                                (0, n.jsx)('span', {
                                    className: c.bullet,
                                    children: '\u2022'
                                }),
                            N
                        ]
                    })
            ]
        }),
        animatesOnHover: C,
        children:
            null != _.description &&
            (0, n.jsx)('div', {
                className: c.__invalid_children,
                children: (0, n.jsx)(r.Text, {
                    className: c.listingDescription,
                    variant: 'text-sm/normal',
                    lineClamp: 2,
                    children: null !== (h = null === (d = _.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== h ? h : _.description
                })
            })
    });
}
