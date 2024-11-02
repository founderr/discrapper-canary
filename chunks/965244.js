e.d(t, {
    Z: function () {
        return s;
    }
});
var i = e(200651);
e(192379);
var u = e(442837),
    r = e(481060),
    l = e(666657),
    o = e(533244),
    a = e(487419),
    c = e(430824),
    d = e(981631),
    f = e(388032);
function s(n, t) {
    let s = t === d.IlC.POPOUT,
        _ = (0, u.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        I = (0, u.e7)([a.Z], () => (null != _ ? a.Z.getGuildIncident(_.id) : null));
    return s
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'nav-security-actions',
              label: f.intl.string(f.t.UgXhdn),
              action: () => {
                  let t = {
                      source: l.Zu.MESSAGE,
                      alertType: (0, o.T1)(I)
                  };
                  (0, r.openModalLazy)(async () => {
                      let { default: u } = await e.e('61536').then(e.bind(e, 664452));
                      return (e) =>
                          (0, i.jsx)(u, {
                              ...e,
                              guildId: n,
                              analyticsData: t
                          });
                  });
              }
          });
}
