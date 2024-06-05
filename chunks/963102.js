"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderBar: function() {
    return h
  }
});
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("425493"),
  o = s("410030"),
  c = s("984370"),
  u = s("471731"),
  d = s("486620"),
  f = s("792125"),
  C = s("335131"),
  p = s("994896"),
  m = s("689938"),
  g = s("424681");

function E(e) {
  let {
    isLayer: t,
    onClose: s,
    isFullScreen: r = !1
  } = e;
  return (0, a.jsxs)(c.default, {
    className: n()(g.headerBar, {
      [g.fullscreenHeaderBar]: r
    }),
    innerClassname: g.shopLogoContainer,
    toolbar: r ? null : (0, a.jsx)(l.Fragment, {}),
    children: [(0, a.jsx)(d.default, {
      className: g.shopLogo
    }), r && (0, a.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: t ? C.closeCollectiblesShop : s,
      keybind: "ESC"
    })]
  })
}

function h(e) {
  let {
    isFullScreen: t,
    isLayer: s,
    onClose: r
  } = e, {
    newShopLogoEnabled: d
  } = (0, p.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), h = (0, o.default)();
  return d ? (0, a.jsx)(E, {
    isLayer: s,
    onClose: r,
    isFullScreen: t
  }) : (0, a.jsxs)(c.default, {
    className: n()((0, f.getThemeClass)(h), g.headerBar, {
      [g.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, a.jsx)(l.Fragment, {}),
    children: [(0, a.jsx)(u.default, {
      className: g.discordLogo
    }), (0, a.jsx)(c.default.Title, {
      children: m.default.Messages.COLLECTIBLES_SHOP
    }), t && (0, a.jsx)(i.default, {
      className: g.closeIcon,
      closeAction: s ? C.closeCollectiblesShop : r,
      keybind: "ESC"
    })]
  })
}