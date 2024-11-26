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
    o = n(752877),
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
    I = n(923973),
    T = n(189771),
    b = n(560688),
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
    P = n(388032),
    M = n(622492),
    k = n(616926);
let U = {
        width: 232,
        height: 315
    },
    B = {
        width: 232,
        height: 267
    },
    G = 475,
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
            className: M.previewRoot,
            children: [
                (0, r.jsx)(u.Spinner, {}),
                (0, r.jsx)('div', {
                    className: M.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: G,
                        height: Z
                    })
                }),
                (0, r.jsx)('div', {
                    className: M.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function V(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { cameraUnavailable: a, enabled: o } = (0, I.Z)(),
        l = (0, T.Z)(n);
    return (0, r.jsxs)('div', {
        className: M.actions,
        children: [
            (0, r.jsx)(S.d, {
                iconComponent: u.XSmallIcon,
                color: 'red',
                className: M.actionButton,
                label: P.intl.string(P.t.WAI6xs),
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
                            className: M.actionButton,
                            popoutOpen: u,
                            onCameraUnavailable: b.Z,
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
                className: s()(M.actionButton, M.last)
            })
        ]
    });
}
function j(e) {
    let { animatedStyle: t, y: n, x: a, channel: f } = e,
        [m, g] = i.useState(!1),
        E = (0, p.x)(f),
        v = (0, h.ZP)(f),
        [I, T] = (0, l.Wu)([N.Z], () => [N.Z.supports(w.AN.VIDEO), Object.keys(N.Z.getVideoDevices()).length]),
        b = (0, l.e7)([R.Z], () => R.Z.isFocused()),
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
    let C = S === x.WtW.VIDEO && I && T > 0,
        L = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    className: M.icon,
                    ringing: b,
                    src: null != E ? E : '',
                    ringingType: D.Z.RingingType.INCOMING,
                    size: m ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: M.titleGroup,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: M.title,
                            color: 'header-primary',
                            variant: m ? 'text-md/semibold' : 'text-lg/semibold',
                            children: v
                        }),
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: M.subtitle,
                            variant: m ? 'text-sm/normal' : 'text-md/normal',
                            children: S === x.WtW.VOICE ? P.intl.string(P.t.Js8cKy) : P.intl.string(P.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        j = C ? U : B,
        H = (0, l.e7)([R.Z], () => R.Z.windowSize());
    return (0, r.jsx)(_.Z, {
        className: M.wrapper,
        selector: '.'.concat(M.root),
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
                    className: s()(M.root, k.elevationHigh, { [M.previewCamera]: m }, e),
                    style: {
                        ...t,
                        width: A.value.interpolate([0, 1], [j.width, G]),
                        minHeight: A.value.interpolate([0, 1], [j.height, Z]),
                        translateX: A.value.interpolate([0, 1], [0, (-1 * Math.abs(G - j.width)) / 2])
                    },
                    children: [
                        m
                            ? (0, r.jsx)(F, { header: L })
                            : (0, r.jsx)('div', {
                                  className: M.mainChannelInfo,
                                  children: L
                              }),
                        (0, r.jsx)(V, {
                            canVideo: C,
                            channel: f,
                            numVideoDevices: T
                        }),
                        C && !m
                            ? (0, r.jsx)(u.Button, {
                                  size: u.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  className: M.previewButton,
                                  onClick: () => g(!0),
                                  children: P.intl.string(P.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
