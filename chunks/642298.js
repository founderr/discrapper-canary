t.r(s),
    t.d(s, {
        default: function () {
            return R;
        }
    }),
    t(47120);
var n = t(735250),
    o = t(470079),
    a = t(990547),
    l = t(442837),
    r = t(481060),
    i = t(809206),
    E = t(594174),
    _ = t(626135),
    N = t(706734),
    d = t(264119),
    c = t(75788),
    A = t(22150),
    u = t(361833),
    C = t(134562),
    M = t(526761),
    S = t(981631),
    m = t(259076),
    I = t(859565),
    x = t(800010),
    T = t(75277);
function R(e) {
    var s;
    let { transitionState: t, onClose: R } = e,
        O = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        h = o.useRef(null !== (s = null == O ? void 0 : O.verified) && void 0 !== s && s);
    o.useEffect(() => (_.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, i.Zy)()), []);
    let L = null == O ? void 0 : O.verified,
        f = L ? M.Ax.CONFIRM_START : M.Ax.EMAIL_AND_PASSWORD,
        [p, G] = o.useState(f),
        [j, g] = o.useState(null),
        [v, U] = o.useState(null),
        [D, H] = o.useState(null),
        [B, Z] = o.useState(''),
        [k, P] = o.useState(),
        y = p === M.Ax.CHANGE_EMAIL_WARNING ? I.wumpusExclamationImg : I.emailHeaderImg,
        F = p === M.Ax.CHANGE_EMAIL_WARNING ? T : x,
        b = { impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, n.jsxs)(r.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: y,
                src: F
            }),
            (0, n.jsxs)(r.Slides, {
                activeSlide: p,
                width: 440,
                onSlideReady: (e) => g(e),
                children: [
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CONFIRM_START,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: b,
                        children: (0, n.jsx)(A.Z, {
                            onNext: () => G(M.Ax.CONFIRM_CODE),
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CONFIRM_CODE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: b,
                        children: (0, n.jsx)(c.Z, {
                            error: D,
                            setError: H,
                            setEmailToken: U,
                            isSlideReady: j === M.Ax.CONFIRM_CODE,
                            onNext: () => G(M.Ax.CHANGE_EMAIL_REASONS),
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: b,
                        children: (0, n.jsx)(N.Z, {
                            onNext: () => (_.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: k }), null != k && m.Mr.has(k) ? G(M.Ax.CHANGE_EMAIL_WARNING) : G(M.Ax.EMAIL_AND_PASSWORD)),
                            onClose: R,
                            reason: k,
                            onReasonChange: P
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: b,
                        children: (0, n.jsx)(C.Z, {
                            onNext: () => {
                                _.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: k }), G(M.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.EMAIL_AND_PASSWORD,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties: {
                            ...b,
                            email_verified: h.current
                        },
                        children: (0, n.jsx)(u.Z, {
                            emailToken: v,
                            isSlideReady: j === M.Ax.EMAIL_AND_PASSWORD,
                            onBack: L ? () => G(null != k && m.Mr.has(k) ? M.Ax.CHANGE_EMAIL_WARNING : M.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                Z(e), G(M.Ax.COMPLETE);
                            },
                            onClose: R,
                            reason: k
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.COMPLETE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: b,
                        children: (0, n.jsx)(d.Z, {
                            email: B,
                            onClose: R
                        })
                    })
                ]
            })
        ]
    });
}
