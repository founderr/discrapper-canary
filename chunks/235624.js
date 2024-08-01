n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(768943),
  l = n(43690),
  o = n(121254),
  c = n(689938);

function u(e) {
  let {
enabled: t
  } = o.Z.useExperiment({
location: 'use_message_bookmarks_item'
  }, {
autoTrackExposure: !1
  }), n = (0, s.e7)([r.Z], () => r.Z.isMessageBookmarked(e.id));
  return t ? (0, i.jsx)(a.MenuItem, {
id: 'mark-bookmark',
label: n ? c.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : c.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
icon: a.InboxIcon,
action: () => n ? (0, l.h)({
  channelId: e.channel_id,
  messageId: e.id
}) : (0, l.D)({
  channelId: e.channel_id,
  messageId: e.id
})
  }) : null;
}