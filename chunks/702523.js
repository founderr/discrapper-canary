n.d(t, {
    L: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(51025),
    o = n(850840),
    s = n(391690);
function l(e, t, l, u, c) {
    let d = s.Z.getInstallationPath(e.id, t),
        _ = null != e.eulaId && !o.Z.hasAcceptedEULA(e.eulaId);
    null == d || _
        ? (0, i.openModalLazy)(async () => {
              let { default: i } = await n.e('226').then(n.bind(n, 472064));
              return (n) =>
                  (0, r.jsx)(i, {
                      ...n,
                      applicationId: e.id,
                      branchId: t,
                      analyticsLocation: c
                  });
          })
        : (0, a.LO)({
              application: e,
              branchId: t,
              buildId: l,
              manifestIds: u,
              installationPath: d,
              analyticsLocation: c
          });
}
