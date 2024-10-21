n.d(e, {
    L: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    s = n(51025),
    a = n(850840),
    l = n(391690);
function r(t, e, r, c, d) {
    let u = l.Z.getInstallationPath(t.id, e),
        p = null != t.eulaId && !a.Z.hasAcceptedEULA(t.eulaId);
    null == u || p
        ? (0, o.openModalLazy)(async () => {
              let { default: o } = await n.e('226').then(n.bind(n, 472064));
              return (n) =>
                  (0, i.jsx)(o, {
                      ...n,
                      applicationId: t.id,
                      branchId: e,
                      analyticsLocation: d
                  });
          })
        : (0, s.LO)({
              application: t,
              branchId: e,
              buildId: r,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d
          });
}
