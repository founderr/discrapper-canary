"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("481060"),
  l = n("212723");

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
  return (0, a.jsx)(i.Clickable, {
    onClick: d,
    onMouseDown: d,
    onMouseUp: d,
    className: s()(l.switch, o),
    ...c,
    children: (0, a.jsx)(i.Switch, {
      checked: t,
      onChange: n,
      disabled: r
    })
  })
}