n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(739566),
  a = n(702346),
  r = n(368666),
  o = n(689938);

function c(e) {
  var t;
  let {
    message: n,
    channel: c,
    playingActivity: u,
    onJoinStream: d,
    usernameHook: E,
    compact: _
  } = e, I = (0, l.ZP)(n), T = null === (t = n.call) || void 0 === t ? void 0 : t.duration, N = E(I), m = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
    username: I.nick,
    activityName: null != u ? u.name : "unknown",
    onJoinStream: d,
    usernameHook: N
  });
  return null != T && (m = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
    username: I.nick,
    duration: T.humanize(),
    channelName: c.name,
    usernameHook: N
  })), (0, s.jsx)(a.Z, {
    iconNode: null != T ? (0, s.jsx)(i.ScreenXIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }) : (0, s.jsx)(r.ZP, {
      size: r.ZP.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: _,
    children: m
  })
}