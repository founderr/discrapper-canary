"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return r
  }
});
var a, r, s = n("735250");
n("470079");
var o = n("481060"),
  l = n("285952"),
  i = n("976644"),
  u = n("612853"),
  c = n("689938"),
  d = n("485042");
(a = r || (r = {}))[a.CONTINUE = 0] = "CONTINUE", a[a.UPGRADE = 1] = "UPGRADE", a[a.PURCHASE = 2] = "PURCHASE";
let p = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: a,
    primaryCTA: r,
    primaryType: p,
    primaryText: f,
    primaryTooltip: C,
    primaryDisabled: y,
    primarySubmitting: P,
    onPrimary: m,
    secondaryText: A,
    onSecondary: _
  } = e;
  return (0, s.jsxs)(o.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == r || null == f) return null;
      let e = 2 === r ? i.default : o.Button,
        t = {
          innerClassName: d.button,
          type: p,
          disabled: y,
          submitting: P,
          color: 0 === r ? o.Button.Colors.BRAND : o.Button.Colors.GREEN,
          onClick: m
        };
      return null != C ? (0, s.jsx)(o.Tooltip, {
        text: C,
        children: n => (0, s.jsxs)(e, {
          ...n,
          ...t,
          children: [null == a ? null : (0, s.jsx)(a, {
            className: d.primaryIcon
          }), f]
        })
      }) : (0, s.jsxs)(e, {
        ...t,
        children: [null == a ? null : (0, s.jsx)(a, {
          className: d.primaryIcon
        }), f]
      })
    })(), null == A ? null : (0, s.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: _,
      children: A
    }), (0, s.jsx)(u.default, {}), null == t ? null : (0, s.jsx)(o.Button, {
      className: d.back,
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
p.CTAType = r, t.default = p