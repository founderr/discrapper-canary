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
  o = n("669491"),
  u = n("966900"),
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
  V = n("142303"),
  B = n("200639"),
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
  eo = n("532351");
let eu = a.memo(e => {
  var t, n, s, o, u;
  let {
    participant: d,
    onDoubleClick: c,
    onContextMenu: f,
    onClick: T,
    onMouseDown: v,
    onKeyDown: U,
    className: F,
    style: V,
    channel: B,
    width: G,
    inPopout: H,
    onVideoResize: W,
    inCall: Y = !1,
    selected: z = !1,
    noBorder: K = !1,
    noVideoRender: Z = !1,
    focused: X = !1,
    blocked: et = !1,
    fit: eu = w.VideoStreamFit.CONTAIN,
    paused: ed = !1,
    pulseSpeakingIndicator: ef = !1
  } = e, eh = a.useContext(R.IdleStateContext), [em, ep] = a.useState(!1), eE = (0, r.useStateFromStores)([y.default], () => y.default.getId()), eS = d.type === ea.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eg] = (0, S.default)(d.type === ea.ParticipantTypes.ACTIVITY ? [d.id] : []), eC = (0, r.useStateFromStores)([x.default], () => x.default.getEnabled()), e_ = (0, r.useStateFromStores)([P.default], () => null != eS && P.default.isLocalVideoDisabled(eS, (0, g.default)(d.type)), [eS, d.type]), eI = (0, r.useStateFromStores)([P.default], () => null != eS ? P.default.getVideoToggleState(eS, (0, g.default)(d.type)) : el.VideoToggleState.NONE, [eS, d.type]);
  Z = eI === el.VideoToggleState.AUTO_PROBING;
  let {
    speaking: eT,
    ringing: ev,
    hasVideo: ex
  } = (0, en.default)(d, eE), eN = function(e, t, n) {
    var l, a, s, i;
    let o = (0, r.useStateFromStoresObject)([D.default], () => {
        var e, l, a;
        let s = D.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (l = null == s ? void 0 : s.deaf) && void 0 !== l && l,
          suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, r.useStateFromStoresObject)([P.default], () => {
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
      serverMuted: o.muted,
      serverDeafened: o.deafened,
      suppressed: o.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === ea.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === ea.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eE, d, B.getGuildId()), eA = d.type === ea.ParticipantTypes.STREAM && eS === eE, eM = (0, r.useStateFromStores)([j.default], () => null != eS ? j.default.getEffectForUserId(eS) : null), eR = (0, r.useStateFromStores)([D.default], () => D.default.getVoicePlatformForChannel(B.id, null != eS ? eS : "")), {
    enableHangStatus: ej
  } = I.HangStatusExperiment.useExperiment({
    guildId: B.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: eL
  } = _.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), {
    hangStatusActivity: ey,
    gameActivity: eO
  } = (0, r.useStateFromStoresObject)([b.default], () => ({
    hangStatusActivity: ej && null != eS ? b.default.findActivity(eS, e => e.type === el.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eL && null != eS ? b.default.findActivity(eS, e => null != e.application_id && e.type === el.ActivityTypes.PLAYING) : null
  }), [ej, eS, eL]), eP = (0, r.useStateFromStores)([O.default], () => (null == eO ? void 0 : eO.application_id) != null ? O.default.getDetectableGame(eO.application_id) : null), eb = (0, r.useStateFromStores)([E.default], () => null != eP && (null == eO ? void 0 : eO.application_id) != null ? E.default.getApplication(null == eO ? void 0 : eO.application_id) : void 0);
  a.useEffect(() => {
    ep(X)
  }, [X]);
  let eD = a.useCallback(() => {
      null != eS && m.default.toggleLocalMute(eS, ei.MediaEngineContextTypes.STREAM)
    }, [eS]),
    eU = a.useCallback(e => {
      null == T || T(d, e)
    }, [T, d]),
    ew = a.useCallback(e => {
      null == c || c(d, e)
    }, [c, d]),
    eF = a.useCallback(e => {
      null == f || f(d, e)
    }, [f, d]),
    ek = null,
    eV = null,
    eB = "";
  switch (d.type) {
    case ea.ParticipantTypes.STREAM:
      ek = (0, l.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eu,
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
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: d.user.username
      });
      break;
    case ea.ParticipantTypes.USER:
      ek = (0, l.jsx)(ee.default, {
        channel: B,
        inCall: Y,
        participant: d,
        fit: eu,
        onVideoResize: W,
        paused: ed,
        selected: z,
        width: G,
        blocked: et,
        noVideoRender: Z,
        pulseSpeakingIndicator: ef
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: d.user.username
      });
      break;
    case ea.ParticipantTypes.ACTIVITY:
      ek = (0, l.jsx)(q.default, {
        interactible: X,
        participant: d,
        selected: z,
        channel: B,
        width: G
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eg ? void 0 : eg.name
      });
      break;
    case ea.ParticipantTypes.HIDDEN_STREAM:
      ek = (0, l.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eu,
        onVideoResize: W,
        paused: ed,
        inPopout: H,
        focused: X
      })
  }
  let eG = a.useRef(null);
  return (0, l.jsx)(p.default, {
    section: el.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, l.jsx)("div", {
      className: i(eo.wrapper, {
        [eo.ringing]: ev
      }, F),
      children: (0, l.jsxs)(M.default, {
        shakeLocation: es.ShakeLocation.VOICE_USER,
        isShaking: eT,
        className: eo.tile,
        children: [(0, l.jsx)(J.default, {
          ref: eG,
          className: i(eo.tile, {
            [eo.noBorder]: K,
            [eo.noInteraction]: null == T,
            [eo.idle]: eh
          }),
          noBorder: K,
          style: V,
          participantUserId: eS,
          children: (0, l.jsxs)(h.ClickableContainer, {
            "aria-label": eB,
            className: eo.tileChild,
            onDoubleClick: ew,
            onContextMenu: eF,
            onClick: eU,
            onMouseDown: v,
            onKeyDown: U,
            focusProps: {
              offset: 1
            },
            children: [d.type === ea.ParticipantTypes.USER && null != eS && null != eM ? (0, l.jsx)(L.default, {
              voiceChannelEffect: eM,
              onComplete: () => (0, j.clearVoiceChannelEffectForUser)(eS),
              userId: eS
            }) : null, d.type === ea.ParticipantTypes.USER ? (0, l.jsx)("div", {
              className: eo.voiceChannelEffectsContainer,
              children: (0, l.jsx)(C.default, {
                userId: eS,
                channelId: B.id,
                guildId: B.getGuildId(),
                containerDimensions: {
                  width: null !== (o = null == eG ? void 0 : null === (n = eG.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== o ? o : 0,
                  height: null !== (u = null == eG ? void 0 : null === (s = eG.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== u ? u : 0
                }
              })
            }) : null, ek, K ? null : (0, l.jsx)("div", {
              className: eo.indicators,
              children: eV
            }), z ? (0, l.jsx)("div", {
              className: eo.selectedScreen,
              children: (0, l.jsx)(k.default, {
                className: eo.selectedIcon
              })
            }) : null, d.type !== ea.ParticipantTypes.ACTIVITY ? (0, l.jsx)(ec, {
              focused: X,
              width: G,
              inCall: Y,
              participantType: d.type,
              hasVideo: null != ex && ex,
              ...eN,
              idle: eh,
              platform: eR,
              title: (0, Q.default)(B, d),
              blocked: et,
              localVideoDisabled: e_,
              videoToggleState: eI,
              hideAudioIcon: eA,
              onContextMenu: eF,
              onToggleMute: eD,
              participantUserId: eS,
              hangStatusActivity: ey,
              application: eb,
              speaking: eT
            }) : null, d.type === ea.ParticipantTypes.USER && eC ? (0, l.jsx)(N.default, {
              userId: d.id,
              channelId: B.id
            }) : null, Y && !K ? (0, l.jsx)("div", {
              className: i(eo.border, {
                [eo.voiceChannelEffect]: !X && null != eM,
                [eo.speaking]: eT && !X
              })
            }) : null]
          })
        }), (0, l.jsx)(A.default, {
          isFiring: em,
          callTileRef: eG.current
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
eu.displayName = "CallTile";
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
          className: i(eo.interactive, eo.toggleMute),
          children: (0, l.jsx)(X.default, {})
        })
      }
    });
    else if (a || R !== ea.ParticipantTypes.STREAM || !C || Q || N) {
      if ($) {
        let e;
        m ? e = u.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : a ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), H = null != e ? (0, l.jsx)(e, {
          color: o.default.colors.WHITE
        }) : null
      } else if (n || t || a) {
        let e = n ? B.default : G.default;
        H = (0, l.jsx)(e, {
          foreground: i({
            [eo.localMuteStrikethrough]: a && !n
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
          className: i(eo.interactive, eo.toggleMute),
          children: (0, l.jsx)(Z.default, {})
        })
      }
    })
  }
  return _ && P.default.supports(ei.Features.VIDEO) || !C ? _ && C && I && !J && (W = (0, l.jsx)(V.default, {
    foreground: eo.localMuteStrikethrough
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
        className: i(eo.status, eo.interactive),
        children: (0, l.jsx)(Y.default, {})
      })
    }
  })), R === ea.ParticipantTypes.USER && null != b ? K = (0, l.jsx)(h.Tooltip, {
    text: (0, T.getHangStatusText)(b),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: i(eo.hangStatusContainer, {
        [eo.hangStatusSmall]: S < 500
      }),
      children: (0, l.jsx)(v.default, {
        hangStatusActivity: b,
        className: eo.hangStatusIcon,
        animate: w
      })
    })
  }) : R === ea.ParticipantTypes.USER && null != D && (K = (0, l.jsx)(h.Tooltip, {
    text: er.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: i(eo.hangStatusContainer, {
        [eo.hangStatusSmall]: S < 500
      }),
      children: (0, l.jsx)(U.default, {
        className: eo.hangStatusIcon,
        game: D,
        size: U.default.Sizes.SMALL
      })
    })
  })), (0, l.jsxs)("div", {
    className: eo.overlayContainer,
    children: [(0, l.jsx)("div", {
      className: i(eo.overlayTop, {
        [eo.small]: S < 195
      }),
      children: J || x === el.VideoToggleState.AUTO_PROBING ? p ? (0, l.jsx)("div", {
        className: eo.status,
        children: (0, l.jsx)(V.default, {})
      }) : (0, l.jsxs)("div", {
        className: i(eo.overlayTitle, eo.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: eo.status,
          children: (0, l.jsx)(V.default, {})
        }), (0, l.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eo.overlayTitleText,
          children: er.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, l.jsxs)("div", {
      className: i(eo.overlayBottom, {
        [eo.small]: S < 195
      }),
      children: [q ? (0, l.jsx)("div", {}) : (0, l.jsxs)(h.Text, {
        className: i(eo.overlayTitle, {
          [eo.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [A ? (0, l.jsx)("div", {
          className: eo.blocked,
          children: (0, l.jsx)(F.default, {
            className: eo.blockedIcon,
            color: o.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, l.jsx)(ed, {
          participantType: R,
          platform: O,
          className: eo.titleIcon
        }), null != E && "" !== E ? (0, l.jsx)("span", {
          className: eo.overlayTitleText,
          children: E
        }) : null]
      }), (0, l.jsxs)("div", {
        className: eo.statusContainer,
        children: [null != W && (0, l.jsx)("div", {
          className: eo.status,
          children: W
        }), null != H && (0, l.jsx)("div", {
          className: eo.status,
          children: H
        }), z, K]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let ef = w.VideoStreamFit;
var eh = eu