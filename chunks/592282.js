"use strict";
n.d(t, {
  S: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(761224),
  u = n(743236),
  _ = n(448239),
  c = n(247442),
  d = n(939350),
  E = n(639897);

function I(e) {
  let {
    color: t = "default",
    label: n,
    checked: s,
    subtext: I,
    disabled: T,
    isFocused: h,
    menuItemProps: f,
    action: S,
    className: N,
    focusedClassName: A
  } = e, m = r.useRef(null);
  return r.useEffect(() => {
    h && (0, u.F)(m)
  }, [h]), (0, i.jsxs)(a.P, {
    innerRef: m,
    className: o()(E.item, E.labelContainer, d._[t], N, {
      [E.disabled]: T,
      [E.focused]: h,
      [null != A ? A : ""]: h
    }),
    onClick: T ? void 0 : S,
    ...f,
    "aria-checked": s,
    "aria-disabled": T,
    children: [(0, i.jsxs)("div", {
      className: E.label,
      children: [(0, l.I)(n, e), null != I && (0, i.jsx)("div", {
        className: E.subtext,
        children: I
      })]
    }), (0, i.jsx)("div", {
      className: E.iconContainer,
      children: s ? (0, i.jsx)(c.Z, {
        className: E.icon,
        background: E.checkbox,
        foreground: E.check
      }) : (0, i.jsx)(_.Z, {
        className: E.icon,
        foreground: E.__invalid_checkboxEmpty
      })
    })]
  })
}