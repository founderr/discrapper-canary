n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(481060),
    o = n(768581),
    l = n(924489),
    s = n(950854),
    c = n(824606),
    d = n(169909);
function u(e) {
    var t, n, u, p, m;
    let { application: _, className: f, childrenClassName: h, animatesOnHover: g, onClick: I, ...b } = e,
        x = o.ZP.getApplicationIconURL({
            id: _.id,
            icon: _.icon,
            size: 48
        }),
        v = (0, c.Z)({ application: _ }),
        C = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        N = (null !== (p = null === (n = _.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== p ? p : 0) > 0 || v.length > 0,
        S = a.useCallback(() => {
            I({ mutualGuilds: v });
        }, [I, v]),
        T = (0, i.jsx)(l.Z, {
            application: _,
            textVariant: 'text-xs/normal',
            mutualGuilds: v,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, i.jsxs)(s.Z, {
        className: f,
        onClick: S,
        iconSrc: x,
        header: _.name,
        subheader:
            null != C &&
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: C.name
            }),
        animatesOnHover: g,
        ...b,
        children: [
            (null != _.description || null != h) &&
                (0, i.jsx)('div', {
                    className: h,
                    children: (0, i.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (m = null === (u = _.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : _.description
                    })
                }),
            N &&
                (0, i.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: T
                })
        ]
    });
}
