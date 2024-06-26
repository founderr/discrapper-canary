"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(693789),
  a = n(481060),
  l = n(717633);

function u(e) {
  let {
    variant: t,
    text: n,
    icon: r,
    tooltipDelay: u,
    tooltipClassName: _,
    tooltipContainerClassName: c,
    className: d,
    innerClassName: E,
    ...I
  } = e, T = {
    [l.text]: "text" === t,
    [l.icon]: "icon" === t,
    [l.banner]: "banner" === t
  };
  return (0, i.jsx)(a.TooltipContainer, {
    text: n,
    "aria-label": I["aria-label"],
    delay: u,
    className: c,
    tooltipClassName: _,
    shouldShow: "text" !== t,
    children: (0, i.jsxs)(o.zx, {
      className: s()(l.button, T, d),
      innerClassName: s()(l.buttonInner, T, E),
      color: s()(o.Tt.PRIMARY, l.color, T),
      look: o.zx.Looks.FILLED,
      size: "text" === t ? o.zx.Sizes.SMALL : o.zx.Sizes.NONE,
      grow: "text" === t,
      ...I,
      children: [null != r && (0, i.jsx)(r, {
        size: "xs",
        color: "currentColor"
      }), "text" === t && n]
    })
  })
}