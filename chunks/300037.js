var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(399606),
  r = t(481060),
  o = t(623624),
  c = t(678558),
  E = t(430824),
  d = t(346656),
  _ = t(709586),
  T = t(267642),
  S = t(981631),
  u = t(689938),
  I = t(521421);
s.Z = function(e) {
  let {
    className: s,
    guildId: t,
    boostingVariant: i
  } = e, N = (0, l.e7)([E.Z], () => E.Z.getGuild(t), [t]);
  return null == N ? (0, n.jsx)("div", {
    className: a()(s, I.guildContainer),
    children: (0, n.jsx)("div", {
      className: I.guildInfoContainer,
      children: (0, n.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
      })
    })
  }) : (0, n.jsxs)("div", {
    className: a()(s, I.guildContainer),
    children: [(0, n.jsx)(d.Z, {
      className: I.__invalid_guildIcon,
      guild: N,
      size: d.Z.Sizes.LARGER
    }), (0, n.jsxs)("div", {
      className: I.guildInfoContainer,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: N.name
      }), (0, n.jsxs)("div", {
        className: I.guildBoostStatsContainer,
        children: [(0, n.jsx)(_.Z, {
          className: I.guildBoostBadge,
          width: 16,
          height: 16
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: u.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: N.premiumSubscriberCount
          })
        }), (0, n.jsx)("div", {
          className: I.separator
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, T.nW)(N.premiumTier, {
            useLevels: !1
          })
        })]
      })]
    }), i ? (0, n.jsx)(c.Z, {
      guild: N,
      analyticsLocation: {
        page: S.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: S.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: S.qAy.BUTTON_CTA,
        objectType: S.Qqv.BUY
      },
      pauseAnimation: !0,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      buttonText: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
    }) : (0, n.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        (0, o.f)({
          guildId: N.id,
          location: {
            section: S.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      },
      size: r.Button.Sizes.MEDIUM,
      children: u.Z.Messages.NAVIGATE_TO_GUILD
    })]
  })
}