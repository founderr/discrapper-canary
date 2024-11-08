n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(601911),
    a = n(887818),
    o = n(824856),
    c = n(565138),
    d = n(430824),
    u = n(171246),
    m = n(696906),
    h = n(981631),
    g = n(388032),
    p = n(78481);
function x(e) {
    var t;
    let { app: n, currentSubscription: m, currentListing: h, alternativeListings: x, bundleSku: T, navigateToHome: C } = e,
        _ = (0, l.y)(n, 100),
        E = (0, u.KK)(T.flags),
        f = E ? r.ServerIcon : r.UserIcon,
        I = E ? g.intl.string(g.t['46YF2N']) : g.intl.string(g.t.fFyGiI),
        N = null === (t = m.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        A = (0, s.e7)([d.Z], () => (E && null != N ? d.Z.getGuild(N) : void 0), [N, E]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: p.header,
                children: [
                    null != _ &&
                        (0, i.jsx)(r.Image, {
                            src: _.href,
                            imageClassName: p.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-xl/semibold',
                                children: n.name
                            }),
                            (0, i.jsxs)('div', {
                                className: p.subInfo,
                                children: [
                                    (0, i.jsxs)(r.Heading, {
                                        variant: 'heading-md/normal',
                                        className: p.subInfoType,
                                        children: [
                                            (0, i.jsx)(f, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            I
                                        ]
                                    }),
                                    null != A &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: p.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(c.Z, {
                                                            guild: A,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(r.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: g.intl.format(g.t['7ZD8p6'], { guildName: A.name })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(a.Z, {
                children: (e) =>
                    (0, i.jsxs)('div', {
                        className: p.planNotice,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: g.intl.string(g.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: g.intl.format(g.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: g.intl.format(g.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(a.Z.Toggle, { text: e ? g.intl.string(g.t['1Rkq/P']) : g.intl.string(g.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: p.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: h,
                        className: p.activeSubscriptionCard,
                        cta: (0, i.jsx)(r.Text, {
                            variant: 'eyebrow',
                            color: 'text-brand',
                            children: g.intl.string(g.t.fHIpOT)
                        })
                    }),
                    x.map((e) =>
                        (0, i.jsx)(
                            S,
                            {
                                storeListing: e,
                                guildId: N,
                                navigateToHome: C
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
}
function S(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: l } = (0, m.ZP)({
            analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            subscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s
        });
    return (0, i.jsx)(o.Z, {
        storeListing: t,
        cta: (0, i.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            onClick: l,
            children: g.intl.string(g.t['+KwmBg'])
        })
    });
}
