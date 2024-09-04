n.d(t, {
    M: function () {
        return A;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(442837),
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
    C = n(906732),
    g = n(424602),
    I = n(243778),
    x = n(579185),
    T = n(301076),
    N = n(981631),
    S = n(921944),
    v = n(689938),
    Z = n(177480);
function A(e) {
    let { channel: t, idle: n } = e,
        A = (0, s.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        M = (0, p.KF)(t.id),
        b = (0, p.g5)(M),
        R = M !== p.jy.CAN_LAUNCH || A,
        { isHovered: L, setIsHovered: j, onMouseEnter: O, onMouseLeave: P } = (0, x.Z)(200, 300),
        y = (0, h.a)(),
        D = (0, d.Z)({ channelId: t.id }),
        k = !R,
        U = a.useCallback(
            (e) => {
                'focus' !== e.type && O();
            },
            [O]
        ),
        w = (0, o.O)(),
        B = (0, c.bp)() === N.IlC.POPOUT,
        { analyticsLocations: H } = (0, C.ZP)(),
        G = H.length > 0 ? H[H.length - 1] : 'open-activity-shelf';
    g.m1.useExperiment({ location: G }, { autoTrackExposure: !0 });
    let V = a.useCallback(() => {
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
    let { enabled: W } = g.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    W && !R && F.push(l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = a.useRef(!1);
    return (0, i.jsx)(I.ZP, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: s } = e,
                o = a === l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !L;
            return (
                !0 === z.current && !1 === o && s(S.L.AUTO_DISMISS),
                z.current !== o && (z.current = o),
                (0, i.jsx)(r.Popout, {
                    fixed: !0,
                    shouldShow: L,
                    animationPosition: 'bottom',
                    position: 'bottom',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        j(!1);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: a } = e;
                        return k
                            ? (0, i.jsx)(_.m, {
                                  ref: a,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: O,
                                  onMouseLeave: P,
                                  isHovered: L,
                                  onClick: () => s(S.L.UNKNOWN)
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.Tooltip, {
                                    text: v.Z.Messages.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP,
                                    color: r.TooltipColors.BRAND,
                                    forceOpen: !0,
                                    shouldShow: o,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(T.Z, {
                                                disabled: R,
                                                'aria-label': b,
                                                label: k ? void 0 : b,
                                                isActivityActive: D || L,
                                                className: Z.controlButton,
                                                onClick: () => {
                                                    V(), (a === l.z.ACTIVITIES_MINI_SHELF_SPARKLES || a === l.z.ACTIVITY_GDM_ROCKET_SPARKLE || a === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || a === l.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || a === l.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && s(S.L.TAKE_ACTION);
                                                },
                                                onMouseEnter: U,
                                                onMouseLeave: P
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
