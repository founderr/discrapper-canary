n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(739566),
  l = n(702346),
  a = n(689938);

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, c = (0, i.ZP)(t), u = r(c);
  return (0, s.jsx)(l.Z, {
    icon: n(819373),
    timestamp: t.timestamp,
    compact: o,
    children: a.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
      username: c.nick,
      usernameHook: u
    })
  })
}