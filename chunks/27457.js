n.d(t, {
  BP: function() {
    return ea
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(848246),
  o = n(442837),
  c = n(692547),
  u = n(481060),
  d = n(846027),
  h = n(410575),
  m = n(812206),
  E = n(835473),
  p = n(414910),
  g = n(415635),
  f = n(649739),
  C = n(574176),
  _ = n(833858),
  I = n(223135),
  x = n(37091),
  T = n(6572),
  N = n(535400),
  Z = n(512384),
  S = n(6242),
  v = n(757692),
  A = n(386542),
  M = n(485731),
  R = n(614011),
  j = n(210975),
  L = n(937995),
  O = n(456631),
  P = n(274459),
  y = n(314897),
  b = n(77498),
  D = n(131951),
  U = n(158776),
  k = n(594174),
  w = n(979651),
  H = n(366695),
  G = n(40300),
  B = n(374129),
  V = n(639351),
  F = n(584729),
  z = n(849171),
  W = n(607187),
  Y = n(833519),
  K = n(462061),
  q = n(623825),
  X = n(839662),
  Q = n(981631),
  J = n(354459),
  $ = n(524484),
  ee = n(65154),
  et = n(689938),
  en = n(372453);
let el = i.memo(e => {
  var t, n, s, c, _;
  let {
    participant: I,
    onDoubleClick: H,
    onContextMenu: B,
    onClick: V,
    onMouseDown: q,
    onKeyDown: el,
    className: ei,
    style: ea,
    channel: er,
    width: eo,
    inPopout: ec,
    onVideoResize: eu,
    inCall: ed = !1,
    selected: eh = !1,
    noBorder: em = !1,
    noVideoRender: eE = !1,
    focused: ep = !1,
    blocked: eg = !1,
    fit: ef = G.L.CONTAIN,
    paused: eC = !1,
    pulseSpeakingIndicator: e_ = !1
  } = e, eI = i.useContext(L.h9), [ex, eT] = i.useState(!1), eN = (0, o.e7)([y.default], () => y.default.getId()), eZ = (0, o.e7)([k.default], () => k.default.getCurrentUser()), eS = I.type === J.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id, [ev] = (0, E.Z)(I.type === J.fO.ACTIVITY ? [I.id] : []), eA = (0, o.e7)([x.Z], () => x.Z.getEnabled()), eM = (0, o.e7)([D.Z], () => null != eS && D.Z.isLocalVideoDisabled(eS, (0, p.Z)(I.type)), [eS, I.type]), eR = (0, o.e7)([D.Z], () => null != eS ? D.Z.getVideoToggleState(eS, (0, p.Z)(I.type)) : Q.ZUi.NONE, [eS, I.type]), ej = eR === Q.ZUi.AUTO_PROBING, {
    speaking: eL,
    ringing: eO,
    hasVideo: eP
  } = (0, X.Z)(I, eN), ey = function(e, t, n) {
    var l, i, s, a;
    let r = (0, o.cj)([w.Z], () => {
        var e, l, i;
        let s = w.Z.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (l = null == s ? void 0 : s.deaf) && void 0 !== l && l,
          suppressed: null !== (i = null == s ? void 0 : s.suppress) && void 0 !== i && i,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      c = (0, o.cj)([D.Z], () => {
        let n = (0, p.Z)(t.type),
          l = t.type !== J.fO.ACTIVITY ? t.user.id : t.id;
        return e === l ? {
          muted: !1,
          deafened: !1
        } : {
          muted: D.Z.isLocalMute(l, n),
          localVideoDisabled: D.Z.isLocalVideoDisabled(l, n),
          localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(l, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: c.muted,
      muted: null !== (s = t.type === J.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (a = t.type === J.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== a && a
    }
  }(eN, I, er.getGuildId()), eb = I.type === J.fO.STREAM && eS === eN, {
    available: eD,
    activated: eU,
    hqStreamingState: ek
  } = (0, A.k)(r.q.STREAM_HIGH_QUALITY), ew = eD && eU && ek.hqStreamingIsEnabled && eb, eH = (0, v.o)(I, eZ), eG = (0, S.lL)("CallTile", !0, eZ, eH), eB = eG.persistentQualityIndicator && eG.enabled, eV = (0, o.e7)([O.Z], () => null != eS ? O.Z.getEffectForUserId(eS) : null), eF = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(er.id, null != eS ? eS : Q.lds)), {
    enableHangStatus: ez
  } = C.n.useExperiment({
    guildId: er.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: eW
  } = f.ZP.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eY = eW || ez, {
    hangStatusActivity: eK,
    gameActivity: eq
  } = (0, o.cj)([U.Z], () => ({
    hangStatusActivity: ez && null != eS ? U.Z.findActivity(eS, e => e.type === Q.IIU.HANG_STATUS) : null,
    gameActivity: eY && null != eS ? U.Z.findActivity(eS, e => null != e.application_id && e.type === Q.IIU.PLAYING) : null
  }), [ez, eS, eY]), eX = (0, o.e7)([b.Z], () => (null == eq ? void 0 : eq.application_id) != null ? b.Z.getDetectableGame(eq.application_id) : null), eQ = (0, o.e7)([m.Z], () => null != eX && (null == eq ? void 0 : eq.application_id) != null ? m.Z.getApplication(null == eq ? void 0 : eq.application_id) : void 0), eJ = (0, j.wV)(eS, er.id);
  i.useEffect(() => {
    eT(ep)
  }, [ep]);
  let e$ = i.useCallback(() => {
      null != eS && d.Z.toggleLocalMute(eS, ee.Yn.STREAM)
    }, [eS]),
    e0 = i.useCallback(() => {
      (0, M.hP)(!0)
    }, []),
    e1 = i.useCallback(e => {
      null == V || V(I, e)
    }, [V, I]),
    e2 = i.useCallback(e => {
      null == H || H(I, e)
    }, [H, I]),
    e7 = i.useCallback(e => {
      null == B || B(I, e)
    }, [B, I]),
    e3 = eI;
  (ew || eB) && (e3 = !1);
  let e4 = null,
    e5 = null,
    e9 = "";
  switch (I.type) {
    case J.fO.STREAM:
      e4 = (0, l.jsx)(Y.Z, {
        participant: I,
        selected: eh,
        width: eo,
        fit: ef,
        onVideoResize: eu,
        paused: eC,
        inPopout: ec,
        focused: ep
      }), e5 = (0, l.jsx)(Y._, {
        participant: I,
        selected: eh,
        width: eo,
        focused: ep,
        idle: e3,
        premiumIndicator: ew || eG.enabled
      }), e9 = et.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: I.user.username
      });
      break;
    case J.fO.USER:
      e4 = (0, l.jsx)(K.Z, {
        channel: er,
        inCall: ed,
        participant: I,
        fit: ef,
        onVideoResize: eu,
        paused: eC,
        selected: eh,
        width: eo,
        blocked: eg,
        noVideoRender: eE || ej,
        pulseSpeakingIndicator: e_
      }), e5 = (0, l.jsx)(K.T, {
        userId: I.user.id,
        channelId: er.id
      }), e9 = et.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: I.user.username
      });
      break;
    case J.fO.ACTIVITY:
      e4 = (0, l.jsx)(z.ZP, {
        interactible: ep,
        participant: I,
        selected: eh,
        channel: er,
        width: eo
      }), e9 = et.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == ev ? void 0 : ev.name
      });
      break;
    case J.fO.HIDDEN_STREAM:
      e4 = (0, l.jsx)(Y.Z, {
        participant: I,
        selected: eh,
        width: eo,
        fit: ef,
        onVideoResize: eu,
        paused: eC,
        inPopout: ec,
        focused: ep
      })
  }
  let e6 = i.useRef(null);
  return (0, l.jsx)(h.Z, {
    section: Q.jXE.VOICE_CHANNEL_TILE,
    children: (0, l.jsx)("div", {
      className: a()(en.wrapper, {
        [en.ringing]: eO
      }, ei),
      children: (0, l.jsxs)(Z.Z, {
        shakeLocation: $.oZ.VOICE_USER,
        isShaking: eL,
        className: en.tile,
        children: [(0, l.jsx)(W.Z, {
          ref: e6,
          className: a()(en.tile, {
            [en.noBorder]: em,
            [en.noInteraction]: null == V,
            [en.idle]: eI
          }),
          noBorder: em,
          style: ea,
          participantUserId: eS,
          children: (0, l.jsxs)(u.ClickableContainer, {
            "aria-label": e9,
            className: en.tileChild,
            onDoubleClick: e2,
            onContextMenu: e7,
            onClick: e1,
            onMouseDown: q,
            onKeyDown: el,
            focusProps: {
              offset: 1
            },
            children: [I.type === J.fO.USER && null != eS && null != eV ? (0, l.jsx)(P.Z, {
              voiceChannelEffect: eV,
              onComplete: () => (0, O.H)(eS),
              userId: eS
            }) : null, I.type === J.fO.USER ? (0, l.jsx)("div", {
              className: en.voiceChannelEffectsContainer,
              children: (0, l.jsx)(g.Z, {
                userId: eS,
                channelId: er.id,
                guildId: er.getGuildId(),
                containerDimensions: {
                  width: null !== (c = null == e6 ? void 0 : null === (n = e6.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                  height: null !== (_ = null == e6 ? void 0 : null === (s = e6.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== _ ? _ : 0
                }
              })
            }) : null, e4, ew ? (0, l.jsx)(R.W, {
              onPlayed: e0,
              played: ek.hqStreamingFrameAnimationPlayed
            }) : null, em ? null : (0, l.jsx)("div", {
              className: en.indicators,
              children: e5
            }), eh ? (0, l.jsx)("div", {
              className: en.selectedScreen,
              children: (0, l.jsx)(u.VideoIcon, {
                size: "md",
                color: "currentColor",
                className: en.selectedIcon
              })
            }) : null, I.type !== J.fO.ACTIVITY ? (0, l.jsx)(es, {
              focused: ep,
              width: eo,
              inCall: ed,
              participantType: I.type,
              hasVideo: null != eP && eP,
              ...ey,
              idle: eI,
              platform: eF,
              title: (0, F.Z)(er, I),
              blocked: eg,
              localVideoDisabled: eM,
              videoToggleState: eR,
              hideAudioIcon: eb,
              onContextMenu: e7,
              onToggleMute: e$,
              participantUserId: eS,
              hangStatusActivity: eK,
              application: eQ,
              speaking: eL,
              secureFramesVerified: eJ
            }) : null, I.type === J.fO.USER && eA ? (0, l.jsx)(T.Z, {
              userId: I.id,
              channelId: er.id
            }) : null, ed && !em ? (0, l.jsx)("div", {
              className: a()(en.border, {
                [en.voiceChannelEffect]: !ep && null != eV,
                [en.speaking]: eL && !ep
              })
            }) : null]
          })
        }), (0, l.jsx)(N.Z, {
          isFiring: ex,
          callTileRef: e6.current
        })]
      })
    })
  })
});

function ei(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === J.fO.STREAM) return n === J.wR.XBOX ? (0, l.jsx)(V.Z, {
    className: i
  }) : (0, l.jsx)(u.ScreenIcon, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case J.wR.MOBILE:
      return (0, l.jsx)(u.MobilePhoneIcon, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case J.wR.XBOX:
      return (0, l.jsx)(V.Z, {
        className: i
      });
    case J.wR.PLAYSTATION:
      return (0, l.jsx)(B.Z, {
        className: i
      });
    default:
      return null
  }
}
el.displayName = "CallTile";
let es = i.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: i,
    serverMuted: s,
    serverDeafened: r,
    idle: d,
    title: h,
    width: m,
    hasVideo: E,
    inCall: g,
    localVideoDisabled: f,
    videoToggleState: C,
    focused: x,
    blocked: T,
    hideAudioIcon: N,
    participantType: Z,
    participantUserId: S,
    onContextMenu: v,
    onToggleMute: A,
    platform: M,
    hangStatusActivity: R,
    application: j,
    speaking: L,
    secureFramesVerified: O
  } = e, P = null, y = null, b = null, U = null, k = (0, q.K)(m), w = (0, q.N)(m), G = (0, o.e7)([D.Z], () => null != S && D.Z.isLocalVideoAutoDisabled(S, (0, p.Z)(Z)), [S, Z]), B = (0, u.useRedesignIconContext)().enabled;
  if (!N) {
    if (i && Z === J.fO.STREAM && E && !x) P = (0, l.jsx)(u.Tooltip, {
      text: et.Z.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, l.jsx)(u.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), A()
          },
          className: a()(en.interactive, en.toggleMute),
          children: (0, l.jsx)(u.VoiceXIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      }
    });
    else if (i || Z !== J.fO.STREAM || !E || k || x) {
      if (B) {
        let e;
        r ? e = u.HeadphonesDenyIcon : s ? e = u.MicrophoneDenyIcon : n ? e = u.HeadphonesSlashIcon : i ? e = u.MicrophoneDenyIcon : t && (e = u.MicrophoneSlashIcon), P = null != e ? (0, l.jsx)(e, {
          color: c.Z.colors.WHITE
        }) : null
      } else if (n || t || i) {
        let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
        P = (0, l.jsx)(e, {
          color: "currentColor"
        })
      }
    } else P = (0, l.jsx)(u.Tooltip, {
      text: et.Z.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, l.jsx)(u.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), A()
          },
          className: a()(en.interactive, en.toggleMute),
          children: (0, l.jsx)(u.VoiceNormalIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      }
    })
  }
  return g && D.Z.supports(ee.AN.VIDEO) || !E ? g && E && f && !G && (y = (0, l.jsx)(u.VideoSlashIcon, {
    size: "md",
    color: "currentColor",
    colorClass: en.localMuteStrikethrough
  })) : y = (0, l.jsx)(u.VideoIcon, {
    size: "md",
    color: "currentColor"
  }), Z === J.fO.STREAM && !x && E && (b = (0, l.jsx)(u.Tooltip, {
    text: et.Z.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, l.jsx)(u.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), v(e)
        },
        className: a()(en.status, en.interactive),
        children: (0, l.jsx)(u.MoreHorizontalIcon, {
          size: "md",
          color: "currentColor"
        })
      })
    }
  })), Z === J.fO.USER && null != R ? U = (0, l.jsx)(u.Tooltip, {
    text: (0, _.O8)(R),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: a()(en.hangStatusContainer, {
        [en.hangStatusSmall]: m < 500
      }),
      children: (0, l.jsx)(I.Z, {
        hangStatusActivity: R,
        className: en.hangStatusIcon,
        animate: L
      })
    })
  }) : Z === J.fO.USER && null != j && (U = (0, l.jsx)(u.Tooltip, {
    text: et.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: j.name
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: a()(en.hangStatusContainer, {
        [en.hangStatusSmall]: m < 500
      }),
      children: (0, l.jsx)(H.Z, {
        className: en.hangStatusIcon,
        game: j,
        size: H.Z.Sizes.SMALL
      })
    })
  })), (0, l.jsxs)("div", {
    className: en.overlayContainer,
    children: [(0, l.jsx)("div", {
      className: a()(en.overlayTop, {
        [en.small]: m < 195
      }),
      children: G || C === Q.ZUi.AUTO_PROBING ? d ? (0, l.jsx)("div", {
        className: en.status,
        children: (0, l.jsx)(u.VideoSlashIcon, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: a()(en.overlayTitle, en.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: en.status,
          children: (0, l.jsx)(u.VideoSlashIcon, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: en.overlayTitleText,
          children: et.Z.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, l.jsxs)("div", {
      className: a()(en.overlayBottom, {
        [en.small]: m < 195
      }),
      children: [w ? (0, l.jsx)("div", {}) : (0, l.jsxs)(u.Text, {
        className: a()(en.overlayTitle, {
          [en.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [T ? (0, l.jsx)("div", {
          className: en.blocked,
          children: (0, l.jsx)(u.DenyIcon, {
            size: "lg",
            className: en.blockedIcon,
            color: c.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, l.jsx)(ei, {
          participantType: Z,
          platform: M,
          className: en.titleIcon
        }), null != h && "" !== h ? (0, l.jsx)("span", {
          className: en.overlayTitleText,
          children: h
        }) : null, O && (0, l.jsx)(u.ShieldLockIcon, {
          className: en.secureFramesIcon,
          size: "xxs",
          color: c.Z.colors.HEADER_PRIMARY,
          "aria-label": et.Z.Messages.E2EE_USER_VERIFIED_A11Y
        })]
      }), (0, l.jsxs)("div", {
        className: en.statusContainer,
        children: [null != y && (0, l.jsx)("div", {
          className: en.status,
          children: y
        }), null != P && (0, l.jsx)("div", {
          className: en.status,
          children: P
        }), b, U]
      })]
    })]
  })
});
es.displayName = "CallTileOverlay";
let ea = G.L;
t.ZP = el