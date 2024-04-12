"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("47120");
var a = r("735250");
r("470079");
var n = r("346652"),
  i = r("692547"),
  o = r("410030"),
  l = r("68588"),
  s = r("981631"),
  c = r("779869");
let d = {
  base00: i.default.colors.BACKGROUND_SECONDARY.css,
  base03: i.default.colors.TEXT_WARNING.css,
  base07: i.default.colors.TEXT_NORMAL.css,
  base08: i.default.colors.TEXT_MUTED.css,
  base09: i.default.colors.TEXT_POSITIVE.css,
  base0B: i.default.colors.TEXT_WARNING.css,
  base0D: i.default.colors.TEXT_BRAND.css
};

function u(e) {
  let t = {};
  for (let [r, a] of Object.entries(e)) t[r] = a;
  return t
}
let h = u(d),
  p = u(d);

function m(e) {
  return s.TOKEN_REGEX.test(e) ? (0, a.jsx)(l.default, {
    type: l.default.Types.TEXT,
    children: () => (0, a.jsx)(a.Fragment, {
      children: e
    })
  }) : e
}

function g(e) {
  let {
    data: t
  } = e, r = (0, o.default)();
  return (0, a.jsx)("div", {
    className: c.inspectorWrapper,
    children: (0, a.jsx)(n.JSONTree, {
      data: t,
      theme: "light" === r ? p : h,
      invertTheme: !1,
      valueRenderer: m
    })
  })
}