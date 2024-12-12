n.d(t, {
    U: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(91192),
    o = n(481060),
    a = n(442837),
    s = n(239091),
    c = n(410030),
    d = n(377171),
    u = n(682662),
    h = n(662146),
    p = n(678513),
    m = n(981631),
    f = n(388032),
    g = n(477090);
function C(e) {
    let { target: t } = e,
        a = (0, r.Ie)('fakedoor'),
        p = l.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('96252')]).then(n.bind(n, 646202));
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
        v = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        _ = (0, i.jsxs)('div', {
            className: g.tooltipContainer,
            children: [
                (0, i.jsx)('div', {
                    className: g.tooltipBackground,
                    style: { background: v }
                }),
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: f.intl.string(f.t.IIbwAg)
                })
            ]
        }),
        x = (0, c.Fg)();
    return (0, i.jsxs)(u.H, {
        children: [
            (0, i.jsx)(o.ThemeContextProvider, {
                theme: m.BRd.DARK,
                children: (0, i.jsx)(h.Z, {
                    text: _,
                    tooltipClass: g.tooltip,
                    tooltipContentClass: g.tooltipContent,
                    children: (0, i.jsx)(o.ThemeContextProvider, {
                        theme: x,
                        children: (0, i.jsx)(o.BlobMask, {
                            lowerBadge: (0, i.jsx)(o.NumberBadge, {
                                count: 1,
                                color: d.Z.BG_BRAND
                            }),
                            children: (0, i.jsx)(o.NavItem, {
                                ...a,
                                onClick: p,
                                onContextMenu: C,
                                children: (0, i.jsx)(o.BellIcon, { color: d.Z.TEXT_NORMAL })
                            })
                        })
                    })
                })
            }),
            (0, i.jsx)('div', {
                style: {
                    background: v,
                    width: 0,
                    height: 0
                }
            })
        ]
    });
}
function v() {
    let e = (0, a.e7)([p.Z], () => p.Z.getActiveUserSignUp());
    return null == e ? null : (0, i.jsx)(C, { target: e });
}
