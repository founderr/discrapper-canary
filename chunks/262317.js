"use strict";
n.r(t), n.d(t, {
  AudienceVoiceUser: function() {
    return k
  },
  MoreVoiceUser: function() {
    return w
  }
}), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("149765"),
  u = n("846519"),
  d = n("481060"),
  c = n("475179"),
  f = n("239091"),
  h = n("287734"),
  m = n("872810"),
  p = n("888651"),
  E = n("100527"),
  C = n("258609"),
  g = n("257115"),
  S = n("569545"),
  _ = n("102172"),
  T = n("525925"),
  I = n("701362"),
  A = n("224184"),
  v = n("484459"),
  x = n("103575"),
  N = n("314897"),
  M = n("430824"),
  y = n("496675"),
  R = n("979651"),
  L = n("242315"),
  j = n("805009"),
  O = n("981631"),
  P = n("927923"),
  D = n("70722"),
  b = n("689938"),
  U = n("502375");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function w(e) {
  let {
    numUsers: t
  } = e;
  return (0, l.jsx)("div", {
    className: U.moreContainer,
    children: (0, l.jsxs)(d.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function k(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, a = n ? t : b.default.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, l.jsxs)("div", {
    className: r()(U.audienceContainer, {
      [U.audienceContainerCollapsed]: n
    }),
    children: [(0, l.jsx)("div", {
      className: U.audienceIconContainer,
      children: (0, l.jsx)(L.default, {
        className: U.audienceIcon
      })
    }), (0, l.jsx)(d.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: a
    })]
  })
}
class H extends(a = s.PureComponent) {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, _.canWatchStream)(e, R.default, M.default, y.default, C.default)[0]
  }
  render() {
    let {
      userPopoutOpen: e
    } = this.state, {
      connectUserDragSource: t,
      canDrag: n,
      isSelfOnOtherClient: a,
      user: s,
      channel: i
    } = this.props, r = (0, l.jsx)("div", {
      className: U.draggable,
      "data-dnd-name": i.name,
      onMouseEnter: a ? void 0 : this.handleMouseEnter,
      onMouseLeave: a ? void 0 : this.handleHidePreview,
      children: (0, l.jsx)(d.Popout, {
        preload: () => (0, v.maybeFetchUserProfileForPopout)(s.id, s.getAvatarURL(i.guild_id, 80), {
          guildId: i.guild_id,
          channelId: i.id
        }),
        position: "right",
        renderPopout: this.renderUserPopout,
        shouldShow: e,
        onRequestClose: this.handleCloseUserPopout,
        children: e => this.renderUser(e)
      })
    });
    return n ? t(r) : r
  }
  constructor(...e) {
    super(...e), F(this, "domElementRef", s.createRef()), F(this, "state", {
      userPopoutOpen: !1,
      isHoveringHangStatus: !1
    }), F(this, "setIsHoveringHangStatusDelayed", new u.DelayedCall(500, () => {
      this.setState({
        isHoveringHangStatus: !0
      })
    })), F(this, "handleClickUser", () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }), F(this, "handleCloseUserPopout", () => {
      this.setState({
        userPopoutOpen: !1
      })
    }), F(this, "handleHidePreview", () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: a
      } = this.props;
      (t || a) && (null == e || e(n.id)), this.setState({
        isHoveringHangStatus: !1
      })
    }), F(this, "handleMouseEnter", () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: a
      } = this.props;
      (n || a) && (null == t || t(e.id))
    }), F(this, "handleHoverHangStatus", e => {
      let {
        previewIsOpen: t
      } = this.props;
      e && t ? this.setIsHoveringHangStatusDelayed.delay() : !e && this.setIsHoveringHangStatusDelayed.isDelayed() && this.setIsHoveringHangStatusDelayed.cancel()
    }), F(this, "handleHoverIcons", e => {
      e && (this.setIsHoveringHangStatusDelayed.cancel(), this.setState({
        isHoveringHangStatus: !1
      }))
    }), F(this, "handleWatchStream", () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: a
      } = this.props;
      if (!this.canWatchStream) return;
      let l = {
        streamType: D.StreamTypes.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      N.default.getId() !== e.id && h.default.selectVoiceChannel(t.id), n ? ((0, T.default)(l), c.default.selectParticipant(l.channelId, (0, S.encodeStreamKey)(l))) : (0, m.watchStreamAndTransitionToStream)(l), null == a || a(e.id)
    }), F(this, "handleJoinVoice", () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      y.default.can(o.combine(O.Permissions.CONNECT, O.Permissions.VIEW_CHANNEL), t) && (h.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }), F(this, "handleUserContextMenu", e => {
      let {
        channel: t,
        user: a
      } = this.props;
      (0, f.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717"), n.e("23101")]).then(n.bind(n, "757387"));
        return n => (0, l.jsx)(e, {
          ...n,
          user: a,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }), F(this, "renderUserPopout", e => {
      let {
        channel: t,
        user: n
      } = this.props, a = t.getGuildId();
      return (0, l.jsx)(x.default, {
        location: "VoiceUser",
        userId: n.id,
        guildId: null != a ? a : void 0,
        channelId: t.id,
        newAnalyticsLocations: [E.default.VOICE_USER],
        ...e
      })
    }), F(this, "renderStreamPopout", () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: a
      } = this.props;
      return (0, l.jsx)(I.default, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: a
      })
    }), F(this, "renderHangStatusPopout", () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: a
      } = this.props;
      return (0, l.jsx)(A.default, {
        userId: n.id,
        channel: a,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }), F(this, "renderUser", e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: a,
        shouldShowPreview: s,
        mute: i,
        localMute: o,
        localVideoDisabled: u,
        speaking: c,
        user: f,
        deaf: h,
        priority: m,
        collapsed: p,
        isStreaming: E,
        isGuest: C,
        nick: S,
        video: _,
        serverMute: T,
        serverDeaf: I,
        tabIndex: A,
        embeddedApplication: v,
        channel: x,
        hangStatusActivity: N,
        showHangStatus: M,
        isSelf: y,
        application: R
      } = this.props, {
        userPopoutOpen: L,
        isHoveringHangStatus: O
      } = this.state, D = P.GAME_CONSOLE_SESSIONS.has(null != n ? n : ""), F = {
        user: f,
        speaking: c,
        mute: i,
        localMute: o,
        localVideoDisabled: u,
        isStreaming: E,
        isGuest: C,
        video: _,
        priority: m,
        deaf: h,
        nick: S,
        collapsed: p,
        overlap: p,
        serverMute: T,
        serverDeaf: I,
        tabIndex: A,
        otherClientSessionType: n,
        voicePlatform: a,
        embeddedApplication: v,
        avatarContainerClass: r()({
          [U.userAvatar]: !0
        }),
        disabled: t && !D,
        selected: L,
        onClick: D ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: x.guild_id,
        hangStatusActivity: N,
        showHangStatus: M,
        isSelf: y,
        application: R,
        channelId: x.id
      };
      if (t) {
        var w;
        return (0, l.jsx)(d.Tooltip, {
          text: null !== (w = (0, g.default)(n)) && void 0 !== w ? w : b.default.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...a
            } = e;
            return (0, l.jsx)(j.default, {
              ...F,
              ...a
            })
          }
        })
      }
      return (0, l.jsx)(d.Popout, {
        position: "right",
        renderPopout: M && O || !E ? this.renderHangStatusPopout : this.renderStreamPopout,
        shouldShow: s && !L,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, l.jsx)(j.default, {
          ...F,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          handleHoverHangStatus: this.handleHoverHangStatus,
          handleHoverIcons: this.handleHoverIcons
        })
      })
    })
  }
}
F(H, "defaultProps", {
  isSelfOnOtherClient: !1
}), t.default = (0, p.makeVoiceUserDraggable)(H)