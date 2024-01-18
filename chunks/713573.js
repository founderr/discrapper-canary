"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var n = r("37983");
r("884691");
var s = r("414456"),
  u = r.n(s),
  l = r("77078"),
  i = r("254686"),
  a = r("851706");
let o = Object.freeze({
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
      className: s = i.wrapper,
      size: a = o.SIZE_14,
      selectable: c = !1,
      children: d,
      color: f,
      onClick: E,
      onContextMenu: h,
      style: _,
      title: I,
      uppercase: p
    } = e;
    return (0, n.jsx)(l.H, {
      role: null != E ? "button" : void 0,
      onClick: E,
      onContextMenu: h,
      id: t,
      className: u(s, {
        [i.base]: !0,
        [a]: !0,
        [i.selectable]: c,
        [i.muted]: r,
        [i.uppercase]: p
      }),
      title: I,
      style: null != f ? {
        ..._,
        color: f
      } : _,
      children: d
    })
  };
c.Sizes = o;
var d = c