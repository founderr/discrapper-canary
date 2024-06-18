"use strict";
t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(367907),
  o = t(357352),
  c = t(434404),
  d = t(626135),
  u = t(629481),
  E = t(981631),
  _ = t(689938),
  I = t(505679);

function T(e) {
  let {
    pills: s
  } = e;
  return (0, n.jsx)("div", {
    className: I.row,
    children: s.map(e => (0, n.jsx)("div", {
      className: I.pill,
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function N(e) {
  let {
    guildId: s,
    showCTA: t,
    responsive: i = !0
  } = e, N = [
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, n.jsx)("div", {
    className: l()({
      [I.responsive]: i
    }),
    children: (0, n.jsxs)("div", {
      className: I.container,
      children: [(0, n.jsxs)("div", {
        className: I.content,
        children: [(0, n.jsx)("div", {
          className: I.pillContainer,
          children: N.map((e, s) => (0, n.jsx)(T, {
            pills: e
          }, "pill-row-".concat(s)))
        }), (0, n.jsxs)("div", {
          className: I.ctaContent,
          children: [(0, n.jsx)(a.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: _.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), t && (0, n.jsxs)(a.ShinyButton, {
            size: a.Button.Sizes.MEDIUM,
            className: I.getStartedButton,
            innerClassName: I.getStartedButtonContents,
            shineSize: a.ShinyButton.ShineSizes.SMALL,
            onClick: () => {
              d.default.track(E.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, r.hH)(s),
                action_taken: u.mz.GET_STARTED_CLICK
              }), c.Z.open(s, E.pNK.GUILD_PRODUCTS)
            },
            children: [_.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, n.jsx)(a.ArrowSmallRightIcon, {
              size: "md",
              color: "currentColor",
              className: I.getStartedArrow
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: I.muralImageContainer,
        children: [(0, n.jsx)("img", {
          src: (0, o.b)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: I.muralImage
        }), (0, n.jsx)("img", {
          src: (0, o.b)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: I.muralImageReducedWidth
        })]
      })]
    })
  })
}