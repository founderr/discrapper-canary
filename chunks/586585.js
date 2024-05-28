"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return r
  }
});
var s, r, a = n("735250");
n("470079");
var l = n("481060"),
  i = n("285952"),
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
    primaryTooltip: C,
    primaryDisabled: E,
    primarySubmitting: m,
    onPrimary: P,
    secondaryText: N,
    onSecondary: h
  } = e;
  return (0, a.jsxs)(l.ModalFooter, {
    justify: i.default.Justify.BETWEEN,
    align: i.default.Align.CENTER,
    children: [(() => {
      if (null == r || null == p) return null;
      let e = 2 === r ? u.default : l.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: E,
          submitting: m,
          color: 0 === r ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
          onClick: P
        };
      return null != C ? (0, a.jsx)(l.Tooltip, {
        text: C,
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
    })(), null == N ? null : (0, a.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: h,
      children: N
    }), (0, a.jsx)(o.default, {}), null == t ? null : (0, a.jsx)(l.Button, {
      className: d.back,
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = r, t.default = f