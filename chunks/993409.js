"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var l = s("693789"),
  i = s("481060"),
  n = s("747074"),
  o = s("46781");

function r(e) {
  let {
    icon: t,
    text: s,
    compact: r,
    ...u
  } = e, {
    primaryProfileColor: d
  } = (0, n.useUserProfileContext)(), c = null !== d ? o.themeColor : l.ButtonColors.PRIMARY, f = (0, a.jsx)(t, {
    width: 16,
    height: 16
  });
  return r ? (0, a.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, a.jsx)(l.Button, {
      className: o.compactButton,
      innerClassName: o.compactButtonInner,
      color: c,
      look: l.Button.Looks.FILLED,
      size: l.Button.Sizes.ICON,
      ...e,
      ...u,
      children: f
    })
  }) : (0, a.jsxs)(l.Button, {
    innerClassName: o.button,
    color: c,
    look: l.Button.Looks.FILLED,
    size: l.Button.Sizes.MEDIUM,
    ...u,
    children: [f, s]
  })
}