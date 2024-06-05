"use strict";
a.r(t), a.d(t, {
  CollectiblesShopHeaderBar: function() {
    return h
  }
});
var s = a("735250"),
  l = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("425493"),
  o = a("410030"),
  c = a("984370"),
  u = a("471731"),
  d = a("486620"),
  f = a("792125"),
  C = a("335131"),
  p = a("994896"),
  m = a("689938"),
  g = a("424681");

function E(e) {
  let {
    isLayer: t,
    onClose: a,
    isFullScreen: r = !1
  } = e;
  return (0, s.jsxs)(c.default, {
    className: n()(g.headerBar, {
      [g.fullscreenHeaderBar]: r
    }),
    innerClassname: g.shopLogoContainer,
    toolbar: r ? null : (0, s.jsx)(l.Fragment, {}),
    children: [(0, s.jsx)(d.default, {
      className: g.shopLogo
    }), r && (0, s.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: t ? C.closeCollectiblesShop : a,
      keybind: "ESC"
    })]
  })
}

function h(e) {
  let {
    isFullScreen: t,
    isLayer: a,
    onClose: r
  } = e, {
    newShopLogoEnabled: d
  } = (0, p.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), h = (0, o.default)();
  return d ? (0, s.jsx)(E, {
    isLayer: a,
    onClose: r,
    isFullScreen: t
  }) : (0, s.jsxs)(c.default, {
    className: n()((0, f.getThemeClass)(h), g.headerBar, {
      [g.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, s.jsx)(l.Fragment, {}),
    children: [(0, s.jsx)(u.default, {
      className: g.discordLogo
    }), (0, s.jsx)(c.default.Title, {
      children: m.default.Messages.COLLECTIBLES_SHOP
    }), t && (0, s.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: a ? C.closeCollectiblesShop : r,
      keybind: "ESC"
    })]
  })
}