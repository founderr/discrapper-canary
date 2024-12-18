t.d(n, {
    Z: function () {
        return l;
    }
});
var o = t(200651);
t(192379);
var i = t(212598),
    r = t(981631),
    c = t(388032),
    s = t(250331),
    a = t(300778);
function l(e) {
    let { isWaitingForConnection: n, onWaitingForConnection: t, expectedCallbackState: l, onAuthToken: d, onError: u, onClose: f } = e,
        p = n
            ? (0, o.jsx)('img', {
                  src: a.Z,
                  width: '231',
                  height: '172',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: s.Z,
                  width: '231',
                  height: '160',
                  alt: ''
              }),
        x = n ? c.intl.string(c.t.EuwcxM) : c.intl.string(c.t['e/z3nZ']),
        C = n ? c.intl.string(c.t['1GjS/f']) : c.intl.string(c.t['7tXu0t']);
    return (0, o.jsx)(i.t, {
        platformType: r.ABu.XBOX,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: u,
        onClose: f,
        img: p,
        title: x,
        body: C
    });
}
