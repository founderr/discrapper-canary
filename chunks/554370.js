n.d(t, {
    Z: function () {
        return en;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(952265),
    u = n(481060),
    d = n(239091),
    c = n(13245),
    h = n(100527),
    f = n(906732),
    p = n(146282),
    m = n(70097),
    v = n(567409),
    g = n(74299),
    E = n(199902),
    Z = n(592125),
    C = n(430824),
    x = n(131951),
    S = n(944486),
    I = n(574254),
    _ = n(556296),
    O = n(237997),
    N = n(451478),
    y = n(585483),
    T = n(358085),
    j = n(13140),
    b = n(145597),
    L = n(830917),
    R = n(86071),
    w = n(681603),
    k = n(915614),
    A = n(690336),
    M = n(388627),
    z = n(319414),
    D = n(561064),
    P = n(987650),
    V = n(501787),
    U = n(981631),
    W = n(206583),
    F = n(388032),
    H = n(668674);
let Y = !T.isPlatformEmbedded && !1,
    G = Y
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    B = null;
function K(e) {
    e.preventDefault();
}
function Q(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: V.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let X = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(u.Clickable, {
            className: r()(H.overlayBackground, {
                [H.overlayActive]: !l,
                [H.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: l
                ? null
                : (0, i.jsx)(k.Z, {
                      className: H.closeContainer,
                      keybind: t,
                      onClick: n,
                      IconComponent: u.XLargeIcon
                  })
        });
    }),
    J = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(k.Z, {
                  className: H.closeContainer,
                  onClick: () => c.Z.setInputLocked(!1, (0, b.QF)()),
                  IconComponent: u.LockUnlockedIcon
              })
            : null;
    });
function q() {
    if (null != I.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    c.Z.setInputLocked(!0, (0, b.QF)());
}
function $() {
    c.Z.setFocusedPID(b.Js);
}
function ee() {
    c.Z.setFocusedPID(null);
}
function et(e) {
    let t = O.Z.isLocked((0, b.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? y.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && y.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function en(e) {
    var t, n;
    let { isEmbeddedActivity: o } = e,
        d = (0, D.Z)(),
        {
            locked: m,
            focused: I,
            incompatibleApp: y,
            hasValidResolution: T,
            hasZeroSizeDimension: k,
            keybind: V
        } = (0, s.cj)([O.Z, N.Z, _.Z], () => {
            let e = N.Z.windowSize((0, L.ZY)(d)),
                t = _.Z.getOverlayKeybind();
            return {
                locked: O.Z.isLocked((0, b.QF)()),
                focused: O.Z.isFocused((0, b.QF)()),
                incompatibleApp: O.Z.incompatibleApp,
                hasValidResolution: (0, b.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, j.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: Q } = (0, f.ZP)(h.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = l.useRef({
                mount: e,
                unmount: t
            });
            l.useEffect(
                () =>
                    void (n.current = {
                        mount: e,
                        unmount: t
                    })
            ),
                l.useEffect(
                    () => (
                        n.current.mount(),
                        () => {
                            n.current.unmount();
                        }
                    ),
                    []
                );
        })(
            () => {
                c.Z.overlayReady((0, b.QF)()), d.addEventListener('keydown', et), d.addEventListener('keyup', et), Y && (d.document.hasFocus() && c.Z.setFocusedPID(b.Js), d.addEventListener('focus', $), d.addEventListener('blur', ee));
            },
            () => {
                d.removeEventListener('keydown', et), d.removeEventListener('keyup', et), Y && (d.removeEventListener('focus', $), d.removeEventListener('blur', ee));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, M.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(n),
                o = null != i ? C.Z.getGuild(i.guild_id) : null,
                r = null != E.Z.getCurrentUserActiveStream(),
                a = null != n,
                u = (0, g.Z)(x.Z) && !r && null != t,
                d = a && null != o && null != n,
                h = (0, v.Ns)(null == t ? void 0 : t.id),
                f = (0, s.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(W.YN.GAME_PROFILE_FEED));
            l.useEffect(() => {
                if (!f || e.current) return;
                (e.current = !0),
                    c.Z.track(U.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: !1
                    });
                let i = [{ type: P.nc.WELCOME }];
                if (
                    (u && d
                        ? i.push({
                              type: P.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: o
                          })
                        : u &&
                          i.push({
                              type: P.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    h.length > 0)
                ) {
                    let { enabled: e } = R.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        i.push({
                            type: P.nc.CONTENT_INVENTORY,
                            entries: h
                        });
                }
                c.Z.overlayMounted(...i);
            }, [f, h, a, u, d, t, n, o]);
        })(),
        (t = m),
        (n = d),
        l.useEffect(() => {
            if (t) {
                if (((0, a.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', K, !1), null != B)) {
                    let e = Date.now() - B;
                    c.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (B = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', K, !1);
                };
            }
            n.removeEventListener('contextmenu', K, !1), null == B && ((B = Date.now()), c.Z.track(U.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(f.Gt, {
            value: Q,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
                children:
                    k || y
                        ? null
                        : (0, i.jsx)(u.ThemeProvider, {
                              theme: U.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: r()(H.overlay, e),
                                      children: [
                                          !o && G,
                                          (0, i.jsx)(X, {
                                              locked: m,
                                              keybind: V,
                                              onClick: q
                                          }),
                                          T
                                              ? (0, i.jsx)(A.Z, {
                                                    className: r()({
                                                        [H.layoutLocked]: m,
                                                        [H.layoutUnlocked]: !m
                                                    })
                                                })
                                              : m
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: H.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: H.inactiveContainer,
                                                          children: F.intl.format(F.t.ketnW1, b.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(z.Z, {}),
                                          !o &&
                                              Y &&
                                              (0, i.jsx)(J, {
                                                  locked: m,
                                                  focused: I
                                              }),
                                          (0, i.jsx)(w.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
