"use strict";
n.r(t), n.d(t, {
  FormSwitch: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("718776"),
  l = n("980672"),
  u = n("414055"),
  c = n("370373"),
  d = n("329272"),
  p = n("37973");

function h(e) {
  let {
    value: t,
    disabled: n = !1,
    hideBorder: s = !1,
    tooltipNote: h,
    onChange: f,
    className: E,
    style: _,
    note: m,
    children: S
  } = e, g = r.useRef(null), T = r.useRef(null), I = r.useId(), v = (0, i.jsx)(l.Switch, {
    id: I,
    checked: t,
    onChange: f,
    disabled: n,
    focusProps: {
      enabled: !1
    },
    innerRef: g
  });
  return (0, i.jsxs)("div", {
    style: _,
    className: a(p.container, E, {
      [p.disabled]: n
    }),
    children: [(0, i.jsx)(o.FocusRing, {
      within: !0,
      offset: -4,
      focusTarget: g,
      ringTarget: T,
      children: (0, i.jsxs)("div", {
        className: p.labelRow,
        ref: T,
        children: [(0, i.jsx)("label", {
          htmlFor: I,
          className: p.title,
          children: S
        }), (0, i.jsx)("div", {
          className: p.control,
          children: null != h ? (0, i.jsx)(u.TooltipContainer, {
            text: h,
            children: v
          }) : v
        })]
      })
    }), null != m && (0, i.jsx)("div", {
      className: p.note,
      children: (0, i.jsx)(d.FormText, {
        disabled: n,
        type: d.FormTextTypes.DESCRIPTION,
        children: m
      })
    }), !s && (0, i.jsx)(c.FormDivider, {
      className: p.dividerDefault
    })]
  })
}