"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var s = r("37983");
r("884691");
var n = r("414456"),
  o = r.n(n),
  u = r("77078"),
  l = r("254686"),
  a = r("851706");
let i = Object.freeze({
    SIZE_10: a.size10,
    SIZE_12: a.size12,
    SIZE_14: a.size14,
    SIZE_16: a.size16,
    SIZE_20: a.size20,
    SIZE_24: a.size24,
    SIZE_32: a.size32
  }),
  c = e => {
    let {
      id: t,
      muted: r = !1,
      className: n = l.wrapper,
      size: a = i.SIZE_14,
      selectable: c = !1,
      children: d,
      color: E,
      onClick: _,
      onContextMenu: f,
      style: I,
      title: R,
      uppercase: p
    } = e;
    return (0, s.jsx)(u.H, {
      role: null != _ ? "button" : void 0,
      onClick: _,
      onContextMenu: f,
      id: t,
      className: o(n, {
        [l.base]: !0,
        [a]: !0,
        [l.selectable]: c,
        [l.muted]: r,
        [l.uppercase]: p
      }),
      title: R,
      style: null != E ? {
        ...I,
        color: E
      } : I,
      children: d
    })
  };
c.Sizes = i;
var d = c