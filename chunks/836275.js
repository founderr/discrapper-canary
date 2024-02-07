"use strict";
i.r(t), i.d(t, {
  openGuildBannerUpsellModal: function() {
    return p
  }
});
var s = i("37983");
i("884691");
var n = i("77078"),
  l = i("366634"),
  r = i("974755"),
  o = i("427459"),
  a = i("379532"),
  u = i("944305"),
  c = i("49111"),
  d = i("782340"),
  h = i("670362");

function f(e) {
  let {
    guild: t,
    banner: i
  } = e;
  return (0, s.jsx)("div", {
    className: h.guildBanner,
    style: {
      backgroundImage: "url(".concat(i)
    },
    children: (0, s.jsxs)("div", {
      className: h.guildHeader,
      children: [(0, s.jsx)(r.default, {
        guild: t,
        isBannerVisible: !0
      }), (0, s.jsx)(n.Heading, {
        className: h.guildName,
        variant: "heading-md/semibold",
        children: t.toString()
      }), (0, s.jsx)(l.default, {
        className: h.dropdown,
        open: !1
      })]
    })
  })
}

function p(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: i,
    guild: n,
    isGIF: l,
    banner: r
  } = e, h = l ? (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.BANNER);
  null != h && (0, a.default)({
    analyticsLocations: t,
    analyticsSourceLocation: i,
    guild: n,
    headerProps: {
      title: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
      subtitle: function(e, t) {
        let i = (0, o.getTierName)(e);
        return t ? d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
          targetLevelOrPlan: i
        }) : d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
          targetLevelOrPlan: i
        })
      }(h, l),
      image: (0, s.jsx)(f, {
        guild: n,
        banner: r
      })
    },
    perkIntro: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
    perks: l ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
  })
}