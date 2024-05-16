"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250"),
  i = l("470079"),
  a = l("481060"),
  r = l("725436"),
  s = l("11868"),
  u = l("217804"),
  d = l("765305"),
  o = l("435967");

function c(e) {
  let {
    guildScheduledEvent: t,
    channel: l,
    onClose: c
  } = e, f = t.entity_type === d.GuildScheduledEventEntityTypes.EXTERNAL, v = i.useCallback(e => (0, s.createEventLocationClickHandler)(t, c)(e), [t, c]), E = (0, u.getLocationDataForEvent)(t, l);
  if (null == E) return null;
  let {
    IconComponent: h,
    locationName: m
  } = E, _ = (0, n.jsxs)(n.Fragment, {
    children: [null != h && (0, n.jsx)(h, {
      width: 20,
      height: 20,
      className: o.channelIcon
    }), (0, n.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: o.locationText,
      children: (0, r.guildEventDetailsParser)(m, !0)
    })]
  });
  return (0, n.jsx)("div", {
    className: o.row,
    children: null != v ? (0, n.jsx)(a.Clickable, {
      className: f ? o.externalLocation : o.channelLocation,
      onClick: v,
      children: _
    }) : _
  })
}