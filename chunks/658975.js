n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(739566),
  l = n(702346),
  a = n(352736);

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o,
    guildId: c
  } = e, u = (0, i.ZP)(t), d = r(u), E = a.Z.getWelcomeMessageKind(c), _ = a.Z.getSystemMessageUserJoin(t.id, E).format({
    username: u.nick,
    usernameHook: d
  });
  return (0, s.jsx)(l.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: o,
    children: _
  })
}