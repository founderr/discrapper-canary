n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    }),
    n(47120);
var s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    i = n(212433),
    a = n(442837),
    d = n(481060),
    c = n(749210),
    u = n(830064),
    m = n(393238),
    p = n(877604),
    h = n(480608),
    g = n(160404),
    x = n(703656),
    _ = n(430824),
    f = n(768581),
    N = n(302221),
    I = n(956664),
    C = n(549817),
    E = n(45966),
    b = n(819553),
    v = n(548473),
    j = n(15320),
    O = n(973051),
    Z = n(981631),
    B = n(689938),
    R = n(878432);
async function T(e) {
    let t = await new Promise((t, n) => {
        let s = new Image();
        (s.crossOrigin = 'Anonymous'),
            (s.onerror = (e) => {
                n(e), (s.onerror = s.onload = null), (s = null);
            }),
            (s.onload = () => {
                t((0, I.XN)(s, 2, 10)), (s.onerror = s.onload = null), (s = null);
            }),
            (s.src = e);
    });
    return null == t
        ? void 0
        : t.map((e) => {
              let [t, n, s] = e;
              return (0, N.vq)(t, n, s);
          });
}
function D(e) {
    let { guildId: t } = e,
        { ref: n, width: l, height: I } = (0, m.Z)(),
        [D, M] = r.useState(),
        P = (0, a.Wu)([E.Z], () => E.Z.getOnboardingPromptsForOnboarding(t)),
        k = (0, a.e7)([E.Z], () => E.Z.getEnabled(t)),
        S = r.useCallback(
            (e, n, s) => {
                C.Z.selectOption(t, e, n, s);
            },
            [t]
        ),
        L = r.useCallback(() => {
            C.Z.completeOnboarding(t, P);
        }, [t, P]),
        A = (0, a.e7)([_.Z], () => _.Z.getGuild(t)),
        w = r.useMemo(
            () =>
                null == A
                    ? null
                    : f.ZP.getGuildSplashURL({
                          id: A.id,
                          splash: A.splash
                      }),
            [A]
        ),
        F = (0, a.e7)([b.ZP], () => b.ZP.getCurrentOnboardingStep(t)),
        [U, G] = r.useState(null != w ? null : 'cover');
    null != w &&
        null == D &&
        T(w).then((e) => {
            M(e[0]);
        });
    let H = r.useCallback(
            (e) => {
                G(F), C.Z.setUserOnboardingStep(t, e);
            },
            [t, F]
        ),
        y = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
        q = (0, a.e7)([b.ZP], () => b.ZP.getOnboardingStatus(t)),
        V = null != P && P.length > 0,
        z = r.useCallback(() => {
            (0, b.kp)(q) && k && V ? H(0) : L();
        }, [q, k, V, H, L]);
    r.useEffect(() => {
        if (!b.ZP.shouldShowOnboarding(t)) return c.Z.escapeToDefaultChannel(t);
        (0, h.E)(t);
    }, [t]);
    let Y = (0, d.useTransition)(
            F,
            {
                config: i.config.default,
                from: {
                    scale: 0.8,
                    opacity: 0
                },
                enter: {
                    scale: 1,
                    opacity: 1
                }
            },
            'cover' !== U && null !== U ? 'animate-never' : 'respect-motion-settings'
        ),
        Q = b.ZP.shouldShowOnboarding(t),
        W = null == A;
    if (
        (r.useEffect(() => {
            if (!Q || W) {
                let e = setTimeout(() => {
                    (0, x.uL)(Z.Z5c.CHANNEL(t));
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [Q, W, t]),
        !b.ZP.shouldShowOnboarding(t) || null == A)
    )
        return null;
    let X = () => {
        switch (F) {
            case 'cover':
                return (0, s.jsx)(v.ZP, {
                    guild: A,
                    onboardingStatus: b.uX.READY,
                    onStart: z,
                    disableTracking: y
                });
            case 'rules':
                return (0, s.jsx)(O.Z, {
                    setCurrentStep: H,
                    previousPromptIndex: P.length - 1,
                    guild: A,
                    prompts: P,
                    completeOnboarding: L,
                    disableTracking: y
                });
            case null:
                return null;
            default:
                return (0, s.jsx)(j.Z, {
                    guild: A,
                    prompts: P,
                    step: F,
                    selectOption: S,
                    completeOnboarding: L,
                    setCurrentStep: H,
                    disableTracking: y
                });
        }
    };
    return (0, s.jsxs)('div', {
        className: R.main,
        ref: n,
        children: [
            null != w
                ? (0, s.jsx)(p.Z, {
                      className: o()(R.artwork),
                      src: w,
                      width: l,
                      height: I,
                      imageClassName: R.cover
                  })
                : (0, s.jsx)(u.Z, {
                      className: R.artwork,
                      preserveAspectRatio: 'xMinYMin slice'
                  }),
            null != D &&
                (0, s.jsx)('div', {
                    className: R.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, N.aD)(D, 0.16), ' 0%, ').concat((0, N.aD)(D, 1), ' 100%)') }
                }),
            (0, s.jsx)('div', { className: R.gradient }),
            Y((e, t, n) => {
                let { key: r } = n;
                return (0, s.jsx)(
                    i.animated.div,
                    {
                        style: e,
                        children: X()
                    },
                    r
                );
            }),
            'cover' === F &&
                (0, s.jsx)('div', {
                    className: R.bottomCenterContent,
                    children: (0, s.jsx)(d.Heading, {
                        variant: 'heading-sm/normal',
                        color: 'header-secondary',
                        children: B.Z.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({ privacyLink: Z.EYA.PRIVACY })
                    })
                })
        ]
    });
}
