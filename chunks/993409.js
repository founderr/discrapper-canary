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
    variant: t,
    text: n,
    icon: r,
    tooltipDelay: u,
    tooltipClassName: d,
    className: _,
    innerClassName: c,
    ...E
  } = e, I = {
    [l.text]: "text" === t,
    [l.icon]: "icon" === t,
    [l.banner]: "banner" === t
  };
  return (0, i.jsx)(o.TooltipContainer, {
    text: n,
    "aria-label": E["aria-label"],
    delay: u,
    tooltipClassName: d,
    shouldShow: "text" !== t,
    children: (0, i.jsxs)(a.Button, {
      className: s()(l.button, I, _),
      innerClassName: s()(l.buttonInner, I, c),
      color: s()(a.ButtonColors.PRIMARY, l.color, I),
      look: a.Button.Looks.FILLED,
      size: "text" === t ? a.Button.Sizes.SMALL : a.Button.Sizes.NONE,
      grow: "text" === t,
      ...E,
      children: [null != r && (0, i.jsx)(r, {
        width: 16,
        height: 16,
        color: "currentColor"
      }), "text" === t && n]
    })
  })
}