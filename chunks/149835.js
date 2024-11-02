i.d(t, {
    Z: function () {
        return b;
    }
});
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(58642),
    d = i(283595),
    u = i(417363),
    c = i(626135),
    o = i(630388),
    s = i(981631),
    I = i(388032);
function b(n, t) {
    let i = (0, l.e7)([u.Z], () => u.Z.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        b = (0, l.e7)([d.Z], () => !d.Z.hasRemovedLibraryApplicationThisSession);
    if (i && !n.isHidden()) return null;
    function f() {
        let t = (0, o.x9)(n.getFlags(), s.eHb.HIDDEN);
        r.h(n.id, n.branchId, t),
            c.default.track(s.rMx.APPLICATION_SETTINGS_UPDATED, {
                hidden_enabled: (0, o.yE)(t, s.eHb.HIDDEN),
                ...n.getAnalyticsData()
            });
    }
    return (0, e.jsx)(a.MenuItem, {
        id: 'in-library',
        label: n.isHidden() ? I.intl.string(I.t['0dnEUF']) : I.intl.string(I.t.TuJXLy),
        action: function () {
            null != n &&
                null != t &&
                (n.isHidden() || !b
                    ? f()
                    : (0, a.openModal)((n) =>
                          (0, e.jsx)(a.ConfirmModal, {
                              header: I.intl.string(I.t.oB7isr),
                              confirmText: I.intl.string(I.t.OWjIiY),
                              cancelText: I.intl.string(I.t['ETE/oK']),
                              onConfirm: () => f(),
                              confirmButtonColor: a.Button.Colors.BRAND,
                              ...n,
                              children: (0, e.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  children: I.intl.format(I.t.HXfjKi, { name: t.name })
                              })
                          })
                      ));
        }
    });
}
