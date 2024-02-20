"use strict";
n.r(t), n.d(t, {
  ClickableContainer: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("227645"),
  a = n("863157");

function o(e) {
  let {
    tag: t = "div",
    children: n,
    className: o,
    focusProps: l,
    onClick: u,
    onDoubleClick: c,
    onContextMenu: d,
    onKeyDown: p,
    onFocus: h,
    onBlur: f,
    onMouseOver: E,
    onMouseDown: _,
    onMouseLeave: m,
    buttonProps: S,
    "aria-label": g
  } = e, T = r.useRef(null);
  return (0, i.jsxs)(t, {
    ref: T,
    className: o,
    onClick: u,
    onMouseOver: E,
    onMouseLeave: m,
    onDoubleClick: c,
    onContextMenu: d,
    children: [(0, i.jsx)(s.Clickable, {
      ...S,
      focusProps: {
        ringTarget: T,
        ...l
      },
      className: a.focusTarget,
      "aria-label": g,
      onClick: e => {
        e.stopPropagation(), null == u || u(e)
      },
      onKeyDown: p,
      onFocus: h,
      onBlur: f,
      onMouseDown: _
    }), n]
  })
}