var s = n(735250);
n(470079);
var i = n(442837),
  l = n(471445),
  a = n(862099),
  r = n(938475),
  o = n(689938),
  c = n(593712);
t.Z = function(e) {
  let {
    name: t,
    channel: n
  } = e, u = (0, i.Wu)([r.ZP], () => r.ZP.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), d = (0, l.KS)(n);
  return (0, s.jsx)(a.gt, {
    heading: o.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t,
    location: o.Z.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
    locationIcon: null != d ? (0, s.jsx)(d, {
      size: "xs",
      color: "currentColor",
      className: c.icon
    }) : null,
    children: (0, s.jsx)(a.Co, {
      channel: n,
      speakers: u,
      voiceType: a.bZ.STUDY_ROOM
    })
  })
}