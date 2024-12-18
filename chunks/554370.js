n.d(t, {
    Z: function () {
        return el;
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
    c = n(481060),
    u = n(239091),
    d = n(13245),
    h = n(100527),
    f = n(906732),
    m = n(146282),
    v = n(70097),
    p = n(567409),
    x = n(74299),
    g = n(199902),
    C = n(592125),
    Z = n(430824),
    I = n(131951),
    j = n(944486),
    _ = n(574254),
    E = n(556296),
    b = n(808506),
    w = n(237997),
    N = n(451478),
    k = n(585483),
    L = n(358085),
    S = n(13140),
    y = n(145597),
    T = n(830917),
    A = n(86071),
    O = n(681603),
    V = n(915614),
    M = n(690336),
    P = n(333031),
    z = n(371651),
    R = n(388627),
    D = n(319414),
    W = n(561064),
    U = n(987650),
    F = n(501787),
    B = n(981631),
    G = n(206583),
    Y = n(388032),
    H = n(167566);
let K = !L.isPlatformEmbedded && !1,
    X = K
        ? (0, i.jsx)(v.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    Q = null;
function q(e) {
    e.preventDefault();
}
function J(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: F.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.Clickable, {
            className: o()(H.overlayBackground, {
                [H.overlayActive]: !r,
                [H.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(P.Z, {
                      className: H.closeContainer,
                      children: (0, i.jsx)(V.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.XLargeIcon
                      })
                  })
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(P.Z, {
                  className: H.closeContainer,
                  children: (0, i.jsx)(V.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, y.QF)()),
                      IconComponent: c.LockUnlockedIcon
                  })
              })
            : null;
    });
function et() {
    if (null != _.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, y.QF)());
}
function en() {
    d.Z.setFocusedPID(y.Js);
}
function ei() {
    d.Z.setFocusedPID(null);
}
function er(e) {
    let t = w.Z.isLocked((0, y.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? k.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && k.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function el(e) {
    var t, n;
    let { isEmbeddedActivity: l } = e,
        u = (0, W.Z)(),
        {
            locked: v,
            focused: _,
            incompatibleApp: k,
            hasValidResolution: L,
            hasZeroSizeDimension: V,
            keybind: P
        } = (0, a.cj)([w.Z, N.Z, E.Z], () => {
            let e = N.Z.windowSize((0, T.ZY)(u)),
                t = E.Z.getOverlayKeybind();
            return {
                locked: w.Z.isLocked((0, y.QF)()),
                focused: w.Z.isFocused((0, y.QF)()),
                incompatibleApp: w.Z.incompatibleApp,
                hasValidResolution: (0, y.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, S.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: F } = (0, f.ZP)(h.Z.OVERLAY);
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
                d.Z.overlayReady((0, y.QF)()), u.addEventListener('keydown', er), u.addEventListener('keyup', er), K && (u.document.hasFocus() && d.Z.setFocusedPID(y.Js), u.addEventListener('focus', en), u.addEventListener('blur', ei));
            },
            () => {
                u.removeEventListener('keydown', er), u.removeEventListener('keyup', er), K && (u.removeEventListener('focus', en), u.removeEventListener('blur', ei));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, R.pL)(),
                n = j.Z.getVoiceChannelId(),
                i = C.Z.getChannel(n),
                l = null != i ? Z.Z.getGuild(i.guild_id) : null,
                o = null != g.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, x.Z)(I.Z) && !o && null != t,
                u = s && null != l && null != n,
                h = (0, p.Ns)(null == t ? void 0 : t.id),
                f = (0, a.e7)([m.Z], () => null != m.Z.getLastFeedFetchDate(G.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!f || e.current) return;
                (e.current = !0),
                    d.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1
                    });
                let r = null !== (i = b.Z.getFocusedPID()) && void 0 !== i ? i : (0, y.QF)();
                if (z.Z.hasChangedRenderMode(r)) return;
                let o = [{ type: U.nc.WELCOME }];
                if (
                    (c && u
                        ? o.push({
                              type: U.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: l
                          })
                        : c &&
                          o.push({
                              type: U.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    h.length > 0)
                ) {
                    let { enabled: e } = A.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        o.push({
                            type: U.nc.CONTENT_INVENTORY,
                            entries: h
                        });
                }
                d.Z.overlayMounted(...o);
            }, [f, h, s, c, u, t, n, l]);
        })(),
        (t = v),
        (n = u),
        r.useEffect(() => {
            if (t) {
                if (((0, s.Ay)(c.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', q, !1), null != Q)) {
                    let e = Date.now() - Q;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (Q = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', q, !1);
                };
            }
            n.removeEventListener('contextmenu', q, !1), null == Q && ((Q = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(f.Gt, {
            value: F,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
                children:
                    V || k
                        ? null
                        : (0, i.jsx)(c.ThemeProvider, {
                              theme: B.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(H.overlay, e),
                                      children: [
                                          !l && X,
                                          (0, i.jsx)($, {
                                              locked: v,
                                              keybind: P,
                                              onClick: et
                                          }),
                                          L
                                              ? (0, i.jsx)(M.Z, {
                                                    className: o()({
                                                        [H.layoutLocked]: v,
                                                        [H.layoutUnlocked]: !v
                                                    })
                                                })
                                              : v
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: H.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: H.inactiveContainer,
                                                          children: Y.intl.format(Y.t.ketnW1, y.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(D.Z, {}),
                                          !l &&
                                              K &&
                                              (0, i.jsx)(ee, {
                                                  locked: v,
                                                  focused: _
                                              }),
                                          (0, i.jsx)(O.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
