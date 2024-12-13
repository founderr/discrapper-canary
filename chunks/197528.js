n.r(t), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(593473),
    i = n(702493),
    c = n(77987),
    l = n(133853),
    s = n(703656),
    d = n(643366),
    u = n(94628),
    f = n(659154),
    x = n(581690),
    p = n(902928),
    h = n(521937),
    C = n(981631),
    m = n(881579);
let v = n(575703);
t.default = (0, c.e)(function () {
    let e;
    let [t, n] = r.useState(() => {
        if (window.location.pathname.endsWith(C.Z5c.ACTIVATE_HANDOFF)) {
            let { user_code: e } = o.parse(window.location.search);
            return {
                type: 'handoff',
                code: e
            };
        }
        return {
            type: 'user-code-input',
            usePrefilledCode: !0
        };
    });
    (0, i.Z)(), (0, d.Y)(t);
    let c = r.useCallback(() => {
            n({ type: 'user-code-input' });
        }, [n]),
        g = r.useCallback(
            (e) => {
                n({
                    type: 'authorization',
                    userCodeData: e
                });
            },
            [n]
        ),
        _ = r.useCallback(
            (e) => {
                n({
                    type: 'success',
                    userCodeData: e
                });
            },
            [n]
        ),
        b = r.useCallback(
            (e) => {
                n({
                    type: 'error',
                    userCodeData: e
                });
            },
            [n]
        ),
        N = !0;
    switch (t.type) {
        case 'handoff':
            (e = (0, a.jsx)(x.c, { code: t.code })), (N = !1);
            break;
        case 'user-code-input':
            e = (0, a.jsx)(h.v, {
                usePrefilledCode: t.usePrefilledCode || !1,
                onUserCodeAccepted: g
            });
            break;
        case 'authorization':
            (e = (0, a.jsx)(u.B, {
                data: t.userCodeData,
                onDenied: c,
                onError: b,
                onSuccess: _
            })),
                (N = !1);
            break;
        case 'success':
            e = (0, a.jsx)(p.u, {
                onComplete: () => (0, s.uL)(C.Z5c.ME),
                data: t.userCodeData
            });
            break;
        case 'error':
            e = (0, a.jsx)(f.c, { onTryAgain: c });
            break;
        default:
            e = null;
    }
    return (0, a.jsxs)('div', {
        className: m.activatePage,
        children: [
            (0, a.jsx)('img', {
                className: m.artwork,
                src: v,
                alt: ''
            }),
            (0, a.jsx)(l.Z, {
                show: !0,
                className: m.logo
            }),
            N
                ? (0, a.jsx)('div', {
                      className: m.content,
                      children: e
                  })
                : e
        ]
    });
});
