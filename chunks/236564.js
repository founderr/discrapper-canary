n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(475179),
  s = n(112560),
  a = n(689938);
let r = n(576394);

function o(e) {
  let {
    width: t,
    className: n,
    channelId: o,
    noArt: c = !1
  } = e;
  return (0, l.jsx)(s.Z, {
    artURL: r,
    noArt: c,
    size: (0, s.L)(t),
    className: n,
    callToAction: a.Z.Messages.STREAM_SHOW_ALL_PARTICIPANTS,
    header: a.Z.Messages.STREAM_PARTICIPANTS_HIDDEN.format(),
    onCTAClick: () => i.Z.toggleVoiceParticipantsHidden(o, !1)
  })
}