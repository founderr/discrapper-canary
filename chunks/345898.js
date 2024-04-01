"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("803997"),
  a = n.n(l),
  i = n("481060"),
  r = n("957826");
t.default = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: l,
    renderMedia: o,
    className: u,
    isHorizontal: d = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(r.tile, {
      [r.tileHorizontal]: d
    }, u),
    children: [(0, s.jsx)("div", {
      className: a()(r.media, {
        [r.mediaHorizontal]: d
      }),
      children: null == o ? void 0 : o()
    }), (0, s.jsxs)("div", {
      className: r.description,
      children: [(0, s.jsx)(i.H, {
        className: r.title,
        children: null == t ? void 0 : t()
      }), (0, s.jsx)("div", {
        className: r.tagline,
        children: null == n ? void 0 : n()
      }), (0, s.jsx)("div", {
        className: r.actions,
        children: null == l ? void 0 : l()
      })]
    })]
  })
}