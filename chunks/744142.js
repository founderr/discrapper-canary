n.d(a, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    t = n(470079),
    r = n(481060),
    l = n(768581),
    s = n(924489),
    o = n(950854),
    c = n(491576),
    d = n(169909);
function u(e) {
    var a, n, u, _, p;
    let { application: m, className: g, childrenClassName: I, animatesOnHover: h, onClick: f, ...x } = e,
        C = l.ZP.getApplicationIconURL({
            id: m.id,
            icon: m.icon,
            size: 48
        }),
        v = (0, c.Z)({ application: m }),
        E = null === (a = m.categories) || void 0 === a ? void 0 : a[0],
        P = (null !== (_ = null === (n = m.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== _ ? _ : 0) > 0 || v.length > 0,
        b = t.useCallback(() => {
            f({ mutualGuilds: v });
        }, [f, v]),
        A = (0, i.jsx)(s.Z, {
            application: m,
            textVariant: 'text-xs/normal',
            mutualGuilds: v,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        });
    return (0, i.jsxs)(o.Z, {
        className: g,
        onClick: b,
        iconSrc: C,
        header: m.name,
        subheader:
            null != E &&
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: E.name
            }),
        animatesOnHover: h,
        ...x,
        children: [
            (null != m.description || null != I) &&
                (0, i.jsx)('div', {
                    className: I,
                    children: (0, i.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
                    })
                }),
            P &&
                (0, i.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: A
                })
        ]
    });
}
