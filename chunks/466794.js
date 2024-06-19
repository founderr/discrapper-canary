n.d(t, {
  X: function() {
    return a
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(842333);

function a(e) {
  let {
    tooltipText: t,
    textColor: n
  } = e;
  return (0, s.jsxs)("span", {
    className: l.tooltipTextContainer,
    children: [(0, s.jsx)(i.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: l.nitroWheel
    }), (0, s.jsx)(i.Text, {
      className: l.tooltipText,
      variant: "text-sm/medium",
      color: null != n ? n : "text-normal",
      children: t
    })]
  })
}