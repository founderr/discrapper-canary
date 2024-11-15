e.d(n, {
    Z: function () {
        return u;
    }
});
var r = e(200651);
e(192379);
var i = e(120356),
    o = e.n(i),
    l = e(481060),
    c = e(507716);
function u(t) {
    let { loading: n, children: e } = t;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            n
                ? (0, r.jsx)('div', {
                      className: c.spinnerContainer,
                      children: (0, r.jsx)(l.Spinner, {
                          className: c.spinner,
                          type: l.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: o()({ [c.loading]: n }),
                children: e
            })
        ]
    });
}
