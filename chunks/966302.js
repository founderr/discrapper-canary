n.d(t, {
    Z: function () {
        return Y;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(442837),
    c = n(481060),
    d = n(26151),
    _ = n(922555),
    E = n(287734),
    f = n(249000),
    h = n(43267),
    p = n(933557),
    m = n(703656),
    I = n(932724),
    T = n(672339),
    g = n(898531),
    S = n(923973),
    A = n(189771),
    v = n(560688),
    N = n(871499),
    O = n(136995),
    R = n(25827),
    C = n(131951),
    y = n(594174),
    L = n(451478),
    b = n(358221),
    D = n(584511),
    M = n(793865),
    P = n(981631),
    U = n(65154),
    w = n(689938),
    x = n(888582),
    G = n(852401);
let k = {
        width: 232,
        height: 315
    },
    B = {
        width: 232,
        height: 267
    },
    F = 475,
    Z = 267;
function V(e) {
    let { header: t } = e,
        n = C.Z.getCameraComponent(),
        r = (0, u.e7)([C.Z], () => C.Z.getVideoDeviceId()),
        o = (0, g.Z)();
    return (
        a.useEffect(() => {
            let e = y.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, I.P)(e);
                (0, T.FU)(t, r, { track: !1 }).catch(P.dG4);
            }
        }, [o, r]),
        (0, i.jsxs)('div', {
            className: x.previewRoot,
            children: [
                (0, i.jsx)(c.Spinner, {}),
                (0, i.jsx)('div', {
                    className: x.preview,
                    children: (0, i.jsx)(n, {
                        disabled: !1,
                        deviceId: r,
                        width: F,
                        height: Z
                    })
                }),
                (0, i.jsx)('div', {
                    className: x.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function H(e) {
    let { canVideo: t, channel: n, numVideoDevices: r } = e,
        { cameraUnavailable: a, enabled: o } = (0, S.Z)(),
        l = (0, A.Z)(n);
    return (0, i.jsxs)('div', {
        className: x.actions,
        children: [
            (0, i.jsx)(N.d, {
                iconComponent: c.XSmallIcon,
                color: 'red',
                className: x.actionButton,
                label: w.Z.Messages.DISMISS,
                onClick: () => d.Z.stopRinging(n.id)
            }),
            t &&
                (0, i.jsx)(c.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(M.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: s } = e,
                            { isShown: u } = t;
                        return (0, i.jsx)(R.C, {
                            join: !0,
                            enabled: o,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: a,
                            channel: n,
                            onPopoutClick: r > 1 ? s : null,
                            className: x.actionButton,
                            popoutOpen: u,
                            onCameraUnavailable: v.Z,
                            onChange: () => {
                                E.default.selectVoiceChannel(n.id, !0), (0, m.XU)(P.ME, n.id);
                            }
                        });
                    }
                }),
            (0, i.jsx)(O.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: s()(x.actionButton, x.last)
            })
        ]
    });
}
function Y(e) {
    let { animatedStyle: t, y: n, x: r, channel: o } = e,
        [E, m] = a.useState(!1),
        I = (0, h.x)(o),
        T = (0, p.ZP)(o),
        [g, S] = (0, u.Wu)([C.Z], () => [C.Z.supports(U.AN.VIDEO), Object.keys(C.Z.getVideoDevices()).length]),
        A = (0, u.e7)([L.Z], () => L.Z.isFocused()),
        v = (0, u.e7)([b.Z], () => b.Z.getMode(o.id)),
        N = a.useCallback((e) => {
            null != e.top && null != e.left && _.Z.move(e.left, e.top);
        }, []),
        O = (0, c.useSpring)(
            {
                value: E ? 1 : 0,
                config: {
                    ...l.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    a.useEffect(() => {
        let e = (e) => {
            e.keyCode === P.yXg.ESCAPE && d.Z.stopRinging(o.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [o]);
    let R = v === P.WtW.VIDEO && g && S > 0,
        y = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(D.Z, {
                    className: x.icon,
                    ringing: A,
                    src: null != I ? I : '',
                    ringingType: D.Z.RingingType.INCOMING,
                    size: E ? c.AvatarSizes.SIZE_40 : c.AvatarSizes.SIZE_80
                }),
                (0, i.jsxs)('div', {
                    className: x.titleGroup,
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: x.title,
                            color: 'header-primary',
                            variant: E ? 'text-md/semibold' : 'text-lg/semibold',
                            children: T
                        }),
                        (0, i.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: x.subtitle,
                            variant: E ? 'text-sm/normal' : 'text-md/normal',
                            children: v === P.WtW.VOICE ? w.Z.Messages.INCOMING_CALL_ELLIPSIS : w.Z.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
                        })
                    ]
                })
            ]
        }),
        M = R ? k : B,
        Y = (0, u.e7)([L.Z], () => L.Z.windowSize());
    return (0, i.jsx)(f.Z, {
        className: x.wrapper,
        selector: '.'.concat(x.root),
        initialPosition: {
            left: r,
            top: n
        },
        maxX: Y.width,
        maxY: Y.height,
        onDragEnd: N,
        dragAnywhere: !0,
        children: (0, i.jsx)(c.ThemeProvider, {
            theme: E ? P.BRd.DARK : void 0,
            children: (e) =>
                (0, i.jsxs)(l.animated.div, {
                    className: s()(x.root, G.elevationHigh, { [x.previewCamera]: E }, e),
                    style: {
                        ...t,
                        width: O.value.interpolate([0, 1], [M.width, F]),
                        minHeight: O.value.interpolate([0, 1], [M.height, Z]),
                        translateX: O.value.interpolate([0, 1], [0, (-1 * Math.abs(F - M.width)) / 2])
                    },
                    children: [
                        E
                            ? (0, i.jsx)(V, { header: y })
                            : (0, i.jsx)('div', {
                                  className: x.mainChannelInfo,
                                  children: y
                              }),
                        (0, i.jsx)(H, {
                            canVideo: R,
                            channel: o,
                            numVideoDevices: S
                        }),
                        R && !E
                            ? (0, i.jsx)(c.Button, {
                                  size: c.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: c.Button.Looks.LINK,
                                  color: c.Button.Colors.PRIMARY,
                                  className: x.previewButton,
                                  onClick: () => m(!0),
                                  children: w.Z.Messages.INCOMING_CALL_PREVIEW_CAMERA
                              })
                            : null
                    ]
                })
        })
    });
}
