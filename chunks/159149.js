"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return i
  },
  default: function() {
    return E
  }
});
var r, i, s = n("37983");
n("884691");
var u = n("77078"),
  a = n("145131"),
  o = n("181114"),
  l = n("376641"),
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
    primaryText: E,
    primaryTooltip: _,
    primaryDisabled: I,
    primarySubmitting: C,
    onPrimary: p,
    secondaryText: R,
    onSecondary: A
  } = e;
  return (0, s.jsxs)(u.ModalFooter, {
    justify: a.default.Justify.BETWEEN,
    align: a.default.Align.CENTER,
    children: [(() => {
      if (null == i || null == E) return null;
      let e = 2 === i ? o.default : u.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: I,
          submitting: C,
          color: 0 === i ? u.Button.Colors.BRAND : u.Button.Colors.GREEN,
          onClick: p
        };
      return null != _ ? (0, s.jsx)(u.Tooltip, {
        text: _,
        children: n => (0, s.jsxs)(e, {
          ...n,
          ...t,
          children: [null == r ? null : (0, s.jsx)(r, {
            className: d.primaryIcon
          }), E]
        })
      }) : (0, s.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, s.jsx)(r, {
          className: d.primaryIcon
        }), E]
      })
    })(), null == R ? null : (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      look: u.Button.Looks.LINK,
      onClick: A,
      children: R
    }), (0, s.jsx)(l.default, {}), null == t ? null : (0, s.jsx)(u.Button, {
      className: d.back,
      color: u.Button.Colors.PRIMARY,
      look: u.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = i;
var E = f