n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    r = n(283595),
    l = n(55563),
    o = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    let { application: t, fullWidth: n = !1, size: d = a.Button.Sizes.LARGE, color: _, customDisabledColor: E, hideNotLaunchable: I, tooltipPosition: m, onClick: T, className: h, source: N, hover: f, innerClassName: C } = e,
        p = {
            fullWidth: n,
            size: d,
            color: _,
            customDisabledColor: E,
            tooltipPosition: m,
            onClick: T,
            className: h,
            hover: f,
            innerClassName: C
        },
        g = (0, s.e7)([r.Z], () => r.Z.getActiveLibraryApplication(t.id)),
        A = null != g ? g.sku.id : null,
        S = null != A ? A : t.primarySkuId,
        x = (0, s.e7)([l.Z], () => null != S && !l.Z.didFetchingSkuFail(S));
    return null != g && (0, o.Je)(g)
        ? (0, i.jsx)(u.Z, {
              ...p,
              libraryApplication: g,
              source: N
          })
        : x
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...p,
                hideNotLaunchable: I,
                applicationId: t.id
            });
}
