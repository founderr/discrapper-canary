t.d(n, {
    Z: function () {
        return ed;
    }
});
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
    _ = t(110924),
    h = t(100527),
    p = t(906732),
    v = t(146282),
    m = t(70097),
    Z = t(594190),
    C = t(567409),
    I = t(74299),
    g = t(989941),
    E = t(199902),
    y = t(314897),
    b = t(592125),
    x = t(430824),
    L = t(131951),
    k = t(944486),
    N = t(449224),
    O = t(574254),
    T = t(556296),
    A = t(237997),
    w = t(451478),
    P = t(585483),
    D = t(358085),
    S = t(13140),
    U = t(145597),
    V = t(830917),
    R = t(681603),
    j = t(358446),
    G = t(348733),
    M = t(708383),
    z = t(923532),
    W = t(915614),
    F = t(777382),
    B = t(333031),
    Y = t(388627),
    H = t(319414),
    X = t(561064),
    K = t(987650),
    Q = t(981631),
    J = t(206583),
    q = t(388032),
    $ = t(800004);
let ee = !D.isPlatformEmbedded && !1,
    en = ee
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: $.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    et = null;
function ei(e) {
    e.preventDefault();
}
function er(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                layoutId: U.qU,
                version: 1
            });
    });
}
let el = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: a()($.overlayBackground, {
                [$.overlayActive]: !r,
                [$.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === Q.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: er,
            children: r
                ? null
                : (0, i.jsx)(B.Z, {
                      className: $.closeContainer,
                      children: (0, i.jsx)(W.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    ea = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(B.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(W.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, U.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function eo() {
    if (null != O.Z.getContextMenu()) {
        (0, s.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, U.QF)());
}
function ec() {
    d.Z.setFocusedPID(U.Js);
}
function eu() {
    d.Z.setFocusedPID(null);
}
function es(e) {
    let n = A.Z.isLocked((0, U.QF)());
    'alt' === e.key.toLowerCase() && !n && ('keyup' === e.type.toLowerCase() ? P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function ed() {
    var e, n;
    let t = (0, X.Z)(),
        {
            locked: l,
            focused: s,
            incompatibleApp: m,
            hasValidResolution: O,
            hasZeroSizeDimension: P,
            keybind: D,
            isPreviewingInGame: W
        } = (0, o.cj)([A.Z, w.Z, T.Z], () => {
            let e = w.Z.windowSize((0, V.ZY)(t)),
                n = T.Z.getOverlayKeybind();
            return {
                locked: A.Z.isLocked((0, U.QF)()),
                focused: A.Z.isFocused((0, U.QF)()),
                incompatibleApp: A.Z.incompatibleApp,
                hasValidResolution: (0, U.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != n ? (0, S.BB)(n.shortcut, !0) : '???',
                isPreviewingInGame: A.Z.isPreviewingInGame()
            };
        }),
        B = (0, o.e7)([A.Z], () => A.Z.getActiveRegions()),
        { analyticsLocations: er } = (0, p.ZP)(h.Z.OVERLAY),
        ed = l || W;
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
            d.Z.overlayReady((0, U.QF)()), t.addEventListener('keydown', es), t.addEventListener('keyup', es), ee && (t.document.hasFocus() && d.Z.setFocusedPID(U.Js), t.addEventListener('focus', ec), t.addEventListener('blur', eu));
        },
        () => {
            t.removeEventListener('keydown', es), t.removeEventListener('keyup', es), ee && (t.removeEventListener('focus', ec), t.removeEventListener('blur', eu));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                n = (0, Y.pL)(),
                t = k.Z.getVoiceChannelId(),
                i = b.Z.getChannel(t),
                l = null != i ? x.Z.getGuild(i.guild_id) : null,
                a = null != E.Z.getCurrentUserActiveStream(),
                o = null != t,
                c = (0, I.Z)(L.Z) && !a && null != n,
                u = o && null != l && null != t,
                { showKeybindIndicators: s, dismissKeybindNotification: _ } = (0, j.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    d.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: o,
                        text_widget_connected: !1,
                        overlay_render_method: f.gl[f.gl.OutOfProcess]
                    });
                let i = null;
                (i = s
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: _
                      }
                    : { type: K.nc.WELCOME }),
                    c && u
                        ? (i = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: l
                          })
                        : c &&
                          (i = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    d.Z.overlayMounted(i);
            }, [o, c, u, n, t, l, s, _]);
        })(),
        (e = l),
        (n = t),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', ei, !1), null != et)) {
                    let e = Date.now() - et;
                    d.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', ei, !1);
                };
            }
            n.removeEventListener('contextmenu', ei, !1), null == et && ((et = Date.now()), d.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [e, n]);
    let ef = (0, o.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        e_ = (0, o.e7)([b.Z], () => b.Z.getChannel(ef)),
        eh = (0, o.e7)([x.Z], () => (null != e_ ? x.Z.getGuild(e_.guild_id) : null)),
        ep = (0, o.e7)([y.default], () => y.default.getId()),
        ev = (0, o.e7)([Z.ZP, N.Z], () => (0, g.Z)(Z.ZP, N.Z)),
        em = (0, C.Ns)(null == ev ? void 0 : ev.id),
        eZ = (0, o.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        eC = (0, _.Z)(eZ);
    return (r.useEffect(() => {
        !eC && eZ && d.Z.notifyContentInventoryReady(em);
    }, [em, eZ, eC]),
    P || m)
        ? null
        : (0, i.jsx)(p.Gt, {
              value: er,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: $.overlay,
                      children: [
                          (0, i.jsx)(M.Z, {}),
                          W &&
                              (0, i.jsx)('header', {
                                  className: $.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          en,
                          (!l || B.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(el, {
                                  locked: l,
                                  keybind: D,
                                  onClick: eo
                              }),
                          O
                              ? (0, i.jsx)(F.Z, {
                                    className: a()({
                                        [$.layoutLocked]: l,
                                        [$.layoutUnlocked]: !l
                                    })
                                })
                              : l
                                ? null
                                : (0, i.jsx)('div', {
                                      className: $.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: $.inactiveContainer,
                                          children: q.intl.format(q.t.ketnW1, U.FW)
                                      })
                                  }),
                          (0, i.jsx)(H.Z, {}),
                          ee &&
                              (0, i.jsx)(ea, {
                                  locked: l,
                                  focused: s
                              }),
                          null != eh &&
                              null != ef &&
                              (0, i.jsx)(z.Z, {
                                  streamerId: ep,
                                  guildId: eh.id,
                                  channelId: ef
                              }),
                          (0, i.jsx)(G.Z, {
                              locked: ed,
                              keybind: D
                          }),
                          (0, i.jsx)(R.Z, {})
                      ]
                  })
              })
          });
}
