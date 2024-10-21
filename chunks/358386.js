t.d(e, {
    Z: function () {
        return c;
    }
});
var r = t(200651);
t(192379);
var a = t(442837),
    u = t(481060),
    i = t(430824),
    l = t(594174),
    o = t(689938);
function c(n, e) {
    let c = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        d = (0, a.e7)([i.Z], () => i.Z.getGuild(e));
    return null == d || null == c || n.id === d.ownerId || n.bot || !d.isOwnerWithRequiredMfaLevel(c)
        ? null
        : (0, r.jsx)(u.MenuItem, {
              id: 'transfer-ownership',
              color: 'danger',
              label: o.Z.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await t.e('8653').then(t.bind(t, 928090));
                      return (t) =>
                          (0, r.jsx)(e, {
                              ...t,
                              guild: d,
                              fromUser: c,
                              toUser: n
                          });
                  })
          });
}
