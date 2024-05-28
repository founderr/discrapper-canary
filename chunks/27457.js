"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return eE
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("848246"),
  o = n("442837"),
  u = n("692547"),
  d = n("742444"),
  c = n("498503"),
  f = n("247636"),
  h = n("278724"),
  m = n("481060"),
  p = n("846027"),
  E = n("410575"),
  C = n("812206"),
  g = n("835473"),
  S = n("414910"),
  _ = n("415635"),
  T = n("649739"),
  I = n("574176"),
  A = n("833858"),
  v = n("223135"),
  x = n("37091"),
  N = n("6572"),
  M = n("535400"),
  R = n("512384"),
  y = n("386542"),
  L = n("485731"),
  O = n("614011"),
  j = n("937995"),
  P = n("456631"),
  D = n("274459"),
  b = n("314897"),
  U = n("77498"),
  F = n("131951"),
  w = n("158776"),
  k = n("979651"),
  H = n("366695"),
  G = n("40300"),
  B = n("83097"),
  V = n("119828"),
  W = n("156338"),
  Y = n("381238"),
  z = n("779863"),
  K = n("736921"),
  Z = n("169278"),
  X = n("808268"),
  q = n("374129"),
  J = n("639351"),
  Q = n("632184"),
  $ = n("82965"),
  ee = n("584729"),
  et = n("849171"),
  en = n("607187"),
  ea = n("833519"),
  el = n("462061"),
  es = n("623825"),
  ei = n("839662"),
  er = n("981631"),
  eo = n("354459"),
  eu = n("524484"),
  ed = n("65154"),
  ec = n("689938"),
  ef = n("61707");
let eh = l.memo(e => {
  var t, n, s, u, d;
  let {
    participant: c,
    onDoubleClick: f,
    onContextMenu: h,
    onClick: A,
    onMouseDown: v,
    onKeyDown: H,
    className: B,
    style: W,
    channel: Y,
    width: z,
    inPopout: K,
    onVideoResize: Z,
    inCall: X = !1,
    selected: q = !1,
    noBorder: J = !1,
    noVideoRender: Q = !1,
    focused: $ = !1,
    blocked: es = !1,
    fit: eh = G.VideoStreamFit.CONTAIN,
    paused: em = !1,
    pulseSpeakingIndicator: eE = !1
  } = e, eC = l.useContext(j.IdleStateContext), [eg, eS] = l.useState(!1), e_ = (0, o.useStateFromStores)([b.default], () => b.default.getId()), eT = c.type === eo.ParticipantTypes.ACTIVITY ? null : null === (t = c.user) || void 0 === t ? void 0 : t.id, [eI] = (0, g.default)(c.type === eo.ParticipantTypes.ACTIVITY ? [c.id] : []), eA = (0, o.useStateFromStores)([x.default], () => x.default.getEnabled()), ev = (0, o.useStateFromStores)([F.default], () => null != eT && F.default.isLocalVideoDisabled(eT, (0, S.default)(c.type)), [eT, c.type]), ex = (0, o.useStateFromStores)([F.default], () => null != eT ? F.default.getVideoToggleState(eT, (0, S.default)(c.type)) : er.VideoToggleState.NONE, [eT, c.type]), eN = ex === er.VideoToggleState.AUTO_PROBING, {
    speaking: eM,
    ringing: eR,
    hasVideo: ey
  } = (0, ei.default)(c, e_), eL = function(e, t, n) {
    var a, l, s, i;
    let r = (0, o.useStateFromStoresObject)([k.default], () => {
        var e, a, l;
        let s = k.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, o.useStateFromStoresObject)([F.default], () => {
        let n = (0, S.default)(t.type),
          a = t.type !== eo.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === a ? {
          muted: !1,
          deafened: !1
        } : {
          muted: F.default.isLocalMute(a, n),
          localVideoDisabled: F.default.isLocalVideoDisabled(a, n),
          localVideoAutoDisabled: F.default.isLocalVideoAutoDisabled(a, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === eo.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === eo.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(e_, c, Y.getGuildId()), eO = c.type === eo.ParticipantTypes.STREAM && eT === e_, {
    available: ej,
    activated: eP,
    hqStreamingState: eD
  } = (0, y.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), eb = ej && eP && eD.hqStreamingIsEnabled && eO, eU = (0, o.useStateFromStores)([P.default], () => null != eT ? P.default.getEffectForUserId(eT) : null), eF = (0, o.useStateFromStores)([k.default], () => k.default.getVoicePlatformForChannel(Y.id, null != eT ? eT : er.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: ew
  } = I.HangStatusExperiment.useExperiment({
    guildId: Y.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ek
  } = T.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eH = ek || ew, {
    hangStatusActivity: eG,
    gameActivity: eB
  } = (0, o.useStateFromStoresObject)([w.default], () => ({
    hangStatusActivity: ew && null != eT ? w.default.findActivity(eT, e => e.type === er.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eH && null != eT ? w.default.findActivity(eT, e => null != e.application_id && e.type === er.ActivityTypes.PLAYING) : null
  }), [ew, eT, eH]), eV = (0, o.useStateFromStores)([U.default], () => (null == eB ? void 0 : eB.application_id) != null ? U.default.getDetectableGame(eB.application_id) : null), eW = (0, o.useStateFromStores)([C.default], () => null != eV && (null == eB ? void 0 : eB.application_id) != null ? C.default.getApplication(null == eB ? void 0 : eB.application_id) : void 0);
  l.useEffect(() => {
    eS($)
  }, [$]);
  let eY = l.useCallback(() => {
      null != eT && p.default.toggleLocalMute(eT, ed.MediaEngineContextTypes.STREAM)
    }, [eT]),
    ez = l.useCallback(() => {
      (0, L.hqStreamingFrameAnimationPlayed)(!0)
    }, []),
    eK = l.useCallback(e => {
      null == A || A(c, e)
    }, [A, c]),
    eZ = l.useCallback(e => {
      null == f || f(c, e)
    }, [f, c]),
    eX = l.useCallback(e => {
      null == h || h(c, e)
    }, [h, c]),
    eq = null,
    eJ = null,
    eQ = "";
  switch (c.type) {
    case eo.ParticipantTypes.STREAM:
      eq = (0, a.jsx)(ea.default, {
        participant: c,
        selected: q,
        width: z,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        inPopout: K,
        focused: $
      }), eJ = (0, a.jsx)(ea.StreamTileIndicators, {
        participant: c,
        selected: q,
        width: z,
        focused: $,
        idle: eb ? !eb : eC,
        premiumIndicator: eb
      }), eQ = ec.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: c.user.username
      });
      break;
    case eo.ParticipantTypes.USER:
      eq = (0, a.jsx)(el.default, {
        channel: Y,
        inCall: X,
        participant: c,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        selected: q,
        width: z,
        blocked: es,
        noVideoRender: Q || eN,
        pulseSpeakingIndicator: eE
      }), eQ = ec.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: c.user.username
      });
      break;
    case eo.ParticipantTypes.ACTIVITY:
      eq = (0, a.jsx)(et.default, {
        interactible: $,
        participant: c,
        selected: q,
        channel: Y,
        width: z
      }), eQ = ec.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eI ? void 0 : eI.name
      });
      break;
    case eo.ParticipantTypes.HIDDEN_STREAM:
      eq = (0, a.jsx)(ea.default, {
        participant: c,
        selected: q,
        width: z,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        inPopout: K,
        focused: $
      })
  }
  let e$ = l.useRef(null);
  return (0, a.jsx)(E.default, {
    section: er.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i()(ef.wrapper, {
        [ef.ringing]: eR
      }, B),
      children: (0, a.jsxs)(R.default, {
        shakeLocation: eu.ShakeLocation.VOICE_USER,
        isShaking: eM,
        className: ef.tile,
        children: [(0, a.jsx)(en.default, {
          ref: e$,
          className: i()(ef.tile, {
            [ef.noBorder]: J,
            [ef.noInteraction]: null == A,
            [ef.idle]: eC
          }),
          noBorder: J,
          style: W,
          participantUserId: eT,
          children: (0, a.jsxs)(m.ClickableContainer, {
            "aria-label": eQ,
            className: ef.tileChild,
            onDoubleClick: eZ,
            onContextMenu: eX,
            onClick: eK,
            onMouseDown: v,
            onKeyDown: H,
            focusProps: {
              offset: 1
            },
            children: [c.type === eo.ParticipantTypes.USER && null != eT && null != eU ? (0, a.jsx)(D.default, {
              voiceChannelEffect: eU,
              onComplete: () => (0, P.clearVoiceChannelEffectForUser)(eT),
              userId: eT
            }) : null, c.type === eo.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: ef.voiceChannelEffectsContainer,
              children: (0, a.jsx)(_.default, {
                userId: eT,
                channelId: Y.id,
                guildId: Y.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == e$ ? void 0 : null === (n = e$.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (d = null == e$ ? void 0 : null === (s = e$.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== d ? d : 0
                }
              })
            }) : null, eq, eb ? (0, a.jsx)(O.PremiumStreamingEffectOverlay, {
              onPlayed: ez,
              played: eD.hqStreamingFrameAnimationPlayed
            }) : null, J ? null : (0, a.jsx)("div", {
              className: ef.indicators,
              children: eJ
            }), q ? (0, a.jsx)("div", {
              className: ef.selectedScreen,
              children: (0, a.jsx)(V.default, {
                className: ef.selectedIcon
              })
            }) : null, c.type !== eo.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ep, {
              focused: $,
              width: z,
              inCall: X,
              participantType: c.type,
              hasVideo: null != ey && ey,
              ...eL,
              idle: eC,
              platform: eF,
              title: (0, ee.default)(Y, c),
              blocked: es,
              localVideoDisabled: ev,
              videoToggleState: ex,
              hideAudioIcon: eO,
              onContextMenu: eX,
              onToggleMute: eY,
              participantUserId: eT,
              hangStatusActivity: eG,
              application: eW,
              speaking: eM
            }) : null, c.type === eo.ParticipantTypes.USER && eA ? (0, a.jsx)(N.default, {
              userId: c.id,
              channelId: Y.id
            }) : null, X && !J ? (0, a.jsx)("div", {
              className: i()(ef.border, {
                [ef.voiceChannelEffect]: !$ && null != eU,
                [ef.speaking]: eM && !$
              })
            }) : null]
          })
        }), (0, a.jsx)(M.default, {
          isFiring: eg,
          callTileRef: e$.current
        })]
      })
    })
  })
});

function em(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === eo.ParticipantTypes.STREAM) return n === eo.VoicePlatforms.XBOX ? (0, a.jsx)(J.default, {
    className: l
  }) : (0, a.jsx)(Z.default, {
    className: l
  });
  switch (n) {
    case eo.VoicePlatforms.MOBILE:
      return (0, a.jsx)(K.default, {
        className: l
      });
    case eo.VoicePlatforms.XBOX:
      return (0, a.jsx)(J.default, {
        className: l
      });
    case eo.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)(q.default, {
        className: l
      });
    default:
      return null
  }
}
eh.displayName = "CallTile";
let ep = l.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: l,
    serverMuted: s,
    serverDeafened: r,
    idle: p,
    title: E,
    width: C,
    hasVideo: g,
    inCall: _,
    localVideoDisabled: T,
    videoToggleState: I,
    focused: x,
    blocked: N,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: y,
    onContextMenu: L,
    onToggleMute: O,
    platform: j,
    hangStatusActivity: P,
    application: D,
    speaking: b
  } = e, U = null, w = null, k = null, G = null, K = (0, es.isVideoCompact)(C), Z = (0, es.isNamesCompact)(C), q = (0, o.useStateFromStores)([F.default], () => null != y && F.default.isLocalVideoAutoDisabled(y, (0, S.default)(R)), [y, R]), J = (0, m.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === eo.ParticipantTypes.STREAM && g && !x) U = (0, a.jsx)(m.Tooltip, {
      text: ec.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(ef.interactive, ef.toggleMute),
          children: (0, a.jsx)($.default, {})
        })
      }
    });
    else if (l || R !== eo.ParticipantTypes.STREAM || !g || K || x) {
      if (J) {
        let e;
        r ? e = d.HeadphonesDenyIcon : s ? e = f.MicrophoneDenyIcon : n ? e = c.HeadphonesSlashIcon : l ? e = f.MicrophoneDenyIcon : t && (e = h.MicrophoneSlashIcon), U = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? Y.default : z.default;
        U = (0, a.jsx)(e, {
          foreground: i()({
            [ef.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else U = (0, a.jsx)(m.Tooltip, {
      text: ec.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(ef.interactive, ef.toggleMute),
          children: (0, a.jsx)(Q.default, {})
        })
      }
    })
  }
  return _ && F.default.supports(ed.Features.VIDEO) || !g ? _ && g && T && !q && (w = (0, a.jsx)(W.default, {
    foreground: ef.localMuteStrikethrough
  })) : w = (0, a.jsx)(V.default, {}), R === eo.ParticipantTypes.STREAM && !x && g && (k = (0, a.jsx)(m.Tooltip, {
    text: ec.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(m.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i()(ef.status, ef.interactive),
        children: (0, a.jsx)(X.default, {})
      })
    }
  })), R === eo.ParticipantTypes.USER && null != P ? G = (0, a.jsx)(m.Tooltip, {
    text: (0, A.getHangStatusText)(P),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ef.hangStatusContainer, {
        [ef.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(v.default, {
        hangStatusActivity: P,
        className: ef.hangStatusIcon,
        animate: b
      })
    })
  }) : R === eo.ParticipantTypes.USER && null != D && (G = (0, a.jsx)(m.Tooltip, {
    text: ec.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ef.hangStatusContainer, {
        [ef.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(H.default, {
        className: ef.hangStatusIcon,
        game: D,
        size: H.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: ef.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i()(ef.overlayTop, {
        [ef.small]: C < 195
      }),
      children: q || I === er.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: ef.status,
        children: (0, a.jsx)(W.default, {})
      }) : (0, a.jsxs)("div", {
        className: i()(ef.overlayTitle, ef.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: ef.status,
          children: (0, a.jsx)(W.default, {})
        }), (0, a.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: ef.overlayTitleText,
          children: ec.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i()(ef.overlayBottom, {
        [ef.small]: C < 195
      }),
      children: [Z ? (0, a.jsx)("div", {}) : (0, a.jsxs)(m.Text, {
        className: i()(ef.overlayTitle, {
          [ef.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [N ? (0, a.jsx)("div", {
          className: ef.blocked,
          children: (0, a.jsx)(B.default, {
            className: ef.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(em, {
          participantType: R,
          platform: j,
          className: ef.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: ef.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: ef.statusContainer,
        children: [null != w && (0, a.jsx)("div", {
          className: ef.status,
          children: w
        }), null != U && (0, a.jsx)("div", {
          className: ef.status,
          children: U
        }), k, G]
      })]
    })]
  })
});
ep.displayName = "CallTileOverlay";
let eE = G.VideoStreamFit;
t.default = eh