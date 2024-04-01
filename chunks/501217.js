"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("739566"),
  i = n("592125"),
  r = n("934458"),
  o = n("702346"),
  u = n("689938"),
  d = n("521125");

function c(e) {
  var t;
  let {
    message: n,
    compact: c,
    usernameHook: E,
    onClickThread: f,
    onClickViewThreads: _,
    onContextMenuThread: T
  } = e, I = (0, a.default)(n), m = E(I), N = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return i.default.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), p = u.default.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
    actorName: I.nick,
    actorHook: m,
    threadName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: f,
      onContextMenu: T
    },
    viewThreadsOnClick: _
  });
  return (0, s.jsx)(o.default, {
    iconNode: (0, s.jsx)(r.default, {
      className: d.icon
    }),
    timestamp: n.timestamp,
    compact: c,
    children: p
  })
}