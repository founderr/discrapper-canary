"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("481060"),
  l = i("893079");

function o(e) {
  let {
    checked: t,
    onChange: i,
    disabled: r,
    className: o,
    tooltipProps: u
  } = e, c = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, n.jsx)(a.Clickable, {
    onClick: c,
    onMouseDown: c,
    onMouseUp: c,
    className: s()(l.switch, o),
    ...u,
    children: (0, n.jsx)(a.Switch, {
      checked: t,
      onChange: i,
      disabled: r
    })
  })
}