"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("212723");

function o(e) {
  let {
    checked: t,
    onChange: a,
    disabled: r,
    className: o,
    tooltipProps: d
  } = e, c = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, n.jsx)(s.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: i()(l.switch, o),
    ...d,
    children: (0, n.jsx)(s.Switch, {
      checked: t,
      onChange: a,
      disabled: r
    })
  })
}