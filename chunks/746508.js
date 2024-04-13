"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("512722"),
  o = a.n(r),
  u = a("613828"),
  d = a("442837"),
  c = a("592471"),
  f = a("864094"),
  E = a("75735"),
  h = a("382600"),
  _ = a("481060"),
  C = a("846027"),
  m = a("239091"),
  S = a("925549"),
  I = a("284056"),
  p = a("324315"),
  T = a("730749"),
  g = a("2052"),
  A = a("40851"),
  N = a("317381"),
  v = a("596040"),
  R = a("588580"),
  O = a("374065"),
  L = a("451576"),
  M = a("938655"),
  P = a("403404"),
  x = a("100527"),
  y = a("906732"),
  D = a("158631"),
  b = a("793865"),
  U = a("933557"),
  j = a("258609"),
  G = a("446226"),
  w = a("935261"),
  k = a("74299"),
  F = a("803647"),
  H = a("142497"),
  B = a("810788"),
  V = a("160404"),
  Y = a("703656"),
  W = a("641015"),
  K = a("848543"),
  z = a("565799"),
  q = a("501655"),
  Q = a("71275"),
  Z = a("600518"),
  X = a("485287"),
  J = a("754277"),
  $ = a("590415"),
  ee = a("695346"),
  et = a("923973"),
  ea = a("829750"),
  en = a("189771"),
  es = a("544384"),
  el = a("560688"),
  ei = a("127608"),
  er = a("76021"),
  eo = a("173507"),
  eu = a("25827"),
  ed = a("199902"),
  ec = a("314897"),
  ef = a("592125"),
  eE = a("430824"),
  eh = a("819640"),
  e_ = a("131951"),
  eC = a("496675"),
  em = a("19780"),
  eS = a("699516"),
  eI = a("594174"),
  ep = a("979651"),
  eT = a("938475"),
  eg = a("285952"),
  eA = a("762854"),
  eN = a("250183"),
  ev = a("87128"),
  eR = a("976401"),
  eO = a("333454"),
  eL = a("626135"),
  eM = a("63063"),
  eP = a("51144"),
  ex = a("594117"),
  ey = a("226323"),
  eD = a("981631"),
  eb = a("190378"),
  eU = a("689938"),
  ej = a("815668"),
  eG = a("794711");

function ew(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function ek(e) {
  let t = e.currentTarget;
  eL.default.track(eD.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eF() {
  let e = s.useRef(null);
  (0, _.useFocusLock)(e), s.useEffect(() => {
    eL.default.track(eD.AnalyticEvents.OPEN_POPOUT, {
      type: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([e_.default], () => e_.default.getNoiseCancellation());
  return (0, n.jsxs)("div", {
    ref: e,
    className: ej.noiseCancellationPopout,
    children: [(0, n.jsx)(_.FormSwitch, {
      hideBorder: !0,
      className: eG.marginBottom4,
      value: t,
      onChange: () => C.default.setNoiseCancellation(!t, {
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eU.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, n.jsx)(I.default, {
      title: eU.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: I.NotchBackground.BLACK,
      buttonTest: eU.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eU.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ej.micTestButton,
      buttonColor: _.Button.Colors.PRIMARY,
      location: {
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, n.jsx)(_.FormTitle, {
      tag: _.FormTitleTags.H5,
      className: i()(eG.marginBottom8, eG.marginTop20),
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, n.jsxs)(eg.default, {
      justify: eg.default.Justify.BETWEEN,
      className: ej.__invalid_footer,
      children: [(0, n.jsx)(_.Anchor, {
        href: eD.MarketingURLs.KRISP,
        onClick: e => ek(e),
        children: (0, n.jsx)("div", {
          className: ej.krispLogo
        })
      }), (0, n.jsx)(_.Anchor, {
        href: eM.default.getArticleURL(eD.HelpdeskArticles.NOISE_SUPPRESSION),
        className: ej.krispLink,
        onClick: e => ek(e),
        children: eU.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eH() {
  let e = (0, d.useStateFromStores)([J.default], () => J.default.isMuted()),
    t = e ? eU.default.Messages.STAGE_MUSIC_UNMUTE : eU.default.Messages.STAGE_MUSIC_MUTE;
  return (0, n.jsx)(eR.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? ev.default : eN.default,
    onClick: () => (0, Z.updateStageMusicMuted)(!e)
  })
}

function eB(e) {
  let {
    channel: t,
    enableActivities: a,
    disabled: l
  } = e, r = (0, et.default)(), o = (0, en.default)(t), u = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(t.id)), c = (0, W.default)(t), {
    reachedLimit: f,
    limit: h
  } = (0, ea.default)(t), m = s.useCallback(() => {
    (0, el.default)()
  }, []), S = (0, A.useAppContext)(), I = s.useCallback(e => {
    if (e_.default.isVideoEnabled() === e) return;
    let a = () => {
      var a;
      C.default.setVideoEnabled(e), e && (0, Y.transitionTo)(eD.Routes.CHANNEL(null !== (a = t.getGuildId()) && void 0 !== a ? a : eD.ME, t.id))
    };
    e ? (0, eo.default)(a, S) : a()
  }, [t, S]), p = u || a || c, {
    Component: T,
    play: g,
    events: v
  } = (0, E.useVideoLottie)(r.enabled ? "disable" : "enable");
  return s.useEffect(() => () => g(), [r.enabled, g]), (0, n.jsx)(eu.VideoButtonWrapper, {
    onChange: I,
    onCameraUnavailable: m,
    hasPermission: o,
    channelLimit: h,
    channelLimitReached: f,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: a,
        label: s,
        iconComponent: l,
        ...r
      } = e, o = (0, n.jsx)(T, {
        size: "custom",
        width: 20,
        height: 20,
        className: i()(ej.buttonIcon, {
          [ej.withText]: !p
        }),
        color: "currentColor"
      });
      return (0, n.jsx)(_.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(b.default, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: _.Popout.Animation.FADE,
        children: (e, l) => {
          let {
            onClick: u,
            ...d
          } = e, {
            isShown: c
          } = l;
          return (0, n.jsx)(_.Tooltip, {
            text: s,
            children: e => (0, n.jsx)(_.Button, {
              ...r,
              ...e,
              ...d,
              onClick: t => {
                var a;
                r.onClick(t), null === (a = e.onClick) || void 0 === a || a.call(e), c && u(t)
              },
              onMouseEnter: () => {
                var t, a;
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (a = d.onMouseEnter) || void 0 === a || a.call(d), v.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave()
              },
              onContextMenu: t => {
                var a;
                u(t), null === (a = e.onContextMenu) || void 0 === a || a.call(e)
              },
              size: _.Button.Sizes.SMALL,
              className: i()(ej.button, ej.buttonColor, {
                [ej.buttonActive]: a,
                [ej.fauxDisabled]: t,
                [ej.disabled]: r.disabled
              }),
              innerClassName: ej.buttonContents,
              wrapperClassName: ej.button,
              fullWidth: !0,
              children: p ? o : (0, n.jsxs)(eg.default, {
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
    enableActivities: a
  } = e, s = (0, A.useAppContext)(), {
    analyticsLocations: l
  } = (0, y.default)(), r = s === eD.AppContext.POPOUT, o = (0, O.useEmbeddedActivityLaunchability)(t.id), u = (0, O.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([N.default], () => null != t.id && "" !== t.id ? N.default.getEmbeddedActivitiesForChannel(t.id) : N.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    userInActivity: null != N.default.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, g.useAnalyticsContext)(), C = (0, R.useShowActivityIndicator)(), m = o !== O.EmbeddedActivityLaunchability.CAN_LAUNCH, {
    Component: S,
    events: I
  } = (0, c.useActivityLottie)();
  return a ? (0, n.jsx)(_.Tooltip, {
    text: u,
    children: e => (0, n.jsxs)(_.Button, {
      ...e,
      fullWidth: !0,
      size: _.Button.Sizes.SMALL,
      ...I,
      onClick: () => {
        var a;
        I.onClick(), (0, P.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (a = e.onClick) || void 0 === a || a.call(e)
      },
      onMouseEnter: () => {
        var t;
        I.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
      },
      onMouseLeave: () => {
        var t;
        I.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
      },
      disabled: m,
      className: i()(ej.button, ej.buttonColor, {
        [ej.buttonActive]: E || null != f,
        [ej.disabled]: m
      }),
      innerClassName: ej.buttonContents,
      wrapperClassName: ej.button,
      children: [C ? (0, n.jsx)(M.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, n.jsx)(S, {
        size: "sm",
        color: "currentColor",
        className: ej.buttonIcon
      })]
    })
  }) : null
}

function eY(e) {
  let t, {
      channel: a,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    c = (0, d.useStateFromStoresArray)([ed.default], () => ed.default.getAllActiveStreams()),
    E = (0, en.default)(a),
    h = a.getGuildId(),
    C = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(a.id)),
    m = (0, W.default)(a),
    S = s.useCallback(() => {
      (0, er.default)(h, a.id, eD.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, a.id]),
    I = c.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    p = (0, es.useOtherStreams)(a, u, c);
  t = null == I ? l ? S : ei.default : () => (0, F.default)(I);
  let T = null != I || p.length > 0,
    g = E ? eU.default.Messages.SHARE_YOUR_SCREEN : eU.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = C || r || m,
    v = null != I,
    {
      Component: R,
      events: O,
      play: L
    } = (0, f.useScreenshareLottie)(v ? "disable" : "enable");
  s.useEffect(() => () => L(), [L, v]);
  let M = (0, n.jsx)(R, {
    color: "currentColor",
    className: i()(ej.buttonIcon, {
      [ej.withText]: !A
    })
  });
  return (0, n.jsx)(_.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(es.default, {
        channel: a,
        currentUser: u,
        activeStreams: c,
        onClose: t,
        handleGoLive: l ? S : ei.default
      })
    },
    position: "top",
    align: "center",
    animation: _.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: a,
        onMouseEnter: s,
        ...l
      } = e;
      return (0, n.jsx)(_.Tooltip, {
        text: g,
        children: e => (0, n.jsx)(_.Button, {
          ...e,
          size: _.Button.Sizes.SMALL,
          onClick: n => {
            var s;
            T ? a(n) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: i()(ej.button, ej.buttonColor, {
            [ej.buttonActive]: null != I,
            [ej.disabled]: !E || o
          }),
          ...T ? l : null,
          onMouseEnter: () => {
            var t;
            null == s || s(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), O.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), O.onMouseLeave()
          },
          innerClassName: ej.buttonContents,
          wrapperClassName: ej.button,
          children: A ? M : (0, n.jsxs)(eg.default, {
            align: eg.default.Align.CENTER,
            children: [M, eU.default.Messages.GO_LIVE_SHARE_SCREEN]
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
      guild: a,
      rtcConnectionQuality: s,
      rtcConnectionState: l,
      rtcConnectionLastPing: i,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let d = (0, U.computeChannelName)(t, eI.default, eS.default);
    return null != a ? (e = eD.Routes.CHANNEL(a.id, t.id), d = "".concat(d, " / ").concat(a.name)) : e = eD.Routes.CHANNEL(eD.ME, t.id), o && t.isBroadcastChannel() && (d = eU.default.Messages.BROADCASTING), (0, n.jsx)(p.default, {
      statusTextClassName: ej.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, n.jsx)(_.FocusRing, {
        children: (0, n.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, n.jsx)(eO.default, {
            className: ej.channel,
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
      hasLayers: a,
      remoteVoiceState: s,
      channel: l,
      voiceStates: i
    } = this.props;
    return null != s ? null : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != i.find(e => e.user.id === ec.default.getId() && (0, $.getAudienceRequestToSpeakState)(e.voiceState) === $.RequestToSpeakStates.ON_STAGE)) && (0, X.shouldShowStageMusicMuteButton)(l.id) ? (0, n.jsx)(eH, {}) : !a && t ? (0, n.jsx)(_.Tooltip, {
      text: eU.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: ej.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, n.jsx)(eR.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eA.default
        })
      }
    }) : (0, n.jsx)(_.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, n.jsx)(eF, {}),
      children: (t, a) => {
        let {
          isShown: s
        } = a;
        return (0, n.jsx)(eK, {
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
      showVoiceStates: a
    } = this.props;
    return null != e && a && 0 !== t.length ? (0, n.jsx)(ey.default, {
      voiceStates: t,
      channel: e,
      className: ej.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: a,
      enableActivities: s,
      voiceStates: l,
      selfStream: r,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == e || null != a) return null;
    let u = ec.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, Q.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let a = l.find(e => e.user.id === u);
      if (null == a || a.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, ea.getChannelVideoLimit)(e),
      f = (0, Q.getStageHasMedia)(e.id);
    return (0, n.jsxs)("div", {
      className: ej.actionButtons,
      children: [(0, n.jsx)(eB, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, n.jsx)(eY, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, n.jsxs)(n.Fragment, {
        children: [d ? (0, n.jsx)(eV, {
          channel: e,
          enableActivities: s
        }) : null, (0, W.default)(e) ? (0, n.jsx)(K.default, {
          className: i()(ej.button, ej.buttonColor),
          innerClassName: ej.buttonContents,
          iconClassName: ej.buttonIcon,
          channel: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: a
    } = this.props;
    return null == e ? null : (0, n.jsx)(_.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: _.Popout.Animation.TRANSLATE,
      shouldShow: a,
      children: () => (0, n.jsxs)("div", {
        className: ej.container,
        children: [(0, n.jsxs)(eg.default, {
          className: ej.connection,
          align: eg.default.Align.CENTER,
          children: [(0, n.jsx)("div", {
            className: ej.inner,
            children: this.renderConnectionStatus()
          }), (0, n.jsxs)(eg.default, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, n.jsx)(ex.default, {
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
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }), ew(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, a = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != a && (0, er.default)(a, t.id, eD.AnalyticsLocations.VOICE_PANEL)
    }), ew(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: a,
        channel: n
      } = this.props;
      o()(null != n, "Channel is null during navigation click"), e.stopPropagation(), S.default.channelListScrollTo(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : eD.ME, n.id)
    }), ew(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await a.e("56944").then(a.bind(a, "600830"));
        return a => (0, n.jsx)(e, {
          ...a,
          channel: t
        })
      })
    }), ew(this, "handleCloseVoicePanelIntroduction", () => {
      H.hideHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }), ew(this, "renderVoicePanelIntroduction", () => (0, n.jsxs)("div", {
      className: i()(ej.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, n.jsx)(_.Heading, {
        className: ej.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, n.jsx)(_.Text, {
        className: ej.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, n.jsx)(_.Button, {
        className: ej.voicePanelIntroductionButton,
        color: _.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    }))
  }
}

function eK(e) {
  let {
    popoutProps: t,
    isShown: a,
    noiseCancellationActive: l
  } = e, {
    play: i,
    Component: r,
    events: o
  } = (0, h.useWaveformLottie)(l ? "disable" : "enable");
  return s.useEffect(() => () => i(), [l, i]), (0, n.jsx)(eR.default, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: ej.noiseCancellationTooltip,
    tooltipText: a ? null : eU.default.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
t.default = (0, T.default)(function(e) {
  let t = (0, G.default)(),
    a = (0, d.useStateFromStores)([j.default], () => j.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([em.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eD.RTCConnectionQuality.FINE,
      rtcConnectionState: eD.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: em.default.getChannelId(),
      rtcConnectionQuality: em.default.getQuality(),
      rtcConnectionState: em.default.getState(),
      rtcConnectionLastPing: em.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([ef.default], () => ef.default.getChannel(i), [i]),
    u = null == o ? void 0 : o.getGuildId(),
    c = (0, d.useStateFromStores)([eE.default], () => eE.default.getGuild(u), [u]),
    f = (0, d.useStateFromStoresObject)([e_.default], () => ({
      noiseCancellationSupported: e_.default.isNoiseCancellationSupported(),
      noiseCancellationActive: e_.default.getNoiseCancellation(),
      noiseCancellationError: e_.default.isNoiseCancellationError(),
      canGoLive: (0, k.default)(e_.default)
    })),
    E = (0, d.useStateFromStores)([e_.default, B.default], () => B.default.hasHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, eP.isNewUser)(l) && !e_.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    h = (0, d.useStateFromStores)([ep.default], () => null != i && ep.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ed.default], () => ed.default.getCurrentUserActiveStream()),
    m = (0, d.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    S = (0, d.useStateFromStores)([V.default], () => V.default.isViewingRoles(u)),
    I = (0, d.useStateFromStores)([eC.default], () => S && !eC.default.can(eD.Permissions.VIEW_CHANNEL, o), [S, o]),
    p = ee.RtcPanelShowVoiceStates.useSetting(),
    [T, g, A] = (0, d.useStateFromStoresArray)([eT.default, z.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [z.default.getMutableParticipants(o.id, q.StageChannelParticipantNamedIndex.SPEAKER), z.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eT.default.getVoiceStatesForChannel(o) : null], [o]),
    N = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == T ? void 0 : T.map(e => {
        let {
          user: t,
          userNick: a,
          voiceState: n
        } = e;
        return {
          user: t,
          nick: a,
          voiceState: n
        }
      })) && void 0 !== e ? e : A) && void 0 !== t ? t : []
    }, [T, g, A]),
    [R, O] = s.useState(!1);
  s.useEffect(() => {
    (S || I) && O(!1)
  }, [S, I, O]);
  let {
    analyticsLocations: M
  } = (0, y.default)(x.default.RTC_PANEL), P = (0, v.default)(null != u ? u : eD.EMPTY_STRING_SNOWFLAKE_ID, null == o ? void 0 : o.id), b = (0, L.default)(null == o ? void 0 : o.id), U = (0, D.default)();
  return (0, n.jsx)(y.AnalyticsLocationProvider, {
    value: M,
    children: (0, n.jsxs)("div", {
      className: ej.wrapper,
      children: [null != t || null != a ? (0, n.jsx)(w.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: a
      }) : null, (0, n.jsx)(eW, {
        ...e,
        ...f,
        ...r,
        enableActivities: P,
        remoteVoiceState: t,
        guild: c,
        channel: o,
        hasVideo: h,
        selfStream: C,
        hasLayers: m,
        voiceStates: N,
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: E,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: U
      }), !R && S && null != u ? (0, n.jsxs)("div", {
        className: ej.viewAsRolesWarning,
        children: [(0, n.jsx)(_.Text, {
          variant: "text-sm/normal",
          className: ej.viewAsRolesWarningText,
          children: I ? eU.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eU.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, n.jsx)(_.Button, {
          className: ej.viewAsRolesWarningButton,
          size: _.Button.Sizes.MIN,
          onClick: () => {
            O(!0)
          },
          children: eU.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})