i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(735250),
    a = i(470079),
    r = i(481060),
    s = i(768581),
    o = i(924489),
    l = i(950854),
    c = i(491576),
    d = i(169909);
function u(e) {
    var t, i, u, h, _;
    let { application: p, className: m, childrenClassName: g, animatesOnHover: C, onClick: x, ...f } = e,
        I = s.ZP.getApplicationIconURL({
            id: p.id,
            icon: p.icon,
            size: 48
        }),
        b = (0, c.Z)({ application: p }),
        N = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
        v = (null !== (h = null === (i = p.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== h ? h : 0) > 0 || b.length > 0,
        E = a.useCallback(() => {
            x({ mutualGuilds: b });
        }, [x, b]),
        A = (0, n.jsx)(o.Z, {
            application: p,
            textVariant: 'text-xs/normal',
            mutualGuilds: b,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0
        });
    return (0, n.jsxs)(l.Z, {
        className: m,
        onClick: E,
        iconSrc: I,
        header: p.name,
        subheader:
            null != N &&
            (0, n.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: N.name
            }),
        animatesOnHover: C,
        ...f,
        children: [
            (null != p.description || null != g) &&
                (0, n.jsx)('div', {
                    className: g,
                    children: (0, n.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (_ = null === (u = p.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== _ ? _ : p.description
                    })
                }),
            v &&
                (0, n.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: A
                })
        ]
    });
}
