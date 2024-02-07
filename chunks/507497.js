"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var s = i("37983");
i("884691");
var n = i("446674"),
  l = i("77078"),
  r = i("685665"),
  o = i("836275"),
  a = i("379532"),
  u = i("305961"),
  c = i("162771"),
  d = i("118503"),
  h = i("49111"),
  f = i("944305"),
  p = i("782340"),
  v = i("323723");

function g(e) {
  let {
    analyticsSection: t,
    analyticsPage: i,
    isGIF: g,
    banner: m
  } = e, I = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId()), C = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(I)), {
    analyticsLocations: x
  } = (0, r.default)();
  return null == C || C.hasFeature(h.GuildFeatures.ANIMATED_BANNER) || !g && C.hasFeature(h.GuildFeatures.BANNER) ? null : (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(d.default, {
      className: v.guildBoostingIcon
    }), (0, s.jsx)(l.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: p.default.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, s.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      className: v.subscribeButton,
      onClick: () => {
        if (null == C) return;
        let e = {
          section: t,
          page: i,
          object: h.AnalyticsObjects.UPSELL_HEADER
        };
        null != m ? (0, o.openGuildBannerUpsellModal)({
          analyticsLocations: x,
          analyticsLocation: e,
          guild: C,
          isGIF: g,
          banner: m
        }) : (0, a.default)({
          analyticsLocations: x,
          analyticsSourceLocation: e,
          guild: C,
          perks: g ? (0, f.animatedGuildBannerUpsellPerks)() : (0, f.guildBannerUpsellPerks)()
        })
      },
      children: p.default.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}