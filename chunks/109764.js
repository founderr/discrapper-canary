"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var i = n("852229"),
  s = n("399606"),
  l = n("481060"),
  u = n("228392"),
  r = n("592125"),
  o = n("934415"),
  d = n("981631"),
  c = n("689938");

function _(e, t, n) {
  let _ = (0, s.useStateFromStores)([r.default], () => r.default.getChannel(e.parent_id));
  return (0, a.jsx)(l.MenuItem, {
    id: "channel-copy-link",
    label: c.default.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, u.trackForumPostLinkCopied)({
        postId: e.id,
        location: {
          section: d.AnalyticsSections.CONTEXT_MENU
        }
      }), (0, i.copy)((0, o.getChannelLinkToCopy)(e, _, t, n))
    }
  })
}