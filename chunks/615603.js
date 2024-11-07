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
    m = n(158153),
    h = n(760558),
    g = n(401786),
    p = n(450468),
    x = n(98278),
    S = n(314684),
    T = n(594174),
    C = n(78839),
    _ = n(267642),
    E = n(74538),
    f = n(283029),
    I = n(357956),
    N = n(275909),
    b = n(981631),
    A = n(474936),
    v = n(735825),
    j = n(388032),
    O = n(161692);
function R(e) {
    let { guildBoostSlot: t, isCancellable: n, onCancel: r, onUncancel: l, premiumSubscription: a, useReducedMotion: o } = e,
        d = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, _.tl)(t);
    return (0, i.jsxs)(
        'li',
        {
            className: O.unappliedGuildBoostSlot,
            children: [
                (0, i.jsxs)('div', {
                    className: O.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, i.jsx)(N.Z, {
                            className: O.unappliedGuildBoostSlotIcon,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: o
                        }),
                        u && null != a
                            ? (0, i.jsx)(c.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: j.intl.format(j.t.Z4ULRE, { date: a.currentPeriodEnd })
                              })
                            : t.isOnCooldown() && null != d
                              ? (0, i.jsx)(I.Z, { cooldown: d.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: O.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: j.intl.string(j.t['2mcaf3'])
                                })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: O.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        n &&
                            !u &&
                            (0, i.jsx)(c.Button, {
                                className: O.unappliedGuildBoostSlotCta,
                                color: c.Button.Colors.PRIMARY,
                                look: c.Button.Looks.LINK,
                                onClick: () => r(t),
                                size: c.Button.Sizes.NONE,
                                children: j.intl.string(j.t.twFU3d)
                            }),
                        u &&
                            (0, i.jsx)(c.Button, {
                                className: O.unappliedGuildBoostSlotCta,
                                color: c.Button.Colors.PRIMARY,
                                look: c.Button.Looks.LINK,
                                onClick: () => l(t),
                                size: c.Button.Sizes.NONE,
                                children: j.intl.string(j.t['2glQNj'])
                            })
                    ]
                })
            ]
        },
        t.id
    );
}
function P(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(g.default, {
                ...t,
                guildBoostSlot: e
            })
    );
}
function D(e) {
    (0, c.openModalLazy)(
        async () => (t) =>
            (0, i.jsx)(p.default, {
                ...t,
                guildBoostSlotId: e.id
            })
    );
}
t.Z = function (e) {
    let t, n;
    let { guildBoostSlots: r } = e,
        g = (0, o.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        p = (null == g ? void 0 : g.isPausedOrPausePending) === !0,
        { fractionalState: I } = (0, u.Z)(),
        N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        y = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
        B = (0, S.Vp)(),
        L = I === A.a$.FP_SUB,
        Z = I !== A.a$.NONE,
        F = p && !L,
        {
            appliedGuildBoostSlots: M,
            unappliedGuildBoostSlots: k,
            numActiveGuildBoostSlots: w,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: V
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
        G = null != g ? (0, m.G)(g, B) : 0,
        Y = Math.max(0, G - M.length),
        H = w > G,
        z = G === r.length,
        W = z ? Y : 1,
        K = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < W; t++)
                e.push(
                    (0, i.jsx)(
                        f.Z,
                        {
                            className: O.headerBoostGem,
                            useReducedMotion: N
                        },
                        t
                    )
                );
            return e;
        }, [W, N]),
        q = null != B,
        Q = s.useMemo(() => k.find((e) => e.isAvailable()), [k]);
    if (0 === k.length) return null;
    let X = k.length;
    if (((t = z ? (1 === X && q ? j.intl.string(j.t['65r43N']) : j.intl.formatToPlainString(V ? j.t['3DW6DQ'] : j.t['/u15QU'], { numUnappliedGuildBoostSlots: X })) : j.intl.formatToPlainString(V ? j.t['3DW6DQ'] : j.t.BPadnJ, { numUnappliedGuildBoostSlots: X })), E.ZP.isPremium(y))) {
        if (z && 1 === X && q) n = B.skuId === v.Ft.FREE_GUILD_BOOST_1_MONTH ? j.intl.string(j.t.dm8r0t) : j.intl.string(j.t.VGJ9IC);
        else {
            let e = (e, t) =>
                (0, i.jsx)(
                    c.Clickable,
                    {
                        className: O.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, x.z)();
                        },
                        children: e
                    },
                    t
                );
            n = V
                ? j.intl.format(j.t.omcpSE, { learnMoreHook: e })
                : j.intl.format(j.t['5mAkVl'], {
                      numUnappliedGuildBoostSlots: X,
                      learnMoreHook: e
                  });
        }
    } else n = V ? j.intl.string(j.t['8pcUZm']) : j.intl.formatToPlainString(j.t.Kaw82t, { numUnappliedGuildBoostSlots: X });
    let J = (0, a.EQ)({
        subscriptionIsPausedOrPausePending: p,
        hasFractionPremium: Z
    })
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !0
            },
            () => j.intl.string(j.t.kJ1AZG)
        )
        .with(
            {
                subscriptionIsPausedOrPausePending: !0,
                hasFractionPremium: !1
            },
            () => j.intl.string(j.t.mOWsFx)
        )
        .otherwise(() => j.intl.string(j.t.xr4m5O));
    return (0, i.jsxs)('div', {
        className: O.wrapper,
        children: [
            q &&
                (0, i.jsxs)('div', {
                    className: O.specialHeader,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-xs/semibold',
                            className: O.pill,
                            children: j.intl.string(j.t.fhK8ho).toLocaleUpperCase()
                        }),
                        (0, i.jsx)(c.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: j.intl.string(j.t.Cly3mZ)
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: l()(O.content, {
                    [O.headerWithBoost]: q,
                    [O.headerWithoutSpecialHeader]: !q
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: O.header,
                        children: [
                            (0, i.jsxs)('div', {
                                className: O.headerContentPrimary,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: O.headerBoostGems,
                                        children: K
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: O.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                className: O.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: t
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: O.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: n
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: O.headerContentSecondary,
                                children: (0, i.jsx)(c.Tooltip, {
                                    shouldShow: null == Q || F,
                                    text: J,
                                    children: (e) =>
                                        (0, i.jsx)(c.Button, {
                                            ...e,
                                            disabled: null == Q || F,
                                            onClick:
                                                null != Q
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = Q),
                                                              void (0, c.openModalLazy)(
                                                                  async () => (t) =>
                                                                      (0, i.jsx)(h.default, {
                                                                          ...t,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: b.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: j.intl.string(j.t.BMx1i4)
                                        })
                                })
                            })
                        ]
                    }),
                    (!z || U) &&
                        (0, i.jsx)('ul', {
                            className: O.unappliedBoostSlots,
                            children: k.map((e) =>
                                (0, i.jsx)(
                                    R,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: H,
                                        onCancel: P,
                                        onUncancel: D,
                                        premiumSubscription: g,
                                        useReducedMotion: N
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
