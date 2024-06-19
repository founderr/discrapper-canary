n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(816782),
  r = n(367907),
  o = n(433355),
  c = n(914010),
  u = n(502568),
  d = n(981631),
  h = n(689938);

function m(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([o.ZP], () => o.ZP.getSection(t)), m = (0, i.e7)([c.Z], () => c.Z.getGuildId()), p = n === d.ULH.MEMBERS;
  return (0, l.jsx)(u.JO, {
    tooltip: p ? h.Z.Messages.MEMBER_LIST_SHOWN : h.Z.Messages.MEMBER_LIST_HIDDEN,
    icon: s.GroupIcon,
    onClick: () => {
      r.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: m,
        member_list_open: !p
      }), a.Z.toggleMembersSection()
    },
    selected: p
  })
}