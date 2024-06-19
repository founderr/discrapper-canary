n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  r = n(542037);

function o(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: a,
    className: o
  } = e, c = e => {
    e.preventDefault(), e.stopPropagation(), a(e)
  };
  return (0, s.jsx)(l.Tooltip, {
    text: n,
    children: e => (0, s.jsx)(l.Clickable, {
      ...e,
      "aria-label": n,
      onClick: c,
      className: i()(r.actionButton, o),
      children: (0, s.jsx)(t, {
        className: r.icon,
        color: "currentColor"
      })
    })
  })
}