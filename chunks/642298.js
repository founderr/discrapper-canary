n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(990547),
    a = n(442837),
    i = n(481060),
    r = n(809206),
    d = n(594174),
    c = n(626135),
    u = n(706734),
    E = n(264119),
    _ = n(75788),
    m = n(22150),
    N = n(361833),
    x = n(134562),
    A = n(526761),
    C = n(981631),
    h = n(259076),
    M = n(374808),
    S = n(800010),
    p = n(75277);
function f(e) {
    var t;
    let { transitionState: n, onClose: f } = e,
        I = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        g = s.useRef(null !== (t = null == I ? void 0 : I.verified) && void 0 !== t && t);
    s.useEffect(() => (c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, r.Zy)()), []);
    let R = null == I ? void 0 : I.verified,
        j = R ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
        [T, v] = s.useState(j),
        [O, L] = s.useState(null),
        [B, k] = s.useState(null),
        [D, U] = s.useState(null),
        [H, b] = s.useState(''),
        [G, y] = s.useState(),
        [F, w] = s.useState(''),
        P = T === A.Ax.CHANGE_EMAIL_WARNING ? M.wumpusExclamationImg : M.emailHeaderImg,
        Z = T === A.Ax.CHANGE_EMAIL_WARNING ? p : S,
        W = { impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: n,
        disableTrack: !0,
        children: [
            (0, o.jsx)('img', {
                alt: '',
                className: P,
                src: Z
            }),
            (0, o.jsxs)(i.Slides, {
                activeSlide: T,
                width: 440,
                onSlideReady: (e) => L(e),
                children: [
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: W,
                        children: (0, o.jsx)(m.Z, {
                            onNext: () => v(A.Ax.CONFIRM_CODE),
                            onClose: f
                        })
                    }),
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: W,
                        children: (0, o.jsx)(_.Z, {
                            error: D,
                            setError: U,
                            setEmailToken: k,
                            isSlideReady: O === A.Ax.CONFIRM_CODE,
                            onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: f
                        })
                    }),
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: W,
                        children: (0, o.jsx)(u.Z, {
                            onNext: () => (c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: G }), null != G && h.Mr.has(G) ? v(A.Ax.CHANGE_EMAIL_WARNING) : v(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: f,
                            reason: G,
                            onReasonChange: y,
                            freeTextResponse: F,
                            setFreeTextResponse: w
                        })
                    }),
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: W,
                        children: (0, o.jsx)(x.Z, {
                            onNext: () => {
                                c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: G }), v(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: f
                        })
                    }),
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties: {
                            ...W,
                            email_verified: g.current
                        },
                        children: (0, o.jsx)(N.Z, {
                            emailToken: B,
                            isSlideReady: O === A.Ax.EMAIL_AND_PASSWORD,
                            onBack: R ? () => v(null != G && h.Mr.has(G) ? A.Ax.CHANGE_EMAIL_WARNING : A.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: G,
                                    free_text_response: F
                                }),
                                    b(e),
                                    v(A.Ax.COMPLETE);
                            },
                            onClose: f
                        })
                    }),
                    (0, o.jsx)(i.Slide, {
                        id: A.Ax.COMPLETE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: W,
                        children: (0, o.jsx)(E.Z, {
                            email: H,
                            onClose: f
                        })
                    })
                ]
            })
        ]
    });
}
