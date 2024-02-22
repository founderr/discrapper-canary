"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("37983");
n("884691");
var l = n("446674"),
  r = n("77078"),
  i = n("305961"),
  o = n("697218"),
  a = n("782340");

function s(e, t) {
  let s = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    d = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t));
  return null == d || null == s || e.id === d.ownerId || e.bot || !d.isOwnerWithRequiredMfaLevel(s) ? null : (0, u.jsx)(r.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: a.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("878551").then(n.bind(n, "878551"));
      return n => (0, u.jsx)(t, {
        ...n,
        guild: d,
        fromUser: s,
        toUser: e
      })
    })
  })
}