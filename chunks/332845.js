i.d(t, {
    Z: function () {
        return o;
    }
});
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(417363),
    d = i(877481),
    u = i(358085),
    c = i(388032);
function o(n, t) {
    let i = n.getBranchedName(t),
        o = (0, l.e7)(
            [r.Z],
            () => {
                let t = r.Z.getState(n.id, n.branchId);
                return null == t ? void 0 : t.installPath;
            },
            [n.branchId, n.id]
        );
    return null != o && (0, u.isDesktop)()
        ? (0, e.jsx)(a.MenuItem, {
              id: 'create-shortcut',
              label: c.intl.string(c.t.T4tecH),
              action: () => d.Z.createShortcuts(!0, !1, i, n.id, o)
          })
        : null;
}
