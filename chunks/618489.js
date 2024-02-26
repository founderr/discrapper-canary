"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eK
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
  p = n("191225"),
  T = n("372610"),
  g = n("380691"),
  A = n("943349"),
  N = n("702173"),
  R = n("10524"),
  O = n("478272"),
  v = n("812204"),
  L = n("685665"),
  M = n("754493"),
  P = n("458685"),
  D = n("679653"),
  y = n("76393"),
  x = n("261552"),
  b = n("167715"),
  U = n("479788"),
  G = n("16916"),
  j = n("597517"),
  w = n("269596"),
  k = n("38654"),
  F = n("393414"),
  B = n("245463"),
  H = n("486185"),
  V = n("488464"),
  Y = n("998716"),
  W = n("819450"),
  K = n("111542"),
  z = n("924872"),
  q = n("274438"),
  Q = n("808422"),
  Z = n("845579"),
  X = n("999180"),
  J = n("830210"),
  $ = n("289180"),
  ee = n("951691"),
  et = n("19065"),
  en = n("977347"),
  ea = n("799808"),
  es = n("727284"),
  el = n("116439"),
  ei = n("373469"),
  er = n("271938"),
  eo = n("42203"),
  eu = n("305961"),
  ed = n("778588"),
  ec = n("42887"),
  ef = n("957255"),
  eE = n("945956"),
  eh = n("27618"),
  e_ = n("697218"),
  eC = n("800762"),
  eI = n("316133"),
  eS = n("145131"),
  em = n("437825"),
  ep = n("142303"),
  eT = n("406019"),
  eg = n("220075"),
  eA = n("82636"),
  eN = n("394832"),
  eR = n("394640"),
  eO = n("343571"),
  ev = n("962541"),
  eL = n("762489"),
  eM = n("599110"),
  eP = n("701909"),
  eD = n("158998"),
  ey = n("452469"),
  ex = n("997769"),
  eb = n("49111"),
  eU = n("533613"),
  eG = n("782340"),
  ej = n("194416"),
  ew = n("890957");

function ek(e) {
  let t = e.currentTarget;
  eM.default.track(eb.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eF() {
  let e = s.useRef(null);
  (0, c.useFocusLock)(e), s.useEffect(() => {
    eM.default.track(eb.AnalyticEvents.OPEN_POPOUT, {
      type: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([ec.default], () => ec.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: ej.noiseCancellationPopout,
    children: [(0, a.jsx)(c.FormSwitch, {
      hideBorder: !0,
      className: ew.marginBottom4,
      value: t,
      onChange: () => f.default.setNoiseCancellation(!t, {
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eG.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eG.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(_.default, {
      title: eG.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: _.NotchBackground.BLACK,
      buttonTest: eG.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eG.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ej.micTestButton,
      buttonColor: c.Button.Colors.PRIMARY,
      location: {
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      className: i(ew.marginBottom8, ew.marginTop20),
      children: eG.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eS.default, {
      justify: eS.default.Justify.BETWEEN,
      className: ej.footer,
      children: [(0, a.jsx)(c.Anchor, {
        href: eb.MarketingURLs.KRISP,
        onClick: e => ek(e),
        children: (0, a.jsx)("div", {
          className: ej.krispLogo
        })
      }), (0, a.jsx)(c.Anchor, {
        href: eP.default.getArticleURL(eb.HelpdeskArticles.NOISE_SUPPRESSION),
        className: ej.krispLink,
        onClick: e => ek(e),
        children: eG.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eB() {
  let e = (0, d.useStateFromStores)([q.default], () => q.default.isMuted()),
    t = e ? eG.default.Messages.STAGE_MUSIC_UNMUTE : eG.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(ev.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? eO.default : eR.default,
    onClick: () => (0, K.updateStageMusicMuted)(!e)
  })
}

function eH(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, X.default)(), o = (0, $.default)(t), u = (0, d.useStateFromStoresObject)([p.default], () => null != p.default.getSelfEmbeddedActivityForChannel(t.id)), E = (0, B.default)(t), {
    reachedLimit: h,
    limit: _
  } = (0, J.default)(t), C = s.useCallback(() => {
    (0, et.default)()
  }, []), I = (0, m.useAppContext)(), S = s.useCallback(e => {
    if (ec.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      f.default.setVideoEnabled(e), e && (0, F.transitionTo)(eb.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eb.ME, t.id))
    };
    e ? (0, es.default)(n, I) : n()
  }, [t, I]), T = u || n || E;
  return (0, a.jsx)(el.VideoButtonWrapper, {
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
      } = e, o = n ? em.default : ep.default, u = (0, a.jsx)(o, {
        className: i(ej.buttonIcon, {
          [ej.withText]: !T
        })
      });
      return (0, a.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(P.default, {
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
              className: i(ej.button, ej.buttonColor, {
                [ej.buttonActive]: n,
                [ej.fauxDisabled]: t,
                [ej.disabled]: r.disabled
              }),
              innerClassName: ej.buttonContents,
              wrapperClassName: ej.button,
              fullWidth: !0,
              children: T ? u : (0, a.jsxs)(eS.default, {
                align: eS.default.Align.CENTER,
                children: [u, eG.default.Messages.VIDEO]
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
  } = e, s = (0, m.useAppContext)(), {
    analyticsLocations: l
  } = (0, L.default)(), r = s === eb.AppContext.POPOUT, o = (0, A.useEmbeddedActivityLaunchability)(t.id), u = (0, A.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([p.default], () => null != t.id && "" !== t.id ? p.default.getEmbeddedActivitiesForChannel(t.id) : p.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([p.default], () => ({
    userInActivity: null != p.default.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, S.useAnalyticsContext)(), _ = (0, g.useShowActivityIndicator)(), C = o !== A.EmbeddedActivityLaunchability.CAN_LAUNCH;
  return n ? (0, a.jsx)(c.Tooltip, {
    text: u,
    children: e => (0, a.jsxs)(c.Button, {
      ...e,
      fullWidth: !0,
      size: c.Button.Sizes.SMALL,
      onClick: () => {
        var n;
        (0, O.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: C,
      className: i(ej.button, ej.buttonColor, {
        [ej.buttonActive]: E || null != f,
        [ej.disabled]: C
      }),
      innerClassName: ej.buttonContents,
      wrapperClassName: ej.button,
      children: [_ ? (0, a.jsx)(R.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(eA.default, {
        className: ej.buttonIcon
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
    u = (0, d.useStateFromStores)([e_.default], () => e_.default.getCurrentUser()),
    f = (0, d.useStateFromStoresArray)([ei.default], () => ei.default.getAllActiveStreams()),
    E = (0, $.default)(n),
    h = n.getGuildId(),
    _ = (0, d.useStateFromStoresObject)([p.default], () => null != p.default.getSelfEmbeddedActivityForChannel(n.id)),
    C = (0, B.default)(n),
    I = s.useCallback(() => {
      (0, ea.default)(h, n.id, eb.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, n.id]),
    S = f.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    m = (0, ee.useOtherStreams)(n, u, f);
  t = null == S ? l ? I : en.default : () => (0, G.default)(S);
  let T = null != S || m.length > 0,
    g = E ? eG.default.Messages.SHARE_YOUR_SCREEN : eG.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = _ || r || C,
    N = (0, a.jsx)(eN.default, {
      className: i(ej.buttonIcon, {
        [ej.withText]: !A
      })
    });
  return (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(ee.default, {
        channel: n,
        currentUser: u,
        activeStreams: f,
        onClose: t,
        handleGoLive: l ? I : en.default
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
            T ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: i(ej.button, ej.buttonColor, {
            [ej.buttonActive]: null != S,
            [ej.disabled]: !E || o
          }),
          ...T ? s : null,
          innerClassName: ej.buttonContents,
          wrapperClassName: ej.button,
          children: A ? N : (0, a.jsxs)(eS.default, {
            align: eS.default.Align.CENTER,
            children: [N, eG.default.Messages.GO_LIVE_SHARE_SCREEN]
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
    let d = (0, D.computeChannelName)(t, e_.default, eh.default);
    return null != n ? (e = eb.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eb.Routes.CHANNEL(eb.ME, t.id), o && t.isBroadcastChannel() && (d = eG.default.Messages.BROADCASTING), (0, a.jsx)(C.default, {
      statusTextClassName: ej.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(eL.default, {
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
      hasLayers: n,
      remoteVoiceState: s,
      channel: l,
      voiceStates: i
    } = this.props;
    if (null != s) return null;
    if (null == l ? void 0 : l.isGuildStageVoice()) {
      let e = null != i.find(e => e.user.id === er.default.getId() && (0, Q.getAudienceRequestToSpeakState)(e.voiceState) === Q.RequestToSpeakStates.ON_STAGE);
      if (!e && (0, z.shouldShowStageMusicMuteButton)(l.id)) return (0, a.jsx)(eB, {})
    }
    return !n && t ? (0, a.jsx)(c.Tooltip, {
      text: eG.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: ej.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, a.jsx)(ev.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eg.default
        })
      }
    }) : (0, a.jsx)(c.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, a.jsx)(eF, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(ev.default, {
          ...t,
          tooltipClassName: ej.noiseCancellationTooltip,
          tooltipText: s ? null : eG.default.Messages.NOISE_CANCELLATION_TOOLTIP,
          icon: e ? eT.default : eg.default
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
    return null != e && n && 0 !== t.length ? (0, a.jsx)(ex.default, {
      voiceStates: t,
      channel: e,
      className: ej.voiceUsers
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
    let u = er.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, W.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === u);
      if (null == n || n.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, J.getChannelVideoLimit)(e),
      f = (0, W.getStageHasMedia)(e.id);
    return (0, a.jsxs)("div", {
      className: ej.actionButtons,
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
        }) : null, (0, B.default)(e) ? (0, a.jsx)(H.default, {
          className: i(ej.button, ej.buttonColor),
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
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, a.jsx)(c.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, a.jsxs)("div", {
        className: ej.container,
        children: [(0, a.jsxs)(eS.default, {
          className: ej.connection,
          align: eS.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: ej.inner,
            children: this.renderConnectionStatus()
          }), (0, a.jsxs)(eS.default, {
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
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }, this.handleGoLive = () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, ea.default)(n, t.id, eb.AnalyticsLocations.VOICE_PANEL)
    }, this.handleChannelLinkClick = e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o(null != a, "Channel is null during navigation click"), e.stopPropagation(), h.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eb.ME, a.id)
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
      j.hideHotspot(eU.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }, this.renderVoicePanelIntroduction = () => (0, a.jsxs)("div", {
      className: i(ej.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(c.Heading, {
        className: ej.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eG.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(c.Text, {
        className: ej.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eG.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(c.Button, {
        className: ej.voicePanelIntroductionButton,
        color: c.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eG.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    })
  }
}
var eK = (0, I.default)(function(e) {
  let t = (0, x.default)(),
    n = (0, d.useStateFromStores)([y.default], () => y.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([e_.default], () => e_.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([eE.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eb.RTCConnectionQuality.FINE,
      rtcConnectionState: eb.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eE.default.getChannelId(),
      rtcConnectionQuality: eE.default.getQuality(),
      rtcConnectionState: eE.default.getState(),
      rtcConnectionLastPing: eE.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([eo.default], () => eo.default.getChannel(i), [i]),
    u = null == o ? void 0 : o.getGuildId(),
    f = (0, d.useStateFromStores)([eu.default], () => eu.default.getGuild(u), [u]),
    E = (0, d.useStateFromStoresObject)([ec.default], () => ({
      noiseCancellationSupported: ec.default.isNoiseCancellationSupported(),
      noiseCancellationActive: ec.default.getNoiseCancellation(),
      noiseCancellationError: ec.default.isNoiseCancellationError(),
      canGoLive: (0, U.default)(ec.default)
    })),
    h = (0, d.useStateFromStores)([ec.default, w.default], () => w.default.hasHotspot(eU.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, eD.isNewUser)(l) && !ec.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    _ = (0, d.useStateFromStores)([eC.default], () => null != i && eC.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ei.default], () => ei.default.getCurrentUserActiveStream()),
    I = (0, d.useStateFromStores)([ed.default], () => ed.default.hasLayers()),
    S = (0, d.useStateFromStores)([k.default], () => k.default.isViewingRoles(u)),
    m = (0, d.useStateFromStores)([ef.default], () => S && !ef.default.can(eb.Permissions.VIEW_CHANNEL, o), [S, o]),
    p = Z.RtcPanelShowVoiceStates.useSetting(),
    [g, A, R] = (0, d.useStateFromStoresArray)([eI.default, V.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [V.default.getMutableParticipants(o.id, Y.StageChannelParticipantNamedIndex.SPEAKER), V.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eI.default.getVoiceStatesForChannel(o) : null], [o]),
    O = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == g ? void 0 : g.map(e => {
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
      })) && void 0 !== e ? e : R) && void 0 !== t ? t : []
    }, [g, A, R]),
    [P, D] = s.useState(!1);
  s.useEffect(() => {
    (S || m) && D(!1)
  }, [S, m, D]);
  let {
    AnalyticsLocationProvider: G
  } = (0, L.default)(v.default.RTC_PANEL), j = (0, T.default)(null != u ? u : eb.EMPTY_STRING_GUILD_ID, null == o ? void 0 : o.id), F = (0, N.default)(null == o ? void 0 : o.id), B = (0, M.default)();
  return (0, a.jsx)(G, {
    children: (0, a.jsxs)("div", {
      className: ej.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(b.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eW, {
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
        voiceStates: O,
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: h,
        isPrivateChannelWithEnabledActivities: F,
        isBroadcasting: B
      }), !P && S && null != u ? (0, a.jsxs)("div", {
        className: ej.viewAsRolesWarning,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ej.viewAsRolesWarningText,
          children: m ? eG.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eG.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(c.Button, {
          className: ej.viewAsRolesWarningButton,
          size: c.Button.Sizes.MIN,
          onClick: () => {
            D(!0)
          },
          children: eG.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})