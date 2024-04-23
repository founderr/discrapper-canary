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
  let {
    message: t,
    compact: r,
    missed: o,
    joinable: u,
    usernameHook: d,
    onClickJoinCall: c
  } = e, f = (0, l.default)(t), E = f.nick, _ = d(f), m = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return o ? (0, s.jsx)(a.default, {
    icon: n("154239"),
    timestamp: t.timestamp,
    compact: r,
    children: null != m ? i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
      username: E,
      usernameHook: _,
      callDuration: m
    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
      username: E,
      usernameHook: _
    })
  }) : (0, s.jsxs)(a.default, {
    icon: n("344163"),
    timestamp: t.timestamp,
    compact: r,
    children: [null != m ? i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
      username: E,
      usernameHook: _,
      callDuration: m
    }) : i.default.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
      username: E,
      usernameHook: _
    }), u ? (0, s.jsx)(a.default.Action, {
      onClick: c,
      children: i.default.Messages.SYSTEM_MESSAGE_JOIN_CALL
    }) : null]
  })
}