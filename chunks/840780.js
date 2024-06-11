"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("704215"),
  c = n("692547"),
  f = n("115850"),
  h = n("481060"),
  m = n("988298"),
  C = n("475179"),
  p = n("925549"),
  g = n("872810"),
  E = n("438139"),
  S = n("730749"),
  _ = n("607070"),
  I = n("566620"),
  N = n("317381"),
  T = n("620662"),
  A = n("835473"),
  L = n("67212"),
  v = n("757454"),
  x = n("552740"),
  R = n("933557"),
  M = n("311352"),
  y = n("730417"),
  O = n("524347"),
  b = n("853197"),
  D = n("616360"),
  j = n("858064"),
  P = n("594190"),
  G = n("569545"),
  U = n("102172"),
  w = n("74299"),
  B = n("914923"),
  F = n("165393"),
  V = n("989941"),
  H = n("803647"),
  k = n("231664"),
  Y = n("759198"),
  K = n("131704"),
  W = n("199902"),
  z = n("314897"),
  Z = n("592125"),
  X = n("984933"),
  q = n("430824"),
  Q = n("131951"),
  J = n("496675"),
  $ = n("158776"),
  ee = n("699516"),
  et = n("944486"),
  en = n("885110"),
  el = n("594174"),
  ea = n("449224"),
  es = n("366695"),
  ei = n("672752"),
  er = n("499150"),
  eo = n("119828"),
  eu = n("87086"),
  ed = n("466111"),
  ec = n("990138"),
  ef = n("761374"),
  eh = n("976401"),
  em = n("333454"),
  eC = n("864441"),
  ep = n("368666"),
  eg = n("626135"),
  eE = n("358085"),
  eS = n("793224"),
  e_ = n("978769"),
  eI = n("981631"),
  eN = n("918559"),
  eT = n("702512"),
  eA = n("689938"),
  eL = n("497727");

function ev(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ex = (0, E.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(em.default, {
    children: t
  })
});
class eR extends a.PureComponent {
  componentDidUpdate(e) {
    !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({
      isDropsActivityPanelTooltipOpen: !1
    })
  }
  isJoinableActivity() {
    let {
      application: e,
      activity: t,
      embeddedActivity: n
    } = this.props;
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eI.ActivityTypes.PLAYING && (0, T.default)(t, eI.ActivityFlags.JOIN))
  }
  renderGoLiveButton() {
    let e, t, n, a;
    let {
      canGoLive: s,
      guildId: i,
      isStreaming: r,
      channel: o,
      canStream: u,
      runningGame: d,
      embeddedActivity: c
    } = this.props;
    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = ec.default, a = eA.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = ef.default, a = null != d ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: d.name
    }) : eA.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = ef.default, a = null != o && (0, K.isVoiceChannel)(o.type) ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: eL.panelButtonContainer,
      children: (0, l.jsx)(eh.default, {
        tooltipText: a,
        disabled: e,
        onClick: t,
        icon: n,
        iconForeground: eL.__invalid_actionIcon
      })
    })) : null
  }
  renderInviteButton() {
    let {
      embeddedActivity: e
    } = this.props;
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(eh.default, {
      tooltipText: eA.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: f.GroupPlusIcon,
      iconForeground: eL.__invalid_actionIcon
    }) : null
  }
  renderDropsButton() {
    let {
      dropsTooltipAction: e,
      dropsPartnerGame: t
    } = this.props;
    if (null == t) return null;
    let n = this.state.isDropsActivityPanelTooltipOpen,
      a = () => this.setState({
        isDropsActivityPanelTooltipOpen: !1
      });
    return (0, l.jsx)(h.Popout, {
      shouldShow: n,
      position: "top",
      align: "center",
      onRequestClose: a,
      renderPopout: () => (0, l.jsx)(j.default, {
        partnerGame: t,
        tooltipAction: e,
        onClose: a
      }),
      children: () => (0, l.jsxs)(l.Fragment, {
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(eh.default, {
          "aria-label": eA.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : eA.default.Messages.DROPS_ENABLED,
          onClick: this.handleClickDropsButton,
          icon: D.default
        })]
      })
    })
  }
  renderLeaveEmbeddedActivityButton() {
    let {
      embeddedActivity: e,
      channel: t
    } = this.props;
    return null == e || null == t ? null : (0, l.jsx)(eh.default, {
      tooltipText: eA.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: eu.default,
      iconForeground: eL.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, K.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eS.default, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(e_.default, {})
  }
  renderSparkles() {
    let {
      useReducedMotion: e
    } = this.props;
    async function t() {
      let {
        default: e
      } = await n.e("5217").then(n.t.bind(n, "801048", 19));
      return e
    }
    return (0, l.jsx)("div", {
      className: eL.sparkleContainer,
      children: (0, l.jsx)(h.LottieAnimation, {
        importData: t,
        shouldAnimate: !e,
        className: eL.sparkles
      })
    })
  }
  renderActions() {
    let e = this.renderGoLiveButton(),
      t = this.renderDropsButton(),
      n = this.renderInviteButton(),
      a = this.renderLeaveEmbeddedActivityButton(),
      s = this.renderClipsButton(),
      i = this.renderBroadcastButton(),
      r = this.renderBroadcastSettingsButton();
    return null == e && null == n && null == a ? null : (0, l.jsxs)("div", {
      className: eL.actions,
      children: [i, e, r, n, null == e ? a : s, t]
    })
  }
  getGameName() {
    let {
      runningGame: e,
      application: t
    } = this.props;
    return null != t ? t.name : null != e ? e.name : eA.default.Messages.STATUS_UNKNOWN
  }
  renderGame() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      application: n,
      runningGame: a
    } = this.props, s = this.getGameName();
    return (0, l.jsxs)("div", {
      className: i()(eL.gameWrapper, {
        [eL.clickableGameWrapper]: null != n
      }),
      children: [(0, l.jsxs)("div", {
        className: eL.gameIconWrapper,
        children: [(0, l.jsx)(es.default, {
          className: eL.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(eo.default, {
          className: eL.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i()(eL.info, {
          [eL.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(eC.default, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: eL.dropsBadgeWrapper,
            children: (0, l.jsx)(h.TextBadge, {
              text: eA.default.Messages.DROPS_AVAILABLE,
              color: c.default.unsafe_rawColors.BRAND_500.css,
              className: eL.dropsBadge
            })
          })]
        }) : null
      })]
    })
  }
  renderScreenshare() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      streamMetadata: n,
      streamQualityIndicator: a
    } = this.props, {
      title: s,
      sanitizedTitle: r
    } = (0, B.default)(n);
    return (0, l.jsxs)("div", {
      className: eL.gameWrapper,
      children: [e ? (0, l.jsx)(F.default, {
        title: r
      }) : (0, l.jsx)(ep.default, {
        look: ep.default.Looks.GRAY,
        size: ep.default.Sizes.SMALL,
        className: eL.liveIndicator
      }), (0, l.jsxs)("div", {
        className: i()(eL.info, {
          [eL.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(eC.default, {
          children: s
        }), null != a && (0, l.jsxs)("div", {
          className: eL.perksDemoContainer,
          children: [(0, l.jsx)(ed.default, {
            color: ei.GradientCssUrls.PREMIUM_TIER_2,
            width: 12,
            height: 12
          }), (0, l.jsx)(Y.default, {
            className: eL.perksDemoText,
            variant: "text-xxs/semibold",
            children: a
          })]
        }), null != t && (0, l.jsx)("div", {
          className: eL.dropsBadgeWrapper,
          children: (0, l.jsx)(h.TextBadge, {
            text: eA.default.Messages.DROPS_AVAILABLE,
            color: c.default.unsafe_rawColors.BRAND_500.css,
            className: eL.dropsBadge
          })
        })]
      })]
    })
  }
  renderEmbeddedActivity() {
    let e;
    let {
      application: t,
      embeddedActivity: n,
      channel: a,
      channelName: s,
      guildForConnectedChannel: i
    } = this.props;
    if (null == n || null == a || null == t) return null;
    let r = {
        start: n.connectedSince
      },
      o = s;
    null != i ? (e = eI.Routes.CHANNEL(i.id, a.id), o = "".concat(o, " / ").concat(i.name)) : e = eI.Routes.CHANNEL(eI.ME, a.id);
    let u = (0, l.jsx)(er.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(em.default, {
        className: eL.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: eL.gameWrapper,
      children: [(0, l.jsx)(es.default, {
        className: eL.gameIcon,
        game: t,
        size: es.default.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: eL.info,
        children: [(0, l.jsx)(er.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(eC.default, {
            className: eL.activityName,
            children: t.name
          })
        }), (0, K.isTextChannel)(a.type) ? u : (0, l.jsx)(ex, {
          timestamps: r
        })]
      })]
    })
  }
  render() {
    let {
      canGoLive: e,
      embeddedActivity: t,
      runningGame: n,
      isStreaming: a,
      streamMetadata: s,
      className: r
    } = this.props;
    return a || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, l.jsx)("div", {
      className: i()(eL.panel, r),
      children: (0, l.jsxs)("div", {
        className: eL.body,
        children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
      })
    }) : null
  }
  constructor(...e) {
    super(...e), ev(this, "modalKey", void 0), ev(this, "state", {
      isDropsActivityPanelTooltipOpen: !1,
      showDropsSparkles: this.props.showDropsSparkles
    }), ev(this, "startBroadcast", () => {
      let {
        stream: e,
        channel: t,
        runningGame: n
      } = this.props, l = null != t && (0, K.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, g.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, L.startBroadcastForStream)((0, G.encodeStreamKey)(e), n.pid))
    }), ev(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, K.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
        (0, x.openStartBroadcastConfirmModal)(this.startBroadcast);
        return
      }(0, h.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, "60594"));
        return t => (0, l.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: i,
          analyticsLocation: eI.AnalyticsLocations.ACTIVITY_PANEL
        })
      }).then(e => {
        null != e && (this.modalKey = e)
      })
    }), ev(this, "handleClickStopStreamingButton", () => {
      let {
        stream: e,
        channel: t,
        userId: n
      } = this.props, l = null != t && (0, K.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, x.openStopBroadcastConfirmModal)(() => (0, H.default)(e));
        return
      }(0, H.default)(e)
    }), ev(this, "handleClickInviteButton", () => {
      let {
        activity: e,
        analyticsContext: t
      } = this.props;
      o()(null != e, "Received null activity"), eg.default.track(eI.AnalyticEvents.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: e.application_id,
        location: t.location
      }), (0, m.openModal)(e, !1)
    }), ev(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, b.getDrop)(e);
      null != l && (eg.default.track(eI.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
        user_id: n,
        drops_quest_id: l.dropsQuestId,
        game_id: l.dropsGameId,
        game_name: l.title.toLowerCase(),
        show_sparkles: this.state.showDropsSparkles,
        tooltip_action: t
      }), this.setState({
        isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
        showDropsSparkles: !1
      }))
    }), ev(this, "handleClickLeaveEmbeddedActivityButton", (e, t) => () => {
      (0, I.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }), ev(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(M.default, {})
    }), ev(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, K.isVoiceChannel)(t.type) && C.default.selectParticipant(t.id, n.applicationId), p.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eI.ME, t.id), (0, K.isTextChannel)(t.type) && (0, I.updateActivityPanelMode)(eN.ActivityPanelModes.PANEL)
    })
  }
}
t.default = (0, S.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([z.default], () => z.default.getId()), i = (0, u.useStateFromStores)([P.default, ea.default], () => (0, V.default)(P.default, ea.default)), r = (0, u.useStateFromStores)([et.default, Z.default], () => Z.default.getChannel(et.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([N.default], () => N.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([Z.default], () => Z.default.getChannel(o)), f = (0, u.useStateFromStores)([q.default], () => q.default.getGuild(null == c ? void 0 : c.guild_id)), [h, m] = (0, u.useStateFromStoresArray)([W.default], () => [W.default.getCurrentUserActiveStream(), W.default.getStreamerActiveStreamMetadata()]), C = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), p = (0, u.useStateFromStores)([O.default], () => O.default.getActivityPanelTooltipAction()), {
    partnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: S
  } = (0, y.useActivityPanelDrop)(eT.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), I = (0, u.useStateFromStores)([N.default], () => null != c ? N.default.getSelfEmbeddedActivityForChannel(c.id) : null), T = (0, u.useStateFromStores)([q.default, J.default, X.default], () => null != r ? U.canStreamInChannel(r, q.default, J.default, !1) : null != n && U.getStreamEligibleChannels(X.default.getChannels(n), q.default, J.default).length > 0), [L] = (0, A.default)([null !== (t = function() {
    if (null != m && null != m.id) return m.id;
    if (null != i && null != i.id) return i.id;
    if (null != I) return I.applicationId
  }()) && void 0 !== t ? t : ""]), x = (0, u.useStateFromStores)([Q.default], () => (0, w.default)(Q.default) && (0, eE.isWindows)()), M = (0, u.useStateFromStores)([$.default], () => null != s ? $.default.findActivity(s, e => e.type === eI.ActivityTypes.PLAYING) : null), b = null != h && h.ownerId === s && h.state !== eI.ApplicationStreamStates.ENDED, D = (0, u.useStateFromStores)([en.default], () => en.default.getBroadcast()), j = (0, v.default)() && null != i, G = (0, u.useStateFromStores)([el.default, ee.default], () => null != c ? (0, R.computeChannelName)(c, el.default, ee.default) : void 0), B = (0, k.default)(null == r ? void 0 : r.id, s);
  return (0, l.jsx)(eR, {
    ...a,
    guildId: n,
    canGoLive: x,
    activity: M,
    embeddedActivity: I,
    showDropsSparkles: S,
    dropsPartnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    userId: s,
    runningGame: i,
    application: L,
    useReducedMotion: C,
    isStreaming: b,
    channel: c,
    canStream: T,
    dropsTooltipAction: p,
    stream: h,
    streamMetadata: m,
    broadcast: D,
    canStartBroadcast: j,
    channelName: G,
    guildForConnectedChannel: f,
    streamQualityIndicator: B
  })
})