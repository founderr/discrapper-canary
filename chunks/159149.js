"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return s
  },
  default: function() {
    return f
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
let _ = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: s,
    primaryType: _,
    primaryText: f,
    primaryTooltip: E,
    primaryDisabled: C,
    primarySubmitting: I,
    onPrimary: h,
    secondaryText: p,
    onSecondary: A
  } = e;
  return (0, i.jsxs)(a.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == s || null == f) return null;
      let e = 2 === s ? o.default : a.Button,
        t = {
          innerClassName: d.button,
          type: _,
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
          }), f]
        })
      }) : (0, i.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, i.jsx)(r, {
          className: d.primaryIcon
        }), f]
      })
    })(), null == p ? null : (0, i.jsx)(a.Button, {
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: A,
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
_.CTAType = s;
var f = _