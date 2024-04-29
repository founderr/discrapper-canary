"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  l = n("212723");

function o(e) {
  let {
    checked: t,
    onChange: n,
    disabled: r,
    className: o,
    tooltipProps: u
  } = e, c = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, i.jsx)(a.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: s()(l.switch, o),
    ...u,
    children: (0, i.jsx)(a.Switch, {
      checked: t,
      onChange: n,
      disabled: r
    })
  })
}