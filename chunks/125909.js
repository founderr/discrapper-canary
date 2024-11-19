n.d(e, {
    Z: function () {
        return a;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    c = n(694123);
function a(t) {
    let { loading: e, children: n } = t;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            e
                ? (0, r.jsx)('div', {
                      className: c.spinnerContainer,
                      children: (0, r.jsx)(l.Spinner, {
                          className: c.spinner,
                          type: l.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: o()({ [c.loading]: e }),
                children: n
            })
        ]
    });
}
