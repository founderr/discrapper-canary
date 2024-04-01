"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  r = a("906732"),
  i = a("48217"),
  u = a("26323"),
  o = a("430824"),
  c = a("914010"),
  d = a("709586"),
  A = a("981631"),
  E = a("30513"),
  f = a("689938"),
  h = a("267094");

function _(e) {
  let {
    analyticsSection: t,
    analyticsPage: a,
    isGIF: _,
    banner: R
  } = e, p = (0, s.useStateFromStores)([c.default], () => c.default.getGuildId()), g = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(p)), {
    analyticsLocations: I
  } = (0, r.default)();
  return null == g || g.hasFeature(A.GuildFeatures.ANIMATED_BANNER) || !_ && g.hasFeature(A.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
    className: h.container,
    children: [(0, n.jsx)(d.default, {
      className: h.guildBoostingIcon
    }), (0, n.jsx)(l.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: f.default.Messages.PREMIUM_GUILD_PREVIEW
    }), (0, n.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      color: l.Button.Colors.LINK,
      className: h.subscribeButton,
      onClick: () => {
        if (null == g) return;
        let e = {
          section: t,
          page: a,
          object: A.AnalyticsObjects.UPSELL_HEADER
        };
        null != R ? (0, i.openGuildBannerUpsellModal)({
          analyticsLocations: I,
          analyticsLocation: e,
          guild: g,
          isGIF: _,
          banner: R
        }) : (0, u.default)({
          analyticsLocations: I,
          analyticsSourceLocation: e,
          guild: g,
          perks: _ ? (0, E.animatedGuildBannerUpsellPerks)() : (0, E.guildBannerUpsellPerks)()
        })
      },
      children: f.default.Messages.PREMIUM_GUILD_BOOST_SERVER
    })]
  })
}