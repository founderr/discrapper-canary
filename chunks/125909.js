t.d(e, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(507716);
function u(n) {
    let { loading: e, children: t } = n;
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
                children: t
            })
        ]
    });
}
