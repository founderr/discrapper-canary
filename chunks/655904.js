n.d(t, {
    E: function () {
        return d;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    u = n(351533);
!(function (e) {
    (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large');
})(r || (r = {}));
let c = 'indeterminate';
function d(e) {
    let t,
        { className: n, percent: r, size: o = 'small', foregroundColor: d = l.Z.unsafe_rawColors.BRAND_500.css, backgroundColor: _ = 'var(--background-modifier-active)', foregroundGradientColor: E, animate: f = !0 } = e,
        h = null != r ? r : 0;
    return (
        (t = null != E ? { background: 'linear-gradient(to right, '.concat(E[0], ', ').concat(E[1], ')') } : { backgroundColor: d }),
        (0, i.jsx)('div', {
            className: s()(n, u.progress, u[o]),
            style: { backgroundColor: _ },
            children:
                h !== c && 'number' == typeof h
                    ? (0, i.jsx)('div', {
                          className: s()(u.progressBar, u[o], { [u.animating]: f }),
                          style: {
                              transform: 'translate3d('.concat(Math.min(Math.max(0, h), 100) - 100, '%, 0, 0)'),
                              ...t
                          }
                      })
                    : (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: s()(u.indeterminateBar1, u[o], { [u.animating]: f }),
                                  style: t
                              }),
                              (0, i.jsx)('div', {
                                  className: s()(u.indeterminateBar2, u[o], { [u.animating]: f }),
                                  style: t
                              })
                          ]
                      })
        })
    );
}
(d.Sizes = r), (d.INDETERMINATE = c);
