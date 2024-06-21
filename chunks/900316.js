n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(739566),
  l = n(702346),
  a = n(689938),
  r = n(636803);

function o(e) {
  let {
    message: t,
    usernameHook: o,
    compact: c,
    isForumPost: u
  } = e, d = (0, i.ZP)(t), E = o(d);
  return (0, s.jsx)(l.Z, {
    compact: c,
    className: r.channelNameChange,
    icon: n(819373),
    timestamp: t.timestamp,
    children: (u ? a.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : a.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
      username: d.nick,
      usernameHook: E,
      channelName: t.content
    })
  })
}