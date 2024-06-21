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
  r = n(689938),
  o = n(518171);

function c(e) {
  let {
    message: t,
    compact: n,
    usernameHook: c
  } = e, u = (0, l.ZP)(t), d = c(u), E = r.Z.Messages.SYSTEM_MESSAGE_STAGE_TOPIC_HOOK.format({
    username: u.nick,
    usernameHook: d,
    topic: t.content
  });
  return (0, s.jsx)(a.Z, {
    className: o.stageSystemMessage,
    iconNode: (0, s.jsx)(i.StageIcon, {
      size: "md",
      color: "currentColor"
    }),
    iconContainerClassName: o.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: E
  })
}