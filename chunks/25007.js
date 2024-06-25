var l = n(735250),
  i = n(470079),
  s = n(481369),
  a = n(944103),
  r = n(946050),
  o = n(256413),
  c = n(292853),
  u = n(359565),
  d = n(226027);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, o.Z)(t), h = (0, s.Z)(), {
    canRenderNotice: m,
    recordNoticeRender: E
  } = (0, a.Z)(t);
  return t.isArchivedLockedThread() ? (0, l.jsx)(u.s, {
    channel: t,
    narrow: n
  }) : t.isLockedThread() ? (0, l.jsx)(u.q, {
    channel: t,
    narrow: n
  }) : i && h.includes(d.E.OPT_IN_CHANNEL) ? (0, l.jsx)(c.Z, {
    channel: t,
    narrow: n
  }) : m ? (0, l.jsx)(r.Z, {
    channel: t,
    onChannelChange: E
  }) : null
})