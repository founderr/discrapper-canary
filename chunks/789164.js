"use strict";
n.d(t, {
  h: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(337033),
  o = n(15127),
  a = n(512983),
  l = n(169298);
let u = r.forwardRef(function(e, t) {
  var n;
  let {
    children: u,
    className: _,
    titleClassName: c,
    title: d,
    icon: E,
    disabled: I,
    htmlFor: T,
    tag: h = "h5",
    ...f
  } = e, S = r.useId(), A = null !== (n = f.titleId) && void 0 !== n ? n : S;
  return (0, i.jsx)("div", {
    ref: t,
    className: _,
    children: null != d ? (0, i.jsx)(s.y, {
      component: (0, i.jsxs)("div", {
        className: l.sectionTitle,
        children: [E, null != d ? (0, i.jsx)(a.v, {
          tag: h,
          id: A,
          htmlFor: T,
          disabled: I,
          className: c,
          children: d
        }) : null]
      }),
      children: (0, i.jsx)("div", {
        className: l.children,
        children: (0, i.jsx)(o.ol, {
          titleId: A,
          children: u
        })
      })
    }) : u
  })
})