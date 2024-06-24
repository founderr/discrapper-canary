n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  l = n(481060),
  r = n(542037);

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: i,
    className: c
  } = e, o = e => {
    e.preventDefault(), e.stopPropagation(), i(e)
  };
  return (0, s.jsx)(l.Tooltip, {
    text: n,
    children: e => (0, s.jsx)(l.Clickable, {
      ...e,
      "aria-label": n,
      onClick: o,
      className: a()(r.actionButton, c),
      children: (0, s.jsx)(t, {
        className: r.icon,
        color: "currentColor"
      })
    })
  })
}