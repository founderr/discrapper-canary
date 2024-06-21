n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(692547),
  l = n(481060),
  a = n(702346),
  r = n(739566),
  o = n(689938),
  c = n(418976);

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, r.ZP)(t), E = u(d), _ = o.Z.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
    username: d.nick,
    usernameHook: E,
    topic: t.content
  });
  return (0, s.jsx)(a.Z, {
    className: c.stageSystemMessage,
    iconNode: (0, s.jsx)(l.StageIcon, {
      size: "md",
      color: i.Z.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: c.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: _
  })
}