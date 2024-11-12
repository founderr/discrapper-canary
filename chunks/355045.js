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
    _ = n(199778),
    p = n(594174),
    h = n(314884),
    m = n(709586),
    g = n(267642),
    E = n(74538),
    v = n(678558),
    I = n(981631),
    b = n(474936),
    S = n(388032),
    T = n(933815);
t.Z = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        y = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        A = (0, o.e7)([h.Z], () => h.Z.boostSlots),
        { analyticsLocations: N } = (0, c.ZP)(),
        C = i.useMemo(
            () =>
                Object.keys(A).filter((e) => {
                    let t = A[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }),
            [A, n.id]
        ),
        R = i.useMemo(() => (0, g.vx)(A).length > 0, [A]);
    return (0, r.jsxs)('div', {
        className: T.guildStatus,
        children: [
            (0, r.jsx)(d.Z, {
                className: T.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.Heading, {
                className: T.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: T.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.guildBoostCount,
                        children: [
                            (0, r.jsx)(m.Z, { className: s()(T.guildBoostBadge, { [T.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(u.Text, {
                                className: T.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: S.intl.format(S.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    C.length > 0
                        ? (0, r.jsx)(u.Text, {
                              className: T.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: S.intl.format(S.t.Jeto2t, { numSubscriptions: C.length })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(_.Z, {
                hide: R,
                containerClassName: T.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: T.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            className: s()(T.guildBoostCta, T.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(v.Z, {
                                className: T.guildBoostCtaBoost,
                                innerClassName: s()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaBoostContent),
                                buttonShineClassName: T.guildBoostCtaBoostShine,
                                guild: n,
                                analyticsLocation: {
                                    page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                                    section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                    object: I.qAy.BUTTON_CTA,
                                    objectType: I.Qqv.BUY
                                },
                                closeLayer: t,
                                color: u.Button.Colors.WHITE,
                                size: u.Button.Sizes.LARGE,
                                fullWidth: !0
                            })
                        })
                    }),
                    E.ZP.hasFreeBoosts(y) || E.ZP.isPremium(y, b.p9.TIER_2)
                        ? (0, r.jsxs)(u.Button, {
                              className: s()(T.guildBoostCta, T.guildBoostCtaSecondary),
                              innerClassName: s()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaGiftContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: b.Si.TIER_2,
                                      isGift: !0,
                                      analyticsLocations: N,
                                      analyticsObject: {
                                          page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: I.qAy.BUTTON_ICON,
                                          objectType: I.Qqv.GIFT
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: [
                                  (0, r.jsx)(u.GiftIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: T.guildBoostCtaGiftIcon
                                  }),
                                  S.intl.string(S.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(u.Button, {
                              className: s()(T.guildBoostCta, T.guildBoostCtaSecondary),
                              innerClassName: s()(T.__invalid_guildBoostCtaContent, T.__invalid_guildBoostCtaSubscribeContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: b.Si.TIER_2,
                                      analyticsLocations: N,
                                      analyticsObject: {
                                          page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
                                          section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                          object: I.qAy.BUTTON_ICON,
                                          objectType: I.Qqv.BUY
                                      },
                                      onClose: (e) => e && t()
                                  });
                              },
                              size: u.Button.Sizes.LARGE,
                              children: S.intl.string(S.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
