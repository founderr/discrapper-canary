n.d(t, {
    Z: function () {
        return d;
    }
});
var o = n(200651);
n(192379);
var r = n(212598),
    i = n(981631),
    c = n(927923),
    s = n(388032),
    l = n(397995),
    a = n(848499);
function d(e) {
    let { isWaitingForConnection: t, onWaitingForConnection: n, expectedCallbackState: d, onAuthToken: u, onError: x, onClose: C } = e,
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
                  height: '124',
                  alt: ''
              }),
        f = t ? s.intl.string(s.t.EuwcxM) : s.intl.string(s.t.a3MfQU),
        g = t ? s.intl.string(s.t['1GjS/f']) : s.intl.string(s.t['Y+UQDg']);
    return (0, o.jsx)(r.t, {
        platformType: i.ABu.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: x,
        onClose: C,
        img: p,
        title: f,
        body: g,
        redirectDestination: c.zM
    });
}
