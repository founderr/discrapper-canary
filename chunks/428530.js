"use strict";
t.r(r), t.d(r, {
  default: function() {
    return g
  }
}), t("47120");
var a = t("735250");
t("470079");
var i = t("346652"),
  l = t("692547"),
  n = t("410030"),
  o = t("68588"),
  c = t("981631"),
  s = t("277513");
let d = {
  base00: l.default.colors.BACKGROUND_SECONDARY.css,
  base03: l.default.colors.TEXT_WARNING.css,
  base07: l.default.colors.TEXT_NORMAL.css,
  base08: l.default.colors.TEXT_MUTED.css,
  base09: l.default.colors.TEXT_POSITIVE.css,
  base0B: l.default.colors.TEXT_WARNING.css,
  base0D: l.default.colors.TEXT_BRAND.css
};

function u(e) {
  let r = {};
  for (let [t, a] of Object.entries(e)) r[t] = a;
  return r
}
let h = u(d),
  m = u(d);

function p(e) {
  return c.TOKEN_REGEX.test(e) ? (0, a.jsx)(o.default, {
    type: o.default.Types.TEXT,
    children: () => (0, a.jsx)(a.Fragment, {
      children: e
    })
  }) : e
}

function g(e) {
  let {
    data: r
  } = e, t = (0, n.default)();
  return (0, a.jsx)("div", {
    className: s.inspectorWrapper,
    children: (0, a.jsx)(i.JSONTree, {
      data: r,
      theme: "light" === t ? m : h,
      invertTheme: !1,
      valueRenderer: p
    })
  })
}