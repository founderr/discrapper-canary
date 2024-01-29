"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("781738");
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("77078"),
  a = n("254490"),
  o = n("891653"),
  u = n("632892"),
  d = n("326908");

function c(e) {
  let {
    errors: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: d.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, a.sizeString)(t)
      })
    }, t))
  })
}

function f(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: l,
    description: a,
    children: f,
    className: E,
    errors: h,
    disabled: _ = !1,
    hideDivider: C = !1,
    showBorder: p = !1,
    borderType: S,
    hasBackground: I = !1,
    forcedDivider: R = !1,
    showPremiumIcon: m = !1
  } = e;
  return (0, i.jsx)("div", {
    className: r(d.customizationSection, E, {
      [d.disabled]: _,
      [d.hideDivider]: C,
      [d.showBorder]: p,
      [d.withDivider]: R
    }),
    children: (0, i.jsxs)(u.default, {
      className: d.customizationSectionBorder,
      backgroundClassName: d.customizationSectionBackground,
      isShown: p,
      type: S,
      hasBackground: I,
      children: [(0, i.jsxs)(s.FormTitle, {
        className: d.title,
        id: l,
        children: [t, m && (0, i.jsx)(o.default, {}), n]
      }), null != a ? (0, i.jsx)(s.FormText, {
        type: s.FormText.Types.DESCRIPTION,
        className: d.sectionDescription,
        children: a
      }) : null, f, null != h && (0, i.jsx)(c, {
        errors: h
      })]
    })
  })
}