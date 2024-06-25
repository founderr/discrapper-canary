n.d(t, {
  Z: function() {
    return u
  }
});
var o = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(672752),
  r = n(154921),
  c = n(90160);

function u(e) {
  let {
    text: t,
    textSize: n = r.Z.Sizes.SIZE_12,
    textColor: i = r.Z.Colors.STANDARD,
    className: u,
    button: d,
    reducedRightPadding: E = !1
  } = e;
  return (0, o.jsxs)("div", {
    className: s()(E ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, u),
    children: [(0, o.jsxs)("div", {
      className: c.noticeLeft,
      children: [(0, o.jsx)(a.NitroWheelIcon, {
        size: "md",
        className: c.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, o.jsx)(r.Z, {
        className: c.text,
        size: n,
        color: i,
        children: t
      })]
    }), d]
  })
}