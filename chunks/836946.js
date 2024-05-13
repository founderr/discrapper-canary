"use strict";
n.r(t), n.d(t, {
  CircleIconButtonColors: function() {
    return s
  },
  CircleIconButtonSizes: function() {
    return u
  },
  default: function() {
    return c
  }
});
var r = n("735250");
n("470079");
var l = n("120356"),
  o = n.n(l),
  a = n("481060"),
  i = n("675109");
let s = {
    TERTIARY: i.tertiary,
    SECONDARY: i.secondary,
    PRIMARY: i.primary
  },
  u = {
    SIZE_24: i.size24,
    SIZE_32: i.size32,
    SIZE_36: i.size36
  };

function c(e) {
  let {
    className: t,
    tooltip: n,
    color: l,
    size: s = u.SIZE_32,
    icon: c,
    onClick: d,
    disabled: f,
    focusProps: h
  } = e;
  return (0, r.jsx)(a.Tooltip, {
    text: n,
    shouldShow: !f,
    children: e => {
      let {
        onClick: u,
        ...p
      } = e;
      return (0, r.jsx)(a.Clickable, {
        ...p,
        "aria-label": n,
        "aria-disabled": f,
        className: o()(t, i.button, l, s, {
          [i.disabled]: f
        }),
        onClick: e => {
          null == u || u(), d(e)
        },
        focusProps: h,
        children: c
      })
    }
  })
}