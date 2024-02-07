"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return i
  },
  default: function() {
    return f
  }
});
var r, i, s = n("37983");
n("884691");
var a = n("77078"),
  l = n("145131"),
  u = n("181114"),
  o = n("376641"),
  c = n("782340"),
  d = n("198699");
(r = i || (i = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let _ = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: i,
    primaryType: _,
    primaryText: f,
    primaryTooltip: E,
    primaryDisabled: I,
    primarySubmitting: C,
    onPrimary: p,
    secondaryText: A,
    onSecondary: T
  } = e;
  return (0, s.jsxs)(a.ModalFooter, {
    justify: l.default.Justify.BETWEEN,
    align: l.default.Align.CENTER,
    children: [(() => {
      if (null == i || null == f) return null;
      let e = 2 === i ? u.default : a.Button,
        t = {
          innerClassName: d.button,
          type: _,
          disabled: I,
          submitting: C,
          color: 0 === i ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
          onClick: p
        };
      return null != E ? (0, s.jsx)(a.Tooltip, {
        text: E,
        children: n => (0, s.jsxs)(e, {
          ...n,
          ...t,
          children: [null == r ? null : (0, s.jsx)(r, {
            className: d.primaryIcon
          }), f]
        })
      }) : (0, s.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, s.jsx)(r, {
          className: d.primaryIcon
        }), f]
      })
    })(), null == A ? null : (0, s.jsx)(a.Button, {
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: T,
      children: A
    }), (0, s.jsx)(o.default, {}), null == t ? null : (0, s.jsx)(a.Button, {
      className: d.back,
      color: a.Button.Colors.PRIMARY,
      look: a.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
_.CTAType = i;
var f = _