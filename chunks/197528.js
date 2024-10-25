n.r(e), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(702493),
    s = n(77987),
    c = n(133853),
    i = n(703656),
    l = n(643366),
    u = n(94628),
    d = n(659154),
    f = n(902928),
    _ = n(240479),
    p = n(981631),
    C = n(621727);
let E = n(575703);
e.default = (0, s.e)(function () {
    let t;
    let [e, n] = r.useState({
        type: 'user-code-input',
        usePrefilledCode: !0
    });
    (0, o.Z)(), (0, l.Y)(e);
    let s = r.useCallback(() => {
            n({ type: 'user-code-input' });
        }, [n]),
        I = r.useCallback(
            (t) => {
                n({
                    type: 'authorization',
                    userCodeData: t
                });
            },
            [n]
        ),
        A = r.useCallback(
            (t) => {
                n({
                    type: 'success',
                    userCodeData: t
                });
            },
            [n]
        ),
        h = r.useCallback(
            (t) => {
                n({
                    type: 'error',
                    userCodeData: t
                });
            },
            [n]
        ),
        T = !0;
    switch (e.type) {
        case 'user-code-input':
            t = (0, a.jsx)(_.v, {
                usePrefilledCode: e.usePrefilledCode || !1,
                onUserCodeAccepted: I
            });
            break;
        case 'authorization':
            (t = (0, a.jsx)(u.B, {
                data: e.userCodeData,
                onDenied: s,
                onError: h,
                onSuccess: A
            })),
                (T = !1);
            break;
        case 'success':
            t = (0, a.jsx)(f.u, {
                onComplete: () => (0, i.uL)(p.Z5c.ME),
                data: e.userCodeData
            });
            break;
        case 'error':
            t = (0, a.jsx)(d.c, { onTryAgain: s });
            break;
        default:
            t = null;
    }
    return (0, a.jsxs)('div', {
        className: C.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: C.artwork,
                src: E,
                alt: ''
            }),
            (0, a.jsx)(c.Z, {
                show: !0,
                className: C.logo
            }),
            T
                ? (0, a.jsx)('div', {
                      className: C.content,
                      children: t
                  })
                : t
        ]
    });
});
