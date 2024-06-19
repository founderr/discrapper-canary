t.d(s, {
  Z: function() {
    return h
  }
});
var n = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  l = t(481060),
  o = t(367907),
  a = t(357352),
  c = t(434404),
  d = t(626135),
  C = t(629481),
  u = t(981631),
  _ = t(689938),
  x = t(197452);

function I(e) {
  let {
    pills: s
  } = e;
  return (0, n.jsx)("div", {
    className: x.row,
    children: s.map(e => (0, n.jsx)("div", {
      className: x.pill,
      children: (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function h(e) {
  let {
    guildId: s,
    showCTA: t,
    responsive: r = !0
  } = e, h = [
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [_.Z.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, _.Z.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, n.jsx)("div", {
    className: i()({
      [x.responsive]: r
    }),
    children: (0, n.jsxs)("div", {
      className: x.container,
      children: [(0, n.jsxs)("div", {
        className: x.content,
        children: [(0, n.jsx)("div", {
          className: x.pillContainer,
          children: h.map((e, s) => (0, n.jsx)(I, {
            pills: e
          }, "pill-row-".concat(s)))
        }), (0, n.jsxs)("div", {
          className: x.ctaContent,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: _.Z.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), t && (0, n.jsxs)(l.ShinyButton, {
            size: l.Button.Sizes.MEDIUM,
            className: x.getStartedButton,
            innerClassName: x.getStartedButtonContents,
            shineSize: l.ShinyButton.ShineSizes.SMALL,
            onClick: () => {
              d.default.track(u.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, o.hH)(s),
                action_taken: C.mz.GET_STARTED_CLICK
              }), c.Z.open(s, u.pNK.GUILD_PRODUCTS)
            },
            children: [_.Z.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, n.jsx)(l.ArrowSmallRightIcon, {
              size: "md",
              color: "currentColor",
              className: x.getStartedArrow
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: x.muralImageContainer,
        children: [(0, n.jsx)("img", {
          src: (0, a.b)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: x.muralImage
        }), (0, n.jsx)("img", {
          src: (0, a.b)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: x.muralImageReducedWidth
        })]
      })]
    })
  })
}