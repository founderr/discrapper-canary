n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(411104),
    n(47120);
var s,
    r,
    i,
    a,
    l = n(200651),
    o = n(192379),
    c = n(615231),
    u = n(261470),
    d = n(399606),
    _ = n(544891),
    h = n(481060),
    E = n(893776),
    g = n(99690),
    p = n(937154),
    m = n(388905),
    f = n(198993),
    I = n(710845),
    N = n(314897),
    T = n(585483),
    A = n(358085),
    x = n(172517),
    C = n(51144),
    R = n(998502),
    S = n(981631),
    O = n(231338),
    Z = n(689938),
    v = n(506303),
    b = n(113207);
((i = s || (s = {}))[(i.INITIALIZING = 0)] = 'INITIALIZING'), (i[(i.PENDING_REMOTE_INIT = 1)] = 'PENDING_REMOTE_INIT'), (i[(i.PENDING_FINISH = 2)] = 'PENDING_FINISH'), (i[(i.PENDING_TICKET = 3)] = 'PENDING_TICKET'), (i[(i.PENDING_LOGIN = 4)] = 'PENDING_LOGIN'), (i[(i.FINISH = 5)] = 'FINISH'), ((a = r || (r = {}))[(a.QR_CODE = 0)] = 'QR_CODE'), (a[(a.CONFIRM = 1)] = 'CONFIRM');
let L = n(515695),
    M = new I.Z('LoginQRSocket');
function D(e) {
    let { text: t = '' } = e,
        [n, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e = new Image();
            (e.src = L), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [L]),
        o.useEffect(() => {
            n && h.AccessibilityAnnouncer.announce(Z.Z.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL);
        }, [n]),
        (0, l.jsx)('div', {
            className: v.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(f.ZP, {
                                  className: v.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, l.jsx)('div', {
                                  className: v.qrCodeOverlay,
                                  children: (0, l.jsx)('img', {
                                      src: L,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, l.jsx)('div', {
                          className: v.qrCodeOverlay,
                          'aria-label': Z.Z.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                          'aria-busy': !0,
                          children: (0, l.jsx)(h.Spinner, {
                              className: v.qrCode,
                              type: h.Spinner.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let P = (e) => {
    let { className: t, children: n } = e;
    return (0, l.jsx)(h.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function j(e) {
    let { state: t, cancel: n, errorMessage: s, conditionalMediationAbortController: r, isPasswordlessActive: i } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(D, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, l.jsx)(m.Dx, {
                        className: b.marginBottom8,
                        children: Z.Z.Messages.LOGIN_WITH_QR
                    }),
                    null != s ? (0, l.jsx)(P, { children: s }) : (0, l.jsx)(m.DK, { children: Z.Z.Messages.LOGIN_WITH_QR_DESCRIPTION.format() }),
                    (0, l.jsx)(h.Button, {
                        size: h.ButtonSizes.LARGE,
                        look: h.ButtonLooks.LINK,
                        color: h.ButtonColors.LINK,
                        disabled: i,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    A.isPlatformEmbedded && R.ZP.supportsFeature(S.eRX.WEBAUTHN)
                                        ? R.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, c.wz)(JSON.parse(e));
                                              return (0, c.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                E.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(r),
                        children: Z.Z.Messages.SIGN_IN_WITH_PASSKEY
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(g.Z, {
                        className: v.qrAvatar,
                        user: e,
                        size: h.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: O.Sk.ONLINE
                    }),
                    (0, l.jsx)(m.Dx, {
                        className: b.marginBottom8,
                        children: Z.Z.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                    }),
                    (0, l.jsx)(m.DK, { children: Z.Z.Messages.LOGIN_AS.format({ username: ''.concat(C.ZP.getUserTag(e)) }) }),
                    (0, l.jsx)(h.Button, {
                        look: h.Button.Looks.BLANK,
                        color: h.Button.Colors.LINK,
                        size: h.Button.Sizes.MIN,
                        onClick: n,
                        className: v.startOverButton,
                        children: Z.Z.Messages.QR_CODE_LOGIN_START_OVER
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, l.jsx)(h.Spinner, { type: h.Spinner.Type.WANDERING_CUBES });
    }
}
function U(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        s = (0, d.e7)([N.default], () => N.default.getIsPasswordlessActive()),
        {
            state: r,
            rsaKeyPair: i,
            cancel: a,
            handleFailure: c
        } = (function (e) {
            let [t, n] = o.useState(0),
                [s, r] = o.useState(!1),
                [i, a] = o.useState({ step: 0 }),
                [l, c] = o.useState(null),
                d = (0, p.Z)(),
                _ = o.useMemo(() => new u.Z(1500, 30000), []),
                h = o.useRef();
            h.current = o.useCallback(() => {
                a({ step: 0 }), d ? n((e) => e + 1) : (M.info('document is not visible, will defer reconnection when document becomes visible.'), r(!0));
            }, [d]);
            let E = o.useCallback(() => {
                    (function (e) {
                        let { current: t } = e;
                        if (void 0 === t) throw Error('tried to unwrap an undefined value.');
                        return t;
                    })(h)();
                }, [h]),
                g = o.useCallback(() => {
                    M.error('Could not complete QR code login, trying to restart with a new QR code.'), a({ step: 0 }), !_.pending && _.fail(E);
                }, [E, _]);
            return (
                o.useEffect(() => {
                    d && s && 0 === i.step && (M.info('reconnecting, now that document is visible'), r(!1), n((e) => e + 1));
                }, [i, d, s, r]),
                o.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        s = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(s);
                    M.info('[0ms] connecting to '.concat(s));
                    let i = (e) => M.info('['.concat(n(), '] ').concat(e)),
                        l = null,
                        o = null,
                        u = null,
                        d = null,
                        h = !0;
                    function p() {
                        if (null != l) return l;
                        throw Error('No key pair set');
                    }
                    let m = () => {
                        h ? ((h = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (i('heartbeat timeout, reconnecting.'), r.close(), g());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                s = JSON.parse(n);
                            switch (s.op) {
                                case 'nonce_proof': {
                                    let e = s.encrypted_nonce,
                                        t = await (0, x.qd)(p(), e);
                                    i('computed nonce proof'),
                                        r.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    _.succeed(), T.S.dispatch(S.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, x.Pk)(p());
                                    if (e !== s.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(s.fingerprint));
                                    i('handshake complete awaiting remote auth.'),
                                        a({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = s.ticket;
                                    null == e && g(),
                                        a({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    T.S.dispatch(S.CkL.WAVE_EMPHASIZE), i('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = s.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, x.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    T.S.dispatch(S.CkL.WAVE_EMPHASIZE), i('remote auth handshake started, awaiting finish/cancel.');
                                    let e = s.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, x.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    T.S.dispatch(S.CkL.WAVE_EMPHASIZE), i('remote auth handshake finished.');
                                    let t = s.encrypted_token;
                                    a({ step: 5 }), e(await (0, x.FW)(p(), t));
                                    return;
                                }
                                case 'cancel':
                                    i('remote auth handshake cancelled.'), E();
                                    return;
                                case 'hello': {
                                    i('got hello, auth timeout='.concat(s.timeout_ms, 'ms'));
                                    let e = s.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), m(), (u = setInterval(m, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    h = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (l = await (0, x.W_)()), (o = await (0, x.dK)(l));
                            let e = await (0, x.Pk)(l);
                            i('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                c(l);
                        }),
                        (r.onclose = (e) => {
                            i('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), g();
                        }),
                        (r.onerror = (e) => {
                            i('disconnected, error: '.concat(JSON.stringify(e))), g();
                        }),
                        () => {
                            i('cleaning up'), (r.onopen = () => null), (r.onmessage = () => null), (r.onclose = () => null), (r.onerror = () => null), r.close(1000), _.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u);
                        }
                    );
                }, [E, e, t, _, g]),
                {
                    state: i,
                    rsaKeyPair: l,
                    cancel: E,
                    handleFailure: g
                }
            );
        })(t),
        E = (function (e) {
            switch (e) {
                case 0:
                case 1:
                    return 0;
                case 3:
                case 2:
                case 4:
                case 5:
                    return 1;
            }
        })(r.step);
    return (
        o.useEffect(() => {
            4 === r.step &&
                null != r.ticket &&
                _.tn
                    .post({
                        url: S.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: r.ticket },
                        oldFormErrors: !0
                    })
                    .then(async (e) => {
                        if (null != i)
                            try {
                                let n = await (0, x.FW)(i, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                c();
                            }
                        else c();
                    })
                    .catch(() => {
                        c();
                    });
        }, [r, t, i, c]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('div', { className: v.verticalSeparator }),
                (0, l.jsx)(h.Sequencer, {
                    fillParent: !0,
                    className: v.qrLogin,
                    step: E,
                    steps: [0, 1],
                    children: (0, l.jsx)('div', {
                        className: v.qrLoginInner,
                        children: (0, l.jsx)(j, {
                            state: r,
                            cancel: a,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: s
                        })
                    })
                })
            ]
        })
    );
}
