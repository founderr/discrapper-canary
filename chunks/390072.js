l.d(n, {
  Z: function() {
    return d
  }
});
var t = l(735250),
  i = l(470079),
  r = l(481060),
  s = l(725436),
  a = l(11868),
  o = l(217804),
  u = l(765305),
  c = l(519229);

function d(e) {
  let {
    guildScheduledEvent: n,
    channel: l,
    onClose: d
  } = e, v = n.entity_type === u.WX.EXTERNAL, h = i.useCallback(e => (0, a.Qt)(n, d)(e), [n, d]), E = (0, o.u)(n, l);
  if (null == E) return null;
  let {
    IconComponent: g,
    locationName: f
  } = E, m = (0, t.jsxs)(t.Fragment, {
    children: [null != g && (0, t.jsx)(g, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: c.channelIcon
    }), (0, t.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: c.locationText,
      children: (0, s.m)(f, !0)
    })]
  });
  return (0, t.jsx)("div", {
    className: c.row,
    children: null != h ? (0, t.jsx)(r.Clickable, {
      className: v ? c.externalLocation : c.channelLocation,
      onClick: h,
      children: m
    }) : m
  })
}