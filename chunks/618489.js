"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ez
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("90915"),
  d = n("446674"),
  c = n("77078"),
  f = n("629109"),
  E = n("272030"),
  h = n("406189"),
  _ = n("32296"),
  C = n("412026"),
  I = n("86621"),
  S = n("997289"),
  m = n("244201"),
  p = n("266790"),
  T = n("191225"),
  g = n("372610"),
  A = n("380691"),
  N = n("943349"),
  R = n("702173"),
  v = n("10524"),
  O = n("478272"),
  L = n("812204"),
  M = n("685665"),
  P = n("754493"),
  D = n("458685"),
  y = n("679653"),
  x = n("76393"),
  b = n("261552"),
  U = n("167715"),
  G = n("479788"),
  j = n("16916"),
  w = n("597517"),
  k = n("269596"),
  F = n("38654"),
  B = n("393414"),
  H = n("245463"),
  V = n("486185"),
  Y = n("488464"),
  W = n("998716"),
  K = n("819450"),
  z = n("111542"),
  q = n("924872"),
  Q = n("274438"),
  Z = n("808422"),
  X = n("845579"),
  J = n("999180"),
  $ = n("830210"),
  ee = n("289180"),
  et = n("951691"),
  en = n("19065"),
  ea = n("977347"),
  es = n("799808"),
  el = n("727284"),
  ei = n("116439"),
  er = n("373469"),
  eo = n("271938"),
  eu = n("42203"),
  ed = n("305961"),
  ec = n("778588"),
  ef = n("42887"),
  eE = n("957255"),
  eh = n("945956"),
  e_ = n("27618"),
  eC = n("697218"),
  eI = n("800762"),
  eS = n("316133"),
  em = n("145131"),
  ep = n("437825"),
  eT = n("142303"),
  eg = n("406019"),
  eA = n("220075"),
  eN = n("82636"),
  eR = n("394832"),
  ev = n("394640"),
  eO = n("343571"),
  eL = n("962541"),
  eM = n("762489"),
  eP = n("599110"),
  eD = n("701909"),
  ey = n("158998"),
  ex = n("452469"),
  eb = n("997769"),
  eU = n("49111"),
  eG = n("533613"),
  ej = n("782340"),
  ew = n("194416"),
  ek = n("890957");

function eF(e) {
  let t = e.currentTarget;
  eP.default.track(eU.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eB() {
  let e = s.useRef(null);
  (0, c.useFocusLock)(e), s.useEffect(() => {
    eP.default.track(eU.AnalyticEvents.OPEN_POPOUT, {
      type: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([ef.default], () => ef.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: ew.noiseCancellationPopout,
    children: [(0, a.jsx)(c.FormSwitch, {
      hideBorder: !0,
      className: ek.marginBottom4,
      value: t,
      onChange: () => f.default.setNoiseCancellation(!t, {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: ej.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: ej.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(_.default, {
      title: ej.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: _.NotchBackground.BLACK,
      buttonTest: ej.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: ej.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ew.micTestButton,
      buttonColor: c.Button.Colors.PRIMARY,
      location: {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      className: i(ek.marginBottom8, ek.marginTop20),
      children: ej.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(em.default, {
      justify: em.default.Justify.BETWEEN,
      className: ew.footer,
      children: [(0, a.jsx)(c.Anchor, {
        href: eU.MarketingURLs.KRISP,
        onClick: e => eF(e),
        children: (0, a.jsx)("div", {
          className: ew.krispLogo
        })
      }), (0, a.jsx)(c.Anchor, {
        href: eD.default.getArticleURL(eU.HelpdeskArticles.NOISE_SUPPRESSION),
        className: ew.krispLink,
        onClick: e => eF(e),
        children: ej.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eH() {
  let e = (0, d.useStateFromStores)([Q.default], () => Q.default.isMuted()),
    t = e ? ej.default.Messages.STAGE_MUSIC_UNMUTE : ej.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(eL.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? eO.default : ev.default,
    onClick: () => (0, z.updateStageMusicMuted)(!e)
  })
}

function eV(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, J.default)(), o = (0, ee.default)(t), u = (0, d.useStateFromStoresObject)([T.default], () => null != T.default.getSelfEmbeddedActivityForChannel(t.id)), E = (0, H.default)(t), {
    reachedLimit: h,
    limit: _
  } = (0, $.default)(t), C = s.useCallback(() => {
    (0, en.default)()
  }, []), I = (0, m.useAppContext)(), S = s.useCallback(e => {
    if (ef.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      f.default.setVideoEnabled(e), e && (0, B.transitionTo)(eU.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eU.ME, t.id))
    };
    e ? (0, el.default)(n, I) : n()
  }, [t, I]), p = u || n || E;
  return (0, a.jsx)(ei.VideoButtonWrapper, {
    onChange: S,
    onCameraUnavailable: C,
    hasPermission: o,
    channelLimit: _,
    channelLimitReached: h,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: s,
        iconComponent: l,
        ...r
      } = e, o = n ? ep.default : eT.default, u = (0, a.jsx)(o, {
        className: i(ew.buttonIcon, {
          [ew.withText]: !p
        })
      });
      return (0, a.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(D.default, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: c.Popout.Animation.FADE,
        children: (e, l) => {
          let {
            onClick: o,
            ...d
          } = e, {
            isShown: f
          } = l;
          return (0, a.jsx)(c.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(c.Button, {
              ...r,
              ...e,
              ...d,
              onClick: t => {
                var n;
                r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), f && o(t)
              },
              onContextMenu: t => {
                var n;
                o(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: c.Button.Sizes.SMALL,
              className: i(ew.button, ew.buttonColor, {
                [ew.buttonActive]: n,
                [ew.fauxDisabled]: t,
                [ew.disabled]: r.disabled
              }),
              innerClassName: ew.buttonContents,
              wrapperClassName: ew.button,
              fullWidth: !0,
              children: p ? u : (0, a.jsxs)(em.default, {
                align: em.default.Align.CENTER,
                children: [u, ej.default.Messages.VIDEO]
              })
            })
          })
        }
      })
    }
  })
}

function eY(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, m.useAppContext)(), {
    analyticsLocations: l
  } = (0, M.default)(), r = s === eU.AppContext.POPOUT, o = t.getGuildId();
  (0, p.useActivitiesRolloutExperiments)(o);
  let u = (0, N.useEmbeddedActivityLaunchability)(t.id),
    f = (0, N.getEmbeddedActivityLaunchabilityLabel)(u),
    [E] = (0, d.useStateFromStores)([T.default], () => null != t.id && "" !== t.id ? T.default.getEmbeddedActivitiesForChannel(t.id) : T.NO_ACTIVITIES),
    {
      userInActivity: h
    } = (0, d.useStateFromStoresObject)([T.default], () => ({
      userInActivity: null != T.default.getSelfEmbeddedActivityForChannel(t.id)
    })),
    _ = (0, S.useAnalyticsContext)(),
    C = (0, A.useShowActivityIndicator)(),
    I = u !== N.EmbeddedActivityLaunchability.CAN_LAUNCH;
  return n ? (0, a.jsx)(c.Tooltip, {
    text: f,
    children: e => (0, a.jsxs)(c.Button, {
      ...e,
      fullWidth: !0,
      size: c.Button.Sizes.SMALL,
      onClick: () => {
        var n;
        (0, O.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: _.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: I,
      className: i(ew.button, ew.buttonColor, {
        [ew.buttonActive]: h || null != E,
        [ew.disabled]: I
      }),
      innerClassName: ew.buttonContents,
      wrapperClassName: ew.button,
      children: [C ? (0, a.jsx)(v.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(eN.default, {
        className: ew.buttonIcon
      })]
    })
  }) : null
}

function eW(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([eC.default], () => eC.default.getCurrentUser()),
    f = (0, d.useStateFromStoresArray)([er.default], () => er.default.getAllActiveStreams()),
    E = (0, ee.default)(n),
    h = n.getGuildId(),
    _ = (0, d.useStateFromStoresObject)([T.default], () => null != T.default.getSelfEmbeddedActivityForChannel(n.id)),
    C = (0, H.default)(n),
    I = s.useCallback(() => {
      (0, es.default)(h, n.id, eU.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, n.id]),
    S = f.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    m = (0, et.useOtherStreams)(n, u, f);
  t = null == S ? l ? I : ea.default : () => (0, j.default)(S);
  let p = null != S || m.length > 0,
    g = E ? ej.default.Messages.SHARE_YOUR_SCREEN : ej.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = _ || r || C,
    N = (0, a.jsx)(eR.default, {
      className: i(ew.buttonIcon, {
        [ew.withText]: !A
      })
    });
  return (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(et.default, {
        channel: n,
        currentUser: u,
        activeStreams: f,
        onClose: t,
        handleGoLive: l ? I : ea.default
      })
    },
    position: "top",
    align: "center",
    animation: c.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        ...s
      } = e;
      return (0, a.jsx)(c.Tooltip, {
        text: g,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          size: c.Button.Sizes.SMALL,
          onClick: a => {
            var s;
            p ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: i(ew.button, ew.buttonColor, {
            [ew.buttonActive]: null != S,
            [ew.disabled]: !E || o
          }),
          ...p ? s : null,
          innerClassName: ew.buttonContents,
          wrapperClassName: ew.button,
          children: A ? N : (0, a.jsxs)(em.default, {
            align: em.default.Align.CENTER,
            children: [N, ej.default.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eK extends s.PureComponent {
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
    let d = (0, y.computeChannelName)(t, eC.default, e_.default);
    return null != n ? (e = eU.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eU.Routes.CHANNEL(eU.ME, t.id), o && t.isBroadcastChannel() && (d = ej.default.Messages.BROADCASTING), (0, a.jsx)(C.default, {
      statusTextClassName: ew.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(eM.default, {
            className: ew.channel,
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
    if (null != s) return null;
    if (null == l ? void 0 : l.isGuildStageVoice()) {
      let e = null != i.find(e => e.user.id === eo.default.getId() && (0, Z.getAudienceRequestToSpeakState)(e.voiceState) === Z.RequestToSpeakStates.ON_STAGE);
      if (!e && (0, q.shouldShowStageMusicMuteButton)(l.id)) return (0, a.jsx)(eH, {})
    }
    return !n && t ? (0, a.jsx)(c.Tooltip, {
      text: ej.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: ew.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, a.jsx)(eL.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eA.default
        })
      }
    }) : (0, a.jsx)(c.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, a.jsx)(eB, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(eL.default, {
          ...t,
          tooltipClassName: ew.noiseCancellationTooltip,
          tooltipText: s ? null : ej.default.Messages.NOISE_CANCELLATION_TOOLTIP,
          icon: e ? eg.default : eA.default
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
    return null != e && n && 0 !== t.length ? (0, a.jsx)(eb.default, {
      voiceStates: t,
      channel: e,
      className: ew.voiceUsers
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
    let u = eo.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, K.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === u);
      if (null == n || n.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, $.getChannelVideoLimit)(e),
      f = (0, K.getStageHasMedia)(e.id);
    return (0, a.jsxs)("div", {
      className: ew.actionButtons,
      children: [(0, a.jsx)(eV, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, a.jsx)(eW, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, a.jsxs)(a.Fragment, {
        children: [d ? (0, a.jsx)(eY, {
          channel: e,
          enableActivities: s
        }) : null, (0, H.default)(e) ? (0, a.jsx)(V.default, {
          className: i(ew.button, ew.buttonColor),
          innerClassName: ew.buttonContents,
          iconClassName: ew.buttonIcon,
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
    return null == e ? null : (0, a.jsx)(c.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, a.jsxs)("div", {
        className: ew.container,
        children: [(0, a.jsxs)(em.default, {
          className: ew.connection,
          align: em.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: ew.inner,
            children: this.renderConnectionStatus()
          }), (0, a.jsxs)(em.default, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, a.jsx)(ex.default, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), this.canScreenshare = () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }, this.handleNoiseCancellationClicked = () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      f.default.setNoiseCancellation(!e, {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }, this.handleGoLive = () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, es.default)(n, t.id, eU.AnalyticsLocations.VOICE_PANEL)
    }, this.handleChannelLinkClick = e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o(null != a, "Channel is null during navigation click"), e.stopPropagation(), h.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eU.ME, a.id)
    }, this.handleChannelLinkContextMenu = e => {
      let {
        channel: t
      } = this.props;
      (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("19577").then(n.bind(n, "19577"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }, this.handleCloseVoicePanelIntroduction = () => {
      w.hideHotspot(eG.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }, this.renderVoicePanelIntroduction = () => (0, a.jsxs)("div", {
      className: i(ew.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(c.Heading, {
        className: ew.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(c.Text, {
        className: ew.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(c.Button, {
        className: ew.voicePanelIntroductionButton,
        color: c.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    })
  }
}
var ez = (0, I.default)(function(e) {
  let t = (0, b.default)(),
    n = (0, d.useStateFromStores)([x.default], () => x.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([eC.default], () => eC.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([eh.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eU.RTCConnectionQuality.FINE,
      rtcConnectionState: eU.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eh.default.getChannelId(),
      rtcConnectionQuality: eh.default.getQuality(),
      rtcConnectionState: eh.default.getState(),
      rtcConnectionLastPing: eh.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([eu.default], () => eu.default.getChannel(i), [i]),
    u = null == o ? void 0 : o.getGuildId(),
    f = (0, d.useStateFromStores)([ed.default], () => ed.default.getGuild(u), [u]),
    E = (0, d.useStateFromStoresObject)([ef.default], () => ({
      noiseCancellationSupported: ef.default.isNoiseCancellationSupported(),
      noiseCancellationActive: ef.default.getNoiseCancellation(),
      noiseCancellationError: ef.default.isNoiseCancellationError(),
      canGoLive: (0, G.default)(ef.default)
    })),
    h = (0, d.useStateFromStores)([ef.default, k.default], () => k.default.hasHotspot(eG.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, ey.isNewUser)(l) && !ef.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    _ = (0, d.useStateFromStores)([eI.default], () => null != i && eI.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([er.default], () => er.default.getCurrentUserActiveStream()),
    I = (0, d.useStateFromStores)([ec.default], () => ec.default.hasLayers()),
    S = (0, d.useStateFromStores)([F.default], () => F.default.isViewingRoles(u)),
    m = (0, d.useStateFromStores)([eE.default], () => S && !eE.default.can(eU.Permissions.VIEW_CHANNEL, o), [S, o]),
    p = X.RtcPanelShowVoiceStates.useSetting(),
    [T, A, N] = (0, d.useStateFromStoresArray)([eS.default, Y.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [Y.default.getMutableParticipants(o.id, W.StageChannelParticipantNamedIndex.SPEAKER), Y.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eS.default.getVoiceStatesForChannel(o) : null], [o]),
    v = s.useMemo(() => {
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
      })) && void 0 !== e ? e : N) && void 0 !== t ? t : []
    }, [T, A, N]),
    [O, D] = s.useState(!1);
  s.useEffect(() => {
    (S || m) && D(!1)
  }, [S, m, D]);
  let {
    AnalyticsLocationProvider: y
  } = (0, M.default)(L.default.RTC_PANEL), j = (0, g.default)(null != u ? u : eU.EMPTY_STRING_GUILD_ID, null == o ? void 0 : o.id), w = (0, R.default)(null == o ? void 0 : o.id), B = (0, P.default)();
  return (0, a.jsx)(y, {
    children: (0, a.jsxs)("div", {
      className: ew.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(U.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eK, {
        ...e,
        ...E,
        ...r,
        enableActivities: j,
        remoteVoiceState: t,
        guild: f,
        channel: o,
        hasVideo: _,
        selfStream: C,
        hasLayers: I,
        voiceStates: v,
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: h,
        isPrivateChannelWithEnabledActivities: w,
        isBroadcasting: B
      }), !O && S && null != u ? (0, a.jsxs)("div", {
        className: ew.viewAsRolesWarning,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ew.viewAsRolesWarningText,
          children: m ? ej.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : ej.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(c.Button, {
          className: ew.viewAsRolesWarningButton,
          size: c.Button.Sizes.MIN,
          onClick: () => {
            D(!0)
          },
          children: ej.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})