n.d(e, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var o = n(200651),
    a = n(192379),
    r = n(558522),
    c = n(941958);
function i(t) {
    let { imageBackground: e, applicationName: n, imageClassName: i, imageNotFoundClassName: u } = t,
        [l, s] = a.useState(!1);
    return 'not-found' === e.state || l
        ? (0, o.jsx)('div', {
              className: u,
              children: (0, o.jsx)(r.Z, { className: c.brokenImageIcon })
          })
        : 'loading' === e.state
          ? null
          : (0, o.jsx)('img', {
                alt: n,
                className: i,
                src: e.url,
                onError: () => s(!0)
            });
}
