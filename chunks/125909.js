n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    c = n(481060),
    o = n(507716);
function s(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: o.spinnerContainer,
                      children: (0, i.jsx)(c.Spinner, {
                          className: o.spinner,
                          type: c.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: l()({ [o.loading]: t }),
                children: n
            })
        ]
    });
}
