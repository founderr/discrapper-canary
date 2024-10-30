n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(283595),
    l = n(55563),
    o = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    let { application: t, fullWidth: n = !1, size: d = s.Button.Sizes.LARGE, color: _, customDisabledColor: E, hideNotLaunchable: I, tooltipPosition: m, onClick: f, className: h, source: T, hover: N, innerClassName: p } = e,
        C = {
            fullWidth: n,
            size: d,
            color: _,
            customDisabledColor: E,
            tooltipPosition: m,
            onClick: f,
            className: h,
            hover: N,
            innerClassName: p
        },
        g = (0, a.e7)([r.Z], () => r.Z.getActiveLibraryApplication(t.id)),
        S = null != g ? g.sku.id : null,
        A = null != S ? S : t.primarySkuId,
        x = (0, a.e7)([l.Z], () => null != A && !l.Z.didFetchingSkuFail(A));
    return null != g && (0, o.Je)(g)
        ? (0, i.jsx)(u.Z, {
              ...C,
              libraryApplication: g,
              source: T
          })
        : x
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...C,
                hideNotLaunchable: I,
                applicationId: t.id
            });
}
