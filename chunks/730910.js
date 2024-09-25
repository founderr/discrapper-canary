n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(526629),
    o = n(442837),
    c = n(692547),
    d = n(215569),
    u = n(780384),
    _ = n(481060),
    I = n(410030),
    E = n(367907),
    T = n(768762),
    m = n(626135),
    N = n(585483),
    S = n(999382),
    g = n(743475),
    h = n(983135),
    C = n(8426),
    x = n(969632),
    p = n(570961),
    R = n(208665),
    L = n(359191),
    f = n(84658),
    O = n(142961),
    A = n(232764),
    M = n(729311),
    D = n(850864),
    v = n(966301),
    j = n(981631),
    Z = n(689938),
    b = n(693310);
function U() {
    let e = (0, o.e7)([S.Z], () => S.Z.getGuild());
    return null == e ? null : (0, s.jsx)(G, { guild: e });
}
function G(e) {
    let { guild: t } = e,
        i = t.id,
        S = (0, o.e7)([L.Z], () => L.Z.getCurrentPage()),
        U = (0, O.Z)(i),
        {
            hasChanges: G,
            hasConfiguredAnythingForCurrentStep: P,
            hasErrors: B
        } = (0, o.cj)([L.Z], () => ({
            hasChanges: L.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: L.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: L.Z.hasErrors()
        })),
        y = (0, o.e7)([L.Z], () => {
            let e = (0, f.lg)(S);
            return null != e && !L.Z.isEducationUpsellDismissed(e);
        }),
        F = (0, I.ZP)(),
        k = a.useRef(null),
        [{ spring: w }, H] = (0, _.useSpring)(() => ({ spring: 0 }), 'animate-always');
    a.useEffect(() => {
        function e() {
            H({
                spring: 1,
                config: l.config.gentle
            }),
                H({
                    spring: 0,
                    config: l.config.gentle,
                    delay: 1000
                });
        }
        return (
            N.S.subscribe(j.CkL.EMPHASIZE_NOTICE, e),
            () => {
                N.S.unsubscribe(j.CkL.EMPHASIZE_NOTICE, e);
            }
        );
    }, [H]);
    let V = (0, _.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(),
        Y = (0, _.useToken)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
        W = (0, u.wj)(F) ? V : Y,
        z = w.to({
            range: [0, 1],
            output: [(0, _.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, _.useToken)(c.Z.colors.TEXT_NORMAL).hex()]
        }),
        K = w.to({
            range: [0, 1],
            output: [W, (0, _.useToken)(c.Z.colors.STATUS_DANGER).hex()]
        });
    if (U) {
        if (S === f.PG.DEFAULT_CHANNELS) return (0, s.jsx)(M.j, {});
        if (S === f.PG.CUSTOMIZATION_QUESTIONS) return (0, s.jsx)(v.Zm, {});
        else if (S === f.PG.HOME_SETTINGS) return (0, s.jsx)(D.T, {});
    }
    let q = S === f.xh[f.xh.length - 1],
        X = async () => {
            let e = R.Z.advancedMode;
            if (G)
                try {
                    if (S === f.PG.DEFAULT_CHANNELS) await (0, g.DO)(t).then(() => (e ? (0, p.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve()));
                    else if (S === f.PG.CUSTOMIZATION_QUESTIONS) await (0, p.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (S === f.PG.HOME_SETTINGS) {
                        let e = x.Z.getSettings();
                        await (0, C.oo)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        },
        Q = async () => {
            m.default.track(j.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, E.hH)(i),
                step: f.PG[S],
                back: !1,
                skip: !G
            }),
                (0, h.Nb)((0, f.lg)(S)),
                (await X()) && (0, h.IG)(i, S);
        },
        J = async () => {
            m.default.track(j.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, E.hH)(i),
                step: f.PG[S],
                back: !0,
                skip: !1
            }),
                (await X()) && (0, h.Wy)(i, S);
        },
        $ = null;
    y && (S === f.PG.SAFETY_CHECK ? ($ = (0, s.jsx)(A.j7, {})) : S === f.PG.DEFAULT_CHANNELS ? ($ = (0, s.jsx)(A.Io, {})) : S === f.PG.CUSTOMIZATION_QUESTIONS ? ($ = (0, s.jsx)(A.cZ, {})) : S === f.PG.HOME_SETTINGS && ($ = (0, s.jsx)(A.g6, {})));
    let ee = (0, s.jsx)(_.Button, {
            className: r()(b.button, { [b.hidden]: y }),
            color: _.Button.Colors.PRIMARY,
            look: _.Button.Looks.OUTLINED,
            size: _.Button.Sizes.SMALL,
            onClick: J,
            disabled: y || B,
            children: (0, s.jsxs)('span', {
                className: b.button,
                children: [
                    (0, s.jsx)(T.Z, {
                        className: b.arrow,
                        direction: T.Z.Directions.LEFT
                    }),
                    Z.Z.Messages.BACK
                ]
            })
        }),
        et = (0, s.jsx)(_.Button, {
            className: b.button,
            color: P ? _.Button.Colors.BRAND : _.Button.Colors.PRIMARY,
            look: _.Button.Looks.FILLED,
            size: _.Button.Sizes.SMALL,
            onClick: Q,
            disabled: y || B,
            children: (0, s.jsxs)(l.animated.span, {
                className: b.button,
                style: { color: z },
                children: [
                    P ? Z.Z.Messages.NEXT : Z.Z.Messages.SKIP,
                    (0, s.jsx)(T.Z, {
                        className: b.arrow,
                        direction: T.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, s.jsx)(d.W, {
        component: 'div',
        children: (0, s.jsx)(_.SlideIn, {
            className: r()(b.noticeRegion),
            children: (0, s.jsx)(l.animated.div, {
                className: b.container,
                style: { backgroundColor: K },
                children: (0, s.jsxs)('div', {
                    className: b.flexContainer,
                    ref: k,
                    children: [
                        y
                            ? (0, s.jsxs)('div', {
                                  className: b.educationUpsellRoot,
                                  children: [
                                      (0, s.jsx)('img', {
                                          className: r()(b.wumpus),
                                          src: n(33631),
                                          alt: 'wumpus'
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: b.educationUpsell,
                                          children: [$, (0, s.jsx)('div', { className: b.educationUpsellArrow })]
                                      })
                                  ]
                              })
                            : null,
                        (0, s.jsx)(_.FocusRingScope, {
                            containerRef: k,
                            children: (0, s.jsxs)('div', {
                                className: b.actions,
                                children: [
                                    ee,
                                    (0, s.jsxs)('div', {
                                        className: b.next,
                                        children: [
                                            B
                                                ? (0, s.jsx)(_.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'status-warning',
                                                      children: Z.Z.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                                                  })
                                                : null,
                                            q ? null : et
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
