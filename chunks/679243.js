"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return ef
  },
  default: function() {
    return eh
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("669491"),
  o = n("966900"),
  d = n("838048"),
  c = n("359902"),
  f = n("780624"),
  h = n("77078"),
  p = n("629109"),
  m = n("901582"),
  E = n("299285"),
  C = n("442939"),
  g = n("161306"),
  S = n("397443"),
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
  O = n("271938"),
  y = n("546463"),
  b = n("42887"),
  P = n("824563"),
  D = n("800762"),
  U = n("953109"),
  w = n("512264"),
  F = n("328275"),
  k = n("437825"),
  V = n("142303"),
  B = n("200639"),
  H = n("97347"),
  G = n("216947"),
  W = n("267675"),
  Y = n("433487"),
  z = n("998564"),
  K = n("420145"),
  Z = n("368121"),
  X = n("570511"),
  J = n("491519"),
  q = n("395763"),
  Q = n("784981"),
  $ = n("729185"),
  ee = n("715764"),
  et = n("144565"),
  en = n("85208"),
  ea = n("49111"),
  el = n("99795"),
  es = n("39141"),
  ei = n("353927"),
  er = n("782340"),
  eu = n("146789");
let eo = l.memo(e => {
  var t, n, s, u, o;
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
    width: H,
    inPopout: G,
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
  } = e, eh = l.useContext(R.IdleStateContext), [ep, em] = l.useState(!1), eE = (0, r.useStateFromStores)([O.default], () => O.default.getId()), eC = d.type === el.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eg] = (0, C.default)(d.type === el.ParticipantTypes.ACTIVITY ? [d.id] : []), eS = (0, r.useStateFromStores)([x.default], () => x.default.getEnabled()), e_ = (0, r.useStateFromStores)([b.default], () => null != eC && b.default.isLocalVideoDisabled(eC, (0, g.default)(d.type)), [eC, d.type]), eI = (0, r.useStateFromStores)([b.default], () => null != eC ? b.default.getVideoToggleState(eC, (0, g.default)(d.type)) : ea.VideoToggleState.NONE, [eC, d.type]);
  Z = eI === ea.VideoToggleState.AUTO_PROBING;
  let {
    speaking: eT,
    ringing: ev,
    hasVideo: ex
  } = (0, en.default)(d, eE), eN = function(e, t, n) {
    var a, l, s, i;
    let u = (0, r.useStateFromStoresObject)([D.default], () => {
        var e, a, l;
        let s = D.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      o = (0, r.useStateFromStoresObject)([b.default], () => e === t.id ? {
        muted: !1,
        deafened: !1
      } : {
        muted: b.default.isLocalMute(t.id, ei.MediaEngineContextTypes.DEFAULT),
        localVideoDisabled: b.default.isLocalVideoDisabled(t.id, ei.MediaEngineContextTypes.DEFAULT),
        localVideoAutoDisabled: b.default.isLocalVideoAutoDisabled(t.id, ei.MediaEngineContextTypes.DEFAULT)
      }, [e, t.id]);
    return {
      serverMuted: u.muted,
      serverDeafened: u.deafened,
      suppressed: u.suppressed,
      localMuted: o.muted,
      muted: null !== (s = t.type === el.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === el.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eE, d, B.getGuildId()), eA = d.type === el.ParticipantTypes.STREAM && eC === eE, eM = (0, r.useStateFromStores)([j.default], () => null != eC ? j.default.getEffectForUserId(eC) : null), eR = (0, r.useStateFromStores)([D.default], () => D.default.getVoicePlatformForChannel(B.id, null != eC ? eC : "")), {
    enableHangStatus: ej
  } = I.HangStatusExperiment.useExperiment({
    guildId: B.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: !1
  }), {
    showGameIcon: eL
  } = _.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), {
    hangStatusActivity: eO,
    gameActivity: ey
  } = (0, r.useStateFromStoresObject)([P.default], () => ({
    hangStatusActivity: ej && null != eC ? P.default.findActivity(eC, e => e.type === ea.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eL && null != eC ? P.default.findActivity(eC, e => null != e.application_id && e.type === ea.ActivityTypes.PLAYING) : null
  }), [ej, eC, eL]), eb = (0, r.useStateFromStores)([y.default], () => (null == ey ? void 0 : ey.application_id) != null ? y.default.getDetectableGame(ey.application_id) : null), eP = (0, r.useStateFromStores)([E.default], () => null != eb && (null == ey ? void 0 : ey.application_id) != null ? E.default.getApplication(null == ey ? void 0 : ey.application_id) : void 0);
  l.useEffect(() => {
    em(X)
  }, [X]);
  let eD = l.useCallback(() => {
      null != eC && p.default.toggleLocalMute(eC, ei.MediaEngineContextTypes.STREAM)
    }, [eC]),
    eU = l.useCallback(e => {
      null == T || T(d, e)
    }, [T, d]),
    ew = l.useCallback(e => {
      null == c || c(d, e)
    }, [c, d]),
    eF = l.useCallback(e => {
      null == f || f(d, e)
    }, [f, d]),
    ek = null,
    eV = null,
    eB = "";
  switch (d.type) {
    case el.ParticipantTypes.STREAM:
      ek = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: H,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: G,
        focused: X
      }), eV = (0, a.jsx)($.StreamTileIndicators, {
        participant: d,
        selected: z,
        width: H,
        focused: X,
        idle: eh
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: d.user.username
      });
      break;
    case el.ParticipantTypes.USER:
      ek = (0, a.jsx)(ee.default, {
        channel: B,
        inCall: Y,
        participant: d,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        selected: z,
        width: H,
        blocked: et,
        noVideoRender: Z,
        pulseSpeakingIndicator: ef
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: d.user.username
      });
      break;
    case el.ParticipantTypes.ACTIVITY:
      ek = (0, a.jsx)(q.default, {
        interactible: X,
        participant: d,
        selected: z,
        channel: B,
        width: H
      }), eB = er.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eg ? void 0 : eg.name
      });
      break;
    case el.ParticipantTypes.HIDDEN_STREAM:
      ek = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: H,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: G,
        focused: X
      })
  }
  let eH = l.useRef(null);
  return (0, a.jsx)(m.default, {
    section: ea.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i(eu.wrapper, {
        [eu.ringing]: ev
      }, F),
      children: (0, a.jsxs)(M.default, {
        shakeLocation: es.ShakeLocation.VOICE_USER,
        isShaking: eT,
        className: eu.tile,
        children: [(0, a.jsx)(Q.default, {
          ref: eH,
          className: i(eu.tile, {
            [eu.noBorder]: K,
            [eu.noInteraction]: null == T,
            [eu.idle]: eh
          }),
          noBorder: K,
          style: V,
          participantUserId: eC,
          children: (0, a.jsxs)(h.ClickableContainer, {
            "aria-label": eB,
            className: eu.tileChild,
            onDoubleClick: ew,
            onContextMenu: eF,
            onClick: eU,
            onMouseDown: v,
            onKeyDown: U,
            focusProps: {
              offset: 1
            },
            children: [d.type === el.ParticipantTypes.USER && null != eC && null != eM ? (0, a.jsx)(L.default, {
              voiceChannelEffect: eM,
              onComplete: () => (0, j.clearVoiceChannelEffectForUser)(eC),
              userId: eC
            }) : null, d.type === el.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: eu.voiceChannelEffectsContainer,
              children: (0, a.jsx)(S.default, {
                userId: eC,
                channelId: B.id,
                guildId: B.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == eH ? void 0 : null === (n = eH.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (o = null == eH ? void 0 : null === (s = eH.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== o ? o : 0
                }
              })
            }) : null, ek, K ? null : (0, a.jsx)("div", {
              className: eu.indicators,
              children: eV
            }), z ? (0, a.jsx)("div", {
              className: eu.selectedScreen,
              children: (0, a.jsx)(k.default, {
                className: eu.selectedIcon
              })
            }) : null, d.type !== el.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ec, {
              focused: X,
              width: H,
              inCall: Y,
              participantType: d.type,
              hasVideo: null != ex && ex,
              ...eN,
              idle: eh,
              platform: eR,
              title: (0, J.default)(B, d),
              blocked: et,
              localVideoDisabled: e_,
              videoToggleState: eI,
              hideAudioIcon: eA,
              onContextMenu: eF,
              onToggleMute: eD,
              participantUserId: eC,
              hangStatusActivity: eO,
              application: eP
            }) : null, d.type === el.ParticipantTypes.USER && eS ? (0, a.jsx)(N.default, {
              userId: d.id,
              channelId: B.id
            }) : null, Y && !K ? (0, a.jsx)("div", {
              className: i(eu.border, {
                [eu.voiceChannelEffect]: !X && null != eM,
                [eu.speaking]: eT && !X
              })
            }) : null]
          })
        }), (0, a.jsx)(A.default, {
          isFiring: ep,
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
    className: l
  } = e;
  if (t === el.ParticipantTypes.STREAM) return n === el.VoicePlatforms.XBOX ? (0, a.jsx)(K.default, {
    className: l
  }) : (0, a.jsx)(W.default, {
    className: l
  });
  switch (n) {
    case el.VoicePlatforms.MOBILE:
      return (0, a.jsx)(G.default, {
        className: l
      });
    case el.VoicePlatforms.XBOX:
      return (0, a.jsx)(K.default, {
        className: l
      });
    case el.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)(z.default, {
        className: l
      });
    default:
      return null
  }
}
eo.displayName = "CallTile";
let ec = l.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: l,
    serverMuted: s,
    serverDeafened: p,
    idle: m,
    title: E,
    width: C,
    hasVideo: S,
    inCall: _,
    localVideoDisabled: I,
    videoToggleState: x,
    focused: N,
    blocked: A,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: j,
    onContextMenu: L,
    onToggleMute: O,
    platform: y,
    hangStatusActivity: P,
    application: D
  } = e, w = null, G = null, W = null, z = null, K = (0, et.isVideoCompact)(C), J = (0, et.isNamesCompact)(C), q = (0, r.useStateFromStores)([b.default], () => null != j && b.default.isLocalVideoAutoDisabled(j, (0, g.default)(R)), [j, R]), Q = (0, h.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === el.ParticipantTypes.STREAM && S && !N) w = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i(eu.interactive),
          children: (0, a.jsx)(X.default, {})
        })
      }
    });
    else if (l || R !== el.ParticipantTypes.STREAM || !S || K || N) {
      if (Q) {
        let e;
        p ? e = o.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : l ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), w = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? B.default : H.default;
        w = (0, a.jsx)(e, {
          foreground: i({
            [eu.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else w = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i(eu.interactive, eu.toggleMute),
          children: (0, a.jsx)(Z.default, {})
        })
      }
    })
  }
  return _ && b.default.supports(ei.Features.VIDEO) || !S ? _ && S && I && !q && (G = (0, a.jsx)(V.default, {
    foreground: eu.localMuteStrikethrough
  })) : G = (0, a.jsx)(k.default, {}), R === el.ParticipantTypes.STREAM && !N && S && (W = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(h.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i(eu.status, eu.interactive),
        children: (0, a.jsx)(Y.default, {})
      })
    }
  })), W = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(h.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i(eu.status, eu.interactive),
        children: (0, a.jsx)(Y.default, {})
      })
    }
  }), null != P ? z = (0, a.jsx)(h.Tooltip, {
    text: (0, T.getHangStatusText)(P),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(v.default, {
        hangStatusActivity: P,
        className: eu.hangStatusIcon
      })
    })
  }) : null != D && (z = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(U.default, {
        className: eu.hangStatusIcon,
        game: D,
        size: U.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: eu.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i(eu.overlayTop, {
        [eu.small]: C < 195
      }),
      children: q || x === ea.VideoToggleState.AUTO_PROBING ? m ? (0, a.jsx)("div", {
        className: eu.status,
        children: (0, a.jsx)(V.default, {})
      }) : (0, a.jsxs)("div", {
        className: i(eu.overlayTitle, eu.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: eu.status,
          children: (0, a.jsx)(V.default, {})
        }), (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eu.overlayTitleText,
          children: er.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i(eu.overlayBottom, {
        [eu.small]: C < 195
      }),
      children: [J ? (0, a.jsx)("div", {}) : (0, a.jsxs)(h.Text, {
        className: i(eu.overlayTitle, {
          [eu.idle]: m
        }),
        color: "none",
        variant: "text-md/normal",
        children: [A ? (0, a.jsx)("div", {
          className: eu.blocked,
          children: (0, a.jsx)(F.default, {
            className: eu.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(ed, {
          participantType: R,
          platform: y,
          className: eu.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: eu.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: eu.statusContainer,
        children: [null != G && (0, a.jsx)("div", {
          className: eu.status,
          children: G
        }), null != w && (0, a.jsx)("div", {
          className: eu.status,
          children: w
        }), W, z]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let ef = w.VideoStreamFit;
var eh = eo