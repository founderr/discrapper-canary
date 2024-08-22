n.d(t, {
    BP: function () {
        return eu;
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
    g = n(649739),
    C = n(574176),
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
    y = n(937995),
    D = n(456631),
    k = n(274459),
    U = n(314897),
    w = n(857192),
    B = n(77498),
    H = n(131951),
    G = n(158776),
    V = n(594174),
    F = n(979651),
    W = n(374129),
    z = n(639351),
    Y = n(584729),
    K = n(849171),
    q = n(607187),
    X = n(70693),
    Q = n(833519),
    J = n(462061),
    $ = n(623825),
    ee = n(839662),
    et = n(981631),
    en = n(354459),
    ei = n(524484),
    ea = n(65154),
    es = n(689938),
    el = n(149050);
let er = a.memo((e) => {
    var t, n, s, c, E;
    let { participant: I, onDoubleClick: x, onContextMenu: W, onClick: z, onMouseDown: $, onKeyDown: er, className: eo, style: eu, channel: ed, width: eh, inPopout: ep, onVideoResize: em, inCall: e_ = !1, selected: ef = !1, noBorder: eE = !1, noVideoRender: eg = !1, focused: eC = !1, blocked: eI = !1, fit: ex = S.L.CONTAIN, paused: eT = !1, pulseSpeakingIndicator: eN = !1 } = e,
        eS = a.useContext(y.h9),
        [ev, eZ] = a.useState(!1),
        eA = (0, o.e7)([w.default], () => w.default.isStreamInfoOverlayEnabled),
        eM = (0, o.e7)([U.default], () => U.default.getId()),
        eb = (0, o.e7)([V.default], () => V.default.getCurrentUser()),
        eR = I.type === en.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id,
        [eL] = (0, m.Z)(I.type === en.fO.ACTIVITY ? [I.id] : []),
        ej = (0, o.e7)([T.Z], () => T.Z.getEnabled()),
        eO = (0, o.e7)([H.Z], () => null != eR && H.Z.isLocalVideoDisabled(eR, (0, _.Z)(I.type)), [eR, I.type]),
        eP = (0, o.e7)([H.Z], () => (null != eR ? H.Z.getVideoToggleState(eR, (0, _.Z)(I.type)) : et.ZUi.NONE), [eR, I.type]),
        ey = eP === et.ZUi.AUTO_PROBING,
        { speaking: eD, ringing: ek, hasVideo: eU } = (0, ee.Z)(I, eM),
        ew = (function (e, t, n) {
            var i, a, s, l;
            let r = (0, o.cj)([F.Z], () => {
                    var e, i, a;
                    let s = F.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == s ? void 0 : s.deaf) && void 0 !== i && i,
                        suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
                        voiceChannelId: null == s ? void 0 : s.channelId
                    };
                }),
                c = (0, o.cj)(
                    [H.Z],
                    () => {
                        let n = (0, _.Z)(t.type),
                            i = t.type !== en.fO.ACTIVITY ? t.user.id : t.id;
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
                serverMuted: r.muted,
                serverDeafened: r.deafened,
                suppressed: r.suppressed,
                localMuted: c.muted,
                muted: null !== (s = t.type === en.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== s && s,
                deafened: null !== (l = t.type === en.fO.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== l && l
            };
        })(eM, I, ed.getGuildId()),
        eB = I.type === en.fO.STREAM && eR === eM,
        eH = (0, R.So)(r.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: eG } = (0, b.k)(r.q.STREAM_HIGH_QUALITY),
        eV = (0, j.Z)(),
        eF = eH && eB && null != eV,
        eW = (0, M.o)(I, eb),
        ez = (0, A.lL)('CallTile', !0, eb, eW),
        eY = (0, o.e7)([D.Z], () => (null != eR ? D.Z.getEffectForUserId(eR) : null)),
        eK = (0, o.e7)([F.Z], () => F.Z.getVoicePlatformForChannel(ed.id, null != eR ? eR : et.lds)),
        { enableHangStatus: eq } = C.n.useExperiment({
            guildId: ed.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: eX } = g.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        eQ = eX || eq,
        { hangStatusActivity: eJ, gameActivity: e$ } = (0, o.cj)(
            [G.Z],
            () => ({
                hangStatusActivity: eq && null != eR ? G.Z.findActivity(eR, (e) => e.type === et.IIU.HANG_STATUS) : null,
                gameActivity: eQ && null != eR ? G.Z.findActivity(eR, (e) => null != e.application_id && e.type === et.IIU.PLAYING) : null
            }),
            [eq, eR, eQ]
        ),
        e0 = (0, o.e7)([B.Z], () => ((null == e$ ? void 0 : e$.application_id) != null ? B.Z.getDetectableGame(e$.application_id) : null)),
        e1 = (0, o.e7)([p.Z], () => (null != e0 && (null == e$ ? void 0 : e$.application_id) != null ? p.Z.getApplication(null == e$ ? void 0 : e$.application_id) : void 0)),
        e2 = (0, P.wV)({
            userId: eR,
            channelId: ed.id,
            location: 'CallTile'
        }),
        e7 = (0, P.zU)({
            streamKey: I.type === en.fO.STREAM ? I.id : null,
            channelId: ed.id,
            location: 'CallTile'
        }),
        e4 = a.useMemo(() => (I.type === en.fO.STREAM ? null != e7 && e7 : I.type === en.fO.USER && null != e2 && e2), [e7, e2, I.type]);
    a.useEffect(() => {
        eZ(eC);
    }, [eC]);
    let e3 = a.useCallback(() => {
            null != eR && d.Z.toggleLocalMute(eR, ea.Yn.STREAM);
        }, [eR]),
        e5 = a.useCallback(() => {
            (0, L.hP)();
        }, []),
        e6 = a.useCallback(
            (e) => {
                null == z || z(I, e);
            },
            [z, I]
        ),
        e9 = a.useCallback(
            (e) => {
                null == x || x(I, e);
            },
            [x, I]
        ),
        e8 = a.useCallback(
            (e) => {
                null == W || W(I, e);
            },
            [W, I]
        ),
        te = eS;
    eF && (te = !1);
    let tt = null,
        tn = null,
        ti = '';
    switch (I.type) {
        case en.fO.STREAM:
            (tt = (0, i.jsx)(Q.Z, {
                participant: I,
                selected: ef,
                width: eh,
                fit: ex,
                onVideoResize: em,
                paused: eT,
                inPopout: ep,
                focused: eC
            })),
                (tn = (0, i.jsx)(Q._, {
                    participant: I,
                    selected: ef,
                    width: eh,
                    focused: eC,
                    idle: te,
                    premiumIndicator: eF || ez.enabled
                })),
                (ti = es.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({ streamerName: I.user.username }));
            break;
        case en.fO.USER:
            (tt = (0, i.jsx)(J.Z, {
                channel: ed,
                inCall: e_,
                participant: I,
                fit: ex,
                onVideoResize: em,
                paused: eT,
                selected: ef,
                width: eh,
                blocked: eI,
                noVideoRender: eg || ey,
                pulseSpeakingIndicator: eN
            })),
                (tn = (0, i.jsx)(J.T, {
                    userId: I.user.id,
                    channelId: ed.id
                })),
                (ti = es.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({ username: I.user.username }));
            break;
        case en.fO.ACTIVITY:
            (tt = (0, i.jsx)(K.ZP, {
                interactible: eC,
                participant: I,
                selected: ef,
                channel: ed,
                width: eh
            })),
                (ti = es.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({ activityName: null == eL ? void 0 : eL.name }));
            break;
        case en.fO.HIDDEN_STREAM:
            tt = (0, i.jsx)(Q.Z, {
                participant: I,
                selected: ef,
                width: eh,
                fit: ex,
                onVideoResize: em,
                paused: eT,
                inPopout: ep,
                focused: eC
            });
    }
    let ta = a.useRef(null),
        ts = I.type === en.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(h.Z, {
        section: et.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsx)('div', {
            className: l()(el.wrapper, { [el.ringing]: ek }, eo),
            children: (0, i.jsxs)(Z.Z, {
                shakeLocation: ei.oZ.VOICE_USER,
                isShaking: eD,
                className: el.tile,
                children: [
                    (0, i.jsx)(q.Z, {
                        ref: ta,
                        className: l()(el.tile, {
                            [el.noBorder]: eE,
                            [el.noInteraction]: null == z,
                            [el.idle]: eS
                        }),
                        noBorder: eE,
                        style: eu,
                        participantUserId: eR,
                        children: (0, i.jsxs)(u.ClickableContainer, {
                            'aria-label': ti,
                            className: el.tileChild,
                            onDoubleClick: e9,
                            onContextMenu: e8,
                            onClick: e6,
                            onMouseDown: $,
                            onKeyDown: er,
                            focusProps: { offset: 1 },
                            children: [
                                I.type === en.fO.USER && null != eR && null != eY
                                    ? (0, i.jsx)(k.Z, {
                                          voiceChannelEffect: eY,
                                          onComplete: () => (0, D.H)(eR),
                                          userId: eR
                                      })
                                    : null,
                                I.type === en.fO.USER
                                    ? (0, i.jsx)('div', {
                                          className: el.voiceChannelEffectsContainer,
                                          children: (0, i.jsx)(f.Z, {
                                              userId: eR,
                                              channelId: ed.id,
                                              guildId: ed.getGuildId(),
                                              containerDimensions: {
                                                  width: null !== (c = null == ta ? void 0 : null === (n = ta.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                  height: null !== (E = null == ta ? void 0 : null === (s = ta.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== E ? E : 0
                                              }
                                          })
                                      })
                                    : null,
                                tt,
                                eF
                                    ? (0, i.jsx)(O.W, {
                                          onPlayed: e5,
                                          played: eG.hqStreamingFrameAnimationPlayed
                                      })
                                    : null,
                                eE
                                    ? null
                                    : (0, i.jsx)('div', {
                                          className: el.indicators,
                                          children: tn
                                      }),
                                ef
                                    ? (0, i.jsx)('div', {
                                          className: el.selectedScreen,
                                          children: (0, i.jsx)(ts, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: el.selectedIcon
                                          })
                                      })
                                    : null,
                                I.type !== en.fO.ACTIVITY
                                    ? (0, i.jsx)(ec, {
                                          focused: eC,
                                          width: eh,
                                          inCall: e_,
                                          participantType: I.type,
                                          hasVideo: null != eU && eU,
                                          ...ew,
                                          idle: eS,
                                          platform: eK,
                                          title: (0, Y.Z)(ed, I),
                                          blocked: eI,
                                          localVideoDisabled: eO,
                                          videoToggleState: eP,
                                          hideAudioIcon: eB,
                                          onContextMenu: e8,
                                          onToggleMute: e3,
                                          participantUserId: eR,
                                          hangStatusActivity: eJ,
                                          application: e1,
                                          speaking: eD,
                                          secureFramesVerified: e4
                                      })
                                    : null,
                                I.type === en.fO.USER && ej
                                    ? (0, i.jsx)(N.Z, {
                                          userId: I.id,
                                          channelId: ed.id
                                      })
                                    : null,
                                e_ && !eE
                                    ? (0, i.jsx)('div', {
                                          className: l()(el.border, {
                                              [el.voiceChannelEffect]: !eC && null != eY,
                                              [el.speaking]: eD && !eC
                                          })
                                      })
                                    : null
                            ]
                        })
                    }),
                    eA &&
                        (0, i.jsx)(X.Z, {
                            currentUserId: eM,
                            participant: I
                        }),
                    (0, i.jsx)(v.Z, {
                        isFiring: ev,
                        callTileRef: ta.current
                    })
                ]
            })
        })
    });
});
function eo(e) {
    let { participantType: t, platform: n, className: a } = e;
    if (t === en.fO.STREAM)
        return n === en.wR.XBOX
            ? (0, i.jsx)(z.Z, { className: a })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a
              });
    switch (n) {
        case en.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a
            });
        case en.wR.XBOX:
            return (0, i.jsx)(z.Z, { className: a });
        case en.wR.PLAYSTATION:
            return (0, i.jsx)(W.Z, { className: a });
        default:
            return null;
    }
}
er.displayName = 'CallTile';
let ec = a.memo((e) => {
    let { muted: t, deafened: n, localMuted: a, serverMuted: s, serverDeafened: r, idle: d, title: h, width: p, hasVideo: m, inCall: f, localVideoDisabled: g, videoToggleState: C, focused: T, blocked: N, hideAudioIcon: S, participantType: v, participantUserId: Z, onContextMenu: A, onToggleMute: M, platform: b, hangStatusActivity: R, application: L, speaking: j, secureFramesVerified: O } = e,
        P = null,
        y = null,
        D = null,
        k = null,
        U = (0, $.K)(p),
        w = (0, $.N)(p),
        B = (0, o.e7)([H.Z], () => null != Z && H.Z.isLocalVideoAutoDisabled(Z, (0, _.Z)(v)), [Z, v]),
        G = (0, u.useRedesignIconContext)().enabled;
    if (!S) {
        if (a && v === en.fO.STREAM && m && !T)
            P = (0, i.jsx)(u.Tooltip, {
                text: es.Z.Messages.UNMUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(el.interactive, el.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (a || v !== en.fO.STREAM || !m || U || T) {
            if (G) {
                let e;
                r ? (e = u.HeadphonesDenyIcon) : s ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : a ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (P = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || a) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                P = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            P = (0, i.jsx)(u.Tooltip, {
                text: es.Z.Messages.MUTE,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), M();
                        },
                        className: l()(el.interactive, el.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (f && H.Z.supports(ea.AN.VIDEO)) || !m
            ? f &&
              m &&
              g &&
              !B &&
              (y = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: el.localMuteStrikethrough
              }))
            : (y = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        v === en.fO.STREAM &&
            !T &&
            m &&
            (D = (0, i.jsx)(u.Tooltip, {
                text: es.Z.Messages.OPTIONS,
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A(e);
                        },
                        className: l()(el.status, el.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        v === en.fO.USER && null != R
            ? (k = (0, i.jsx)(u.Tooltip, {
                  text: (0, I.O8)(R),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(el.hangStatusContainer, { [el.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(x.Z, {
                              hangStatusActivity: R,
                              className: el.hangStatusIcon,
                              animate: j
                          })
                      })
              }))
            : v === en.fO.USER &&
              null != L &&
              (k = (0, i.jsx)(u.Tooltip, {
                  text: es.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: L.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: l()(el.hangStatusContainer, { [el.hangStatusSmall]: p < 500 }),
                          children: (0, i.jsx)(E.Z, {
                              className: el.hangStatusIcon,
                              game: L,
                              size: E.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: el.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: l()(el.overlayTop, { [el.small]: p < 195 }),
                    children:
                        B || C === et.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: el.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: l()(el.overlayTitle, el.videoDisabledTitle),
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: el.status,
                                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'text-sm/normal',
                                              className: el.overlayTitleText,
                                              children: es.Z.Messages.UNSTABLE_CONNECTION
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: l()(el.overlayBottom, { [el.small]: p < 195 }),
                    children: [
                        w
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: l()(el.overlayTitle, { [el.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      N
                                          ? (0, i.jsx)('div', {
                                                className: el.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: el.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(eo, {
                                          participantType: v,
                                          platform: b,
                                          className: el.titleIcon
                                      }),
                                      null != h && '' !== h
                                          ? (0, i.jsx)('span', {
                                                className: el.overlayTitleText,
                                                children: h
                                            })
                                          : null,
                                      O &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: es.Z.Messages.E2EE_USER_VERIFIED_TOOLTIP,
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: el.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': es.Z.Messages.E2EE_USER_VERIFIED_A11Y
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: el.statusContainer,
                            children: [
                                null != y &&
                                    (0, i.jsx)('div', {
                                        className: el.status,
                                        children: y
                                    }),
                                null != P &&
                                    (0, i.jsx)('div', {
                                        className: el.status,
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
ec.displayName = 'CallTileOverlay';
let eu = S.L;
t.ZP = er;
