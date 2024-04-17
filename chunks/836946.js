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
var l = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  i = n("481060"),
  o = n("785786");
let s = {
    TERTIARY: o.tertiary,
    SECONDARY: o.secondary,
    PRIMARY: o.primary
  },
  u = {
    SIZE_24: o.size24,
    SIZE_32: o.size32,
    SIZE_36: o.size36
  };

function c(e) {
  let {
    className: t,
    tooltip: n,
    color: r,
    size: s = u.SIZE_32,
    icon: c,
    onClick: d,
    disabled: f,
    focusProps: m
  } = e;
  return (0, l.jsx)(i.Tooltip, {
    text: n,
    shouldShow: !f,
    children: e => {
      let {
        onClick: u,
        ...h
      } = e;
      return (0, l.jsx)(i.Clickable, {
        ...h,
        "aria-label": n,
        "aria-disabled": f,
        className: a()(t, o.button, r, s, {
          [o.disabled]: f
        }),
        onClick: e => {
          null == u || u(), d(e)
        },
        focusProps: m,
        children: c
      })
    }
  })
}