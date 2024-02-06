"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  i = n("77078"),
  l = n("305961"),
  o = n("697218"),
  a = n("782340");

function s(t, e) {
  let s = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    d = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e));
  return null == d || null == s || t.id === d.ownerId || t.bot || !d.isOwnerWithRequiredMfaLevel(s) ? null : (0, u.jsx)(i.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: a.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("878551").then(n.bind(n, "878551"));
      return n => (0, u.jsx)(e, {
        ...n,
        guild: d,
        fromUser: s,
        toUser: t
      })
    })
  })
}