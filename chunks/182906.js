n.d(e, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var o = n(200651),
    a = n(192379),
    r = n(558522),
    i = n(941958);
function c(t) {
    let { imageBackground: e, applicationName: n, imageClassName: c, imageNotFoundClassName: l } = t,
        [u, s] = a.useState(!1);
    return 'not-found' === e.state || u
        ? (0, o.jsx)('div', {
              className: l,
              children: (0, o.jsx)(r.Z, { className: i.brokenImageIcon })
          })
        : 'loading' === e.state
          ? null
          : (0, o.jsx)('img', {
                alt: n,
                className: c,
                src: e.url,
                onError: () => s(!0)
            });
}
