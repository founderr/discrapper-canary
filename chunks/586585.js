"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return s
  }
});
var a, s, r = n("735250");
n("470079");
var o = n("481060"),
  l = n("285952"),
  i = n("976644"),
  u = n("612853"),
  c = n("689938"),
  d = n("485042");
(a = s || (s = {}))[a.CONTINUE = 0] = "CONTINUE", a[a.UPGRADE = 1] = "UPGRADE", a[a.PURCHASE = 2] = "PURCHASE";
let p = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: a,
    primaryCTA: s,
    primaryType: p,
    primaryText: f,
    primaryTooltip: y,
    primaryDisabled: C,
    primarySubmitting: P,
    onPrimary: m,
    secondaryText: A,
    onSecondary: _
  } = e;
  return (0, r.jsxs)(o.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == s || null == f) return null;
      let e = 2 === s ? i.default : o.Button,
        t = {
          innerClassName: d.button,
          type: p,
          disabled: C,
          submitting: P,
          color: 0 === s ? o.Button.Colors.BRAND : o.Button.Colors.GREEN,
          onClick: m
        };
      return null != y ? (0, r.jsx)(o.Tooltip, {
        text: y,
        children: n => (0, r.jsxs)(e, {
          ...n,
          ...t,
          children: [null == a ? null : (0, r.jsx)(a, {
            className: d.primaryIcon
          }), f]
        })
      }) : (0, r.jsxs)(e, {
        ...t,
        children: [null == a ? null : (0, r.jsx)(a, {
          className: d.primaryIcon
        }), f]
      })
    })(), null == A ? null : (0, r.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: _,
      children: A
    }), (0, r.jsx)(u.default, {}), null == t ? null : (0, r.jsx)(o.Button, {
      className: d.back,
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
p.CTAType = s, t.default = p