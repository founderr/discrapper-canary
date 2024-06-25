n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(499254),
  u = n(541099),
  d = n(827498),
  h = n(314734),
  m = n(689938),
  p = n(840884);
t.Z = i.memo(i.forwardRef(function(e, t) {
  let [n, s] = i.useState(!1), E = (0, r.e7)([u.Z], () => u.Z.shouldShowPopup()), g = i.useCallback(() => {
    E ? c.y() : c._(d._.TEXT)
  }, [E]), f = () => {
    s(!0)
  }, C = () => {
    s(!1)
  };
  return (0, l.jsx)(o.Tooltip, {
    text: m.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
    children: e => (0, l.jsx)("div", {
      ref: t,
      ...e,
      className: a()(p.buttonContainer, h.t4),
      children: (0, l.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: 0,
        className: p.button,
        onClick: g,
        onMouseEnter: f,
        onMouseOver: f,
        onMouseLeave: C,
        onFocus: f,
        onBlur: C,
        "aria-label": m.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        },
        innerClassName: p.buttonContents,
        children: (0, l.jsx)(o.AppsIcon, {
          className: a()(n ? p.iconHovered : p.iconUnhovered)
        })
      })
    })
  })
}))