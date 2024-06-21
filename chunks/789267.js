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
    compact: r,
    missed: o,
    joinable: c,
    usernameHook: u,
    onClickJoinCall: d
  } = e, E = (0, l.ZP)(t), _ = E.nick, I = u(E), T = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return o ? (0, s.jsx)(i.Z, {
    icon: n(154239),
    timestamp: t.timestamp,
    compact: r,
    children: null != T ? a.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
      username: _,
      usernameHook: I,
      callDuration: T
    }) : a.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
      username: _,
      usernameHook: I
    })
  }) : (0, s.jsxs)(i.Z, {
    icon: n(344163),
    timestamp: t.timestamp,
    compact: r,
    children: [null != T ? a.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
      username: _,
      usernameHook: I,
      callDuration: T
    }) : a.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
      username: _,
      usernameHook: I
    }), c ? (0, s.jsx)(i.Z.Action, {
      onClick: d,
      children: a.Z.Messages.SYSTEM_MESSAGE_JOIN_CALL
    }) : null]
  })
}