"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("757143");
var r = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("481060"),
  o = n("403182"),
  u = n("587446"),
  s = n("504983"),
  d = n("288073");

function c(e) {
  let {
    errors: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: d.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, o.sizeString)(t)
      })
    }, t))
  })
}

function f(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: l,
    description: o,
    children: f,
    className: m,
    errors: h,
    disabled: v = !1,
    hideDivider: S = !1,
    showBorder: x = !1,
    borderType: g,
    hasBackground: C = !1,
    forcedDivider: F = !1,
    showPremiumIcon: p = !1
  } = e;
  return (0, r.jsx)("div", {
    className: a()(d.customizationSection, m, {
      [d.disabled]: v,
      [d.hideDivider]: S,
      [d.showBorder]: x,
      [d.withDivider]: F
    }),
    children: (0, r.jsxs)(s.default, {
      className: d.customizationSectionBorder,
      backgroundClassName: d.customizationSectionBackground,
      isShown: x,
      type: g,
      hasBackground: C,
      children: [(0, r.jsxs)(i.FormTitle, {
        className: d.title,
        id: l,
        children: [t, p && (0, r.jsx)(u.default, {}), n]
      }), null != o ? (0, r.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: d.sectionDescription,
        children: o
      }) : null, f, null != h && (0, r.jsx)(c, {
        errors: h
      })]
    })
  })
}