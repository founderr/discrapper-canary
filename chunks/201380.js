"use strict";
n.r(t), n.d(t, {
  MoreVoiceUser: function() {
    return b
  },
  AudienceVoiceUser: function() {
    return D
  },
  default: function() {
    return w
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("316693"),
  u = n("77078"),
  o = n("255397"),
  d = n("272030"),
  c = n("987317"),
  f = n("990766"),
  h = n("650912"),
  m = n("76393"),
  p = n("845038"),
  E = n("374014"),
  g = n("223913"),
  S = n("709463"),
  C = n("264429"),
  _ = n("930291"),
  I = n("506885"),
  T = n("981601"),
  v = n("271938"),
  x = n("305961"),
  N = n("957255"),
  A = n("800762"),
  M = n("272339"),
  R = n("68148"),
  j = n("49111"),
  L = n("171644"),
  y = n("706530"),
  O = n("782340"),
  P = n("698964");

function b(e) {
  let {
    numUsers: t
  } = e;
  return (0, l.jsx)("div", {
    className: P.moreContainer,
    children: (0, l.jsxs)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function D(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, a = n ? t : O.default.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, l.jsxs)("div", {
    className: i(P.audienceContainer, {
      [P.audienceContainerCollapsed]: n
    }),
    children: [(0, l.jsx)("div", {
      className: P.audienceIconContainer,
      children: (0, l.jsx)(M.default, {
        className: P.audienceIcon
      })
    }), (0, l.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: a
    })]
  })
}
class U extends a.PureComponent {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, g.canWatchStream)(e, A.default, x.default, N.default, m.default)[0]
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
      className: P.draggable,
      "data-dnd-name": i.name,
      onMouseEnter: a ? void 0 : this.handleMouseEnter,
      onMouseLeave: a ? void 0 : this.handleHidePreview,
      children: (0, l.jsx)(u.Popout, {
        preload: () => (0, I.default)(s.id, s.getAvatarURL(i.guild_id, 80), {
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
    super(...e), this.domElementRef = a.createRef(), this.state = {
      userPopoutOpen: !1,
      isHoveringHangStatus: !1
    }, this.handleClickUser = () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }, this.handleCloseUserPopout = () => {
      this.setState({
        userPopoutOpen: !1
      })
    }, this.handleHidePreview = () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: l
      } = this.props;
      (t || l) && (null == e || e(n.id)), this.setState({
        isHoveringHangStatus: !1
      })
    }, this.handleMouseEnter = () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: l
      } = this.props;
      (n || l) && (null == t || t(e.id))
    }, this.handleHoverHangStatus = e => {
      this.setState({
        isHoveringHangStatus: e
      })
    }, this.handleWatchStream = () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: l
      } = this.props;
      if (!this.canWatchStream) return;
      let a = {
        streamType: y.StreamTypes.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      v.default.getId() !== e.id && c.default.selectVoiceChannel(t.id), n ? ((0, S.default)(a), o.default.selectParticipant(a.channelId, (0, E.encodeStreamKey)(a))) : (0, f.watchStreamAndTransitionToStream)(a), null == l || l(e.id)
    }, this.handleJoinVoice = () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      N.default.can(r.default.combine(j.Permissions.CONNECT, j.Permissions.VIEW_CHANNEL), t) && (c.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }, this.handleUserContextMenu = e => {
      let {
        channel: t,
        user: a
      } = this.props;
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return n => (0, l.jsx)(e, {
          ...n,
          user: a,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }, this.renderUserPopout = e => {
      let {
        channel: t,
        user: n
      } = this.props, a = t.getGuildId();
      return (0, l.jsx)(T.default, {
        userId: n.id,
        guildId: null != a ? a : void 0,
        channelId: t.id,
        ...e
      })
    }, this.renderStreamPopout = () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: a
      } = this.props;
      return (0, l.jsx)(C.default, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: a
      })
    }, this.renderHangStatusPopout = () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: a
      } = this.props;
      return (0, l.jsx)(_.default, {
        userId: n.id,
        channel: a,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }, this.renderUser = e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: a,
        shouldShowPreview: s,
        mute: r,
        localMute: o,
        localVideoDisabled: d,
        speaking: c,
        user: f,
        deaf: h,
        priority: m,
        collapsed: E,
        isStreaming: g,
        isGuest: S,
        nick: C,
        video: _,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        embeddedApplication: x,
        channel: N,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: j,
        application: y
      } = this.props, {
        userPopoutOpen: b,
        isHoveringHangStatus: D
      } = this.state, U = L.GAME_CONSOLE_SESSIONS.has(null != n ? n : ""), w = {
        user: f,
        speaking: c,
        mute: r,
        localMute: o,
        localVideoDisabled: d,
        isStreaming: g,
        isGuest: S,
        video: _,
        priority: m,
        deaf: h,
        nick: C,
        collapsed: E,
        overlap: E,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        otherClientSessionType: n,
        voicePlatform: a,
        embeddedApplication: x,
        avatarContainerClass: i({
          [P.userAvatar]: !0
        }),
        disabled: t && !U,
        selected: b,
        onClick: U ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: N.guild_id,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: j,
        application: y,
        channelId: N.id
      };
      if (t) {
        var F;
        return (0, l.jsx)(u.Tooltip, {
          text: null !== (F = (0, p.default)(n)) && void 0 !== F ? F : O.default.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...a
            } = e;
            return (0, l.jsx)(R.default, {
              ...w,
              ...a
            })
          }
        })
      }
      return (0, l.jsx)(u.Popout, {
        position: "right",
        renderPopout: M && D || !g ? this.renderHangStatusPopout : this.renderStreamPopout,
        shouldShow: s && !b,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, l.jsx)(R.default, {
          ...w,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          handleHoverHangStatus: this.handleHoverHangStatus
        })
      })
    }
  }
}
U.defaultProps = {
  isSelfOnOtherClient: !1
};
var w = (0, h.makeVoiceUserDraggable)(U)