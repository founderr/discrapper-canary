"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("442837"),
  c = n("592471"),
  f = n("864094"),
  E = n("75735"),
  _ = n("382600"),
  h = n("481060"),
  C = n("846027"),
  S = n("239091"),
  m = n("925549"),
  I = n("284056"),
  p = n("324315"),
  T = n("730749"),
  g = n("2052"),
  A = n("40851"),
  N = n("317381"),
  R = n("596040"),
  O = n("588580"),
  v = n("374065"),
  L = n("451576"),
  P = n("938655"),
  M = n("403404"),
  y = n("100527"),
  D = n("906732"),
  x = n("158631"),
  b = n("793865"),
  U = n("933557"),
  G = n("258609"),
  j = n("446226"),
  w = n("935261"),
  k = n("74299"),
  F = n("803647"),
  B = n("142497"),
  H = n("810788"),
  V = n("160404"),
  Y = n("703656"),
  W = n("641015"),
  K = n("848543"),
  z = n("565799"),
  q = n("501655"),
  Q = n("71275"),
  Z = n("600518"),
  X = n("485287"),
  J = n("754277"),
  $ = n("590415"),
  ee = n("695346"),
  et = n("923973"),
  en = n("829750"),
  ea = n("189771"),
  es = n("544384"),
  el = n("560688"),
  ei = n("127608"),
  er = n("76021"),
  eo = n("173507"),
  eu = n("25827"),
  ed = n("199902"),
  ec = n("314897"),
  ef = n("592125"),
  eE = n("430824"),
  e_ = n("819640"),
  eh = n("131951"),
  eC = n("496675"),
  eS = n("19780"),
  em = n("699516"),
  eI = n("594174"),
  ep = n("979651"),
  eT = n("938475"),
  eg = n("285952"),
  eA = n("762854"),
  eN = n("250183"),
  eR = n("87128"),
  eO = n("976401"),
  ev = n("333454"),
  eL = n("626135"),
  eP = n("63063"),
  eM = n("51144"),
  ey = n("594117"),
  eD = n("226323"),
  ex = n("981631"),
  eb = n("190378"),
  eU = n("689938"),
  eG = n("815668"),
  ej = n("794711");

function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ek(e) {
  let t = e.currentTarget;
  eL.default.track(ex.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eF() {
  let e = s.useRef(null);
  (0, h.useFocusLock)(e), s.useEffect(() => {
    eL.default.track(ex.AnalyticEvents.OPEN_POPOUT, {
      type: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([eh.default], () => eh.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: eG.noiseCancellationPopout,
    children: [(0, a.jsx)(h.FormSwitch, {
      hideBorder: !0,
      className: ej.marginBottom4,
      value: t,
      onChange: () => C.default.setNoiseCancellation(!t, {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eU.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(I.default, {
      title: eU.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: I.NotchBackground.BLACK,
      buttonTest: eU.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eU.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: eG.micTestButton,
      buttonColor: h.Button.Colors.PRIMARY,
      location: {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(h.FormTitle, {
      tag: h.FormTitleTags.H5,
      className: i()(ej.marginBottom8, ej.marginTop20),
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eg.default, {
      justify: eg.default.Justify.BETWEEN,
      className: eG.__invalid_footer,
      children: [(0, a.jsx)(h.Anchor, {
        href: ex.MarketingURLs.KRISP,
        onClick: e => ek(e),
        children: (0, a.jsx)("div", {
          className: eG.krispLogo
        })
      }), (0, a.jsx)(h.Anchor, {
        href: eP.default.getArticleURL(ex.HelpdeskArticles.NOISE_SUPPRESSION),
        className: eG.krispLink,
        onClick: e => ek(e),
        children: eU.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eB() {
  let e = (0, d.useStateFromStores)([J.default], () => J.default.isMuted()),
    t = e ? eU.default.Messages.STAGE_MUSIC_UNMUTE : eU.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(eO.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? eR.default : eN.default,
    onClick: () => (0, Z.updateStageMusicMuted)(!e)
  })
}

function eH(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, et.default)(), o = (0, ea.default)(t), u = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(t.id)), c = (0, W.default)(t), {
    reachedLimit: f,
    limit: _
  } = (0, en.default)(t), S = s.useCallback(() => {
    (0, el.default)()
  }, []), m = (0, A.useAppContext)(), I = s.useCallback(e => {
    if (eh.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      C.default.setVideoEnabled(e), e && (0, Y.transitionTo)(ex.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ex.ME, t.id))
    };
    e ? (0, eo.default)(n, m) : n()
  }, [t, m]), p = u || n || c, {
    Component: T,
    play: g,
    events: R
  } = (0, E.useVideoLottie)(r.enabled ? "disable" : "enable");
  return s.useEffect(() => () => g(), [r.enabled, g]), (0, a.jsx)(eu.VideoButtonWrapper, {
    onChange: I,
    onCameraUnavailable: S,
    hasPermission: o,
    channelLimit: _,
    channelLimitReached: f,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: s,
        iconComponent: l,
        ...r
      } = e, o = (0, a.jsx)(T, {
        size: "custom",
        width: 20,
        height: 20,
        className: i()(eG.buttonIcon, {
          [eG.withText]: !p
        }),
        color: "currentColor"
      });
      return (0, a.jsx)(h.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(b.default, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: h.Popout.Animation.FADE,
        children: (e, l) => {
          let {
            onClick: u,
            ...d
          } = e, {
            isShown: c
          } = l;
          return (0, a.jsx)(h.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(h.Button, {
              ...r,
              ...e,
              ...d,
              onClick: t => {
                var n;
                r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), c && u(t)
              },
              onMouseEnter: () => {
                var t, n;
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), R.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), R.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                u(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: h.Button.Sizes.SMALL,
              className: i()(eG.button, eG.buttonColor, {
                [eG.buttonActive]: n,
                [eG.fauxDisabled]: t,
                [eG.disabled]: r.disabled
              }),
              innerClassName: eG.buttonContents,
              wrapperClassName: eG.button,
              fullWidth: !0,
              children: p ? o : (0, a.jsxs)(eg.default, {
                align: eg.default.Align.CENTER,
                children: [o, eU.default.Messages.VIDEO]
              })
            })
          })
        }
      })
    }
  })
}

function eV(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, A.useAppContext)(), {
    analyticsLocations: l
  } = (0, D.default)(), r = s === ex.AppContext.POPOUT, o = (0, v.useEmbeddedActivityLaunchability)(t.id), u = (0, v.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([N.default], () => null != t.id && "" !== t.id ? N.default.getEmbeddedActivitiesForChannel(t.id) : N.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    userInActivity: null != N.default.getSelfEmbeddedActivityForChannel(t.id)
  })), _ = (0, g.useAnalyticsContext)(), C = (0, O.useShowActivityIndicator)(), S = o !== v.EmbeddedActivityLaunchability.CAN_LAUNCH, {
    Component: m,
    events: I
  } = (0, c.useActivityLottie)();
  return n ? (0, a.jsx)(h.Tooltip, {
    text: u,
    children: e => (0, a.jsxs)(h.Button, {
      ...e,
      fullWidth: !0,
      size: h.Button.Sizes.SMALL,
      ...I,
      onClick: () => {
        var n;
        I.onClick(), (0, M.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: _.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: S,
      className: i()(eG.button, eG.buttonColor, {
        [eG.buttonActive]: E || null != f,
        [eG.disabled]: S
      }),
      innerClassName: eG.buttonContents,
      wrapperClassName: eG.button,
      children: [C ? (0, a.jsx)(P.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(m, {
        size: "sm",
        color: "currentColor",
        className: eG.buttonIcon
      })]
    })
  }) : null
}

function eY(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    c = (0, d.useStateFromStoresArray)([ed.default], () => ed.default.getAllActiveStreams()),
    E = (0, ea.default)(n),
    _ = n.getGuildId(),
    C = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id)),
    S = (0, W.default)(n),
    m = s.useCallback(() => {
      (0, er.default)(_, n.id, ex.AnalyticsSections.ACTIVITY_PANEL)
    }, [_, n.id]),
    I = c.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    p = (0, es.useOtherStreams)(n, u, c);
  t = null == I ? l ? m : ei.default : () => (0, F.default)(I);
  let T = null != I || p.length > 0,
    g = E ? eU.default.Messages.SHARE_YOUR_SCREEN : eU.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = C || r || S,
    R = null != I,
    {
      Component: O,
      events: v,
      play: L
    } = (0, f.useScreenshareLottie)(R ? "disable" : "enable");
  s.useEffect(() => () => L(), [L, R]);
  let P = (0, a.jsx)(O, {
    color: "currentColor",
    className: i()(eG.buttonIcon, {
      [eG.withText]: !A
    })
  });
  return (0, a.jsx)(h.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(es.default, {
        channel: n,
        currentUser: u,
        activeStreams: c,
        onClose: t,
        handleGoLive: l ? m : ei.default
      })
    },
    position: "top",
    align: "center",
    animation: h.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        onMouseEnter: s,
        ...l
      } = e;
      return (0, a.jsx)(h.Tooltip, {
        text: g,
        children: e => (0, a.jsx)(h.Button, {
          ...e,
          size: h.Button.Sizes.SMALL,
          onClick: a => {
            var s;
            T ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: i()(eG.button, eG.buttonColor, {
            [eG.buttonActive]: null != I,
            [eG.disabled]: !E || o
          }),
          ...T ? l : null,
          onMouseEnter: () => {
            null == s || s(), v.onMouseEnter()
          },
          onMouseLeave: () => {
            v.onMouseLeave()
          },
          innerClassName: eG.buttonContents,
          wrapperClassName: eG.button,
          children: A ? P : (0, a.jsxs)(eg.default, {
            align: eg.default.Align.CENTER,
            children: [P, eU.default.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eW extends s.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: s,
      rtcConnectionState: l,
      rtcConnectionLastPing: i,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let d = (0, U.computeChannelName)(t, eI.default, em.default);
    return null != n ? (e = ex.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = ex.Routes.CHANNEL(ex.ME, t.id), o && t.isBroadcastChannel() && (d = eU.default.Messages.BROADCASTING), (0, a.jsx)(p.default, {
      statusTextClassName: eG.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, a.jsx)(h.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(ev.default, {
            className: eG.channel,
            children: d
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: s,
      channel: l,
      voiceStates: i
    } = this.props;
    return null != s ? null : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != i.find(e => e.user.id === ec.default.getId() && (0, $.getAudienceRequestToSpeakState)(e.voiceState) === $.RequestToSpeakStates.ON_STAGE)) && (0, X.shouldShowStageMusicMuteButton)(l.id) ? (0, a.jsx)(eB, {}) : !n && t ? (0, a.jsx)(h.Tooltip, {
      text: eU.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: eG.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, a.jsx)(eO.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eA.default
        })
      }
    }) : (0, a.jsx)(h.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, a.jsx)(eF, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(eK, {
          popoutProps: t,
          isShown: s,
          noiseCancellationActive: e
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != e && n && 0 !== t.length ? (0, a.jsx)(eD.default, {
      voiceStates: t,
      channel: e,
      className: eG.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: s,
      voiceStates: l,
      selfStream: r,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == e || null != n) return null;
    let u = ec.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, Q.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === u);
      if (null == n || n.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, en.getChannelVideoLimit)(e),
      f = (0, Q.getStageHasMedia)(e.id);
    return (0, a.jsxs)("div", {
      className: eG.actionButtons,
      children: [(0, a.jsx)(eH, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, a.jsx)(eY, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, a.jsxs)(a.Fragment, {
        children: [d ? (0, a.jsx)(eV, {
          channel: e,
          enableActivities: s
        }) : null, (0, W.default)(e) ? (0, a.jsx)(K.default, {
          className: i()(eG.button, eG.buttonColor),
          innerClassName: eG.buttonContents,
          iconClassName: eG.buttonIcon,
          channel: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, a.jsx)(h.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: h.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, a.jsxs)("div", {
        className: eG.container,
        children: [(0, a.jsxs)(eg.default, {
          className: eG.connection,
          align: eg.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: eG.inner,
            children: this.renderConnectionStatus()
          }), (0, a.jsxs)(eg.default, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, a.jsx)(ey.default, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), ew(this, "canScreenshare", () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }), ew(this, "handleNoiseCancellationClicked", () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      C.default.setNoiseCancellation(!e, {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }), ew(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, er.default)(n, t.id, ex.AnalyticsLocations.VOICE_PANEL)
    }), ew(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o()(null != a, "Channel is null during navigation click"), e.stopPropagation(), m.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.ME, a.id)
    }), ew(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, S.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, "600830"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }), ew(this, "handleCloseVoicePanelIntroduction", () => {
      B.hideHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }), ew(this, "renderVoicePanelIntroduction", () => (0, a.jsxs)("div", {
      className: i()(eG.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(h.Heading, {
        className: eG.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(h.Text, {
        className: eG.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(h.Button, {
        className: eG.voicePanelIntroductionButton,
        color: h.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    }))
  }
}

function eK(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l
  } = e, {
    play: i,
    Component: r,
    events: o
  } = (0, _.useWaveformLottie)(l ? "disable" : "enable");
  return s.useEffect(() => () => i(), [l, i]), (0, a.jsx)(eO.default, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: eG.noiseCancellationTooltip,
    tooltipText: n ? null : eU.default.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
t.default = (0, T.default)(function(e) {
  let t = (0, j.default)(),
    n = (0, d.useStateFromStores)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([eS.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: ex.RTCConnectionQuality.FINE,
      rtcConnectionState: ex.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eS.default.getChannelId(),
      rtcConnectionQuality: eS.default.getQuality(),
      rtcConnectionState: eS.default.getState(),
      rtcConnectionLastPing: eS.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([ef.default], () => ef.default.getChannel(i), [i]),
    u = null == o ? void 0 : o.getGuildId(),
    c = (0, d.useStateFromStores)([eE.default], () => eE.default.getGuild(u), [u]),
    f = (0, d.useStateFromStoresObject)([eh.default], () => ({
      noiseCancellationSupported: eh.default.isNoiseCancellationSupported(),
      noiseCancellationActive: eh.default.getNoiseCancellation(),
      noiseCancellationError: eh.default.isNoiseCancellationError(),
      canGoLive: (0, k.default)(eh.default)
    })),
    E = (0, d.useStateFromStores)([eh.default, H.default], () => H.default.hasHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, eM.isNewUser)(l) && !eh.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    _ = (0, d.useStateFromStores)([ep.default], () => null != i && ep.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ed.default], () => ed.default.getCurrentUserActiveStream()),
    S = (0, d.useStateFromStores)([e_.default], () => e_.default.hasLayers()),
    m = (0, d.useStateFromStores)([V.default], () => V.default.isViewingRoles(u)),
    I = (0, d.useStateFromStores)([eC.default], () => m && !eC.default.can(ex.Permissions.VIEW_CHANNEL, o), [m, o]),
    p = ee.RtcPanelShowVoiceStates.useSetting(),
    [T, g, A] = (0, d.useStateFromStoresArray)([eT.default, z.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [z.default.getMutableParticipants(o.id, q.StageChannelParticipantNamedIndex.SPEAKER), z.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eT.default.getVoiceStatesForChannel(o) : null], [o]),
    N = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == T ? void 0 : T.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: a
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: a
        }
      })) && void 0 !== e ? e : A) && void 0 !== t ? t : []
    }, [T, g, A]),
    [O, v] = s.useState(!1);
  s.useEffect(() => {
    (m || I) && v(!1)
  }, [m, I, v]);
  let {
    analyticsLocations: P
  } = (0, D.default)(y.default.RTC_PANEL), M = (0, R.default)(null != u ? u : ex.EMPTY_STRING_SNOWFLAKE_ID, null == o ? void 0 : o.id), b = (0, L.default)(null == o ? void 0 : o.id), U = (0, x.default)();
  return (0, a.jsx)(D.AnalyticsLocationProvider, {
    value: P,
    children: (0, a.jsxs)("div", {
      className: eG.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(w.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eW, {
        ...e,
        ...f,
        ...r,
        enableActivities: M,
        remoteVoiceState: t,
        guild: c,
        channel: o,
        hasVideo: _,
        selfStream: C,
        hasLayers: S,
        voiceStates: N,
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: E,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: U
      }), !O && m && null != u ? (0, a.jsxs)("div", {
        className: eG.viewAsRolesWarning,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eG.viewAsRolesWarningText,
          children: I ? eU.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eU.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(h.Button, {
          className: eG.viewAsRolesWarningButton,
          size: h.Button.Sizes.MIN,
          onClick: () => {
            v(!0)
          },
          children: eU.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})