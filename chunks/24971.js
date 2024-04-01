"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var l = n("692547"),
  a = n("739566"),
  i = n("170039"),
  r = n("702346"),
  o = n("689938"),
  u = n("611818");

function d(e) {
  let {
    message: t,
    compact: n,
    usernameHook: d
  } = e, c = (0, a.default)(t), E = d(c), f = o.default.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
    username: c.nick,
    usernameHook: E,
    topic: t.content
  });
  return (0, s.jsx)(r.default, {
    className: u.stageSystemMessage,
    iconNode: (0, s.jsx)(i.default, {
      height: 24,
      width: 24,
      color: l.default.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: u.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}