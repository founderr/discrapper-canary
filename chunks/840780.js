n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(512722),
  o = n.n(a),
  u = n(442837),
  c = n(704215),
  d = n(692547),
  h = n(481060),
  g = n(988298),
  p = n(475179),
  m = n(925549),
  C = n(872810),
  E = n(438139),
  f = n(730749),
  _ = n(607070),
  I = n(566620),
  N = n(317381),
  Z = n(620662),
  S = n(835473),
  x = n(67212),
  T = n(757454),
  L = n(552740),
  v = n(933557),
  A = n(311352),
  M = n(730417),
  R = n(524347),
  O = n(853197),
  P = n(616360),
  j = n(858064),
  b = n(594190),
  D = n(569545),
  y = n(382182),
  U = n(74299),
  G = n(914923),
  w = n(165393),
  k = n(989941),
  B = n(803647),
  V = n(231664),
  H = n(759198),
  F = n(131704),
  W = n(199902),
  Y = n(314897),
  z = n(592125),
  K = n(984933),
  q = n(430824),
  Q = n(131951),
  J = n(496675),
  X = n(158776),
  $ = n(699516),
  ee = n(944486),
  et = n(885110),
  en = n(594174),
  el = n(449224),
  ei = n(366695),
  es = n(672752),
  er = n(499150),
  ea = n(976401),
  eo = n(333454),
  eu = n(864441),
  ec = n(368666),
  ed = n(626135),
  eh = n(358085),
  eg = n(793224),
  ep = n(978769),
  em = n(981631),
  eC = n(918559),
  eE = n(702512),
  ef = n(689938),
  e_ = n(488320);

function eI(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eN = (0, E.Z)(function(e) {
  let {
    message: t
  } = e;
  return (0, l.jsx)(eo.Z, {
    children: t
  })
});
class eZ extends i.PureComponent {
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
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === em.IIU.PLAYING && (0, Z.Z)(t, em.xjy.JOIN))
  }
  renderGoLiveButton() {
    let e, t, n, i;
    let {
      canGoLive: s,
      guildId: r,
      isStreaming: a,
      channel: o,
      canStream: u,
      runningGame: c,
      embeddedActivity: d
    } = this.props;
    return (null != c || null == d) && (a || s && null != c) ? (a ? (e = !1, t = this.handleClickStopStreamingButton, n = h.ScreenXIcon, i = ef.Z.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = h.ScreenArrowIcon, i = null != c ? ef.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
      game: c.name
    }) : ef.Z.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = h.ScreenArrowIcon, i = null != o && (0, F.vd)(o.type) ? ef.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != r ? ef.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : ef.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
      className: e_.panelButtonContainer,
      children: (0, l.jsx)(ea.Z, {
        tooltipText: i,
        disabled: e,
        onClick: t,
        icon: n
      })
    })) : null
  }
  renderInviteButton() {
    let {
      embeddedActivity: e
    } = this.props;
    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ea.Z, {
      tooltipText: ef.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
      onClick: this.handleClickInviteButton,
      icon: h.GroupPlusIcon,
      iconForeground: e_.__invalid_actionIcon
    }) : null
  }
  renderDropsButton() {
    let {
      dropsTooltipAction: e,
      dropsPartnerGame: t
    } = this.props;
    if (null == t) return null;
    let n = this.state.isDropsActivityPanelTooltipOpen,
      i = () => this.setState({
        isDropsActivityPanelTooltipOpen: !1
      });
    return (0, l.jsx)(h.Popout, {
      shouldShow: n,
      position: "top",
      align: "center",
      onRequestClose: i,
      renderPopout: () => (0, l.jsx)(j.Z, {
        partnerGame: t,
        tooltipAction: e,
        onClose: i
      }),
      children: () => (0, l.jsxs)(l.Fragment, {
        children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ea.Z, {
          "aria-label": ef.Z.Messages.DROPS_ENABLED,
          tooltipText: n ? null : ef.Z.Messages.DROPS_ENABLED,
          onClick: this.handleClickDropsButton,
          icon: P.Z
        })]
      })
    })
  }
  renderLeaveEmbeddedActivityButton() {
    let {
      embeddedActivity: e,
      channel: t
    } = this.props;
    return null == e || null == t ? null : (0, l.jsx)(ea.Z, {
      tooltipText: ef.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
      onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
      icon: h.DoorExitIcon,
      iconForeground: e_.__invalid_actionIcon
    })
  }
  renderBroadcastButton() {
    let {
      channel: e
    } = this.props;
    return null != e && (0, F.vd)(e.type) ? null : (0, l.jsx)(eg.Z, {})
  }
  renderBroadcastSettingsButton() {
    let {
      broadcast: e
    } = this.props;
    return null == e ? null : (0, l.jsx)(ep.Z, {})
  }
  renderSparkles() {
    let {
      useReducedMotion: e
    } = this.props;
    async function t() {
      let {
        default: e
      } = await n.e("5217").then(n.t.bind(n, 801048, 19));
      return e
    }
    return (0, l.jsx)("div", {
      className: e_.sparkleContainer,
      children: (0, l.jsx)(h.LottieAnimation, {
        importData: t,
        shouldAnimate: !e,
        className: e_.sparkles
      })
    })
  }
  renderActions() {
    let e = this.renderGoLiveButton(),
      t = this.renderDropsButton(),
      n = this.renderInviteButton(),
      i = this.renderLeaveEmbeddedActivityButton(),
      s = this.renderClipsButton(),
      r = this.renderBroadcastButton(),
      a = this.renderBroadcastSettingsButton();
    return null == e && null == n && null == i ? null : (0, l.jsxs)("div", {
      className: e_.actions,
      children: [r, e, a, n, null == e ? i : s, t]
    })
  }
  getGameName() {
    let {
      runningGame: e,
      application: t
    } = this.props;
    return null != t ? t.name : null != e ? e.name : ef.Z.Messages.STATUS_UNKNOWN
  }
  renderGame() {
    let {
      isStreaming: e,
      dropsPartnerGame: t,
      application: n,
      runningGame: i
    } = this.props, s = this.getGameName();
    return (0, l.jsxs)("div", {
      className: r()(e_.gameWrapper, {
        [e_.clickableGameWrapper]: null != n
      }),
      children: [(0, l.jsxs)("div", {
        className: e_.gameIconWrapper,
        children: [(0, l.jsx)(ei.Z, {
          className: e_.gameIcon,
          game: n,
          pid: null == i ? void 0 : i.pid
        }), e ? (0, l.jsx)(h.VideoIcon, {
          size: "md",
          color: "currentColor",
          className: e_.liveBadge
        }) : null]
      }), (0, l.jsx)("div", {
        className: r()(e_.info, {
          [e_.infoWithDrops]: null != t
        }),
        children: null != s ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(eu.Z, {
            children: s
          }), null != t && (0, l.jsx)("div", {
            className: e_.dropsBadgeWrapper,
            children: (0, l.jsx)(h.TextBadge, {
              text: ef.Z.Messages.DROPS_AVAILABLE,
              color: d.Z.unsafe_rawColors.BRAND_500.css,
              className: e_.dropsBadge
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
      streamQualityIndicator: i
    } = this.props, {
      title: s,
      sanitizedTitle: a
    } = (0, G.Z)(n);
    return (0, l.jsxs)("div", {
      className: e_.gameWrapper,
      children: [e ? (0, l.jsx)(w.Z, {
        title: a
      }) : (0, l.jsx)(ec.ZP, {
        look: ec.ZP.Looks.GRAY,
        size: ec.ZP.Sizes.SMALL,
        className: e_.liveIndicator
      }), (0, l.jsxs)("div", {
        className: r()(e_.info, {
          [e_.infoWithDrops]: null != t
        }),
        children: [(0, l.jsx)(eu.Z, {
          children: s
        }), null != i && (0, l.jsxs)("div", {
          className: e_.perksDemoContainer,
          children: [(0, l.jsx)(h.NitroWheelIcon, {
            size: "xxs",
            color: es.JX.PREMIUM_TIER_2
          }), (0, l.jsx)(H.Z, {
            className: e_.perksDemoText,
            variant: "text-xxs/semibold",
            children: i
          })]
        }), null != t && (0, l.jsx)("div", {
          className: e_.dropsBadgeWrapper,
          children: (0, l.jsx)(h.TextBadge, {
            text: ef.Z.Messages.DROPS_AVAILABLE,
            color: d.Z.unsafe_rawColors.BRAND_500.css,
            className: e_.dropsBadge
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
      channel: i,
      channelName: s,
      guildForConnectedChannel: r
    } = this.props;
    if (null == n || null == i || null == t) return null;
    let a = {
        start: n.connectedSince
      },
      o = s;
    null != r ? (e = em.Z5c.CHANNEL(r.id, i.id), o = "".concat(o, " / ").concat(r.name)) : e = em.Z5c.CHANNEL(em.ME, i.id);
    let u = (0, l.jsx)(er.Z, {
      href: e,
      onClick: this.handleApplicationLinkClick,
      children: (0, l.jsx)(eo.Z, {
        className: e_.channel,
        children: o
      })
    });
    return (0, l.jsxs)("div", {
      className: e_.gameWrapper,
      children: [(0, l.jsx)(ei.Z, {
        className: e_.gameIcon,
        game: t,
        size: ei.Z.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: e_.info,
        children: [(0, l.jsx)(er.Z, {
          href: e,
          onClick: this.handleApplicationLinkClick,
          children: (0, l.jsx)(eu.Z, {
            className: e_.activityName,
            children: t.name
          })
        }), (0, F.Qm)(i.type) ? u : (0, l.jsx)(eN, {
          timestamps: a
        })]
      })]
    })
  }
  render() {
    let {
      canGoLive: e,
      embeddedActivity: t,
      runningGame: n,
      isStreaming: i,
      streamMetadata: s,
      className: a
    } = this.props;
    return i || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, l.jsx)("div", {
      className: r()(e_.panel, a),
      children: (0, l.jsxs)("div", {
        className: e_.body,
        children: [(() => null == n || i && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
      })
    }) : null
  }
  constructor(...e) {
    super(...e), eI(this, "modalKey", void 0), eI(this, "state", {
      isDropsActivityPanelTooltipOpen: !1,
      showDropsSparkles: this.props.showDropsSparkles
    }), eI(this, "startBroadcast", () => {
      let {
        stream: e,
        channel: t,
        runningGame: n
      } = this.props, l = null != t && (0, F.vd)(t.type) ? t : null;
      null != l && null != n && (null == e ? (0, C.tE)({
        channelId: l.id,
        pid: n.pid
      }) : (0, x.v$)((0, D.V9)(e), n.pid))
    }), eI(this, "handleClickGoLiveButton", () => {
      let {
        guildId: e,
        channel: t,
        canStartBroadcast: i
      } = this.props, s = null != t && (0, F.vd)(t.type) ? t : null, r = null != s ? s.getGuildId() : e;
      if ((null == s ? void 0 : s.isBroadcastChannel()) && i) {
        (0, L.D)(this.startBroadcast);
        return
      }(0, h.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, 60594));
        return t => (0, l.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: r,
          analyticsLocation: em.Sbl.ACTIVITY_PANEL
        })
      }).then(e => {
        null != e && (this.modalKey = e)
      })
    }), eI(this, "handleClickStopStreamingButton", () => {
      let {
        stream: e,
        channel: t,
        userId: n
      } = this.props, l = null != t && (0, F.vd)(t.type) ? t : null;
      if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
        (0, L.Z)(() => (0, B.Z)(e));
        return
      }(0, B.Z)(e)
    }), eI(this, "handleClickInviteButton", () => {
      let {
        activity: e,
        analyticsContext: t
      } = this.props;
      o()(null != e, "Received null activity"), ed.default.track(em.rMx.OPEN_MODAL, {
        type: "Send Join Invite",
        application_id: e.application_id,
        location: t.location
      }), (0, g.h7)(e, !1)
    }), eI(this, "handleClickDropsButton", () => {
      let {
        dropsPartnerGame: e,
        dropsTooltipAction: t,
        userId: n
      } = this.props;
      if (null == e) return;
      let l = (0, O.BS)(e);
      null != l && (ed.default.track(em.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
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
    }), eI(this, "handleClickLeaveEmbeddedActivityButton", (e, t) => () => {
      (0, I.mW)({
        channelId: t.id,
        applicationId: e
      })
    }), eI(this, "renderClipsButton", () => {
      let {
        stream: e
      } = this.props;
      return null == e ? null : (0, l.jsx)(A.Z, {})
    }), eI(this, "handleApplicationLinkClick", () => {
      var e;
      let {
        channel: t,
        embeddedActivity: n
      } = this.props;
      o()(null != t, "Channel is null during navigation click"), o()(null != n, "Activity null during navigation click"), (0, F.vd)(t.type) && p.Z.selectParticipant(t.id, n.applicationId), m.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : em.ME, t.id), (0, F.Qm)(t.type) && (0, I.tg)(eC.Ez.PANEL)
    })
  }
}
t.Z = (0, f.Z)(function(e) {
  var t;
  let {
    guildId: n,
    ...i
  } = e, s = (0, u.e7)([Y.default], () => Y.default.getId()), r = (0, u.e7)([b.ZP, el.Z], () => (0, k.Z)(b.ZP, el.Z)), a = (0, u.e7)([ee.Z, z.Z], () => z.Z.getChannel(ee.Z.getVoiceChannelId())), o = (0, u.e7)([N.ZP], () => N.ZP.getConnectedActivityChannelId()), d = (0, u.e7)([z.Z], () => z.Z.getChannel(o)), h = (0, u.e7)([q.Z], () => q.Z.getGuild(null == d ? void 0 : d.guild_id)), [g, p] = (0, u.Wu)([W.Z], () => [W.Z.getCurrentUserActiveStream(), W.Z.getStreamerActiveStreamMetadata()]), m = (0, u.e7)([_.Z], () => _.Z.useReducedMotion), C = (0, u.e7)([R.Z], () => R.Z.getActivityPanelTooltipAction()), {
    partnerGame: E,
    dropsActivityPanelExperienceBlocked: f,
    showDropsSparkles: I
  } = (0, M.c)(eE.X2.FORTNITE, r, c.z.QUEST_2_ENROLLMENT_TOOLTIP, c.z.QUEST_2_COMPLETION_TOOLTIP), Z = (0, u.e7)([N.ZP], () => null != d ? N.ZP.getSelfEmbeddedActivityForChannel(d.id) : null), x = (0, u.e7)([q.Z, J.Z, K.ZP], () => null != a ? y.JL(a, q.Z, J.Z, !1) : null != n && y.h_(K.ZP.getChannels(n), q.Z, J.Z).length > 0), [L] = (0, S.Z)([null !== (t = function() {
    if (null != p && null != p.id) return p.id;
    if (null != r && null != r.id) return r.id;
    if (null != Z) return Z.applicationId
  }()) && void 0 !== t ? t : ""]), A = (0, u.e7)([Q.Z], () => (0, U.Z)(Q.Z) && (0, eh.isWindows)()), O = (0, u.e7)([X.Z], () => null != s ? X.Z.findActivity(s, e => e.type === em.IIU.PLAYING) : null), P = null != g && g.ownerId === s && g.state !== em.jm8.ENDED, j = (0, u.e7)([et.Z], () => et.Z.getBroadcast()), D = (0, T.Z)() && null != r, G = (0, u.e7)([en.default, $.Z], () => null != d ? (0, v.F6)(d, en.default, $.Z) : void 0), w = (0, V.Z)(null == a ? void 0 : a.id, s);
  return (0, l.jsx)(eZ, {
    ...i,
    guildId: n,
    canGoLive: A,
    activity: O,
    embeddedActivity: Z,
    showDropsSparkles: I,
    dropsPartnerGame: E,
    dropsActivityPanelExperienceBlocked: f,
    userId: s,
    runningGame: r,
    application: L,
    useReducedMotion: m,
    isStreaming: P,
    channel: d,
    canStream: x,
    dropsTooltipAction: C,
    stream: g,
    streamMetadata: p,
    broadcast: j,
    canStartBroadcast: D,
    channelName: G,
    guildForConnectedChannel: h,
    streamQualityIndicator: w
  })
})