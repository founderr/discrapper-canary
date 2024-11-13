n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    i = n(873546),
    s = n(481060),
    c = n(231467),
    o = n(17845),
    d = n(703656),
    l = n(981631),
    u = n(559469),
    m = n(388032),
    p = n(970047);
let g = n(575703),
    E = n(2984),
    _ = i.tq || i.Em;
function f(e) {
    let { gameId: t } = e,
        n = (0, u.n)(),
        i = r.useMemo(() => n.slice(0, 4), [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('img', {
                className: p.backgroundImage,
                src: g,
                alt: ''
            }),
            (0, a.jsxs)(s.Scroller, {
                className: p.pageContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: p.headerBar,
                        children: [
                            (0, a.jsx)('img', {
                                className: p.logoWithText,
                                src: E,
                                alt: ''
                            }),
                            (0, a.jsx)(s.Button, {
                                className: p.headerButton,
                                look: s.ButtonLooks.FILLED,
                                size: s.ButtonSizes.MEDIUM,
                                color: s.ButtonColors.WHITE,
                                onClick: () =>
                                    (0, d.dL)({
                                        pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                        search: '?game='.concat(t)
                                    }),
                                children: (0, a.jsx)(s.Text, {
                                    variant: 'text-md/medium',
                                    color: 'none',
                                    children: m.intl.string(m.t.HAkXzs)
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(o.Z, {
                        className: p.banner,
                        title: m.intl.string(m.t.a2lbLi),
                        description: m.intl.string(m.t['/B+X5e']),
                        button: _
                            ? (0, a.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: m.intl.string(m.t.PrDDkp)
                              })
                            : (0, a.jsx)(s.Button, {
                                  className: p.cta,
                                  look: s.ButtonLooks.FILLED,
                                  size: s.ButtonSizes.LARGE,
                                  color: s.ButtonColors.WHITE,
                                  onClick: () =>
                                      (0, d.dL)({
                                          pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                          search: '?game='.concat(t)
                                      }),
                                  children: (0, a.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: m.intl.string(m.t.gbOKxs)
                                  })
                              })
                    }),
                    (0, a.jsx)('div', {
                        className: p.content,
                        children: (0, a.jsxs)('div', {
                            className: p.sampleGuildsSection,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    className: p.sectionTitle,
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    children: m.intl.string(m.t.x0rBe3)
                                }),
                                (0, a.jsx)('div', {
                                    className: p.cardsWrapper,
                                    children: i.map((e) =>
                                        (0, a.jsx)(
                                            c.xV,
                                            {
                                                className: p.card,
                                                clan: e
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
