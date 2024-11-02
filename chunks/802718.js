n.d(t, {
    U: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(481060),
    o = n(442837),
    s = n(239091),
    c = n(410030),
    u = n(377171),
    d = n(682662),
    h = n(662146),
    p = n(678513),
    f = n(981631),
    m = n(388032),
    g = n(293992);
function C(e) {
    let { target: t } = e,
        o = (0, r.Ie)('fakedoor'),
        p = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('18137')]).then(n.bind(n, 646202));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        target: t
                    });
            });
        }, [t]),
        C = l.useCallback(
            (e) => {
                (0, s.jW)(e, async () => {
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
        _ = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        x = (0, i.jsxs)('div', {
            className: g.tooltipContainer,
            children: [
                (0, i.jsx)('div', {
                    className: g.tooltipBackground,
                    style: { background: _ }
                }),
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    children: m.intl.string(m.t.IIbwAg)
                })
            ]
        }),
        v = (0, c.Fg)();
    return (0, i.jsxs)(d.H, {
        children: [
            (0, i.jsx)(a.ThemeContextProvider, {
                theme: f.BRd.DARK,
                children: (0, i.jsx)(h.Z, {
                    text: x,
                    tooltipClass: g.tooltip,
                    tooltipContentClass: g.tooltipContent,
                    children: (0, i.jsx)(a.ThemeContextProvider, {
                        theme: v,
                        children: (0, i.jsx)(a.BlobMask, {
                            lowerBadge: (0, i.jsx)(a.NumberBadge, {
                                count: 1,
                                color: u.Z.BG_BRAND
                            }),
                            children: (0, i.jsx)(a.NavItem, {
                                ...o,
                                onClick: p,
                                onContextMenu: C,
                                children: (0, i.jsx)(a.BellIcon, { color: u.Z.TEXT_NORMAL })
                            })
                        })
                    })
                })
            }),
            (0, i.jsx)('div', {
                style: {
                    background: _,
                    width: 0,
                    height: 0
                }
            })
        ]
    });
}
function _() {
    let e = (0, o.e7)([p.Z], () => p.Z.getActiveUserSignUp());
    return null == e ? null : (0, i.jsx)(C, { target: e });
}
