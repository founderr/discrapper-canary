"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("693789"),
  o = n("481060"),
  l = n("47200");

function u(e) {
  let {
    text: t,
    icon: n,
    compact: r,
    className: u,
    innerClassName: d,
    disabled: _ = !1,
    ...c
  } = e, E = null != n ? (0, i.jsx)(n, {
    width: 16,
    height: 16,
    color: "currentColor"
  }) : null;
  return r ? (0, i.jsx)(o.TooltipContainer, {
    text: t,
    "aria-label": c["aria-label"],
    shouldShow: !_,
    disableTooltipPointerEvents: _,
    children: (0, i.jsx)(a.Button, {
      className: s()(l.compactButton, u),
      innerClassName: s()(l.compactButtonInner, d),
      color: s()(a.ButtonColors.PRIMARY, l.color),
      look: a.Button.Looks.FILLED,
      size: a.Button.Sizes.NONE,
      grow: !1,
      disabled: _,
      ...c,
      children: E
    })
  }) : (0, i.jsxs)(a.Button, {
    className: u,
    innerClassName: s()(l.button, d),
    color: s()(a.ButtonColors.PRIMARY, l.color),
    look: a.Button.Looks.FILLED,
    size: a.Button.Sizes.SMALL,
    disabled: _,
    ...c,
    children: [E, t]
  })
}