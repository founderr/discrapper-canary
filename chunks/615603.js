t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(607070),
    d = t(158153),
    u = t(760558),
    _ = t(401786),
    E = t(450468),
    T = t(98278),
    I = t(314684),
    S = t(594174),
    N = t(78839),
    m = t(267642),
    C = t(74538),
    g = t(283029),
    A = t(357956),
    h = t(275909),
    O = t(981631),
    p = t(735825),
    x = t(689938),
    R = t(623765);
function f(e) {
    let { guildBoostSlot: s, isCancellable: t, onCancel: i, onUncancel: r, premiumSubscription: o, useReducedMotion: c } = e,
        d = a.useMemo(() => (null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null), [s]),
        u = (0, m.tl)(s);
    return (0, n.jsxs)(
        'li',
        {
            className: R.unappliedGuildBoostSlot,
            children: [
                (0, n.jsxs)('div', {
                    className: R.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, n.jsx)(h.Z, {
                            className: R.unappliedGuildBoostSlotIcon,
                            hasCooldown: s.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: c
                        }),
                        u && null != o
                            ? (0, n.jsx)(l.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({ date: o.currentPeriodEnd })
                              })
                            : s.isOnCooldown() && null != d
                              ? (0, n.jsx)(A.Z, { cooldown: d.getTime() })
                              : (0, n.jsx)(l.Text, {
                                    className: R.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
                                })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: R.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        t &&
                            !u &&
                            (0, n.jsx)(l.Button, {
                                className: R.unappliedGuildBoostSlotCta,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                onClick: () => i(s),
                                size: l.Button.Sizes.NONE,
                                children: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
                            }),
                        u &&
                            (0, n.jsx)(l.Button, {
                                className: R.unappliedGuildBoostSlotCta,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                onClick: () => r(s),
                                size: l.Button.Sizes.NONE,
                                children: x.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
                            })
                    ]
                })
            ]
        },
        s.id
    );
}
function M(e) {
    (0, l.openModalLazy)(
        async () => (s) =>
            (0, n.jsx)(_.default, {
                ...s,
                guildBoostSlot: e
            })
    );
}
function D(e) {
    (0, l.openModalLazy)(
        async () => (s) =>
            (0, n.jsx)(E.default, {
                ...s,
                guildBoostSlotId: e.id
            })
    );
}
s.Z = function (e) {
    let s, t;
    let { guildBoostSlots: i } = e,
        _ = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        E = (null == _ ? void 0 : _.isPausedOrPausePending) === !0,
        A = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        h = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
        P = (0, I.Vp)(),
        {
            appliedGuildBoostSlots: L,
            unappliedGuildBoostSlots: b,
            numActiveGuildBoostSlots: Z,
            hasCooldownBoosts: v,
            allGuildBoostsAreOnCooldown: j
        } = a.useMemo(() => {
            let e = [],
                s = [],
                t = 0,
                n = !1,
                a = !0;
            return (
                i.forEach((i) => {
                    !(0, m.tl)(i) && t++, i.isOnCooldown() ? (n = !0) : (a = !1), null != i.premiumGuildSubscription ? e.push(i) : s.push(i);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: s,
                    numActiveGuildBoostSlots: t,
                    hasCooldownBoosts: n,
                    allGuildBoostsAreOnCooldown: a
                }
            );
        }, [i]),
        B = null != _ ? (0, d.G)(_, P) : 0,
        U = Math.max(0, B - L.length),
        G = Z > B,
        F = B === i.length,
        y = F ? U : 1,
        V = a.useMemo(() => {
            let e = [];
            for (let s = 0; s < y; s++)
                e.push(
                    (0, n.jsx)(
                        g.Z,
                        {
                            className: R.headerBoostGem,
                            useReducedMotion: A
                        },
                        s
                    )
                );
            return e;
        }, [y, A]),
        w = null != P,
        k = a.useMemo(() => b.find((e) => e.isAvailable()), [b]);
    if (0 === b.length) return null;
    let Y = b.length;
    if (((s = F ? (1 === Y && w ? x.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : (j ? x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION).format({ numUnappliedGuildBoostSlots: Y })) : (j ? x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2).format({ numUnappliedGuildBoostSlots: Y })), C.ZP.isPremium(h))) {
        if (F && 1 === Y && w) t = P.skuId === p.Ft.FREE_GUILD_BOOST_1_MONTH ? x.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : x.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT;
        else {
            let e = (e, s) =>
                (0, n.jsx)(
                    l.Clickable,
                    {
                        className: R.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, T.z)();
                        },
                        children: e
                    },
                    s
                );
            t = j
                ? x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION_ALL_COOLDOWN.format({ learnMoreHook: e })
                : x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
                      numUnappliedGuildBoostSlots: Y,
                      learnMoreHook: e
                  });
        }
    } else t = j ? x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_ALL_COOLDOWN : x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({ numUnappliedGuildBoostSlots: Y });
    return (0, n.jsxs)('div', {
        className: R.wrapper,
        children: [
            w &&
                (0, n.jsxs)('div', {
                    className: R.specialHeader,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/semibold',
                            className: R.pill,
                            children: x.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
                        }),
                        (0, n.jsx)(l.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: x.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
                        })
                    ]
                }),
            (0, n.jsxs)('div', {
                className: r()(R.content, {
                    [R.headerWithBoost]: w,
                    [R.headerWithoutSpecialHeader]: !w
                }),
                children: [
                    (0, n.jsxs)('div', {
                        className: R.header,
                        children: [
                            (0, n.jsxs)('div', {
                                className: R.headerContentPrimary,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: R.headerBoostGems,
                                        children: V
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: R.__invalid_headerCopy,
                                        children: [
                                            (0, n.jsx)(l.Heading, {
                                                className: R.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: s
                                            }),
                                            (0, n.jsx)(l.Text, {
                                                className: R.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: R.headerContentSecondary,
                                children: (0, n.jsx)(l.Tooltip, {
                                    shouldShow: null == k || E,
                                    text: E ? x.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
                                    children: (e) =>
                                        (0, n.jsx)(l.Button, {
                                            ...e,
                                            disabled: null == k || E,
                                            onClick:
                                                null != k
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = k),
                                                              void (0, l.openModalLazy)(
                                                                  async () => (s) =>
                                                                      (0, n.jsx)(u.default, {
                                                                          ...s,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: O.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: x.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
                                        })
                                })
                            })
                        ]
                    }),
                    (!F || v) &&
                        (0, n.jsx)('ul', {
                            className: R.unappliedBoostSlots,
                            children: b.map((e) =>
                                (0, n.jsx)(
                                    f,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: G,
                                        onCancel: M,
                                        onUncancel: D,
                                        premiumSubscription: _,
                                        useReducedMotion: A
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
