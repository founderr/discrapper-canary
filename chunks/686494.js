e.d(t, {
    Z: function () {
        return u;
    }
});
var o = e(200651);
e(192379);
var i = e(212598),
    r = e(728151),
    c = e(981631),
    l = e(388032),
    s = e(344595),
    a = e(322539);
function u(n) {
    let { isWaitingForConnection: t, onWaitingForConnection: e, expectedCallbackState: u, onAuthToken: d, onError: C, onClose: h } = n,
        x = t
            ? (0, o.jsx)('img', {
                  src: a,
                  width: '168',
                  height: '124',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: s,
                  width: '152',
                  height: '123',
                  alt: ''
              }),
        p = t ? l.intl.string(l.t.tZ6ze3) : l.intl.string(l.t.siPkNj),
        f = t ? l.intl.string(l.t.VgWnwM) : l.intl.string(l.t.oS4NEB);
    return (0, o.jsx)(i.t, {
        platformType: c.ABu.CRUNCHYROLL,
        isWaitingForConnection: t,
        onWaitingForConnection: e,
        expectedCallbackState: u,
        onAuthToken: d,
        onError: C,
        onClose: h,
        img: x,
        title: p,
        body: f,
        redirectDestination: r.pY
    });
}
