var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(622535),
    u = n(481060),
    c = n(906732),
    d = n(565138),
    f = n(963249),
    _ = n(594174),
    h = n(314884),
    p = n(709586),
    m = n(74538),
    g = n(678558),
    E = n(981631),
    v = n(474936),
    I = n(388032),
    S = n(933815);
t.Z = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        T = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        b = (0, o.e7)([h.Z], () => h.Z.boostSlots),
        { analyticsLocations: y } = (0, c.ZP)(),
        A = i.useMemo(
            () =>
                Object.keys(b).filter((e) => {
                    let t = b[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [b, n.id]
        );
    return (0, r.jsxs)('div', {
        className: S.guildStatus,
        children: [
            (0, r.jsx)(d.Z, {
                className: S.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.Heading, {
                className: S.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: S.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.guildBoostCount,
                        children: [
                            (0, r.jsx)(p.Z, { className: s()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(u.Text, {
                                className: S.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: I.intl.format(I.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    A.length > 0
                        ? (0, r.jsx)(u.Text, {
                              className: S.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: I.intl.format(I.t.Jeto2t, { numSubscriptions: A.length })
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: S.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            className: s()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(g.Z, {
                                className: S.guildBoostCtaBoost,
                                innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
                                buttonShineClassName: S.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: E.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: E.qAy.BUTTON_CTA,
                                    objectType: E.Qqv.BUY
                                },
                                closeLayer: t,
                                color: u.Button.Colors.WHITE,
                                size: u.Button.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    m.ZP.hasFreeBoosts(T) || m.ZP.isPremium(T, v.p9.TIER_2)
                        ? (0, r.jsxs)(u.Button, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: v.Si.TIER_2,
                                      isGift: !0,
                                      analyticsLocations: y,
                                      analyticsObject: {
                                          page: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: E.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: E.qAy.BUTTON_ICON,
                                          objectType: E.Qqv.GIFT
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.GiftIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.guildBoostCtaGiftIcon
                                  }),
                                  I.intl.string(I.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(u.Button, {
                              className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
                              innerClassName: s()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: v.Si.TIER_2,
                                      analyticsLocations: y,
                                      analyticsObject: {
                                          page: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: E.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: E.qAy.BUTTON_ICON,
                                          objectType: E.Qqv.BUY
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: I.intl.string(I.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
