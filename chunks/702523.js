e.d(n, {
    L: function () {
        return s;
    }
});
var i = e(200651);
e(192379);
var l = e(481060),
    o = e(51025),
    r = e(850840),
    a = e(391690);
function s(t, n, s, c, d) {
    let u = a.Z.getInstallationPath(t.id, n),
        p = null != t.eulaId && !r.Z.hasAcceptedEULA(t.eulaId);
    null == u || p
        ? (0, l.openModalLazy)(async () => {
              let { default: l } = await e.e('226').then(e.bind(e, 472064));
              return (e) =>
                  (0, i.jsx)(l, {
                      ...e,
                      applicationId: t.id,
                      branchId: n,
                      analyticsLocation: d
                  });
          })
        : (0, o.LO)({
              application: t,
              branchId: n,
              buildId: s,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d
          });
}
