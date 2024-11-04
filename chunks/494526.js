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
    a,
    l = n(200651),
    o = n(192379),
    c = n(615231),
    u = n(261470),
    d = n(399606),
    h = n(544891),
    g = n(481060),
    f = n(893776),
    m = n(99690),
    p = n(937154),
    _ = n(388905),
    x = n(198993),
    E = n(710845),
    v = n(314897),
    I = n(585483),
    N = n(358085),
    b = n(172517),
    C = n(51144),
    S = n(998502),
    T = n(981631),
    A = n(231338),
    Z = n(388032),
    j = n(506303),
    R = n(113207);
((s = i || (i = {}))[(s.INITIALIZING = 0)] = 'INITIALIZING'), (s[(s.PENDING_REMOTE_INIT = 1)] = 'PENDING_REMOTE_INIT'), (s[(s.PENDING_FINISH = 2)] = 'PENDING_FINISH'), (s[(s.PENDING_TICKET = 3)] = 'PENDING_TICKET'), (s[(s.PENDING_LOGIN = 4)] = 'PENDING_LOGIN'), (s[(s.FINISH = 5)] = 'FINISH'), ((a = r || (r = {}))[(a.QR_CODE = 0)] = 'QR_CODE'), (a[(a.CONFIRM = 1)] = 'CONFIRM');
let O = n(515695),
    L = new E.Z('LoginQRSocket');
function y(e) {
    let { text: t = '' } = e,
        [n, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e = new Image();
            (e.src = O), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [O]),
        o.useEffect(() => {
            n && g.AccessibilityAnnouncer.announce(Z.intl.string(Z.t.j2p129));
        }, [n]),
        (0, l.jsx)('div', {
            className: j.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(x.ZP, {
                                  className: j.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, l.jsx)('div', {
                                  className: j.qrCodeOverlay,
                                  children: (0, l.jsx)('img', {
                                      src: O,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, l.jsx)('div', {
                          className: j.qrCodeOverlay,
                          'aria-label': Z.intl.string(Z.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, l.jsx)(g.Spinner, {
                              className: j.qrCode,
                              type: g.Spinner.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let P = (e) => {
    let { className: t, children: n } = e;
    return (0, l.jsx)(g.Text, {
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
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(y, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, l.jsx)(_.Dx, {
                        className: R.marginBottom8,
                        children: Z.intl.string(Z.t.UPiHaG)
                    }),
                    null != i ? (0, l.jsx)(P, { children: i }) : (0, l.jsx)(_.DK, { children: Z.intl.format(Z.t['Qq+A6u'], {}) }),
                    (0, l.jsx)(g.Button, {
                        size: g.ButtonSizes.LARGE,
                        look: g.ButtonLooks.LINK,
                        color: g.ButtonColors.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    N.isPlatformEmbedded && S.ZP.supportsFeature(T.eRX.WEBAUTHN)
                                        ? S.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, c.wz)(JSON.parse(e));
                                              return (0, c.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                f.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(r),
                        children: Z.intl.string(Z.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.Z, {
                        className: j.qrAvatar,
                        user: e,
                        size: g.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: A.Sk.ONLINE
                    }),
                    (0, l.jsx)(_.Dx, {
                        className: R.marginBottom8,
                        children: Z.intl.string(Z.t.apGCUV)
                    }),
                    (0, l.jsx)(_.DK, { children: Z.intl.format(Z.t.Cbl5JC, { username: ''.concat(C.ZP.getUserTag(e)) }) }),
                    (0, l.jsx)(g.Button, {
                        look: g.Button.Looks.BLANK,
                        color: g.Button.Colors.LINK,
                        size: g.Button.Sizes.MIN,
                        onClick: n,
                        className: j.startOverButton,
                        children: Z.intl.string(Z.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, l.jsx)(g.Spinner, { type: g.Spinner.Type.WANDERING_CUBES });
    }
}
function k(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        i = (0, d.e7)([v.default], () => v.default.getIsPasswordlessActive()),
        {
            state: r,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: c
        } = (function (e) {
            let [t, n] = o.useState(0),
                [i, r] = o.useState(!1),
                [s, a] = o.useState({ step: 0 }),
                [l, c] = o.useState(null),
                d = (0, p.Z)(),
                h = o.useMemo(() => new u.Z(1500, 30000), []),
                g = o.useRef();
            g.current = o.useCallback(() => {
                a({ step: 0 }), d ? n((e) => e + 1) : (L.info('document is not visible, will defer reconnection when document becomes visible.'), r(!0));
            }, [d]);
            let f = o.useCallback(() => {
                    (function (e) {
                        let { current: t } = e;
                        if (void 0 === t) throw Error('tried to unwrap an undefined value.');
                        return t;
                    })(g)();
                }, [g]),
                m = o.useCallback(() => {
                    L.error('Could not complete QR code login, trying to restart with a new QR code.'), a({ step: 0 }), !h.pending && h.fail(f);
                }, [f, h]);
            return (
                o.useEffect(() => {
                    d && i && 0 === s.step && (L.info('reconnecting, now that document is visible'), r(!1), n((e) => e + 1));
                }, [s, d, i, r]),
                o.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        i = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(i);
                    L.info('[0ms] connecting to '.concat(i));
                    let s = (e) => L.info('['.concat(n(), '] ').concat(e)),
                        l = null,
                        o = null,
                        u = null,
                        d = null,
                        g = !0;
                    function p() {
                        if (null != l) return l;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        g ? ((g = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (s('heartbeat timeout, reconnecting.'), r.close(), m());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                i = JSON.parse(n);
                            switch (i.op) {
                                case 'nonce_proof': {
                                    let e = i.encrypted_nonce,
                                        t = await (0, b.qd)(p(), e);
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
                                    h.succeed(), I.S.dispatch(T.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(p());
                                    if (e !== i.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(i.fingerprint));
                                    s('handshake complete awaiting remote auth.'),
                                        a({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = i.ticket;
                                    null == e && m(),
                                        a({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    I.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = i.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    I.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting finish/cancel.');
                                    let e = i.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    I.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake finished.');
                                    let t = i.encrypted_token;
                                    a({ step: 5 }), e(await (0, b.FW)(p(), t));
                                    return;
                                }
                                case 'cancel':
                                    s('remote auth handshake cancelled.'), f();
                                    return;
                                case 'hello': {
                                    s('got hello, auth timeout='.concat(i.timeout_ms, 'ms'));
                                    let e = i.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), _(), (u = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    g = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (l = await (0, b.W_)()), (o = await (0, b.dK)(l));
                            let e = await (0, b.Pk)(l);
                            s('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                c(l);
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
                }, [f, e, t, h, m]),
                {
                    state: s,
                    rsaKeyPair: l,
                    cancel: f,
                    handleFailure: m
                }
            );
        })(t),
        f = (function (e) {
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
                        url: T.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: r.ticket },
                        oldFormErrors: !0
                    })
                    .then(async (e) => {
                        if (null != s)
                            try {
                                let n = await (0, b.FW)(s, e.body.encrypted_token);
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
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('div', { className: j.verticalSeparator }),
                (0, l.jsx)(g.Sequencer, {
                    fillParent: !0,
                    className: j.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, l.jsx)('div', {
                        className: j.qrLoginInner,
                        children: (0, l.jsx)(D, {
                            state: r,
                            cancel: a,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: i
                        })
                    })
                })
            ]
        })
    );
}
