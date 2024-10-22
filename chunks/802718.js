n.d(t, {
    U: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(91192),
    r = n(481060),
    s = n(442837),
    o = n(239091),
    c = n(410030),
    u = n(377171),
    d = n(682662),
    h = n(662146),
    p = n(678513),
    f = n(981631),
    _ = n(689938),
    m = n(293992);
function g(e) {
    let { target: t } = e,
        s = (0, a.Ie)('fakedoor'),
        p = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('18137')]).then(n.bind(n, 646202));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        target: t
                    });
            });
        }, [t]),
        g = l.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('39612').then(n.bind(n, 761624));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            signupTarget: t
                        });
                });
            },
            [t]
        ),
        C = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        I = (0, i.jsxs)('div', {
            className: m.tooltipContainer,
            children: [
                (0, i.jsx)('div', {
                    className: m.tooltipBackground,
                    style: { background: C }
                }),
                (0, i.jsx)(r.Heading, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-xs/normal',
                    children: _.Z.Messages.SIGNUP_BUTTON_TOOLTIP_CTA
                })
            ]
        }),
        E = (0, c.Fg)();
    return (0, i.jsxs)(d.H, {
        children: [
            (0, i.jsx)(r.ThemeContextProvider, {
                theme: f.BRd.DARK,
                children: (0, i.jsx)(h.Z, {
                    text: I,
                    tooltipClass: m.tooltip,
                    tooltipContentClass: m.tooltipContent,
                    children: (0, i.jsx)(r.ThemeContextProvider, {
                        theme: E,
                        children: (0, i.jsx)(r.BlobMask, {
                            lowerBadge: (0, i.jsx)(r.NumberBadge, {
                                count: 1,
                                color: u.Z.BG_BRAND
                            }),
                            children: (0, i.jsx)(r.NavItem, {
                                ...s,
                                onClick: p,
                                onContextMenu: g,
                                children: (0, i.jsx)(r.BellIcon, { color: u.Z.TEXT_NORMAL })
                            })
                        })
                    })
                })
            }),
            (0, i.jsx)('div', {
                style: {
                    background: C,
                    width: 0,
                    height: 0
                }
            })
        ]
    });
}
function C() {
    let e = (0, s.e7)([p.Z], () => p.Z.getActiveUserSignUp());
    return null == e ? null : (0, i.jsx)(g, { target: e });
}
