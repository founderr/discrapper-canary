"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("481060"),
  l = n("875058");

function o(e) {
  let {
    checked: t,
    onChange: n,
    disabled: i,
    className: o,
    tooltipProps: d
  } = e, c = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(s.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: r()(l.switch, o),
    ...d,
    children: (0, a.jsx)(s.Switch, {
      checked: t,
      onChange: n,
      disabled: i
    })
  })
}