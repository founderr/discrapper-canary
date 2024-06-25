n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(920906),
  a = n(692547),
  o = n(481060),
  u = n(346656),
  c = n(252686),
  d = n(248699);

function h(e) {
  let {
    guild: t,
    show: n,
    active: i,
    onAnimationStart: h,
    onAnimationRest: p
  } = e, g = {}, m = {};
  g.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", m.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  let C = (0, o.useToken)(a.Z.unsafe_rawColors.BRAND_500).hex(),
    E = (0, o.useToken)(a.Z.unsafe_rawColors.PRIMARY_630).hex();
  i && null == t.icon && (g.backgroundColor = C, m.backgroundColor = E);
  let f = (0, r.useTransition)(n, {
    from: g,
    enter: m,
    leave: g,
    config: {
      duration: 100
    },
    onStart: h,
    onRest: p
  });
  return (0, l.jsx)(l.Fragment, {
    children: f((e, n, i) => n && (0, l.jsx)("div", {
      className: s()(d.folder, d.hover),
      children: (0, l.jsx)("div", {
        className: d.folderIconWrapper,
        children: (0, l.jsxs)("div", {
          className: d.closedFolderIconWrapper,
          children: [(0, l.jsx)(r.animated.div, {
            className: d.folderIconPreview,
            style: e,
            children: (0, l.jsx)(u.Z, {
              guild: t,
              size: u.Z.Sizes.SMOL,
              className: d.guildIcon
            })
          }), (0, l.jsx)(c.Z, {
            className: d.miniPlaceholder
          })]
        })
      })
    }, i.key))
  })
}