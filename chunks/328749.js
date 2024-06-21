n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(702346),
  a = n(689938),
  r = n(85128);

function o(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.Z, {
    iconNode: (0, s.jsx)(i.ThreadIcon, {
      size: "md",
      color: "currentColor",
      className: r.icon
    }),
    timestamp: t.timestamp,
    compact: n,
    children: a.Z.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
  })
}