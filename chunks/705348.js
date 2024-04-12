"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("82950"),
  l = a("63063"),
  i = a("981631"),
  r = a("921944"),
  o = a("689938"),
  u = a("157476");

function d(e) {
  let {
    guild: t,
    markAsDismissed: a
  } = e;
  return (0, n.jsx)(s.default, {
    image: u,
    guild: t,
    onDismissed: () => a(r.ContentDismissActionType.UNKNOWN),
    onClick: () => {
      open(l.default.getArticleURL(i.HelpdeskArticles.CONNECTION_DETAILS)), a(r.ContentDismissActionType.UNKNOWN)
    },
    title: o.default.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
    message: o.default.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
    cta: o.default.Messages.LEARN_MORE,
    trackingSource: i.ChannelNoticeCtaSources.LINKED_ROLES_ADMIN_NUX,
    type: i.ChannelNoticeTypes.LINKED_ROLES_ADMIN
  })
}