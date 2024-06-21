n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(702346),
  l = n(352736),
  a = n(739566);

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o,
    guildId: c
  } = e, u = (0, a.ZP)(t), d = r(u), E = l.Z.getWelcomeMessageKind(c), _ = l.Z.getSystemMessageUserJoin(t.id, E).format({
    username: u.nick,
    usernameHook: d
  });
  return (0, s.jsx)(i.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: o,
    children: _
  })
}