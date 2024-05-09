"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("481060"),
  l = s("212723");

function _(e) {
  let {
    checked: t,
    onChange: s,
    disabled: n,
    className: _,
    tooltipProps: r
  } = e, u = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(E.Clickable, {
    onClick: u,
    onMouseDown: u,
    onMouseUp: u,
    className: i()(l.switch, _),
    ...r,
    children: (0, a.jsx)(E.Switch, {
      checked: t,
      onChange: s,
      disabled: n
    })
  })
}