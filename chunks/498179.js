n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(283595),
    r = n(55563),
    o = n(780570),
    c = n(701560),
    d = n(785547);
function u(e) {
    let { application: t, fullWidth: n = !1, size: u = s.Button.Sizes.LARGE, color: _, customDisabledColor: E, hideNotLaunchable: I, tooltipPosition: m, onClick: T, className: N, source: h, hover: C, innerClassName: p } = e,
        f = {
            fullWidth: n,
            size: u,
            color: _,
            customDisabledColor: E,
            tooltipPosition: m,
            onClick: T,
            className: N,
            hover: C,
            innerClassName: p
        },
        g = (0, a.e7)([l.Z], () => l.Z.getActiveLibraryApplication(t.id)),
        A = null != g ? g.sku.id : null,
        S = null != A ? A : t.primarySkuId,
        M = (0, a.e7)([r.Z], () => null != S && !r.Z.didFetchingSkuFail(S));
    return null != g && (0, o.Je)(g)
        ? (0, i.jsx)(d.Z, {
              ...f,
              libraryApplication: g,
              source: h
          })
        : M
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...f,
                hideNotLaunchable: I,
                applicationId: t.id
            });
}
