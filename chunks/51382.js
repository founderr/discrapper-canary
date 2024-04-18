"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("82950"),
  l = a("536442"),
  i = a("703656"),
  r = a("922482"),
  o = a("981631"),
  u = a("689938"),
  d = a("882977");
t.default = e => {
  let {
    channel: t,
    guild: a
  } = e;
  return (0, n.jsx)(s.default, {
    guild: a,
    onDismissed: () => {
      (0, l.hideHotspot)(l.HotspotLocations.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.hideHotspot)(l.HotspotLocations.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, r.connectAndOpen)(t), (0, i.transitionToGuild)(t.getGuildId(), t.id))
    },
    title: u.default.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
    message: u.default.Messages.HUB_STUDY_ROOM_NOTICE_DESCRIPTION,
    cta: u.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
    image: d,
    type: o.ChannelNoticeTypes.HUB_STUDY_ROOM
  })
}