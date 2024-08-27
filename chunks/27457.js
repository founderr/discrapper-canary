n.d(t, {
    BP: function () {
        return ed;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    h = n(410575),
    p = n(812206),
    m = n(835473),
    _ = n(414910),
    f = n(415635),
    E = n(925329),
    C = n(649739),
    g = n(574176),
    I = n(833858),
    x = n(223135),
    T = n(37091),
    N = n(6572),
    S = n(352978),
    v = n(535400),
    Z = n(512384),
    A = n(6242),
    M = n(757692),
    b = n(386542),
    R = n(933843),
    L = n(746599),
    j = n(231664),
    O = n(614011),
    P = n(210975),
    y = n(695346),
    D = n(937995),
    k = n(456631),
    U = n(274459),
    w = n(314897),
    B = n(857192),
    H = n(77498),
    G = n(131951),
    V = n(158776),
    F = n(594174),
    W = n(979651),
    z = n(374129),
    Y = n(639351),
    K = n(584729),
    q = n(334374),
    X = n(849171),
    Q = n(607187),
    J = n(833519),
    $ = n(462061),
    ee = n(623825),
    et = n(839662),
    en = n(981631),
    ei = n(354459),
    ea = n(524484),
    es = n(65154),
    el = n(689938),
    er = n(149050);
let eo = a.memo((e) => {
    var t, n, s, c, E;
    let { participant: I, onDoubleClick: x, onContextMenu: z, onClick: Y, onMouseDown: ee, onKeyDown: eo, className: ec, style: ed, channel: eh, width: ep, inPopout: em, onVideoResize: e_, inCall: ef = !1, selected: eE = !1, noBorder: eC = !1, noVideoRender: eg = !1, focused: eI = !1, blocked: ex = !1, fit: eT = S.L.CONTAIN, paused: eN = !1, pulseSpeakingIndicator: eS = !1 } = e,
        ev = a.useContext(D.h9),
        [eZ, eA] = a.useState(!1),
        eM = y.Sb.useSetting(),
        eb = (0, o.e7)([B.default], () => B.default.isStreamInfoOverlayEnabled),
        [eR, eL] = a.useState(!1),
        ej = (0, o.e7)([w.default], () => w.default.getId()),
        eO = (0, o.e7)([F.default], () => F.default.getCurrentUser()),
        eP = I.type === ei.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id,
        [ey] = (0, m.Z)(I.type === ei.fO.ACTIVITY ? [I.id] : []),
        eD = (0, o.e7)([T.Z], () => T.Z.getEnabled()),
        ek = (0, o.e7)([G.Z], () => null != eP && G.Z.isLocalVideoDisabled(eP, (0, _.Z)(I.type)), [eP, I.type]),
        eU = (0, o.e7)([G.Z], () => (null != eP ? G.Z.getVideoToggleState(eP, (0, _.Z)(I.type)) : en.ZUi.NONE), [eP, I.type]),
        ew = eU === en.ZUi.AUTO_PROBING,
        { speaking: eB, ringing: eH, hasVideo: eG } = (0, et.Z)(I, ej),
        eV = (function (e, t, n) {
            var i, a, s, l;
            let r = (0, o.cj)([W.Z], () => {
                    var e, i, a;
                    let s = W.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == s ? void 0 : s.deaf) && void 0 !== i && i,
                        suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
                        voiceChannelId: null == s ? void 0 : s.channelId
                    };
                }),
                c = (0, o.cj)(
                    [G.Z],
                    () => {
                        let n = (0, _.Z)(t.type),
                            i = t.type !== ei.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: G.Z.isLocalMute(i, n),
                                  localVideoDisabled: G.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: G.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: r.muted,
                serverDeafened: r.deafened,
                suppressed: r.suppressed,
                localMuted: c.muted,
                muted: null !== (s = t.type === ei.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== s && s,
                deafened: null !== (l = t.type === ei.fO.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== l && l
            };
        })(ej, I, eh.getGuildId()),
        eF = I.type === ei.fO.STREAM && eP === ej,
        eW = (0, R.So)(r.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: ez } = (0, b.k)(r.q.STREAM_HIGH_QUALITY),
        eY = (0, j.Z)(),
        eK = eW && eF && null != eY,
        eq = (0, M.o)(I, eO),
        eX = (0, A.lL)('CallTile', !0, eO, eq),
        eQ = (0, o.e7)([k.Z], () => (null != eP ? k.Z.getEffectForUserId(eP) : null)),
        eJ = (0, o.e7)([W.Z], () => W.Z.getVoicePlatformForChannel(eh.id, null != eP ? eP : en.lds)),
        { enableHangStatus: e$ } = g.n.useExperiment({
            guildId: eh.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e0 } = C.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e1 = e0 || e$,
        { hangStatusActivity: e2, gameActivity: e7 } = (0, o.cj)(
            [V.Z],
            () => ({
                hangStatusActivity: e$ && null != eP ? V.Z.findActivity(eP, (e) => e.type === en.IIU.HANG_STATUS) : null,
                gameActivity: e1 && null != eP ? V.Z.findActivity(eP, (e) => null != e.application_id && e.type === en.IIU.PLAYING) : null
            }),
            [e$, eP, e1]
        ),
        e4 = (0, o.e7)([H.Z], () => ((null == e7 ? void 0 : e7.application_id) != null ? H.Z.getDetectableGame(e7.application_id) : null)),
        e3 = (0, o.e7)([p.Z], () => (null != e4 && (null == e7 ? void 0 : e7.application_id) != null ? p.Z.getApplication(null == e7 ? void 0 : e7.application_id) : void 0)),
        e5 = (0, P.wV)({
            userId: eP,
            channelId: eh.id,
            location: 'CallTile'
        }),
        e6 = (0, P.zU)({
            streamKey: I.type === ei.fO.STREAM ? I.id : null,
            channelId: eh.id,
            location: 'CallTile'
        }),
        e9 = a.useMemo(() => (I.type === ei.fO.STREAM ? null != e6 && e6 : I.type === ei.fO.USER && null != e5 && e5), [e6, e5, I.type]);
    a.useEffect(() => {
        eA(eI);
    }, [eI]);
    let e8 = a.useCallback(() => {
            null != eP && d.Z.toggleLocalMute(eP, es.Yn.STREAM);
        }, [eP]),
        te = a.useCallback(() => {
            (0, L.hP)();
        }, []),
        tt = a.useCallback(
            (e) => {
                null == Y || Y(I, e);
            },
            [Y, I]
        ),
        tn = a.useCallback(
            (e) => {
                null == x || x(I, e);
            },
            [x, I]
        ),
        ti = a.useCallback(
            (e) => {
                null == z || z(I, e);
            },
            [z, I]
        ),
        ta = ev;
    eK && (ta = !1);
    let ts = null,
        tl = null,
        tr = '';
    switch (I.type) {
        case ei.fO.STREAM:
            (ts = (0, i.jsx)(J.Z, {
                participant: I,
                selected: eE,
                width: ep,
                fit: eT,
                onVideoResize: e_,
                paused: eN,
                inPopout: em,
                focused: eI
            })),
                (tl = (0, i.jsx)(J._, {
                    participant: I,
                    selected: eE,
                    width: ep,
                    focused: eI,
                    idle: ta,
                    premiumIndicator: eK || eX.enabled
                })),
                (tr = el.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({ streamerName: I.user.username }));
            break;
        case ei.fO.USER:
            (ts = (0, i.jsx)($.Z, {
                channel: eh,
                inCall: ef,
                participant: I,
                fit: eT,
                onVideoResize: e_,
                paused: eN,
                selected: eE,
                width: ep,
                blocked: ex,
                noVideoRender: eg || ew,
                pulseSpeakingIndicator: eS
            })),
                (tl = (0, i.jsx)($.T, {
                    userId: I.user.id,
                    channelId: eh.id
                })),
                (tr = el.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({ username: I.user.username }));
            break;
        case ei.fO.ACTIVITY:
            (ts = (0, i.jsx)(X.ZP, {
                interactible: eI,
                participant: I,
                selected: eE,
                channel: eh,
                width: ep
            })),
                (tr = el.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({ activityName: null == ey ? void 0 : ey.name }));
            break;
        case ei.fO.HIDDEN_STREAM:
            ts = (0, i.jsx)(J.Z, {
                participant: I,
                selected: eE,
                width: ep,
                fit: eT,
                onVideoResize: e_,
                paused: eN,
                inPopout: em,
                focused: eI
            });
    }
    let to = a.useRef(null),
        tc = I.type === ei.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(h.Z, {
        section: en.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsx)('div', {
            className: l()(er.wrapper, { [er.ringing]: eH }, ec),
            onMouseEnter: () => {
                eL(!0);
            },
            onMouseLeave: () => {
                eL(!1);
            },
            children: (0, i.jsxs)(Z.Z, {
                shakeLocation: ea.oZ.VOICE_USER,
                isShaking: eB,
                className: er.tile,
                children: [
                    (0, i.jsx)(Q.Z, {
                        ref: to,
                        className: l()(er.tile, {
                            [er.noBorder]: eC,
                            [er.noInteraction]: null == Y,
                            [er.idle]: ev
                        }),
                        noBorder: eC,
                        style: ed,
                        participantUserId: eP,
                        children: (0, i.jsxs)(u.ClickableContainer, {
                            'aria-label': tr,
                            className: er.tileChild,
                            onDoubleClick: tn,
                            onContextMenu: ti,
                            onClick: tt,
                            onMouseDown: ee,
                            onKeyDown: eo,
                            focusProps: { offset: 1 },
                            children: [
                                I.type === ei.fO.USER && null != eP && null != eQ
                                    ? (0, i.jsx)(U.Z, {
                                          voiceChannelEffect: eQ,
                                          onComplete: () => (0, k.H)(eP),
                                          userId: eP
                                      })
                                    : null,
                                I.type === ei.fO.USER
                                    ? (0, i.jsx)('div', {
                                          className: er.voiceChannelEffectsContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              userId: eP,
                                              channelId: eh.id,
                                              guildId: eh.getGuildId(),
                                              containerDimensions: {
                                                  width: null !== (c = null == to ? void 0 : null === (n = to.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                  height: null !== (E = null == to ? void 0 : null === (s = to.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== E ? E : 0
                                              }
                                          })
                                      })
                                    : null,
                                ts,
                                eK
                                    ? (0, i.jsx)(O.W, {
                                          onPlayed: te,
                                          played: ez.hqStreamingFrameAnimationPlayed
                                      })
                                    : null,
                                eC
                                    ? null
                                    : (0, i.jsx)('div', {
                                          className: er.indicators,
                                          children: tl
                                      }),
                                eE
                                    ? (0, i.jsx)('div', {
                                          className: er.selectedScreen,
                                          children: (0, i.jsx)(tc, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: er.selectedIcon
                                          })
                                      })
                                    : null,
                                I.type !== ei.fO.ACTIVITY
                                    ? (0, i.jsx)(eu, {
                                          focused: eI,
                                          width: ep,
                                          inCall: ef,
                                          participantType: I.type,
                                          hasVideo: null != eG && eG,
                                          ...eV,
                                          idle: ev,
                                          platform: eJ,
                                          title: (0, K.Z)(eh, I),
                                          blocked: ex,
                                          localVideoDisabled: ek,
                                          videoToggleState: eU,
                                          hideAudioIcon: eF,
                                          onContextMenu: ti,
                                          onToggleMute: e8,
                                          participantUserId: eP,
                                          hangStatusActivity: e2,
                                          application: e3,
                                          speaking: eB,
                                          secureFramesVerified: e9
                                      })
                                    : null,
                                I.type === ei.fO.USER && eD
                                    ? (0, i.jsx)(N.Z, {
                                          userId: I.id,
                                          channelId: eh.id
                                      })
                                    : null,
                                ef && !eC
                                    ? (0, i.jsx)('div', {
                                          className: l()(er.border, {
                                              [er.voiceChannelEffect]: !eI && null != eQ,
                                              [er.speaking]: eB && !eI
                                          })
                                      })
                                    : null
                            ]
                        })
                    }),
                    eM &&
                        eb &&
                        eR &&
                        (0, i.jsx)(q.Z, {
                            currentUserId: ej,
                            participant: I
                        }),
                    (0, i.jsx)(v.Z, {
                        isFiring: eZ,
                        callTileRef: to.current
                    })
                ]
            })
        })
    });
});
function ec(e) {
    let { participantType: t, platform: n, className: a } = e;
    if (t === ei.fO.STREAM)
        return n === ei.wR.XBOX
            ? (0, i.jsx)(Y.Z, { className: a })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a
              });
    switch (n) {
        case ei.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a
            });
        case ei.wR.XBOX:
            return (0, i.jsx)(Y.Z, { className: a });
        case ei.wR.PLAYSTATION:
            return (0, i.jsx)(z.Z, { className: a });
        default:
            return null;
    }
}
eo.displayName = 'CallTile';
let eu = a.memo((e) => {
    let { muted: t, deafened: n, localMuted: a, serverMuted: s, serverDeafened: r, idle: d, title: h, width: p, hasVideo: m, inCall: f, localVideoDisabled: C, videoToggleState: g, focused: T, blocked: N, hideAudioIcon: S, participantType: v, participantUserId: Z, onContextMenu: A, onToggleMute: M, platform: b, hangStatusActivity: R, application: L, speaking: j, secureFramesVerified: O } = e,
        P = null,
        y = null,
        D = null,
        k = null,
        U = (0, ee.K)(p),
        w = (0, ee.N)(p),
        B = (0, o.e7)([G.Z], () => null != Z && G.Z.isLocalVideoAutoDisabled(Z, (0, _.Z)(v)), [Z, v]),
        H = (0, u.useRedesignIconContext)().enabled;
    if (!S) {
        if (a && v === ei.fO.STREAM && m && !T)
            P = (0, i.jsx)(u.Tooltip, {
                text: el.Z.Messages.UNMUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(er.interactive, er.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (a || v !== ei.fO.STREAM || !m || U || T) {
            if (H) {
                let e;
                r ? (e = u.HeadphonesDenyIcon) : s ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : a ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (P = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || a) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                P = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            P = (0, i.jsx)(u.Tooltip, {
                text: el.Z.Messages.MUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(er.interactive, er.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (f && G.Z.supports(es.AN.VIDEO)) || !m
            ? f &&
              m &&
              C &&
              !B &&
              (y = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: er.localMuteStrikethrough
              }))
            : (y = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        v === ei.fO.STREAM &&
            !T &&
            m &&
            (D = (0, i.jsx)(u.Tooltip, {
                text: el.Z.Messages.OPTIONS,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A(e);
                        },
                        className: l()(er.status, er.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        v === ei.fO.USER && null != R
            ? (k = (0, i.jsx)(u.Tooltip, {
                  text: (0, I.O8)(R),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(er.hangStatusContainer, { [er.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(x.Z, {
                              hangStatusActivity: R,
                              className: er.hangStatusIcon,
                              animate: j
                          })
                      })
              }))
            : v === ei.fO.USER &&
              null != L &&
              (k = (0, i.jsx)(u.Tooltip, {
                  text: el.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: L.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(er.hangStatusContainer, { [er.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(E.Z, {
                              className: er.hangStatusIcon,
                              game: L,
                              size: E.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: er.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: l()(er.overlayTop, { [er.small]: p < 195 }),
                    children:
                        B || g === en.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: er.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: l()(er.overlayTitle, er.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: er.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: er.overlayTitleText,
                                              children: el.Z.Messages.UNSTABLE_CONNECTION
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: l()(er.overlayBottom, { [er.small]: p < 195 }),
                    children: [
                        w
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: l()(er.overlayTitle, { [er.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      N
                                          ? (0, i.jsx)('div', {
                                                className: er.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: er.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(ec, {
                                          participantType: v,
                                          platform: b,
                                          className: er.titleIcon
                                      }),
                                      null != h && '' !== h
                                          ? (0, i.jsx)('span', {
                                                className: er.overlayTitleText,
                                                children: h
                                            })
                                          : null,
                                      O &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: el.Z.Messages.E2EE_USER_VERIFIED_TOOLTIP,
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: er.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': el.Z.Messages.E2EE_USER_VERIFIED_A11Y
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: er.statusContainer,
                            children: [
                                null != y &&
                                    (0, i.jsx)('div', {
                                        className: er.status,
                                        children: y
                                    }),
                                null != P &&
                                    (0, i.jsx)('div', {
                                        className: er.status,
                                        children: P
                                    }),
                                D,
                                k
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
eu.displayName = 'CallTileOverlay';
let ed = S.L;
t.ZP = eo;
