n.d(t, {
  Z: function() {
    return J
  }
}), n(47120), n(411104);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(442837),
  a = n(846519),
  o = n(481060),
  u = n(475179),
  c = n(239091),
  d = n(146773),
  h = n(888651),
  p = n(619915),
  g = n(339340),
  m = n(201895),
  C = n(718589),
  E = n(933557),
  f = n(557135),
  _ = n(873696),
  I = n(446226),
  N = n(305325),
  Z = n(281956),
  S = n(66999),
  x = n(554747),
  L = n(506936),
  T = n(574176),
  v = n(359110),
  A = n(155409),
  M = n(695346),
  R = n(592125),
  O = n(430824),
  P = n(607744),
  b = n(496675),
  j = n(306680),
  y = n(9156),
  D = n(979651),
  U = n(934415),
  G = n(98597),
  w = n(648501),
  k = n(473403),
  B = n(830993),
  V = n(653577),
  H = n(207055),
  F = n(981631),
  W = n(647086),
  Y = n(689938),
  z = n(47705);

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class q extends G.ZP {
  componentWillUnmount() {
    this.activitiesHideTimeout.stop()
  }
  getVoiceStatesCount() {
    var e;
    let {
      voiceStates: t
    } = this.props;
    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
  }
  isFull() {
    let {
      channel: e
    } = this.props;
    return (0, U.rY)(e, D.Z, O.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return z.containerUserOver;
    if (null != t) return e > t ? z.containerDragAfter : z.containerDragBefore;
    return z.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      enableHangStatus: i,
      allowChannelTopic: s
    } = this.props, r = null === (e = (0, _.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, {
      hovered: a
    } = this.state;
    return (0, l.jsx)(V.Z, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: r,
      hovered: a,
      enableHangStatus: i,
      allowChannelTopic: s
    })
  }
  renderVoiceUsers() {
    let {
      channel: e,
      voiceStates: t,
      collapsed: n,
      withGuildIcon: i,
      tabIndex: s
    } = this.props;
    return (0, l.jsx)(H.Z, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: i,
      tabIndex: s,
      location: F.Sbl.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, l.jsx)("div", {
      className: z.channelInfo,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      unread: i,
      resolvedUnreadSetting: r,
      mentionCount: a,
      locked: u,
      sorting: c,
      isUserOver: d,
      connectChannelDropTarget: h,
      connectChannelDragSource: p,
      connectUserDropTarget: g,
      connectDragPreview: E,
      canReorderChannel: f,
      canMoveMembers: _,
      showTutorial: I,
      hasActiveEvent: N,
      embeddedApps: Z,
      isSubscriptionGated: S,
      isFavoriteSuggestion: x,
      withGuildIcon: L
    } = this.props, {
      shouldShowActivities: T,
      shouldShowGuildVerificationPopout: v
    } = this.state, M = this.getVoiceStatesCount(), R = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [z.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, l.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, l.jsx)(o.Popout, {
          position: "right",
          renderPopout: this.renderPopout,
          spacing: 0,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: T && !c && !d && !v || v,
          children: () => (0, l.jsx)(o.Tooltip, {
            text: this.getTooltipText(),
            children: o => {
              let {
                onClick: c,
                onContextMenu: d,
                ...h
              } = o;
              return (0, l.jsxs)(k.Z, {
                className: z.iconVisibility,
                iconClassName: s()({
                  [z.iconLive]: N
                }),
                channel: e,
                selected: !x && t,
                connected: n,
                unread: n ? i : void 0,
                resolvedUnreadSetting: r,
                mentionCount: a,
                locked: u,
                subtitle: this.renderSubtitle(),
                onClick: () => {
                  this.handleClick(), null == c || c()
                },
                onContextMenu: e => {
                  this.handleContextMenu(e), null == d || d()
                },
                connectDragPreview: E,
                isFavoriteSuggestion: x,
                "aria-label": (0, m.ZP)({
                  channel: e,
                  unread: i,
                  mentionCount: a,
                  userCount: M,
                  embeddedActivitiesCount: Z.length,
                  isSubscriptionGated: S
                }),
                "aria-describedby": (0, C.Z)({
                  channel: e,
                  embeddedApps: Z
                }),
                withGuildIcon: L,
                ...h,
                children: [x && this.renderAcceptSuggestionButton(), x && this.renderRemoveSuggestionButton(), !x && this.renderOpenChatButton(), !x && this.renderInviteButton(), !x && this.renderEditButton(), !x && this.renderChannelInfo()]
              })
            }
          })
        })
      }), this.renderVoiceUsers()]
    });
    return _ && (R = g(R)), f && (R = h(p(R))), I && (R = (0, l.jsx)(A.Z, {
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: -20,
      children: R
    })), R
  }
  constructor(...e) {
    super(...e), K(this, "state", {
      shouldShowActivities: !1,
      shouldShowGuildVerificationPopout: !1,
      hovered: !1
    }), K(this, "activitiesHideTimeout", new a.V7), K(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), K(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: l,
        needSubscriptionToAccess: i
      } = this.props;
      l && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), f.Z.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: i,
        locked: e
      })
    }), K(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = O.Z.getGuild(t.getGuildId());
      null != i && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331")]).then(n.bind(n, 213202));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: i
        })
      })
    }), K(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !0,
        hovered: !0
      })
    }), K(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: !1,
        hovered: !1
      }))
    }), K(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !1
      })
    }), K(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, Z.n)(t) && (0, N.hk)(t), this.handleVoiceConnect()
    }), K(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: i
      } = this.props;
      t && (e.stopPropagation(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 339340));
        return t => (0, l.jsx)(e, {
          channel: i,
          ...t
        })
      }, {
        modalKey: g.VOICE_CHANNEL_STATUS_MODAL_KEY
      }))
    }), K(this, "renderPopout", () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: i,
        selected: s,
        guild: r
      } = this.props, {
        shouldShowActivities: a,
        shouldShowGuildVerificationPopout: o
      } = this.state;
      if (a && !n && !i && !o) {
        let n = M.SE.getSetting().includes(r.id);
        return (0, l.jsx)(B.Z, {
          onAction: this.closePopout,
          guild: r,
          channel: e,
          voiceStates: t,
          isChannelSelected: s,
          shouldShowSettingNudge: n
        })
      }
      if (o) return (0, l.jsx)(L.Z, {
        type: L.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), K(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, l.jsx)(o.Tooltip, {
        text: Y.Z.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: r,
            onFocus: a,
            onBlur: c
          } = t;
          return (0, l.jsx)(o.Clickable, {
            className: s()(z.iconItem, n ? z.alwaysShown : null),
            onClick: () => {
              u.Z.updateChatOpen(e.id, !0), (0, v.Kh)(e.id)
            },
            "aria-label": Y.Z.Messages.OPEN_CHAT,
            onMouseEnter: i,
            onMouseLeave: r,
            onFocus: a,
            onBlur: c,
            children: (0, l.jsx)(o.ChatIcon, {
              size: "xs",
              color: "currentColor",
              className: z.actionIcon
            })
          })
        }
      })
    }), K(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? Y.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    })
  }
}
let Q = (0, d.B)((0, h.Q)(q));

function J(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: s,
    selected: a,
    collapsed: o,
    voiceStates: u
  } = e, c = (0, r.cj)([j.ZP], () => ({
    unread: j.ZP.hasUnread(n.id),
    mentionCount: j.ZP.getMentionCount(n.id)
  })), d = (0, r.e7)([y.ZP], () => y.ZP.resolveUnreadSetting(n)), h = (0, r.cj)([R.Z, P.Z, b.Z], () => {
    let e = R.Z.getChannel(n.parent_id),
      l = P.Z.getCheck(n.guild_id);
    return {
      canManageChannel: b.Z.can(F.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== i && (t.id === W._ || (null != e ? b.Z.can(F.Plq.MANAGE_CHANNELS, e) : b.Z.can(F.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: b.Z.can(F.Plq.MOVE_MEMBERS, n),
      locked: !b.Z.can(F.Plq.CONNECT, n),
      bypassLimit: b.Z.can(F.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), g = (0, r.e7)([D.Z], () => D.Z.hasVideo(n.id)), m = (0, p.ZP)(n), C = (0, E.ZP)(n), f = (0, x.qY)(n.id), {
    isSubscriptionGated: _,
    needSubscriptionToAccess: N
  } = (0, S.Z)(n.id), Z = (0, I.Z)(), L = (0, r.e7)([y.ZP], () => y.ZP.isFavorite(t.id, n.id)), v = e.connected || (null == Z ? void 0 : Z.channelId) === n.id, {
    enableHangStatus: A,
    allowChannelTopic: M
  } = T.n.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: !1
  }), O = (0, w.Z)({
    channel: n,
    isChannelSelected: a,
    isChannelCollapsed: o,
    voiceStates: u,
    isSubscriptionGated: _,
    needSubscriptionToAccess: N,
    enableConnectedUserLimit: !0,
    enableActivities: !0
  }), U = v && null == O;
  return (0, l.jsx)(Q, {
    channelName: C,
    embeddedApps: m,
    embeddedActivityType: F.IIU.PLAYING,
    video: g,
    hasActiveEvent: null != f,
    isSubscriptionGated: _,
    needSubscriptionToAccess: N,
    ...c,
    ...h,
    ...e,
    connected: v,
    isFavoriteSuggestion: s && !L,
    forceShowButtons: U,
    channelInfo: O,
    enableHangStatus: A,
    allowChannelTopic: M,
    resolvedUnreadSetting: d
  })
}