var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(160620),
  o = n(499254),
  c = n(541099),
  u = n(827498),
  d = n(840884);
t.Z = i.memo(i.forwardRef(function(e, t) {
  let n = (0, s.e7)([c.Z], () => c.Z.shouldShowPopup()),
    h = i.useCallback(() => {
      n ? o.y() : o._(u._.TEXT)
    }, [n]);
  return (0, l.jsx)(a.Tooltip, {
    text: "Use an App",
    children: e => (0, l.jsx)("div", {
      ref: t,
      ...e,
      className: d.buttonContainer,
      children: (0, l.jsx)(r.Z, {
        onClick: h,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        }
      })
    })
  })
}))