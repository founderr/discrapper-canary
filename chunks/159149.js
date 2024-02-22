"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return s
  },
  default: function() {
    return _
  }
});
var r, s, i = n("37983");
n("884691");
var a = n("77078"),
  l = n("145131"),
  o = n("181114"),
  u = n("376641"),
  c = n("782340"),
  d = n("30501");
(r = s || (s = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: s,
    primaryType: f,
    primaryText: _,
    primaryTooltip: E,
    primaryDisabled: C,
    primarySubmitting: I,
    onPrimary: h,
    secondaryText: p,
    onSecondary: R
  } = e;
  return (0, i.jsxs)(a.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == s || null == _) return null;
      let e = 2 === s ? o.default : a.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: C,
          submitting: I,
          color: 0 === s ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
          onClick: h
        };
      return null != E ? (0, i.jsx)(a.Tooltip, {
        text: E,
        children: n => (0, i.jsxs)(e, {
          ...n,
          ...t,
          children: [null == r ? null : (0, i.jsx)(r, {
            className: d.primaryIcon
          }), _]
        })
      }) : (0, i.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, i.jsx)(r, {
          className: d.primaryIcon
        }), _]
      })
    })(), null == p ? null : (0, i.jsx)(a.Button, {
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: R,
      children: p
    }), (0, i.jsx)(u.default, {}), null == t ? null : (0, i.jsx)(a.Button, {
      className: d.back,
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = s;
var _ = f