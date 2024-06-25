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
  let t, {
      message: r,
      usernameHook: o,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: E
    } = e,
    _ = (0, i.ZP)(r),
    I = _.nick,
    T = o(_),
    m = (0, i.Sw)(c, E);
  if (null != m && null != u) {
    let e = u(m);
    t = a.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: I,
      usernameHook: T,
      otherUsername: m.nick,
      otherUsernameHook: e
    })
  } else t = a.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: I,
    usernameHook: T
  });
  return (0, s.jsx)(l.Z, {
    icon: n(474019),
    timestamp: r.timestamp,
    compact: d,
    children: t
  })
}