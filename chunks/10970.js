n.d(t, {
    Z: function () {
        return T;
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
    u = n(55563),
    m = n(171246),
    h = n(263519),
    g = n(63487),
    p = n(981631),
    x = n(388032),
    S = n(78481);
function T(e) {
    var t;
    let { app: n, currentSubscription: h, currentListing: p, alternativeListings: T, navigateToHome: E, subscriptionGroup: _, renewalSkuId: f } = e,
        I = (0, l.y)(n, 100),
        N = (0, m.KK)(_.flags),
        A = N ? r.ServerIcon : r.UserIcon,
        b = N ? x.intl.string(x.t['46YF2N']) : x.intl.string(x.t.fFyGiI),
        v = null === (t = h.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        j = (0, s.e7)([d.Z], () => (N && null != v ? d.Z.getGuild(v) : void 0), [v, N]),
        O = (0, s.e7)(
            [u.Z],
            () => {
                if (null != f) return u.Z.get(f);
            },
            [f]
        ),
        R = (0, g.p)(h.currentPeriodEnd);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: S.header,
                children: [
                    null != I &&
                        (0, i.jsx)(r.Image, {
                            src: I.href,
                            imageClassName: S.appIcon,
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
                                className: S.subInfo,
                                children: [
                                    (0, i.jsxs)(r.Heading, {
                                        variant: 'heading-md/normal',
                                        className: S.subInfoType,
                                        children: [
                                            (0, i.jsx)(A, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            b
                                        ]
                                    }),
                                    null != j &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: S.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(c.Z, {
                                                            guild: j,
                                                            size: c.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(r.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: x.intl.format(x.t['7ZD8p6'], { guildName: j.name })
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
                        className: S.planNotice,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: x.intl.string(x.t['goe+ho'])
                            }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t['Q8qJ+/'], {})
                                        }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t.sqowY2, {})
                                        })
                                    ]
                                }),
                            (0, i.jsx)(a.Z.Toggle, { text: e ? x.intl.string(x.t['1Rkq/P']) : x.intl.string(x.t.WsTHkZ) })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: S.subscriptions,
                children: [
                    (0, i.jsx)(o.Z, {
                        storeListing: p,
                        className: S.activeSubscriptionCard,
                        cta: (0, i.jsxs)('div', {
                            className: S.activeSubscriptionCTA,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'eyebrow',
                                    color: 'text-brand',
                                    children: x.intl.string(x.t.fHIpOT)
                                }),
                                null != O &&
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-secondary',
                                        children: x.intl.format(x.t['OQk+jo'], { endDate: R })
                                    })
                            ]
                        })
                    }),
                    T.map((e) =>
                        e.skuId === f
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-secondary',
                                          children: x.intl.format(x.t.nn88hI, { startDate: R })
                                      })
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  C,
                                  {
                                      storeListing: e,
                                      guildId: v,
                                      navigateToHome: E
                                  },
                                  e.id
                              )
                    )
                ]
            })
        ]
    });
}
function C(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: l } = (0, h.Z)({
            analyticsLocation: p.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
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
            children: x.intl.string(x.t['+KwmBg'])
        })
    });
}
