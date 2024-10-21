var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(399606),
    o = t(481060),
    l = t(565138),
    c = t(623624),
    d = t(678558),
    _ = t(430824),
    u = t(709586),
    E = t(267642),
    T = t(981631),
    S = t(689938),
    I = t(74175);
s.Z = function (e) {
    let { className: s, guildId: t, boostingVariant: a } = e,
        N = (0, r.e7)([_.Z], () => _.Z.getGuild(t), [t]);
    return null == N
        ? (0, n.jsx)('div', {
              className: i()(s, I.guildContainer),
              children: (0, n.jsx)('div', {
                  className: I.guildInfoContainer,
                  children: (0, n.jsx)(o.Text, {
                      variant: 'text-lg/bold',
                      children: S.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
                  })
              })
          })
        : (0, n.jsxs)('div', {
              className: i()(s, I.guildContainer),
              children: [
                  (0, n.jsx)(l.Z, {
                      className: I.__invalid_guildIcon,
                      guild: N,
                      size: l.Z.Sizes.LARGER
                  }),
                  (0, n.jsxs)('div', {
                      className: I.guildInfoContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-lg/bold',
                              children: N.name
                          }),
                          (0, n.jsxs)('div', {
                              className: I.guildBoostStatsContainer,
                              children: [
                                  (0, n.jsx)(u.Z, {
                                      className: I.guildBoostBadge,
                                      width: 16,
                                      height: 16
                                  }),
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: S.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: N.premiumSubscriberCount })
                                  }),
                                  (0, n.jsx)('div', { className: I.separator }),
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-sm/bold',
                                      color: 'text-muted',
                                      children: (0, E.nW)(N.premiumTier, { useLevels: !1 })
                                  })
                              ]
                          })
                      ]
                  }),
                  a
                      ? (0, n.jsx)(d.Z, {
                            guild: N,
                            analyticsLocation: {
                                page: T.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                                section: T.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: T.qAy.BUTTON_CTA,
                                objectType: T.Qqv.BUY
                            },
                            pauseAnimation: !0,
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            buttonText: S.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
                        })
                      : (0, n.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, c.f)({
                                    guildId: N.id,
                                    location: { section: T.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA }
                                });
                            },
                            size: o.Button.Sizes.MEDIUM,
                            children: S.Z.Messages.NAVIGATE_TO_GUILD
                        })
              ]
          });
};
