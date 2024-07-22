n.d(t, {
  o: function() {
return u;
  }
});
var i = n(442837),
  l = n(592125),
  r = n(944486),
  a = n(595519),
  o = n(981631);

function u(e) {
  return (0, i.e7)([
l.Z,
r.Z
  ], () => function(e) {
let {
  channelId: t,
  SelectedChannelStore: n,
  ChannelStore: i
} = e, l = i.getChannel(t), r = (0, a.WS)(l, !1);
return !!((null == l ? void 0 : l.type) === o.d4z.GUILD_TEXT && r || null != l && l.isPrivate() && r && null == n.getVoiceChannelId()) || !1;
  }({
channelId: null == e ? void 0 : e.id,
ChannelStore: l.Z,
SelectedChannelStore: r.Z
  }));
}