n.d(t, {
  BP: function() {
    return es
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
  p = n(835473),
  E = n(414910),
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
  j = n(937995),
  L = n(456631),
  O = n(274459),
  P = n(314897),
  y = n(77498),
  b = n(131951),
  D = n(158776),
  U = n(594174),
  k = n(979651),
  w = n(366695),
  H = n(40300),
  B = n(374129),
  G = n(639351),
  V = n(584729),
  F = n(849171),
  z = n(607187),
  W = n(833519),
  Y = n(462061),
  K = n(623825),
  q = n(839662),
  X = n(981631),
  Q = n(354459),
  J = n(524484),
  $ = n(65154),
  ee = n(689938),
  et = n(372453);
let en = i.memo(e => {
  var t, n, s, c, _;
  let {
    participant: I,
    onDoubleClick: w,
    onContextMenu: B,
    onClick: G,
    onMouseDown: K,
    onKeyDown: en,
    className: el,
    style: es,
    channel: ea,
    width: er,
    inPopout: eo,
    onVideoResize: ec,
    inCall: eu = !1,
    selected: ed = !1,
    noBorder: eh = !1,
    noVideoRender: em = !1,
    focused: ep = !1,
    blocked: eE = !1,
    fit: eg = H.L.CONTAIN,
    paused: ef = !1,
    pulseSpeakingIndicator: eC = !1
  } = e, e_ = i.useContext(j.h9), [eI, ex] = i.useState(!1), eT = (0, o.e7)([P.default], () => P.default.getId()), eN = (0, o.e7)([U.default], () => U.default.getCurrentUser()), eZ = I.type === Q.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id, [eS] = (0, p.Z)(I.type === Q.fO.ACTIVITY ? [I.id] : []), ev = (0, o.e7)([x.Z], () => x.Z.getEnabled()), eA = (0, o.e7)([b.Z], () => null != eZ && b.Z.isLocalVideoDisabled(eZ, (0, E.Z)(I.type)), [eZ, I.type]), eM = (0, o.e7)([b.Z], () => null != eZ ? b.Z.getVideoToggleState(eZ, (0, E.Z)(I.type)) : X.ZUi.NONE, [eZ, I.type]), eR = eM === X.ZUi.AUTO_PROBING, {
    speaking: ej,
    ringing: eL,
    hasVideo: eO
  } = (0, q.Z)(I, eT), eP = function(e, t, n) {
    var l, i, s, a;
    let r = (0, o.cj)([k.Z], () => {
        var e, l, i;
        let s = k.Z.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (l = null == s ? void 0 : s.deaf) && void 0 !== l && l,
          suppressed: null !== (i = null == s ? void 0 : s.suppress) && void 0 !== i && i,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      c = (0, o.cj)([b.Z], () => {
        let n = (0, E.Z)(t.type),
          l = t.type !== Q.fO.ACTIVITY ? t.user.id : t.id;
        return e === l ? {
          muted: !1,
          deafened: !1
        } : {
          muted: b.Z.isLocalMute(l, n),
          localVideoDisabled: b.Z.isLocalVideoDisabled(l, n),
          localVideoAutoDisabled: b.Z.isLocalVideoAutoDisabled(l, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: c.muted,
      muted: null !== (s = t.type === Q.fO.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (a = t.type === Q.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceDeafened())) && void 0 !== a && a
    }
  }(eT, I, ea.getGuildId()), ey = I.type === Q.fO.STREAM && eZ === eT, {
    available: eb,
    activated: eD,
    hqStreamingState: eU
  } = (0, A.k)(r.q.STREAM_HIGH_QUALITY), ek = eb && eD && eU.hqStreamingIsEnabled && ey, ew = (0, v.o)(I, eN), eH = (0, S.lL)("CallTile", !0, eN, ew), eB = eH.persistentQualityIndicator && eH.enabled, eG = (0, o.e7)([L.Z], () => null != eZ ? L.Z.getEffectForUserId(eZ) : null), eV = (0, o.e7)([k.Z], () => k.Z.getVoicePlatformForChannel(ea.id, null != eZ ? eZ : X.lds)), {
    enableHangStatus: eF
  } = C.n.useExperiment({
    guildId: ea.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ez
  } = f.ZP.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eW = ez || eF, {
    hangStatusActivity: eY,
    gameActivity: eK
  } = (0, o.cj)([D.Z], () => ({
    hangStatusActivity: eF && null != eZ ? D.Z.findActivity(eZ, e => e.type === X.IIU.HANG_STATUS) : null,
    gameActivity: eW && null != eZ ? D.Z.findActivity(eZ, e => null != e.application_id && e.type === X.IIU.PLAYING) : null
  }), [eF, eZ, eW]), eq = (0, o.e7)([y.Z], () => (null == eK ? void 0 : eK.application_id) != null ? y.Z.getDetectableGame(eK.application_id) : null), eX = (0, o.e7)([m.Z], () => null != eq && (null == eK ? void 0 : eK.application_id) != null ? m.Z.getApplication(null == eK ? void 0 : eK.application_id) : void 0);
  i.useEffect(() => {
    ex(ep)
  }, [ep]);
  let eQ = i.useCallback(() => {
      null != eZ && d.Z.toggleLocalMute(eZ, $.Yn.STREAM)
    }, [eZ]),
    eJ = i.useCallback(() => {
      (0, M.hP)(!0)
    }, []),
    e$ = i.useCallback(e => {
      null == G || G(I, e)
    }, [G, I]),
    e0 = i.useCallback(e => {
      null == w || w(I, e)
    }, [w, I]),
    e1 = i.useCallback(e => {
      null == B || B(I, e)
    }, [B, I]),
    e2 = e_;
  (ek || eB) && (e2 = !1);
  let e7 = null,
    e3 = null,
    e4 = "";
  switch (I.type) {
    case Q.fO.STREAM:
      e7 = (0, l.jsx)(W.Z, {
        participant: I,
        selected: ed,
        width: er,
        fit: eg,
        onVideoResize: ec,
        paused: ef,
        inPopout: eo,
        focused: ep
      }), e3 = (0, l.jsx)(W._, {
        participant: I,
        selected: ed,
        width: er,
        focused: ep,
        idle: e2,
        premiumIndicator: ek || eH.enabled
      }), e4 = ee.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: I.user.username
      });
      break;
    case Q.fO.USER:
      e7 = (0, l.jsx)(Y.Z, {
        channel: ea,
        inCall: eu,
        participant: I,
        fit: eg,
        onVideoResize: ec,
        paused: ef,
        selected: ed,
        width: er,
        blocked: eE,
        noVideoRender: em || eR,
        pulseSpeakingIndicator: eC
      }), e3 = (0, l.jsx)(Y.T, {
        userId: I.user.id,
        channelId: ea.id
      }), e4 = ee.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: I.user.username
      });
      break;
    case Q.fO.ACTIVITY:
      e7 = (0, l.jsx)(F.ZP, {
        interactible: ep,
        participant: I,
        selected: ed,
        channel: ea,
        width: er
      }), e4 = ee.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eS ? void 0 : eS.name
      });
      break;
    case Q.fO.HIDDEN_STREAM:
      e7 = (0, l.jsx)(W.Z, {
        participant: I,
        selected: ed,
        width: er,
        fit: eg,
        onVideoResize: ec,
        paused: ef,
        inPopout: eo,
        focused: ep
      })
  }
  let e5 = i.useRef(null);
  return (0, l.jsx)(h.Z, {
    section: X.jXE.VOICE_CHANNEL_TILE,
    children: (0, l.jsx)("div", {
      className: a()(et.wrapper, {
        [et.ringing]: eL
      }, el),
      children: (0, l.jsxs)(Z.Z, {
        shakeLocation: J.oZ.VOICE_USER,
        isShaking: ej,
        className: et.tile,
        children: [(0, l.jsx)(z.Z, {
          ref: e5,
          className: a()(et.tile, {
            [et.noBorder]: eh,
            [et.noInteraction]: null == G,
            [et.idle]: e_
          }),
          noBorder: eh,
          style: es,
          participantUserId: eZ,
          children: (0, l.jsxs)(u.ClickableContainer, {
            "aria-label": e4,
            className: et.tileChild,
            onDoubleClick: e0,
            onContextMenu: e1,
            onClick: e$,
            onMouseDown: K,
            onKeyDown: en,
            focusProps: {
              offset: 1
            },
            children: [I.type === Q.fO.USER && null != eZ && null != eG ? (0, l.jsx)(O.Z, {
              voiceChannelEffect: eG,
              onComplete: () => (0, L.H)(eZ),
              userId: eZ
            }) : null, I.type === Q.fO.USER ? (0, l.jsx)("div", {
              className: et.voiceChannelEffectsContainer,
              children: (0, l.jsx)(g.Z, {
                userId: eZ,
                channelId: ea.id,
                guildId: ea.getGuildId(),
                containerDimensions: {
                  width: null !== (c = null == e5 ? void 0 : null === (n = e5.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                  height: null !== (_ = null == e5 ? void 0 : null === (s = e5.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== _ ? _ : 0
                }
              })
            }) : null, e7, ek ? (0, l.jsx)(R.W, {
              onPlayed: eJ,
              played: eU.hqStreamingFrameAnimationPlayed
            }) : null, eh ? null : (0, l.jsx)("div", {
              className: et.indicators,
              children: e3
            }), ed ? (0, l.jsx)("div", {
              className: et.selectedScreen,
              children: (0, l.jsx)(u.VideoIcon, {
                size: "md",
                color: "currentColor",
                className: et.selectedIcon
              })
            }) : null, I.type !== Q.fO.ACTIVITY ? (0, l.jsx)(ei, {
              focused: ep,
              width: er,
              inCall: eu,
              participantType: I.type,
              hasVideo: null != eO && eO,
              ...eP,
              idle: e_,
              platform: eV,
              title: (0, V.Z)(ea, I),
              blocked: eE,
              localVideoDisabled: eA,
              videoToggleState: eM,
              hideAudioIcon: ey,
              onContextMenu: e1,
              onToggleMute: eQ,
              participantUserId: eZ,
              hangStatusActivity: eY,
              application: eX,
              speaking: ej
            }) : null, I.type === Q.fO.USER && ev ? (0, l.jsx)(T.Z, {
              userId: I.id,
              channelId: ea.id
            }) : null, eu && !eh ? (0, l.jsx)("div", {
              className: a()(et.border, {
                [et.voiceChannelEffect]: !ep && null != eG,
                [et.speaking]: ej && !ep
              })
            }) : null]
          })
        }), (0, l.jsx)(N.Z, {
          isFiring: eI,
          callTileRef: e5.current
        })]
      })
    })
  })
});

function el(e) {
  let {
    participantType: t,
    platform: n,
    className: i
  } = e;
  if (t === Q.fO.STREAM) return n === Q.wR.XBOX ? (0, l.jsx)(G.Z, {
    className: i
  }) : (0, l.jsx)(u.ScreenIcon, {
    size: "md",
    color: "currentColor",
    className: i
  });
  switch (n) {
    case Q.wR.MOBILE:
      return (0, l.jsx)(u.MobilePhoneIcon, {
        size: "xs",
        color: "currentColor",
        className: i
      });
    case Q.wR.XBOX:
      return (0, l.jsx)(G.Z, {
        className: i
      });
    case Q.wR.PLAYSTATION:
      return (0, l.jsx)(B.Z, {
        className: i
      });
    default:
      return null
  }
}
en.displayName = "CallTile";
let ei = i.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: i,
    serverMuted: s,
    serverDeafened: r,
    idle: d,
    title: h,
    width: m,
    hasVideo: p,
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
    speaking: L
  } = e, O = null, P = null, y = null, D = null, U = (0, K.K)(m), k = (0, K.N)(m), H = (0, o.e7)([b.Z], () => null != S && b.Z.isLocalVideoAutoDisabled(S, (0, E.Z)(Z)), [S, Z]), B = (0, u.useRedesignIconContext)().enabled;
  if (!N) {
    if (i && Z === Q.fO.STREAM && p && !x) O = (0, l.jsx)(u.Tooltip, {
      text: ee.Z.Messages.UNMUTE,
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
          className: a()(et.interactive, et.toggleMute),
          children: (0, l.jsx)(u.VoiceXIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      }
    });
    else if (i || Z !== Q.fO.STREAM || !p || U || x) {
      if (B) {
        let e;
        r ? e = u.HeadphonesDenyIcon : s ? e = u.MicrophoneDenyIcon : n ? e = u.HeadphonesSlashIcon : i ? e = u.MicrophoneDenyIcon : t && (e = u.MicrophoneSlashIcon), O = null != e ? (0, l.jsx)(e, {
          color: c.Z.colors.WHITE
        }) : null
      } else if (n || t || i) {
        let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
        O = (0, l.jsx)(e, {
          color: "currentColor"
        })
      }
    } else O = (0, l.jsx)(u.Tooltip, {
      text: ee.Z.Messages.MUTE,
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
          className: a()(et.interactive, et.toggleMute),
          children: (0, l.jsx)(u.VoiceNormalIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      }
    })
  }
  return g && b.Z.supports($.AN.VIDEO) || !p ? g && p && f && !H && (P = (0, l.jsx)(u.VideoSlashIcon, {
    size: "md",
    color: "currentColor",
    colorClass: et.localMuteStrikethrough
  })) : P = (0, l.jsx)(u.VideoIcon, {
    size: "md",
    color: "currentColor"
  }), Z === Q.fO.STREAM && !x && p && (y = (0, l.jsx)(u.Tooltip, {
    text: ee.Z.Messages.OPTIONS,
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
        className: a()(et.status, et.interactive),
        children: (0, l.jsx)(u.MoreHorizontalIcon, {
          size: "md",
          color: "currentColor"
        })
      })
    }
  })), Z === Q.fO.USER && null != R ? D = (0, l.jsx)(u.Tooltip, {
    text: (0, _.O8)(R),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: a()(et.hangStatusContainer, {
        [et.hangStatusSmall]: m < 500
      }),
      children: (0, l.jsx)(I.Z, {
        hangStatusActivity: R,
        className: et.hangStatusIcon,
        animate: L
      })
    })
  }) : Z === Q.fO.USER && null != j && (D = (0, l.jsx)(u.Tooltip, {
    text: ee.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: j.name
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: a()(et.hangStatusContainer, {
        [et.hangStatusSmall]: m < 500
      }),
      children: (0, l.jsx)(w.Z, {
        className: et.hangStatusIcon,
        game: j,
        size: w.Z.Sizes.SMALL
      })
    })
  })), (0, l.jsxs)("div", {
    className: et.overlayContainer,
    children: [(0, l.jsx)("div", {
      className: a()(et.overlayTop, {
        [et.small]: m < 195
      }),
      children: H || C === X.ZUi.AUTO_PROBING ? d ? (0, l.jsx)("div", {
        className: et.status,
        children: (0, l.jsx)(u.VideoSlashIcon, {
          size: "md",
          color: "currentColor"
        })
      }) : (0, l.jsxs)("div", {
        className: a()(et.overlayTitle, et.videoDisabledTitle),
        children: [(0, l.jsx)("div", {
          className: et.status,
          children: (0, l.jsx)(u.VideoSlashIcon, {
            size: "md",
            color: "currentColor"
          })
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: et.overlayTitleText,
          children: ee.Z.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, l.jsxs)("div", {
      className: a()(et.overlayBottom, {
        [et.small]: m < 195
      }),
      children: [k ? (0, l.jsx)("div", {}) : (0, l.jsxs)(u.Text, {
        className: a()(et.overlayTitle, {
          [et.idle]: d
        }),
        color: "none",
        variant: "text-md/normal",
        children: [T ? (0, l.jsx)("div", {
          className: et.blocked,
          children: (0, l.jsx)(u.DenyIcon, {
            size: "lg",
            className: et.blockedIcon,
            color: c.Z.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, l.jsx)(el, {
          participantType: Z,
          platform: M,
          className: et.titleIcon
        }), null != h && "" !== h ? (0, l.jsx)("span", {
          className: et.overlayTitleText,
          children: h
        }) : null]
      }), (0, l.jsxs)("div", {
        className: et.statusContainer,
        children: [null != P && (0, l.jsx)("div", {
          className: et.status,
          children: P
        }), null != O && (0, l.jsx)("div", {
          className: et.status,
          children: O
        }), y, D]
      })]
    })]
  })
});
ei.displayName = "CallTileOverlay";
let es = H.L;
t.ZP = en