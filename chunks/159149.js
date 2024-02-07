"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return i
  },
  default: function() {
    return _
  }
});
var r, i, s = n("37983");
n("884691");
var a = n("77078"),
  u = n("145131"),
  l = n("181114"),
  o = n("376641"),
  c = n("782340"),
  d = n("198699");
(r = i || (i = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: i,
    primaryType: f,
    primaryText: _,
    primaryTooltip: E,
    primaryDisabled: I,
    primarySubmitting: C,
    onPrimary: p,
    secondaryText: A,
    onSecondary: T
  } = e;
  return (0, s.jsxs)(a.ModalFooter, {
    justify: u.default.Justify.BETWEEN,
    align: u.default.Align.CENTER,
    children: [(() => {
      if (null == i || null == _) return null;
      let e = 2 === i ? l.default : a.Button,
        t = {
          innerClassName: d.button,
          type: f,
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
          }), _]
        })
      }) : (0, s.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, s.jsx)(r, {
          className: d.primaryIcon
        }), _]
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
f.CTAType = i;
var _ = f