"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var l = t("37983");
t("884691");
var i = t("281071"),
  u = t("65597"),
  o = t("77078"),
  c = t("867965"),
  s = t("42203"),
  a = t("404008"),
  r = t("49111"),
  d = t("782340");

function f(e, n, t) {
  let f = (0, u.default)([s.default], () => s.default.getChannel(e.parent_id));
  return (0, l.jsx)(o.MenuItem, {
    id: "channel-copy-link",
    label: d.default.Messages.COPY_LINK,
    action: () => {
      e.isForumPost() && (0, c.trackForumPostLinkCopied)({
        postId: e.id,
        location: {
          section: r.AnalyticsSections.CONTEXT_MENU
        }
      }), (0, i.copy)((0, a.getChannelLinkToCopy)(e, f, n, t))
    }
  })
}