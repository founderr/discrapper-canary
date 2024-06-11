"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return r
  }
});
var s, r, a = n("735250");
n("470079");
var l = n("481060"),
  u = n("285952"),
  i = n("612853"),
  o = n("689938"),
  c = n("485042");
(s = r || (r = {}))[s.CONTINUE = 0] = "CONTINUE", s[s.UPGRADE = 1] = "UPGRADE", s[s.PURCHASE = 2] = "PURCHASE";
let d = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: s,
    primaryCTA: r,
    primaryType: d,
    primaryText: f,
    primaryTooltip: C,
    primaryDisabled: E,
    primarySubmitting: P,
    onPrimary: A,
    secondaryText: S,
    onSecondary: m
  } = e;
  return (0, a.jsxs)(l.ModalFooter, {
    justify: u.default.Justify.BETWEEN,
    align: u.default.Align.CENTER,
    children: [(() => {
      if (null == r || null == f) return null;
      let e = 2 === r ? l.ShinyButton : l.Button,
        t = {
          innerClassName: c.button,
          type: d,
          disabled: E,
          submitting: P,
          color: 0 === r ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
          onClick: A
        };
      return null != C ? (0, a.jsx)(l.Tooltip, {
        text: C,
        children: n => (0, a.jsxs)(e, {
          ...n,
          ...t,
          children: [null == s ? null : (0, a.jsx)(s, {
            className: c.primaryIcon
          }), f]
        })
      }) : (0, a.jsxs)(e, {
        ...t,
        children: [null == s ? null : (0, a.jsx)(s, {
          className: c.primaryIcon
        }), f]
      })
    })(), null == S ? null : (0, a.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: m,
      children: S
    }), (0, a.jsx)(i.default, {}), null == t ? null : (0, a.jsx)(l.Button, {
      className: c.back,
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : o.default.Messages.BACK
    })]
  })
};
d.CTAType = r, t.default = d