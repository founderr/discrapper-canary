"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(613828),
  l = n(481060),
  u = n(110309);
let _ = r.forwardRef(function(e, t) {
  var n;
  let {
    avatar: r,
    name: s,
    children: _,
    subText: c,
    decorators: d,
    onClick: E,
    selected: I,
    muted: T,
    to: h,
    avatarClassName: f,
    selectedClassName: S,
    innerClassName: A,
    wrapContent: N,
    highlighted: m,
    focusProps: O,
    ...p
  } = e;
  p.className = o()(p.className, u.container, {
    [u.selected]: I,
    [u.highlighted]: m,
    [null != S ? S : ""]: I,
    [u.clickable]: !I && (null != h || null != E)
  }), p["aria-selected"] = null !== (n = p["aria-selected"]) && void 0 !== n ? n : I;
  let R = (0, i.jsxs)("div", {
    className: o()(A, u.layout, {
      [u.muted]: !I && T,
      [u.wrappedLayout]: N
    }),
    children: [(0, i.jsx)("div", {
      className: o()(u.avatar, f),
      children: r
    }), (0, i.jsxs)("div", {
      className: u.content,
      children: [(0, i.jsxs)("div", {
        className: u.nameAndDecorators,
        children: [(0, i.jsx)("div", {
          className: o()(u.name, {
            [u.wrappedName]: N
          }),
          children: s
        }), d]
      }), null != c ? (0, i.jsx)("div", {
        className: u.subText,
        children: c
      }) : null]
    }), null != _ ? (0, i.jsx)("div", {
      className: u.children,
      children: _
    }) : null]
  });
  return null != h ? (0, i.jsx)(l.FocusRing, {
    ...O,
    children: (0, i.jsx)(a.rU, {
      to: h,
      onClick: E,
      ...p,
      role: "listitem",
      ref: t,
      children: R
    })
  }) : null != E ? (0, i.jsx)(l.Clickable, {
    onClick: E,
    focusProps: O,
    ...p,
    role: "listitem",
    innerRef: t,
    children: R
  }) : (0, i.jsx)(l.FocusRing, {
    ...O,
    children: (0, i.jsx)("div", {
      ...p,
      role: "listitem",
      ref: t,
      children: R
    })
  })
});
t.Z = _