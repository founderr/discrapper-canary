n.d(t, {
    Z: function () {
        return eo;
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
    d = n(481060),
    u = n(570140),
    h = n(393238),
    p = n(40851),
    m = n(100527),
    f = n(906732),
    g = n(358221),
    C = n(414910),
    x = n(909820),
    v = n(493010),
    _ = n(71127),
    I = n(185935),
    E = n(788983),
    b = n(928518),
    Z = n(703656),
    S = n(493754),
    N = n(880831),
    T = n(73563),
    j = n(800965),
    A = n(107169),
    y = n(891551),
    P = n(314897),
    M = n(979696),
    R = n(430824),
    L = n(496675),
    k = n(944486),
    O = n(358085),
    D = n(998502),
    w = n(922482),
    B = n(431328),
    U = n(501655),
    H = n(427679),
    G = n(513449),
    F = n(153349),
    V = n(901434),
    z = n(302270),
    W = n(308177),
    K = n(700483),
    Y = n(686468),
    q = n(801405),
    X = n(903108),
    J = n(981631),
    Q = n(354459),
    $ = n(388032),
    ee = n(322455);
let et = 'HasBeenInStageChannel',
    en = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, Z.XU)(n, t), E.hP(e);
    },
    ei = () => {
        u.Z.wait(() => E.xv(J.KJ3.CHANNEL_CALL_POPOUT));
    },
    el = (e) => {
        E.hY(J.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function er(e) {
    let { channel: t, appContext: n, popoutOpen: r, popoutWindow: a, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        d = t.getGuildId(),
        u = (0, o.e7)([k.Z], () => k.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = P.default.getId(),
        p = !(0, o.e7)([g.Z], () => g.Z.isFullscreenInContext(n)) && (!O.isPlatformEmbedded || (O.isPlatformEmbedded && D.ZP.supportsFeature(J.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== Q.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == a ? void 0 : a.window) && void 0 !== e ? e : window;
        }, [a]),
        x = (0, q.Z)({
            channel: t,
            appContext: n,
            popoutOpen: r,
            popoutWindow: a,
            currentWindow: f
        }),
        v = n === J.IlC.POPOUT && O.isPlatformEmbedded && D.ZP.supportsFeature(J.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(y.Z, {
                      context: (0, C.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: ee.volumeSlider
                  })
                : null,
            v
                ? (0, i.jsx)(A.Z, {
                      className: ee.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: el
                  })
                : null,
            p
                ? (0, i.jsx)(j.Z, {
                      className: ee.rightTrayIcon,
                      popoutOpen: r,
                      onOpenPopout: en(t, u),
                      onClosePopout: ei
                  })
                : null,
            x
        ]
    });
}
function ea(e) {
    let { channel: t } = e,
        n = (0, p.bp)(),
        l = (0, o.e7)([L.Z], () => L.Z.can(J.Plq.CREATE_INSTANT_INVITE, t)),
        r = (0, o.e7)([R.Z], () => R.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([H.Z], () => H.Z.getStageInstanceByChannel(t.id)),
        s = l || (null == a ? void 0 : a.invite_code) != null;
    return null != r && s
        ? (0, i.jsx)(S.Z, {
              channel: t,
              appContext: n,
              className: ee.__invalid_leftTrayIcon,
              analyticsLocation: J.ZY5.GUILD_CHANNEL
          })
        : null;
}
function es(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: r, showRequestToSpeakSidebar: c, popoutWindow: d, popoutWindowAlwaysOnTop: u, popoutOpen: h, chatOpen: m } = e,
        f = (0, p.bp)(),
        C = (0, o.e7)([k.Z], () => k.Z.getVoiceChannelId() === n.id, [n.id]),
        v = (0, o.e7)([L.Z], () => L.Z.can(J.Plq.CONNECT, n)),
        _ = (0, B.w8)(n.id, U.pV.SPEAKER),
        I = (0, o.e7)([g.Z], () => g.Z.getSelectedParticipant(n.id)),
        E = h && f !== J.IlC.POPOUT,
        [b, Z] = l.useState(0),
        { isOnStartStageScreen: S } = (0, G.ZP)();
    (0, G.MV)(n);
    let j = (0, o.e7)([M.Z], () => M.Z.getToastsEnabled(n.id)),
        A = (0, X.Z)(n) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        (t = S
            ? (0, i.jsx)(Y.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, G.Ku)(!1), !C && (0, w.TM)(n);
                  }
              })
            : C
              ? (0, i.jsx)(W.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => Z(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(V.Z, {
                    participants: _,
                    channel: n,
                    hasConnectPermission: v
                })),
        (0, i.jsx)(T.Z, {
            style: {
                height: 'calc(100% - '.concat(A, ')'),
                paddingTop: A
            },
            disableGradients: 0 === b && T.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(ea, { channel: n }),
            renderBottomCenter: () =>
                C
                    ? (0, i.jsx)(K.Z, {
                          channel: n,
                          isOnStartStageScreen: S
                      })
                    : null,
            renderBottomRight: () =>
                C
                    ? (0, i.jsx)(er, {
                          channel: n,
                          appContext: f,
                          popoutOpen: h,
                          popoutWindow: d,
                          popoutWindowAlwaysOnTop: u,
                          selectedParticipant: I
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(z.Z, {
                    inPopout: f === J.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: r,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !j || m || E
                    ? null
                    : (0, i.jsx)(x.ZP, {
                          children: (0, i.jsx)(N.Z, {
                              className: a()(ee.chatToasts, { [ee.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: E ? { mainText: $.intl.string($.t.J5bXZW) } : null,
            idle: !1,
            children: !E && t
        })
    );
}
function eo(e) {
    let { channel: t } = e,
        [r, s] = l.useState(!1),
        u = l.useCallback(() => {
            s(!r);
        }, [r, s]),
        { popoutWindow: C, popoutWindowAlwaysOnTop: E } = (0, o.cj)([b.Z], () => ({
            popoutWindow: b.Z.getWindow(J.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: b.Z.getIsAlwaysOnTop(J.KJ3.CHANNEL_CALL_POPOUT)
        })),
        Z = null != C && !C.closed,
        { analyticsLocations: S } = (0, f.ZP)(m.Z.STAGE_CHANNEL_CALL),
        N = (0, p.bp)(),
        { chatOpen: T, participantsListOpen: j } = (0, o.cj)(
            [g.Z],
            () => ({
                chatOpen: g.Z.getChatOpen(t.id),
                participantsListOpen: g.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        A = (0, o.e7)([R.Z], () => R.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: y } = (0, I.Z)({ location: 'StageChannelCall' });
    l.useEffect(() => {
        null == c.K.get(et) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set(et, Date.now()));
    }, []);
    let { width: P = 0, ref: M } = (0, h.Z)(),
        L = P - 550,
        k = !Z || (Z && N === J.IlC.POPOUT);
    return (0, i.jsx)(f.Gt, {
        value: S,
        children: (0, i.jsxs)(x.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: ee.container,
                    ref: M,
                    children: [
                        (0, i.jsx)(d.ThemeProvider, {
                            theme: J.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: a()(ee.callContainer, e, {
                                        [ee.sidebarVisible]: r,
                                        [ee.sidebarOrChatVisible]: r || T || j
                                    }),
                                    children: (0, i.jsx)(es, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: u,
                                        showRequestToSpeakSidebar: r,
                                        popoutWindow: C,
                                        popoutWindowAlwaysOnTop: E,
                                        popoutOpen: Z,
                                        chatOpen: T
                                    })
                                })
                        }),
                        r
                            ? (0, i.jsx)(F.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: T
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: ee.channelChatWrapper,
                            children: [
                                T &&
                                    k &&
                                    (0, i.jsx)(v.Z, {
                                        channel: t,
                                        guild: A,
                                        maxWidth: L
                                    }),
                                j &&
                                    y &&
                                    k &&
                                    (0, i.jsx)(_.Z, {
                                        channel: t,
                                        maxWidth: L
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(x.H_, {})
            ]
        })
    });
}
