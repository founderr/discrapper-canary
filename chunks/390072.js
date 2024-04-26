"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250"),
  i = n("470079"),
  a = n("481060"),
  r = n("725436"),
  s = n("11868"),
  u = n("217804"),
  d = n("765305"),
  o = n("263246");

function c(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: c
  } = e, f = t.entity_type === d.GuildScheduledEventEntityTypes.EXTERNAL, v = i.useCallback(e => (0, s.createEventLocationClickHandler)(t, c)(e), [t, c]), E = (0, u.getLocationDataForEvent)(t, n);
  if (null == E) return null;
  let {
    IconComponent: h,
    locationName: m
  } = E, g = (0, l.jsxs)(l.Fragment, {
    children: [null != h && (0, l.jsx)(h, {
      width: 20,
      height: 20,
      className: o.channelIcon
    }), (0, l.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: o.locationText,
      children: (0, r.guildEventDetailsParser)(m, !0)
    })]
  });
  return (0, l.jsx)("div", {
    className: o.row,
    children: null != v ? (0, l.jsx)(a.Clickable, {
      className: f ? o.externalLocation : o.channelLocation,
      onClick: v,
      children: g
    }) : g
  })
}