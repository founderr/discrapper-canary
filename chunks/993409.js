"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var l = s("735250");
s("470079");
var a = s("693789"),
  i = s("481060"),
  n = s("652853"),
  o = s("46781");

function r(e) {
  let {
    icon: t,
    text: s,
    compact: r,
    ...u
  } = e, {
    primaryProfileColor: d
  } = (0, n.useUserProfileThemeContext)(), c = null !== d ? o.themeColor : a.ButtonColors.PRIMARY, f = (0, l.jsx)(t, {
    width: 16,
    height: 16
  });
  return r ? (0, l.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, l.jsx)(a.Button, {
      className: o.compactButton,
      innerClassName: o.compactButtonInner,
      color: c,
      look: a.Button.Looks.FILLED,
      size: a.Button.Sizes.ICON,
      ...e,
      ...u,
      children: f
    })
  }) : (0, l.jsxs)(a.Button, {
    innerClassName: o.button,
    color: c,
    look: a.Button.Looks.FILLED,
    size: a.Button.Sizes.MEDIUM,
    ...u,
    children: [f, s]
  })
}