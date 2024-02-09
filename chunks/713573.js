"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  r = n("77078"),
  u = n("254686"),
  l = n("851706");
let o = Object.freeze({
    SIZE_10: l.size10,
    SIZE_12: l.size12,
    SIZE_14: l.size14,
    SIZE_16: l.size16,
    SIZE_20: l.size20,
    SIZE_24: l.size24,
    SIZE_32: l.size32
  }),
  d = e => {
    let {
      id: t,
      muted: n = !1,
      className: i = u.wrapper,
      size: l = o.SIZE_14,
      selectable: d = !1,
      children: c,
      color: h,
      onClick: f,
      onContextMenu: I,
      style: E,
      title: m,
      uppercase: _
    } = e;
    return (0, s.jsx)(r.H, {
      role: null != f ? "button" : void 0,
      onClick: f,
      onContextMenu: I,
      id: t,
      className: a(i, {
        [u.base]: !0,
        [l]: !0,
        [u.selectable]: d,
        [u.muted]: n,
        [u.uppercase]: _
      }),
      title: m,
      style: null != h ? {
        ...E,
        color: h
      } : E,
      children: c
    })
  };
d.Sizes = o;
var c = d