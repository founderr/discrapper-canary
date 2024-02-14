"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var i = n("281071"),
  l = n("65597"),
  u = n("77078"),
  r = n("867965"),
  s = n("42203"),
  o = n("404008"),
  d = n("49111"),
  c = n("782340");

function f(e, t, n) {
  let f = (0, l.default)([s.default], () => s.default.getChannel(e.parent_id));
  return (0, a.jsx)(u.MenuItem, {
    id: "channel-copy-link",
    label: c.default.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, r.trackForumPostLinkCopied)({
        postId: e.id,
        location: {
          section: d.AnalyticsSections.CONTEXT_MENU
        }
      }), (0, i.copy)((0, o.getChannelLinkToCopy)(e, f, t, n))
    }
  })
}