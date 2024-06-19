t.d(n, {
  g: function() {
    return s
  }
});
var r, s, l = t(735250);
t(470079);
var o = t(481060),
  a = t(285952),
  i = t(612853),
  u = t(689938),
  c = t(568071);
(r = s || (s = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let d = e => {
  let {
    onBack: n,
    backText: t,
    primaryIcon: r,
    primaryCTA: s,
    primaryType: d,
    primaryText: E,
    primaryTooltip: C,
    primaryDisabled: N,
    primarySubmitting: _,
    onPrimary: A,
    secondaryText: O,
    onSecondary: f
  } = e;
  return (0, l.jsxs)(o.ModalFooter, {
    justify: a.Z.Justify.BETWEEN,
    align: a.Z.Align.CENTER,
    children: [(() => {
      if (null == s || null == E) return null;
      let e = 2 === s ? o.ShinyButton : o.Button,
        n = {
          innerClassName: c.button,
          type: d,
          disabled: N,
          submitting: _,
          color: 0 === s ? o.Button.Colors.BRAND : o.Button.Colors.GREEN,
          onClick: A
        };
      return null != C ? (0, l.jsx)(o.Tooltip, {
        text: C,
        children: t => (0, l.jsxs)(e, {
          ...t,
          ...n,
          children: [null == r ? null : (0, l.jsx)(r, {
            color: "currentColor",
            className: c.primaryIcon
          }), E]
        })
      }) : (0, l.jsxs)(e, {
        ...n,
        children: [null == r ? null : (0, l.jsx)(r, {
          color: "currentColor",
          className: c.primaryIcon
        }), E]
      })
    })(), null == O ? null : (0, l.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: f,
      children: O
    }), (0, l.jsx)(i.Z, {}), null == n ? null : (0, l.jsx)(o.Button, {
      className: c.back,
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: n,
      children: null != t ? t : u.Z.Messages.BACK
    })]
  })
};
d.CTAType = s, n.Z = d