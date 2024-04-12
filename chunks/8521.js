"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("949389"),
  i = a("63063"),
  r = a("82950"),
  o = a("981631"),
  u = a("689938"),
  d = a("511189");
t.default = e => {
  let {
    guild: t
  } = e, a = s.useCallback(() => {
    (0, l.hideMaxMemberCountChannelNotice)(t.id)
  }, [t.id]);
  return (0, n.jsx)(r.default, {
    guild: t,
    onDismissed: a,
    message: u.default.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
      maxMemberCount: t.maxMembers,
      maxMembersUrl: i.default.getArticleURL(o.HelpdeskArticles.MAX_MEMBERS)
    }),
    type: o.ChannelNoticeTypes.MAX_MEMBER_COUNT,
    image: d,
    imageMarginX: 61
  })
}