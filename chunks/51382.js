var i = n(735250);
n(470079);
var s = n(82950),
  l = n(536442),
  a = n(703656),
  r = n(922482),
  o = n(981631),
  c = n(689938),
  u = n(882977);
t.Z = e => {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, i.jsx)(s.Z, {
    guild: n,
    onDismissed: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, r.Cq)(t), (0, a.XU)(t.getGuildId(), t.id))
    },
    title: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
    message: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_DESCRIPTION,
    cta: c.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
    image: u,
    type: o.vID.HUB_STUDY_ROOM
  })
}