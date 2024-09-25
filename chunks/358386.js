t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var u = t(442837),
    a = t(481060),
    r = t(430824),
    i = t(594174),
    o = t(689938);
function c(e, n) {
    let c = (0, u.e7)([i.default], () => i.default.getCurrentUser()),
        s = (0, u.e7)([r.Z], () => r.Z.getGuild(n));
    return null == s || null == c || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(c)
        ? null
        : (0, l.jsx)(a.MenuItem, {
              id: 'transfer-ownership',
              color: 'danger',
              label: o.Z.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: n } = await t.e('8653').then(t.bind(t, 928090));
                      return (t) =>
                          (0, l.jsx)(n, {
                              ...t,
                              guild: s,
                              fromUser: c,
                              toUser: e
                          });
                  })
          });
}
