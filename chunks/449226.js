"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("481060"),
  l = a("212723");

function o(e) {
  let {
    checked: t,
    onChange: a,
    disabled: r,
    className: o,
    tooltipProps: c
  } = e, d = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, n.jsx)(i.Clickable, {
    onClick: d,
    onMouseDown: d,
    onMouseUp: d,
    className: s()(l.switch, o),
    ...c,
    children: (0, n.jsx)(i.Switch, {
      checked: t,
      onChange: a,
      disabled: r
    })
  })
}