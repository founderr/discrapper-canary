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
  r = n("451914"),
  u = n("548122");
let d = Object.freeze({
    SIZE_10: u.size10,
    SIZE_12: u.size12,
    SIZE_14: u.size14,
    SIZE_16: u.size16,
    SIZE_20: u.size20,
    SIZE_24: u.size24,
    SIZE_32: u.size32
  }),
  o = e => {
    let {
      id: t,
      muted: n = !1,
      className: i = r.wrapper,
      size: u = d.SIZE_14,
      selectable: o = !1,
      children: c,
      color: h,
      onClick: E,
      onContextMenu: f,
      style: I,
      title: _,
      uppercase: m
    } = e;
    return (0, s.jsx)(l.H, {
      role: null != E ? "button" : void 0,
      onClick: E,
      onContextMenu: f,
      id: t,
      className: a(i, {
        [r.base]: !0,
        [u]: !0,
        [r.selectable]: o,
        [r.muted]: n,
        [r.uppercase]: m
      }),
      title: _,
      style: null != h ? {
        ...I,
        color: h
      } : I,
      children: c
    })
  };
o.Sizes = d;
var c = o