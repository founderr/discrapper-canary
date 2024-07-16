s.d(t, {
  I: function() {
return h;
  }
});
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(425493),
  l = s(410030),
  c = s(984370),
  d = s(471731),
  u = s(486620),
  p = s(792125),
  g = s(335131),
  f = s(994896),
  C = s(689938),
  m = s(807926);

function _(e) {
  let {
isLayer: t,
onClose: s,
isFullScreen: a = !1
  } = e;
  return (0, n.jsxs)(c.Z, {
className: o()(m.headerBar, {
  [m.fullscreenHeaderBar]: a
}),
innerClassname: m.shopLogoContainer,
toolbar: a ? null : (0, n.jsx)(r.Fragment, {}),
children: [
  (0, n.jsx)(u.Z, {
    className: m.shopLogo
  }),
  a && (0, n.jsx)(i.Z, {
    className: m.closeIcon,
    closeAction: t ? g.DR : s,
    keybind: 'ESC'
  })
]
  });
}

function h(e) {
  let {
isFullScreen: t,
isLayer: s,
onClose: a
  } = e, {
newShopLogoEnabled: u
  } = (0, f.O)({
location: 'CollectiblesShop'
  }), h = (0, l.ZP)();
  return u ? (0, n.jsx)(_, {
isLayer: s,
onClose: a,
isFullScreen: t
  }) : (0, n.jsxs)(c.Z, {
className: o()((0, p.Q)(h), m.headerBar, {
  [m.fullscreenHeaderBar]: t
}),
toolbar: t ? null : (0, n.jsx)(r.Fragment, {}),
children: [
  (0, n.jsx)(d.Z, {
    className: m.discordLogo
  }),
  (0, n.jsx)(c.Z.Title, {
    children: C.Z.Messages.COLLECTIBLES_SHOP
  }),
  t && (0, n.jsx)(i.Z, {
    className: m.closeIcon,
    closeAction: s ? g.DR : a,
    keybind: 'ESC'
  })
]
  });
}