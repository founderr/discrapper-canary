"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var i = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  a = s("481060"),
  n = s("367907"),
  d = s("357352"),
  o = s("434404"),
  u = s("877453"),
  c = s("626135"),
  C = s("629481"),
  _ = s("981631"),
  f = s("689938"),
  S = s("505679");

function h(e) {
  let {
    pills: t
  } = e;
  return (0, i.jsx)("div", {
    className: S.row,
    children: t.map(e => (0, i.jsx)("div", {
      className: S.pill,
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function x(e) {
  let {
    guildId: t,
    showCTA: s,
    responsive: l = !0
  } = e, x = [
    [f.default.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, f.default.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [f.default.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, f.default.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [f.default.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, f.default.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [f.default.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, f.default.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, i.jsx)("div", {
    className: r()({
      [S.responsive]: l
    }),
    children: (0, i.jsxs)("div", {
      className: S.container,
      children: [(0, i.jsxs)("div", {
        className: S.content,
        children: [(0, i.jsx)("div", {
          className: S.pillContainer,
          children: x.map((e, t) => (0, i.jsx)(h, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, i.jsxs)("div", {
          className: S.ctaContent,
          children: [(0, i.jsx)(a.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: f.default.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), s && (0, i.jsxs)(a.ShinyButton, {
            size: a.Button.Sizes.MEDIUM,
            className: S.getStartedButton,
            innerClassName: S.getStartedButtonContents,
            shineSize: a.ShinyButton.ShineSizes.SMALL,
            onClick: () => {
              c.default.track(_.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, n.collectGuildAnalyticsMetadata)(t),
                action_taken: C.GuildShopPreviewClickActions.GET_STARTED_CLICK
              }), o.default.open(t, _.GuildSettingsSections.GUILD_PRODUCTS)
            },
            children: [f.default.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, i.jsx)(u.default, {
              className: S.getStartedArrow
            })]
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: S.muralImageContainer,
        children: [(0, i.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: S.muralImage
        }), (0, i.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: S.muralImageReducedWidth
        })]
      })]
    })
  })
}