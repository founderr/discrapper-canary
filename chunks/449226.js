"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  i = n.n(r),
  s = n("481060"),
  l = n("875058");

function o(e) {
  let {
    checked: t,
    onChange: n,
    disabled: r,
    className: o,
    tooltipProps: c
  } = e, d = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(s.Clickable, {
    onClick: d,
    onMouseDown: d,
    onMouseUp: d,
    className: i()(l.switch, o),
    ...c,
    children: (0, a.jsx)(s.Switch, {
      checked: t,
      onChange: n,
      disabled: r
    })
  })
}