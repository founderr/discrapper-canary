"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("399606"),
  r = s("481060"),
  o = s("623624"),
  d = s("678558"),
  u = s("430824"),
  c = s("346656"),
  S = s("709586"),
  E = s("267642"),
  T = s("981631"),
  _ = s("689938"),
  I = s("550634");
t.default = function(e) {
  let {
    className: t,
    guildId: s,
    boostingVariant: n
  } = e, N = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(s), [s]);
  return null == N ? (0, a.jsx)("div", {
    className: l()(t, I.guildContainer),
    children: (0, a.jsx)("div", {
      className: I.guildInfoContainer,
      children: (0, a.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
      })
    })
  }) : (0, a.jsxs)("div", {
    className: l()(t, I.guildContainer),
    children: [(0, a.jsx)(c.default, {
      className: I.__invalid_guildIcon,
      guild: N,
      size: c.default.Sizes.LARGER
    }), (0, a.jsxs)("div", {
      className: I.guildInfoContainer,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-lg/bold",
        children: N.name
      }), (0, a.jsxs)("div", {
        className: I.guildBoostStatsContainer,
        children: [(0, a.jsx)(S.default, {
          className: I.guildBoostBadge,
          width: 16,
          height: 16
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: N.premiumSubscriberCount
          })
        }), (0, a.jsx)("div", {
          className: I.separator
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, E.getTierName)(N.premiumTier, {
            useLevels: !1
          })
        })]
      })]
    }), n ? (0, a.jsx)(d.default, {
      guild: N,
      analyticsLocation: {
        page: T.AnalyticsPages.GUILD_BOOSTING_USER_SETTINGS,
        section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: T.AnalyticsObjects.BUTTON_CTA,
        objectType: T.AnalyticsObjectTypes.BUY
      },
      pauseAnimation: !0,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      buttonText: _.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
    }) : (0, a.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        (0, o.openGuildBoostingMarketingModal)({
          guildId: N.id,
          location: {
            section: T.AnalyticsSections.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      },
      size: r.Button.Sizes.MEDIUM,
      children: _.default.Messages.NAVIGATE_TO_GUILD
    })]
  })
}