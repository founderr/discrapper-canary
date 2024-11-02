n.d(t, {
    BP: function () {
        return ep;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(848246),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(846027),
    h = n(410575),
    m = n(607070),
    p = n(812206),
    f = n(835473),
    g = n(414910),
    C = n(415635),
    x = n(120619),
    v = n(332487),
    _ = n(925329),
    I = n(649739),
    E = n(574176),
    b = n(833858),
    S = n(223135),
    Z = n(37091),
    T = n(6572),
    N = n(352978),
    j = n(535400),
    A = n(512384),
    y = n(6242),
    P = n(757692),
    M = n(386542),
    R = n(933843),
    L = n(746599),
    k = n(231664),
    O = n(614011),
    w = n(210975),
    D = n(695346),
    U = n(937995),
    B = n(456631),
    H = n(274459),
    F = n(314897),
    G = n(857192),
    V = n(77498),
    z = n(131951),
    W = n(158776),
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
    el = n(839662),
    er = n(981631),
    ea = n(354459),
    es = n(524484),
    eo = n(65154),
    ec = n(388032),
    eu = n(810190);
let ed = l.memo((e) => {
    var t, n, r, c, _;
    let { participant: b, onDoubleClick: S, onContextMenu: q, onClick: X, onMouseDown: ei, onKeyDown: ed, className: eh, style: ep, channel: ef, width: eg, inPopout: eC, onVideoResize: ex, inCall: ev = !1, selected: e_ = !1, noBorder: eI = !1, noVideoRender: eE = !1, focused: eb = !1, blocked: eS = !1, fit: eZ = N.L.CONTAIN, paused: eT = !1, pulseSpeakingIndicator: eN = !1 } = e,
        ej = l.useContext(U.h9),
        [eA, ey] = l.useState(!1),
        eP = D.Sb.useSetting(),
        eM = (0, o.e7)([G.default], () => G.default.isStreamInfoOverlayEnabled),
        [eR, eL] = l.useState(!1),
        ek = (0, o.e7)([F.default], () => F.default.getId()),
        eO = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        ew = b.type === ea.fO.ACTIVITY ? null : null === (t = b.user) || void 0 === t ? void 0 : t.id,
        [eD] = (0, f.Z)(b.type === ea.fO.ACTIVITY ? [b.id] : []),
        eU = (0, o.e7)([Z.Z], () => Z.Z.getEnabled()),
        eB = (0, o.e7)([z.Z], () => null != ew && z.Z.isLocalVideoDisabled(ew, (0, g.Z)(b.type)), [ew, b.type]),
        eH = (0, o.e7)([z.Z], () => (null != ew ? z.Z.getVideoToggleState(ew, (0, g.Z)(b.type)) : er.ZUi.NONE), [ew, b.type]),
        eF = eH === er.ZUi.AUTO_PROBING,
        { speaking: eG, ringing: eV, hasVideo: ez } = (0, el.Z)(b, ek),
        eW = (function (e, t, n) {
            var i, l, r, a;
            let s = (0, o.cj)([K.Z], () => {
                    var e, i, l;
                    let r = K.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == r ? void 0 : r.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == r ? void 0 : r.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == r ? void 0 : r.suppress) && void 0 !== l && l,
                        voiceChannelId: null == r ? void 0 : r.channelId
                    };
                }),
                c = (0, o.cj)(
                    [z.Z],
                    () => {
                        let n = (0, g.Z)(t.type),
                            i = t.type !== ea.fO.ACTIVITY ? t.user.id : t.id;
                        return e === i
                            ? {
                                  muted: !1,
                                  deafened: !1
                              }
                            : {
                                  muted: z.Z.isLocalMute(i, n),
                                  localVideoDisabled: z.Z.isLocalVideoDisabled(i, n),
                                  localVideoAutoDisabled: z.Z.isLocalVideoAutoDisabled(i, n)
                              };
                    },
                    [e, t]
                );
            return {
                serverMuted: s.muted,
                serverDeafened: s.deafened,
                suppressed: s.suppressed,
                localMuted: c.muted,
                muted: null !== (r = t.type === ea.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== r && r,
                deafened: null !== (a = t.type === ea.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== a && a
            };
        })(ek, b, ef.getGuildId()),
        eY = b.type === ea.fO.STREAM && ew === ek,
        eK = (0, R.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: eq } = (0, M.k)(s.q.STREAM_HIGH_QUALITY),
        eX = (0, k.Z)(),
        eJ = eK && eY && null != eX,
        eQ = (0, P.o)(b, eO),
        e$ = (0, y.lL)('CallTile', !0, eO, eQ),
        e0 = (0, o.e7)([B.Z], () => (b.type === ea.fO.USER && null != ew ? B.Z.getEffectForUserId(ew) : null)),
        e1 = (0, o.e7)([K.Z], () => K.Z.getVoicePlatformForChannel(ef.id, null != ew ? ew : er.lds)),
        { enableHangStatus: e2 } = E.n.useExperiment({
            guildId: ef.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e3 } = I.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e4 = e3 || e2,
        { hangStatusActivity: e7, gameActivity: e6 } = (0, o.cj)(
            [W.Z],
            () => ({
                hangStatusActivity: e2 && null != ew ? W.Z.findActivity(ew, (e) => e.type === er.IIU.HANG_STATUS) : null,
                gameActivity: e4 && null != ew ? W.Z.findActivity(ew, (e) => null != e.application_id && e.type === er.IIU.PLAYING) : null
            }),
            [e2, ew, e4]
        ),
        e9 = (0, o.e7)([V.Z], () => ((null == e6 ? void 0 : e6.application_id) != null ? V.Z.getDetectableGame(e6.application_id) : null)),
        e5 = (0, o.e7)([p.Z], () => (null != e9 && (null == e6 ? void 0 : e6.application_id) != null ? p.Z.getApplication(null == e6 ? void 0 : e6.application_id) : void 0)),
        e8 = (0, w.wV)({
            userId: ew,
            channelId: ef.id,
            location: 'CallTile'
        }),
        te = (0, w.zU)({
            streamKey: b.type === ea.fO.STREAM ? b.id : null,
            channelId: ef.id,
            location: 'CallTile'
        }),
        tt = l.useMemo(() => (b.type === ea.fO.STREAM ? null != te && te : b.type === ea.fO.USER && null != e8 && e8), [te, e8, b.type]);
    l.useEffect(() => {
        ey(eb);
    }, [eb]);
    let tn = ef.hdStreamingUntil,
        ti = l.useRef(!0),
        [tl, tr] = l.useState(!1),
        ta = (0, o.e7)([x.Z], () => x.Z.getPlayedAnimation()),
        ts = (0, o.e7)([m.Z], () => m.Z.useReducedMotion);
    l.useEffect(() => {
        if (ti.current) {
            ti.current = !1;
            return;
        }
        null != tn && new Date(tn) > new Date() && !ts && tr(!0);
    }, [tn]),
        l.useEffect(() => {
            ta && tr(!1);
        }, [ta]);
    let to = l.useCallback(() => {
            null != ew && d.Z.toggleLocalMute(ew, eo.Yn.STREAM);
        }, [ew]),
        tc = l.useCallback(() => {
            (0, L.hP)();
        }, []),
        tu = l.useCallback(
            (e) => {
                null == X || X(b, e);
            },
            [X, b]
        ),
        td = l.useCallback(
            (e) => {
                null == S || S(b, e);
            },
            [S, b]
        ),
        th = l.useCallback(
            (e) => {
                null == q || q(b, e);
            },
            [q, b]
        ),
        tm = ej;
    eJ && (tm = !1);
    let tp = null,
        tf = null,
        tg = '';
    switch (b.type) {
        case ea.fO.STREAM:
            (tp = (0, i.jsx)(et.Z, {
                participant: b,
                selected: e_,
                width: eg,
                fit: eZ,
                onVideoResize: ex,
                paused: eT,
                inPopout: eC,
                focused: eb
            })),
                (tf = (0, i.jsx)(et._, {
                    participant: b,
                    selected: e_,
                    width: eg,
                    focused: eb,
                    idle: tm,
                    premiumIndicator: eJ || e$.enabled
                })),
                (tg = ec.intl.formatToPlainString(ec.t.gHPz3d, { streamerName: b.user.username }));
            break;
        case ea.fO.USER:
            (tp = (0, i.jsx)(en.Z, {
                channel: ef,
                inCall: ev,
                participant: b,
                fit: eZ,
                onVideoResize: ex,
                paused: eT,
                selected: e_,
                width: eg,
                blocked: eS,
                noVideoRender: eE || eF,
                pulseSpeakingIndicator: eN
            })),
                (tf = (0, i.jsx)(en.T, {
                    userId: b.user.id,
                    channelId: ef.id
                })),
                (tg = ec.intl.formatToPlainString(ec.t['iC/x/f'], { username: b.user.username }));
            break;
        case ea.fO.ACTIVITY:
            (tp = (0, i.jsx)($.ZP, {
                interactible: eb,
                participant: b,
                selected: e_,
                channel: ef,
                width: eg
            })),
                (tg = ec.intl.formatToPlainString(ec.t.YCvOsL, { activityName: null == eD ? void 0 : eD.name }));
            break;
        case ea.fO.HIDDEN_STREAM:
            tp = (0, i.jsx)(et.Z, {
                participant: b,
                selected: e_,
                width: eg,
                fit: eZ,
                onVideoResize: ex,
                paused: eT,
                inPopout: eC,
                focused: eb
            });
    }
    let tC = l.useRef(null),
        tx = b.type === ea.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(h.Z, {
        section: er.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: a()(eu.wrapper, { [eu.ringing]: eV }, eh),
            onMouseEnter: () => {
                eL(!0);
            },
            onMouseLeave: () => {
                eL(!1);
            },
            children: [
                tl && b.type === ea.fO.STREAM && (0, i.jsx)(v.Z, {}),
                (0, i.jsxs)(A.Z, {
                    shakeLocation: es.oZ.VOICE_USER,
                    isShaking: eG,
                    className: eu.tile,
                    children: [
                        (0, i.jsx)(ee.Z, {
                            ref: tC,
                            className: a()(eu.tile, {
                                [eu.noBorder]: eI,
                                [eu.noInteraction]: null == X,
                                [eu.idle]: ej
                            }),
                            noBorder: eI,
                            style: ep,
                            participantUserId: ew,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tg,
                                className: eu.tileChild,
                                onDoubleClick: td,
                                onContextMenu: th,
                                onClick: tu,
                                onMouseDown: ei,
                                onKeyDown: ed,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e0 && null != ew
                                        ? (0, i.jsx)(H.Z, {
                                              voiceChannelEffect: e0,
                                              onComplete: () => (0, B.H)(ew),
                                              userId: ew
                                          })
                                        : null,
                                    b.type === ea.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: eu.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(C.Z, {
                                                  userId: ew,
                                                  channelId: ef.id,
                                                  guildId: ef.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tC ? void 0 : null === (n = tC.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (_ = null == tC ? void 0 : null === (r = tC.current) || void 0 === r ? void 0 : r.clientHeight) && void 0 !== _ ? _ : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tp,
                                    eJ
                                        ? (0, i.jsx)(O.W, {
                                              onPlayed: tc,
                                              played: eq.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    eI
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: eu.indicators,
                                              children: tf
                                          }),
                                    e_
                                        ? (0, i.jsx)('div', {
                                              className: eu.selectedScreen,
                                              children: (0, i.jsx)(tx, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: eu.selectedIcon
                                              })
                                          })
                                        : null,
                                    b.type !== ea.fO.ACTIVITY
                                        ? (0, i.jsx)(em, {
                                              focused: eb,
                                              width: eg,
                                              inCall: ev,
                                              participantType: b.type,
                                              hasVideo: null != ez && ez,
                                              ...eW,
                                              idle: ej,
                                              platform: e1,
                                              title: (0, J.Z)(ef, b),
                                              blocked: eS,
                                              localVideoDisabled: eB,
                                              videoToggleState: eH,
                                              hideAudioIcon: eY,
                                              onContextMenu: th,
                                              onToggleMute: to,
                                              participantUserId: ew,
                                              hangStatusActivity: e7,
                                              application: e5,
                                              speaking: eG,
                                              secureFramesVerified: tt
                                          })
                                        : null,
                                    b.type === ea.fO.USER && eU
                                        ? (0, i.jsx)(T.Z, {
                                              userId: b.id,
                                              channelId: ef.id
                                          })
                                        : null,
                                    ev && !eI
                                        ? (0, i.jsx)('div', {
                                              className: a()(eu.border, {
                                                  [eu.voiceChannelEffect]: !eb && null != e0,
                                                  [eu.speaking]: eG && !eb
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eP &&
                            eM &&
                            eR &&
                            (0, i.jsx)(Q.Z, {
                                currentUserId: ek,
                                participant: b
                            }),
                        (0, i.jsx)(j.Z, {
                            isFiring: eA,
                            callTileRef: tC.current
                        })
                    ]
                })
            ]
        })
    });
});
function eh(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === ea.fO.STREAM)
        return n === ea.wR.XBOX
            ? (0, i.jsx)(X.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case ea.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case ea.wR.XBOX:
            return (0, i.jsx)(X.Z, { className: l });
        case ea.wR.PLAYSTATION:
            return (0, i.jsx)(q.Z, { className: l });
        default:
            return null;
    }
}
ed.displayName = 'CallTile';
let em = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: r, serverDeafened: s, idle: d, title: h, width: m, hasVideo: p, inCall: f, localVideoDisabled: C, videoToggleState: x, focused: v, blocked: I, hideAudioIcon: E, participantType: Z, participantUserId: T, onContextMenu: N, onToggleMute: j, platform: A, hangStatusActivity: y, application: P, speaking: M, secureFramesVerified: R } = e,
        L = null,
        k = null,
        O = null,
        w = null,
        D = (0, ei.K)(m),
        U = (0, ei.N)(m),
        B = (0, o.e7)([z.Z], () => null != T && z.Z.isLocalVideoAutoDisabled(T, (0, g.Z)(Z)), [T, Z]),
        H = (0, u.useRedesignIconContext)().enabled;
    if (!E) {
        if (l && Z === ea.fO.STREAM && p && !v)
            L = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), j();
                        },
                        className: a()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || Z !== ea.fO.STREAM || !p || D || v) {
            if (H) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : r ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (L = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                L = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            L = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), j();
                        },
                        className: a()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (f && z.Z.supports(eo.AN.VIDEO)) || !p
            ? f &&
              p &&
              C &&
              !B &&
              (k = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eu.localMuteStrikethrough
              }))
            : (k = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        Z === ea.fO.STREAM &&
            !v &&
            p &&
            (O = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), N(e);
                        },
                        className: a()(eu.status, eu.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        Z === ea.fO.USER && null != y
            ? (w = (0, i.jsx)(u.Tooltip, {
                  text: (0, b.O8)(y),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(eu.hangStatusContainer, { [eu.hangStatusSmall]: m < 500 }),
                          children: (0, i.jsx)(S.Z, {
                              hangStatusActivity: y,
                              className: eu.hangStatusIcon,
                              animate: M
                          })
                      })
              }))
            : Z === ea.fO.USER &&
              null != P &&
              (w = (0, i.jsx)(u.Tooltip, {
                  text: ec.intl.formatToPlainString(ec.t.Sq9xJy, { game: P.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: a()(eu.hangStatusContainer, { [eu.hangStatusSmall]: m < 500 }),
                          children: (0, i.jsx)(_.Z, {
                              className: eu.hangStatusIcon,
                              game: P,
                              size: _.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eu.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: a()(eu.overlayTop, { [eu.small]: m < 195 }),
                    children:
                        B || x === er.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eu.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: a()(eu.overlayTitle, eu.videoDisabledTitle),
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
                                              children: ec.intl.string(ec.t.m2Hyj4)
                                          })
                                      ]
                                  })
                            : null
                }),
                (0, i.jsxs)('div', {
                    className: a()(eu.overlayBottom, { [eu.small]: m < 195 }),
                    children: [
                        U
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: a()(eu.overlayTitle, { [eu.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      I
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
                                          participantType: Z,
                                          platform: A,
                                          className: eu.titleIcon
                                      }),
                                      null != h && '' !== h
                                          ? (0, i.jsx)('span', {
                                                className: eu.overlayTitleText,
                                                children: h
                                            })
                                          : null,
                                      R &&
                                          (0, i.jsx)(u.Tooltip, {
                                              text: ec.intl.string(ec.t.ZEem6O),
                                              children: (e) =>
                                                  (0, i.jsx)(u.ShieldLockIcon, {
                                                      ...e,
                                                      className: eu.secureFramesIcon,
                                                      size: 'xs',
                                                      color: c.Z.colors.HEADER_PRIMARY,
                                                      'aria-label': ec.intl.string(ec.t.mR9cf3)
                                                  })
                                          })
                                  ]
                              }),
                        (0, i.jsxs)('div', {
                            className: eu.statusContainer,
                            children: [
                                null != k &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: k
                                    }),
                                null != L &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: L
                                    }),
                                O,
                                w
                            ]
                        })
                    ]
                })
            ]
        })
    );
});
em.displayName = 'CallTileOverlay';
let ep = N.L;
t.ZP = ed;
