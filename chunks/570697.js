"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("781738");
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("254490"),
  o = s("891653"),
  d = s("632892"),
  u = s("881049");

function c(e) {
  let {
    errors: t
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.map((e, t) => (0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: u.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, r.sizeString)(t)
      })
    }, t))
  })
}

function S(e) {
  let {
    title: t,
    titleIcon: s,
    titleId: n,
    description: r,
    children: S,
    className: E,
    errors: T,
    disabled: f = !1,
    hideDivider: m = !1,
    showBorder: _ = !1,
    borderType: g,
    hasBackground: h = !1,
    forcedDivider: N = !1,
    showPremiumIcon: I = !1
  } = e;
  return (0, a.jsx)("div", {
    className: l(u.customizationSection, E, {
      [u.disabled]: f,
      [u.hideDivider]: m,
      [u.showBorder]: _,
      [u.withDivider]: N
    }),
    children: (0, a.jsxs)(d.default, {
      className: u.customizationSectionBorder,
      backgroundClassName: u.customizationSectionBackground,
      isShown: _,
      type: g,
      hasBackground: h,
      children: [(0, a.jsxs)(i.FormTitle, {
        className: u.title,
        id: n,
        children: [t, I && (0, a.jsx)(o.default, {}), s]
      }), null != r ? (0, a.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        className: u.sectionDescription,
        children: r
      }) : null, S, null != T && (0, a.jsx)(c, {
        errors: T
      })]
    })
  })
}