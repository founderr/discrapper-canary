n.d(t, {
    M: function () {
        return N;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(704215),
    a = n(481060),
    o = n(2052),
    c = n(40851),
    u = n(317381),
    d = n(683921),
    h = n(588580),
    m = n(374065),
    p = n(451576),
    f = n(526846),
    g = n(119315),
    C = n(403404),
    x = n(906732),
    v = n(424602),
    _ = n(243778),
    I = n(579185),
    E = n(301076),
    b = n(981631),
    S = n(921944),
    Z = n(388032),
    T = n(892216);
function N(e) {
    let { channel: t, idle: n } = e,
        N = (0, r.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        j = (0, m.KF)(t.id),
        A = (0, m.g5)(j),
        y = j !== m.jy.CAN_LAUNCH || N,
        { isHovered: P, setIsHovered: M, onMouseEnter: R, onMouseLeave: L } = (0, I.Z)(200, 300),
        k = (0, h.a)(),
        O = (0, d.Z)({ channelId: t.id }),
        w = !y,
        D = l.useCallback(
            (e) => {
                'focus' !== e.type && R();
            },
            [R]
        ),
        U = (0, o.O)(),
        B = (0, c.bp)() === b.IlC.POPOUT,
        { analyticsLocations: H } = (0, x.ZP)(),
        F = H.length > 0 ? H[H.length - 1] : 'open-activity-shelf';
    v.m1.useExperiment({ location: F }, { autoTrackExposure: !0 });
    let G = l.useCallback(() => {
            (0, C.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: U.location,
                openInPopout: B,
                analyticsLocations: H,
                opensAppLauncherModal: !0
            });
        }, [U.location, H, t, B]),
        V = [];
    !y && V.push(s.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, p.Z)(t.id) && !y && V.push(s.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: z } = v.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    z && !y && V.push(s.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let W = l.useRef(!1);
    return (0, i.jsx)(_.ZP, {
        contentTypes: V,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: r } = e,
                o = l === s.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !P;
            return (
                !0 === W.current && !1 === o && r(S.L.AUTO_DISMISS),
                W.current !== o && (W.current = o),
                (0, i.jsx)(a.Popout, {
                    fixed: !0,
                    shouldShow: P,
                    animationPosition: 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        M(!1);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return w
                            ? (0, i.jsx)(f.m, {
                                  ref: l,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: R,
                                  onMouseLeave: L,
                                  isHovered: P,
                                  onClick: () => r(S.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.Tooltip, {
                                    text: Z.intl.string(Z.t.P8vmUl),
                                    color: a.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(E.Z, {
                                                disabled: y,
                                                'aria-label': A,
                                                label: w ? void 0 : A,
                                                isActivityActive: O || P,
                                                className: T.controlButton,
                                                onClick: () => {
                                                    G(), (l === s.z.ACTIVITIES_MINI_SHELF_SPARKLES || l === s.z.ACTIVITY_GDM_ROCKET_SPARKLE || l === s.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === s.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === s.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && r(S.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: D,
                                                onMouseLeave: L
                                            })
                                        })
                                }),
                                k
                                    ? (0, i.jsx)(g.r, {
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
