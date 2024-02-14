"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("255397"),
  s = n("607391"),
  i = n("782340");
let r = n("328989");

function o(e) {
  let {
    width: t,
    className: n,
    channelId: o,
    noArt: u = !1
  } = e;
  return (0, l.jsx)(s.default, {
    artURL: r,
    noArt: u,
    size: (0, s.getSizeForWidth)(t),
    className: n,
    callToAction: i.default.Messages.STREAM_SHOW_ALL_PARTICIPANTS,
    header: i.default.Messages.STREAM_PARTICIPANTS_HIDDEN.format(),
    onCTAClick: () => a.default.toggleVoiceParticipantsHidden(o, !1)
  })
}