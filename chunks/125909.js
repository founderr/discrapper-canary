n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    c = n(481060),
    s = n(496008);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: s.spinnerContainer,
                      children: (0, i.jsx)(c.Spinner, {
                          className: s.spinner,
                          type: c.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: l()({ [s.loading]: t }),
                children: n
            })
        ]
    });
}
