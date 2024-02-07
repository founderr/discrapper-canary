"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("77078"),
  s = n("1339"),
  a = n("914169"),
  u = n("931874"),
  o = n("745049"),
  c = n("171632");

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, h = l.useCallback(e => (0, a.createEventLocationClickHandler)(t, d)(e), [t, d]), C = (0, u.getLocationDataForEvent)(t, n);
  if (null == C) return null;
  let {
    IconComponent: v,
    locationName: p
  } = C, E = (0, i.jsxs)(i.Fragment, {
    children: [null != v && (0, i.jsx)(v, {
      width: 20,
      height: 20,
      className: c.channelIcon
    }), (0, i.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: c.locationText,
      children: (0, s.guildEventDetailsParser)(p, !0)
    })]
  });
  return (0, i.jsx)("div", {
    className: c.row,
    children: null != h ? (0, i.jsx)(r.Clickable, {
      className: f ? c.externalLocation : c.channelLocation,
      onClick: h,
      children: E
    }) : E
  })
}