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
    channel: r,
    targetUser: o,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, E = (0, i.ZP)(t), _ = (0, i.Sw)(o, r), I = c(E), T = u(null != _ ? _ : void 0), m = a.Z.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_REMOVE.format({
    actorName: E.nick,
    actorHook: I,
    targetName: null == _ ? void 0 : _.nick,
    targetHook: T
  });
  return (0, s.jsx)(l.Z, {
    icon: n(474019),
    timestamp: t.timestamp,
    compact: d,
    children: m
  })
}