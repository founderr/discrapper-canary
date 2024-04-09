"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  a = n.n(r),
  s = n("481060"),
  l = n("893079");

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
  return (0, i.jsx)(s.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: a()(l.switch, o),
    ...u,
    children: (0, i.jsx)(s.Switch, {
      checked: t,
      onChange: n,
      disabled: r
    })
  })
}