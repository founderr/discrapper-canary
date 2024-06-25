"use strict";
s.d(t, {
  I: function() {
    return h
  }
});
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(425493),
  o = s(410030),
  c = s(984370),
  u = s(471731),
  d = s(486620),
  C = s(792125),
  f = s(335131),
  p = s(994896),
  g = s(689938),
  E = s(313858);

function m(e) {
  let {
    isLayer: t,
    onClose: s,
    isFullScreen: a = !1
  } = e;
  return (0, n.jsxs)(c.Z, {
    className: i()(E.headerBar, {
      [E.fullscreenHeaderBar]: a
    }),
    innerClassname: E.shopLogoContainer,
    toolbar: a ? null : (0, n.jsx)(r.Fragment, {}),
    children: [(0, n.jsx)(d.Z, {
      className: E.shopLogo
    }), a && (0, n.jsx)(l.Z, {
      className: E.closeIcon,
      closeAction: t ? f.DR : s,
      keybind: "ESC"
    })]
  })
}

function h(e) {
  let {
    isFullScreen: t,
    isLayer: s,
    onClose: a
  } = e, {
    newShopLogoEnabled: d
  } = (0, p.O)({
    location: "CollectiblesShop"
  }), h = (0, o.ZP)();
  return d ? (0, n.jsx)(m, {
    isLayer: s,
    onClose: a,
    isFullScreen: t
  }) : (0, n.jsxs)(c.Z, {
    className: i()((0, C.Q)(h), E.headerBar, {
      [E.fullscreenHeaderBar]: t
    }),
    toolbar: t ? null : (0, n.jsx)(r.Fragment, {}),
    children: [(0, n.jsx)(u.Z, {
      className: E.discordLogo
    }), (0, n.jsx)(c.Z.Title, {
      children: g.Z.Messages.COLLECTIBLES_SHOP
    }), t && (0, n.jsx)(l.Z, {
      className: E.closeIcon,
      closeAction: s ? f.DR : a,
      keybind: "ESC"
    })]
  })
}