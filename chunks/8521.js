var i = n(735250),
  s = n(470079),
  l = n(949389),
  a = n(63063),
  r = n(82950),
  o = n(981631),
  c = n(689938),
  u = n(511189);
t.Z = e => {
  let {
    guild: t
  } = e, n = s.useCallback(() => {
    (0, l.xm)(t.id)
  }, [t.id]);
  return (0, i.jsx)(r.Z, {
    guild: t,
    onDismissed: n,
    message: c.Z.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
      maxMemberCount: t.maxMembers,
      maxMembersUrl: a.Z.getArticleURL(o.BhN.MAX_MEMBERS)
    }),
    type: o.vID.MAX_MEMBER_COUNT,
    image: u,
    imageMarginX: 61
  })
}