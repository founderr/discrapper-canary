n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(283595),
    o = n(55563),
    s = n(780570),
    c = n(701560),
    u = n(785547);
function d(e) {
    let { application: t, fullWidth: n = !1, size: d = l.Button.Sizes.LARGE, color: m, customDisabledColor: f, hideNotLaunchable: h, tooltipPosition: p, onClick: g, className: _, source: C, hover: E, innerClassName: I } = e,
        x = {
            fullWidth: n,
            size: d,
            color: m,
            customDisabledColor: f,
            tooltipPosition: p,
            onClick: g,
            className: _,
            hover: E,
            innerClassName: I
        },
        v = (0, r.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)),
        N = null != v ? v.sku.id : null,
        T = null != N ? N : t.primarySkuId,
        S = (0, r.e7)([o.Z], () => null != T && !o.Z.didFetchingSkuFail(T));
    return null != v && (0, s.Je)(v)
        ? (0, i.jsx)(u.Z, {
              ...x,
              libraryApplication: v,
              source: C
          })
        : S
          ? (0, i.jsx)('div', { children: 'deprecated!' })
          : (0, i.jsx)(c.Z, {
                ...x,
                hideNotLaunchable: h,
                applicationId: t.id
            });
}
