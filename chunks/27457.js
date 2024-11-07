n.d(t, {
    BP: function () {
        return ep;
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
    S = n(120619),
    I = n(332487),
    _ = n(925329),
    x = n(649739),
    E = n(574176),
    Z = n(833858),
    C = n(223135),
    y = n(37091),
    b = n(6572),
    T = n(352978),
    A = n(936847),
    N = n(512384),
    w = n(6242),
    j = n(757692),
    P = n(386542),
    R = n(933843),
    M = n(746599),
    O = n(231664),
    L = n(614011),
    k = n(210975),
    D = n(695346),
    U = n(937995),
    V = n(456631),
    F = n(274459),
    W = n(314897),
    B = n(857192),
    G = n(77498),
    z = n(131951),
    H = n(158776),
    Y = n(594174),
    J = n(979651),
    q = n(374129),
    X = n(639351),
    K = n(584729),
    Q = n(334374),
    $ = n(849171),
    ee = n(607187),
    et = n(833519),
    en = n(462061),
    ei = n(623825),
    el = n(839662),
    ea = n(981631),
    er = n(354459),
    es = n(524484),
    eo = n(65154),
    ec = n(388032),
    eu = n(169501);
let ed = l.memo((e) => {
    var t, n, a, c, _;
    let { participant: Z, onDoubleClick: C, onContextMenu: q, onClick: X, onMouseDown: ei, onKeyDown: ed, className: em, style: ep, containerStyle: eh, channel: eg, width: ev, inPopout: eS, onVideoResize: eI, inCall: e_ = !1, selected: ex = !1, noBorder: eE = !1, noVideoRender: eZ = !1, focused: eC = !1, blocked: ey = !1, fit: eb = T.L.CONTAIN, paused: eT = !1, pulseSpeakingIndicator: eA = !1, forceIdle: eN = !1 } = e,
        ew = l.useContext(U.h9) || eN,
        [ej, eP] = l.useState(!1),
        eR = D.Sb.useSetting(),
        eM = (0, o.e7)([B.default], () => B.default.isStreamInfoOverlayEnabled),
        [eO, eL] = l.useState(!1),
        ek = (0, o.e7)([W.default], () => W.default.getId()),
        eD = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        eU = Z.type === er.fO.ACTIVITY ? null : null === (t = Z.user) || void 0 === t ? void 0 : t.id,
        [eV] = (0, h.Z)(Z.type === er.fO.ACTIVITY ? [Z.id] : []),
        eF = (0, o.e7)([y.Z], () => y.Z.getEnabled()),
        eW = (0, o.e7)([z.Z], () => null != eU && z.Z.isLocalVideoDisabled(eU, (0, g.Z)(Z.type)), [eU, Z.type]),
        eB = (0, o.e7)([z.Z], () => (null != eU ? z.Z.getVideoToggleState(eU, (0, g.Z)(Z.type)) : ea.ZUi.NONE), [eU, Z.type]),
        eG = eB === ea.ZUi.AUTO_PROBING,
        { speaking: ez, ringing: eH, hasVideo: eY } = (0, el.Z)(Z, ek),
        eJ = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([J.Z], () => {
                    var e, i, l;
                    let a = J.Z.getVoiceState(n, t.id);
                    return {
                        muted: null !== (e = null == a ? void 0 : a.mute) && void 0 !== e && e,
                        deafened: null !== (i = null == a ? void 0 : a.deaf) && void 0 !== i && i,
                        suppressed: null !== (l = null == a ? void 0 : a.suppress) && void 0 !== l && l,
                        voiceChannelId: null == a ? void 0 : a.channelId
                    };
                }),
                c = (0, o.cj)(
                    [z.Z],
                    () => {
                        let n = (0, g.Z)(t.type),
                            i = t.type !== er.fO.ACTIVITY ? t.user.id : t.id;
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
                muted: null !== (a = t.type === er.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== a && a,
                deafened: null !== (r = t.type === er.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== r && r
            };
        })(ek, Z, eg.getGuildId()),
        eq = Z.type === er.fO.STREAM && eU === ek,
        eX = (0, R.So)(s.q.STREAM_HIGH_QUALITY),
        { hqStreamingState: eK } = (0, P.k)(s.q.STREAM_HIGH_QUALITY),
        eQ = (0, O.Z)(),
        e$ = eX && eq && null != eQ,
        e0 = (0, j.o)(Z, eD),
        e1 = (0, w.lL)('CallTile', !0, eD, e0),
        e2 = (0, o.e7)([V.Z], () => (Z.type === er.fO.USER && null != eU ? V.Z.getEffectForUserId(eU) : null)),
        e3 = (0, o.e7)([J.Z], () => J.Z.getVoicePlatformForChannel(eg.id, null != eU ? eU : ea.lds)),
        { enableHangStatus: e9 } = E.n.useExperiment({
            guildId: eg.guild_id,
            location: 'VoiceUsers'
        }),
        { showGameIcon: e7 } = x.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
        e8 = e7 || e9,
        { hangStatusActivity: e6, gameActivity: e4 } = (0, o.cj)(
            [H.Z],
            () => ({
                hangStatusActivity: e9 && null != eU ? H.Z.findActivity(eU, (e) => e.type === ea.IIU.HANG_STATUS) : null,
                gameActivity: e8 && null != eU ? H.Z.findActivity(eU, (e) => null != e.application_id && e.type === ea.IIU.PLAYING) : null
            }),
            [e9, eU, e8]
        ),
        e5 = (0, o.e7)([G.Z], () => ((null == e4 ? void 0 : e4.application_id) != null ? G.Z.getDetectableGame(e4.application_id) : null)),
        te = (0, o.e7)([p.Z], () => (null != e5 && (null == e4 ? void 0 : e4.application_id) != null ? p.Z.getApplication(null == e4 ? void 0 : e4.application_id) : void 0)),
        tt = (0, k.wV)({
            userId: eU,
            channelId: eg.id,
            location: 'CallTile'
        }),
        tn = (0, k.zU)({
            streamKey: Z.type === er.fO.STREAM ? Z.id : null,
            channelId: eg.id,
            location: 'CallTile'
        }),
        ti = l.useMemo(() => (Z.type === er.fO.STREAM ? null != tn && tn : Z.type === er.fO.USER && null != tt && tt), [tn, tt, Z.type]);
    l.useEffect(() => {
        eP(eC);
    }, [eC]);
    let tl = eg.hdStreamingUntil,
        ta = l.useRef(!0),
        [tr, ts] = l.useState(!1),
        to = (0, o.e7)([S.Z], () => S.Z.getPlayedAnimation()),
        tc = (0, o.e7)([f.Z], () => f.Z.useReducedMotion);
    l.useEffect(() => {
        if (ta.current) {
            ta.current = !1;
            return;
        }
        null != tl && new Date(tl) > new Date() && !tc && ts(!0);
    }, [tl]),
        l.useEffect(() => {
            to && ts(!1);
        }, [to]);
    let tu = l.useCallback(() => {
            null != eU && d.Z.toggleLocalMute(eU, eo.Yn.STREAM);
        }, [eU]),
        td = l.useCallback(() => {
            (0, M.hP)();
        }, []),
        tm = l.useCallback(
            (e) => {
                null == X || X(Z, e);
            },
            [X, Z]
        ),
        tf = l.useCallback(
            (e) => {
                null == C || C(Z, e);
            },
            [C, Z]
        ),
        tp = l.useCallback(
            (e) => {
                null == q || q(Z, e);
            },
            [q, Z]
        ),
        th = ew;
    e$ && (th = !1);
    let tg = null,
        tv = null,
        tS = '';
    switch (Z.type) {
        case er.fO.STREAM:
            (tg = (0, i.jsx)(et.Z, {
                participant: Z,
                selected: ex,
                width: ev,
                fit: eb,
                onVideoResize: eI,
                paused: eT,
                inPopout: eS,
                focused: eC
            })),
                (tv = (0, i.jsx)(et._, {
                    participant: Z,
                    selected: ex,
                    width: ev,
                    focused: eC,
                    idle: th,
                    premiumIndicator: e$ || e1.enabled
                })),
                (tS = ec.intl.formatToPlainString(ec.t.gHPz3d, { streamerName: Z.user.username }));
            break;
        case er.fO.USER:
            (tg = (0, i.jsx)(en.Z, {
                channel: eg,
                inCall: e_,
                participant: Z,
                fit: eb,
                onVideoResize: eI,
                paused: eT,
                selected: ex,
                width: ev,
                blocked: ey,
                noVideoRender: eZ || eG,
                pulseSpeakingIndicator: eA
            })),
                (tv = (0, i.jsx)(en.T, {
                    userId: Z.user.id,
                    channelId: eg.id
                })),
                (tS = ec.intl.formatToPlainString(ec.t['iC/x/f'], { username: Z.user.username }));
            break;
        case er.fO.ACTIVITY:
            (tg = (0, i.jsx)($.ZP, {
                interactible: eC,
                participant: Z,
                selected: ex,
                channel: eg,
                width: ev
            })),
                (tS = ec.intl.formatToPlainString(ec.t.YCvOsL, { activityName: null == eV ? void 0 : eV.name }));
            break;
        case er.fO.HIDDEN_STREAM:
            tg = (0, i.jsx)(et.Z, {
                participant: Z,
                selected: ex,
                width: ev,
                fit: eb,
                onVideoResize: eI,
                paused: eT,
                inPopout: eS,
                focused: eC
            });
    }
    let tI = l.useRef(null),
        t_ = Z.type === er.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
    return (0, i.jsx)(m.Z, {
        section: ea.jXE.VOICE_CHANNEL_TILE,
        children: (0, i.jsxs)('div', {
            className: r()(eu.wrapper, { [eu.ringing]: eH }, em),
            style: eh,
            onMouseEnter: () => {
                eL(!0);
            },
            onMouseLeave: () => {
                eL(!1);
            },
            children: [
                tr && Z.type === er.fO.STREAM && (0, i.jsx)(I.Z, { baseTileRef: tI.current }),
                (0, i.jsxs)(N.Z, {
                    shakeLocation: es.oZ.VOICE_USER,
                    isShaking: ez,
                    className: eu.tile,
                    children: [
                        (0, i.jsx)(ee.Z, {
                            ref: tI,
                            className: r()(eu.tile, {
                                [eu.noBorder]: eE,
                                [eu.noInteraction]: null == X,
                                [eu.idle]: ew
                            }),
                            noBorder: eE,
                            style: ep,
                            participantUserId: eU,
                            children: (0, i.jsxs)(u.ClickableContainer, {
                                'aria-label': tS,
                                className: eu.tileChild,
                                onDoubleClick: tf,
                                onContextMenu: tp,
                                onClick: tm,
                                onMouseDown: ei,
                                onKeyDown: ed,
                                focusProps: { offset: 1 },
                                children: [
                                    null != e2 && null != eU
                                        ? (0, i.jsx)(F.Z, {
                                              voiceChannelEffect: e2,
                                              onComplete: () => (0, V.H)(eU),
                                              userId: eU
                                          })
                                        : null,
                                    Z.type === er.fO.USER
                                        ? (0, i.jsx)('div', {
                                              className: eu.voiceChannelEffectsContainer,
                                              children: (0, i.jsx)(v.Z, {
                                                  userId: eU,
                                                  channelId: eg.id,
                                                  guildId: eg.getGuildId(),
                                                  containerDimensions: {
                                                      width: null !== (c = null == tI ? void 0 : null === (n = tI.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                                                      height: null !== (_ = null == tI ? void 0 : null === (a = tI.current) || void 0 === a ? void 0 : a.clientHeight) && void 0 !== _ ? _ : 0
                                                  }
                                              })
                                          })
                                        : null,
                                    tg,
                                    e$
                                        ? (0, i.jsx)(L.W, {
                                              onPlayed: td,
                                              played: eK.hqStreamingFrameAnimationPlayed
                                          })
                                        : null,
                                    eE
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: eu.indicators,
                                              children: tv
                                          }),
                                    ex
                                        ? (0, i.jsx)('div', {
                                              className: eu.selectedScreen,
                                              children: (0, i.jsx)(t_, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: eu.selectedIcon
                                              })
                                          })
                                        : null,
                                    Z.type !== er.fO.ACTIVITY
                                        ? (0, i.jsx)(ef, {
                                              focused: eC,
                                              width: ev,
                                              inCall: e_,
                                              participantType: Z.type,
                                              hasVideo: null != eY && eY,
                                              ...eJ,
                                              idle: ew,
                                              platform: e3,
                                              title: (0, K.Z)(eg, Z),
                                              blocked: ey,
                                              localVideoDisabled: eW,
                                              videoToggleState: eB,
                                              hideAudioIcon: eq,
                                              onContextMenu: tp,
                                              onToggleMute: tu,
                                              participantUserId: eU,
                                              hangStatusActivity: e6,
                                              application: te,
                                              speaking: ez,
                                              secureFramesVerified: ti
                                          })
                                        : null,
                                    Z.type === er.fO.USER && eF
                                        ? (0, i.jsx)(b.Z, {
                                              userId: Z.id,
                                              channelId: eg.id
                                          })
                                        : null,
                                    e_ && !eE
                                        ? (0, i.jsx)('div', {
                                              className: r()(eu.border, {
                                                  [eu.voiceChannelEffect]: !eC && null != e2,
                                                  [eu.speaking]: ez && !eC
                                              })
                                          })
                                        : null
                                ]
                            })
                        }),
                        eR &&
                            eM &&
                            eO &&
                            (0, i.jsx)(Q.Z, {
                                currentUserId: ek,
                                participant: Z
                            }),
                        (0, i.jsx)(A.Z, {
                            isFiring: ej,
                            callTileRef: tI.current
                        })
                    ]
                })
            ]
        })
    });
});
function em(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === er.fO.STREAM)
        return n === er.wR.XBOX
            ? (0, i.jsx)(X.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: l
              });
    switch (n) {
        case er.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l
            });
        case er.wR.XBOX:
            return (0, i.jsx)(X.Z, { className: l });
        case er.wR.PLAYSTATION:
            return (0, i.jsx)(q.Z, { className: l });
        default:
            return null;
    }
}
ed.displayName = 'CallTile';
let ef = l.memo((e) => {
    let { muted: t, deafened: n, localMuted: l, serverMuted: a, serverDeafened: s, idle: d, title: m, width: f, hasVideo: p, inCall: h, localVideoDisabled: v, videoToggleState: S, focused: I, blocked: x, hideAudioIcon: E, participantType: y, participantUserId: b, onContextMenu: T, onToggleMute: A, platform: N, hangStatusActivity: w, application: j, speaking: P, secureFramesVerified: R } = e,
        M = null,
        O = null,
        L = null,
        k = null,
        D = (0, ei.K)(f),
        U = (0, ei.N)(f),
        V = (0, o.e7)([z.Z], () => null != b && z.Z.isLocalVideoAutoDisabled(b, (0, g.Z)(y)), [b, y]),
        F = (0, u.useRedesignIconContext)().enabled;
    if (!E) {
        if (l && y === er.fO.STREAM && p && !I)
            M = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t.YqAjX1),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceXIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
        else if (l || y !== er.fO.STREAM || !p || D || I) {
            if (F) {
                let e;
                s ? (e = u.HeadphonesDenyIcon) : a ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : l ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (M = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
            } else if (n || t || l) {
                let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
                M = (0, i.jsx)(e, { color: 'currentColor' });
            }
        } else
            M = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['w4m94+']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), A();
                        },
                        className: r()(eu.interactive, eu.toggleMute),
                        children: (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            });
    }
    return (
        (h && z.Z.supports(eo.AN.VIDEO)) || !p
            ? h &&
              p &&
              v &&
              !V &&
              (O = (0, i.jsx)(u.VideoSlashIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: eu.localMuteStrikethrough
              }))
            : (O = (0, i.jsx)(u.VideoIcon, {
                  size: 'md',
                  color: 'currentColor'
              })),
        y === er.fO.STREAM &&
            !I &&
            p &&
            (L = (0, i.jsx)(u.Tooltip, {
                text: ec.intl.string(ec.t['+1H47u']),
                children: (e) => {
                    let { onClick: t, ...n } = e;
                    return (0, i.jsx)(u.Clickable, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), null == t || t(), T(e);
                        },
                        className: r()(eu.status, eu.interactive),
                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    });
                }
            })),
        y === er.fO.USER && null != w
            ? (k = (0, i.jsx)(u.Tooltip, {
                  text: (0, Z.O8)(w),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eu.hangStatusContainer, { [eu.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(C.Z, {
                              hangStatusActivity: w,
                              className: eu.hangStatusIcon,
                              animate: P
                          })
                      })
              }))
            : y === er.fO.USER &&
              null != j &&
              (k = (0, i.jsx)(u.Tooltip, {
                  text: ec.intl.formatToPlainString(ec.t.Sq9xJy, { game: j.name }),
                  children: (e) =>
                      (0, i.jsx)('div', {
                          ...e,
                          className: r()(eu.hangStatusContainer, { [eu.hangStatusSmall]: f < 500 }),
                          children: (0, i.jsx)(_.Z, {
                              className: eu.hangStatusIcon,
                              game: j,
                              size: _.Z.Sizes.SMALL
                          })
                      })
              })),
        (0, i.jsxs)('div', {
            className: eu.overlayContainer,
            children: [
                (0, i.jsx)('div', {
                    className: r()(eu.overlayTop, { [eu.small]: f < 195 }),
                    children:
                        V || S === ea.ZUi.AUTO_PROBING
                            ? d
                                ? (0, i.jsx)('div', {
                                      className: eu.status,
                                      children: (0, i.jsx)(u.VideoSlashIcon, {
                                          size: 'md',
                                          color: 'currentColor'
                                      })
                                  })
                                : (0, i.jsxs)('div', {
                                      className: r()(eu.overlayTitle, eu.videoDisabledTitle),
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
                    className: r()(eu.overlayBottom, { [eu.small]: f < 195 }),
                    children: [
                        U
                            ? (0, i.jsx)('div', {})
                            : (0, i.jsxs)(u.Text, {
                                  className: r()(eu.overlayTitle, { [eu.idle]: d }),
                                  color: 'none',
                                  variant: 'text-md/normal',
                                  children: [
                                      x
                                          ? (0, i.jsx)('div', {
                                                className: eu.blocked,
                                                children: (0, i.jsx)(u.DenyIcon, {
                                                    size: 'lg',
                                                    className: eu.blockedIcon,
                                                    color: c.Z.unsafe_rawColors.RED_400.css
                                                })
                                            })
                                          : null,
                                      (0, i.jsx)(em, {
                                          participantType: y,
                                          platform: N,
                                          className: eu.titleIcon
                                      }),
                                      null != m && '' !== m
                                          ? (0, i.jsx)('span', {
                                                className: eu.overlayTitleText,
                                                children: m
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
                                null != O &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
                                        children: O
                                    }),
                                null != M &&
                                    (0, i.jsx)('div', {
                                        className: eu.status,
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
ef.displayName = 'CallTileOverlay';
let ep = T.L;
t.ZP = ed;
