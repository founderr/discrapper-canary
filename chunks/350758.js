i.d(t, {
    Z: function () {
        return s;
    }
}),
    i(47120);
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(594190),
    d = i(417363),
    u = i(346329),
    c = i(981631),
    o = i(388032);
function s(n) {
    let t = (0, l.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        [i, s] = (0, l.Wu)([d.Z], () => [d.Z.isUpToDate(n.id, n.branchId), d.Z.shouldPatch(n.id, n.branchId)], [n.branchId, n.id]);
    return i && !t && s
        ? (0, e.jsx)(a.MenuItem, {
              id: 'repair',
              label: o.intl.string(o.t.CKCcd3),
              action: () => u.repairApplication(n.id, n.branchId, c.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
          })
        : null;
}
