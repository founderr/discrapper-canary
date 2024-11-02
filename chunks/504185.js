n.d(t, {
    Z: function () {
        return ea;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(393238),
    m = n(40851),
    p = n(100527),
    f = n(906732),
    g = n(358221),
    C = n(414910),
    x = n(909820),
    v = n(493010),
    _ = n(788983),
    I = n(928518),
    E = n(703656),
    b = n(493754),
    S = n(880831),
    Z = n(73563),
    T = n(800965),
    N = n(107169),
    j = n(891551),
    A = n(314897),
    y = n(979696),
    P = n(430824),
    M = n(496675),
    R = n(944486),
    L = n(358085),
    k = n(998502),
    O = n(922482),
    w = n(431328),
    D = n(501655),
    U = n(427679),
    B = n(513449),
    H = n(153349),
    F = n(901434),
    G = n(302270),
    V = n(308177),
    z = n(700483),
    W = n(686468),
    Y = n(801405),
    K = n(903108),
    q = n(981631),
    X = n(354459),
    J = n(388032),
    Q = n(336496);
let $ = 'HasBeenInStageChannel',
    ee = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, E.XU)(n, t), _.hP(e);
    },
    et = () => {
        d.Z.wait(() => _.xv(q.KJ3.CHANNEL_CALL_POPOUT));
    },
    en = (e) => {
        _.hY(q.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ei(e) {
    let { channel: t, appContext: n, popoutOpen: r, popoutWindow: a, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        u = t.getGuildId(),
        d = (0, o.e7)([R.Z], () => R.Z.getMostRecentSelectedTextChannelId(u), [u]),
        h = A.default.getId(),
        m = !(0, o.e7)([g.Z], () => g.Z.isFullscreenInContext(n)) && (!L.isPlatformEmbedded || (L.isPlatformEmbedded && k.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS))),
        p = null != c && c.type !== X.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == a ? void 0 : a.window) && void 0 !== e ? e : window;
        }, [a]),
        x = (0, Y.Z)({
            channel: t,
            appContext: n,
            popoutOpen: r,
            popoutWindow: a,
            currentWindow: f
        }),
        v = n === q.IlC.POPOUT && L.isPlatformEmbedded && k.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            p
                ? (0, i.jsx)(j.Z, {
                      context: (0, C.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: Q.volumeSlider
                  })
                : null,
            v
                ? (0, i.jsx)(N.Z, {
                      className: Q.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: en
                  })
                : null,
            m
                ? (0, i.jsx)(T.Z, {
                      className: Q.rightTrayIcon,
                      popoutOpen: r,
                      onOpenPopout: ee(t, d),
                      onClosePopout: et
                  })
                : null,
            x
        ]
    });
}
function el(e) {
    let { channel: t } = e,
        n = (0, m.bp)(),
        l = (0, o.e7)([M.Z], () => M.Z.can(q.Plq.CREATE_INSTANT_INVITE, t)),
        r = (0, o.e7)([P.Z], () => P.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([U.Z], () => U.Z.getStageInstanceByChannel(t.id)),
        s = l || (null == a ? void 0 : a.invite_code) != null;
    return null != r && s
        ? (0, i.jsx)(b.Z, {
              channel: t,
              appContext: n,
              className: Q.__invalid_leftTrayIcon,
              analyticsLocation: q.ZY5.GUILD_CHANNEL
          })
        : null;
}
function er(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: r, showRequestToSpeakSidebar: c, popoutWindow: u, popoutWindowAlwaysOnTop: d, popoutOpen: h, chatOpen: p } = e,
        f = (0, m.bp)(),
        C = (0, o.e7)([R.Z], () => R.Z.getVoiceChannelId() === n.id, [n.id]),
        v = (0, o.e7)([M.Z], () => M.Z.can(q.Plq.CONNECT, n)),
        _ = (0, w.w8)(n.id, D.pV.SPEAKER),
        I = (0, o.e7)([g.Z], () => g.Z.getSelectedParticipant(n.id)),
        E = h && f !== q.IlC.POPOUT,
        [b, T] = l.useState(0),
        { isOnStartStageScreen: N } = (0, B.ZP)();
    (0, B.MV)(n);
    let j = (0, o.e7)([y.Z], () => y.Z.getToastsEnabled(n.id)),
        A = (0, K.Z)(n) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        (t = N
            ? (0, i.jsx)(W.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, B.Ku)(!1), !C && (0, O.TM)(n);
                  }
              })
            : C
              ? (0, i.jsx)(V.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => T(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(F.Z, {
                    participants: _,
                    channel: n,
                    hasConnectPermission: v
                })),
        (0, i.jsx)(Z.Z, {
            style: {
                height: 'calc(100% - '.concat(A, ')'),
                paddingTop: A
            },
            disableGradients: 0 === b && Z.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(el, { channel: n }),
            renderBottomCenter: () =>
                C
                    ? (0, i.jsx)(z.Z, {
                          channel: n,
                          isOnStartStageScreen: N
                      })
                    : null,
            renderBottomRight: () =>
                C
                    ? (0, i.jsx)(ei, {
                          channel: n,
                          appContext: f,
                          popoutOpen: h,
                          popoutWindow: u,
                          popoutWindowAlwaysOnTop: d,
                          selectedParticipant: I
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(G.Z, {
                    inPopout: f === q.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: r,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !j || p || E
                    ? null
                    : (0, i.jsx)(x.ZP, {
                          children: (0, i.jsx)(S.Z, {
                              className: a()(Q.chatToasts, { [Q.rtsSidebarOpen]: c }),
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
function ea(e) {
    let { channel: t } = e,
        [r, s] = l.useState(!1),
        d = l.useCallback(() => {
            s(!r);
        }, [r, s]),
        { popoutWindow: C, popoutWindowAlwaysOnTop: _ } = (0, o.cj)([I.Z], () => ({
            popoutWindow: I.Z.getWindow(q.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.Z.getIsAlwaysOnTop(q.KJ3.CHANNEL_CALL_POPOUT)
        })),
        E = null != C && !C.closed,
        { analyticsLocations: b } = (0, f.ZP)(p.Z.STAGE_CHANNEL_CALL),
        S = (0, m.bp)(),
        Z = (0, o.e7)([g.Z], () => g.Z.getChatOpen(t.id), [t.id]),
        T = (0, o.e7)([P.Z], () => P.Z.getGuild(t.guild_id), [t.guild_id]);
    l.useEffect(() => {
        null == c.K.get($) &&
            ((0, u.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set($, Date.now()));
    }, []);
    let { width: N = 0, ref: j } = (0, h.Z)();
    return (0, i.jsx)(f.Gt, {
        value: b,
        children: (0, i.jsxs)(x.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: Q.container,
                    ref: j,
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: q.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: a()(Q.callContainer, e, {
                                        [Q.sidebarVisible]: r,
                                        [Q.sidebarOrChatVisible]: r || Z
                                    }),
                                    children: (0, i.jsx)(er, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: r,
                                        popoutWindow: C,
                                        popoutWindowAlwaysOnTop: _,
                                        popoutOpen: E,
                                        chatOpen: Z
                                    })
                                })
                        }),
                        r
                            ? (0, i.jsx)(H.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: Z
                              })
                            : null,
                        (0, i.jsx)('div', {
                            className: Q.channelChatWrapper,
                            children:
                                Z &&
                                (!E || (E && S === q.IlC.POPOUT)) &&
                                (0, i.jsx)(v.Z, {
                                    channel: t,
                                    guild: T,
                                    maxWidth: N - 550
                                })
                        })
                    ]
                }),
                (0, i.jsx)(x.H_, {})
            ]
        })
    });
}
