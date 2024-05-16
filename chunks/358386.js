"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  i = n("430824"),
  o = n("594174"),
  r = n("689938");

function s(e, t) {
  let s = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    c = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t));
  return null == c || null == s || e.id === c.ownerId || e.bot || !c.isOwnerWithRequiredMfaLevel(s) ? null : (0, u.jsx)(a.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: r.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("47704")]).then(n.bind(n, "928090"));
      return n => (0, u.jsx)(t, {
        ...n,
        guild: c,
        fromUser: s,
        toUser: e
      })
    })
  })
}