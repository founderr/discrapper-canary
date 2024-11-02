t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(392711),
    a = t.n(l),
    r = t(442837),
    o = t(481060),
    u = t(344185),
    d = t(665906),
    c = t(388032);
function s(e) {
    let n = (0, d.Xb)(e),
        l = (0, r.e7)([u.Z], () => !a().isEmpty(u.Z.getThreadsForGuild(e.id)));
    return n && l
        ? (0, i.jsx)(o.MenuItem, {
              id: 'active-threads',
              label: c.intl.string(c.t.TM6erq),
              icon: o.ChatIcon,
              action: () => {
                  (0, o.openModalLazy)(async () => {
                      let { default: n } = await t.e('22482').then(t.bind(t, 157743));
                      return (t) =>
                          (0, i.jsx)(n, {
                              guildId: e.id,
                              ...t
                          });
                  });
              }
          })
        : null;
}
