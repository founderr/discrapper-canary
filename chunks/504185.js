n.d(t, {
    Z: function () {
        return el;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(393238),
    p = n(40851),
    m = n(100527),
    _ = n(906732),
    f = n(358221),
    E = n(414910),
    C = n(909820),
    g = n(493010),
    I = n(788983),
    x = n(928518),
    T = n(703656),
    N = n(493754),
    S = n(880831),
    v = n(73563),
    Z = n(800965),
    A = n(107169),
    M = n(891551),
    b = n(314897),
    R = n(979696),
    L = n(430824),
    j = n(496675),
    O = n(944486),
    P = n(358085),
    y = n(998502),
    D = n(922482),
    k = n(431328),
    U = n(501655),
    w = n(427679),
    B = n(513449),
    H = n(153349),
    G = n(901434),
    V = n(302270),
    F = n(308177),
    W = n(700483),
    z = n(686468),
    Y = n(801405),
    K = n(903108),
    q = n(981631),
    X = n(354459),
    Q = n(689938),
    J = n(394738);
let $ = 'HasBeenInStageChannel',
    ee = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, T.XU)(n, t), I.hP(e);
    },
    et = () => {
        d.Z.wait(() => I.xv(q.KJ3.CHANNEL_CALL_POPOUT));
    },
    en = (e) => {
        I.hY(q.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ei(e) {
    let { channel: t, appContext: n, popoutOpen: s, popoutWindow: l, popoutWindowAlwaysOnTop: r, selectedParticipant: c } = e,
        u = t.getGuildId(),
        d = (0, o.e7)([O.Z], () => O.Z.getMostRecentSelectedTextChannelId(u), [u]),
        h = b.default.getId(),
        p = !(0, o.e7)([f.Z], () => f.Z.isFullscreenInContext(n)) && (!P.isPlatformEmbedded || (P.isPlatformEmbedded && y.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== X.fO.ACTIVITY && c.user.id !== h,
        _ = a.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.window) && void 0 !== e ? e : window;
        }, [l]),
        C = (0, Y.Z)({
            channel: t,
            appContext: n,
            popoutOpen: s,
            popoutWindow: l,
            currentWindow: _
        }),
        g = n === q.IlC.POPOUT && P.isPlatformEmbedded && y.ZP.supportsFeature(q.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(M.Z, {
                      context: (0, E.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: _,
                      sliderClassName: J.volumeSlider
                  })
                : null,
            g
                ? (0, i.jsx)(A.Z, {
                      className: J.rightTrayIcon,
                      popoutWindowAlwaysOnTop: r,
                      onToggleStayOnTop: en
                  })
                : null,
            p
                ? (0, i.jsx)(Z.Z, {
                      className: J.rightTrayIcon,
                      popoutOpen: s,
                      onOpenPopout: ee(t, d),
                      onClosePopout: et
                  })
                : null,
            C
        ]
    });
}
function ea(e) {
    let { channel: t } = e,
        n = (0, p.bp)(),
        a = (0, o.e7)([j.Z], () => j.Z.can(q.Plq.CREATE_INSTANT_INVITE, t)),
        s = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)),
        l = (0, o.e7)([w.Z], () => w.Z.getStageInstanceByChannel(t.id)),
        r = a || (null == l ? void 0 : l.invite_code) != null;
    return null != s && r
        ? (0, i.jsx)(N.Z, {
              channel: t,
              appContext: n,
              className: J.__invalid_leftTrayIcon,
              analyticsLocation: q.ZY5.GUILD_CHANNEL
          })
        : null;
}
function es(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: c, popoutWindow: u, popoutWindowAlwaysOnTop: d, popoutOpen: h, chatOpen: m } = e,
        _ = (0, p.bp)(),
        E = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId() === n.id, [n.id]),
        g = (0, o.e7)([j.Z], () => j.Z.can(q.Plq.CONNECT, n)),
        I = (0, k.w8)(n.id, U.pV.SPEAKER),
        x = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
        T = h && _ !== q.IlC.POPOUT,
        [N, Z] = a.useState(0),
        { isOnStartStageScreen: A } = (0, B.ZP)();
    (0, B.MV)(n);
    let M = (0, o.e7)([R.Z], () => R.Z.getToastsEnabled(n.id)),
        b = (0, K.Z)(n) ? (null != x ? '84px' : '124px') : null != x ? '0px' : '48px';
    return (
        (t = A
            ? (0, i.jsx)(z.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, B.Ku)(!1), !E && (0, D.TM)(n);
                  }
              })
            : E
              ? (0, i.jsx)(F.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, r.debounce)(() => Z(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(G.Z, {
                    participants: I,
                    channel: n,
                    hasConnectPermission: g
                })),
        (0, i.jsx)(v.Z, {
            style: {
                height: 'calc(100% - '.concat(b, ')'),
                paddingTop: b
            },
            disableGradients: 0 === N && v.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(ea, { channel: n }),
            renderBottomCenter: () =>
                E
                    ? (0, i.jsx)(W.Z, {
                          channel: n,
                          isOnStartStageScreen: A
                      })
                    : null,
            renderBottomRight: () =>
                E
                    ? (0, i.jsx)(ei, {
                          channel: n,
                          appContext: _,
                          popoutOpen: h,
                          popoutWindow: u,
                          popoutWindowAlwaysOnTop: d,
                          selectedParticipant: x
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(V.Z, {
                    inPopout: _ === q.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: s,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !M || m || T
                    ? null
                    : (0, i.jsx)(C.ZP, {
                          children: (0, i.jsx)(S.Z, {
                              className: l()(J.chatToasts, { [J.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: T ? { mainText: Q.Z.Messages.POPOUT_PLAYER_OPENED } : null,
            idle: !1,
            children: !T && t
        })
    );
}
function el(e) {
    let { channel: t } = e,
        [s, r] = a.useState(!1),
        d = a.useCallback(() => {
            r(!s);
        }, [s, r]),
        { popoutWindow: E, popoutWindowAlwaysOnTop: I } = (0, o.cj)([x.Z], () => ({
            popoutWindow: x.Z.getWindow(q.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: x.Z.getIsAlwaysOnTop(q.KJ3.CHANNEL_CALL_POPOUT)
        })),
        T = null != E && !E.closed,
        { analyticsLocations: N } = (0, _.ZP)(m.Z.STAGE_CHANNEL_CALL),
        S = (0, p.bp)(),
        v = (0, o.e7)([f.Z], () => f.Z.getChatOpen(t.id), [t.id]),
        Z = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]);
    a.useEffect(() => {
        null == c.K.get($) &&
            ((0, u.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set($, Date.now()));
    }, []);
    let { width: A = 0, ref: M } = (0, h.Z)();
    return (0, i.jsx)(_.Gt, {
        value: N,
        children: (0, i.jsxs)(C.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: J.container,
                    ref: M,
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: q.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: l()(J.callContainer, e, {
                                        [J.sidebarVisible]: s,
                                        [J.sidebarOrChatVisible]: s || v
                                    }),
                                    children: (0, i.jsx)(es, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: s,
                                        popoutWindow: E,
                                        popoutWindowAlwaysOnTop: I,
                                        popoutOpen: T,
                                        chatOpen: v
                                    })
                                })
                        }),
                        s
                            ? (0, i.jsx)(H.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: v
                              })
                            : null,
                        (0, i.jsx)('div', {
                            className: J.channelChatWrapper,
                            children:
                                v &&
                                (!T || (T && S === q.IlC.POPOUT)) &&
                                (0, i.jsx)(g.Z, {
                                    channel: t,
                                    guild: Z,
                                    maxWidth: A - 550
                                })
                        })
                    ]
                }),
                (0, i.jsx)(C.H_, {})
            ]
        })
    });
}
