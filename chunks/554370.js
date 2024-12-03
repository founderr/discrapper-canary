n.d(t, {
    Z: function () {
        return ei;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(442837),
    a = n(952265),
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
    x = n(592125),
    C = n(430824),
    Z = n(131951),
    _ = n(944486),
    I = n(574254),
    S = n(556296),
    b = n(237997),
    N = n(451478),
    O = n(585483),
    y = n(358085),
    j = n(13140),
    T = n(145597),
    k = n(830917),
    L = n(86071),
    w = n(681603),
    A = n(915614),
    R = n(690336),
    M = n(333031),
    z = n(388627),
    D = n(319414),
    P = n(561064),
    V = n(987650),
    W = n(501787),
    U = n(981631),
    F = n(206583),
    B = n(388032),
    H = n(167566);
let Y = !y.isPlatformEmbedded && !1,
    G = Y
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    K = null;
function Q(e) {
    e.preventDefault();
}
function X(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: W.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let J = o.memo(function (e) {
        let { keybind: t, onClick: n, locked: o } = e;
        return (0, i.jsx)(u.Clickable, {
            className: r()(H.overlayBackground, {
                [H.overlayActive]: !o,
                [H.overlayLocked]: o
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: X,
            children: o
                ? null
                : (0, i.jsx)(M.Z, {
                      className: H.closeContainer,
                      children: (0, i.jsx)(A.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    q = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: H.closeContainer,
                  children: (0, i.jsx)(A.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function $() {
    if (null != I.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, T.QF)());
}
function ee() {
    d.Z.setFocusedPID(T.Js);
}
function et() {
    d.Z.setFocusedPID(null);
}
function en(e) {
    let t = b.Z.isLocked((0, T.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && O.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function ei(e) {
    var t, n;
    let { isEmbeddedActivity: l } = e,
        c = (0, P.Z)(),
        {
            locked: m,
            focused: I,
            incompatibleApp: O,
            hasValidResolution: y,
            hasZeroSizeDimension: A,
            keybind: M
        } = (0, s.cj)([b.Z, N.Z, S.Z], () => {
            let e = N.Z.windowSize((0, k.ZY)(c)),
                t = S.Z.getOverlayKeybind();
            return {
                locked: b.Z.isLocked((0, T.QF)()),
                focused: b.Z.isFocused((0, T.QF)()),
                incompatibleApp: b.Z.incompatibleApp,
                hasValidResolution: (0, T.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, j.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: W } = (0, f.ZP)(h.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = o.useRef({
                mount: e,
                unmount: t
            });
            o.useEffect(
                () =>
                    void (n.current = {
                        mount: e,
                        unmount: t
                    })
            ),
                o.useEffect(
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
                d.Z.overlayReady((0, T.QF)()), c.addEventListener('keydown', en), c.addEventListener('keyup', en), Y && (c.document.hasFocus() && d.Z.setFocusedPID(T.Js), c.addEventListener('focus', ee), c.addEventListener('blur', et));
            },
            () => {
                c.removeEventListener('keydown', en), c.removeEventListener('keyup', en), Y && (c.removeEventListener('focus', ee), c.removeEventListener('blur', et));
            }
        ),
        !(function () {
            let e = o.useRef(!1),
                t = (0, z.pL)(),
                n = _.Z.getVoiceChannelId(),
                i = x.Z.getChannel(n),
                l = null != i ? C.Z.getGuild(i.guild_id) : null,
                r = null != E.Z.getCurrentUserActiveStream(),
                a = null != n,
                u = (0, g.Z)(Z.Z) && !r && null != t,
                c = a && null != l && null != n,
                h = (0, v.Ns)(null == t ? void 0 : t.id),
                f = (0, s.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(F.YN.GAME_PROFILE_FEED));
            o.useEffect(() => {
                if (!f || e.current) return;
                (e.current = !0),
                    d.Z.track(U.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: !1
                    });
                let i = [{ type: V.nc.WELCOME }];
                if (
                    (u && c
                        ? i.push({
                              type: V.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: l
                          })
                        : u &&
                          i.push({
                              type: V.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    h.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        i.push({
                            type: V.nc.CONTENT_INVENTORY,
                            entries: h
                        });
                }
                d.Z.overlayMounted(...i);
            }, [f, h, a, u, c, t, n, l]);
        })(),
        (t = m),
        (n = c),
        o.useEffect(() => {
            if (t) {
                if (((0, a.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', Q, !1), null != K)) {
                    let e = Date.now() - K;
                    d.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (K = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', Q, !1);
                };
            }
            n.removeEventListener('contextmenu', Q, !1), null == K && ((K = Date.now()), d.Z.track(U.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(f.Gt, {
            value: W,
            children: (0, i.jsx)(u.RedesignIconContextProvider, {
                children:
                    A || O
                        ? null
                        : (0, i.jsx)(u.ThemeProvider, {
                              theme: U.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: r()(H.overlay, e),
                                      children: [
                                          !l && G,
                                          (0, i.jsx)(J, {
                                              locked: m,
                                              keybind: M,
                                              onClick: $
                                          }),
                                          y
                                              ? (0, i.jsx)(R.Z, {
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
                                                          children: B.intl.format(B.t.ketnW1, T.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(D.Z, {}),
                                          !l &&
                                              Y &&
                                              (0, i.jsx)(q, {
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
