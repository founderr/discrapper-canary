"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("854743");

function o(e) {
  let {
    checked: t,
    onChange: s,
    disabled: l,
    className: o,
    tooltipProps: d
  } = e, u = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(i.Clickable, {
    onClick: u,
    onMouseDown: u,
    onMouseUp: u,
    className: n(r.switch, o),
    ...d,
    children: (0, a.jsx)(i.Switch, {
      checked: t,
      onChange: s,
      disabled: l
    })
  })
}