n.d(t, {
    M: function () {
        return T;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
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
    b = n(981631),
    Z = n(921944),
    N = n(388032),
    S = n(313439);
function T(e) {
    let { channel: t, idle: n } = e,
        T = (0, a.e7)([d.ZP], () => d.ZP.isLaunchingActivity()),
        j = (0, p.KF)(t.id),
        A = (0, p.g5)(j),
        y = j !== p.jy.CAN_LAUNCH || T,
        { isHovered: P, setIsHovered: M, onMouseEnter: R, onMouseLeave: L } = (0, I.Z)(200, 300),
        k = (0, h.a)(),
        O = (0, u.Z)({ channelId: t.id }),
        D = !y,
        w = l.useCallback(
            (e) => {
                'focus' !== e.type && R();
            },
            [R]
        ),
        B = (0, o.O)(),
        U = (0, c.bp)() === b.IlC.POPOUT,
        { analyticsLocations: H } = (0, x.ZP)(),
        G = H.length > 0 ? H[H.length - 1] : 'open-activity-shelf';
    v.m1.useExperiment({ location: G }, { autoTrackExposure: !0 });
    let F = l.useCallback(() => {
            (0, C.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: B.location,
                openInPopout: U,
                analyticsLocations: H,
                opensAppLauncherModal: !0
            });
        }, [B.location, H, t, U]),
        V = [];
    !y && V.push(r.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !y && V.push(r.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: z } = v.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    z && !y && V.push(r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let W = l.useRef(!1);
    return (0, i.jsx)(_.ZP, {
        contentTypes: V,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e,
                o = l === r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !P;
            return (
                !0 === W.current && !1 === o && a(Z.L.AUTO_DISMISS),
                W.current !== o && (W.current = o),
                (0, i.jsx)(s.Popout, {
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
                        return D
                            ? (0, i.jsx)(f.m, {
                                  ref: l,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: R,
                                  onMouseLeave: L,
                                  isHovered: P,
                                  onClick: () => a(Z.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.Tooltip, {
                                    text: N.intl.string(N.t.P8vmUl),
                                    color: s.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(E.Z, {
                                                disabled: y,
                                                'aria-label': A,
                                                label: D ? void 0 : A,
                                                isActivityActive: O || P,
                                                className: S.controlButton,
                                                onClick: () => {
                                                    F(), (l === r.z.ACTIVITIES_MINI_SHELF_SPARKLES || l === r.z.ACTIVITY_GDM_ROCKET_SPARKLE || l === r.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === r.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === r.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && a(Z.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: w,
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
