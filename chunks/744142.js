n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(768581),
    o = n(924489),
    s = n(950854),
    c = n(824606),
    d = n(295519);
function u(e) {
    var t, n, u, p, m;
    let { application: _, className: h, childrenClassName: f, animatesOnHover: g, onClick: v, ...I } = e,
        x = l.ZP.getApplicationIconURL({
            id: _.id,
            icon: _.icon,
            size: 48
        }),
        C = (0, c.Z)({ application: _ }),
        S = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        N = (null !== (p = null === (n = _.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== p ? p : 0) > 0 || C.length > 0,
        b = a.useCallback(() => {
            v({ mutualGuilds: C });
        }, [v, C]),
        T = (0, i.jsx)(o.Z, {
            application: _,
            textVariant: 'text-xs/normal',
            mutualGuilds: C,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0
        });
    return (0, i.jsxs)(s.Z, {
        className: h,
        onClick: b,
        iconSrc: x,
        header: _.name,
        subheader:
            null != S &&
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: S.name
            }),
        animatesOnHover: g,
        ...I,
        children: [
            (null != _.description || null != f) &&
                (0, i.jsx)('div', {
                    className: f,
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
