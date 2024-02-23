"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("289867"),
  i = n("716241"),
  r = n("982108"),
  u = n("162771"),
  o = n("155207"),
  d = n("664336"),
  c = n("49111"),
  f = n("782340");

function h(e) {
  let {
    channelId: t
  } = e, n = (0, a.useStateFromStores)([r.default], () => r.default.getSection(t)), h = (0, a.useStateFromStores)([u.default], () => u.default.getGuildId()), m = n === c.ChannelSections.MEMBERS;
  return (0, l.jsx)(d.Icon, {
    tooltip: m ? f.default.Messages.MEMBER_LIST_SHOWN : f.default.Messages.MEMBER_LIST_HIDDEN,
    icon: o.default,
    onClick: () => {
      i.default.trackWithMetadata(c.AnalyticEvents.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: h,
        member_list_open: !m
      }), s.default.toggleMembersSection()
    },
    selected: m
  })
}