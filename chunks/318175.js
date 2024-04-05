"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("702346"),
  i = n("689938");

function r(e) {
  let t, {
      message: r,
      usernameHook: o,
      otherUser: u,
      otherUsernameHook: d,
      compact: c,
      channel: E
    } = e,
    f = (0, a.default)(r),
    _ = f.nick,
    T = o(f),
    I = (0, a.useNullableUserAuthor)(u, E);
  if (null != I && null != d) {
    let e = d(I);
    t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: _,
      usernameHook: T,
      otherUsername: I.nick,
      otherUsernameHook: e
    })
  } else t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: _,
    usernameHook: T
  });
  return (0, s.jsx)(l.default, {
    icon: n("474019"),
    timestamp: r.timestamp,
    compact: c,
    children: t
  })
}