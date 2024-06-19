n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(746555);

function a(e) {
  let {
    selected: t,
    muted: n = !1,
    highlighted: i = !1,
    wrapContent: a = !1,
    avatar: o,
    decorators: u,
    name: c,
    subText: d,
    avatarClassName: h,
    innerClassName: g
  } = e;
  return (0, l.jsxs)("div", {
    className: s()(g, r.layout, {
      [r.muted]: !t && n,
      [r.highlighted]: i,
      [r.wrappedLayout]: a
    }),
    children: [(0, l.jsx)("div", {
      className: s()(r.avatar, h),
      children: o
    }), (0, l.jsxs)("div", {
      className: r.content,
      children: [(0, l.jsxs)("div", {
        className: r.nameAndDecorators,
        children: [(0, l.jsx)("div", {
          className: s()(r.name, {
            [r.wrappedName]: a
          }),
          children: c
        }), u]
      }), null != d ? (0, l.jsx)("div", {
        className: r.subText,
        children: d
      }) : null]
    })]
  })
}