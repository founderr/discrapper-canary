t.d(r, {
  Z: function() {
    return p
  }
}), t(47120);
var a = t(735250);
t(470079);
var i = t(346652),
  n = t(692547),
  o = t(410030),
  l = t(68588),
  c = t(981631),
  s = t(719556);
let d = {
  base00: n.Z.colors.BACKGROUND_SECONDARY.css,
  base03: n.Z.colors.TEXT_WARNING.css,
  base07: n.Z.colors.TEXT_NORMAL.css,
  base08: n.Z.colors.TEXT_MUTED.css,
  base09: n.Z.colors.TEXT_POSITIVE.css,
  base0B: n.Z.colors.TEXT_WARNING.css,
  base0D: n.Z.colors.TEXT_BRAND.css
};

function u(e) {
  let r = {};
  for (let [t, a] of Object.entries(e)) r[t] = a;
  return r
}
let h = u(d),
  m = u(d);

function g(e) {
  return c.Jn9.test(e) ? (0, a.jsx)(l.Z, {
    type: l.Z.Types.TEXT,
    children: () => (0, a.jsx)(a.Fragment, {
      children: e
    })
  }) : e
}

function p(e) {
  let {
    data: r
  } = e, t = (0, o.ZP)();
  return (0, a.jsx)("div", {
    className: s.inspectorWrapper,
    children: (0, a.jsx)(i.L, {
      data: r,
      theme: "light" === t ? m : h,
      invertTheme: !1,
      valueRenderer: g
    })
  })
}