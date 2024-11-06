n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(950279),
    c = n(741595),
    d = n(359380),
    u = n(388032),
    h = n(131325),
    m = n(602075);
function p(e) {
    let { gameApplicationIds: t, onUpdateGames: n, error: l } = e,
        a = r.useCallback(
            (e) => {
                n(new Set(e));
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: h.sectionTitle,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/medium',
                        children: u.intl.string(u.t.URyqtL)
                    }),
                    t.size > 0 &&
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            onClick: () => a(new Set()),
                            color: s.Button.Colors.CUSTOM,
                            className: h.resetButton,
                            children: u.intl.string(u.t['/91lv7'])
                        })
                ]
            }),
            (0, i.jsx)(o.p, {
                gameApplicationIds: t,
                preventGameRemoval: !1,
                onUpdateGames: a,
                minGames: 0,
                error: l
            })
        ]
    });
}
function g(e) {
    let { traits: t, onUpdateTraits: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: h.sectionTitle,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/medium',
                        children: u.intl.string(u.t.H6NAbG)
                    }),
                    t.size > 0 &&
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            onClick: () => n(new Set()),
                            color: s.Button.Colors.CUSTOM,
                            className: h.resetButton,
                            children: u.intl.string(u.t['/91lv7'])
                        })
                ]
            }),
            (0, i.jsx)(d.d, {
                availableTraits: t,
                onUpdateTraits: n
            })
        ]
    });
}
function f(e) {
    let { playstyle: t, onUpdatePlaystyle: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: h.sectionTitle,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/medium',
                        children: u.intl.string(u.t.B1ecLC)
                    }),
                    null != t &&
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            onClick: () => n(null),
                            color: s.Button.Colors.CUSTOM,
                            className: h.resetButton,
                            children: u.intl.string(u.t['/91lv7'])
                        })
                ]
            }),
            (0, i.jsx)(c.R, {
                playstyle: t,
                onUpdatePlaystyle: n
            })
        ]
    });
}
t.Z = (e) => {
    let { traits: t, gameApplicationIds: n, playstyle: r, onUpdateTraits: l, onUpdateGames: o, onUpdatePlaystyle: c } = e;
    return (0, i.jsxs)('div', {
        className: a()(m.slideContent, h.container),
        children: [
            (0, i.jsxs)('div', {
                className: h.mainHeader,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xxl/medium',
                        className: m.title,
                        children: u.intl.string(u.t.mqCroq)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: m.subtitle,
                        children: u.intl.string(u.t.Rno2r6)
                    })
                ]
            }),
            (0, i.jsx)(p, {
                gameApplicationIds: n,
                onUpdateGames: o
            }),
            (0, i.jsx)('hr', { className: m.divider }),
            (0, i.jsx)(f, {
                playstyle: r,
                onUpdatePlaystyle: c
            }),
            (0, i.jsx)('hr', { className: m.divider }),
            (0, i.jsx)(g, {
                traits: t,
                onUpdateTraits: l
            })
        ]
    });
};
