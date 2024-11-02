n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(601911),
    a = n(824856),
    o = n(565138),
    c = n(430824),
    d = n(171246),
    u = n(696906),
    m = n(981631),
    h = n(388032),
    g = n(438578);
function p(e) {
    var t;
    let { app: n, currentSubscription: u, currentListing: m, alternativeListings: p, bundleSku: S } = e,
        T = (0, l.y)(n, 100),
        C = (0, d.KK)(S.flags),
        _ = C ? r.ServerIcon : r.UserIcon,
        E = C ? h.intl.string(h.t['46YF2N']) : h.intl.string(h.t.fFyGiI),
        f = null === (t = u.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        I = (0, s.e7)([c.Z], () => (C && null != f ? c.Z.getGuild(f) : void 0), [f, C]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: g.header,
                children: [
                    null != T &&
                        (0, i.jsx)(r.Image, {
                            src: T.href,
                            imageClassName: g.appIcon,
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
                                className: g.subInfo,
                                children: [
                                    (0, i.jsxs)(r.Heading, {
                                        variant: 'heading-md/normal',
                                        className: g.subInfoType,
                                        children: [
                                            (0, i.jsx)(_, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            E
                                        ]
                                    }),
                                    null != I &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, i.jsxs)('span', {
                                                    className: g.guildSubscription,
                                                    children: [
                                                        (0, i.jsx)(o.Z, {
                                                            guild: I,
                                                            size: o.Z.Sizes.SMOL
                                                        }),
                                                        (0, i.jsx)(r.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: h.intl.format(h.t['7ZD8p6'], { guildName: I.name })
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
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: h.intl.string(h.t['goe+ho'])
            }),
            (0, i.jsxs)('div', {
                className: g.subscriptions,
                children: [
                    (0, i.jsx)(a.Z, {
                        storeListing: m,
                        className: g.activeSubscriptionCard,
                        cta: (0, i.jsx)(r.Text, {
                            variant: 'eyebrow',
                            color: 'text-brand',
                            children: h.intl.string(h.t.fHIpOT)
                        })
                    }),
                    p.map((e) =>
                        (0, i.jsx)(
                            x,
                            {
                                storeListing: e,
                                guildId: f
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
}
function x(e) {
    let { storeListing: t, guildId: n } = e,
        { openModal: s } = (0, u.ZP)({
            analyticsLocation: m.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            subscribeForGuild: n
        });
    return (0, i.jsx)(
        a.Z,
        {
            storeListing: t,
            cta: (0, i.jsx)(r.Button, {
                size: r.Button.Sizes.SMALL,
                onClick: s,
                children: h.intl.string(h.t['+KwmBg'])
            })
        },
        t.id
    );
}
