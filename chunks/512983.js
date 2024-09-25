n.d(t, {
    R: function () {
        return r;
    },
    v: function () {
        return u;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(326460);
function u(e) {
    let t,
        { tag: n = 'h5', children: r, className: a, faded: u, disabled: c, required: d = !1, error: _, errorId: E, ...f } = e;
    switch (n) {
        case 'legend':
        case 'label':
            t = n;
            break;
        default:
            t = s.H;
    }
    return (0, i.jsxs)(t, {
        className: o()(l[n], 'h5' !== n ? l.defaultColor : null, a, {
            [l['defaultMargin'.concat(n)]]: null == a,
            [l.faded]: u,
            [l.disabled]: c,
            [l.error]: null != _
        }),
        ...f,
        children: [
            r,
            d && null == _
                ? (0, i.jsx)('span', {
                      className: l.required,
                      children: '*'
                  })
                : null,
            null != _
                ? (0, i.jsxs)('span', {
                      id: E,
                      className: l.errorMessage,
                      children: [
                          null != r
                              ? (0, i.jsx)('span', {
                                    className: l.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          _
                      ]
                  })
                : null
        ]
    });
}
!(function (e) {
    (e.H1 = 'h1'), (e.H2 = 'h2'), (e.H3 = 'h3'), (e.H4 = 'h4'), (e.H5 = 'h5'), (e.LABEL = 'label'), (e.LEGEND = 'legend');
})(r || (r = {}));
