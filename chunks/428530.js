"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("47120");
var a = r("735250");
r("470079");
var i = r("346652"),
  n = r("692547"),
  l = r("410030"),
  o = r("68588"),
  c = r("981631"),
  s = r("277513");
let d = {
  base00: n.default.colors.BACKGROUND_SECONDARY.css,
  base03: n.default.colors.TEXT_WARNING.css,
  base07: n.default.colors.TEXT_NORMAL.css,
  base08: n.default.colors.TEXT_MUTED.css,
  base09: n.default.colors.TEXT_POSITIVE.css,
  base0B: n.default.colors.TEXT_WARNING.css,
  base0D: n.default.colors.TEXT_BRAND.css
};

function u(e) {
  let t = {};
  for (let [r, a] of Object.entries(e)) t[r] = a;
  return t
}
let h = u(d),
  p = u(d);

function g(e) {
  return c.TOKEN_REGEX.test(e) ? (0, a.jsx)(o.default, {
    type: o.default.Types.TEXT,
    children: () => (0, a.jsx)(a.Fragment, {
      children: e
    })
  }) : e
}

function m(e) {
  let {
    data: t
  } = e, r = (0, l.default)();
  return (0, a.jsx)("div", {
    className: s.inspectorWrapper,
    children: (0, a.jsx)(i.JSONTree, {
      data: t,
      theme: "light" === r ? p : h,
      invertTheme: !1,
      valueRenderer: g
    })
  })
}