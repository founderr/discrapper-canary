"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var l = s("735250");
s("470079");
var a = s("120356"),
  i = s.n(a),
  o = s("693789"),
  r = s("481060"),
  n = s("46781");

function u(e) {
  let {
    icon: t,
    text: s,
    compact: a,
    className: u,
    innerClassName: d,
    ...c
  } = e, f = (0, l.jsx)(t, {
    width: 16,
    height: 16,
    color: "currentColor"
  });
  return a ? (0, l.jsx)(r.Tooltip, {
    text: s,
    children: e => (0, l.jsx)(o.Button, {
      className: i()(n.compactButton, u),
      innerClassName: i()(n.compactButtonInner, d),
      color: i()(o.ButtonColors.PRIMARY, n.color),
      look: o.Button.Looks.FILLED,
      size: o.Button.Sizes.NONE,
      grow: !1,
      ...e,
      ...c,
      children: f
    })
  }) : (0, l.jsxs)(o.Button, {
    innerClassName: i()(n.button, u),
    color: i()(o.ButtonColors.PRIMARY, n.color),
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.MEDIUM,
    ...c,
    children: [f, s]
  })
}