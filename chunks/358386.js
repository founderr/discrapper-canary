e.d(t, {
    Z: function () {
        return c;
    }
});
var r = e(200651);
e(192379);
var i = e(442837),
    u = e(481060),
    a = e(430824),
    l = e(594174),
    o = e(388032);
function c(n, t) {
    let c = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        d = (0, i.e7)([a.Z], () => a.Z.getGuild(t));
    return null == d || null == c || n.id === d.ownerId || n.bot || !d.isOwnerWithRequiredMfaLevel(c)
        ? null
        : (0, r.jsx)(u.MenuItem, {
              id: 'transfer-ownership',
              color: 'danger',
              label: o.intl.string(o.t.Z5s7PD),
              action: () =>
                  (0, u.openModalLazy)(async () => {
                      let { default: t } = await e.e('8653').then(e.bind(e, 928090));
                      return (e) =>
                          (0, r.jsx)(t, {
                              ...e,
                              guild: d,
                              fromUser: c,
                              toUser: n
                          });
                  })
          });
}
