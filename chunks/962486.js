n.d(t, {
    Z: function () {
        return m;
    },
    v: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(410030),
    l = n(225784),
    o = n(229765),
    c = n(374939),
    d = n(356164),
    u = n(726115),
    _ = n(481685),
    E = n(417712);
function h(e) {
    let { guildId: t, onGuildCardSeen: n, onGuildCardClick: s, index: o, categoryId: c } = e,
        u = (0, r.ZP)(),
        _ = (0, a.e7)([d.Z], () => d.Z.getGuild(t));
    return null == _
        ? null
        : (0, i.jsx)(l.Z, {
              guild: _,
              onView: (e) => s(e, o, c),
              theme: u,
              onGuildCardSeen: (e) => n(e, c)
          });
}
function m(e) {
    let { tab: t, guildIds: n, onScroll: a, onGuildCardClick: r, onGuildCardSeen: l } = e,
        d = (0, u.Mf)(t),
        m = (0, u.a$)(t),
        I = (0, u.QW)(t),
        g = (0, u.lg)(t);
    return (0, i.jsxs)(c.Z, {
        title: d,
        description: m,
        onScroll: a,
        bannerBackground: (0, i.jsx)(_.Z, {}),
        children: [
            (0, i.jsx)(o.KY, {
                location: 'global_discovery',
                query: t
            }),
            (0, i.jsx)(s.Heading, {
                className: E.sectionTitle,
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: I
            }),
            (0, i.jsx)('div', {
                className: E.content,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        h,
                        {
                            guildId: e,
                            onGuildCardClick: r,
                            onGuildCardSeen: l,
                            index: t,
                            categoryId: g
                        },
                        e
                    )
                )
            })
        ]
    });
}
