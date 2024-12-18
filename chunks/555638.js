e.d(t, {
    A: function () {
        return l;
    }
});
var o = e(200651);
e(192379);
var i = e(212598),
    c = e(388032),
    r = e(436200),
    s = e(757685);
function l(n) {
    let { platformType: t, isWaitingForConnection: e, onWaitingForConnection: l, expectedCallbackState: a, onAuthToken: d, onError: u, onClose: p } = n,
        A = e
            ? (0, o.jsx)('img', {
                  src: s.Z,
                  width: '231',
                  height: '172',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: r.Z,
                  width: '231',
                  height: '160',
                  alt: ''
              }),
        T = e ? c.intl.string(c.t.TTIocn) : c.intl.string(c.t['6n+UPT']),
        f = e ? c.intl.string(c.t.MNmoKC) : c.intl.string(c.t.JaaqIS);
    return (0, o.jsx)(i.t, {
        platformType: t,
        isWaitingForConnection: e,
        onWaitingForConnection: l,
        expectedCallbackState: a,
        onAuthToken: d,
        onError: u,
        onClose: p,
        img: A,
        title: T,
        body: f
    });
}
