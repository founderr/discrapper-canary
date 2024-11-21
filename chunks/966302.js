n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(442837),
    u = n(481060),
    c = n(26151),
    d = n(922555),
    f = n(287734),
    _ = n(249000),
    p = n(43267),
    h = n(933557),
    m = n(703656),
    g = n(932724),
    E = n(672339),
    v = n(898531),
    b = n(923973),
    I = n(189771),
    T = n(560688),
    S = n(871499),
    y = n(136995),
    A = n(25827),
    N = n(131951),
    C = n(594174),
    R = n(451478),
    O = n(358221),
    D = n(584511),
    L = n(793865),
    x = n(981631),
    w = n(65154),
    M = n(388032),
    P = n(888582),
    k = n(852401);
let U = {
        width: 232,
        height: 315
    },
    G = {
        width: 232,
        height: 267
    },
    B = 475,
    Z = 267;
function F(e) {
    let { header: t } = e,
        n = N.Z.getCameraComponent(),
        a = (0, l.e7)([N.Z], () => N.Z.getVideoDeviceId()),
        s = (0, v.Z)();
    return (
        i.useEffect(() => {
            let e = C.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, g.P)(e);
                (0, E.FU)(t, a, { track: !1 }).catch(x.dG4);
            }
        }, [s, a]),
        (0, r.jsxs)('div', {
            className: P.previewRoot,
            children: [
                (0, r.jsx)(u.Spinner, {}),
                (0, r.jsx)('div', {
                    className: P.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: B,
                        height: Z
                    })
                }),
                (0, r.jsx)('div', {
                    className: P.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function V(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { cameraUnavailable: a, enabled: o } = (0, b.Z)(),
        l = (0, I.Z)(n);
    return (0, r.jsxs)('div', {
        className: P.actions,
        children: [
            (0, r.jsx)(S.d, {
                iconComponent: u.XSmallIcon,
                color: 'red',
                className: P.actionButton,
                label: M.intl.string(M.t.WAI6xs),
                onClick: () => c.Z.stopRinging(n.id)
            }),
            t &&
                (0, r.jsx)(u.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(L.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: u.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: s } = e,
                            { isShown: u } = t;
                        return (0, r.jsx)(A.C, {
                            join: !0,
                            enabled: o,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: a,
                            channel: n,
                            onPopoutClick: i > 1 ? s : null,
                            className: P.actionButton,
                            popoutOpen: u,
                            onCameraUnavailable: T.Z,
                            onChange: () => {
                                f.default.selectVoiceChannel(n.id, !0), (0, m.XU)(x.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(y.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: s()(P.actionButton, P.last)
            })
        ]
    });
}
function j(e) {
    let { animatedStyle: t, y: n, x: a, channel: f } = e,
        [m, g] = i.useState(!1),
        E = (0, p.x)(f),
        v = (0, h.ZP)(f),
        [b, I] = (0, l.Wu)([N.Z], () => [N.Z.supports(w.AN.VIDEO), Object.keys(N.Z.getVideoDevices()).length]),
        T = (0, l.e7)([R.Z], () => R.Z.isFocused()),
        S = (0, l.e7)([O.Z], () => O.Z.getMode(f.id)),
        y = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        A = (0, u.useSpring)(
            {
                value: m ? 1 : 0,
                config: {
                    ...o.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === x.yXg.ESCAPE && c.Z.stopRinging(f.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [f]);
    let C = S === x.WtW.VIDEO && b && I > 0,
        L = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    className: P.icon,
                    ringing: T,
                    src: null != E ? E : '',
                    ringingType: D.Z.RingingType.INCOMING,
                    size: m ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: P.titleGroup,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: P.title,
                            color: 'header-primary',
                            variant: m ? 'text-md/semibold' : 'text-lg/semibold',
                            children: v
                        }),
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: P.subtitle,
                            variant: m ? 'text-sm/normal' : 'text-md/normal',
                            children: S === x.WtW.VOICE ? M.intl.string(M.t.Js8cKy) : M.intl.string(M.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        j = C ? U : G,
        H = (0, l.e7)([R.Z], () => R.Z.windowSize());
    return (0, r.jsx)(_.Z, {
        className: P.wrapper,
        selector: '.'.concat(P.root),
        initialPosition: {
            left: a,
            top: n
        },
        maxX: H.width,
        maxY: H.height,
        onDragEnd: y,
        dragAnywhere: !0,
        children: (0, r.jsx)(u.ThemeProvider, {
            theme: m ? x.BRd.DARK : void 0,
            children: (e) =>
                (0, r.jsxs)(o.animated.div, {
                    className: s()(P.root, k.elevationHigh, { [P.previewCamera]: m }, e),
                    style: {
                        ...t,
                        width: A.value.interpolate([0, 1], [j.width, B]),
                        minHeight: A.value.interpolate([0, 1], [j.height, Z]),
                        translateX: A.value.interpolate([0, 1], [0, (-1 * Math.abs(B - j.width)) / 2])
                    },
                    children: [
                        m
                            ? (0, r.jsx)(F, { header: L })
                            : (0, r.jsx)('div', {
                                  className: P.mainChannelInfo,
                                  children: L
                              }),
                        (0, r.jsx)(V, {
                            canVideo: C,
                            channel: f,
                            numVideoDevices: I
                        }),
                        C && !m
                            ? (0, r.jsx)(u.Button, {
                                  size: u.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  className: P.previewButton,
                                  onClick: () => g(!0),
                                  children: M.intl.string(M.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
