n.d(t, {
    A: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(296991),
    u = n(245762),
    m = n(999382),
    h = n(388032),
    g = n(457255);
function x(e) {
    let { requireTerms: t, rules: l } = e,
        x = (0, o.e7)([m.Z], () => m.Z.getProps().guild),
        p = null == x ? void 0 : x.id,
        f = r.useCallback(() => {
            if (null != p)
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('80026'), n.e('36869')]).then(n.bind(n, 645264));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: p,
                            isPreview: !0
                        });
                });
        }, [p]),
        C = r.useCallback(
            (e) => {
                if (null == p || null == l) return null;
                u.Z.setPendingInviteRules(p, e, [...l]);
            },
            [p, l]
        ),
        v = r.useCallback(
            (e) => {
                if (null == p) return null;
                u.Z.setPendingInviteRules(p, t, e);
            },
            [p, t]
        );
    return null == x
        ? null
        : null == l
          ? (0, i.jsx)(c.Spinner, {})
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.headerContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.headerText,
                                children: [
                                    (0, i.jsx)(a.X6, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: h.intl.string(h.t.d21uOj)
                                    }),
                                    (0, i.jsx)(a.xv, {
                                        tag: 'p',
                                        variant: 'text-sm/medium',
                                        color: 'text-secondary',
                                        className: g.bodyText,
                                        children: h.intl.string(h.t.SzpUBA)
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.Switch, {
                                onChange: C,
                                checked: t
                            })
                        ]
                    }),
                    t &&
                        (0, i.jsx)(c.LinkButton, {
                            text: h.intl.string(h.t.SKNnqq),
                            icon: c.WindowLaunchIcon,
                            variant: 'primary',
                            onClick: f
                        }),
                    (0, i.jsx)('div', {
                        className: s()(g.rules, { [g.disabled]: !t }),
                        children: (0, i.jsxs)('div', {
                            inert: t ? void 0 : '',
                            children: [
                                (0, i.jsx)(a.X6, {
                                    variant: 'text-xs/bold',
                                    color: 'text-muted',
                                    className: g.rulesHeader,
                                    children: h.intl.string(h.t.XcAzbm)
                                }),
                                (0, i.jsx)(d.k, {
                                    guild: x,
                                    rules: l,
                                    setRules: v
                                })
                            ]
                        })
                    })
                ]
            });
}
