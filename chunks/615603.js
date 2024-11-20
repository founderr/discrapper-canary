n(653041), n(627341);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(975298),
    m = n(125529),
    h = n(158153),
    g = n(760558),
    p = n(401786),
    x = n(450468),
    S = n(98278),
    T = n(314684),
    C = n(594174),
    E = n(78839),
    _ = n(267642),
    I = n(63063),
    f = n(74538),
    N = n(283029),
    A = n(357956),
    b = n(275909),
    v = n(981631),
    j = n(474936),
    O = n(735825),
    R = n(388032),
    P = n(161692);
function D(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: o } = e,
        d = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, _.tl)(t);
    return (0, i.jsxs)(
        'li',
        {
            className: P.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(b.Z, {
                            className: P.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: o
                        }),
                        u && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: R.intl.format(R.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != d
                              ? (0, i.jsx)(A.Z, { cooldown: d.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: P.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: R.intl.string(R.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: P.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !u &&
                            (0, i.jsx)(c.Button, {
                                className: P.unappliedGuildBoostSlotCta,
                                color: c.Button.Colors.PRIMARY,
                                look: c.Button.Looks.LINK,
                                onClick: () => r(t),
                                size: c.Button.Sizes.NONE,
                                children: R.intl.string(R.t.twFU3d)
                            }),
                        u &&
                            (0, i.jsx)(c.Button, {
                                className: P.unappliedGuildBoostSlotCta,
                                color: c.Button.Colors.PRIMARY,
                                look: c.Button.Looks.LINK,
                                onClick: () => l(t),
                                size: c.Button.Sizes.NONE,
                                children: R.intl.string(R.t['2glQNj'])
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function y(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(p.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function B(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(x.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
t.Z = function (e) {
    let t, n;
    let { guildBoostSlots: r } = e,
        p = (0, o.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        x = (null == p ? void 0 : p.isPausedOrPausePending) === !0,
        { fractionalState: A } = (0, u.Z)(),
        b = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        Z = (0, T.Vp)(),
        F = A === j.a$.FP_SUB_PAUSED,
        M = A !== j.a$.NONE,
        k = x && !F,
        {
            appliedGuildBoostSlots: w,
            unappliedGuildBoostSlots: U,
            numActiveGuildBoostSlots: V,
            hasCooldownBoosts: G,
            allGuildBoostsAreOnCooldown: Y
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                r.forEach((r) => {
                    !(0, _.tl)(r) && n++, r.isOnCooldown() ? (i = !0) : (s = !1), null != r.premiumGuildSubscription ? e.push(r) : t.push(r);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s
                }
            );
        }, [r]),
        H = null != p ? (0, h.G)(p, Z) : 0,
        z = Math.max(0, H - w.length),
        W = V > H,
        K = H === r.length,
        q = K ? z : 1,
        Q = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < q; t++)
                e.push(
                    (0, i.jsx)(
                        N.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: b
                        },
                        t
                    )
                );
            return e;
        }, [q, b]),
        X = null != Z,
        J = s.useMemo(() => U.find((e) => e.isAvailable()), [U]);
    if (0 === U.length) return null;
    let $ = U.length;
    if (((t = K ? (1 === $ && X ? R.intl.string(R.t['65r43N']) : R.intl.formatToPlainString(Y ? R.t['3DW6DQ'] : R.t['/u15QU'], { numUnappliedGuildBoostSlots: $ })) : R.intl.formatToPlainString(Y ? R.t['3DW6DQ'] : R.t.BPadnJ, { numUnappliedGuildBoostSlots: $ })), f.ZP.isPremium(L))) {
        if (K && 1 === $ && X) n = Z.skuId === O.Ft.FREE_GUILD_BOOST_1_MONTH ? R.intl.string(R.t.dm8r0t) : R.intl.string(R.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    c.Clickable,
                    {
                        className: P.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, S.z)();
                        },
                        children: e
                    },
                    t
                );
            n = Y
                ? R.intl.format(R.t.omcpSE, { learnMoreHook: e })
                : R.intl.format(R.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: $,
                      learnMoreHook: e
                  });
        }
    } else n = Y ? R.intl.string(R.t['8pcUZm']) : R.intl.formatToPlainString(R.t.Kaw82t, { numUnappliedGuildBoostSlots: $ });
    let ee = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: x,
        hasFractionPremium: M
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => R.intl.format(R.t['4RgA6O'], { helpCenterLink: I.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) })
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => R.intl.string(R.t.mOWsFx)
        )
        .otherwise(() => R.intl.string(R.t.xr4m5O));
    return (0, i.jsxs)('div', {
        className: P.wrapper,
        children: [
            X &&
                (0, i.jsxs)('div', {
                    className: P.specialHeader,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/semibold',
                            className: P.pill,
                            children: R.intl.string(R.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, i.jsx)(c.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: R.intl.string(R.t.Cly3mZ)
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: l()(P.content, {
                    [P.headerWithBoost]: X,
                    [P.headerWithoutSpecialHeader]: !X
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: P.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: P.headerContentPrimary,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: P.headerBoostGems,
                                        children: Q
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: P.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                className: P.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: P.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: P.headerContentSecondary,
                                children: (0, i.jsx)(m.Z, {
                                    shouldShow: null == J || k,
                                    text: ee,
                                    'aria-label': ee.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.Button, {
                                            ...e,
                                            disabled: null == J || k,
                                            onClick:
                                                null != J
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = J),
                                                              void (0, c.openModalLazy)(
                                                                  async () => (t) =>
                                                                      (0, i.jsx)(g.default, {
                                                                          ...t,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: v.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: R.intl.string(R.t.BMx1i4)
                                        })
                                })
                            })
                        ]
                    }),
                    (!K || G) &&
                        (0, i.jsx)('ul', {
                            className: P.unappliedBoostSlots,
                            children: U.map((e) =>
                                (0, i.jsx)(
                                    D,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: W,
                                        onCancel: y,
                                        onUncancel: B,
                                        premiumSubscription: p,
                                        useReducedMotion: b
                                    },
                                    e.id
                                )
                            )
                        })
                ]
            })
        ]
    });
};
