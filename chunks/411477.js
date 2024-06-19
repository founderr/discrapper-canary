n.d(t, {
  Z: function() {
    return u
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(672752),
  o = n(154921),
  c = n(90160);

function u(e) {
  let {
    text: t,
    textSize: n = o.Z.Sizes.SIZE_12,
    textColor: i = o.Z.Colors.STANDARD,
    className: u,
    button: d,
    reducedRightPadding: h = !1
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(h ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, u),
    children: [(0, r.jsxs)("div", {
      className: c.noticeLeft,
      children: [(0, r.jsx)(a.NitroWheelIcon, {
        size: "md",
        className: c.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(o.Z, {
        className: c.text,
        size: n,
        color: i,
        children: t
      })]
    }), d]
  })
}