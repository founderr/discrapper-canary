n.d(t, {
    Z: function () {
        return H;
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
    b = n(411840),
    S = n(560688),
    y = n(88479),
    A = n(136995),
    N = n(25827),
    C = n(131951),
    R = n(594174),
    O = n(451478),
    D = n(358221),
    L = n(584511),
    x = n(793865),
    w = n(981631),
    P = n(65154),
    M = n(388032),
    k = n(622492),
    U = n(616926);
let B = {
        width: 232,
        height: 315
    },
    G = {
        width: 232,
        height: 267
    },
    Z = 475,
    F = 267;
function V(e) {
    let { header: t } = e,
        n = C.Z.getCameraComponent(),
        a = (0, l.e7)([C.Z], () => C.Z.getVideoDeviceId()),
        s = (0, v.Z)();
    return (
        i.useEffect(() => {
            let e = R.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, g.P)(e);
                (0, E.FU)(t, a, { track: !1 }).catch(w.dG4);
            }
        }, [s, a]),
        (0, r.jsxs)('div', {
            className: k.previewRoot,
            children: [
                (0, r.jsx)(u.Spinner, {}),
                (0, r.jsx)('div', {
                    className: k.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: Z,
                        height: F
                    })
                }),
                (0, r.jsx)('div', {
                    className: k.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function j(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { cameraUnavailable: a, enabled: o } = (0, I.Z)(),
        l = (0, T.Z)(n),
        { groupedButtons: d } = (0, b.Z)({ location: 'CallActionButtons' });
    return (0, r.jsxs)('div', {
        className: s()(k.wrapper, d ? k.experimentActions : k.actions),
        children: [
            (0, r.jsx)(y.Z, {
                iconComponent: u.XSmallIcon,
                label: M.intl.string(M.t.WAI6xs),
                className: k.actionButton,
                fullRegionButton: d,
                onClick: () => c.Z.stopRinging(n.id)
            }),
            t &&
                (0, r.jsx)(u.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(x.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: u.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: s } = e,
                            { isShown: u } = t;
                        return (0, r.jsx)(N.C, {
                            join: !0,
                            enabled: o,
                            className: k.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: a,
                            channel: n,
                            onPopoutClick: i > 1 ? s : null,
                            popoutOpen: u,
                            onCameraUnavailable: S.Z,
                            onChange: () => {
                                f.default.selectVoiceChannel(n.id, !0), (0, m.XU)(w.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(A.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: k.actionButton
            })
        ]
    });
}
function H(e) {
    let { animatedStyle: t, y: n, x: a, channel: f } = e,
        [m, g] = i.useState(!1),
        E = (0, p.x)(f),
        v = (0, h.ZP)(f),
        [I, T] = (0, l.Wu)([C.Z], () => [C.Z.supports(P.AN.VIDEO), Object.keys(C.Z.getVideoDevices()).length]),
        b = (0, l.e7)([O.Z], () => O.Z.isFocused()),
        S = (0, l.e7)([D.Z], () => D.Z.getMode(f.id)),
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
            e.keyCode === w.yXg.ESCAPE && c.Z.stopRinging(f.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [f]);
    let N = S === w.WtW.VIDEO && I && T > 0,
        R = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L.Z, {
                    className: k.icon,
                    ringing: b,
                    src: null != E ? E : '',
                    ringingType: L.Z.RingingType.INCOMING,
                    size: m ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: k.titleGroup,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: k.title,
                            color: 'header-primary',
                            variant: m ? 'text-md/semibold' : 'text-lg/semibold',
                            children: v
                        }),
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: k.subtitle,
                            variant: m ? 'text-sm/normal' : 'text-md/normal',
                            children: S === w.WtW.VOICE ? M.intl.string(M.t.Js8cKy) : M.intl.string(M.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        x = N ? B : G,
        H = (0, l.e7)([O.Z], () => O.Z.windowSize());
    return (0, r.jsx)(_.Z, {
        className: k.wrapper,
        selector: '.'.concat(k.root),
        initialPosition: {
            left: a,
            top: n
        },
        maxX: H.width,
        maxY: H.height,
        onDragEnd: y,
        dragAnywhere: !0,
        children: (0, r.jsx)(u.ThemeProvider, {
            theme: m ? w.BRd.DARK : void 0,
            children: (e) =>
                (0, r.jsxs)(o.animated.div, {
                    className: s()(k.root, U.elevationHigh, { [k.previewCamera]: m }, e),
                    style: {
                        ...t,
                        width: A.value.interpolate([0, 1], [x.width, Z]),
                        minHeight: A.value.interpolate([0, 1], [x.height, F]),
                        translateX: A.value.interpolate([0, 1], [0, (-1 * Math.abs(Z - x.width)) / 2])
                    },
                    children: [
                        m
                            ? (0, r.jsx)(V, { header: R })
                            : (0, r.jsx)('div', {
                                  className: k.mainChannelInfo,
                                  children: R
                              }),
                        (0, r.jsx)(j, {
                            canVideo: N,
                            channel: f,
                            numVideoDevices: T
                        }),
                        N && !m
                            ? (0, r.jsx)(u.Button, {
                                  size: u.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  className: k.previewButton,
                                  onClick: () => g(!0),
                                  children: M.intl.string(M.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
