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
  n = s("481060"),
  r = s("46781");

function u(e) {
  let {
    icon: t,
    text: s,
    compact: a,
    ...u
  } = e, d = (0, l.jsx)(t, {
    width: 16,
    height: 16
  });
  return a ? (0, l.jsx)(n.Tooltip, {
    text: s,
    children: e => (0, l.jsx)(o.Button, {
      className: r.compactButton,
      innerClassName: r.compactButtonInner,
      color: i()(o.ButtonColors.PRIMARY, r.color),
      look: o.Button.Looks.FILLED,
      size: o.Button.Sizes.ICON,
      ...e,
      ...u,
      children: d
    })
  }) : (0, l.jsxs)(o.Button, {
    innerClassName: r.button,
    color: i()(o.ButtonColors.PRIMARY, r.color),
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.MEDIUM,
    ...u,
    children: [d, s]
  })
}