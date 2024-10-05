n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(507716);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: l.spinnerContainer,
                      children: (0, i.jsx)(r.Spinner, {
                          className: l.spinner,
                          type: r.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: s()({ [l.loading]: t }),
                children: n
            })
        ]
    });
}
