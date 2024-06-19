n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(689938),
  c = n(71336);

function u(e) {
  let {
    tabIndex: t,
    className: n,
    onClick: s,
    "aria-expanded": u,
    "aria-controls": d,
    focusProps: h
  } = e, [m, p] = i.useState(!1);

  function E() {
    p(!0)
  }

  function g() {
    p(!1)
  }
  return (0, l.jsx)(r.Button, {
    look: r.Button.Looks.BLANK,
    size: r.Button.Sizes.NONE,
    tabIndex: t,
    className: a()(c.activityButton, n),
    onClick: s,
    onMouseEnter: E,
    onMouseOver: E,
    onMouseLeave: g,
    onFocus: E,
    onBlur: g,
    "aria-label": o.Z.Messages.SELECT_ACTIVITY,
    "aria-expanded": u,
    "aria-controls": d,
    focusProps: h,
    children: (0, l.jsx)(r.AppsIcon, {
      className: a()(m ? c.iconHovered : c.iconUnhovered)
    })
  })
}