r.d(n, {
    M: function () {
        return o;
    }
});
var i = r(200651),
    a = r(481060),
    s = r(388032);
function o(e) {
    let { applicationId: n, viewId: o, showOutdatedInfoOption: l = !0 } = e;
    if (null == n) return null;
    let u = () =>
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('46923').then(r.bind(r, 55396));
            return (r) =>
                (0, i.jsx)(e, {
                    showOutdatedInfoOption: l,
                    applicationId: n,
                    viewId: o,
                    ...r
                });
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'game-profile-something-wrong',
        label: s.intl.string(s.t.qP2cXV),
        action: u
    });
}
