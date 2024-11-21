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
    _ = n(78839),
    E = n(267642),
    f = n(63063),
    I = n(74538),
    N = n(283029),
    A = n(357956),
    b = n(275909),
    v = n(981631),
    j = n(474936),
    O = n(735825),
    R = n(388032),
    P = n(601709);
function D(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: o, fractionalPremiumState: d } = e,
        u = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        h = (0, E.tl)(t),
        g = (null == a ? void 0 : a.isPaused) === !0 || d !== j.a$.NONE,
        p = d !== j.a$.NONE ? R.intl.format(R.t.hshta2, { helpCenterLink: f.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) }) : R.intl.string(R.t.mOWsFx);
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
                            isCanceled: h,
                            useReducedMotion: o
                        }),
                        h && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: R.intl.format(R.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != u
                              ? (0, i.jsx)(A.Z, { cooldown: u.getTime() })
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
                            !h &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: g,
                                text: p,
                                'aria-label': p.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.Button, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.LINK,
                                        onClick: () => r(t),
                                        size: c.Button.Sizes.NONE,
                                        disabled: g,
                                        children: R.intl.string(R.t.twFU3d)
                                    })
                            }),
                        h &&
                            (0, i.jsx)(m.Z, {
                                shouldShow: g,
                                text: p,
                                'aria-label': p.toString(),
                                children: (e) =>
                                    (0, i.jsx)(c.Button, {
                                        ...e,
                                        className: P.unappliedGuildBoostSlotCta,
                                        color: c.Button.Colors.PRIMARY,
                                        look: c.Button.Looks.LINK,
                                        onClick: () => l(t),
                                        size: c.Button.Sizes.NONE,
                                        disabled: g,
                                        children: R.intl.string(R.t['2glQNj'])
                                    })
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
    let { guildBoostSlots: r, fractionalPremiumState: p } = e,
        x = (0, o.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        A = (null == x ? void 0 : x.isPausedOrPausePending) === !0,
        { fractionalState: b } = (0, u.Z)(),
        L = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        F = (0, T.Vp)(),
        M = b === j.a$.FP_SUB_PAUSED,
        k = b !== j.a$.NONE,
        w = A && !M,
        {
            appliedGuildBoostSlots: U,
            unappliedGuildBoostSlots: V,
            numActiveGuildBoostSlots: G,
            hasCooldownBoosts: Y,
            allGuildBoostsAreOnCooldown: H
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                r.forEach((r) => {
                    !(0, E.tl)(r) && n++, r.isOnCooldown() ? (i = !0) : (s = !1), null != r.premiumGuildSubscription ? e.push(r) : t.push(r);
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
        z = null != x ? (0, h.G)(x, F) : 0,
        W = Math.max(0, z - U.length),
        K = G > z,
        q = z === r.length,
        Q = q ? W : 1,
        X = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < Q; t++)
                e.push(
                    (0, i.jsx)(
                        N.Z,
                        {
                            className: P.headerBoostGem,
                            useReducedMotion: L
                        },
                        t
                    )
                );
            return e;
        }, [Q, L]),
        J = null != F,
        $ = s.useMemo(() => V.find((e) => e.isAvailable()), [V]);
    if (0 === V.length) return null;
    let ee = V.length;
    if (((t = q ? (1 === ee && J ? R.intl.string(R.t['65r43N']) : R.intl.formatToPlainString(H ? R.t['3DW6DQ'] : R.t['/u15QU'], { numUnappliedGuildBoostSlots: ee })) : R.intl.formatToPlainString(H ? R.t['3DW6DQ'] : R.t.BPadnJ, { numUnappliedGuildBoostSlots: ee })), I.ZP.isPremium(Z))) {
        if (q && 1 === ee && J) n = F.skuId === O.Ft.FREE_GUILD_BOOST_1_MONTH ? R.intl.string(R.t.dm8r0t) : R.intl.string(R.t.VGJ9IC);
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
            n = H
                ? R.intl.format(R.t.omcpSE, { learnMoreHook: e })
                : R.intl.format(R.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: ee,
                      learnMoreHook: e
                  });
        }
    } else n = H ? R.intl.string(R.t['8pcUZm']) : R.intl.formatToPlainString(R.t.Kaw82t, { numUnappliedGuildBoostSlots: ee });
    let et = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: A,
        hasFractionPremium: k
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => R.intl.format(R.t['4RgA6O'], { helpCenterLink: f.Z.getArticleURL(v.BhN.FRACTIONAL_PREMIUM_ABOUT) })
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
            J &&
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
                    [P.headerWithBoost]: J,
                    [P.headerWithoutSpecialHeader]: !J
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
                                        children: X
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
                                    shouldShow: null == $ || w,
                                    text: et,
                                    'aria-label': et.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.Button, {
                                            ...e,
                                            disabled: null == $ || w,
                                            onClick:
                                                null != $
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = $),
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
                    (!q || Y) &&
                        (0, i.jsx)('ul', {
                            className: P.unappliedBoostSlots,
                            children: V.map((e) =>
                                (0, i.jsx)(
                                    D,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: K,
                                        onCancel: y,
                                        onUncancel: B,
                                        premiumSubscription: x,
                                        useReducedMotion: L,
                                        fractionalPremiumState: p
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
