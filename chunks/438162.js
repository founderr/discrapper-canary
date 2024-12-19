t.d(n, {
    Z: function () {
        return eu;
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
    f = t(615287),
    _ = t(100527),
    h = t(906732),
    p = t(146282),
    v = t(70097),
    m = t(567409),
    g = t(74299),
    C = t(199902),
    Z = t(314897),
    E = t(592125),
    I = t(430824),
    b = t(131951),
    y = t(944486),
    x = t(574254),
    L = t(556296),
    k = t(808506),
    N = t(237997),
    O = t(451478),
    T = t(585483),
    w = t(358085),
    A = t(13140),
    P = t(145597),
    S = t(830917),
    D = t(86071),
    U = t(681603),
    V = t(348733),
    R = t(708383),
    j = t(923532),
    M = t(915614),
    G = t(777382),
    z = t(333031),
    W = t(371651),
    F = t(388627),
    B = t(319414),
    Y = t(561064),
    H = t(987650),
    X = t(981631),
    Q = t(206583),
    K = t(388032),
    J = t(800004);
let q = !w.isPlatformEmbedded && !1,
    $ = q
        ? (0, i.jsx)(v.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: J.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ee = null;
function en(e) {
    e.preventDefault();
}
function et(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                layoutId: P.qU,
                version: 1
            });
    });
}
let ei = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: a()(J.overlayBackground, {
                [J.overlayActive]: !r,
                [J.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === X.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: et,
            children: r
                ? null
                : (0, i.jsx)(z.Z, {
                      className: J.closeContainer,
                      children: (0, i.jsx)(M.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    er = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(z.Z, {
                  className: J.closeContainer,
                  children: (0, i.jsx)(M.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, P.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function el() {
    if (null != x.Z.getContextMenu()) {
        (0, s.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, P.QF)());
}
function ea() {
    d.Z.setFocusedPID(P.Js);
}
function eo() {
    d.Z.setFocusedPID(null);
}
function ec(e) {
    let n = N.Z.isLocked((0, P.QF)());
    'alt' === e.key.toLowerCase() && !n && ('keyup' === e.type.toLowerCase() ? T.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    var e, n;
    let t = (0, Y.Z)(),
        {
            locked: l,
            focused: s,
            incompatibleApp: v,
            hasValidResolution: x,
            hasZeroSizeDimension: T,
            keybind: w,
            isPreviewingInGame: M
        } = (0, o.cj)([N.Z, O.Z, L.Z], () => {
            let e = O.Z.windowSize((0, S.ZY)(t)),
                n = L.Z.getOverlayKeybind();
            return {
                locked: N.Z.isLocked((0, P.QF)()),
                focused: N.Z.isFocused((0, P.QF)()),
                incompatibleApp: N.Z.incompatibleApp,
                hasValidResolution: (0, P.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != n ? (0, A.BB)(n.shortcut, !0) : '???',
                isPreviewingInGame: N.Z.isPreviewingInGame()
            };
        }),
        z = (0, o.e7)([N.Z], () => N.Z.getActiveRegions()),
        { analyticsLocations: et } = (0, h.ZP)(_.Z.OVERLAY),
        eu = l || M;
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
            d.Z.overlayReady((0, P.QF)()), t.addEventListener('keydown', ec), t.addEventListener('keyup', ec), q && (t.document.hasFocus() && d.Z.setFocusedPID(P.Js), t.addEventListener('focus', ea), t.addEventListener('blur', eo));
        },
        () => {
            t.removeEventListener('keydown', ec), t.removeEventListener('keyup', ec), q && (t.removeEventListener('focus', ea), t.removeEventListener('blur', eo));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                n = (0, F.pL)(),
                t = y.Z.getVoiceChannelId(),
                i = E.Z.getChannel(t),
                l = null != i ? I.Z.getGuild(i.guild_id) : null,
                a = null != C.Z.getCurrentUserActiveStream(),
                c = null != t,
                u = (0, g.Z)(b.Z) && !a && null != n,
                s = c && null != l && null != t,
                _ = (0, m.Ns)(null == n ? void 0 : n.id),
                h = (0, o.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(Q.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!h || e.current) return;
                (e.current = !0),
                    d.Z.track(X.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: c,
                        text_widget_connected: !1,
                        overlay_method: f.gl[f.gl.OutOfProcess]
                    });
                let r = null !== (i = k.Z.getFocusedPID()) && void 0 !== i ? i : (0, P.QF)();
                if (W.Z.hasChangedRenderMode(r)) return;
                let a = [{ type: H.nc.WELCOME }];
                if (
                    (u && s
                        ? a.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: l
                          })
                        : u &&
                          a.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = D.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        a.push({
                            type: H.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                d.Z.overlayMounted(...a);
            }, [h, _, c, u, s, n, t, l]);
        })(),
        (e = l),
        (n = t),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', en, !1), null != ee)) {
                    let e = Date.now() - ee;
                    d.Z.track(X.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ee = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', en, !1);
                };
            }
            n.removeEventListener('contextmenu', en, !1), null == ee && ((ee = Date.now()), d.Z.track(X.rMx.OVERLAY_UNLOCKED));
        }, [e, n]);
    let es = (0, o.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        ed = (0, o.e7)([E.Z], () => E.Z.getChannel(es)),
        ef = (0, o.e7)([I.Z], () => (null != ed ? I.Z.getGuild(ed.guild_id) : null)),
        e_ = (0, o.e7)([Z.default], () => Z.default.getId());
    return T || v
        ? null
        : (0, i.jsx)(h.Gt, {
              value: et,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: J.overlay,
                      children: [
                          (0, i.jsx)(R.Z, {}),
                          M &&
                              (0, i.jsx)('header', {
                                  className: J.previewingInGameHeader,
                                  children: K.intl.string(K.t.iOq96u)
                              }),
                          $,
                          (!l || z.has(X.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(ei, {
                                  locked: l,
                                  keybind: w,
                                  onClick: el
                              }),
                          x
                              ? (0, i.jsx)(G.Z, {
                                    className: a()({
                                        [J.layoutLocked]: l,
                                        [J.layoutUnlocked]: !l
                                    })
                                })
                              : l
                                ? null
                                : (0, i.jsx)('div', {
                                      className: J.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: J.inactiveContainer,
                                          children: K.intl.format(K.t.ketnW1, P.FW)
                                      })
                                  }),
                          (0, i.jsx)(B.Z, {}),
                          q &&
                              (0, i.jsx)(er, {
                                  locked: l,
                                  focused: s
                              }),
                          null != ef &&
                              null != es &&
                              (0, i.jsx)(j.Z, {
                                  streamerId: e_,
                                  guildId: ef.id,
                                  channelId: es
                              }),
                          (0, i.jsx)(V.Z, {
                              locked: eu,
                              keybind: w
                          }),
                          (0, i.jsx)(U.Z, {})
                      ]
                  })
              })
          });
}
