n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(411104),
    n(47120);
var i,
    r,
    s,
    l,
    a = n(200651),
    o = n(192379),
    c = n(533126),
    u = n(261470),
    d = n(399606),
    h = n(544891),
    p = n(481060),
    g = n(893776),
    m = n(99690),
    f = n(937154),
    x = n(388905),
    _ = n(198993),
    E = n(710845),
    v = n(314897),
    I = n(585483),
    b = n(358085),
    N = n(172517),
    C = n(51144),
    S = n(998502),
    A = n(981631),
    T = n(231338),
    j = n(388032),
    Z = n(506303),
    R = n(113207);
((s = i || (i = {}))[(s.INITIALIZING = 0)] = 'INITIALIZING'), (s[(s.PENDING_REMOTE_INIT = 1)] = 'PENDING_REMOTE_INIT'), (s[(s.PENDING_FINISH = 2)] = 'PENDING_FINISH'), (s[(s.PENDING_TICKET = 3)] = 'PENDING_TICKET'), (s[(s.PENDING_LOGIN = 4)] = 'PENDING_LOGIN'), (s[(s.FINISH = 5)] = 'FINISH'), ((l = r || (r = {}))[(l.QR_CODE = 0)] = 'QR_CODE'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
let L = n(515695),
    P = new E.Z('LoginQRSocket');
function O(e) {
    let { text: t = '' } = e,
        [n, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e = new Image();
            (e.src = L), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [L]),
        o.useEffect(() => {
            n && p.AccessibilityAnnouncer.announce(j.intl.string(j.t.j2p129));
        }, [n]),
        (0, a.jsx)('div', {
            className: Z.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(_.ZP, {
                                  className: Z.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, a.jsx)('div', {
                                  className: Z.qrCodeOverlay,
                                  children: (0, a.jsx)('img', {
                                      src: L,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, a.jsx)('div', {
                          className: Z.qrCodeOverlay,
                          'aria-label': j.intl.string(j.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, a.jsx)(p.Spinner, {
                              className: Z.qrCode,
                              type: p.Spinner.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let y = (e) => {
    let { className: t, children: n } = e;
    return (0, a.jsx)(p.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function D(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: r, isPasswordlessActive: s } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(O, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, a.jsx)(x.Dx, {
                        className: R.marginBottom8,
                        children: j.intl.string(j.t.UPiHaG)
                    }),
                    null != i ? (0, a.jsx)(y, { children: i }) : (0, a.jsx)(x.DK, { children: j.intl.format(j.t['Qq+A6u'], {}) }),
                    (0, a.jsx)(p.Button, {
                        size: p.ButtonSizes.LARGE,
                        look: p.ButtonLooks.LINK,
                        color: p.ButtonColors.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    b.isPlatformEmbedded && S.ZP.supportsFeature(A.eRX.WEBAUTHN)
                                        ? S.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, c.wz)(JSON.parse(e));
                                              return (0, c.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                g.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(r),
                        children: j.intl.string(j.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(m.Z, {
                        className: Z.qrAvatar,
                        user: e,
                        size: p.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: T.Sk.ONLINE
                    }),
                    (0, a.jsx)(x.Dx, {
                        className: R.marginBottom8,
                        children: j.intl.string(j.t.apGCUV)
                    }),
                    (0, a.jsx)(x.DK, { children: j.intl.format(j.t.Cbl5JC, { username: ''.concat(C.ZP.getUserTag(e)) }) }),
                    (0, a.jsx)(p.Button, {
                        look: p.Button.Looks.BLANK,
                        color: p.Button.Colors.LINK,
                        size: p.Button.Sizes.MIN,
                        onClick: n,
                        className: Z.startOverButton,
                        children: j.intl.string(j.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, a.jsx)(p.Spinner, { type: p.Spinner.Type.WANDERING_CUBES });
    }
}
function k(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        i = (0, d.e7)([v.default], () => v.default.getIsPasswordlessActive()),
        {
            state: r,
            rsaKeyPair: s,
            cancel: l,
            handleFailure: c
        } = (function (e) {
            let [t, n] = o.useState(0),
                [i, r] = o.useState(!1),
                [s, l] = o.useState({ step: 0 }),
                [a, c] = o.useState(null),
                d = (0, f.Z)(),
                h = o.useMemo(() => new u.Z(1500, 30000), []),
                p = o.useRef();
            p.current = o.useCallback(() => {
                l({ step: 0 }), d ? n((e) => e + 1) : (P.info('document is not visible, will defer reconnection when document becomes visible.'), r(!0));
            }, [d]);
            let g = o.useCallback(() => {
                    (function (e) {
                        let { current: t } = e;
                        if (void 0 === t) throw Error('tried to unwrap an undefined value.');
                        return t;
                    })(p)();
                }, [p]),
                m = o.useCallback(() => {
                    P.error('Could not complete QR code login, trying to restart with a new QR code.'), l({ step: 0 }), !h.pending && h.fail(g);
                }, [g, h]);
            return (
                o.useEffect(() => {
                    d && i && 0 === s.step && (P.info('reconnecting, now that document is visible'), r(!1), n((e) => e + 1));
                }, [s, d, i, r]),
                o.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        i = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(i);
                    P.info('[0ms] connecting to '.concat(i));
                    let s = (e) => P.info('['.concat(n(), '] ').concat(e)),
                        a = null,
                        o = null,
                        u = null,
                        d = null,
                        p = !0;
                    function f() {
                        if (null != a) return a;
                        throw Error('No key pair set');
                    }
                    let x = () => {
                        p ? ((p = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (s('heartbeat timeout, reconnecting.'), r.close(), m());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                i = JSON.parse(n);
                            switch (i.op) {
                                case 'nonce_proof': {
                                    let e = i.encrypted_nonce,
                                        t = await (0, N.qd)(f(), e);
                                    s('computed nonce proof'),
                                        r.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    h.succeed(), I.S.dispatch(A.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, N.Pk)(f());
                                    if (e !== i.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(i.fingerprint));
                                    s('handshake complete awaiting remote auth.'),
                                        l({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = i.ticket;
                                    null == e && m(),
                                        l({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    I.S.dispatch(A.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 3,
                                        user: await (0, N.Rq)(f(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    I.S.dispatch(A.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting finish/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 2,
                                        user: await (0, N.Rq)(f(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    I.S.dispatch(A.CkL.WAVE_EMPHASIZE), s('remote auth handshake finished.');
                                    let t = i.encrypted_token;
                                    l({ step: 5 }), e(await (0, N.FW)(f(), t));
                                    return;
                                }
                                case 'cancel':
                                    s('remote auth handshake cancelled.'), g();
                                    return;
                                case 'hello': {
                                    s('got hello, auth timeout='.concat(i.timeout_ms, 'ms'));
                                    let e = i.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), x(), (u = setInterval(x, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    p = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (a = await (0, N.W_)()), (o = await (0, N.dK)(a));
                            let e = await (0, N.Pk)(a);
                            s('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                c(a);
                        }),
                        (r.onclose = (e) => {
                            s('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), m();
                        }),
                        (r.onerror = (e) => {
                            s('disconnected, error: '.concat(JSON.stringify(e))), m();
                        }),
                        () => {
                            s('cleaning up'), (r.onopen = () => null), (r.onmessage = () => null), (r.onclose = () => null), (r.onerror = () => null), r.close(1000), h.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u);
                        }
                    );
                }, [g, e, t, h, m]),
                {
                    state: s,
                    rsaKeyPair: a,
                    cancel: g,
                    handleFailure: m
                }
            );
        })(t),
        g = (function (e) {
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
                h.tn
                    .post({
                        url: A.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: r.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != s)
                            try {
                                let n = await (0, N.FW)(s, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                c();
                            }
                        else c();
                    })
                    .catch(() => {
                        c();
                    });
        }, [r, t, s, c]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('div', { className: Z.verticalSeparator }),
                (0, a.jsx)(p.Sequencer, {
                    fillParent: !0,
                    className: Z.qrLogin,
                    step: g,
                    steps: [0, 1],
                    children: (0, a.jsx)('div', {
                        className: Z.qrLoginInner,
                        children: (0, a.jsx)(D, {
                            state: r,
                            cancel: l,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: i
                        })
                    })
                })
            ]
        })
    );
}
