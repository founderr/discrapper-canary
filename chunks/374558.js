"use strict";
n.r(t), n.d(t, {
  CircleIconButton: function() {
    return _
  },
  CircleIconButtonColors: function() {
    return u
  },
  CircleIconButtonSizes: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("1561"),
  o = n("981729"),
  l = n("264426");
let u = {
    TERTIARY: l.tertiary,
    SECONDARY: l.secondary,
    PRIMARY: l.primary
  },
  d = {
    SIZE_24: l.size24,
    SIZE_32: l.size32,
    SIZE_36: l.size36
  };

function _(e) {
  let {
    className: t,
    tooltip: n,
    color: r,
    size: u = d.SIZE_32,
    icon: _,
    onClick: c,
    disabled: E,
    focusProps: I
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: n,
    shouldShow: !E,
    children: e => {
      let {
        onClick: o,
        ...d
      } = e;
      return (0, i.jsx)(a.Clickable, {
        ...d,
        "aria-label": n,
        "aria-disabled": E,
        className: s()(t, l.button, r, u, {
          [l.disabled]: E
        }),
        onClick: e => {
          null == o || o(), c(e)
        },
        focusProps: I,
        children: _
      })
    }
  })
}