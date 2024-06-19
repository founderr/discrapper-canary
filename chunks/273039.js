l.d(n, {
  Z: function() {
    return a
  }
}), l(47120);
var o = l(735250),
  i = l(470079),
  t = l(225433),
  s = l(862155);

function a(e) {
  let {
    hasSetEmoji: n,
    onClick: l,
    children: a
  } = e, [r, u] = i.useState(!1);
  return (0, o.jsxs)("div", {
    className: s.container,
    onMouseEnter: () => {
      if (n) {
        u(!0);
        return
      }
      u(!1)
    },
    onMouseLeave: () => {
      u(!1)
    },
    children: [a, n && r && (0, o.jsx)(t.Z, {
      onClick: l,
      className: s.removeButton
    })]
  })
}