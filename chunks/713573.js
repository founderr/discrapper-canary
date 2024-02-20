"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("77078"),
  u = n("451914"),
  o = n("548122");
let E = Object.freeze({
    SIZE_10: o.size10,
    SIZE_12: o.size12,
    SIZE_14: o.size14,
    SIZE_16: o.size16,
    SIZE_20: o.size20,
    SIZE_24: o.size24,
    SIZE_32: o.size32
  }),
  i = e => {
    let {
      id: t,
      muted: n = !1,
      className: r = u.wrapper,
      size: o = E.SIZE_14,
      selectable: i = !1,
      children: c,
      color: T,
      onClick: _,
      onContextMenu: f,
      style: d,
      title: R,
      uppercase: S
    } = e;
    return (0, a.jsx)(l.H, {
      role: null != _ ? "button" : void 0,
      onClick: _,
      onContextMenu: f,
      id: t,
      className: s(r, {
        [u.base]: !0,
        [o]: !0,
        [u.selectable]: i,
        [u.muted]: n,
        [u.uppercase]: S
      }),
      title: R,
      style: null != T ? {
        ...d,
        color: T
      } : d,
      children: c
    })
  };
i.Sizes = E;
var c = i