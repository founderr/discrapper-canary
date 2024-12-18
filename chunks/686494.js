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
    s = e(388032),
    l = e(344595),
    a = e(322539);
function u(n) {
    let { isWaitingForConnection: t, onWaitingForConnection: e, expectedCallbackState: u, onAuthToken: d, onError: C, onClose: h } = n,
        p = t
            ? (0, o.jsx)('img', {
                  src: a,
                  width: '168',
                  height: '124',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: l,
                  width: '152',
                  height: '123',
                  alt: ''
              }),
        x = t ? s.intl.string(s.t.tZ6ze3) : s.intl.string(s.t.siPkNj),
        f = t ? s.intl.string(s.t.VgWnwM) : s.intl.string(s.t.oS4NEB);
    return (0, o.jsx)(i.t, {
        platformType: c.ABu.CRUNCHYROLL,
        isWaitingForConnection: t,
        onWaitingForConnection: e,
        expectedCallbackState: u,
        onAuthToken: d,
        onError: C,
        onClose: h,
        img: p,
        title: x,
        body: f,
        redirectDestination: r.pY
    });
}
