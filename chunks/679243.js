"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return ef
  },
  default: function() {
    return eh
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("669491"),
  o = n("966900"),
  d = n("838048"),
  c = n("359902"),
  f = n("780624"),
  h = n("77078"),
  m = n("629109"),
  p = n("901582"),
  E = n("299285"),
  S = n("442939"),
  g = n("161306"),
  C = n("397443"),
  _ = n("774539"),
  I = n("699209"),
  T = n("808742"),
  v = n("342845"),
  x = n("170152"),
  N = n("431923"),
  A = n("719761"),
  M = n("835040"),
  R = n("908583"),
  j = n("568088"),
  L = n("560289"),
  y = n("271938"),
  O = n("546463"),
  P = n("42887"),
  b = n("824563"),
  D = n("800762"),
  U = n("953109"),
  w = n("512264"),
  F = n("328275"),
  k = n("437825"),
  B = n("142303"),
  V = n("200639"),
  G = n("97347"),
  H = n("216947"),
  W = n("267675"),
  Y = n("433487"),
  z = n("998564"),
  K = n("420145"),
  Z = n("368121"),
  X = n("570511"),
  Q = n("491519"),
  q = n("395763"),
  J = n("784981"),
  $ = n("729185"),
  ee = n("715764"),
  et = n("144565"),
  en = n("85208"),
  el = n("49111"),
  ea = n("99795"),
  es = n("39141"),
  ei = n("353927"),
  er = n("782340"),
  eu = n("532351");
let eo = a.memo(e => {
  var t, n, s, u, o;
  let {
    participant: d,
    onDoubleClick: c,
    onContextMenu: f,
    onClick: T,
    onMouseDown: v,
    onKeyDown: U,
    className: F,
    style: B,
    channel: V,
    width: G,
    inPopout: H,
    onVideoResize: W,
    inCall: Y = !1,
    selected: z = !1,
    noBorder: K = !1,
    noVideoRender: Z = !1,
    focused: X = !1,
    blocked: et = !1,
    fit: eo = w.VideoStreamFit.CONTAIN,
    paused: ed = !1,
    pulseSpeakingIndicator: ef = !1
  } = e, eh = a.useContext(R.IdleStateContext), [em, ep] = a.useState(!1), eE = (0, r.useStateFromStores)([y.default], () => y.default.getId()), eS = d.type === ea.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eg] = (0, S.default)(d.type === ea.ParticipantTypes.ACTIVITY ? [d.id] : []), eC = (0, r.useStateFromStores)([x.default], () => x.default.getEnabled()), e_ = (0, r.useStateFromStores)([P.default], () => null != eS && P.default.isLocalVideoDisabled(eS, (0, g.default)(d.type)), [eS, d.type]), eI = (0, r.useStateFromStores)([P.default], () => null != eS ? P.default.getVideoToggleState(eS, (0, g.default)(d.type)) : el.VideoToggleState.NONE, [eS, d.type]), eT = eI === el.VideoToggleState.AUTO_PROBING, {
    speaking: ev,
    ringing: ex,
    hasVideo: eN
  } = (0, en.default)(d, eE), eA = function(e, t, n) {
    var l, a, s, i;
    let u = (0, r.useStateFromStoresObject)([D.default], () => {
        var e, l, a;
        let s = D.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (l = null == s ? void 0 : s.deaf) && void 0 !== l && l,
          suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      o = (0, r.useStateFromStoresObject)([P.default], () => {
        let n = (0, g.default)(t.type),
          l = t.type !== ea.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === l ? {
          muted: !1,
          deafened: !1
        } : {
          muted: P.default.isLocalMute(l, n),
          localVideoDisabled: P.default.isLocalVideoDisabled(l, n),
          localVideoAutoDisabled: P.default.isLocalVideoAutoDisabled(l, n)
        }
      }, [e, t]);
    return {
      serverMuted: u.muted,
      serverDeafened: u.deafened,
      suppressed: u.suppressed,
      localMuted: o.muted,
      muted: null !== (s = t.type === ea.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === ea.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eE, d, V.getGuildId()), eM = d.type === ea.ParticipantTypes.STREAM && eS === eE, eR = (0, r.useStateFromStores)([j.default], () => null != eS ? j.default.getEffectForUserId(eS) : null), ej = (0, r.useStateFromStores)([D.default], () => D.default.getVoicePlatformForChannel(V.id, null != eS ? eS : el.EMPTY_STRING_USER_ID)), {
    enableHangStatus: eL
  } = I.HangStatusExperiment.useExperiment({
    guildId: V.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ey
  } = _.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), {
    hangStatusActivity: eO,
    gameActivity: eP
  } = (0, r.useStateFromStoresObject)([b.default], () => ({
    hangStatusActivity: eL && null != eS ? b.default.findActivity(eS, e => e.type === el.ActivityTypes.HANG_STATUS) : null,
    gameActivity: ey && null != eS ? b.default.findActivity(eS, e => null != e.application_id && e.type === el.ActivityTypes.PLAYING) : null
  }), [eL, eS, ey]), eb = (0, r.useStateFromStores)([O.default], () => (null == eP ? void 0 : eP.application_id) != null ? O.default.getDetectableGame(eP.application_id) : null), eD = (0, r.useStateFromStores)([E.default], () => null != eb && (null == eP ? void 0 : eP.application_id) != null ? E.default.getApplication(null == eP ? void 0 : eP.application_id) : void 0);
  a.useEffect(() => {
    ep(X)
  }, [X]);
  let eU = a.useCallback(() => {
      null != eS && m.default.toggleLocalMute(eS, ei.MediaEngineContextTypes.STREAM)
    }, [eS]),
    ew = a.useCallback(e => {
      null == T || T(d, e)
    }, [T, d]),
    eF = a.useCallback(e => {
      null == c || c(d, e)
    }, [c, d]),
    ek = a.useCallback(e => {
      null == f || f(d, e)
    }, [f, d]),
    eB = null,
    eV = null,
    eG = "";
  switch (d.type) {
    case ea.ParticipantTypes.STREAM:
      eB = (0, l.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: H,
        focused: X
      }), eV = (0, l.jsx)($.StreamTileIndicators, {
        participant: d,
        selected: z,
        width: G,
        focused: X,
        idle: eh
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: d.user.username
      });
      break;
    case ea.ParticipantTypes.USER:
      eB = (0, l.jsx)(ee.default, {
        channel: V,
        inCall: Y,
        participant: d,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        selected: z,
        width: G,
        blocked: et,
        noVideoRender: Z || eT,
        pulseSpeakingIndicator: ef
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: d.user.username
      });
      break;
    case ea.ParticipantTypes.ACTIVITY:
      eB = (0, l.jsx)(q.default, {
        interactible: X,
        participant: d,
        selected: z,
        channel: V,
        width: G
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eg ? void 0 : eg.name
      });
      break;
    case ea.ParticipantTypes.HIDDEN_STREAM:
      eB = (0, l.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: H,
        focused: X
      })
  }
  let eH = a.useRef(null);
  return (0, l.jsx)(p.default, {
    section: el.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, l.jsx)("div", {
      className: i(eu.wrapper, {
        [eu.ringing]: ex
      }, F),
      children: (0, l.jsxs)(M.default, {
        shakeLocation: es.ShakeLocation.VOICE_USER,
        isShaking: ev,
        className: eu.tile,
        children: [(0, l.jsx)(J.default, {
          ref: eH,
          className: i(eu.tile, {
            [eu.noBorder]: K,
            [eu.noInteraction]: null == T,
            [eu.idle]: eh
          }),
          noBorder: K,
          style: B,
          participantUserId: eS,
          children: (0, l.jsxs)(h.ClickableContainer, {
            "aria-label": eG,
            className: eu.tileChild,
            onDoubleClick: eF,
            onContextMenu: ek,
            onClick: ew,
            onMouseDown: v,
            onKeyDown: U,
            focusProps: {
              offset: 1
            },
            children: [d.type === ea.ParticipantTypes.USER && null != eS && null != eR ? (0, l.jsx)(L.default, {
              voiceChannelEffect: eR,
              onComplete: () => (0, j.clearVoiceChannelEffectForUser)(eS),
              userId: eS
            }) : null, d.type === ea.ParticipantTypes.USER ? (0, l.jsx)("div", {
              className: eu.voiceChannelEffectsContainer,
              children: (0, l.jsx)(C.default, {
                userId: eS,
                channelId: V.id,
                guildId: V.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == eH ? void 0 : null === (n = eH.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (o = null == eH ? void 0 : null === (s = eH.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== o ? o : 0
                }
              })
            }) : null, eB, K ? null : (0, l.jsx)("div", {
              className: eu.indicators,
              children: eV
            }), z ? (0, l.jsx)("div", {
              className: eu.selectedScreen,
              children: (0, l.jsx)(k.default, {
                className: eu.selectedIcon
              })
            }) : null, d.type !== ea.ParticipantTypes.ACTIVITY ? (0, l.jsx)(ec, {
              focused: X,
              width: G,
              inCall: Y,
              participantType: d.type,
              hasVideo: null != eN && eN,
              ...eA,
              idle: eh,
              platform: ej,
              title: (0, Q.default)(V, d),
              blocked: et,
              localVideoDisabled: e_,
              videoToggleState: eI,
              hideAudioIcon: eM,
              onContextMenu: ek,
              onToggleMute: eU,
              participantUserId: eS,
              hangStatusActivity: eO,
              application: eD,
              speaking: ev
            }) : null, d.type === ea.ParticipantTypes.USER && eC ? (0, l.jsx)(N.default, {
              userId: d.id,
              channelId: V.id
            }) : null, Y && !K ? (0, l.jsx)("div", {
              className: i(eu.border, {
                [eu.voiceChannelEffect]: !X && null != eR,
                [eu.speaking]: ev && !X
              })
            }) : null]
          })
        }), (0, l.jsx)(A.default, {
          isFiring: em,
          callTileRef: eH.current
        })]
      })
    })
  })
});

function ed(e) {
  let {
    participantType: t,
    platform: n,
    className: a
  } = e;
  if (t === ea.ParticipantTypes.STREAM) return n === ea.VoicePlatforms.XBOX ? (0, l.jsx)(K.default, {
    className: a
  }) : (0, l.jsx)(W.default, {
    className: a
  });
  switch (n) {
    case ea.VoicePlatforms.MOBILE:
      return (0, l.jsx)(H.default, {
        className: a
      });
    case ea.VoicePlatforms.XBOX:
      return (0, l.jsx)(K.default, {
        className: a
      });
    case ea.VoicePlatforms.PLAYSTATION:
      return (0, l.jsx)(z.default, {
        className: a
      });
    default:
      return null
  }
}
eo.displayName = "CallTile";
let ec = a.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: a,
    serverMuted: s,
    serverDeafened: m,
    idle: p,
    title: E,
    width: S,
    hasVideo: C,
    inCall: _,
    localVideoDisabled: I,
    videoToggleState: x,
    focused: N,
    blocked: A,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: j,
    onContextMenu: L,
    onToggleMute: y,
    platform: O,
    hangStatusActivity: b,
    application: D,
    speaking: w
  } = e, H = null, W = null, z = null, K = null, Q = (0, et.isVideoCompact)(S), q = (0, et.isNamesCompact)(S), J = (0, r.useStateFromStores)([P.default], () => null != j && P.default.isLocalVideoAutoDisabled(j, (0, g.default)(R)), [j, R]), $ = (0, h.useRedesignIconContext)().enabled;
  if (!M) {
    if (a && R === ea.ParticipantTypes.STREAM && C && !N) H = (0, l.jsx)(h.Tooltip, {
      text: er.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, l.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), y()
          },
          className: i(eu.interactive, eu.toggleMute),
          children: (0, l.jsx)(X.default, {})
        })
      }
    });
    else if (a || R !== ea.ParticipantTypes.STREAM || !C || Q || N) {
      if ($) {
        let e;
        m ? e = o.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : a ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), H = null != e ? (0, l.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || a) {
        let e = n ? V.default : G.default;
        H = (0, l.jsx)(e, {
          foreground: i({
            [eu.localMuteStrikethrough]: a && !n
          })
        })
      }
    } else H = (0, l.jsx)(h.Tooltip, {
      text: er.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, l.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), y()
          },
          className: i(eu.interactive, eu.toggleMute),
          children: (0, l.jsx)(Z.default, {})
        })
      }
    })
  }
  return _ && P.default.supports(ei.Features.VIDEO) || !C ? _ && C && I && !J && (W = (0, l.jsx)(B.default, {
    foreground: eu.localMuteStrikethrough
  })) : W = (0, l.jsx)(k.default, {}), R === ea.ParticipantTypes.STREAM && !N && C && (z = (0, l.jsx)(h.Tooltip, {
    text: er.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, l.jsx)(h.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i(eu.status, eu.interactive),
        children: (0, l.jsx)(Y.default, {})
      })
    }
  })), R === ea.ParticipantTypes.USER && null != b ? K = (0, l.jsx)(h.Tooltip, {
    text: (0, T.getHangStatusText)(b),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: S < 500
      }),
      children: (0, l.jsx)(v.default, {
        hangStatusActivity: b,
        className: eu.hangStatusIcon,
        animate: w
      })
    })
  }) : R === ea.ParticipantTypes.USER && null != D && (K = (0, l.jsx)(h.Tooltip, {
    text: er.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: S < 500
      }),
      children: (0, l.jsx)(U.default, {
        className: eu.hangStatusIcon,
        game: D,
        size: U.default.Sizes.SMALL
      })
    })
  })), (0, l.jsxs)("div", {
    className: eu.overlayContainer,
    children: [(0, l.jsx)("div", {
      className: i(eu.overlayTop, {
        [eu.small]: S < 195
      }),
      children: J || x === el.VideoToggleState.AUTO_PROBING ? p ? (0, l.jsx)("div", {
        className: eu.status,
        children: (0, l.jsx)(B.default, {})
      }) : (0, l.jsxs)("div", {
        className: i(eu.overlayTitle, eu.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: eu.status,
          children: (0, l.jsx)(B.default, {})
        }), (0, l.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eu.overlayTitleText,
          children: er.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, l.jsxs)("div", {
      className: i(eu.overlayBottom, {
        [eu.small]: S < 195
      }),
      children: [q ? (0, l.jsx)("div", {}) : (0, l.jsxs)(h.Text, {
        className: i(eu.overlayTitle, {
          [eu.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [A ? (0, l.jsx)("div", {
          className: eu.blocked,
          children: (0, l.jsx)(F.default, {
            className: eu.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, l.jsx)(ed, {
          participantType: R,
          platform: O,
          className: eu.titleIcon
        }), null != E && "" !== E ? (0, l.jsx)("span", {
          className: eu.overlayTitleText,
          children: E
        }) : null]
      }), (0, l.jsxs)("div", {
        className: eu.statusContainer,
        children: [null != W && (0, l.jsx)("div", {
          className: eu.status,
          children: W
        }), null != H && (0, l.jsx)("div", {
          className: eu.status,
          children: H
        }), z, K]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let ef = w.VideoStreamFit;
var eh = eo