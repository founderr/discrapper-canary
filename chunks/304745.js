n.d(t, {
    M: function () {
        return j;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(2052),
    c = n(40851),
    d = n(317381),
    u = n(683921),
    h = n(588580),
    p = n(374065),
    m = n(451576),
    f = n(526846),
    g = n(119315),
    C = n(403404),
    x = n(906732),
    v = n(424602),
    _ = n(243778),
    I = n(579185),
    E = n(301076),
    b = n(411840),
    Z = n(981631),
    N = n(921944),
    S = n(388032),
    T = n(812801);
function j(e) {
    let { channel: t, idle: n } = e,
        j = (0, r.e7)([d.ZP], () => d.ZP.isLaunchingActivity()),
        A = (0, p.KF)(t.id),
        y = (0, p.g5)(A),
        P = A !== p.jy.CAN_LAUNCH || j,
        { isHovered: M, setIsHovered: R, onMouseEnter: L, onMouseLeave: k } = (0, I.Z)(200, 300),
        { groupedButtons: O } = (0, b.Z)({ location: 'CenterControlTrayActivityButton' }),
        D = (0, h.a)(),
        w = (0, u.Z)({ channelId: t.id }),
        B = !P,
        U = l.useCallback(
            (e) => {
                'focus' !== e.type && L();
            },
            [L]
        ),
        H = (0, o.O)(),
        G = (0, c.bp)() === Z.IlC.POPOUT,
        { analyticsLocations: F } = (0, x.ZP)(),
        V = F.length > 0 ? F[F.length - 1] : 'open-activity-shelf';
    v.m1.useExperiment({ location: V }, { autoTrackExposure: !0 });
    let z = l.useCallback(() => {
            (0, C.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: H.location,
                openInPopout: G,
                analyticsLocations: F,
                opensAppLauncherModal: !0
            });
        }, [H.location, F, t, G]),
        W = [];
    !P && W.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !P && W.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: K } = v.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    K && !P && W.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let Y = l.useRef(!1);
    return (0, i.jsx)(_.ZP, {
        contentTypes: W,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: r } = e,
                o = l === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !M;
            return (
                !0 === Y.current && !1 === o && r(N.L.AUTO_DISMISS),
                Y.current !== o && (Y.current = o),
                (0, i.jsx)(s.Popout, {
                    fixed: !0,
                    shouldShow: M,
                    animationPosition: 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        R(!1);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return B
                            ? (0, i.jsx)(f.m, {
                                  ref: l,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: L,
                                  onMouseLeave: k,
                                  isHovered: M,
                                  onClick: () => r(N.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.Tooltip, {
                                    text: S.intl.string(S.t.P8vmUl),
                                    color: s.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(E.Z, {
                                                disabled: P,
                                                'aria-label': y,
                                                label: B ? void 0 : y,
                                                isActivityActive: w || M,
                                                className: O ? '' : T.controlButton,
                                                onClick: () => {
                                                    z(), (l === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || l === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || l === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && r(N.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: U,
                                                onMouseLeave: k
                                            })
                                        })
                                }),
                                D
                                    ? O
                                        ? (0, i.jsx)(g.r, {
                                              top: 0,
                                              right: 0,
                                              size: 6,
                                              maskColor: g.T.BLACK
                                          })
                                        : (0, i.jsx)(g.r, {
                                              top: 4,
                                              right: 10,
                                              size: 12,
                                              maskColor: g.T.BLACK
                                          })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
