t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250),
    a = t(470079),
    r = t(481060),
    o = t(768581),
    l = t(924489),
    s = t(950854),
    c = t(491576),
    d = t(982469);
function u(e) {
    var n, t, u, _, p;
    let { application: m, className: I, childrenClassName: f, animatesOnHover: g, onClick: h, ...v } = e,
        C = o.ZP.getApplicationIconURL({
            id: m.id,
            icon: m.icon,
            size: 48
        }),
        x = (0, c.Z)({ application: m }),
        b = null === (n = m.categories) || void 0 === n ? void 0 : n[0],
        E = (null !== (_ = null === (t = m.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== _ ? _ : 0) > 0 || x.length > 0,
        S = a.useCallback(() => {
            h({ mutualGuilds: x });
        }, [h, x]),
        T = (0, i.jsx)(l.Z, {
            application: m,
            textVariant: 'text-xs/normal',
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, i.jsxs)(s.Z, {
        className: I,
        onClick: S,
        iconSrc: C,
        header: m.name,
        subheader:
            null != b &&
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: b.name
            }),
        animatesOnHover: g,
        ...v,
        children: [
            (null != m.description || null != f) &&
                (0, i.jsx)('div', {
                    className: f,
                    children: (0, i.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
                    })
                }),
            E &&
                (0, i.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: T
                })
        ]
    });
}
