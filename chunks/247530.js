n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(287734),
  a = n(872810),
  r = n(51144),
  o = n(689938);

function c(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: n
    } = e;
    return (0, i.jsx)(s.MenuItem, {
      id: "spectate-".concat(t.ownerId),
      action: () => {
        l.default.selectVoiceChannel(t.channelId), (0, a.iV)(t)
      },
      label: o.Z.Messages.WATCH_USER_STREAM.format({
        streamerName: r.ZP.getName(n)
      })
    }, "spectate-".concat(t.ownerId))
  })
}