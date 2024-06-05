"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderBar: function() {
    return S
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("425493"),
  o = s("410030"),
  u = s("984370"),
  c = s("471731"),
  d = s("486620"),
  f = s("792125"),
  C = s("335131"),
  E = s("994896"),
  p = s("689938"),
  m = s("424681");

function g(e) {
  let {
    isLayer: t,
    onClose: s,
    isFullScreen: n = !1
  } = e;
  return (0, a.jsxs)(u.default, {
    className: r()(m.headerBar, {
      [m.fullscreenHeaderBar]: n
    }),
    innerClassname: m.shopLogoContainer,
    toolbar: n ? null : (0, a.jsx)(l.Fragment, {}),
    children: [(0, a.jsx)(d.default, {
      className: m.shopLogo
    }), n && (0, a.jsx)(i.default, {
      className: m.closeIcon,
      closeAction: t ? C.closeCollectiblesShop : s,
      keybind: "ESC"
    })]
  })
}

function S(e) {
  let {
    isFullScreen: t,
    isLayer: s,
    onClose: n
  } = e, {
    newShopLogoEnabled: d
  } = (0, E.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), S = (0, o.default)();
  return d ? (0, a.jsx)(g, {
    isLayer: s,
    onClose: n,
    isFullScreen: t
  }) : (0, a.jsxs)(u.default, {
    className: r()((0, f.getThemeClass)(S), m.headerBar, {
      [m.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, a.jsx)(l.Fragment, {}),
    children: [(0, a.jsx)(c.default, {
      className: m.discordLogo
    }), (0, a.jsx)(u.default.Title, {
      children: p.default.Messages.COLLECTIBLES_SHOP
    }), t && (0, a.jsx)(i.default, {
      className: m.closeIcon,
      closeAction: s ? C.closeCollectiblesShop : n,
      keybind: "ESC"
    })]
  })
}