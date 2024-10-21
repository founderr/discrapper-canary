var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(622535),
    u = n(481060),
    c = n(906732),
    d = n(565138),
    _ = n(963249),
    E = n(594174),
    f = n(314884),
    h = n(709586),
    p = n(74538),
    I = n(678558),
    m = n(981631),
    T = n(474936),
    S = n(689938),
    g = n(933815);
t.Z = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        A = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        N = (0, o.e7)([f.Z], () => f.Z.boostSlots),
        { analyticsLocations: R } = (0, c.ZP)(),
        O = i.useMemo(
            () =>
                Object.keys(N).filter((e) => {
                    let t = N[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [N, n.id]
        );
    return (0, r.jsxs)('div', {
        className: g.guildStatus,
        children: [
            (0, r.jsx)(d.Z, {
                className: g.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.Heading, {
                className: g.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: g.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.guildBoostCount,
                        children: [
                            (0, r.jsx)(h.Z, { className: s()(g.guildBoostBadge, { [g.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(u.Text, {
                                className: g.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: S.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    O.length > 0
                        ? (0, r.jsx)(u.Text, {
                              className: g.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: S.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({ numSubscriptions: O.length })
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            className: s()(g.guildBoostCta, g.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(I.Z, {
                                className: g.guildBoostCtaBoost,
                                innerClassName: s()(g.__invalid_guildBoostCtaContent, g.guildBoostCtaBoostContent),
                                buttonShineClassName: g.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: m.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: m.qAy.BUTTON_CTA,
                                    objectType: m.Qqv.BUY
                                },
                                closeLayer: t,
                                color: u.Button.Colors.WHITE,
                                size: u.Button.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    p.ZP.hasFreeBoosts(A) || p.ZP.isPremium(A, T.p9.TIER_2)
                        ? (0, r.jsxs)(u.Button, {
                              className: s()(g.guildBoostCta, g.guildBoostCtaSecondary),
                              innerClassName: s()(g.__invalid_guildBoostCtaContent, g.guildBoostCtaGiftContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, _.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: T.Si.TIER_2,
                                      isGift: !0,
                                      analyticsLocations: R,
                                      analyticsObject: {
                                          page: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: m.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: m.qAy.BUTTON_ICON,
                                          objectType: m.Qqv.GIFT
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.GiftIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: g.guildBoostCtaGiftIcon
                                  }),
                                  S.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO
                              ]
                          })
                        : (0, r.jsx)(u.Button, {
                              className: s()(g.guildBoostCta, g.guildBoostCtaSecondary),
                              innerClassName: s()(g.__invalid_guildBoostCtaContent, g.__invalid_guildBoostCtaSubscribeContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, _.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: T.Si.TIER_2,
                                      analyticsLocations: R,
                                      analyticsObject: {
                                          page: m.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: m.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: m.qAy.BUTTON_ICON,
                                          objectType: m.Qqv.BUY
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: S.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
                          })
                ]
            })
        ]
    });
};
