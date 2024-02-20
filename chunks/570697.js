"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("781738");
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("77078"),
  i = n("254490"),
  u = n("891653"),
  c = n("632892"),
  o = n("881049");

function d(e) {
  let {
    errors: t
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: t.map((e, t) => (0, s.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: o.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, i.sizeString)(t)
      })
    }, t))
  })
}

function f(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: r,
    description: i,
    children: f,
    className: m,
    errors: _,
    disabled: E = !1,
    hideDivider: p = !1,
    showBorder: I = !1,
    borderType: S,
    hasBackground: N = !1,
    forcedDivider: P = !1,
    showPremiumIcon: T = !1
  } = e;
  return (0, s.jsx)("div", {
    className: a(o.customizationSection, m, {
      [o.disabled]: E,
      [o.hideDivider]: p,
      [o.showBorder]: I,
      [o.withDivider]: P
    }),
    children: (0, s.jsxs)(c.default, {
      className: o.customizationSectionBorder,
      backgroundClassName: o.customizationSectionBackground,
      isShown: I,
      type: S,
      hasBackground: N,
      children: [(0, s.jsxs)(l.FormTitle, {
        className: o.title,
        id: r,
        children: [t, T && (0, s.jsx)(u.default, {}), n]
      }), null != i ? (0, s.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: o.sectionDescription,
        children: i
      }) : null, f, null != _ && (0, s.jsx)(d, {
        errors: _
      })]
    })
  })
}