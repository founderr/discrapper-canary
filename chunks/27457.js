n.d(t, {
    BP: function () {
        return em;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    h = n(410575),
    p = n(607070),
    m = n(812206),
    _ = n(835473),
    f = n(414910),
    E = n(415635),
    g = n(120619),
    C = n(332487),
    I = n(925329),
    T = n(649739),
    x = n(574176),
    S = n(833858),
    v = n(223135),
    N = n(37091),
    A = n(6572),
    Z = n(352978),
    M = n(535400),
    b = n(512384),
    R = n(6242),
    L = n(757692),
    P = n(386542),
    j = n(933843),
    O = n(746599),
    y = n(231664),
    D = n(614011),
    U = n(210975),
    k = n(695346),
    w = n(937995),
    B = n(456631),
    H = n(274459),
    G = n(314897),
    V = n(857192),
    F = n(77498),
    W = n(131951),
    z = n(158776),
    Y = n(594174),
    K = n(979651),
    q = n(374129),
    X = n(639351),
    J = n(584729),
    Q = n(334374),
    $ = n(849171),
    ee = n(607187),
    et = n(833519),
    en = n(462061),
    ei = n(623825),
    es = n(839662),
    ea = n(981631),
    el = n(354459),
    er = n(524484),
    eo = n(65154),
    ec = n(689938),
    eu = n(810190);
let ed = s.memo((e) => {
    var t, n, a, c, I;
    let { participant: S, onDoubleClick: v, onContextMenu: q, onClick: X, onMouseDown: ei, onKeyDown: ed, className: eh, style: em, channel: e_, width: ef, inPopout: eE, onVideoResize: eg, inCall: eC = !1, selected: eI = !1, noBorder: eT = !1, noVideoRender: ex = !1, focused: eS = !1, blocked: ev = !1, fit: eN = Z.L.CONTAIN, paused: eA = !1, pulseSpeakingIndicator: eZ = !1 } = e,
        eM = s.useContext(w.h9),
        [eb, eR] = s.useState(!1),
        eL = k.Sb.useSetting(),
        eP = (0, o.e7)([V.default], () => V.default.isStreamInfoOverlayEnabled),
        [ej, eO] = s.useState(!1),
        ey = (0, o.e7)([G.default], () => G.default.getId()),
        eD = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        eU = S.type === el.fO.ACTIVITY ? null : null === (t = S.user) || void 0 === t ? void 0 : t.id,
        [ek] = (0, _.Z)(S.type === el.fO.ACTIVITY ? [S.id] : []),
        ew = (0, o.e7)([N.Z], () => N.Z.getEnabled()),
        eB = (0, o.e7)([W.Z], () => null != eU && W.Z.isLocalVideoDisabled(eU, (0, f.Z)(S.type)), [eU, S.type]),
        eH = (0, o.e7)([W.Z], () => (null != eU ? W.Z.getVideoToggleState(eU, (0, f.Z)(S.type)) : ea.ZUi.NONE), [eU, S.type]),
        eG = eH === ea.ZUi.AUTO_PROBING,
        { speaking: eV, ringing: eF, hasVideo: eW } = (0, es.Z)(S, ey),
        ez = (function (e, t, n) {
            var i, s, a, l;
            let r = (0, o.cj)([K.Z], () => {
                    var e, i, s;
                    let a = K.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (s = null == a ? void 0 : a.suppress) && void 0 !== s && s,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [W.Z],
                    () => {
                        let n = (0, f.Z)(t.type),
                            i = t.type !== el.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: W.Z.isLocalMute(i, n),
                                  localVideoDisabled: W.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: W.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: r.muted,
                serverDeafened: r.deafened,
                suppressed: r.suppressed,
                localMuted: c.muted,
                muted: null !== (a = t.type === el.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (l = t.type === el.fO.USER && (null === (s = t.voiceState) || void 0 === s ? void 0 : s.isVoiceDeafened())) && void 0 !== l && l
            };
        })(ey, S, e_.getGuildId()),
        eY = S.type === el.fO.STREAM && eU === ey,
        eK = (0, j.So)(r.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: eq } = (0, P.k)(r.q.STREAM_HIGH_QUALITY),
        eX = (0, y.Z)(),
        eJ = eK && eY && null != eX,
        eQ = (0, L.o)(S, eD),
        e$ = (0, R.lL)('CallTile', !0, eD, eQ),
        e0 = (0, o.e7)([B.Z], () => (S.type === el.fO.USER && null != eU ? B.Z.getEffectForUserId(eU) : null)),
        e1 = (0, o.e7)([K.Z], () => K.Z.getVoicePlatformForChannel(e_.id, null != eU ? eU : ea.lds)),
        { enableHangStatus: e2 } = x.n.useExperiment({
            guildId: e_.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e3 } = T.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e4 = e3 || e2,
        { hangStatusActivity: e7, gameActivity: e6 } = (0, o.cj)(
            [z.Z],
            () => ({
                hangStatusActivity: e2 && null != eU ? z.Z.findActivity(eU, (e) => e.type === ea.IIU.HANG_STATUS) : null,
                gameActivity: e4 && null != eU ? z.Z.findActivity(eU, (e) => null != e.application_id && e.type === ea.IIU.PLAYING) : null
            }),
            [e2, eU, e4]
        ),
        e9 = (0, o.e7)([F.Z], () => ((null == e6 ? void 0 : e6.application_id) != null ? F.Z.getDetectableGame(e6.application_id) : null)),
        e5 = (0, o.e7)([m.Z], () => (null != e9 && (null == e6 ? void 0 : e6.application_id) != null ? m.Z.getApplication(null == e6 ? void 0 : e6.application_id) : void 0)),
        e8 = (0, U.wV)({
            userId: eU,
            channelId: e_.id,
            location: 'CallTile'
        }),
        te = (0, U.zU)({
            streamKey: S.type === el.fO.STREAM ? S.id : null,
            channelId: e_.id,
            location: 'CallTile'
        }),
        tt = s.useMemo(() => (S.type === el.fO.STREAM ? null != te && te : S.type === el.fO.USER && null != e8 && e8), [te, e8, S.type]);
    s.useEffect(() => {
        eR(eS);
    }, [eS]);
    let tn = e_.hdStreamingUntil,
        ti = s.useRef(!0),
        [ts, ta] = s.useState(!1),
        tl = (0, o.e7)([g.Z], () => g.Z.getPlayedAnimation()),
        tr = (0, o.e7)([p.Z], () => p.Z.useReducedMotion);
    s.useEffect(() => {
        if (ti.current) {
            ti.current = !1;
            return;
        }
        null != tn && new Date(tn) > new Date() && !tr && ta(!0);
    }, [tn]),
        s.useEffect(() => {
            tl && ta(!1);
        }, [tl]);
    let to = s.useCallback(() => {
            null != eU && d.Z.toggleLocalMute(eU, eo.Yn.STREAM);
        }, [eU]),
        tc = s.useCallback(() => {
            (0, O.hP)();
        }, []),
        tu = s.useCallback(
            (e) => {
                null == X || X(S, e);
            },
            [X, S]
        ),
        td = s.useCallback(
            (e) => {
                null == v || v(S, e);
            },
            [v, S]
        ),
        th = s.useCallback(
            (e) => {
                null == q || q(S, e);
            },
            [q, S]
        ),
        tp = eM;
    eJ && (tp = !1);
    let tm = null,
        t_ = null,
        tf = '';
    switch (S.type) {
        case el.fO.STREAM:
            (tm = (0, i.jsx)(et.Z, {
                participant: S,
                selected: eI,
                width: ef,
                fit: eN,
                onVideoResize: eg,
                paused: eA,
                inPopout: eE,
                focused: eS
            })),
                (t_ = (0, i.jsx)(et._, {
                    participant: S,
                    selected: eI,
                    width: ef,
                    focused: eS,
                    idle: tp,
                    premiumIndicator: eJ || e$.enabled
                })),
                (tf = ec.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({ streamerName: S.user.username }));
            break;
        case el.fO.USER:
            (tm = (0, i.jsx)(en.Z, {
                channel: e_,
                inCall: eC,
                participant: S,
                fit: eN,
                onVideoResize: eg,
                paused: eA,
                selected: eI,
                width: ef,
                blocked: ev,
                noVideoRender: ex || eG,
                pulseSpeakingIndicator: eZ
            })),
                (t_ = (0, i.jsx)(en.T, {
                    userId: S.user.id,
                    channelId: e_.id
                })),
                (tf = ec.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({ username: S.user.username }));
            break;
        case el.fO.ACTIVITY:
            (tm = (0, i.jsx)($.ZP, {
                interactible: eS,
                participant: S,
                selected: eI,
                channel: e_,
                width: ef
            })),
                (tf = ec.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({ activityName: null == ek ? void 0 : ek.name }));
            break;
        case el.fO.HIDDEN_STREAM:
            tm = (0, i.jsx)(et.Z, {
                participant: S,
                selected: eI,
                width: ef,
                fit: eN,
                onVideoResize: eg,
                paused: eA,
                inPopout: eE,
                focused: eS
            });
    }
    let tE = s.useRef(null),
        tg = S.type === el.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(h.Z, {
        section: ea.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: l()(eu.wrapper, { [eu.ringing]: eF }, eh),
            onMouseEnter: () => {
                eO(!0);
            },
            onMouseLeave: () => {
                eO(!1);
            },
            children: [
                ts && S.type === el.fO.STREAM && (0, i.jsx)(C.Z, {}),
                (0, i.jsxs)(b.Z, {
                    shakeLocation: er.oZ.VOICE_USER,
                    isShaking: eV,
                    className: eu.tile,
                    children: [
                        (0, i.jsx)(ee.Z, {
                            ref: tE,
                            className: l()(eu.tile, {
                                [eu.noBorder]: eT,
                                [eu.noInteraction]: null == X,
                                [eu.idle]: eM
                            }),
                            noBorder: eT,
                            style: em,
                            participantUserId: eU,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tf,
                                className: eu.tileChild,
                                onDoubleClick: td,
                                onContextMenu: th,
                                onClick: tu,
                                onMouseDown: ei,
                                onKeyDown: ed,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e0 && null != eU
                                        ? (0, i.jsx)(H.Z, {
                                              voiceChannelEffect: e0,
                                              onComplete: () => (0, B.H)(eU),
                                              userId: eU
                                          })
                                        : null,
                                    S.type === el.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: eu.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(E.Z, {
                                                  userId: eU,
                                                  channelId: e_.id,
                                                  guildId: e_.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tE ? void 0 : null === (n = tE.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (I = null == tE ? void 0 : null === (a = tE.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== I ? I : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tm,
                                    eJ
                                        ? (0, i.jsx)(D.W, {
                                              onPlayed: tc,
                                              played: eq.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    eT
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: eu.indicators,
                                              children: t_
                                          }),
                                    eI
                                        ? (0, i.jsx)('div', {
                                              className: eu.selectedScreen,
                                              children: (0, i.jsx)(tg, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: eu.selectedIcon
                                              })
                                          })
                                        : null,
                                    S.type !== el.fO.ACTIVITY
                                        ? (0, i.jsx)(ep, {
                                              focused: eS,
                                              width: ef,
                                              inCall: eC,
                                              participantType: S.type,
                                              hasVideo: null != eW && eW,
                                              ...ez,
                                              idle: eM,
                                              platform: e1,
                                              title: (0, J.Z)(e_, S),
                                              blocked: ev,
                                              localVideoDisabled: eB,
                                              videoToggleState: eH,
                                              hideAudioIcon: eY,
                                              onContextMenu: th,
                                              onToggleMute: to,
                                              participantUserId: eU,
                                              hangStatusActivity: e7,
                                              application: e5,
                                              speaking: eV,
                                              secureFramesVerified: tt
                                          })
                                        : null,
                                    S.type === el.fO.USER && ew
                                        ? (0, i.jsx)(A.Z, {
                                              userId: S.id,
                                              channelId: e_.id
                                          })
                                        : null,
                                    eC && !eT
                                        ? (0, i.jsx)('div', {
                                              className: l()(eu.border, {
                                                  [eu.voiceChannelEffect]: !eS && null != e0,
                                                  [eu.speaking]: eV && !eS
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eL &&
                            eP &&
                            ej &&
                            (0, i.jsx)(Q.Z, {
                                currentUserId: ey,
                                participant: S
                            }),
                        (0, i.jsx)(M.Z, {
                            isFiring: eb,
                            callTileRef: tE.current
                        })
                    ]
                })
            ]
        })
    });
});
function eh(e) {
    let { participantType: t, platform: n, className: s } = e;
    if (t === el.fO.STREAM)
        return n === el.wR.XBOX
            ? (0, i.jsx)(X.Z, { className: s })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: s
              });
    switch (n) {
        case el.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: s
            });
        case el.wR.XBOX:
            return (0, i.jsx)(X.Z, { className: s });
        case el.wR.PLAYSTATION:
            return (0, i.jsx)(q.Z, { className: s });
        default:
            return null;
    }
}
ed.displayName = 'CallTile';
let ep = s.memo((e) => {
    let { muted: t, deafened: n, localMuted: s, serverMuted: a, serverDeafened: r, idle: d, title: h, width: p, hasVideo: m, inCall: _, localVideoDisabled: E, videoToggleState: g, focused: C, blocked: T, hideAudioIcon: x, participantType: N, participantUserId: A, onContextMenu: Z, onToggleMute: M, platform: b, hangStatusActivity: R, application: L, speaking: P, secureFramesVerified: j } = e,
        O = null,
        y = null,
        D = null,
        U = null,
        k = (0, ei.K)(p),
        w = (0, ei.N)(p),
        B = (0, o.e7)([W.Z], () => null != A && W.Z.isLocalVideoAutoDisabled(A, (0, f.Z)(N)), [A, N]),
        H = (0, u.useRedesignIconContext)().enabled;
    if (!x) {
        if (s && N === el.fO.STREAM && m && !C)
            O = (0, i.jsx)(u.Tooltip, {
                text: ec.Z.Messages.UNMUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (s || N !== el.fO.STREAM || !m || k || C) {
            if (H) {
                let e;
                r ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : s ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (O = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || s) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                O = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            O = (0, i.jsx)(u.Tooltip, {
                text: ec.Z.Messages.MUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (_ && W.Z.supports(eo.AN.VIDEO)) || !m
            ? _ &&
              m &&
              E &&
              !B &&
              (y = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eu.localMuteStrikethrough
              }))
            : (y = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        N === el.fO.STREAM &&
            !C &&
            m &&
            (D = (0, i.jsx)(u.Tooltip, {
                text: ec.Z.Messages.OPTIONS,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), Z(e);
                        },
                        className: l()(eu.status, eu.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        N === el.fO.USER && null != R
            ? (U = (0, i.jsx)(u.Tooltip, {
                  text: (0, S.O8)(R),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(eu.hangStatusContainer, { [eu.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(v.Z, {
                              hangStatusActivity: R,
                              className: eu.hangStatusIcon,
                              animate: P
                          })
                      })
              }))
            : N === el.fO.USER &&
              null != L &&
              (U = (0, i.jsx)(u.Tooltip, {
                  text: ec.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: L.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(eu.hangStatusContainer, { [eu.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(I.Z, {
                              className: eu.hangStatusIcon,
                              game: L,
                              size: I.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eu.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: l()(eu.overlayTop, { [eu.small]: p < 195 }),
                    children:
                        B || g === ea.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eu.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: l()(eu.overlayTitle, eu.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: eu.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: eu.overlayTitleText,
                                              children: ec.Z.Messages.UNSTABLE_CONNECTION
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: l()(eu.overlayBottom, { [eu.small]: p < 195 }),
                    children: [
                        w
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: l()(eu.overlayTitle, { [eu.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      T
                                          ? (0, i.jsx)('div', {
                                                className: eu.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: eu.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eh, {
                                          participantType: N,
                                          platform: b,
                                          className: eu.titleIcon
                                      }),
                                      null != h && '' !== h
                                          ? (0, i.jsx)('span', {
                                                className: eu.overlayTitleText,
                                                children: h
                                            })
                                          : null,
                                      j &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: ec.Z.Messages.E2EE_USER_VERIFIED_TOOLTIP,
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: eu.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ec.Z.Messages.E2EE_USER_VERIFIED_A11Y
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eu.statusContainer,
                            children: [
                                null != y &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: y
                                    }),
                                null != O &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: O
                                    }),
                                D,
                                U
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
ep.displayName = 'CallTileOverlay';
let em = Z.L;
t.ZP = ed;
