n.d(t, {
    BP: function () {
        return ev;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    m = n(410575),
    f = n(607070),
    p = n(812206),
    h = n(835473),
    g = n(414910),
    v = n(415635),
    S = n(578976),
    I = n(955843),
    _ = n(332487),
    x = n(925329),
    E = n(649739),
    Z = n(574176),
    C = n(833858),
    y = n(223135),
    b = n(37091),
    T = n(6572),
    A = n(352978),
    N = n(936847),
    w = n(512384),
    j = n(6242),
    P = n(757692),
    R = n(386542),
    M = n(933843),
    O = n(746599),
    L = n(231664),
    k = n(614011),
    D = n(210975),
    U = n(695346),
    V = n(937995),
    F = n(456631),
    W = n(274459),
    B = n(314897),
    G = n(857192),
    z = n(77498),
    H = n(131951),
    Y = n(158776),
    J = n(594174),
    q = n(979651),
    X = n(374129),
    K = n(639351),
    Q = n(74538),
    $ = n(584729),
    ee = n(334374),
    et = n(849171),
    en = n(607187),
    ei = n(833519),
    el = n(462061),
    ea = n(623825),
    er = n(839662),
    es = n(981631),
    eo = n(354459),
    ec = n(37113),
    eu = n(524484),
    ed = n(65154),
    em = n(388032),
    ef = n(169501);
let ep = l.memo((e) => {
    var t, n, a, c, x;
    let { participant: C, onDoubleClick: y, onContextMenu: X, onClick: K, onMouseDown: ea, onKeyDown: ep, className: eh, style: ev, containerStyle: eS, channel: eI, width: e_, inPopout: ex, onVideoResize: eE, inCall: eZ = !1, selected: eC = !1, noBorder: ey = !1, noVideoRender: eb = !1, focused: eT = !1, blocked: eA = !1, fit: eN = A.L.CONTAIN, paused: ew = !1, pulseSpeakingIndicator: ej = !1, forceIdle: eP = !1 } = e,
        eR = l.useContext(V.h9) || eP,
        [eM, eO] = l.useState(!1),
        eL = U.Sb.useSetting(),
        ek = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
        [eD, eU] = l.useState(!1),
        eV = (0, o.e7)([B.default], () => B.default.getId()),
        eF = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
        eW = C.type === eo.fO.ACTIVITY ? null : null === (t = C.user) || void 0 === t ? void 0 : t.id,
        [eB] = (0, h.Z)(C.type === eo.fO.ACTIVITY ? [C.id] : []),
        eG = (0, o.e7)([b.Z], () => b.Z.getEnabled()),
        ez = (0, o.e7)([H.Z], () => null != eW && H.Z.isLocalVideoDisabled(eW, (0, g.Z)(C.type)), [eW, C.type]),
        eH = (0, o.e7)([H.Z], () => (null != eW ? H.Z.getVideoToggleState(eW, (0, g.Z)(C.type)) : es.ZUi.NONE), [eW, C.type]),
        eY = eH === es.ZUi.AUTO_PROBING,
        { speaking: eJ, ringing: eq, hasVideo: eX } = (0, er.Z)(C, eV),
        eK = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([q.Z], () => {
                    var e, i, l;
                    let a = q.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [H.Z],
                    () => {
                        let n = (0, g.Z)(t.type),
                            i = t.type !== eo.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: H.Z.isLocalMute(i, n),
                                  localVideoDisabled: H.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: H.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: s.muted,
                serverDeafened: s.deafened,
                suppressed: s.suppressed,
                localMuted: c.muted,
                muted: null !== (a = t.type === eo.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (r = t.type === eo.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
            };
        })(eV, C, eI.getGuildId()),
        eQ = C.type === eo.fO.STREAM && eW === eV;
    l.useEffect(() => {
        if (eQ && !Q.ZP.isPremium(eF) && null != eI.hdStreamingUntil && new Date(eI.hdStreamingUntil) > new Date()) {
            let e = setTimeout(
                () => {
                    let e = H.Z.getGoLiveSource(),
                        t = (0, S.s)(ec.LY.RESOLUTION_720, ec.ws.FPS_30, e);
                    d.Z.setGoLiveSource(t);
                },
                new Date(eI.hdStreamingUntil).getTime() - Date.now()
            );
            return () => clearTimeout(e);
        }
    });
    let e$ = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: e0 } = (0, R.k)(s.q.STREAM_HIGH_QUALITY),
        e1 = (0, L.Z)(),
        e3 = e$ && eQ && null != e1,
        e2 = (0, P.o)(C, eF),
        e9 = (0, j.lL)('CallTile', !0, eF, e2),
        e7 = (0, o.e7)([F.Z], () => (C.type === eo.fO.USER && null != eW ? F.Z.getEffectForUserId(eW) : null)),
        e8 = (0, o.e7)([q.Z], () => q.Z.getVoicePlatformForChannel(eI.id, null != eW ? eW : es.lds)),
        { enableHangStatus: e6 } = Z.n.useExperiment({
            guildId: eI.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e4 } = E.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e5 = e4 || e6,
        { hangStatusActivity: te, gameActivity: tt } = (0, o.cj)(
            [Y.Z],
            () => ({
                hangStatusActivity: e6 && null != eW ? Y.Z.findActivity(eW, (e) => e.type === es.IIU.HANG_STATUS) : null,
                gameActivity: e5 && null != eW ? Y.Z.findActivity(eW, (e) => null != e.application_id && e.type === es.IIU.PLAYING) : null
            }),
            [e6, eW, e5]
        ),
        tn = (0, o.e7)([z.Z], () => ((null == tt ? void 0 : tt.application_id) != null ? z.Z.getDetectableGame(tt.application_id) : null)),
        ti = (0, o.e7)([p.Z], () => (null != tn && (null == tt ? void 0 : tt.application_id) != null ? p.Z.getApplication(null == tt ? void 0 : tt.application_id) : void 0)),
        tl = (0, D.wV)({
            userId: eW,
            channelId: eI.id,
            location: 'CallTile'
        }),
        ta = (0, D.zU)({
            streamKey: C.type === eo.fO.STREAM ? C.id : null,
            channelId: eI.id,
            location: 'CallTile'
        }),
        tr = l.useMemo(() => (C.type === eo.fO.STREAM ? null != ta && ta : C.type === eo.fO.USER && null != tl && tl), [ta, tl, C.type]);
    l.useEffect(() => {
        eO(eT);
    }, [eT]);
    let [ts, to] = l.useState(!1),
        tc = l.useCallback(() => {
            !f.Z.useReducedMotion && to(!0);
        }, []);
    (0, I.J)(eI, tc);
    let tu = l.useCallback(() => {
            null != eW && d.Z.toggleLocalMute(eW, ed.Yn.STREAM);
        }, [eW]),
        td = l.useCallback(() => {
            (0, O.hP)();
        }, []),
        tm = l.useCallback(
            (e) => {
                null == K || K(C, e);
            },
            [K, C]
        ),
        tf = l.useCallback(
            (e) => {
                null == y || y(C, e);
            },
            [y, C]
        ),
        tp = l.useCallback(
            (e) => {
                null == X || X(C, e);
            },
            [X, C]
        ),
        th = eR;
    e3 && (th = !1);
    let tg = null,
        tv = null,
        tS = '';
    switch (C.type) {
        case eo.fO.STREAM:
            (tg = (0, i.jsx)(ei.Z, {
                participant: C,
                selected: eC,
                width: e_,
                fit: eN,
                onVideoResize: eE,
                paused: ew,
                inPopout: ex,
                focused: eT
            })),
                (tv = (0, i.jsx)(ei._, {
                    participant: C,
                    selected: eC,
                    width: e_,
                    focused: eT,
                    idle: th,
                    premiumIndicator: e3 || e9.enabled
                })),
                (tS = em.intl.formatToPlainString(em.t.gHPz3d, { streamerName: C.user.username }));
            break;
        case eo.fO.USER:
            (tg = (0, i.jsx)(el.Z, {
                channel: eI,
                inCall: eZ,
                participant: C,
                fit: eN,
                onVideoResize: eE,
                paused: ew,
                selected: eC,
                width: e_,
                blocked: eA,
                noVideoRender: eb || eY,
                pulseSpeakingIndicator: ej
            })),
                (tv = (0, i.jsx)(el.T, {
                    userId: C.user.id,
                    channelId: eI.id
                })),
                (tS = em.intl.formatToPlainString(em.t['iC/x/f'], { username: C.user.username }));
            break;
        case eo.fO.ACTIVITY:
            (tg = (0, i.jsx)(et.ZP, {
                interactible: eT,
                participant: C,
                selected: eC,
                channel: eI,
                width: e_
            })),
                (tS = em.intl.formatToPlainString(em.t.YCvOsL, { activityName: null == eB ? void 0 : eB.name }));
            break;
        case eo.fO.HIDDEN_STREAM:
            tg = (0, i.jsx)(ei.Z, {
                participant: C,
                selected: eC,
                width: e_,
                fit: eN,
                onVideoResize: eE,
                paused: ew,
                inPopout: ex,
                focused: eT
            });
    }
    let tI = l.useRef(null),
        t_ = C.type === eo.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(m.Z, {
        section: es.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: r()(ef.wrapper, { [ef.ringing]: eq }, eh),
            style: eS,
            onMouseEnter: () => {
                eU(!0);
            },
            onMouseLeave: () => {
                eU(!1);
            },
            children: [
                ts &&
                    C.type === eo.fO.STREAM &&
                    (0, i.jsx)(_.Z, {
                        baseTileRef: tI.current,
                        cleanup: () => to(!1)
                    }),
                (0, i.jsxs)(w.Z, {
                    shakeLocation: eu.oZ.VOICE_USER,
                    isShaking: eJ,
                    className: ef.tile,
                    children: [
                        (0, i.jsx)(en.Z, {
                            ref: tI,
                            className: r()(ef.tile, {
                                [ef.noBorder]: ey,
                                [ef.noInteraction]: null == K,
                                [ef.idle]: eR
                            }),
                            noBorder: ey,
                            style: ev,
                            participantUserId: eW,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tS,
                                className: ef.tileChild,
                                onDoubleClick: tf,
                                onContextMenu: tp,
                                onClick: tm,
                                onMouseDown: ea,
                                onKeyDown: ep,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e7 && null != eW
                                        ? (0, i.jsx)(W.Z, {
                                              voiceChannelEffect: e7,
                                              onComplete: () => (0, F.H)(eW),
                                              userId: eW
                                          })
                                        : null,
                                    C.type === eo.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: ef.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(v.Z, {
                                                  userId: eW,
                                                  channelId: eI.id,
                                                  guildId: eI.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tI ? void 0 : null === (n = tI.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (x = null == tI ? void 0 : null === (a = tI.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== x ? x : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tg,
                                    e3
                                        ? (0, i.jsx)(k.W, {
                                              onPlayed: td,
                                              played: e0.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    ey
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: ef.indicators,
                                              children: tv
                                          }),
                                    eC
                                        ? (0, i.jsx)('div', {
                                              className: ef.selectedScreen,
                                              children: (0, i.jsx)(t_, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: ef.selectedIcon
                                              })
                                          })
                                        : null,
                                    C.type !== eo.fO.ACTIVITY
                                        ? (0, i.jsx)(eg, {
                                              focused: eT,
                                              width: e_,
                                              inCall: eZ,
                                              participantType: C.type,
                                              hasVideo: null != eX && eX,
                                              ...eK,
                                              idle: eR,
                                              platform: e8,
                                              title: (0, $.Z)(eI, C),
                                              blocked: eA,
                                              localVideoDisabled: ez,
                                              videoToggleState: eH,
                                              hideAudioIcon: eQ,
                                              onContextMenu: tp,
                                              onToggleMute: tu,
                                              participantUserId: eW,
                                              hangStatusActivity: te,
                                              application: ti,
                                              speaking: eJ,
                                              secureFramesVerified: tr
                                          })
                                        : null,
                                    C.type === eo.fO.USER && eG
                                        ? (0, i.jsx)(T.Z, {
                                              userId: C.id,
                                              channelId: eI.id
                                          })
                                        : null,
                                    eZ && !ey
                                        ? (0, i.jsx)('div', {
                                              className: r()(ef.border, {
                                                  [ef.voiceChannelEffect]: !eT && null != e7,
                                                  [ef.speaking]: eJ && !eT
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eL &&
                            ek &&
                            eD &&
                            (0, i.jsx)(ee.Z, {
                                currentUserId: eV,
                                participant: C
                            }),
                        (0, i.jsx)(N.Z, {
                            isFiring: eM,
                            callTileRef: tI.current
                        })
                    ]
                })
            ]
        })
    });
});
function eh(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === eo.fO.STREAM)
        return n === eo.wR.XBOX
            ? (0, i.jsx)(K.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case eo.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case eo.wR.XBOX:
            return (0, i.jsx)(K.Z, { className: l });
        case eo.wR.PLAYSTATION:
            return (0, i.jsx)(X.Z, { className: l });
        default:
            return null;
    }
}
ep.displayName = 'CallTile';
let eg = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: v, videoToggleState: S, focused: I, blocked: _, hideAudioIcon: E, participantType: Z, participantUserId: b, onContextMenu: T, onToggleMute: A, platform: N, hangStatusActivity: w, application: j, speaking: P, secureFramesVerified: R } = e,
        M = null,
        O = null,
        L = null,
        k = null,
        D = (0, ea.K)(f),
        U = (0, ea.N)(f),
        V = (0, o.e7)([H.Z], () => null != b && H.Z.isLocalVideoAutoDisabled(b, (0, g.Z)(Z)), [b, Z]),
        F = (0, u.useRedesignIconContext)().enabled;
    if (!E) {
        if (l && Z === eo.fO.STREAM && p && !I)
            M = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(ef.interactive, ef.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || Z !== eo.fO.STREAM || !p || D || I) {
            if (F) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (M = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                M = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            M = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(ef.interactive, ef.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && H.Z.supports(ed.AN.VIDEO)) || !p
            ? h &&
              p &&
              v &&
              !V &&
              (O = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: ef.localMuteStrikethrough
              }))
            : (O = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        Z === eo.fO.STREAM &&
            !I &&
            p &&
            (L = (0, i.jsx)(u.Tooltip, {
                text: em.intl.string(em.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), T(e);
                        },
                        className: r()(ef.status, ef.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        Z === eo.fO.USER && null != w
            ? (k = (0, i.jsx)(u.Tooltip, {
                  text: (0, C.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(y.Z, {
                              hangStatusActivity: w,
                              className: ef.hangStatusIcon,
                              animate: P
                          })
                      })
              }))
            : Z === eo.fO.USER &&
              null != j &&
              (k = (0, i.jsx)(u.Tooltip, {
                  text: em.intl.formatToPlainString(em.t.Sq9xJy, { game: j.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(ef.hangStatusContainer, { [ef.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(x.Z, {
                              className: ef.hangStatusIcon,
                              game: j,
                              size: x.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: ef.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(ef.overlayTop, { [ef.small]: f < 195 }),
                    children:
                        V || S === es.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: ef.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: r()(ef.overlayTitle, ef.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: ef.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: ef.overlayTitleText,
                                              children: em.intl.string(em.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: r()(ef.overlayBottom, { [ef.small]: f < 195 }),
                    children: [
                        U
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(ef.overlayTitle, { [ef.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      _
                                          ? (0, i.jsx)('div', {
                                                className: ef.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: ef.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eh, {
                                          participantType: Z,
                                          platform: N,
                                          className: ef.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: ef.overlayTitleText,
                                                children: m
                                            })
                                          : null,
                                      R &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: em.intl.string(em.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: ef.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': em.intl.string(em.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: ef.statusContainer,
                            children: [
                                null != O &&
                                    (0, i.jsx)('div', {
                                        className: ef.status,
                                        children: O
                                    }),
                                null != M &&
                                    (0, i.jsx)('div', {
                                        className: ef.status,
                                        children: M
                                    }),
                                L,
                                k
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
eg.displayName = 'CallTileOverlay';
let ev = A.L;
t.ZP = ep;
