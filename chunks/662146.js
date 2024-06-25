n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(481060),
  o = n(170552);

function u(e) {
  let {
    children: t,
    text: n,
    color: s,
    disableWrapper: u = !1,
    disabled: c = !1,
    hideOnClick: d = !0,
    shouldShow: h,
    forceOpen: p,
    selected: g = !1,
    tooltipClass: m,
    tooltipContentClass: C
  } = e;
  return (0, l.jsx)(a.Tooltip, {
    shouldShow: h,
    forceOpen: p,
    spacing: 20,
    hideOnClick: d,
    text: c ? null : n,
    position: "right",
    color: s,
    "aria-label": !1,
    tooltipClassName: r()(o.listItemTooltip, m),
    tooltipContentClassName: C,
    children: e => u ? i.cloneElement(i.Children.only(t), {
      ...e
    }) : (0, l.jsx)("div", {
      className: r()(o.listItemWrapper, {
        [o.selected]: g
      }),
      ...e,
      children: t
    })
  })
}