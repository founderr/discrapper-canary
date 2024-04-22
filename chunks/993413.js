"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("757143");
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  r = n("481060"),
  a = n("403182"),
  u = n("587446"),
  o = n("504983"),
  c = n("669967");

function d(e) {
  let {
    errors: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: c.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, a.sizeString)(t)
      })
    }, t))
  })
}

function m(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: s,
    description: a,
    children: m,
    className: f,
    errors: p,
    disabled: I = !1,
    hideDivider: _ = !1,
    showBorder: S = !1,
    borderType: P,
    hasBackground: E = !1,
    forcedDivider: T = !1,
    showPremiumIcon: v = !1
  } = e;
  return (0, i.jsx)("div", {
    className: l()(c.customizationSection, f, {
      [c.disabled]: I,
      [c.hideDivider]: _,
      [c.showBorder]: S,
      [c.withDivider]: T
    }),
    children: (0, i.jsxs)(o.default, {
      className: c.customizationSectionBorder,
      backgroundClassName: c.customizationSectionBackground,
      isShown: S,
      type: P,
      hasBackground: E,
      children: [(0, i.jsxs)(r.FormTitle, {
        className: c.title,
        id: s,
        children: [t, v && (0, i.jsx)(u.default, {}), n]
      }), null != a ? (0, i.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: c.sectionDescription,
        children: a
      }) : null, m, null != p && (0, i.jsx)(d, {
        errors: p
      })]
    })
  })
}