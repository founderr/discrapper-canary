n.d(t, {
    Z: function () {
        return en;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(952265),
    u = n(481060),
    c = n(239091),
    d = n(13245),
    h = n(100527),
    f = n(906732),
    p = n(146282),
    m = n(70097),
    v = n(567409),
    g = n(74299),
    E = n(199902),
    _ = n(592125),
    C = n(430824),
    S = n(131951),
    Z = n(944486),
    I = n(574254),
    x = n(556296),
    N = n(237997),
    O = n(451478),
    T = n(585483),
    y = n(358085),
    b = n(13140),
    A = n(145597),
    L = n(830917),
    R = n(86071),
    k = n(681603),
    M = n(915614),
    w = n(690336),
    P = n(388627),
    j = n(319414),
    D = n(561064),
    z = n(987650),
    U = n(501787),
    V = n(981631),
    G = n(206583),
    W = n(388032),
    F = n(936925);
let B = !y.isPlatformEmbedded && !1,
    H = B
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: F.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    Y = null;
function K(e) {
    e.preventDefault();
}
function Q(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: U.$S,
                version: 1
            });
    });
}
let X = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(u.Clickable, {
            className: o()(F.overlayBackground, {
                [F.overlayActive]: !l,
                [F.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === V.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: l
                ? null
                : (0, i.jsx)(M.Z, {
                      className: F.closeContainer,
                      keybind: t,
                      onClick: n,
                      IconComponent: u.XLargeIcon
                  })
        });
    }),
    J = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: F.closeContainer,
                  onClick: () => d.Z.setInputLocked(!1, (0, A.QF)()),
                  IconComponent: u.LockUnlockedIcon
              })
            : null;
    });
function q() {
    if (null != I.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, A.QF)());
}
function $() {
    d.Z.setFocusedPID(A.Js);
}
function ee() {
    d.Z.setFocusedPID(null);
}
function et(e) {
    let t = N.Z.isLocked((0, A.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function en() {
    var e, t;
    let n = (0, D.Z)(),
        {
            locked: r,
            focused: c,
            incompatibleApp: m,
            hasValidResolution: I,
            hasZeroSizeDimension: T,
            keybind: y
        } = (0, a.cj)([N.Z, O.Z, x.Z], () => {
            let e = O.Z.windowSize((0, L.ZY)(n)),
                t = x.Z.getOverlayKeybind();
            return {
                locked: N.Z.isLocked((0, A.QF)()),
                focused: N.Z.isFocused((0, A.QF)()),
                incompatibleApp: N.Z.incompatibleApp,
                hasValidResolution: (0, A.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, b.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: M } = (0, f.ZP)(h.Z.OVERLAY);
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
                d.Z.overlayReady((0, A.QF)()), n.addEventListener('keydown', et), n.addEventListener('keyup', et), B && (n.document.hasFocus() && d.Z.setFocusedPID(A.Js), n.addEventListener('focus', $), n.addEventListener('blur', ee));
            },
            () => {
                n.removeEventListener('keydown', et), n.removeEventListener('keyup', et), B && (n.removeEventListener('focus', $), n.removeEventListener('blur', ee));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, P.pL)(),
                n = Z.Z.getVoiceChannelId(),
                i = _.Z.getChannel(n),
                r = null != i ? C.Z.getGuild(i.guild_id) : null,
                o = null != E.Z.getCurrentUserActiveStream(),
                s = null != n,
                u = (0, g.Z)(S.Z) && !o && null != t,
                c = s && null != r && null != n,
                h = (0, v.Ns)(null == t ? void 0 : t.id),
                f = (0, a.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(G.YN.GAME_PROFILE_FEED));
            l.useEffect(() => {
                if (!f || e.current) return;
                (e.current = !0),
                    d.Z.track(V.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1
                    });
                let i = [{ type: z.nc.WELCOME }];
                if (
                    (u && c
                        ? i.push({
                              type: z.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : u &&
                          i.push({
                              type: z.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    h.length > 0)
                ) {
                    let { enabled: e } = R.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        i.push({
                            type: z.nc.CONTENT_INVENTORY,
                            entries: h
                        });
                }
                d.Z.overlayMounted(...i);
            }, [f, h, s, u, c, t, n, r]);
        })(),
        (e = r),
        (t = n),
        l.useEffect(() => {
            if (e) {
                if (((0, s.Ay)(u.POPOUT_MODAL_CONTEXT), t.addEventListener('contextmenu', K, !1), null != Y)) {
                    let e = Date.now() - Y;
                    d.Z.track(V.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (Y = null);
                }
                return () => {
                    t.removeEventListener('contextmenu', K, !1);
                };
            }
            t.removeEventListener('contextmenu', K, !1), null == Y && ((Y = Date.now()), d.Z.track(V.rMx.OVERLAY_UNLOCKED));
        }, [e, t]),
        (0, i.jsx)(f.Gt, {
            value: M,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
                children:
                    T || m
                        ? null
                        : (0, i.jsx)(u.ThemeProvider, {
                              theme: V.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(F.overlay, e),
                                      children: [
                                          H,
                                          (0, i.jsx)(X, {
                                              locked: r,
                                              keybind: y,
                                              onClick: q
                                          }),
                                          I
                                              ? (0, i.jsx)(w.Z, {
                                                    className: o()({
                                                        [F.layoutLocked]: r,
                                                        [F.layoutUnlocked]: !r
                                                    })
                                                })
                                              : r
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: F.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: F.inactiveContainer,
                                                          children: W.intl.format(W.t.ketnW1, A.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(j.Z, {}),
                                          B &&
                                              (0, i.jsx)(J, {
                                                  locked: r,
                                                  focused: c
                                              }),
                                          (0, i.jsx)(k.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
