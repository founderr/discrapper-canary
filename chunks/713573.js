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
  l = n("77078"),
  r = n("254686"),
  u = n("851706");
let o = Object.freeze({
    SIZE_10: u.size10,
    SIZE_12: u.size12,
    SIZE_14: u.size14,
    SIZE_16: u.size16,
    SIZE_20: u.size20,
    SIZE_24: u.size24,
    SIZE_32: u.size32
  }),
  d = e => {
    let {
      id: t,
      muted: n = !1,
      className: i = r.wrapper,
      size: u = o.SIZE_14,
      selectable: d = !1,
      children: c,
      color: h,
      onClick: f,
      onContextMenu: E,
      style: I,
      title: m,
      uppercase: _
    } = e;
    return (0, s.jsx)(l.H, {
      role: null != f ? "button" : void 0,
      onClick: f,
      onContextMenu: E,
      id: t,
      className: a(i, {
        [r.base]: !0,
        [u]: !0,
        [r.selectable]: d,
        [r.muted]: n,
        [r.uppercase]: _
      }),
      title: m,
      style: null != h ? {
        ...I,
        color: h
      } : I,
      children: c
    })
  };
d.Sizes = o;
var c = d