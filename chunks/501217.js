n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(739566),
  r = n(592125),
  o = n(702346),
  c = n(689938),
  u = n(54441);

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: E,
    onClickThread: _,
    onClickViewThreads: I,
    onContextMenuThread: T
  } = e, N = (0, a.ZP)(n), m = E(N), h = (0, i.e7)([r.Z], () => {
    var e;
    return r.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
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
  return (0, s.jsx)(o.Z, {
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