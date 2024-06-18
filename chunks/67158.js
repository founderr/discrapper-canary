"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(143927),
  o = n(28546),
  c = n(401227),
  d = n(957825),
  u = n(573809);
t.Z = l.memo(l.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: a,
    className: m,
    onClick: h
  } = e, [g, x] = (0, o.Iu)(e => [e.activeView, e.activeViewType], i.Z), _ = l.useCallback(() => {
    (0, o.j9)(a), null == h || h()
  }, [a, h]);
  return n ? null : (0, s.jsx)("div", {
    className: r()(d.CT, u.buttonContainer),
    ref: t,
    children: (0, s.jsx)(c.Z, {
      className: r()(u.emojiButton, m),
      onClick: _,
      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === a,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: -4,
          right: -4
        }
      }
    })
  })
}))