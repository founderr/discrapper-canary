n.d(t, {
    m: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(613828),
    o = n(772848),
    c = n(442837),
    u = n(481060),
    d = n(2052),
    h = n(40851),
    m = n(607070),
    p = n(100527),
    _ = n(906732),
    f = n(210887),
    E = n(390322),
    g = n(626135),
    C = n(348600),
    I = n(566620),
    x = n(127255),
    T = n(5200),
    v = n(558317),
    S = n(403404),
    N = n(981631),
    A = n(689938),
    Z = n(57241),
    M = n(587952),
    b = n(736733);
let R = 'vc-activities-'.concat((0, o.Z)()),
    L = s.forwardRef(function (e, t) {
        let { channel: n, isHovered: a, closePopout: o, onMouseEnter: L, onMouseLeave: j, onClick: P, className: O } = e,
            { enabled: y } = C.Z.useExperiment({ location: '8009ca_3' }),
            D = (0, c.e7)([f.Z], () => f.Z.getState().theme),
            k = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            { id: U, guild_id: w } = n;
        s.useEffect(() => {
            g.default.track(N.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: U,
                guild_id: w
            });
        }, [U, w]),
            s.useEffect(() => {
                !a && o();
            }, [o, a]);
        let B = (0, h.bp)(),
            { analyticsLocations: H } = (0, _.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: G } = (0, _.ZP)([...H, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            V = B === N.IlC.POPOUT,
            F = (0, d.O)(),
            W = (function (e) {
                return (0, x.Z)({ guildId: e }).slice(0, 5);
            })(n.getGuildId());
        s.useEffect(() => {
            let e = setTimeout(() => I.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let z = s.useCallback(() => {
                var e;
                (0, S.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: F.location,
                    openInPopout: V,
                    analyticsLocations: H,
                    opensAppLauncherModal: !0
                }),
                    j(),
                    P();
            }, [F, H, n, P, j, V]),
            Y = s.useCallback(
                (e) => {
                    L(),
                        g.default.track(N.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: n.id,
                            guild_id: n.getGuildId()
                        });
                },
                [L, n]
            ),
            K = y
                ? (0, i.jsxs)(r.rU, {
                      to: N.Z5c.ACTIVITIES,
                      children: [
                          (0, i.jsx)('img', {
                              alt: A.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
                              src: 'light' === D ? M : b,
                              className: Z.poster
                          }),
                          (0, i.jsx)('div', { className: Z.posterDivider })
                      ]
                  })
                : null;
        return (0, i.jsx)(_.Gt, {
            value: H,
            children: (0, i.jsx)(E.Z, {
                children: (0, i.jsxs)(u.Dialog, {
                    ref: t,
                    'aria-labelledby': R,
                    className: O,
                    children: [
                        (0, i.jsx)(u.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(u.HiddenVisually, {
                                children: (0, i.jsx)(u.H, {
                                    id: R,
                                    children: A.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.container,
                            onMouseEnter: Y,
                            onMouseLeave: j,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: Z.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: Z.titleLeft,
                                            children: [
                                                (0, i.jsx)(u.ActivitiesIcon, {
                                                    size: 'md',
                                                    className: Z.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'eyebrow',
                                                    children: A.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(u.Clickable, {
                                            className: Z.titleRight,
                                            onClick: z,
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'eyebrow',
                                                    children: A.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                                                }),
                                                (0, i.jsx)(u.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    width: 12,
                                                    height: 12,
                                                    color: 'var(--interactive-active)',
                                                    className: Z.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(_.Gt, {
                                    value: G,
                                    children: K
                                }),
                                (0, i.jsxs)('div', {
                                    className: Z.activityContainer,
                                    children: [
                                        W.map((e) =>
                                            (0, i.jsx)(
                                                T.Y,
                                                {
                                                    channel: n,
                                                    activityItem: e,
                                                    onClick: () => {
                                                        o(), P();
                                                    },
                                                    aspectRatio: T.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: Z.activitySuggestion
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: l()(Z.wumpusRocketOuterContainer, { [Z.wumpusReducedMotion]: k }),
                                            children: (0, i.jsx)('div', {
                                                className: Z.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(v.Z, { className: Z.wumpusRocket })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    });
