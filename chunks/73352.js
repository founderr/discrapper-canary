n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(702346),
  l = n(739566),
  a = n(689938);

function r(e) {
  let {
    message: t,
    otherUsername: r,
    usernameHook: o,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, l.ZP)(t), E = o(), _ = c(), I = a.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
    username: d,
    usernameHook: E,
    otherUsername: r,
    otherUsernameHook: _
  });
  return (0, s.jsx)(i.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: u,
    children: I
  })
}