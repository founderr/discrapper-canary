"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(40966),
  u = n(580552),
  _ = n(240991),
  c = n(278297),
  d = n(622322);

function E(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: s = !1,
    isHovering: E = !1,
    lineClamp: I = 6,
    setLineClamp: T = !0,
    textColor: h,
    userId: S
  } = e, f = r.useMemo(() => (0, u.Z)(S) ? (0, i.jsx)(l.Z, {}) : null == t || "" === t ? null : (0, _.YP)(t), [S, t]);
  return null == f ? null : (0, i.jsx)("div", {
    className: o()(n, d.markup),
    children: (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      lineClamp: T ? I : void 0,
      color: void 0 !== h ? h : void 0,
      children: (0, i.jsx)(c.G.Provider, {
        value: {
          disableAnimations: s && !E,
          disableInteractions: !1
        },
        children: f
      })
    })
  })
}