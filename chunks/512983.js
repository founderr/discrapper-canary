n.d(t, {
    R: function () {
        return r;
    },
    v: function () {
        return c;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(15127),
    u = n(326460);
function c(e) {
    let t,
        { tag: n = 'h5', children: r, className: a, faded: c, disabled: d, required: _ = !1, error: E, errorId: f, ...h } = e,
        { isFocused: p, hasValue: m } = (0, l.Gc)();
    switch (n) {
        case 'legend':
        case 'label':
            t = n;
            break;
        default:
            t = s.H;
    }
    return (0, i.jsxs)(t, {
        className: o()(u[n], 'h5' !== n ? u.defaultColor : null, a, {
            [u['defaultMargin'.concat(n)]]: null == a,
            [u.faded]: c,
            [u.disabled]: d,
            [u.error]: null != E,
            [u.floatingAbove]: p || m,
            [u.floatingOn]: !1 === p && !1 === m
        }),
        ...h,
        children: [
            r,
            _ && null == E
                ? (0, i.jsx)('span', {
                      className: u.required,
                      children: '*'
                  })
                : null,
            null != E
                ? (0, i.jsxs)('span', {
                      id: f,
                      className: u.errorMessage,
                      children: [
                          null != r
                              ? (0, i.jsx)('span', {
                                    className: u.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          E
                      ]
                  })
                : null
        ]
    });
}
!(function (e) {
    (e.H1 = 'h1'), (e.H2 = 'h2'), (e.H3 = 'h3'), (e.H4 = 'h4'), (e.H5 = 'h5'), (e.LABEL = 'label'), (e.LEGEND = 'legend');
})(r || (r = {}));
