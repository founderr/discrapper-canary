n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(283595),
    s = n(55563),
    l = n(780570),
    u = n(701560),
    c = n(785547);
function d(e) {
    let { application: t, fullWidth: n = !1, size: d = a.Button.Sizes.LARGE, color: _, customDisabledColor: E, hideNotLaunchable: f, tooltipPosition: h, onClick: p, className: m, source: I, hover: T, innerClassName: g } = e,
        S = {
            fullWidth: n,
            size: d,
            color: _,
            customDisabledColor: E,
            tooltipPosition: h,
            onClick: p,
            className: m,
            hover: T,
            innerClassName: g
        },
        A = (0, i.e7)([o.Z], () => o.Z.getActiveLibraryApplication(t.id)),
        v = null != A ? A.sku.id : null,
        N = null != v ? v : t.primarySkuId,
        O = (0, i.e7)([s.Z], () => null != N && !s.Z.didFetchingSkuFail(N));
    return null != A && (0, l.Je)(A)
        ? (0, r.jsx)(c.Z, {
              ...S,
              libraryApplication: A,
              source: I
          })
        : O
          ? (0, r.jsx)('div', { children: 'deprecated!' })
          : (0, r.jsx)(u.Z, {
                ...S,
                hideNotLaunchable: f,
                applicationId: t.id
            });
}
