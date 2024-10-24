n.d(t, {
    M: function () {
        return Z;
    }
}),
    n(653041);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(704215),
    r = n(481060),
    o = n(2052),
    c = n(40851),
    u = n(317381),
    d = n(683921),
    h = n(588580),
    p = n(374065),
    m = n(451576),
    _ = n(526846),
    f = n(119315),
    E = n(403404),
    g = n(906732),
    C = n(424602),
    I = n(243778),
    T = n(579185),
    x = n(301076),
    S = n(981631),
    v = n(921944),
    N = n(689938),
    A = n(892216);
function Z(e) {
    let { channel: t, idle: n } = e,
        Z = (0, a.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        M = (0, p.KF)(t.id),
        b = (0, p.g5)(M),
        R = M !== p.jy.CAN_LAUNCH || Z,
        { isHovered: L, setIsHovered: P, onMouseEnter: j, onMouseLeave: O } = (0, T.Z)(200, 300),
        y = (0, h.a)(),
        D = (0, d.Z)({ channelId: t.id }),
        U = !R,
        k = s.useCallback(
            (e) => {
                'focus' !== e.type && j();
            },
            [j]
        ),
        w = (0, o.O)(),
        B = (0, c.bp)() === S.IlC.POPOUT,
        { analyticsLocations: H } = (0, g.ZP)(),
        G = H.length > 0 ? H[H.length - 1] : 'open-activity-shelf';
    C.m1.useExperiment({ location: G }, { autoTrackExposure: !0 });
    let V = s.useCallback(() => {
            (0, E.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: w.location,
                openInPopout: B,
                analyticsLocations: H,
                opensAppLauncherModal: !0
            });
        }, [w.location, H, t, B]),
        F = [];
    !R && F.push(l.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.Z)(t.id) && !R && F.push(l.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: W } = C.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    W && !R && F.push(l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = s.useRef(!1);
    return (0, i.jsx)(I.ZP, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e,
                o = s === l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !L;
            return (
                !0 === z.current && !1 === o && a(v.L.AUTO_DISMISS),
                z.current !== o && (z.current = o),
                (0, i.jsx)(r.Popout, {
                    fixed: !0,
                    shouldShow: L,
                    animationPosition: 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        P(!1);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: s } = e;
                        return U
                            ? (0, i.jsx)(_.m, {
                                  ref: s,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: j,
                                  onMouseLeave: O,
                                  isHovered: L,
                                  onClick: () => a(v.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.Tooltip, {
                                    text: N.Z.Messages.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP,
                                    color: r.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(x.Z, {
                                                disabled: R,
                                                'aria-label': b,
                                                label: U ? void 0 : b,
                                                isActivityActive: D || L,
                                                className: A.controlButton,
                                                onClick: () => {
                                                    V(), (s === l.z.ACTIVITIES_MINI_SHELF_SPARKLES || s === l.z.ACTIVITY_GDM_ROCKET_SPARKLE || s === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || s === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || s === l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && a(v.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: k,
                                                onMouseLeave: O
                                            })
                                        })
                                }),
                                y
                                    ? (0, i.jsx)(f.r, {
                                          top: 4,
                                          right: 10,
                                          size: 12,
                                          maskColor: f.T.BLACK
                                      })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
