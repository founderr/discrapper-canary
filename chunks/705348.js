"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("82950"),
  i = n("63063"),
  l = n("981631"),
  r = n("921944"),
  o = n("689938"),
  u = n("157476");

function d(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsx)(s.default, {
    image: u,
    guild: t,
    onDismissed: () => n(r.ContentDismissActionType.UNKNOWN),
    onClick: () => {
      open(i.default.getArticleURL(l.HelpdeskArticles.CONNECTION_DETAILS)), n(r.ContentDismissActionType.UNKNOWN)
    },
    title: o.default.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
    message: o.default.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
    cta: o.default.Messages.LEARN_MORE,
    trackingSource: l.ChannelNoticeCtaSources.LINKED_ROLES_ADMIN_NUX,
    type: l.ChannelNoticeTypes.LINKED_ROLES_ADMIN
  })
}