n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(212093),
    s = n(703656),
    o = n(769654),
    c = n(430824),
    d = n(626135),
    u = n(768581),
    h = n(125631),
    m = n(981631),
    p = n(388032),
    g = n(917595);
function f(e, t, n) {
    return (0, i.jsxs)(
        'button',
        {
            className: g.container,
            onClick: n,
            children: [
                'function' == typeof e
                    ? (0, i.jsx)('div', {
                          className: g.icon,
                          children: (0, i.jsx)(e, {
                              className: g.__invalid_iconInner,
                              color: a.tokens.colors.WHITE.css
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: g.icon,
                          alt: '',
                          src: e
                      }),
                (0, i.jsx)(a.Text, {
                    className: g.text,
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, i.jsx)(h.Z, { className: g.arrow })
            ]
        },
        t
    );
}
function _() {
    let e = Object.values(c.Z.getGuilds()).filter((e) => e.hasFeature(m.oNc.HUB)),
        t = (e) => {
            d.default.track(m.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, o.X)(e);
        };
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)('header', {
                className: g.header,
                children: (0, i.jsx)(a.FormTitle, {
                    tag: 'h2',
                    className: g.title,
                    children: p.intl.string(p.t['qj7o//'])
                })
            }),
            (0, i.jsxs)('div', {
                className: g.grid,
                children: [
                    e.map((e) =>
                        f(
                            u.ZP.getGuildIconURL({
                                id: e.id,
                                icon: e.icon,
                                size: 240
                            }),
                            e.name,
                            () => {
                                t(e.id);
                            }
                        )
                    ),
                    f(a.CompassIcon, p.intl.string(p.t.AhKnz8), () => {
                        (0, l.AQ)(), d.default.track(m.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, s.uL)(m.Z5c.GUILD_DISCOVERY);
                    })
                ]
            })
        ]
    });
}
