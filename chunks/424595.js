n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(499254),
  u = n(541099),
  d = n(827498),
  h = n(314734),
  p = n(689938),
  m = n(840884);
t.Z = a.memo(a.forwardRef(function(e, t) {
  let [n, l] = a.useState(!1), _ = (0, r.e7)([u.Z], () => u.Z.shouldShowPopup()), f = a.useCallback(() => {
    _ ? c.y() : c._(d._b.TEXT)
  }, [_]), E = () => {
    l(!0)
  }, g = () => {
    l(!1)
  };
  return (0, i.jsx)(o.Tooltip, {
    text: p.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)("div", {
      ref: t,
      ...e,
      className: s()(m.buttonContainer, h.t4),
      children: (0, i.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.NONE,
        tabIndex: 0,
        className: m.button,
        onClick: f,
        onMouseEnter: E,
        onMouseOver: E,
        onMouseLeave: g,
        onFocus: E,
        onBlur: g,
        "aria-label": p.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        },
        innerClassName: m.buttonContents,
        children: (0, i.jsx)(o.AppsIcon, {
          className: s()(n ? m.iconHovered : m.iconUnhovered)
        })
      })
    })
  })
}))