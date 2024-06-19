t.d(e, {
  Z: function() {
    return c
  }
});
var u = t(735250);
t(470079);
var l = t(442837),
  i = t(481060),
  r = t(430824),
  a = t(594174),
  o = t(689938);

function c(n, e) {
  let c = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
    s = (0, l.e7)([r.Z], () => r.Z.getGuild(e));
  return null == s || null == c || n.id === s.ownerId || n.bot || !s.isOwnerWithRequiredMfaLevel(c) ? null : (0, u.jsx)(i.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: o.Z.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("47704")]).then(t.bind(t, 928090));
      return t => (0, u.jsx)(e, {
        ...t,
        guild: s,
        fromUser: c,
        toUser: n
      })
    })
  })
}