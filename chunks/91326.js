"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("471445"),
  i = a("862099"),
  r = a("938475"),
  o = a("689938"),
  u = a("382224");
t.default = function(e) {
  let {
    name: t,
    channel: a
  } = e, d = (0, s.useStateFromStoresArray)([r.default], () => r.default.getVoiceStatesForChannel(a).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [a]), c = (0, l.getChannelIconComponent)(a);
  return (0, n.jsx)(i.GuildNoticeBody, {
    heading: o.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t,
    location: o.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
    locationIcon: null != c ? (0, n.jsx)(c, {
      width: 16,
      height: 16,
      className: u.icon
    }) : null,
    children: (0, n.jsx)(i.LiveVoiceOrStageChannelNotice, {
      channel: a,
      speakers: d,
      voiceType: i.VoiceChannelType.STUDY_ROOM
    })
  })
}