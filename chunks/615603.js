t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(607070),
    d = t(975298),
    _ = t(158153),
    u = t(760558),
    E = t(401786),
    T = t(450468),
    S = t(98278),
    I = t(314684),
    N = t(594174),
    m = t(78839),
    A = t(267642),
    C = t(74538),
    g = t(283029),
    h = t(357956),
    O = t(275909),
    p = t(981631),
    R = t(474936),
    x = t(735825),
    M = t(689938),
    f = t(601709);
function D(e) {
    let { guildBoostSlot: s, isCancellable: t, onCancel: i, onUncancel: r, premiumSubscription: o, useReducedMotion: c } = e,
        d = a.useMemo(() => (null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null), [s]),
        _ = (0, A.tl)(s);
    return (0, n.jsxs)(
        'li',
        {
            className: f.unappliedGuildBoostSlot,
            children: [
                (0, n.jsxs)('div', {
                    className: f.unappliedGuildBoostSlotContentPrimary,
                    children: [
                        (0, n.jsx)(O.Z, {
                            className: f.unappliedGuildBoostSlotIcon,
                            hasCooldown: s.isOnCooldown(),
                            isCanceled: _,
                            useReducedMotion: c
                        }),
                        _ && null != o
                            ? (0, n.jsx)(l.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/medium',
                                  children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({ date: o.currentPeriodEnd })
                              })
                            : s.isOnCooldown() && null != d
                              ? (0, n.jsx)(h.Z, { cooldown: d.getTime() })
                              : (0, n.jsx)(l.Text, {
                                    className: f.__invalid_unappliedGuildBoostSlotDescription,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
                                })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: f.unappliedGuildBoostSlotContentSecondary,
                    children: [
                        t &&
                            !_ &&
                            (0, n.jsx)(l.Button, {
                                className: f.unappliedGuildBoostSlotCta,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                onClick: () => i(s),
                                size: l.Button.Sizes.NONE,
                                children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
                            }),
                        _ &&
                            (0, n.jsx)(l.Button, {
                                className: f.unappliedGuildBoostSlotCta,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                onClick: () => r(s),
                                size: l.Button.Sizes.NONE,
                                children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
                            })
                    ]
                })
            ]
        },
        s.id
    );
}
function L(e) {
    (0, l.openModalLazy)(
        async () => (s) =>
            (0, n.jsx)(E.default, {
                ...s,
                guildBoostSlot: e
            })
    );
}
function P(e) {
    (0, l.openModalLazy)(
        async () => (s) =>
            (0, n.jsx)(T.default, {
                ...s,
                guildBoostSlotId: e.id
            })
    );
}
s.Z = function (e) {
    let s, t;
    let { guildBoostSlots: i } = e,
        E = (0, o.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        T = (null == E ? void 0 : E.isPausedOrPausePending) === !0,
        { fractionalState: h } = (0, d.Z)(),
        O = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        b = (0, o.e7)([N.default], () => N.default.getCurrentUser()),
        Z = (0, I.Vp)(),
        v = h === R.a$.FP_SUB,
        j = T && !v,
        {
            appliedGuildBoostSlots: B,
            unappliedGuildBoostSlots: U,
            numActiveGuildBoostSlots: G,
            hasCooldownBoosts: F,
            allGuildBoostsAreOnCooldown: y
        } = a.useMemo(() => {
            let e = [],
                s = [],
                t = 0,
                n = !1,
                a = !0;
            return (
                i.forEach((i) => {
                    !(0, A.tl)(i) && t++, i.isOnCooldown() ? (n = !0) : (a = !1), null != i.premiumGuildSubscription ? e.push(i) : s.push(i);
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
        V = null != E ? (0, _.G)(E, Z) : 0,
        Y = Math.max(0, V - B.length),
        k = G > V,
        w = V === i.length,
        H = w ? Y : 1,
        W = a.useMemo(() => {
            let e = [];
            for (let s = 0; s < H; s++)
                e.push(
                    (0, n.jsx)(
                        g.Z,
                        {
                            className: f.headerBoostGem,
                            useReducedMotion: O
                        },
                        s
                    )
                );
            return e;
        }, [H, O]),
        K = null != Z,
        z = a.useMemo(() => U.find((e) => e.isAvailable()), [U]);
    if (0 === U.length) return null;
    let Q = U.length;
    if (((s = w ? (1 === Q && K ? M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : (y ? M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION).format({ numUnappliedGuildBoostSlots: Q })) : (y ? M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2).format({ numUnappliedGuildBoostSlots: Q })), C.ZP.isPremium(b))) {
        if (w && 1 === Q && K) t = Z.skuId === x.Ft.FREE_GUILD_BOOST_1_MONTH ? M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT;
        else {
            let e = (e, s) =>
                (0, n.jsx)(
                    l.Clickable,
                    {
                        className: f.headerLearnMoreLink,
                        tag: 'span',
                        onClick: () => {
                            (0, S.z)();
                        },
                        children: e
                    },
                    s
                );
            t = y
                ? M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION_ALL_COOLDOWN.format({ learnMoreHook: e })
                : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
                      numUnappliedGuildBoostSlots: Q,
                      learnMoreHook: e
                  });
        }
    } else t = y ? M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_ALL_COOLDOWN : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({ numUnappliedGuildBoostSlots: Q });
    return (0, n.jsxs)('div', {
        className: f.wrapper,
        children: [
            K &&
                (0, n.jsxs)('div', {
                    className: f.specialHeader,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/semibold',
                            className: f.pill,
                            children: M.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
                        }),
                        (0, n.jsx)(l.Heading, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: M.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
                        })
                    ]
                }),
            (0, n.jsxs)('div', {
                className: r()(f.content, {
                    [f.headerWithBoost]: K,
                    [f.headerWithoutSpecialHeader]: !K
                }),
                children: [
                    (0, n.jsxs)('div', {
                        className: f.header,
                        children: [
                            (0, n.jsxs)('div', {
                                className: f.headerContentPrimary,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: f.headerBoostGems,
                                        children: W
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: f.__invalid_headerCopy,
                                        children: [
                                            (0, n.jsx)(l.Heading, {
                                                className: f.headerHeading,
                                                variant: 'heading-lg/bold',
                                                children: s
                                            }),
                                            (0, n.jsx)(l.Text, {
                                                className: f.__invalid_headerSubheading,
                                                color: 'text-primary',
                                                variant: 'text-sm/normal',
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: f.headerContentSecondary,
                                children: (0, n.jsx)(l.Tooltip, {
                                    shouldShow: null == z || j,
                                    text: T ? M.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
                                    children: (e) =>
                                        (0, n.jsx)(l.Button, {
                                            ...e,
                                            disabled: null == z || j,
                                            onClick:
                                                null != z
                                                    ? () => {
                                                          var e;
                                                          return (
                                                              (e = z),
                                                              void (0, l.openModalLazy)(
                                                                  async () => (s) =>
                                                                      (0, n.jsx)(u.default, {
                                                                          ...s,
                                                                          guildBoostSlots: [e],
                                                                          locationSection: p.jXE.SETTINGS_PREMIUM
                                                                      })
                                                              )
                                                          );
                                                      }
                                                    : void 0,
                                            children: M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
                                        })
                                })
                            })
                        ]
                    }),
                    (!w || F) &&
                        (0, n.jsx)('ul', {
                            className: f.unappliedBoostSlots,
                            children: U.map((e) =>
                                (0, n.jsx)(
                                    D,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: k,
                                        onCancel: L,
                                        onUncancel: P,
                                        premiumSubscription: E,
                                        useReducedMotion: O
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
