n.d(e, {
    L: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(51025),
    o = n(850840),
    a = n(391690);
function s(t, e, s, c, d) {
    let u = a.Z.getInstallationPath(t.id, e),
        p = null != t.eulaId && !o.Z.hasAcceptedEULA(t.eulaId);
    null == u || p
        ? (0, l.openModalLazy)(async () => {
              let { default: l } = await n.e('226').then(n.bind(n, 472064));
              return (n) =>
                  (0, i.jsx)(l, {
                      ...n,
                      applicationId: t.id,
                      branchId: e,
                      analyticsLocation: d
                  });
          })
        : (0, r.LO)({
              application: t,
              branchId: e,
              buildId: s,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d
          });
}
