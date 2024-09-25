n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(558522),
    s = n(941958);
function l(e) {
    let { imageBackground: t, applicationName: n, imageClassName: r, imageNotFoundClassName: l } = e,
        [u, c] = a.useState(!1);
    return 'not-found' === t.state || u
        ? (0, i.jsx)('div', {
              className: l,
              children: (0, i.jsx)(o.Z, { className: s.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, i.jsx)('img', {
                alt: n,
                className: r,
                src: t.url,
                onError: () => c(!0)
            });
}
