n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  r = n(542037);

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: a,
    className: c
  } = e, o = e => {
    e.preventDefault(), e.stopPropagation(), a(e)
  };
  return (0, s.jsx)(l.Tooltip, {
    text: n,
    children: e => (0, s.jsx)(l.Clickable, {
      ...e,
      "aria-label": n,
      onClick: o,
      className: i()(r.actionButton, c),
      children: (0, s.jsx)(t, {
        className: r.icon,
        color: "currentColor"
      })
    })
  })
}