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
  let t, {
      message: r,
      usernameHook: o,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: E
    } = e,
    _ = (0, l.ZP)(r),
    I = _.nick,
    T = o(_),
    N = (0, l.Sw)(c, E);
  if (null != N && null != u) {
    let e = u(N);
    t = a.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: I,
      usernameHook: T,
      otherUsername: N.nick,
      otherUsernameHook: e
    })
  } else t = a.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: I,
    usernameHook: T
  });
  return (0, s.jsx)(i.Z, {
    icon: n(474019),
    timestamp: r.timestamp,
    compact: d,
    children: t
  })
}