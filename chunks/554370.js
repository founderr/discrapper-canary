n.d(t, {
    Z: function () {
        return en;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    u = n(481060),
    c = n(239091),
    d = n(13245),
    h = n(100527),
    f = n(906732),
    p = n(146282),
    m = n(70097),
    E = n(567409),
    v = n(74299),
    g = n(199902),
    _ = n(592125),
    C = n(430824),
    S = n(131951),
    I = n(944486),
    Z = n(574254),
    N = n(556296),
    x = n(237997),
    O = n(451478),
    T = n(585483),
    A = n(358085),
    y = n(13140),
    b = n(145597),
    R = n(830917),
    L = n(86071),
    k = n(681603),
    M = n(915614),
    P = n(690336),
    w = n(388627),
    j = n(319414),
    D = n(561064),
    z = n(987650),
    U = n(501787),
    V = n(981631),
    G = n(206583),
    F = n(388032),
    B = n(668674);
let W = !A.isPlatformEmbedded && !1,
    H = W
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: B.videoDev,
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
let X = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: o()(B.overlayBackground, {
                [B.overlayActive]: !r,
                [B.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === V.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: r
                ? null
                : (0, i.jsx)(M.Z, {
                      className: B.closeContainer,
                      keybind: t,
                      onClick: n,
                      IconComponent: u.XLargeIcon
                  })
        });
    }),
    J = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: B.closeContainer,
                  onClick: () => d.Z.setInputLocked(!1, (0, b.QF)()),
                  IconComponent: u.LockUnlockedIcon
              })
            : null;
    });
function q() {
    if (null != Z.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, b.QF)());
}
function $() {
    d.Z.setFocusedPID(b.Js);
}
function ee() {
    d.Z.setFocusedPID(null);
}
function et(e) {
    let t = x.Z.isLocked((0, b.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(V.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function en() {
    var e, t;
    let n = (0, D.Z)(),
        {
            locked: l,
            focused: c,
            incompatibleApp: m,
            hasValidResolution: Z,
            hasZeroSizeDimension: T,
            keybind: A
        } = (0, a.cj)([x.Z, O.Z, N.Z], () => {
            let e = O.Z.windowSize((0, R.ZY)(n)),
                t = N.Z.getOverlayKeybind();
            return {
                locked: x.Z.isLocked((0, b.QF)()),
                focused: x.Z.isFocused((0, b.QF)()),
                incompatibleApp: x.Z.incompatibleApp,
                hasValidResolution: (0, b.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, y.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: M } = (0, f.ZP)(h.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t
            });
            r.useEffect(
                () =>
                    void (n.current = {
                        mount: e,
                        unmount: t
                    })
            ),
                r.useEffect(
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
                d.Z.overlayReady((0, b.QF)()), n.addEventListener('keydown', et), n.addEventListener('keyup', et), W && (n.document.hasFocus() && d.Z.setFocusedPID(b.Js), n.addEventListener('focus', $), n.addEventListener('blur', ee));
            },
            () => {
                n.removeEventListener('keydown', et), n.removeEventListener('keyup', et), W && (n.removeEventListener('focus', $), n.removeEventListener('blur', ee));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, w.pL)(),
                n = I.Z.getVoiceChannelId(),
                i = _.Z.getChannel(n),
                l = null != i ? C.Z.getGuild(i.guild_id) : null,
                o = null != g.Z.getCurrentUserActiveStream(),
                s = null != n,
                u = (0, v.Z)(S.Z) && !o && null != t,
                c = s && null != l && null != n,
                h = (0, E.Ns)(null == t ? void 0 : t.id),
                f = (0, a.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(G.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
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
                              voiceGuild: l
                          })
                        : u &&
                          i.push({
                              type: z.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    h.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        i.push({
                            type: z.nc.CONTENT_INVENTORY,
                            entries: h
                        });
                }
                d.Z.overlayMounted(...i);
            }, [f, h, s, u, c, t, n, l]);
        })(),
        (e = l),
        (t = n),
        r.useEffect(() => {
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
                                      className: o()(B.overlay, e),
                                      children: [
                                          H,
                                          (0, i.jsx)(X, {
                                              locked: l,
                                              keybind: A,
                                              onClick: q
                                          }),
                                          Z
                                              ? (0, i.jsx)(P.Z, {
                                                    className: o()({
                                                        [B.layoutLocked]: l,
                                                        [B.layoutUnlocked]: !l
                                                    })
                                                })
                                              : l
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: B.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: B.inactiveContainer,
                                                          children: F.intl.format(F.t.ketnW1, b.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(j.Z, {}),
                                          W &&
                                              (0, i.jsx)(J, {
                                                  locked: l,
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
