"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return eS
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
  y = n("512384"),
  R = n("6242"),
  L = n("757692"),
  j = n("386542"),
  O = n("485731"),
  P = n("614011"),
  D = n("937995"),
  b = n("456631"),
  U = n("274459"),
  F = n("314897"),
  w = n("77498"),
  k = n("131951"),
  H = n("158776"),
  G = n("594174"),
  B = n("979651"),
  V = n("366695"),
  W = n("40300"),
  Y = n("83097"),
  z = n("119828"),
  K = n("156338"),
  Z = n("381238"),
  X = n("779863"),
  q = n("736921"),
  J = n("169278"),
  Q = n("808268"),
  $ = n("374129"),
  ee = n("639351"),
  et = n("632184"),
  en = n("82965"),
  ea = n("584729"),
  el = n("849171"),
  es = n("607187"),
  ei = n("833519"),
  er = n("462061"),
  eo = n("623825"),
  eu = n("839662"),
  ed = n("981631"),
  ec = n("354459"),
  ef = n("524484"),
  eh = n("65154"),
  em = n("689938"),
  ep = n("61707");
let eE = l.memo(e => {
  var t, n, s, u, d;
  let {
    participant: c,
    onDoubleClick: f,
    onContextMenu: h,
    onClick: A,
    onMouseDown: v,
    onKeyDown: V,
    className: Y,
    style: K,
    channel: Z,
    width: X,
    inPopout: q,
    onVideoResize: J,
    inCall: Q = !1,
    selected: $ = !1,
    noBorder: ee = !1,
    noVideoRender: et = !1,
    focused: en = !1,
    blocked: eo = !1,
    fit: eE = W.VideoStreamFit.CONTAIN,
    paused: eC = !1,
    pulseSpeakingIndicator: eS = !1
  } = e, e_ = l.useContext(D.IdleStateContext), [eT, eI] = l.useState(!1), eA = (0, o.useStateFromStores)([F.default], () => F.default.getId()), ev = (0, o.useStateFromStores)([G.default], () => G.default.getCurrentUser()), ex = c.type === ec.ParticipantTypes.ACTIVITY ? null : null === (t = c.user) || void 0 === t ? void 0 : t.id, [eN] = (0, g.default)(c.type === ec.ParticipantTypes.ACTIVITY ? [c.id] : []), eM = (0, o.useStateFromStores)([x.default], () => x.default.getEnabled()), ey = (0, o.useStateFromStores)([k.default], () => null != ex && k.default.isLocalVideoDisabled(ex, (0, S.default)(c.type)), [ex, c.type]), eR = (0, o.useStateFromStores)([k.default], () => null != ex ? k.default.getVideoToggleState(ex, (0, S.default)(c.type)) : ed.VideoToggleState.NONE, [ex, c.type]), eL = eR === ed.VideoToggleState.AUTO_PROBING, {
    speaking: ej,
    ringing: eO,
    hasVideo: eP
  } = (0, eu.default)(c, eA), eD = function(e, t, n) {
    var a, l, s, i;
    let r = (0, o.useStateFromStoresObject)([B.default], () => {
        var e, a, l;
        let s = B.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, o.useStateFromStoresObject)([k.default], () => {
        let n = (0, S.default)(t.type),
          a = t.type !== ec.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === a ? {
          muted: !1,
          deafened: !1
        } : {
          muted: k.default.isLocalMute(a, n),
          localVideoDisabled: k.default.isLocalVideoDisabled(a, n),
          localVideoAutoDisabled: k.default.isLocalVideoAutoDisabled(a, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === ec.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === ec.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eA, c, Z.getGuildId()), eb = c.type === ec.ParticipantTypes.STREAM && ex === eA, {
    available: eU,
    activated: eF,
    hqStreamingState: ew
  } = (0, j.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), ek = eU && eF && ew.hqStreamingIsEnabled && eb, eH = (0, L.canStreamParticipantSetting)(c, ev), eG = (0, R.useHDStreamingViewerExperiment)("CallTile", !0, ev, eH), eB = eG.persistentQualityIndicator && eG.enabled, eV = (0, o.useStateFromStores)([b.default], () => null != ex ? b.default.getEffectForUserId(ex) : null), eW = (0, o.useStateFromStores)([B.default], () => B.default.getVoicePlatformForChannel(Z.id, null != ex ? ex : ed.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: eY
  } = I.HangStatusExperiment.useExperiment({
    guildId: Z.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ez
  } = T.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eK = ez || eY, {
    hangStatusActivity: eZ,
    gameActivity: eX
  } = (0, o.useStateFromStoresObject)([H.default], () => ({
    hangStatusActivity: eY && null != ex ? H.default.findActivity(ex, e => e.type === ed.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eK && null != ex ? H.default.findActivity(ex, e => null != e.application_id && e.type === ed.ActivityTypes.PLAYING) : null
  }), [eY, ex, eK]), eq = (0, o.useStateFromStores)([w.default], () => (null == eX ? void 0 : eX.application_id) != null ? w.default.getDetectableGame(eX.application_id) : null), eJ = (0, o.useStateFromStores)([C.default], () => null != eq && (null == eX ? void 0 : eX.application_id) != null ? C.default.getApplication(null == eX ? void 0 : eX.application_id) : void 0);
  l.useEffect(() => {
    eI(en)
  }, [en]);
  let eQ = l.useCallback(() => {
      null != ex && p.default.toggleLocalMute(ex, eh.MediaEngineContextTypes.STREAM)
    }, [ex]),
    e$ = l.useCallback(() => {
      (0, O.hqStreamingFrameAnimationPlayed)(!0)
    }, []),
    e0 = l.useCallback(e => {
      null == A || A(c, e)
    }, [A, c]),
    e1 = l.useCallback(e => {
      null == f || f(c, e)
    }, [f, c]),
    e2 = l.useCallback(e => {
      null == h || h(c, e)
    }, [h, c]),
    e3 = e_;
  (ek || eB) && (e3 = !1);
  let e4 = null,
    e7 = null,
    e5 = "";
  switch (c.type) {
    case ec.ParticipantTypes.STREAM:
      e4 = (0, a.jsx)(ei.default, {
        participant: c,
        selected: $,
        width: X,
        fit: eE,
        onVideoResize: J,
        paused: eC,
        inPopout: q,
        focused: en
      }), e7 = (0, a.jsx)(ei.StreamTileIndicators, {
        participant: c,
        selected: $,
        width: X,
        focused: en,
        idle: e3,
        premiumIndicator: ek || eG.enabled
      }), e5 = em.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: c.user.username
      });
      break;
    case ec.ParticipantTypes.USER:
      e4 = (0, a.jsx)(er.default, {
        channel: Z,
        inCall: Q,
        participant: c,
        fit: eE,
        onVideoResize: J,
        paused: eC,
        selected: $,
        width: X,
        blocked: eo,
        noVideoRender: et || eL,
        pulseSpeakingIndicator: eS
      }), e5 = em.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: c.user.username
      });
      break;
    case ec.ParticipantTypes.ACTIVITY:
      e4 = (0, a.jsx)(el.default, {
        interactible: en,
        participant: c,
        selected: $,
        channel: Z,
        width: X
      }), e5 = em.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eN ? void 0 : eN.name
      });
      break;
    case ec.ParticipantTypes.HIDDEN_STREAM:
      e4 = (0, a.jsx)(ei.default, {
        participant: c,
        selected: $,
        width: X,
        fit: eE,
        onVideoResize: J,
        paused: eC,
        inPopout: q,
        focused: en
      })
  }
  let e6 = l.useRef(null);
  return (0, a.jsx)(E.default, {
    section: ed.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i()(ep.wrapper, {
        [ep.ringing]: eO
      }, Y),
      children: (0, a.jsxs)(y.default, {
        shakeLocation: ef.ShakeLocation.VOICE_USER,
        isShaking: ej,
        className: ep.tile,
        children: [(0, a.jsx)(es.default, {
          ref: e6,
          className: i()(ep.tile, {
            [ep.noBorder]: ee,
            [ep.noInteraction]: null == A,
            [ep.idle]: e_
          }),
          noBorder: ee,
          style: K,
          participantUserId: ex,
          children: (0, a.jsxs)(m.ClickableContainer, {
            "aria-label": e5,
            className: ep.tileChild,
            onDoubleClick: e1,
            onContextMenu: e2,
            onClick: e0,
            onMouseDown: v,
            onKeyDown: V,
            focusProps: {
              offset: 1
            },
            children: [c.type === ec.ParticipantTypes.USER && null != ex && null != eV ? (0, a.jsx)(U.default, {
              voiceChannelEffect: eV,
              onComplete: () => (0, b.clearVoiceChannelEffectForUser)(ex),
              userId: ex
            }) : null, c.type === ec.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: ep.voiceChannelEffectsContainer,
              children: (0, a.jsx)(_.default, {
                userId: ex,
                channelId: Z.id,
                guildId: Z.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == e6 ? void 0 : null === (n = e6.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (d = null == e6 ? void 0 : null === (s = e6.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== d ? d : 0
                }
              })
            }) : null, e4, ek ? (0, a.jsx)(P.PremiumStreamingEffectOverlay, {
              onPlayed: e$,
              played: ew.hqStreamingFrameAnimationPlayed
            }) : null, ee ? null : (0, a.jsx)("div", {
              className: ep.indicators,
              children: e7
            }), $ ? (0, a.jsx)("div", {
              className: ep.selectedScreen,
              children: (0, a.jsx)(z.default, {
                className: ep.selectedIcon
              })
            }) : null, c.type !== ec.ParticipantTypes.ACTIVITY ? (0, a.jsx)(eg, {
              focused: en,
              width: X,
              inCall: Q,
              participantType: c.type,
              hasVideo: null != eP && eP,
              ...eD,
              idle: e_,
              platform: eW,
              title: (0, ea.default)(Z, c),
              blocked: eo,
              localVideoDisabled: ey,
              videoToggleState: eR,
              hideAudioIcon: eb,
              onContextMenu: e2,
              onToggleMute: eQ,
              participantUserId: ex,
              hangStatusActivity: eZ,
              application: eJ,
              speaking: ej
            }) : null, c.type === ec.ParticipantTypes.USER && eM ? (0, a.jsx)(N.default, {
              userId: c.id,
              channelId: Z.id
            }) : null, Q && !ee ? (0, a.jsx)("div", {
              className: i()(ep.border, {
                [ep.voiceChannelEffect]: !en && null != eV,
                [ep.speaking]: ej && !en
              })
            }) : null]
          })
        }), (0, a.jsx)(M.default, {
          isFiring: eT,
          callTileRef: e6.current
        })]
      })
    })
  })
});

function eC(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === ec.ParticipantTypes.STREAM) return n === ec.VoicePlatforms.XBOX ? (0, a.jsx)(ee.default, {
    className: l
  }) : (0, a.jsx)(J.default, {
    className: l
  });
  switch (n) {
    case ec.VoicePlatforms.MOBILE:
      return (0, a.jsx)(q.default, {
        className: l
      });
    case ec.VoicePlatforms.XBOX:
      return (0, a.jsx)(ee.default, {
        className: l
      });
    case ec.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)($.default, {
        className: l
      });
    default:
      return null
  }
}
eE.displayName = "CallTile";
let eg = l.memo(e => {
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
    participantType: y,
    participantUserId: R,
    onContextMenu: L,
    onToggleMute: j,
    platform: O,
    hangStatusActivity: P,
    application: D,
    speaking: b
  } = e, U = null, F = null, w = null, H = null, G = (0, eo.isVideoCompact)(C), B = (0, eo.isNamesCompact)(C), W = (0, o.useStateFromStores)([k.default], () => null != R && k.default.isLocalVideoAutoDisabled(R, (0, S.default)(y)), [R, y]), q = (0, m.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && y === ec.ParticipantTypes.STREAM && g && !x) U = (0, a.jsx)(m.Tooltip, {
      text: em.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), j()
          },
          className: i()(ep.interactive, ep.toggleMute),
          children: (0, a.jsx)(en.default, {})
        })
      }
    });
    else if (l || y !== ec.ParticipantTypes.STREAM || !g || G || x) {
      if (q) {
        let e;
        r ? e = d.HeadphonesDenyIcon : s ? e = f.MicrophoneDenyIcon : n ? e = c.HeadphonesSlashIcon : l ? e = f.MicrophoneDenyIcon : t && (e = h.MicrophoneSlashIcon), U = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? Z.default : X.default;
        U = (0, a.jsx)(e, {
          foreground: i()({
            [ep.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else U = (0, a.jsx)(m.Tooltip, {
      text: em.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), j()
          },
          className: i()(ep.interactive, ep.toggleMute),
          children: (0, a.jsx)(et.default, {})
        })
      }
    })
  }
  return _ && k.default.supports(eh.Features.VIDEO) || !g ? _ && g && T && !W && (F = (0, a.jsx)(K.default, {
    foreground: ep.localMuteStrikethrough
  })) : F = (0, a.jsx)(z.default, {}), y === ec.ParticipantTypes.STREAM && !x && g && (w = (0, a.jsx)(m.Tooltip, {
    text: em.default.Messages.OPTIONS,
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
        className: i()(ep.status, ep.interactive),
        children: (0, a.jsx)(Q.default, {})
      })
    }
  })), y === ec.ParticipantTypes.USER && null != P ? H = (0, a.jsx)(m.Tooltip, {
    text: (0, A.getHangStatusText)(P),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ep.hangStatusContainer, {
        [ep.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(v.default, {
        hangStatusActivity: P,
        className: ep.hangStatusIcon,
        animate: b
      })
    })
  }) : y === ec.ParticipantTypes.USER && null != D && (H = (0, a.jsx)(m.Tooltip, {
    text: em.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ep.hangStatusContainer, {
        [ep.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(V.default, {
        className: ep.hangStatusIcon,
        game: D,
        size: V.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: ep.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i()(ep.overlayTop, {
        [ep.small]: C < 195
      }),
      children: W || I === ed.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: ep.status,
        children: (0, a.jsx)(K.default, {})
      }) : (0, a.jsxs)("div", {
        className: i()(ep.overlayTitle, ep.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: ep.status,
          children: (0, a.jsx)(K.default, {})
        }), (0, a.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: ep.overlayTitleText,
          children: em.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i()(ep.overlayBottom, {
        [ep.small]: C < 195
      }),
      children: [B ? (0, a.jsx)("div", {}) : (0, a.jsxs)(m.Text, {
        className: i()(ep.overlayTitle, {
          [ep.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [N ? (0, a.jsx)("div", {
          className: ep.blocked,
          children: (0, a.jsx)(Y.default, {
            className: ep.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(eC, {
          participantType: y,
          platform: O,
          className: ep.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: ep.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: ep.statusContainer,
        children: [null != F && (0, a.jsx)("div", {
          className: ep.status,
          children: F
        }), null != U && (0, a.jsx)("div", {
          className: ep.status,
          children: U
        }), w, H]
      })]
    })]
  })
});
eg.displayName = "CallTileOverlay";
let eS = W.VideoStreamFit;
t.default = eE