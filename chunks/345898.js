var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(672188);
t.Z = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: i,
    renderMedia: o,
    className: c,
    isHorizontal: u = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(r.tile, {
      [r.tileHorizontal]: u
    }, c),
    children: [(0, s.jsx)("div", {
      className: l()(r.media, {
        [r.mediaHorizontal]: u
      }),
      children: null == o ? void 0 : o()
    }), (0, s.jsxs)("div", {
      className: r.description,
      children: [(0, s.jsx)(a.H, {
        className: r.title,
        children: null == t ? void 0 : t()
      }), (0, s.jsx)("div", {
        className: r.tagline,
        children: null == n ? void 0 : n()
      }), (0, s.jsx)("div", {
        className: r.actions,
        children: null == i ? void 0 : i()
      })]
    })]
  })
}