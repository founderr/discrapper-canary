n.d(e, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var a = n(200651),
    o = n(192379),
    r = n(558522),
    c = n(941958);
function i(t) {
    let { imageBackground: e, applicationName: n, imageClassName: i, imageNotFoundClassName: u } = t,
        [l, s] = o.useState(!1);
    return 'not-found' === e.state || l
        ? (0, a.jsx)('div', {
              className: u,
              children: (0, a.jsx)(r.Z, { className: c.brokenImageIcon })
          })
        : 'loading' === e.state
          ? null
          : (0, a.jsx)('img', {
                alt: n,
                className: i,
                src: e.url,
                onError: () => s(!0)
            });
}
