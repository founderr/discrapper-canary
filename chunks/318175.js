"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var l = n("739566"),
  a = n("702346"),
  i = n("689938");

function r(e) {
  let t, {
      message: r,
      usernameHook: o,
      otherUser: u,
      otherUsernameHook: d,
      compact: c,
      channel: f
    } = e,
    E = (0, l.default)(r),
    _ = E.nick,
    m = o(E),
    T = (0, l.useNullableUserAuthor)(u, f);
  if (null != T && null != d) {
    let e = d(T);
    t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: _,
      usernameHook: m,
      otherUsername: T.nick,
      otherUsernameHook: e
    })
  } else t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: _,
    usernameHook: m
  });
  return (0, s.jsx)(a.default, {
    icon: n("474019"),
    timestamp: r.timestamp,
    compact: c,
    children: t
  })
}