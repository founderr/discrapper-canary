n.d(t, {
  Z: function() {
    return Y
  }
}), n(47120), n(411104);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(442837),
  a = n(481060),
  o = n(475179),
  u = n(239091),
  c = n(146773),
  d = n(888651),
  h = n(201895),
  p = n(305325),
  g = n(281956),
  m = n(66999),
  C = n(506936),
  E = n(359110),
  f = n(922482),
  _ = n(431328),
  I = n(501655),
  N = n(427679),
  Z = n(71275),
  S = n(201469),
  x = n(680089),
  L = n(592125),
  T = n(430824),
  v = n(607744),
  A = n(496675),
  M = n(306680),
  R = n(9156),
  O = n(979651),
  P = n(514342),
  b = n(934415),
  j = n(98597),
  y = n(648501),
  D = n(473403),
  U = n(207055),
  G = n(981631),
  w = n(647086),
  k = n(689938),
  B = n(47705),
  V = n(954427);

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class F extends j.ZP {
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
    return (0, b.rY)(e, O.Z, T.Z)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return B.containerUserOver;
    if (null != t) return e > t ? B.containerDragAfter : B.containerDragBefore;
    return B.containerDefault
  }
  renderVoiceUsers() {
    let {
      channel: e,
      collapsed: t,
      tabIndex: n,
      speakerVoiceStates: i,
      numAudience: s
    } = this.props;
    return (0, l.jsx)(U.Z, {
      channel: e,
      voiceStates: i,
      collapsed: t,
      tabIndex: n,
      location: G.Sbl.GUILD_CHANNEL_LIST,
      numAudience: s
    })
  }
  renderChannelInfo() {
    return this.props.channelInfo
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      locked: i,
      connectChannelDropTarget: r,
      connectChannelDragSource: o,
      connectUserDropTarget: u,
      connectDragPreview: c,
      canReorderChannel: d,
      canMoveMembers: p,
      stageInstance: g,
      isSubscriptionGated: m,
      needSubscriptionToAccess: C,
      unread: E,
      resolvedUnreadSetting: f,
      mentionCount: _,
      isFavoriteSuggestion: I
    } = this.props, {
      shouldShowGuildVerificationPopout: N
    } = this.state, Z = this.getVoiceStatesCount(), S = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [B.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, l.jsx)(a.Popout, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: N,
        children: () => (0, l.jsx)(a.Tooltip, {
          text: this.getTooltipText(),
          children: r => {
            let {
              onClick: a,
              onContextMenu: o,
              ...u
            } = r;
            return (0, l.jsxs)(D.Z, {
              className: B.iconVisibility,
              iconClassName: s()({
                [V.iconLive]: null != g
              }),
              channel: e,
              selected: !I && t,
              connected: n,
              unread: n ? E : void 0,
              resolvedUnreadSetting: f,
              mentionCount: _,
              locked: i,
              onClick: () => {
                this.handleClick(), null == a || a()
              },
              onContextMenu: e => {
                this.handleContextMenu(e), null == o || o()
              },
              connectDragPreview: c,
              subtitle: this.renderSubtitle(),
              isFavoriteSuggestion: I,
              "aria-label": (0, h.ZP)({
                channel: e,
                unread: E,
                mentionCount: _,
                userCount: Z,
                isSubscriptionGated: m,
                needSubscriptionToAccess: C
              }),
              ...u,
              children: [I && this.renderAcceptSuggestionButton(), I && this.renderRemoveSuggestionButton(), !I && this.renderOpenChatButton(), !I && this.renderInviteButton(), !I && this.renderEditButton(), !I && this.renderChannelInfo()]
            })
          }
        })
      }), this.renderVoiceUsers()]
    });
    return p && (S = u(S)), d && (S = r(o(S))), S
  }
  constructor(...e) {
    super(...e), H(this, "state", {
      shouldShowGuildVerificationPopout: !1
    }), H(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), H(this, "handleClick", () => {
      let {
        channel: e,
        locked: t,
        connected: n,
        unverifiedAccount: l
      } = this.props, i = e.getGuildId();
      null != i && (0, g.n)(i) && (0, p.hk)(i), l && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, f.Cq)(e), !__OVERLAY__ && (0, E.Kh)(e.id)
    }), H(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      !__OVERLAY__ && !t && (0, E.Kh)(e.id)
    }), H(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = T.Z.getGuild(t.getGuildId());
      if (null != i)(0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331")]).then(n.bind(n, 213202));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: i
        })
      })
    }), H(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, l.jsx)(C.Z, {
        type: C.R.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), H(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, l.jsx)(a.Tooltip, {
        text: k.Z.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: i,
            onMouseLeave: r,
            onFocus: u,
            onBlur: c
          } = t;
          return (0, l.jsx)(a.Clickable, {
            className: s()(B.iconItem, n ? B.alwaysShown : null),
            onClick: () => {
              o.Z.updateChatOpen(e.id, !0), this.handleClickChat()
            },
            "aria-label": k.Z.Messages.OPEN_CHAT,
            onMouseEnter: i,
            onMouseLeave: r,
            onFocus: u,
            onBlur: c,
            children: (0, l.jsx)(a.ChatIcon, {
              size: "xs",
              color: "currentColor",
              className: B.actionIcon
            })
          })
        }
      })
    }), H(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? k.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    }), H(this, "renderSubtitle", () => {
      var e;
      let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
      return null == t ? null : (0, l.jsx)(P.Z, {
        children: t
      })
    })
  }
}
let W = (0, c.B)((0, d.Q)(F));

function Y(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: i,
    isFavoriteCategory: s,
    collapsed: a,
    voiceStates: o
  } = e, u = (0, r.cj)([M.ZP], () => ({
    unread: M.ZP.hasUnread(n.id),
    mentionCount: M.ZP.getMentionCount(n.id)
  })), c = (0, r.e7)([R.ZP], () => R.ZP.resolveUnreadSetting(n)), d = (0, r.cj)([L.Z, v.Z, A.Z], () => {
    let e = L.Z.getChannel(n.parent_id),
      l = v.Z.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && A.Z.can(G.Plq.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== i && (t.id === w._ || (null != e ? A.Z.can(G.Plq.MANAGE_CHANNELS, e) : A.Z.can(G.Plq.MANAGE_CHANNELS, t))),
      canMoveMembers: A.Z.can(G.Plq.MOVE_MEMBERS, n),
      locked: !A.Z.can(G.Plq.CONNECT, n),
      bypassLimit: A.Z.can(G.Plq.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), h = (0, r.e7)([x.Z], () => x.Z.isCollapsed(n.parent_id)), p = (0, S.ZP)(n.id), g = (0, r.e7)([N.Z], () => N.Z.getStageInstanceByChannel(n.id), [n.id]), C = (0, _.Rk)(n.id, I.pV.AUDIENCE), {
    isSubscriptionGated: E,
    needSubscriptionToAccess: f
  } = (0, m.Z)(n.id), T = (0, r.e7)([R.ZP], () => R.ZP.isFavorite(t.id, n.id)), O = (0, Z.xJ)(n.id), P = (0, y.Z)({
    channel: n,
    isChannelSelected: !1,
    isChannelCollapsed: a,
    voiceStates: o,
    isSubscriptionGated: E,
    needSubscriptionToAccess: f,
    enableConnectedUserLimit: O || n.userLimit > 0 && n.userLimit < G.xGv
  }), b = e.connected && null == P;
  return (0, l.jsx)(W, {
    categoryCollapsed: h,
    connectAction: p,
    numAudience: C,
    stageInstance: g,
    isSubscriptionGated: E,
    needSubscriptionToAccess: f,
    ...u,
    ...d,
    ...e,
    isFavoriteSuggestion: s && !T,
    forceShowButtons: b,
    channelInfo: P,
    resolvedUnreadSetting: c
  })
}