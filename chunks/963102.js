"use strict";
l.r(t), l.d(t, {
  CollectiblesShopHeaderBar: function() {
    return h
  }
});
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("425493"),
  o = l("410030"),
  c = l("984370"),
  u = l("471731"),
  d = l("486620"),
  f = l("792125"),
  C = l("335131"),
  p = l("994896"),
  m = l("689938"),
  g = l("424681");

function E(e) {
  let {
    isLayer: t,
    onClose: l,
    isFullScreen: r = !1
  } = e;
  return (0, a.jsxs)(c.default, {
    className: n()(g.headerBar, {
      [g.fullscreenHeaderBar]: r
    }),
    toolbar: r ? null : (0, a.jsx)(s.Fragment, {}),
    children: [(0, a.jsx)(d.default, {
      className: g.shopLogo
    }), r && (0, a.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: t ? C.closeCollectiblesShop : l,
      keybind: "ESC"
    })]
  })
}

function h(e) {
  let {
    isFullScreen: t,
    isLayer: l,
    onClose: r
  } = e, {
    newShopLogoEnabled: d
  } = (0, p.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), h = (0, o.default)();
  return d ? (0, a.jsx)(E, {
    isLayer: l,
    onClose: r,
    isFullScreen: t
  }) : (0, a.jsxs)(c.default, {
    className: n()((0, f.getThemeClass)(h), g.headerBar, {
      [g.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, a.jsx)(s.Fragment, {}),
    children: [(0, a.jsx)(u.default, {
      className: g.discordLogo
    }), (0, a.jsx)(c.default.Title, {
      children: m.default.Messages.COLLECTIBLES_SHOP
    }), t && (0, a.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: l ? C.closeCollectiblesShop : r,
      keybind: "ESC"
    })]
  })
}