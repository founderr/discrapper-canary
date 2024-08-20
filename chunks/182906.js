n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var r = n(735250),
    o = n(470079),
    a = n(558522),
    c = n(175778);
function i(e) {
    let { imageBackground: t, applicationName: n, imageClassName: i, imageNotFoundClassName: l } = e,
        [u, s] = o.useState(!1);
    return 'not-found' === t.state || u
        ? (0, r.jsx)('div', {
              className: l,
              children: (0, r.jsx)(a.Z, { className: c.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, r.jsx)('img', {
                alt: n,
                className: i,
                src: t.url,
                onError: () => s(!0)
            });
}
