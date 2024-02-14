"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("77078"),
  u = n("1339"),
  a = n("914169"),
  s = n("931874"),
  o = n("745049"),
  d = n("409295");

function c(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: c
  } = e, f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL, E = r.useCallback(e => (0, a.createEventLocationClickHandler)(t, c)(e), [t, c]), _ = (0, s.getLocationDataForEvent)(t, n);
  if (null == _) return null;
  let {
    IconComponent: S,
    locationName: T
  } = _, I = (0, i.jsxs)(i.Fragment, {
    children: [null != S && (0, i.jsx)(S, {
      width: 20,
      height: 20,
      className: d.channelIcon
    }), (0, i.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: d.locationText,
      children: (0, u.guildEventDetailsParser)(T, !0)
    })]
  });
  return (0, i.jsx)("div", {
    className: d.row,
    children: null != E ? (0, i.jsx)(l.Clickable, {
      className: f ? d.externalLocation : d.channelLocation,
      onClick: E,
      children: I
    }) : I
  })
}