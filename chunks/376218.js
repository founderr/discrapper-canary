"use strict";
var i = n(735250),
  s = n(470079),
  l = n(120356),
  o = n.n(l),
  a = n(441803);
let r = e => {
  let {
    keybind: t,
    separator: n,
    className: l
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, r) => (0, i.jsxs)(s.Fragment, {
      children: [(0, i.jsx)("span", {
        className: o()(a.key, l),
        children: e
      }), r === t.length - 1 ? void 0 : n]
    }, r))
  })
};
r.defaultProps = {
  separator: "+"
}, t.Z = r