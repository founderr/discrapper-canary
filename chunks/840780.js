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
  _ = n("607070"),
  S = n("566620"),
  I = n("317381"),
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
  P = n("569545"),
  G = n("102172"),
  U = n("74299"),
  w = n("914923"),
  F = n("165393"),
  B = n("989941"),
  H = n("803647"),
  V = n("231664"),
  k = n("131704"),
  Y = n("199902"),
  K = n("314897"),
  W = n("592125"),
  Z = n("984933"),
  z = n("430824"),
  X = n("131951"),
  Q = n("496675"),
  q = n("158776"),
  J = n("699516"),
  $ = n("944486"),
  ee = n("885110"),
  et = n("594174"),
  en = n("449224"),
  el = n("366695"),
  ea = n("499150"),
  es = n("301822"),
  ei = n("119828"),
  er = n("87086"),
  eo = n("297087"),
  eu = n("782089"),
  ed = n("990138"),
  ec = n("761374"),
  ef = n("976401"),
  eh = n("333454"),
  ep = n("864441"),
  em = n("26290"),
  eC = n("368666"),
  eg = n("626135"),
  eE = n("358085"),
  e_ = n("793224"),
  eS = n("978769"),
  eI = n("981631"),
  eN = n("918559"),
  eT = n("702512"),
  eA = n("689938"),
  eL = n("810618");

function ev(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ex = (0, g.default)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(eh.default, {
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
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === eI.ActivityTypes.PLAYING && (0, N.default)(t, eI.ActivityFlags.JOIN))
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
    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = ed.default, a = eA.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = ec.default, a = null != d ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: d.name
    }) : eA.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = ec.default, a = null != o && (0, k.isVoiceChannel)(o.type) ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eA.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: eL.panelButtonContainer,
      children: (0, l.jsx)(ef.default, {
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
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ef.default, {
      tooltipText: eA.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: eu.default,
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
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ef.default, {
          "aria-label": eA.default.Messages.DROPS_ENABLED,
          tooltipText: n ? null : eA.default.Messages.DROPS_ENABLED,
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
    return null == e || null == t ? null : (0, l.jsx)(ef.default, {
      tooltipText: eA.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: er.default,
      iconForeground: eL.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, k.isVoiceChannel)(e.type) ? null : (0, l.jsx)(e_.default, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(eS.default, {})
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
      children: (0, l.jsx)(es.default, {
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
        children: [(0, l.jsx)(el.default, {
          className: eL.gameIcon,
          game: n,
          pid: null == a ? void 0 : a.pid
        }), e ? (0, l.jsx)(ei.default, {
          className: eL.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: i()(eL.info, {
          [eL.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ep.default, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: eL.dropsBadgeWrapper,
            children: (0, l.jsx)(em.TextBadge, {
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
    } = (0, w.default)(n);
    return (0, l.jsxs)("div", {
      className: eL.gameWrapper,
      children: [e ? (0, l.jsx)(F.default, {
        className: i()({
          [eL.streamingIconGlow]: null != a
        }),
        title: r
      }) : (0, l.jsx)(eC.default, {
        look: eC.default.Looks.GRAY,
        size: eC.default.Sizes.SMALL,
        className: eL.liveIndicator
      }), (0, l.jsxs)("div", {
        className: i()(eL.info, {
          [eL.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(ep.default, {
          children: s
        }), null != a && (0, l.jsxs)("div", {
          className: eL.perksDemoContainer,
          children: [(0, l.jsx)(eo.default, {
            width: 12,
            height: 12
          }), (0, l.jsx)(f.Text, {
            className: eL.perksDemoText,
            variant: "text-xxs/semibold",
            children: a
          })]
        }), null != t && (0, l.jsx)("div", {
          className: eL.dropsBadgeWrapper,
          children: (0, l.jsx)(em.TextBadge, {
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
    let u = (0, l.jsx)(ea.default, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(eh.default, {
        className: eL.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: eL.gameWrapper,
      children: [(0, l.jsx)(el.default, {
        className: eL.gameIcon,
        game: t
      }), (0, l.jsxs)("div", {
        className: eL.info,
        children: [(0, l.jsx)(ea.default, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(ep.default, {
            className: eL.activityName,
            children: t.name
          })
        }), (0, k.isTextChannel)(a.type) ? u : (0, l.jsx)(ex, {
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
      } = this.props, l = null != t && (0, k.isVoiceChannel)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, C.createBroadcastChannelOrStartStream)({
        channelId: l.id,
        pid: n.pid
      }) : (0, A.startBroadcastForStream)((0, P.encodeStreamKey)(e), n.pid))
    }), ev(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: a
      } = this.props, s = null != t && (0, k.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
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
      } = this.props, l = null != t && (0, k.isVoiceChannel)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, v.openStopBroadcastConfirmModal)(() => (0, H.default)(e));
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
      }), (0, h.openModal)(e, !1)
    }), ev(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, O.getDrop)(e);
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
      (0, S.stopEmbeddedActivity)({
        channelId: t.id,
        applicationId: e
      })
    }), ev(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(R.default, {})
    }), ev(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, k.isVoiceChannel)(t.type) && p.default.selectParticipant(t.id, n.applicationId), m.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eI.ME, t.id), (0, k.isTextChannel)(t.type) && (0, S.updateActivityPanelMode)(eN.ActivityPanelModes.PANEL)
    })
  }
}
t.default = (0, E.default)(function(e) {
  var t;
  let {
    guildId: n,
    ...a
  } = e, s = (0, u.useStateFromStores)([K.default], () => K.default.getId()), i = (0, u.useStateFromStores)([j.default, en.default], () => (0, B.default)(j.default, en.default)), r = (0, u.useStateFromStores)([$.default, W.default], () => W.default.getChannel($.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([I.default], () => I.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([W.default], () => W.default.getChannel(o)), f = (0, u.useStateFromStores)([z.default], () => z.default.getGuild(null == c ? void 0 : c.guild_id)), [h, p] = (0, u.useStateFromStoresArray)([Y.default], () => [Y.default.getCurrentUserActiveStream(), Y.default.getStreamerActiveStreamMetadata()]), m = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), C = (0, u.useStateFromStores)([M.default], () => M.default.getActivityPanelTooltipAction()), {
    partnerGame: g,
    dropsActivityPanelExperienceBlocked: E,
    showDropsSparkles: S
  } = (0, y.useActivityPanelDrop)(eT.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), N = (0, u.useStateFromStores)([I.default], () => null != c ? I.default.getSelfEmbeddedActivityForChannel(c.id) : null), A = (0, u.useStateFromStores)([z.default, Q.default, Z.default], () => null != r ? G.canStreamInChannel(r, z.default, Q.default, !1) : null != n && G.getStreamEligibleChannels(Z.default.getChannels(n), z.default, Q.default).length > 0), [v] = (0, T.default)([null !== (t = function() {
    if (null != p && null != p.id) return p.id;
    if (null != i && null != i.id) return i.id;
    if (null != N) return N.applicationId
  }()) && void 0 !== t ? t : ""]), R = (0, u.useStateFromStores)([X.default], () => (0, U.default)(X.default) && (0, eE.isWindows)()), O = (0, u.useStateFromStores)([q.default], () => null != s ? q.default.findActivity(s, e => e.type === eI.ActivityTypes.PLAYING) : null), b = null != h && h.ownerId === s && h.state !== eI.ApplicationStreamStates.ENDED, D = (0, u.useStateFromStores)([ee.default], () => ee.default.getBroadcast()), P = (0, L.default)() && null != i, w = (0, u.useStateFromStores)([et.default, J.default], () => null != c ? (0, x.computeChannelName)(c, et.default, J.default) : void 0), F = (0, V.default)(null == r ? void 0 : r.id, s);
  return (0, l.jsx)(eR, {
    ...a,
    guildId: n,
    canGoLive: R,
    activity: O,
    embeddedActivity: N,
    showDropsSparkles: S,
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
    canStartBroadcast: P,
    channelName: w,
    guildForConnectedChannel: f,
    streamQualityIndicator: F
  })
})