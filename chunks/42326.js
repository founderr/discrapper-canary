n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(618158),
  o = n(318643);

function c(e) {
  let {
    errorMessage: t,
    className: n
  } = e;
  return (0, l.jsx)(a.TooltipContainer, {
    className: s()(n, o.root),
    text: t,
    position: "bottom",
    color: a.TooltipColors.GREY,
    children: (0, l.jsx)(r.Z, {
      children: (0, l.jsx)(a.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        "aria-label": null != t ? t : "",
        className: o.warningIcon
      })
    })
  })
}