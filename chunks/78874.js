i.d(t, {
    Z: function () {
        return f;
    }
});
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(594190),
    d = i(757266),
    u = i(283595),
    c = i(417363),
    o = i(804739),
    s = i(346329),
    I = i(592745),
    b = i(388032);
function f(n, t) {
    let i = (0, l.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        f = (0, l.e7)(
            [u.Z, I.Z, c.Z, d.Z],
            () =>
                (0, o.t)({
                    LibraryApplicationStore: u.Z,
                    LaunchableGameStore: I.Z,
                    DispatchApplicationStore: c.Z,
                    ConnectedAppsStore: d.Z,
                    applicationId: n.id,
                    branchId: n.branchId
                }),
            [n.branchId, n.id]
        );
    return i || !f
        ? null
        : (0, e.jsx)(a.MenuItem, {
              id: 'launch',
              label: b.intl.string(b.t.XKUw8v),
              action: () => s.playApplication(n.id, n, { analyticsParams: { location: t } })
          });
}
