"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return l
  }
});
var i, l, r = n("735250");
n("470079");
var a = n("481060"),
  s = n("285952"),
  o = n("976644"),
  u = n("612853"),
  d = n("689938"),
  c = n("485042");
(i = l || (l = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: i,
    primaryCTA: l,
    primaryType: f,
    primaryText: m,
    primaryTooltip: p,
    primaryDisabled: x,
    primarySubmitting: h,
    onPrimary: C,
    secondaryText: N,
    onSecondary: S
  } = e;
  return (0, r.jsxs)(a.ModalFooter, {
    justify: s.default.Justify.BETWEEN,
    align: s.default.Align.CENTER,
    children: [(() => {
      if (null == l || null == m) return null;
      let e = 2 === l ? o.default : a.Button,
        t = {
          innerClassName: c.button,
          type: f,
          disabled: x,
          submitting: h,
          color: 0 === l ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
          onClick: C
        };
      return null != p ? (0, r.jsx)(a.Tooltip, {
        text: p,
        children: n => (0, r.jsxs)(e, {
          ...n,
          ...t,
          children: [null == i ? null : (0, r.jsx)(i, {
            className: c.primaryIcon
          }), m]
        })
      }) : (0, r.jsxs)(e, {
        ...t,
        children: [null == i ? null : (0, r.jsx)(i, {
          className: c.primaryIcon
        }), m]
      })
    })(), null == N ? null : (0, r.jsx)(a.Button, {
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: S,
      children: N
    }), (0, r.jsx)(u.default, {}), null == t ? null : (0, r.jsx)(a.Button, {
      className: c.back,
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : d.default.Messages.BACK
    })]
  })
};
f.CTAType = l, t.default = f