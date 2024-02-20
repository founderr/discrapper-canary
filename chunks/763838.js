"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("716241"),
  o = s("183137"),
  d = s("592407"),
  u = s("181114"),
  c = s("538137"),
  E = s("599110"),
  _ = s("500307"),
  I = s("49111"),
  T = s("782340"),
  f = s("301794");

function S(e) {
  let {
    pills: t
  } = e;
  return (0, a.jsx)("div", {
    className: f.row,
    children: t.map(e => (0, a.jsx)("div", {
      className: f.pill,
      children: (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function m(e) {
  let {
    guildId: t,
    showCTA: s,
    responsive: l = !0
  } = e, m = [
    [T.default.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, T.default.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [T.default.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, T.default.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [T.default.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, T.default.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [T.default.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, T.default.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, a.jsx)("div", {
    className: n({
      [f.responsive]: l
    }),
    children: (0, a.jsxs)("div", {
      className: f.container,
      children: [(0, a.jsxs)("div", {
        className: f.content,
        children: [(0, a.jsx)("div", {
          className: f.pillContainer,
          children: m.map((e, t) => (0, a.jsx)(S, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, a.jsxs)("div", {
          className: f.ctaContent,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: T.default.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), s && (0, a.jsxs)(u.default, {
            size: i.Button.Sizes.MEDIUM,
            className: f.getStartedButton,
            innerClassName: f.getStartedButtonContents,
            shineSize: u.default.ShineSizes.SMALL,
            onClick: () => {
              E.default.track(I.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, r.collectGuildAnalyticsMetadata)(t),
                action_taken: _.GuildShopPreviewClickActions.GET_STARTED_CLICK
              }), d.default.open(t, I.GuildSettingsSections.GUILD_PRODUCTS)
            },
            children: [T.default.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, a.jsx)(c.default, {
              className: f.getStartedArrow
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: f.muralImageContainer,
        children: [(0, a.jsx)("img", {
          src: (0, o.getAssetCDNUrl)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: f.muralImage
        }), (0, a.jsx)("img", {
          src: (0, o.getAssetCDNUrl)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: f.muralImageReducedWidth
        })]
      })]
    })
  })
}