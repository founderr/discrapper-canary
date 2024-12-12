r.d(n, {
    D: function () {
        return l;
    }
});
var i = r(661763),
    a = r(239700),
    s = r(523603),
    o = r(649859);
function l(e) {
    let { value: n = 0, minValue: r = 0, maxValue: l = 100, valueLabel: u, isIndeterminate: c, formatOptions: d = { style: 'percent' } } = e,
        f = (0, i.zL)(e, { labelable: !0 }),
        { labelProps: _, fieldProps: h } = (0, s.N)({
            ...e,
            labelElementType: 'span'
        }),
        p = ((n = (0, a.uZ)(n, r, l)) - r) / (l - r),
        m = (0, o.Ux)(d);
    if (!c && !u) {
        let e = 'percent' === d.style ? p : n;
        u = m.format(e);
    }
    return {
        progressBarProps: (0, i.dG)(f, {
            ...h,
            'aria-valuenow': c ? void 0 : n,
            'aria-valuemin': r,
            'aria-valuemax': l,
            'aria-valuetext': c ? void 0 : u,
            role: 'progressbar'
        }),
        labelProps: _
    };
}
