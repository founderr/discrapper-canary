s.d(t, {
  Z: function() {
    return o
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(542037);

function o(e) {
  let {
    icon: t,
    tooltip: s,
    onClick: a,
    className: o
  } = e, c = e => {
    e.preventDefault(), e.stopPropagation(), a(e)
  };
  return (0, n.jsx)(r.Tooltip, {
    text: s,
    children: e => (0, n.jsx)(r.Clickable, {
      ...e,
      "aria-label": s,
      onClick: c,
      className: i()(l.actionButton, o),
      children: (0, n.jsx)(t, {
        className: l.icon,
        color: "currentColor"
      })
    })
  })
}