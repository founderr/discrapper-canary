"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return r
  }
});
var s, r, a = n("735250");
n("470079");
var i = n("481060"),
  l = n("285952"),
  u = n("976644"),
  o = n("612853"),
  c = n("689938"),
  d = n("485042");
(s = r || (r = {}))[s.CONTINUE = 0] = "CONTINUE", s[s.UPGRADE = 1] = "UPGRADE", s[s.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: s,
    primaryCTA: r,
    primaryType: f,
    primaryText: p,
    primaryTooltip: m,
    primaryDisabled: C,
    primarySubmitting: E,
    onPrimary: P,
    secondaryText: S,
    onSecondary: A
  } = e;
  return (0, a.jsxs)(i.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == r || null == p) return null;
      let e = 2 === r ? u.default : i.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: C,
          submitting: E,
          color: 0 === r ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
          onClick: P
        };
      return null != m ? (0, a.jsx)(i.Tooltip, {
        text: m,
        children: n => (0, a.jsxs)(e, {
          ...n,
          ...t,
          children: [null == s ? null : (0, a.jsx)(s, {
            className: d.primaryIcon
          }), p]
        })
      }) : (0, a.jsxs)(e, {
        ...t,
        children: [null == s ? null : (0, a.jsx)(s, {
          className: d.primaryIcon
        }), p]
      })
    })(), null == S ? null : (0, a.jsx)(i.Button, {
      color: i.Button.Colors.PRIMARY,
      look: i.Button.Looks.LINK,
      onClick: A,
      children: S
    }), (0, a.jsx)(o.default, {}), null == t ? null : (0, a.jsx)(i.Button, {
      className: d.back,
      color: i.Button.Colors.PRIMARY,
      look: i.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = r, t.default = f