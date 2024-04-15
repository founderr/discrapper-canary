"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("692547"),
  f = n("481060"),
  h = n("24124"),
  p = n("475179"),
  m = n("925549"),
  C = n("872810"),
  g = n("438139"),
  E = n("730749"),
  S = n("607070"),
  I = n("566620"),
  _ = n("317381"),
  N = n("620662"),
  T = n("835473"),
  A = n("67212"),
  L = n("757454"),
  v = n("552740"),
  x = n("933557"),
  R = n("311352"),
  y = n("730417"),
  M = n("524347"),
  O = n("853197"),
  b = n("616360"),
  D = n("858064"),
  j = n("594190"),
  G = n("569545"),
  P = n("102172"),
  U = n("74299"),
  w = n("914923"),
  B = n("165393"),
  F = n("989941"),
  V = n("803647"),
  H = n("131704"),
  k = n("199902"),
  K = n("314897"),
  Y = n("592125"),
  W = n("984933"),
  Z = n("430824"),
  z = n("131951"),
  X = n("496675"),
  q = n("158776"),
  Q = n("699516"),
  J = n("944486"),
  $ = n("885110"),
  ee = n("594174"),
  et = n("449224"),
  en = n("366695"),
  el = n("499150"),
  ea = n("301822"),
  es = n("119828"),
  ei = n("87086"),
  er = n("782089"),
  eo = n("990138"),
  eu = n("761374"),
  ed = n("976401"),
  ec = n("333454"),
  ef = n("864441"),
  eh = n("26290"),
  ep = n("368666"),
  em = n("626135"),
  eC = n("358085"),
  eg = n("793224"),
  eE = n("978769"),
  eS = n("981631"),
  eI = n("918559"),
  e_ = n("702512"),
  eN = n("689938"),
  eT = n("810618");

function eA(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eL = (0, g.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(ec.default, {
    children: t
  })
});
class ev extends a.PureComponent {
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
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eS.ActivityTypes.PLAYING && (0, N.default)(t, eS.ActivityFlags.JOIN))
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
    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = eo.default, a = eN.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = eu.default, a = null != d ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: d.name
    }) : eN.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = eu.default, a = null != o && (0, H.isVoiceChannel)(o.type) ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eN.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: eT.panelButtonContainer,
      children: (0, l.jsx)(ed.default, {
        tooltipText: a,
        disabled: e,
        onClick: t,
        icon: n,
        iconForeground: eT.__invalid_actionIcon
      })
    })) : null
  }
  renderInviteButton() {
    let {
      embeddedActivity: e
    } = this.props;
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ed.default, {
      tooltipText: eN.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: er.default,
      iconForeground: eT.__invalid_actionIcon
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
    return (0, l.jsx)(f.Popout, {
      shouldShow: n,
      position: "top",
      align: "center",
      onRequestClose: a,
      renderPopout: () => (0, l.jsx)(D.default, {
        partnerGame: t,
        tooltipAction: e,
        onClose: a
      }),
      children: () => (0, l.jsxs)(l.Fragment, {
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ed.default, {
          "aria-label": eN.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : eN.default.Messages.DROPS_ENABLED,
          onClick: this.handleClickDropsButton,
          icon: b.default
        })]
      })
    })
  }
  renderLeaveEmbeddedActivityButton() {
    let {
      embeddedActivity: e,
      channel: t
    } = this.props;
    return null == e || null == t ? null : (0, l.jsx)(ed.default, {
      tooltipText: eN.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: ei.default,
      iconForeground: eT.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, H.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eg.default, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(eE.default, {})
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
      className: eT.sparkleContainer,
      children: (0, l.jsx)(ea.default, {
        importData: t,
        shouldAnimate: !e,
        className: eT.sparkles
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
      className: eT.actions,
      children: [i, e, r, n, null == e ? a : s, t]
    })
  }
  getGameName() {
    let {
      runningGame: e,
      application: t
    } = this.props;
    return null != t ? t.name : null != e ? e.name : eN.default.Messages.STATUS_UNKNOWN
  }
  renderGame() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      application: n,
      runningGame: a
    } = this.props, s = this.getGameName();
    return (0, l.jsxs)("div", {
      className: i()(eT.gameWrapper, {
        [eT.clickableGameWrapper]: null != n
      }),
      children: [(0, l.jsxs)("div", {
        className: eT.gameIconWrapper,
        children: [(0, l.jsx)(en.default, {
          className: eT.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(es.default, {
          className: eT.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i()(eT.info, {
          [eT.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ef.default, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: eT.dropsBadgeWrapper,
            children: (0, l.jsx)(eh.TextBadge, {
              text: eN.default.Messages.DROPS_AVAILABLE,
              color: c.default.unsafe_rawColors.BRAND_500.css,
              className: eT.dropsBadge
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
      streamMetadata: n
    } = this.props, {
      title: a,
      sanitizedTitle: s
    } = (0, w.default)(n);
    return (0, l.jsxs)("div", {
      className: eT.gameWrapper,
      children: [e ? (0, l.jsx)(B.default, {
        title: s
      }) : (0, l.jsx)(ep.default, {
        look: ep.default.Looks.GRAY,
        size: ep.default.Sizes.SMALL,
        className: eT.liveIndicator
      }), (0, l.jsxs)("div", {
        className: i()(eT.info, {
          [eT.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(ef.default, {
          children: a
        }), null != t && (0, l.jsx)("div", {
          className: eT.dropsBadgeWrapper,
          children: (0, l.jsx)(eh.TextBadge, {
            text: eN.default.Messages.DROPS_AVAILABLE,
            color: c.default.unsafe_rawColors.BRAND_500.css,
            className: eT.dropsBadge
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
    null != i ? (e = eS.Routes.CHANNEL(i.id, a.id), o = "".concat(o, " / ").concat(i.name)) : e = eS.Routes.CHANNEL(eS.ME, a.id);
    let u = (0, l.jsx)(el.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(ec.default, {
        className: eT.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: eT.gameWrapper,
      children: [(0, l.jsx)(en.default, {
        className: eT.gameIcon,
        game: t
      }), (0, l.jsxs)("div", {
        className: eT.info,
        children: [(0, l.jsx)(el.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(ef.default, {
            className: eT.activityName,
            children: t.name
          })
        }), (0, H.isTextChannel)(a.type) ? u : (0, l.jsx)(eL, {
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
      className: i()(eT.panel, r),
      children: (0, l.jsxs)("div", {
        className: eT.body,
        children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
      })
    }) : null
  }
  constructor(...e) {
    super(...e), eA(this, "modalKey", void 0), eA(this, "state", {
      isDropsActivityPanelTooltipOpen: !1,
      showDropsSparkles: this.props.showDropsSparkles
    }), eA(this, "startBroadcast", () => {
      let {
        stream: e,
        channel: t,
        runningGame: n
      } = this.props, l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, C.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, A.startBroadcastForStream)((0, G.encodeStreamKey)(e), n.pid))
    }), eA(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, H.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
        (0, v.openStartBroadcastConfirmModal)(this.startBroadcast);
        return
      }(0, f.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, "60594"));
        return t => (0, l.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: i,
          analyticsLocation: eS.AnalyticsLocations.ACTIVITY_PANEL
        })
      }).then(e => {
        null != e && (this.modalKey = e)
      })
    }), eA(this, "handleClickStopStreamingButton", () => {
      let {
        stream: e,
        channel: t,
        userId: n
      } = this.props, l = null != t && (0, H.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, v.openStopBroadcastConfirmModal)(() => (0, V.default)(e));
        return
      }(0, V.default)(e)
    }), eA(this, "handleClickInviteButton", () => {
      let {
        activity: e,
        analyticsContext: t
      } = this.props;
      o()(null != e, "Received null activity"), em.default.track(eS.AnalyticEvents.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: e.application_id,
        location: t.location
      }), (0, h.openModal)(e, !1)
    }), eA(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, O.getDrop)(e);
      null != l && (em.default.track(eS.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
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
    }), eA(this, "handleClickLeaveEmbeddedActivityButton", (e, t) => () => {
      (0, I.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }), eA(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(R.default, {})
    }), eA(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, H.isVoiceChannel)(t.type) && p.default.selectParticipant(t.id, n.applicationId), m.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eS.ME, t.id), (0, H.isTextChannel)(t.type) && (0, I.updateActivityPanelMode)(eI.ActivityPanelModes.PANEL)
    })
  }
}
t.default = (0, E.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([K.default], () => K.default.getId()), i = (0, u.useStateFromStores)([j.default, et.default], () => (0, F.default)(j.default, et.default)), r = (0, u.useStateFromStores)([J.default, Y.default], () => Y.default.getChannel(J.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([_.default], () => _.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([Y.default], () => Y.default.getChannel(o)), f = (0, u.useStateFromStores)([Z.default], () => Z.default.getGuild(null == c ? void 0 : c.guild_id)), [h, p] = (0, u.useStateFromStoresArray)([k.default], () => [k.default.getCurrentUserActiveStream(), k.default.getStreamerActiveStreamMetadata()]), m = (0, u.useStateFromStores)([S.default], () => S.default.useReducedMotion), C = (0, u.useStateFromStores)([M.default], () => M.default.getActivityPanelTooltipAction()), {
    partnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: I
  } = (0, y.useActivityPanelDrop)(e_.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), N = (0, u.useStateFromStores)([_.default], () => null != c ? _.default.getSelfEmbeddedActivityForChannel(c.id) : null), A = (0, u.useStateFromStores)([Z.default, X.default, W.default], () => null != r ? P.canStreamInChannel(r, Z.default, X.default, !1) : null != n && P.getStreamEligibleChannels(W.default.getChannels(n), Z.default, X.default).length > 0), [v] = (0, T.default)([null !== (t = function() {
    if (null != p && null != p.id) return p.id;
    if (null != i && null != i.id) return i.id;
    if (null != N) return N.applicationId
  }()) && void 0 !== t ? t : ""]), R = (0, u.useStateFromStores)([z.default], () => (0, U.default)(z.default) && (0, eC.isWindows)()), O = (0, u.useStateFromStores)([q.default], () => null != s ? q.default.findActivity(s, e => e.type === eS.ActivityTypes.PLAYING) : null), b = null != h && h.ownerId === s && h.state !== eS.ApplicationStreamStates.ENDED, D = (0, u.useStateFromStores)([$.default], () => $.default.getBroadcast()), G = (0, L.default)() && null != i, w = (0, u.useStateFromStores)([ee.default, Q.default], () => null != c ? (0, x.computeChannelName)(c, ee.default, Q.default) : void 0);
  return (0, l.jsx)(ev, {
    ...a,
    guildId: n,
    canGoLive: R,
    activity: O,
    embeddedActivity: N,
    showDropsSparkles: I,
    dropsPartnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    userId: s,
    runningGame: i,
    application: v,
    useReducedMotion: m,
    isStreaming: b,
    channel: c,
    canStream: A,
    dropsTooltipAction: C,
    stream: h,
    streamMetadata: p,
    broadcast: D,
    canStartBroadcast: G,
    channelName: w,
    guildForConnectedChannel: f
  })
})