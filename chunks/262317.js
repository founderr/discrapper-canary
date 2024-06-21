n.d(t, {
  XX: function() {
    return U
  },
  ul: function() {
    return k
  }
}), n(47120);
var l, i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(149765),
  c = n(846519),
  u = n(481060),
  d = n(475179),
  h = n(239091),
  m = n(287734),
  p = n(872810),
  E = n(888651),
  g = n(100527),
  f = n(258609),
  C = n(257115),
  _ = n(569545),
  I = n(382182),
  x = n(525925),
  T = n(701362),
  N = n(224184),
  Z = n(484459),
  S = n(103575),
  v = n(314897),
  A = n(430824),
  M = n(496675),
  R = n(979651),
  j = n(805009),
  L = n(981631),
  O = n(927923),
  P = n(70722),
  b = n(689938),
  y = n(492787);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function U(e) {
  let {
    numUsers: t
  } = e;
  return (0, i.jsx)("div", {
    className: y.moreContainer,
    children: (0, i.jsxs)(u.Text, {
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
  } = e, l = n ? t : b.Z.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, i.jsxs)("div", {
    className: r()(y.audienceContainer, {
      [y.audienceContainerCollapsed]: n
    }),
    children: [(0, i.jsx)("div", {
      className: y.audienceIconContainer,
      children: (0, i.jsx)(u.HeadphonesIcon, {
        size: "md",
        color: "currentColor",
        className: y.audienceIcon
      })
    }), (0, i.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
class w extends(l = s.PureComponent) {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, I.p9)(e, R.Z, A.Z, M.Z, f.Z)[0]
  }
  render() {
    let {
      userPopoutOpen: e
    } = this.state, {
      connectUserDragSource: t,
      canDrag: n,
      isSelfOnOtherClient: l,
      user: s,
      channel: a
    } = this.props, r = (0, i.jsx)("div", {
      className: y.draggable,
      "data-dnd-name": a.name,
      onMouseEnter: l ? void 0 : this.handleMouseEnter,
      onMouseLeave: l ? void 0 : this.handleHidePreview,
      children: (0, i.jsx)(u.Popout, {
        preload: () => (0, Z.W)(s.id, s.getAvatarURL(a.guild_id, 80), {
          guildId: a.guild_id,
          channelId: a.id
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
    super(...e), D(this, "domElementRef", s.createRef()), D(this, "state", {
      userPopoutOpen: !1,
      isHoveringHangStatus: !1
    }), D(this, "setIsHoveringHangStatusDelayed", new c.sW(500, () => {
      this.setState({
        isHoveringHangStatus: !0
      })
    })), D(this, "handleClickUser", () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }), D(this, "handleCloseUserPopout", () => {
      this.setState({
        userPopoutOpen: !1
      })
    }), D(this, "handleHidePreview", () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: l
      } = this.props;
      (t || l) && (null == e || e(n.id)), this.setState({
        isHoveringHangStatus: !1
      })
    }), D(this, "handleMouseEnter", () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: l
      } = this.props;
      (n || l) && (null == t || t(e.id))
    }), D(this, "handleHoverHangStatus", e => {
      let {
        previewIsOpen: t
      } = this.props;
      e && t ? this.setIsHoveringHangStatusDelayed.delay() : !e && this.setIsHoveringHangStatusDelayed.isDelayed() && this.setIsHoveringHangStatusDelayed.cancel()
    }), D(this, "handleHoverIcons", e => {
      e && (this.setIsHoveringHangStatusDelayed.cancel(), this.setState({
        isHoveringHangStatus: !1
      }))
    }), D(this, "handleWatchStream", () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: l
      } = this.props;
      if (!this.canWatchStream) return;
      let i = {
        streamType: P.lo.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      v.default.getId() !== e.id && m.default.selectVoiceChannel(t.id), n ? ((0, x.Z)(i), d.Z.selectParticipant(i.channelId, (0, _.V9)(i))) : (0, p.iV)(i), null == l || l(e.id)
    }), D(this, "handleJoinVoice", () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      M.Z.can(o.$e(L.Plq.CONNECT, L.Plq.VIEW_CHANNEL), t) && (m.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }), D(this, "handleUserContextMenu", e => {
      let {
        channel: t,
        user: l
      } = this.props;
      (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
        return n => (0, i.jsx)(e, {
          ...n,
          user: l,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }), D(this, "renderUserPopout", e => {
      let {
        channel: t,
        user: n
      } = this.props, l = t.getGuildId();
      return (0, i.jsx)(S.Z, {
        location: "VoiceUser",
        userId: n.id,
        guildId: null != l ? l : void 0,
        channelId: t.id,
        newAnalyticsLocations: [g.Z.VOICE_USER],
        ...e
      })
    }), D(this, "renderStreamPopout", () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: l
      } = this.props;
      return (0, i.jsx)(T.Z, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: l
      })
    }), D(this, "renderHangStatusPopout", () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: l
      } = this.props;
      return (0, i.jsx)(N.Z, {
        userId: n.id,
        channel: l,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }), D(this, "renderUser", e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: l,
        shouldShowPreview: s,
        mute: a,
        localMute: o,
        localVideoDisabled: c,
        speaking: d,
        disconnected: h,
        user: m,
        deaf: p,
        priority: E,
        collapsed: g,
        isStreaming: f,
        isGuest: _,
        nick: I,
        video: x,
        serverMute: T,
        serverDeaf: N,
        tabIndex: Z,
        embeddedApplication: S,
        channel: v,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: R,
        application: L
      } = this.props, {
        userPopoutOpen: P,
        isHoveringHangStatus: D
      } = this.state, U = O.al.has(null != n ? n : ""), k = {
        user: m,
        speaking: d,
        disconnected: h,
        mute: a,
        localMute: o,
        localVideoDisabled: c,
        isStreaming: f,
        isGuest: _,
        video: x,
        priority: E,
        deaf: p,
        nick: I,
        collapsed: g,
        overlap: g,
        serverMute: T,
        serverDeaf: N,
        tabIndex: Z,
        otherClientSessionType: n,
        voicePlatform: l,
        embeddedApplication: S,
        avatarContainerClass: r()({
          [y.userAvatar]: !0
        }),
        disabled: t && !U,
        selected: P,
        onClick: U ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: v.guild_id,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: R,
        application: L,
        channelId: v.id
      };
      if (t) {
        var w;
        return (0, i.jsx)(u.Tooltip, {
          text: null !== (w = (0, C.Z)(n)) && void 0 !== w ? w : b.Z.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...l
            } = e;
            return (0, i.jsx)(j.Z, {
              ...k,
              ...l
            })
          }
        })
      }
      return (0, i.jsx)(u.Popout, {
        position: "right",
        renderPopout: M && D || !f ? this.renderHangStatusPopout : this.renderStreamPopout,
        shouldShow: s && !P,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, i.jsx)(j.Z, {
          ...k,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          handleHoverHangStatus: this.handleHoverHangStatus,
          handleHoverIcons: this.handleHoverIcons
        })
      })
    })
  }
}
D(w, "defaultProps", {
  isSelfOnOtherClient: !1
}), t.ZP = (0, E.$)(w)