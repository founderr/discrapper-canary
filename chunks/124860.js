n.d(t, {
    Cd: function () {
        return f;
    },
    YR: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(447097),
    o = n(873124),
    a = n(248902),
    d = n(160511),
    u = n(51693),
    c = n(973810),
    h = n(388032);
function f(e) {
    var t, n;
    let { mfaChallenge: h, mfaFinish: f, onEarlyClose: m, onClose: g, width: S = 440 } = e,
        [x, p] = i.useState(null !== (n = null === (t = h.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : 'select'),
        [v, j] = i.useState(x),
        C = async (e) => {
            let { mfaType: t, data: n } = e;
            await f({
                mfaType: t,
                data: n,
                ticket: h.ticket
            }),
                null != g && g();
        },
        b = {
            mfaChallenge: h,
            finish: C,
            setSlide: p,
            onClose: m
        };
    return (0, l.jsxs)(r.Slides, {
        activeSlide: x,
        width: S,
        onSlideReady: j,
        children: [
            (0, l.jsx)(r.Slide, {
                id: 'select',
                children: (0, l.jsx)(a.Z, { ...b })
            }),
            (0, l.jsx)(r.Slide, {
                id: 'webauthn',
                children: (0, l.jsx)(c.Z, { ...b })
            }),
            (0, l.jsx)(r.Slide, {
                id: 'totp',
                children: (0, l.jsx)(u.Z, {
                    ...b,
                    isSlideReady: 'totp' === v
                })
            }),
            (0, l.jsx)(r.Slide, {
                id: 'sms',
                children: (0, l.jsx)(d.Z, {
                    ...b,
                    isSlideReady: 'sms' === v
                })
            }),
            (0, l.jsx)(r.Slide, {
                id: 'backup',
                children: (0, l.jsx)(s.Z, {
                    ...b,
                    isSlideReady: 'backup' === v
                })
            }),
            (0, l.jsx)(r.Slide, {
                id: 'password',
                children: (0, l.jsx)(o.Z, {
                    ...b,
                    isSlideReady: 'password' === v
                })
            })
        ]
    });
}
function m(e) {
    let { mfaChallenge: t, finish: n, transitionState: i, onClose: s } = e;
    return (0, l.jsx)(r.ModalRoot, {
        transitionState: i,
        size: r.ModalSize.SMALL,
        'aria-label': h.intl.string(h.t.saHocH),
        children: (0, l.jsx)(f, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s
        })
    });
}
function g(e, t, n) {
    (0, r.openModal)(
        (n) =>
            (0, l.jsx)(m, {
                finish: t,
                mfaChallenge: e,
                ...n
            }),
        {
            onCloseCallback: () => {
                n(Error(h.intl.string(h.t.N2yb9f)));
            }
        }
    );
}
