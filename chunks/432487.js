"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  i = n("450911"),
  l = n("42203"),
  s = n("697218"),
  d = n("782340");

function o(e, t) {
  let n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
    o = (0, r.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
  return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, u.jsx)(a.MenuItem, {
    id: "remove",
    label: d.default.Messages.REMOVE_FROM_GROUP,
    action: () => i.default.removeRecipient(t, e),
    color: "danger"
  })
}