n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(592125),
  r = n(702346),
  o = n(739566),
  c = n(689938),
  u = n(535869);

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: E,
    onClickThread: _,
    onClickViewThreads: I,
    onContextMenuThread: T
  } = e, N = (0, o.ZP)(n), m = E(N), h = (0, i.e7)([a.Z], () => {
    var e;
    return a.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), C = c.Z.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
    actorName: N.nick,
    actorHook: m,
    threadName: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: _,
      onContextMenu: T
    },
    viewThreadsOnClick: I
  });
  return (0, s.jsx)(r.Z, {
    iconNode: (0, s.jsx)(l.ThreadIcon, {
      size: "md",
      color: "currentColor",
      className: u.icon
    }),
    timestamp: n.timestamp,
    compact: d,
    children: C
  })
}