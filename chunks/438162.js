t.d(n, {
    Z: function () {
        return ec;
    }
}),
    t(653041),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    c = t(952265),
    u = t(481060),
    s = t(239091),
    d = t(13245),
    f = t(100527),
    _ = t(906732),
    h = t(146282),
    p = t(70097),
    v = t(567409),
    m = t(74299),
    C = t(199902),
    g = t(314897),
    Z = t(592125),
    E = t(430824),
    I = t(131951),
    b = t(944486),
    y = t(574254),
    x = t(556296),
    L = t(808506),
    k = t(237997),
    N = t(451478),
    O = t(585483),
    T = t(358085),
    w = t(13140),
    A = t(145597),
    P = t(830917),
    S = t(86071),
    D = t(681603),
    U = t(348733),
    V = t(708383),
    R = t(923532),
    j = t(915614),
    M = t(777382),
    G = t(333031),
    z = t(371651),
    W = t(388627),
    F = t(319414),
    B = t(561064),
    Y = t(987650),
    H = t(981631),
    X = t(206583),
    Q = t(388032),
    K = t(800004);
let J = !T.isPlatformEmbedded && !1,
    q = J
        ? (0, i.jsx)(p.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    $ = null;
function ee(e) {
    e.preventDefault();
}
function en(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                layoutId: A.qU,
                version: 1
            });
    });
}
let et = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: a()(K.overlayBackground, {
                [K.overlayActive]: !r,
                [K.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === H.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: en,
            children: r
                ? null
                : (0, i.jsx)(G.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(j.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    ei = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(G.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(j.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, A.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function er() {
    if (null != y.Z.getContextMenu()) {
        (0, s.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, A.QF)());
}
function el() {
    d.Z.setFocusedPID(A.Js);
}
function ea() {
    d.Z.setFocusedPID(null);
}
function eo(e) {
    let n = k.Z.isLocked((0, A.QF)());
    'alt' === e.key.toLowerCase() && !n && ('keyup' === e.type.toLowerCase() ? O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function ec() {
    var e, n;
    let t = (0, B.Z)(),
        {
            locked: l,
            focused: s,
            incompatibleApp: p,
            hasValidResolution: y,
            hasZeroSizeDimension: O,
            keybind: T,
            isPreviewingInGame: j
        } = (0, o.cj)([k.Z, N.Z, x.Z], () => {
            let e = N.Z.windowSize((0, P.ZY)(t)),
                n = x.Z.getOverlayKeybind();
            return {
                locked: k.Z.isLocked((0, A.QF)()),
                focused: k.Z.isFocused((0, A.QF)()),
                incompatibleApp: k.Z.incompatibleApp,
                hasValidResolution: (0, A.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != n ? (0, w.BB)(n.shortcut, !0) : '???',
                isPreviewingInGame: k.Z.isPreviewingInGame()
            };
        }),
        G = (0, o.e7)([k.Z], () => k.Z.getActiveRegions()),
        { analyticsLocations: en } = (0, _.ZP)(f.Z.OVERLAY),
        ec = l || j;
    !(function (e, n) {
        let t = r.useRef({
            mount: e,
            unmount: n
        });
        r.useEffect(
            () =>
                void (t.current = {
                    mount: e,
                    unmount: n
                })
        ),
            r.useEffect(
                () => (
                    t.current.mount(),
                    () => {
                        t.current.unmount();
                    }
                ),
                []
            );
    })(
        () => {
            d.Z.overlayReady((0, A.QF)()), t.addEventListener('keydown', eo), t.addEventListener('keyup', eo), J && (t.document.hasFocus() && d.Z.setFocusedPID(A.Js), t.addEventListener('focus', el), t.addEventListener('blur', ea));
        },
        () => {
            t.removeEventListener('keydown', eo), t.removeEventListener('keyup', eo), J && (t.removeEventListener('focus', el), t.removeEventListener('blur', ea));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                n = (0, W.pL)(),
                t = b.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(t),
                l = null != i ? E.Z.getGuild(i.guild_id) : null,
                a = null != C.Z.getCurrentUserActiveStream(),
                c = null != t,
                u = (0, m.Z)(I.Z) && !a && null != n,
                s = c && null != l && null != t,
                f = (0, v.Ns)(null == n ? void 0 : n.id),
                _ = (0, o.e7)([h.Z], () => null != h.Z.getLastFeedFetchDate(X.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!_ || e.current) return;
                (e.current = !0),
                    d.Z.track(H.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: c,
                        text_widget_connected: !1
                    });
                let r = null !== (i = L.Z.getFocusedPID()) && void 0 !== i ? i : (0, A.QF)();
                if (z.Z.hasChangedRenderMode(r)) return;
                let a = [{ type: Y.nc.WELCOME }];
                if (
                    (u && s
                        ? a.push({
                              type: Y.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: l
                          })
                        : u &&
                          a.push({
                              type: Y.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    f.length > 0)
                ) {
                    let { enabled: e } = S.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        a.push({
                            type: Y.nc.CONTENT_INVENTORY,
                            entries: f
                        });
                }
                d.Z.overlayMounted(...a);
            }, [_, f, c, u, s, n, t, l]);
        })(),
        (e = l),
        (n = t),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', ee, !1), null != $)) {
                    let e = Date.now() - $;
                    d.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), ($ = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', ee, !1);
                };
            }
            n.removeEventListener('contextmenu', ee, !1), null == $ && (($ = Date.now()), d.Z.track(H.rMx.OVERLAY_UNLOCKED));
        }, [e, n]);
    let eu = (0, o.e7)([b.Z], () => b.Z.getVoiceChannelId()),
        es = (0, o.e7)([Z.Z], () => Z.Z.getChannel(eu)),
        ed = (0, o.e7)([E.Z], () => (null != es ? E.Z.getGuild(es.guild_id) : null)),
        ef = (0, o.e7)([g.default], () => g.default.getId());
    return O || p
        ? null
        : (0, i.jsx)(_.Gt, {
              value: en,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: K.overlay,
                      children: [
                          (0, i.jsx)(V.Z, {}),
                          j &&
                              (0, i.jsx)('header', {
                                  className: K.previewingInGameHeader,
                                  children: Q.intl.string(Q.t.iOq96u)
                              }),
                          q,
                          (!l || G.has(H.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(et, {
                                  locked: l,
                                  keybind: T,
                                  onClick: er
                              }),
                          y
                              ? (0, i.jsx)(M.Z, {
                                    className: a()({
                                        [K.layoutLocked]: l,
                                        [K.layoutUnlocked]: !l
                                    })
                                })
                              : l
                                ? null
                                : (0, i.jsx)('div', {
                                      className: K.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: K.inactiveContainer,
                                          children: Q.intl.format(Q.t.ketnW1, A.FW)
                                      })
                                  }),
                          (0, i.jsx)(F.Z, {}),
                          J &&
                              (0, i.jsx)(ei, {
                                  locked: l,
                                  focused: s
                              }),
                          null != ed &&
                              null != eu &&
                              (0, i.jsx)(R.Z, {
                                  streamerId: ef,
                                  guildId: ed.id,
                                  channelId: eu
                              }),
                          (0, i.jsx)(U.Z, {
                              locked: ec,
                              keybind: T
                          }),
                          (0, i.jsx)(D.Z, {})
                      ]
                  })
              })
          });
}
