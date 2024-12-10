i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(200651),
    a = i(192379),
    r = i(481060),
    o = i(768581),
    l = i(924489),
    s = i(950854),
    c = i(824606),
    d = i(295519);
function u(e) {
    var t, i, u, h, p;
    let { application: m, className: _, childrenClassName: f, animatesOnHover: g, onClick: x, ...C } = e,
        b = o.ZP.getApplicationIconURL({
            id: m.id,
            icon: m.icon,
            size: 48
        }),
        I = (0, c.Z)({ application: m }),
        v = null === (t = m.categories) || void 0 === t ? void 0 : t[0],
        N = (null !== (h = null === (i = m.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== h ? h : 0) > 0 || I.length > 0,
        L = a.useCallback(() => {
            x({ mutualGuilds: I });
        }, [x, I]),
        T = (0, n.jsx)(l.Z, {
            application: m,
            textVariant: 'text-xs/normal',
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, n.jsxs)(s.Z, {
        className: _,
        onClick: L,
        iconSrc: b,
        header: m.name,
        subheader:
            null != v &&
            (0, n.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: v.name
            }),
        animatesOnHover: g,
        ...C,
        children: [
            (null != m.description || null != f) &&
                (0, n.jsx)('div', {
                    className: f,
                    children: (0, n.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
                    })
                }),
            N &&
                (0, n.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: T
                })
        ]
    });
}
