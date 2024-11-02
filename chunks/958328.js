n.d(t, {
    Z: function () {
        return j;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(149765),
    o = n(442837),
    c = n(481060),
    s = n(933557),
    d = n(592125),
    u = n(430824),
    h = n(496675),
    m = n(944486),
    x = n(914010),
    f = n(233608),
    p = n(71080),
    g = n(644715),
    b = n(219299);
function v(e) {
    let { title: t, can: n } = e,
        a = n ? c.CheckmarkLargeIcon : c.XSmallIcon,
        i = (0, r.jsx)('div', {
            className: l()(g.iconOuter, n ? g.iconCheck : g.iconCross),
            children: (0, r.jsx)(a, { className: g.icon })
        });
    return (0, r.jsxs)('div', {
        className: g.scope,
        children: [
            i,
            (0, r.jsx)('div', {
                className: g.scopeInner,
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: t
                })
            })
        ]
    });
}
function j() {
    let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
        a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        j = (0, o.e7)([h.Z], () => h.Z.computePermissions(n)),
        C = (0, o.e7)([h.Z], () => h.Z.computePermissions(a)),
        _ = (0, s.ZP)(n, !0),
        T = null != n ? (0, p.IG)(n, !1, !0) : null,
        S = null != a ? f.Z.getGuildPermissionSpecMap(a) : null,
        N = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
                a = i.e$(j, n);
            return (0, r.jsx)(
                v,
                {
                    title: t,
                    can: a
                },
                t
            );
        }),
        y = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
                a = i.e$(C, n);
            return (0, r.jsx)(
                v,
                {
                    title: t,
                    can: a
                },
                t
            );
        });
    return (0, r.jsx)('div', {
        className: l()(b.panel, g.panel),
        children: (0, r.jsxs)('div', {
            className: g.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: null != _ ? 'Permissions in '.concat(_) : 'No channel selected'
                        }),
                        N
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: null != a ? 'Permissions in '.concat(a.name) : 'No guild selected'
                        }),
                        y
                    ]
                })
            ]
        })
    });
}
