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
    h = n(594174),
    p = n(314884),
    m = n(709586),
    g = n(267642),
    E = n(74538),
    v = n(678558),
    I = n(981631),
    S = n(474936),
    T = n(388032),
    b = n(933815);
t.Z = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        y = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        A = (0, o.e7)([p.Z], () => p.Z.boostSlots),
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
        className: b.guildStatus,
        children: [
            (0, r.jsx)(d.Z, {
                className: b.guildIcon,
                guild: n,
                size: d.Z.Sizes.LARGER
            }),
            (0, r.jsx)(u.Heading, {
                className: b.guildName,
                color: 'always-white',
                variant: 'text-lg/bold',
                children: n.name
            }),
            (0, r.jsxs)('div', {
                className: b.guildBoostCountWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.guildBoostCount,
                        children: [
                            (0, r.jsx)(m.Z, { className: s()(b.guildBoostBadge, { [b.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
                            (0, r.jsx)(u.Text, {
                                className: b.guildStatusCopy,
                                variant: 'text-md/bold',
                                children: T.intl.format(T.t['pob/cH'], { subscriptions: n.premiumSubscriberCount })
                            })
                        ]
                    }),
                    C.length > 0
                        ? (0, r.jsx)(u.Text, {
                              className: b.guildBoostCountCurrentUser,
                              variant: 'text-sm/normal',
                              children: T.intl.format(T.t.Jeto2t, { numSubscriptions: C.length })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(_.Z, {
                hide: R,
                containerClassName: b.FPContainer
            }),
            (0, r.jsxs)('div', {
                className: b.guildBoostCtas,
                children: [
                    (0, r.jsx)(l.$, {
                        onChange: a,
                        threshold: 0.9,
                        children: (0, r.jsx)('div', {
                            className: s()(b.guildBoostCta, b.guildBoostCtaBoostWrapper),
                            children: (0, r.jsx)(v.Z, {
                                className: b.guildBoostCtaBoost,
                                innerClassName: s()(b.__invalid_guildBoostCtaContent, b.guildBoostCtaBoostContent),
                                buttonShineClassName: b.guildBoostCtaBoostShine,
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
                    E.ZP.hasFreeBoosts(y) || E.ZP.isPremium(y, S.p9.TIER_2)
                        ? (0, r.jsxs)(u.Button, {
                              className: s()(b.guildBoostCta, b.guildBoostCtaSecondary),
                              innerClassName: s()(b.__invalid_guildBoostCtaContent, b.guildBoostCtaGiftContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: S.Si.TIER_2,
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
                                      className: b.guildBoostCtaGiftIcon
                                  }),
                                  T.intl.string(T.t['8MYSQ0'])
                              ]
                          })
                        : (0, r.jsx)(u.Button, {
                              className: s()(b.guildBoostCta, b.guildBoostCtaSecondary),
                              innerClassName: s()(b.__invalid_guildBoostCtaContent, b.__invalid_guildBoostCtaSubscribeContent),
                              look: u.Button.Looks.OUTLINED,
                              color: u.Button.Colors.WHITE,
                              onClick: function () {
                                  (0, f.Z)({
                                      initialPlanId: null,
                                      subscriptionTier: S.Si.TIER_2,
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
                              children: T.intl.string(T.t.Q43TvL)
                          })
                ]
            })
        ]
    });
};
