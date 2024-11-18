n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    h = n(393238),
    p = n(40851),
    m = n(100527),
    f = n(906732),
    g = n(358221),
    C = n(414910),
    x = n(909820),
    _ = n(493010),
    v = n(788983),
    I = n(928518),
    E = n(703656),
    b = n(493754),
    Z = n(880831),
    N = n(73563),
    S = n(800965),
    T = n(107169),
    j = n(891551),
    A = n(314897),
    y = n(979696),
    P = n(430824),
    M = n(496675),
    L = n(944486),
    R = n(358085),
    k = n(998502),
    O = n(922482),
    D = n(431328),
    w = n(501655),
    B = n(427679),
    U = n(513449),
    H = n(153349),
    G = n(901434),
    F = n(302270),
    V = n(308177),
    z = n(700483),
    W = n(686468),
    K = n(801405),
    Y = n(903108),
    q = n(981631),
    X = n(354459),
    J = n(388032),
    Q = n(265046);
let $ = 'HasBeenInStageChannel',
    ee = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, E.XU)(n, t), v.hP(e);
    },
    et = () => {
        u.Z.wait(() => v.xv(q.KJ3.CHANNEL_CALL_POPOUT));
    },
    en = (e) => {
        v.hY(q.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ei(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: r, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        d = t.getGuildId(),
        u = (0, o.e7)([L.Z], () => L.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = A.default.getId(),
        p = !(0, o.e7)([g.Z], () => g.Z.isFullscreenInContext(n)) && (!R.isPlatformEmbedded || (R.isPlatformEmbedded && k.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== X.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.window) && void 0 !== e ? e : window;
        }, [r]),
        x = (0, K.Z)({
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: r,
            currentWindow: f
        }),
        _ = n === q.IlC.POPOUT && R.isPlatformEmbedded && k.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(j.Z, {
                      context: (0, C.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: Q.volumeSlider
                  })
                : null,
            _
                ? (0, i.jsx)(T.Z, {
                      className: Q.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: en
                  })
                : null,
            p
                ? (0, i.jsx)(S.Z, {
                      className: Q.rightTrayIcon,
                      popoutOpen: a,
                      onOpenPopout: ee(t, u),
                      onClosePopout: et
                  })
                : null,
            x
        ]
    });
}
function el(e) {
    let { channel: t } = e,
        n = (0, p.bp)(),
        l = (0, o.e7)([M.Z], () => M.Z.can(q.Plq.CREATE_INSTANT_INVITE, t)),
        a = (0, o.e7)([P.Z], () => P.Z.getGuild(t.guild_id)),
        r = (0, o.e7)([B.Z], () => B.Z.getStageInstanceByChannel(t.id)),
        s = l || (null == r ? void 0 : r.invite_code) != null;
    return null != a && s
        ? (0, i.jsx)(b.Z, {
              channel: t,
              appContext: n,
              className: Q.__invalid_leftTrayIcon,
              analyticsLocation: q.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ea(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: c, popoutWindow: d, popoutWindowAlwaysOnTop: u, popoutOpen: h, chatOpen: m } = e,
        f = (0, p.bp)(),
        C = (0, o.e7)([L.Z], () => L.Z.getVoiceChannelId() === n.id, [n.id]),
        _ = (0, o.e7)([M.Z], () => M.Z.can(q.Plq.CONNECT, n)),
        v = (0, D.w8)(n.id, w.pV.SPEAKER),
        I = (0, o.e7)([g.Z], () => g.Z.getSelectedParticipant(n.id)),
        E = h && f !== q.IlC.POPOUT,
        [b, S] = l.useState(0),
        { isOnStartStageScreen: T } = (0, U.ZP)();
    (0, U.MV)(n);
    let j = (0, o.e7)([y.Z], () => y.Z.getToastsEnabled(n.id)),
        A = (0, Y.Z)(n) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        (t = T
            ? (0, i.jsx)(W.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, U.Ku)(!1), !C && (0, O.TM)(n);
                  }
              })
            : C
              ? (0, i.jsx)(V.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => S(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(G.Z, {
                    participants: v,
                    channel: n,
                    hasConnectPermission: _
                })),
        (0, i.jsx)(N.Z, {
            style: {
                height: 'calc(100% - '.concat(A, ')'),
                paddingTop: A
            },
            disableGradients: 0 === b && N.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(el, { channel: n }),
            renderBottomCenter: () =>
                C
                    ? (0, i.jsx)(z.Z, {
                          channel: n,
                          isOnStartStageScreen: T
                      })
                    : null,
            renderBottomRight: () =>
                C
                    ? (0, i.jsx)(ei, {
                          channel: n,
                          appContext: f,
                          popoutOpen: h,
                          popoutWindow: d,
                          popoutWindowAlwaysOnTop: u,
                          selectedParticipant: I
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(F.Z, {
                    inPopout: f === q.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: a,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !j || m || E
                    ? null
                    : (0, i.jsx)(x.ZP, {
                          children: (0, i.jsx)(Z.Z, {
                              className: r()(Q.chatToasts, { [Q.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: E ? { mainText: J.intl.string(J.t.J5bXZW) } : null,
            idle: !1,
            children: !E && t
        })
    );
}
function er(e) {
    let { channel: t } = e,
        [a, s] = l.useState(!1),
        u = l.useCallback(() => {
            s(!a);
        }, [a, s]),
        { popoutWindow: C, popoutWindowAlwaysOnTop: v } = (0, o.cj)([I.Z], () => ({
            popoutWindow: I.Z.getWindow(q.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.Z.getIsAlwaysOnTop(q.KJ3.CHANNEL_CALL_POPOUT)
        })),
        E = null != C && !C.closed,
        { analyticsLocations: b } = (0, f.ZP)(m.Z.STAGE_CHANNEL_CALL),
        Z = (0, p.bp)(),
        N = (0, o.e7)([g.Z], () => g.Z.getChatOpen(t.id), [t.id]),
        S = (0, o.e7)([P.Z], () => P.Z.getGuild(t.guild_id), [t.guild_id]);
    l.useEffect(() => {
        null == c.K.get($) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set($, Date.now()));
    }, []);
    let { width: T = 0, ref: j } = (0, h.Z)();
    return (0, i.jsx)(f.Gt, {
        value: b,
        children: (0, i.jsxs)(x.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: Q.container,
                    ref: j,
                    children: [
                        (0, i.jsx)(d.ThemeProvider, {
                            theme: q.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: r()(Q.callContainer, e, {
                                        [Q.sidebarVisible]: a,
                                        [Q.sidebarOrChatVisible]: a || N
                                    }),
                                    children: (0, i.jsx)(ea, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: u,
                                        showRequestToSpeakSidebar: a,
                                        popoutWindow: C,
                                        popoutWindowAlwaysOnTop: v,
                                        popoutOpen: E,
                                        chatOpen: N
                                    })
                                })
                        }),
                        a
                            ? (0, i.jsx)(H.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: N
                              })
                            : null,
                        (0, i.jsx)('div', {
                            className: Q.channelChatWrapper,
                            children:
                                N &&
                                (!E || (E && Z === q.IlC.POPOUT)) &&
                                (0, i.jsx)(_.Z, {
                                    channel: t,
                                    guild: S,
                                    maxWidth: T - 550
                                })
                        })
                    ]
                }),
                (0, i.jsx)(x.H_, {})
            ]
        })
    });
}
