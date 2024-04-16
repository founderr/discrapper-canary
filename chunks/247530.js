"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("287734"),
  i = a("872810"),
  r = a("51144"),
  o = a("689938");

function u(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: a
    } = e;
    return (0, n.jsx)(s.MenuItem, {
      id: "spectate-".concat(t.ownerId),
      action: () => {
        l.default.selectVoiceChannel(t.channelId), (0, i.watchStreamAndTransitionToStream)(t)
      },
      label: o.default.Messages.WATCH_USER_STREAM.format({
        streamerName: r.default.getName(a)
      })
    }, "spectate-".concat(t.ownerId))
  })
}