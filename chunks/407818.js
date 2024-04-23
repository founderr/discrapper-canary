"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var l = n("739566"),
  a = n("372662"),
  i = n("702346"),
  r = n("689938"),
  o = n("611818");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, l.default)(t), c = u(d), f = r.default.Messages.SYSTEM_MESSAGE_STAGE_SPEAKER_HOOK.format({
    username: d.nick,
    usernameHook: c
  });
  return (0, s.jsx)(i.default, {
    className: o.stageSystemMessage,
    iconNode: (0, s.jsx)(a.default, {
      height: 24,
      width: 24
    }),
    iconContainerClassName: o.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}