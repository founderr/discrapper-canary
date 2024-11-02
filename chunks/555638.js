e.d(t, {
    A: function () {
        return a;
    }
});
var i = e(200651);
e(192379);
var o = e(212598),
    r = e(927923),
    l = e(388032),
    c = e(283554),
    s = e(124248);
function a(n) {
    let { platformType: t, isWaitingForConnection: e, onWaitingForConnection: a, expectedCallbackState: d, onAuthToken: u, onError: C, onClose: f } = n,
        h = e
            ? (0, i.jsx)('img', {
                  src: s,
                  width: '180',
                  height: '125',
                  alt: ''
              })
            : (0, i.jsx)('img', {
                  src: c,
                  width: '180',
                  height: '111',
                  alt: ''
              }),
        T = e ? l.intl.string(l.t.TTIocn) : l.intl.string(l.t.LDTnRk),
        A = e ? l.intl.string(l.t.MNmoKC) : l.intl.string(l.t.JA1He3);
    return (0, i.jsx)(o.t, {
        platformType: t,
        isWaitingForConnection: e,
        onWaitingForConnection: a,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: C,
        onClose: f,
        img: h,
        title: T,
        body: A,
        redirectDestination: r.uu
    });
}
