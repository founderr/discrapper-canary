"use strict";
n.d(t, {
  I: function() {
    return m
  }
});
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  s = n(425493),
  c = n(410030),
  l = n(984370),
  d = n(471731),
  u = n(486620),
  p = n(792125),
  f = n(335131),
  g = n(994896),
  _ = n(689938),
  C = n(313858);

function b(e) {
  let {
    isLayer: t,
    onClose: n,
    isFullScreen: i = !1
  } = e;
  return (0, r.jsxs)(l.Z, {
    className: o()(C.headerBar, {
      [C.fullscreenHeaderBar]: i
    }),
    innerClassname: C.shopLogoContainer,
    toolbar: i ? null : (0, r.jsx)(a.Fragment, {}),
    children: [(0, r.jsx)(u.Z, {
      className: C.shopLogo
    }), i && (0, r.jsx)(s.Z, {
      className: C.closeIcon,
      closeAction: t ? f.DR : n,
      keybind: "ESC"
    })]
  })
}

function m(e) {
  let {
    isFullScreen: t,
    isLayer: n,
    onClose: i
  } = e, {
    newShopLogoEnabled: u
  } = (0, g.O)({
    location: "CollectiblesShop"
  }), m = (0, c.ZP)();
  return u ? (0, r.jsx)(b, {
    isLayer: n,
    onClose: i,
    isFullScreen: t
  }) : (0, r.jsxs)(l.Z, {
    className: o()((0, p.Q)(m), C.headerBar, {
      [C.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, r.jsx)(a.Fragment, {}),
    children: [(0, r.jsx)(d.Z, {
      className: C.discordLogo
    }), (0, r.jsx)(l.Z.Title, {
      children: _.Z.Messages.COLLECTIBLES_SHOP
    }), t && (0, r.jsx)(s.Z, {
      className: C.closeIcon,
      closeAction: n ? f.DR : i,
      keybind: "ESC"
    })]
  })
}