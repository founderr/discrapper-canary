n.d(t, {
    Z: function () {
        return eo;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(952265),
    u = n(481060),
    c = n(239091),
    d = n(13245),
    h = n(951483),
    f = n(714338),
    p = n(100527),
    m = n(906732),
    v = n(146282),
    g = n(70097),
    E = n(567409),
    _ = n(74299),
    C = n(199902),
    S = n(592125),
    x = n(430824),
    I = n(131951),
    Z = n(944486),
    b = n(574254),
    y = n(556296),
    N = n(237997),
    O = n(451478),
    T = n(585483),
    A = n(358085),
    L = n(13140),
    R = n(145597),
    k = n(830917),
    w = n(681603),
    j = n(358446),
    M = n(915614),
    P = n(690336),
    D = n(388627),
    z = n(561064),
    U = n(987650),
    V = n(501787),
    F = n(981631),
    B = n(206583),
    W = n(388032),
    H = n(668674);
let G = !A.isPlatformEmbedded && !1,
    Y = G
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: H.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    K = null;
function X(e) {
    e.preventDefault();
}
function Q(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: V.$S,
                version: 1
            });
    });
}
let J = o.memo(function (e) {
        let { keybind: t, onClick: n, locked: o } = e;
        return (0, i.jsx)(u.Clickable, {
            className: l()(H.overlayBackground, {
                [H.overlayActive]: !o,
                [H.overlayLocked]: o
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === F.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: Q,
            children: o
                ? null
                : (0, i.jsx)(M.Z, {
                      className: H.closeContainer,
                      keybind: t,
                      onClick: n,
                      IconComponent: u.XLargeIcon
                  })
        });
    }),
    q = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: H.closeContainer,
                  onClick: () => d.Z.setInputLocked(!1, (0, R.QF)()),
                  IconComponent: u.LockUnlockedIcon
              })
            : null;
    }),
    $ = o.memo(function () {
        let e = (0, D.pL)(),
            t = (0, E.Ns)(null == e ? void 0 : e.id),
            n = o.useRef(!1),
            i = (0, s.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(B.YN.GAME_PROFILE_FEED));
        return (
            o.useEffect(() => {
                i && !n.current && ((n.current = !0), d.Z.notifyContentInventoryReady(t));
            }, [i, t]),
            null
        );
    });
function ee() {
    if (null != b.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, R.QF)());
}
function et() {
    d.Z.setFocusedPID(R.Js);
}
function en() {
    d.Z.setFocusedPID(null);
}
function ei(e) {
    let t = N.Z.isLocked((0, R.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? T.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eo() {
    var e, t;
    let n = (0, z.Z)(),
        {
            locked: r,
            focused: c,
            incompatibleApp: v,
            hasValidResolution: g,
            hasZeroSizeDimension: E,
            keybind: b
        } = (0, s.cj)([N.Z, O.Z, y.Z], () => {
            let e = O.Z.windowSize((0, k.ZY)(n)),
                t = y.Z.getOverlayKeybind();
            return {
                locked: N.Z.isLocked((0, R.QF)()),
                focused: N.Z.isFocused((0, R.QF)()),
                incompatibleApp: N.Z.incompatibleApp,
                hasValidResolution: (0, R.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, L.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: T } = (0, m.ZP)(p.Z.OVERLAY),
        { showKeybindIndicators: A, dismissKeybindNotification: M } = (0, j.K)();
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
                !(function (e) {
                    let { locked: t, showKeybindNotification: n, dismissKeybindNotification: i } = e,
                        o = Z.Z.getVoiceChannelId(),
                        r = S.Z.getChannel(o),
                        l = null != r ? x.Z.getGuild(r.guild_id) : null,
                        s = null != C.Z.getCurrentUserActiveStream(),
                        a = (0, D.pL)(),
                        u = (0, _.Z)(I.Z),
                        c = null != o;
                    d.Z.track(F.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: c,
                        text_widget_connected: N.Z.isPinned(F.Odu.TEXT)
                    });
                    let p = u && !s && null != a,
                        m = c && null != l && null != o,
                        v = { type: U.nc.WELCOME };
                    n
                        ? (v = {
                              type: U.nc.KEYBIND_INDICATORS,
                              markAsDismissed: i
                          })
                        : p && m
                          ? (v = {
                                type: U.nc.GO_LIVE_VOICE,
                                game: a,
                                voiceChannelId: o,
                                voiceGuild: l
                            })
                          : p &&
                            (v = {
                                type: U.nc.GO_LIVE_NON_VOICE,
                                game: a
                            }),
                        d.Z.overlayMounted(v);
                    let g = t && N.Z.isPinned(F.Odu.TEXT);
                    f.Z.setLayout(g ? h.Xq : h.Sr), g && f.Z.enable();
                })({
                    locked: r,
                    showKeybindNotification: A,
                    dismissKeybindNotification: M,
                    targetWindow: n
                }),
                    n.addEventListener('keydown', ei),
                    n.addEventListener('keyup', ei),
                    G && (n.document.hasFocus() && d.Z.setFocusedPID(R.Js), n.addEventListener('focus', et), n.addEventListener('blur', en));
            },
            () => {
                n.removeEventListener('keydown', ei), n.removeEventListener('keyup', ei), G && (n.removeEventListener('focus', et), n.removeEventListener('blur', en));
            }
        ),
        (e = r),
        (t = n),
        o.useEffect(() => {
            if (e) {
                if (((0, a.Ay)(u.POPOUT_MODAL_CONTEXT), t.addEventListener('contextmenu', X, !1), null != K)) {
                    let e = Date.now() - K;
                    d.Z.track(F.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (K = null);
                }
                return () => {
                    t.removeEventListener('contextmenu', X, !1);
                };
            }
            t.removeEventListener('contextmenu', X, !1), null == K && ((K = Date.now()), d.Z.track(F.rMx.OVERLAY_UNLOCKED));
        }, [e, t]),
        (0, i.jsx)(m.Gt, {
            value: T,
            children: (0, i.jsxs)(u.RedesignIconContextProvider, {
                children: [
                    E || v
                        ? null
                        : (0, i.jsxs)('div', {
                              className: l()(H.overlay, (0, u.getThemeClass)('dark')),
                              children: [
                                  Y,
                                  (0, i.jsx)(J, {
                                      locked: r,
                                      keybind: b,
                                      onClick: ee
                                  }),
                                  g
                                      ? (0, i.jsx)(P.Z, {
                                            className: l()({
                                                [H.layoutLocked]: r,
                                                [H.layoutUnlocked]: !r
                                            })
                                        })
                                      : r
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: H.invalidContainer,
                                              children: (0, i.jsx)('div', {
                                                  className: H.inactiveContainer,
                                                  children: W.intl.format(W.t.ketnW1, R.FW)
                                              })
                                          }),
                                  G &&
                                      (0, i.jsx)(q, {
                                          locked: r,
                                          focused: c
                                      }),
                                  (0, i.jsx)(w.Z, {})
                              ]
                          }),
                    (0, i.jsx)($, {})
                ]
            })
        })
    );
}
