r.d(n, {
    N: function () {
        return a;
    },
    U: function () {
        return s;
    }
});
var i = r(661763);
function a(e) {
    let { id: n, label: r, 'aria-labelledby': a, 'aria-label': s, labelElementType: o = 'label' } = e;
    n = (0, i.Me)(n);
    let l = (0, i.Me)(),
        u = {};
    return (
        r
            ? ((a = a ? `${l} ${a}` : l),
              (u = {
                  id: l,
                  htmlFor: 'label' === o ? n : void 0
              }))
            : !a && !s && console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'),
        {
            labelProps: u,
            fieldProps: (0, i.bE)({
                id: n,
                'aria-label': s,
                'aria-labelledby': a
            })
        }
    );
}
function s(e) {
    let { description: n, errorMessage: r, isInvalid: s, validationState: o } = e,
        { labelProps: l, fieldProps: u } = a(e),
        c = (0, i.mp)([!!n, !!r, s, o]),
        d = (0, i.mp)([!!n, !!r, s, o]);
    return {
        labelProps: l,
        fieldProps: (u = (0, i.dG)(u, {
            'aria-describedby': [c, d, e['aria-describedby']].filter(Boolean).join(' ') || void 0
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d }
    };
}
