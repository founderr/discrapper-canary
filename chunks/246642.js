n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(44315),
  l = n(641033),
  o = n(989830),
  r = n(689938),
  u = n(390017);

function c(e) {
  let {
    channelId: t
  } = e, n = (0, o.Z)(t);
  if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
  let {
    multiplier: c
  } = n, {
    color: d
  } = (0, l.yz)(c);
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-xs/normal",
      children: r.Z.Messages.POGGERMODE_COMBO_BAR
    }), (0, i.jsx)(s.Progress, {
      foregroundColor: (0, a.Lq)(d),
      className: u.progress,
      size: s.Progress.Sizes.LARGE,
      percent: 100 * (0, l.nc)(n),
      animate: !0
    })]
  })
}