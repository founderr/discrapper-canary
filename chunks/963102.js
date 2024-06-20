"use strict";
t.d(s, {
  I: function() {
    return x
  }
});
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(425493),
  o = t(410030),
  c = t(984370),
  u = t(471731),
  d = t(486620),
  C = t(792125),
  f = t(335131),
  E = t(994896),
  p = t(689938),
  g = t(313858);

function m(e) {
  let {
    isLayer: s,
    onClose: t,
    isFullScreen: r = !1
  } = e;
  return (0, n.jsxs)(c.Z, {
    className: i()(g.headerBar, {
      [g.fullscreenHeaderBar]: r
    }),
    innerClassname: g.shopLogoContainer,
    toolbar: r ? null : (0, n.jsx)(a.Fragment, {}),
    children: [(0, n.jsx)(d.Z, {
      className: g.shopLogo
    }), r && (0, n.jsx)(l.Z, {
      className: g.closeIcon,
      closeAction: s ? f.DR : t,
      keybind: "ESC"
    })]
  })
}

function x(e) {
  let {
    isFullScreen: s,
    isLayer: t,
    onClose: r
  } = e, {
    newShopLogoEnabled: d
  } = (0, E.O)({
    location: "CollectiblesShop"
  }), x = (0, o.ZP)();
  return d ? (0, n.jsx)(m, {
    isLayer: t,
    onClose: r,
    isFullScreen: s
  }) : (0, n.jsxs)(c.Z, {
    className: i()((0, C.Q)(x), g.headerBar, {
      [g.fullscreenHeaderBar]: s
    }),
    toolbar: s ? null : (0, n.jsx)(a.Fragment, {}),
    children: [(0, n.jsx)(u.Z, {
      className: g.discordLogo
    }), (0, n.jsx)(c.Z.Title, {
      children: p.Z.Messages.COLLECTIBLES_SHOP
    }), s && (0, n.jsx)(l.Z, {
      className: g.closeIcon,
      closeAction: t ? f.DR : r,
      keybind: "ESC"
    })]
  })
}