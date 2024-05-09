"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("47120");
var a = r("735250");
r("470079");
var i = r("346652"),
  l = r("692547"),
  n = r("410030"),
  o = r("68588"),
  c = r("981631"),
  s = r("277513");
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
  let t = {};
  for (let [r, a] of Object.entries(e)) t[r] = a;
  return t
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
    data: t
  } = e, r = (0, n.default)();
  return (0, a.jsx)("div", {
    className: s.inspectorWrapper,
    children: (0, a.jsx)(i.JSONTree, {
      data: t,
      theme: "light" === r ? m : h,
      invertTheme: !1,
      valueRenderer: p
    })
  })
}