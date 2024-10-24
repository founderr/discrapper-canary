var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(399606),
    o = t(481060),
    l = t(975298),
    c = t(565138),
    d = t(623624),
    _ = t(678558),
    u = t(430824),
    E = t(709586),
    T = t(267642),
    S = t(981631),
    I = t(474936),
    N = t(689938),
    m = t(74175);
s.Z = function (e) {
    let { className: s, guildId: t, boostingVariant: a } = e,
        C = (0, r.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        { fractionalState: A } = (0, l.Z)(),
        g = A === I.a$.FP_ONLY;
    return null == C
        ? (0, n.jsx)('div', {
              className: i()(s, m.guildContainer),
              children: (0, n.jsx)('div', {
                  className: m.guildInfoContainer,
                  children: (0, n.jsx)(o.Text, {
                      variant: 'text-lg/bold',
                      children: N.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
                  })
              })
          })
        : (0, n.jsxs)('div', {
              className: i()(s, m.guildContainer),
              children: [
                  (0, n.jsx)(c.Z, {
                      className: m.__invalid_guildIcon,
                      guild: C,
                      size: c.Z.Sizes.LARGER
                  }),
                  (0, n.jsxs)('div', {
                      className: m.guildInfoContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-lg/bold',
                              children: C.name
                          }),
                          (0, n.jsxs)('div', {
                              className: m.guildBoostStatsContainer,
                              children: [
                                  (0, n.jsx)(E.Z, {
                                      className: m.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: N.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: C.premiumSubscriberCount })
                                  }),
                                  (0, n.jsx)('div', { className: m.separator }),
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, T.nW)(C.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  a
                      ? (0, n.jsx)(_.Z, {
                            guild: C,
                            analyticsLocation: {
                                page: S.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: S.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: S.qAy.BUTTON_CTA,
                                objectType: S.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            buttonText: N.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER,
                            disabled: g
                        })
                      : (0, n.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, d.f)({
                                    guildId: C.id,
                                    location: { section: S.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: o.Button.Sizes.MEDIUM,
                            disabled: g,
                            children: N.Z.Messages.NAVIGATE_TO_GUILD
                        })
              ]
          });
};
