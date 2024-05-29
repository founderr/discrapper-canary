"use strict";
n.r(t), n.d(t, {
  CircleIconButtonColors: function() {
    return s
  },
  CircleIconButtonSizes: function() {
    return u
  },
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var l = n("120356"),
  r = n.n(l),
  a = n("481060"),
  o = n("675109");
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

function d(e) {
  let {
    className: t,
    tooltip: n,
    color: l,
    size: s = u.SIZE_32,
    icon: d,
    onClick: c,
    disabled: p,
    focusProps: f
  } = e;
  return (0, i.jsx)(a.Tooltip, {
    text: n,
    shouldShow: !p,
    children: e => {
      let {
        onClick: u,
        ...h
      } = e;
      return (0, i.jsx)(a.Clickable, {
        ...h,
        "aria-label": n,
        "aria-disabled": p,
        className: r()(t, o.button, l, s, {
          [o.disabled]: p
        }),
        onClick: e => {
          null == u || u(), c(e)
        },
        focusProps: f,
        children: d
      })
    }
  })
}