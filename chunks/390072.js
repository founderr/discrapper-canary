n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250),
  i = n(470079),
  r = n(481060),
  a = n(725436),
  l = n(11868),
  o = n(217804),
  c = n(765305),
  u = n(519229);

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, _ = t.entity_type === c.WX.EXTERNAL, E = i.useCallback(e => (0, l.Qt)(t, d)(e), [t, d]), I = (0, o.u)(t, n);
  if (null == I) return null;
  let {
    IconComponent: h,
    locationName: p
  } = I, g = (0, s.jsxs)(s.Fragment, {
    children: [null != h && (0, s.jsx)(h, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, s.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, a.m)(p, !0)
    })]
  });
  return (0, s.jsx)("div", {
    className: u.row,
    children: null != E ? (0, s.jsx)(r.Clickable, {
      className: _ ? u.externalLocation : u.channelLocation,
      onClick: E,
      children: g
    }) : g
  })
}