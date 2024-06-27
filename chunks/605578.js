"use strict";
n.d(t, {
  k: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(1561),
  o = n(101817);

function a(e) {
  let {
    tag: t = "div",
    children: n,
    className: a,
    focusProps: l,
    onClick: u,
    onDoubleClick: _,
    onContextMenu: c,
    onKeyDown: d,
    onFocus: E,
    onBlur: I,
    onMouseOver: T,
    onMouseDown: h,
    onMouseLeave: f,
    buttonProps: S,
    "aria-label": A
  } = e, N = r.useRef(null);
  return (0, i.jsxs)(t, {
    ref: N,
    className: a,
    onClick: u,
    onMouseOver: T,
    onMouseLeave: f,
    onDoubleClick: _,
    onContextMenu: c,
    children: [(0, i.jsx)(s.P, {
      ...S,
      focusProps: {
        ringTarget: N,
        ...l
      },
      className: o.focusTarget,
      "aria-label": A,
      onClick: e => {
        e.stopPropagation(), null == u || u(e)
      },
      onKeyDown: d,
      onFocus: E,
      onBlur: I,
      onMouseDown: h
    }), n]
  })
}