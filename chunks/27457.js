"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return em
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
  N = n("37091"),
  x = n("6572"),
  M = n("535400"),
  R = n("512384"),
  L = n("386542"),
  y = n("937995"),
  O = n("456631"),
  j = n("274459"),
  P = n("314897"),
  D = n("77498"),
  b = n("131951"),
  U = n("158776"),
  F = n("979651"),
  w = n("366695"),
  k = n("40300"),
  H = n("83097"),
  B = n("119828"),
  G = n("156338"),
  V = n("381238"),
  W = n("255439"),
  Y = n("736921"),
  z = n("169278"),
  K = n("808268"),
  Z = n("374129"),
  q = n("639351"),
  X = n("632184"),
  Q = n("82965"),
  J = n("584729"),
  $ = n("849171"),
  ee = n("607187"),
  et = n("833519"),
  en = n("462061"),
  ea = n("623825"),
  el = n("839662"),
  es = n("981631"),
  ei = n("354459"),
  er = n("524484"),
  eo = n("65154"),
  eu = n("689938"),
  ed = n("373448");
let ec = l.memo(e => {
  var t, n, s, u, d;
  let {
    participant: c,
    onDoubleClick: f,
    onContextMenu: h,
    onClick: A,
    onMouseDown: v,
    onKeyDown: w,
    className: H,
    style: G,
    channel: V,
    width: W,
    inPopout: Y,
    onVideoResize: z,
    inCall: K = !1,
    selected: Z = !1,
    noBorder: q = !1,
    noVideoRender: X = !1,
    focused: Q = !1,
    blocked: ea = !1,
    fit: ec = k.VideoStreamFit.CONTAIN,
    paused: ef = !1,
    pulseSpeakingIndicator: em = !1
  } = e, ep = l.useContext(y.IdleStateContext), [eE, eC] = l.useState(!1), eg = (0, o.useStateFromStores)([P.default], () => P.default.getId()), eS = c.type === ei.ParticipantTypes.ACTIVITY ? null : null === (t = c.user) || void 0 === t ? void 0 : t.id, [e_] = (0, g.default)(c.type === ei.ParticipantTypes.ACTIVITY ? [c.id] : []), eT = (0, o.useStateFromStores)([N.default], () => N.default.getEnabled()), eI = (0, o.useStateFromStores)([b.default], () => null != eS && b.default.isLocalVideoDisabled(eS, (0, S.default)(c.type)), [eS, c.type]), eA = (0, o.useStateFromStores)([b.default], () => null != eS ? b.default.getVideoToggleState(eS, (0, S.default)(c.type)) : es.VideoToggleState.NONE, [eS, c.type]), ev = eA === es.VideoToggleState.AUTO_PROBING, {
    speaking: eN,
    ringing: ex,
    hasVideo: eM
  } = (0, el.default)(c, eg), eR = function(e, t, n) {
    var a, l, s, i;
    let r = (0, o.useStateFromStoresObject)([F.default], () => {
        var e, a, l;
        let s = F.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, o.useStateFromStoresObject)([b.default], () => {
        let n = (0, S.default)(t.type),
          a = t.type !== ei.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === a ? {
          muted: !1,
          deafened: !1
        } : {
          muted: b.default.isLocalMute(a, n),
          localVideoDisabled: b.default.isLocalVideoDisabled(a, n),
          localVideoAutoDisabled: b.default.isLocalVideoAutoDisabled(a, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === ei.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === ei.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eg, c, V.getGuildId()), eL = c.type === ei.ParticipantTypes.STREAM && eS === eg, {
    available: ey,
    activated: eO,
    hqStreamingState: ej
  } = (0, L.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), eP = ey && eO && ej.hqStreamingIsEnabled && eL, eD = (0, o.useStateFromStores)([O.default], () => null != eS ? O.default.getEffectForUserId(eS) : null), eb = (0, o.useStateFromStores)([F.default], () => F.default.getVoicePlatformForChannel(V.id, null != eS ? eS : es.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: eU
  } = I.HangStatusExperiment.useExperiment({
    guildId: V.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: eF
  } = T.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), ew = eF || eU, {
    hangStatusActivity: ek,
    gameActivity: eH
  } = (0, o.useStateFromStoresObject)([U.default], () => ({
    hangStatusActivity: eU && null != eS ? U.default.findActivity(eS, e => e.type === es.ActivityTypes.HANG_STATUS) : null,
    gameActivity: ew && null != eS ? U.default.findActivity(eS, e => null != e.application_id && e.type === es.ActivityTypes.PLAYING) : null
  }), [eU, eS, ew]), eB = (0, o.useStateFromStores)([D.default], () => (null == eH ? void 0 : eH.application_id) != null ? D.default.getDetectableGame(eH.application_id) : null), eG = (0, o.useStateFromStores)([C.default], () => null != eB && (null == eH ? void 0 : eH.application_id) != null ? C.default.getApplication(null == eH ? void 0 : eH.application_id) : void 0);
  l.useEffect(() => {
    eC(Q)
  }, [Q]);
  let eV = l.useCallback(() => {
      null != eS && p.default.toggleLocalMute(eS, eo.MediaEngineContextTypes.STREAM)
    }, [eS]),
    eW = l.useCallback(e => {
      null == A || A(c, e)
    }, [A, c]),
    eY = l.useCallback(e => {
      null == f || f(c, e)
    }, [f, c]),
    ez = l.useCallback(e => {
      null == h || h(c, e)
    }, [h, c]),
    eK = null,
    eZ = null,
    eq = "";
  switch (c.type) {
    case ei.ParticipantTypes.STREAM:
      eK = (0, a.jsx)(et.default, {
        participant: c,
        selected: Z,
        width: W,
        fit: ec,
        onVideoResize: z,
        paused: ef,
        inPopout: Y,
        focused: Q
      }), eZ = (0, a.jsx)(et.StreamTileIndicators, {
        participant: c,
        selected: Z,
        width: W,
        focused: Q,
        idle: eP ? !eP : ep,
        premiumIndicator: eP
      }), eq = eu.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: c.user.username
      });
      break;
    case ei.ParticipantTypes.USER:
      eK = (0, a.jsx)(en.default, {
        channel: V,
        inCall: K,
        participant: c,
        fit: ec,
        onVideoResize: z,
        paused: ef,
        selected: Z,
        width: W,
        blocked: ea,
        noVideoRender: X || ev,
        pulseSpeakingIndicator: em
      }), eq = eu.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: c.user.username
      });
      break;
    case ei.ParticipantTypes.ACTIVITY:
      eK = (0, a.jsx)($.default, {
        interactible: Q,
        participant: c,
        selected: Z,
        channel: V,
        width: W
      }), eq = eu.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == e_ ? void 0 : e_.name
      });
      break;
    case ei.ParticipantTypes.HIDDEN_STREAM:
      eK = (0, a.jsx)(et.default, {
        participant: c,
        selected: Z,
        width: W,
        fit: ec,
        onVideoResize: z,
        paused: ef,
        inPopout: Y,
        focused: Q
      })
  }
  let eX = l.useRef(null);
  return (0, a.jsx)(E.default, {
    section: es.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i()(ed.wrapper, {
        [ed.ringing]: ex
      }, H),
      children: (0, a.jsxs)(R.default, {
        shakeLocation: er.ShakeLocation.VOICE_USER,
        isShaking: eN,
        className: ed.tile,
        children: [(0, a.jsx)(ee.default, {
          ref: eX,
          className: i()(ed.tile, {
            [ed.noBorder]: q,
            [ed.noInteraction]: null == A,
            [ed.idle]: ep
          }),
          noBorder: q,
          style: G,
          participantUserId: eS,
          children: (0, a.jsxs)(m.ClickableContainer, {
            "aria-label": eq,
            className: ed.tileChild,
            onDoubleClick: eY,
            onContextMenu: ez,
            onClick: eW,
            onMouseDown: v,
            onKeyDown: w,
            focusProps: {
              offset: 1
            },
            children: [c.type === ei.ParticipantTypes.USER && null != eS && null != eD ? (0, a.jsx)(j.default, {
              voiceChannelEffect: eD,
              onComplete: () => (0, O.clearVoiceChannelEffectForUser)(eS),
              userId: eS
            }) : null, c.type === ei.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: ed.voiceChannelEffectsContainer,
              children: (0, a.jsx)(_.default, {
                userId: eS,
                channelId: V.id,
                guildId: V.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == eX ? void 0 : null === (n = eX.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (d = null == eX ? void 0 : null === (s = eX.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== d ? d : 0
                }
              })
            }) : null, eK, q ? null : (0, a.jsx)("div", {
              className: ed.indicators,
              children: eZ
            }), Z ? (0, a.jsx)("div", {
              className: ed.selectedScreen,
              children: (0, a.jsx)(B.default, {
                className: ed.selectedIcon
              })
            }) : null, c.type !== ei.ParticipantTypes.ACTIVITY ? (0, a.jsx)(eh, {
              focused: Q,
              width: W,
              inCall: K,
              participantType: c.type,
              hasVideo: null != eM && eM,
              ...eR,
              idle: ep,
              platform: eb,
              title: (0, J.default)(V, c),
              blocked: ea,
              localVideoDisabled: eI,
              videoToggleState: eA,
              hideAudioIcon: eL,
              onContextMenu: ez,
              onToggleMute: eV,
              participantUserId: eS,
              hangStatusActivity: ek,
              application: eG,
              speaking: eN
            }) : null, c.type === ei.ParticipantTypes.USER && eT ? (0, a.jsx)(x.default, {
              userId: c.id,
              channelId: V.id
            }) : null, K && !q ? (0, a.jsx)("div", {
              className: i()(ed.border, {
                [ed.voiceChannelEffect]: !Q && null != eD,
                [ed.speaking]: eN && !Q
              })
            }) : null]
          })
        }), (0, a.jsx)(M.default, {
          isFiring: eE,
          callTileRef: eX.current
        })]
      })
    })
  })
});

function ef(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === ei.ParticipantTypes.STREAM) return n === ei.VoicePlatforms.XBOX ? (0, a.jsx)(q.default, {
    className: l
  }) : (0, a.jsx)(z.default, {
    className: l
  });
  switch (n) {
    case ei.VoicePlatforms.MOBILE:
      return (0, a.jsx)(Y.default, {
        className: l
      });
    case ei.VoicePlatforms.XBOX:
      return (0, a.jsx)(q.default, {
        className: l
      });
    case ei.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)(Z.default, {
        className: l
      });
    default:
      return null
  }
}
ec.displayName = "CallTile";
let eh = l.memo(e => {
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
    focused: N,
    blocked: x,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: L,
    onContextMenu: y,
    onToggleMute: O,
    platform: j,
    hangStatusActivity: P,
    application: D,
    speaking: U
  } = e, F = null, k = null, Y = null, z = null, Z = (0, ea.isVideoCompact)(C), q = (0, ea.isNamesCompact)(C), J = (0, o.useStateFromStores)([b.default], () => null != L && b.default.isLocalVideoAutoDisabled(L, (0, S.default)(R)), [L, R]), $ = (0, m.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === ei.ParticipantTypes.STREAM && g && !N) F = (0, a.jsx)(m.Tooltip, {
      text: eu.default.Messages.UNMUTE,
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
          className: i()(ed.interactive, ed.toggleMute),
          children: (0, a.jsx)(Q.default, {})
        })
      }
    });
    else if (l || R !== ei.ParticipantTypes.STREAM || !g || Z || N) {
      if ($) {
        let e;
        r ? e = d.HeadphonesDenyIcon : s ? e = f.MicrophoneDenyIcon : n ? e = c.HeadphonesSlashIcon : l ? e = f.MicrophoneDenyIcon : t && (e = h.MicrophoneSlashIcon), F = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? V.default : W.default;
        F = (0, a.jsx)(e, {
          foreground: i()({
            [ed.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else F = (0, a.jsx)(m.Tooltip, {
      text: eu.default.Messages.MUTE,
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
          className: i()(ed.interactive, ed.toggleMute),
          children: (0, a.jsx)(X.default, {})
        })
      }
    })
  }
  return _ && b.default.supports(eo.Features.VIDEO) || !g ? _ && g && T && !J && (k = (0, a.jsx)(G.default, {
    foreground: ed.localMuteStrikethrough
  })) : k = (0, a.jsx)(B.default, {}), R === ei.ParticipantTypes.STREAM && !N && g && (Y = (0, a.jsx)(m.Tooltip, {
    text: eu.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(m.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), y(e)
        },
        className: i()(ed.status, ed.interactive),
        children: (0, a.jsx)(K.default, {})
      })
    }
  })), R === ei.ParticipantTypes.USER && null != P ? z = (0, a.jsx)(m.Tooltip, {
    text: (0, A.getHangStatusText)(P),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ed.hangStatusContainer, {
        [ed.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(v.default, {
        hangStatusActivity: P,
        className: ed.hangStatusIcon,
        animate: U
      })
    })
  }) : R === ei.ParticipantTypes.USER && null != D && (z = (0, a.jsx)(m.Tooltip, {
    text: eu.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ed.hangStatusContainer, {
        [ed.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(w.default, {
        className: ed.hangStatusIcon,
        game: D,
        size: w.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: ed.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i()(ed.overlayTop, {
        [ed.small]: C < 195
      }),
      children: J || I === es.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: ed.status,
        children: (0, a.jsx)(G.default, {})
      }) : (0, a.jsxs)("div", {
        className: i()(ed.overlayTitle, ed.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: ed.status,
          children: (0, a.jsx)(G.default, {})
        }), (0, a.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: ed.overlayTitleText,
          children: eu.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i()(ed.overlayBottom, {
        [ed.small]: C < 195
      }),
      children: [q ? (0, a.jsx)("div", {}) : (0, a.jsxs)(m.Text, {
        className: i()(ed.overlayTitle, {
          [ed.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [x ? (0, a.jsx)("div", {
          className: ed.blocked,
          children: (0, a.jsx)(H.default, {
            className: ed.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(ef, {
          participantType: R,
          platform: j,
          className: ed.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: ed.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: ed.statusContainer,
        children: [null != k && (0, a.jsx)("div", {
          className: ed.status,
          children: k
        }), null != F && (0, a.jsx)("div", {
          className: ed.status,
          children: F
        }), Y, z]
      })]
    })]
  })
});
eh.displayName = "CallTileOverlay";
let em = k.VideoStreamFit;
t.default = ec