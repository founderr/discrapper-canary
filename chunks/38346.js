i.d(t, {
    Z: function () {
        return b;
    }
});
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(943094),
    d = i(594190),
    u = i(173747),
    c = i(417363),
    o = i(346329),
    s = i(981631),
    I = i(388032);
function b(n) {
    let t = (0, l.e7)([d.ZP], () => d.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        i = (0, l.e7)([c.Z], () => c.Z.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        b = (0, l.e7)([u.Z], () => u.Z.getTargetManifests(n.id, n.branchId), [n.branchId, n.id]);
    if (i)
        return t
            ? null
            : (0, e.jsx)(a.MenuItem, {
                  id: 'uninstall',
                  label: I.intl.string(I.t.DwgfOD),
                  action: () => (0, r.W)(n.id, n.branchId, s.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
              });
    return null == b
        ? null
        : (0, e.jsx)(a.MenuItem, {
              id: 'install',
              label: I.intl.string(I.t['N+XVnp']),
              action: () => o.installApplication(n.id, n.branchId, s.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
          });
}
