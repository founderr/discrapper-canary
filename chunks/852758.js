n.d(t, {
    F0: function () {
        return T;
    },
    HR: function () {
        return x;
    },
    ZP: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(442837),
    s = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    h = n(110924),
    m = n(714338),
    p = n(213609),
    g = n(429142),
    f = n(144114),
    _ = n(210887),
    I = n(23434),
    E = n(1964),
    C = n(762756),
    v = n(981631),
    N = n(815660),
    S = n(388032);
let T = 'Email Verification',
    x = 'PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY';
function b() {
    let { action: e, theme: t } = (0, a.cj)([I.Z, _.Z], () => ({
            action: I.Z.getAction(),
            theme: _.Z.theme
        })),
        b = E.Z.getVerificationTypes(e),
        [A, Z] = r.useState(0),
        L = (0, h.Z)(b);
    (0, p.Z)(
        {
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: b[0],
                verification_types: b
            }
        },
        {},
        [b.toString()]
    );
    let y = () => {
            (0, u.FD)(),
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    {
                        modalKey: T,
                        Layer: g.ZP
                    }
                );
        },
        P = () => {
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('76540'), n.e('93399')]).then(n.bind(n, 607018));
                    return (t) =>
                        (0, i.jsx)(e, {
                            reason: f.L.USER_ACTION_REQUIRED,
                            ...t
                        });
                },
                {
                    modalKey: N.M,
                    Layer: g.ZP
                }
            );
        };
    return (
        r.useEffect(
            () => (
                m.Z.disable(),
                () => {
                    m.Z.enable();
                }
            ),
            []
        ),
        r.useEffect(() => {
            (null == L ? void 0 : L[0]) === v.PUi.PHONE &&
                (null == b ? void 0 : b[0]) === v.PUi.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: S.intl.string(S.t.KLnLIC),
                                body: S.intl.string(S.t.XGbCq6),
                                confirmText: S.intl.string(S.t['3oK4q6'])
                            });
                    },
                    {
                        modalKey: x,
                        Layer: g.ZP,
                        onCloseCallback: y
                    }
                );
        }, [b, L]),
        (0, i.jsx)(C.Z, {
            types: b,
            captchaKey: A,
            onCaptchaVerify: (e) => {
                s.tn
                    .post({
                        url: v.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(d.xf, () => {
                        Z((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === v.PUi.EMAIL_OR_PHONE || e === v.PUi.EMAIL || e === v.PUi.REVERIFY_EMAIL ? y() : P();
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, i.jsx)(e, {
                                header: S.intl.string(S.t['2jxGen']),
                                confirmText: S.intl.string(S.t['2jxGen']),
                                cancelText: S.intl.string(S.t['ETE/oK']),
                                onConfirm: () => c.Z.logout(),
                                ...n,
                                children: (0, i.jsx)(t, {
                                    variant: 'text-md/normal',
                                    children: S.intl.string(S.t.SUnWBA)
                                })
                            });
                    },
                    { Layer: g.ZP }
                );
            }
        })
    );
}
