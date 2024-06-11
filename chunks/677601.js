"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("704215"),
  c = n("846519"),
  f = n("481060"),
  h = n("570140"),
  m = n("475179"),
  p = n("239091"),
  E = n("287734"),
  C = n("872810"),
  g = n("153867"),
  S = n("944543"),
  _ = n("410575"),
  T = n("393238"),
  I = n("110924"),
  A = n("40851"),
  v = n("115130"),
  x = n("317381"),
  N = n("596040"),
  M = n("296797"),
  y = n("349619"),
  R = n("100527"),
  L = n("367907"),
  O = n("906732"),
  j = n("211644"),
  P = n("258609"),
  D = n("446226"),
  b = n("276598"),
  U = n("569545"),
  F = n("102172"),
  w = n("788983"),
  k = n("928518"),
  H = n("703656"),
  G = n("740492"),
  B = n("793319"),
  V = n("3861"),
  W = n("493754"),
  Y = n("937995"),
  z = n("618158"),
  K = n("880831"),
  Z = n("73563"),
  X = n("751843"),
  q = n("616286"),
  J = n("268353"),
  Q = n("786915"),
  $ = n("800965"),
  ee = n("107169"),
  et = n("891551"),
  en = n("488785"),
  ea = n("199902"),
  el = n("314897"),
  es = n("979696"),
  ei = n("523746"),
  er = n("430824"),
  eo = n("496675"),
  eu = n("306680"),
  ed = n("944486"),
  ec = n("594174"),
  ef = n("979651"),
  eh = n("285952"),
  em = n("626135"),
  ep = n("934415"),
  eE = n("585483"),
  eC = n("358085"),
  eg = n("792125"),
  eS = n("998502"),
  e_ = n("228488"),
  eT = n("358221"),
  eI = n("414910"),
  eA = n("887012"),
  ev = n("909820"),
  ex = n("493010"),
  eN = n("742603"),
  eM = n("221888"),
  ey = n("900211"),
  eR = n("18759"),
  eL = n("878752"),
  eO = n("354459"),
  ej = n("981631"),
  eP = n("689938"),
  eD = n("364515");

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eU = {
    [ej.ChannelLayouts.NORMAL]: eD.normal,
    [ej.ChannelLayouts.MINIMUM]: eD.minimum,
    [ej.ChannelLayouts.NO_CHAT]: eD.noChat,
    [ej.ChannelLayouts.FULL_SCREEN]: eD.fullScreen
  },
  eF = {
    [ej.AppContext.POPOUT]: eD.popout,
    [ej.AppContext.APP]: null,
    [ej.AppContext.OVERLAY]: null
  };
class ew extends l.PureComponent {
  getRootNode() {
    var e, t;
    return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById("app-mount")
  }
  componentDidMount() {
    let {
      channel: e,
      layout: t
    } = this.props;
    this.currentDocument.addEventListener(e_.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), em.default.track(ej.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
      video_layout: this.inPopout ? "popout" : t,
      ...(0, L.collectVoiceAnalyticsMetadata)(e.id)
    })
  }
  componentWillUnmount() {
    this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(e_.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), !(this.inPopout && (0, eC.isMac)()) && this.maybeLeaveFullScreen()
  }
  componentDidUpdate(e) {
    let {
      participantsOpen: t,
      inCall: n,
      mode: a,
      layout: l
    } = this.props, s = this.getRootNode();
    if (null != s && e.mode === ej.ChannelModes.VIDEO && a === ej.ChannelModes.VOICE && (0, e_.isFullScreen)(s, this.currentDocument) && (0, e_.exitFullScreen)(s, this.currentDocument), e.participantsOpen !== t || l !== e.layout) {
      var i;
      null === (i = this._contentRef.current) || void 0 === i || i.triggerResize()
    }
    e.inCall && !n && this.inPopout && h.default.wait(() => this.handleClosePopout())
  }
  get nativePopoutSupported() {
    return eC.isPlatformEmbedded && eS.default.supportsFeature(ej.NativeFeatures.POPOUT_WINDOWS)
  }
  get popoutSupported() {
    return !eC.isPlatformEmbedded || this.nativePopoutSupported
  }
  get popoutOpen() {
    let {
      popoutWindow: e
    } = this.props;
    return null != e && !e.closed
  }
  get currentDocument() {
    let {
      popoutWindow: e
    } = this.props;
    return null != e && this.popoutOpen && this.inPopout ? e.document : document
  }
  get screenMessage() {
    return this.popoutOpen && !this.inPopout && this.props.inCall ? {
      mainText: eP.default.Messages.POPOUT_PLAYER_OPENED
    } : null
  }
  get paused() {
    return this.popoutOpen && !this.inPopout
  }
  get inPopout() {
    return this.props.appContext === ej.AppContext.POPOUT
  }
  get viewProperties() {
    let {
      layout: e,
      mode: t,
      channel: n,
      inCall: a
    } = this.props, l = t === ej.ChannelModes.VIDEO && a && !(this.popoutOpen && !this.inPopout), s = t === ej.ChannelModes.VIDEO && a && this.popoutSupported, i = t !== ej.ChannelModes.VOICE && n.isPrivate() && !this.inPopout && a, r = n.type === ej.ChannelTypes.GUILD_VOICE, o = e === ej.ChannelLayouts.MINIMUM || e === ej.ChannelLayouts.NORMAL, u = this.inPopout && this.nativePopoutSupported, d = {
      renderHeader: !0,
      useTheme: !1,
      useExternalHeader: o,
      canInvite: r,
      canPopout: s,
      canFullscreen: l,
      canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
      canChangeLayout: i,
      canStayOnTop: u
    };
    if (!a) return {
      ...d,
      canFullscreen: l,
      useTheme: !0
    };
    switch (e) {
      case ej.ChannelLayouts.FULL_SCREEN:
        return {
          ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout
        };
      case ej.ChannelLayouts.MINIMUM:
        return {
          ...d, canPopout: !1, useTheme: !0
        };
      case ej.ChannelLayouts.NO_CHAT:
      case ej.ChannelLayouts.NORMAL:
        return {
          ...d
        }
    }
  }
  renderContent(e) {
    var t;
    let {
      selectedParticipant: n,
      inCall: l,
      hasConnectPermission: s,
      mode: i,
      popoutWindow: r,
      participantsOpen: o,
      participants: u,
      filteredParticipants: d,
      participantsVersion: c,
      channel: f,
      guild: h,
      layout: m,
      forceShowControls: p,
      awaitingRemoteSessionInfo: E,
      currentChannelActivities: C
    } = this.props, g = m === ej.ChannelLayouts.MINIMUM, S = g || m === ej.ChannelLayouts.NORMAL, _ = l && i === ej.ChannelModes.VIDEO, T = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && f.isPrivate();
    return this._lastIdleProps = e, (0, a.jsx)(Z.default, {
      renderHeader: this.renderHeader,
      renderBottomLeft: this.renderBottomLeft,
      renderBottomCenter: this.renderBottomCenter,
      renderBottomRight: this.renderBottomRight,
      renderChatButton: f.isGuildVoice() ? this.renderChatButton : void 0,
      renderChatToasts: f.isGuildVoice() ? this.renderChatToasts : void 0,
      renderVoiceChannelEffects: this.renderVoiceChannelEffects,
      ...e,
      screenMessage: this.screenMessage,
      disableGradients: g,
      idle: !p && l && !g && e.idle,
      children: l && this.popoutOpen && !this.inPopout ? null : (0, a.jsx)(V.default, {
        ref: this._contentRef,
        inCall: l,
        paused: this.paused,
        channel: f,
        hasConnectPermission: s,
        guild: h,
        participants: u,
        filteredParticipants: d,
        participantsVersion: c,
        selectedParticipant: _ ? n : null,
        layout: m,
        idle: e.idle,
        mode: i,
        onSelectParticipant: this.handleSelectParticipant,
        onContextMenuParticipant: this.handleContextMenu,
        showParticipants: o && (!S || T),
        popoutWindow: this.inPopout ? r : null,
        awaitingRemoteSessionInfo: E
      })
    })
  }
  render() {
    let {
      layout: e,
      channel: t,
      guild: n,
      mode: l,
      chatOpen: s,
      appContext: r,
      maxSidebarWidth: o,
      maxHeight: u,
      inCall: d
    } = this.props, {
      resizedHeight: c
    } = this.state, f = l === ej.ChannelModes.VIDEO, h = e !== ej.ChannelLayouts.NO_CHAT && e !== ej.ChannelLayouts.FULL_SCREEN && null != u;
    return (0, a.jsxs)("div", {
      className: i()(eD.wrapper, eU[e], eF[r], {
        [eD.poppedOut]: this.popoutOpen && !this.inPopout && e !== ej.ChannelLayouts.NO_CHAT && t.isPrivate(),
        [eD.video]: f,
        [eD.chatSidebarOpen]: s
      }),
      ref: e => {
        this._wrapperRef.current = e, this.props.wrapperRef.current = e
      },
      style: h && null != c ? {
        minHeight: 230,
        maxHeight: u,
        height: c
      } : void 0,
      children: [(0, a.jsx)("div", {
        className: i()(eD.callContainer, {
          [(0, eg.getThemeClass)(ej.ThemeTypes.DARK)]: f
        }),
        ref: e => {
          this._callContainerRef.current = e, this.props.callContainerRef.current = e
        },
        children: (0, a.jsx)(Y.default, {
          timeout: 2e3,
          children: e => this.renderContent(e)
        })
      }), h && (0, a.jsx)(ey.default, {
        minHeight: 230,
        maxHeight: u,
        resizableNode: this._wrapperRef,
        onResize: this.handleCallResize,
        onResizeEnd: this.props.updateStoredCallHeaderHeight
      }), (0, a.jsx)("div", {
        className: eD.channelChatWrapper,
        ref: e => {
          this._channelChatRef.current = e, this.props.channelChatRef.current = e
        },
        children: s && (!d || !this.popoutOpen || this.inPopout) && (0, a.jsx)(ex.default, {
          channel: t,
          guild: n,
          maxWidth: o
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), eb(this, "_prevLayout", ej.ChannelLayouts.MINIMUM), eb(this, "_wrapperRef", l.createRef()), eb(this, "_callContainerRef", l.createRef()), eb(this, "_channelChatRef", l.createRef()), eb(this, "_contentRef", l.createRef()), eb(this, "_videoBackgroundTooltipTimeout", new c.Timeout), eb(this, "_lastIdleProps", null), eb(this, "state", {
      resizedHeight: G.default.callHeaderHeight
    }), eb(this, "handleFullScreenChange", () => {
      let e = this.getRootNode();
      null != e && !(0, e_.isFullScreen)(e, this.currentDocument) && this.props.layout === ej.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }), eb(this, "handleFullScreen", () => {
      let e = this.getRootNode();
      null != e && (this.props.layout !== ej.ChannelLayouts.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(ej.ChannelLayouts.FULL_SCREEN), (0, e_.requestFullScreen)(e)) : this.maybeLeaveFullScreen())
    }), eb(this, "maybeLeaveFullScreen", () => {
      let e = this.getRootNode();
      if (null != e) this.props.layout === ej.ChannelLayouts.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, e_.exitFullScreen)(e, this.currentDocument))
    }), eb(this, "handleToggleLayout", () => {
      this.handleChangeLayout(this.props.layout === ej.ChannelLayouts.NORMAL ? ej.ChannelLayouts.NO_CHAT : ej.ChannelLayouts.NORMAL)
    }), eb(this, "handleChangeLayout", e => {
      let {
        channel: t,
        appContext: n,
        layout: a
      } = this.props;
      a !== e && (m.default.updateLayout(t.id, e, n), e === ej.ChannelLayouts.FULL_SCREEN && t.isPrivate() && eE.ComponentDispatch.dispatch(ej.ComponentActions.TEXTAREA_BLUR))
    }), eb(this, "handleDisconnect", () => {
      this.props.layout === ej.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }), eb(this, "handleContextMenu", (e, t) => {
      var l, s;
      let {
        channel: i,
        appContext: r,
        layout: u
      } = this.props, d = {
        onClose: () => {
          var e;
          return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle("menu")
        },
        context: r
      };
      switch (null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle("menu"), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
        case eO.ParticipantTypes.HIDDEN_STREAM:
        case eO.ParticipantTypes.STREAM:
          (0, p.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.e("22183").then(n.bind(n, "987281"));
            return n => (0, a.jsx)(t, {
              ...n,
              stream: e.stream,
              exitFullscreen: this.maybeLeaveFullScreen,
              appContext: r
            })
          }, d);
          return;
        case eO.ParticipantTypes.USER:
          let c = ec.default.getUser(e.id);
          if (null != c) switch (i.type) {
            case ej.ChannelTypes.DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("36441"), n.e("22036"), n.e("56826")]).then(n.bind(n, "131404"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case ej.ChannelTypes.GROUP_DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("36441"), n.e("60677")]).then(n.bind(n, "354589"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  showChatItems: u === ej.ChannelLayouts.MINIMUM || u === ej.ChannelLayouts.NORMAL,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case ej.ChannelTypes.GUILD_VOICE:
              let f = i.getGuildId();
              return o()(null != f, "GuildID null for guild voice channel"), (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showMediaItems: !0,
                  showChannelCallItems: !0,
                  showChatItems: !1,
                  user: c,
                  channel: i,
                  guildId: f,
                  showModalItems: !0
                })
              }, d)
          }
      }
    }), eb(this, "handleCallResize", e => {
      this.setState({
        resizedHeight: e
      })
    }), eb(this, "handleSelectParticipant", (e, t) => {
      let {
        channel: n,
        selectedParticipant: a,
        allActiveStreams: l,
        inCall: s,
        mode: i
      } = this.props;
      (0, eO.isStreamParticipant)(e) && (0, F.canWatchStream)(n, ef.default, er.default, eo.default, P.default)[0] && (E.default.selectVoiceChannel(n.id), 0 === l.filter(t => (0, U.encodeStreamKey)(t) === e.id && t.state !== ej.ApplicationStreamStates.ENDED).length && (0, C.watchStream)((0, U.decodeStreamKey)(e.id), {
        forceMultiple: t.shiftKey
      })), s && i === ej.ChannelModes.VIDEO && ((null == a ? void 0 : a.id) === e.id ? m.default.selectParticipant(n.id, null) : m.default.selectParticipant(n.id, e.id))
    }), eb(this, "handleOpenPopout", () => {
      let {
        channel: e,
        connectedToEmbeddedActivity: t
      } = this.props, n = () => {
        let t = e.getGuildId();
        null != t && (0, H.transitionTo)((0, ep.previousTextChannelRouteForGuild)(t)), w.openChannelCallPopout(e)
      };
      t ? (0, y.default)(n) : n()
    }), eb(this, "handleStayOnTop", e => {
      w.setAlwaysOnTop(ej.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
    }), eb(this, "handleClosePopout", () => {
      w.close(ej.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
    }), eb(this, "handleFullscreenParticipant", (e, t) => {
      let {
        layout: n,
        selectedParticipant: a
      } = this.props, l = n === ej.ChannelLayouts.FULL_SCREEN;
      (!l && (null == a ? void 0 : a.id) !== e.id || l && (null == a ? void 0 : a.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen()
    }), eb(this, "renderRegionSelect", () => {
      let e;
      let {
        call: t,
        channel: n,
        layout: l
      } = this.props;
      return !this.inPopout && l !== ej.ChannelLayouts.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, a.jsx)(S.default, {
        call: t
      })), (0, a.jsx)(eh.default, {
        justify: eh.default.Justify.END,
        children: e
      })
    }), eb(this, "renderBottomCenter", () => {
      let {
        channel: e,
        inCall: t,
        layout: n
      } = this.props;
      return t || n === ej.ChannelLayouts.MINIMUM || n === ej.ChannelLayouts.NORMAL ? (0, a.jsx)(B.default, {
        exitFullScreen: this.maybeLeaveFullScreen,
        channel: e,
        onDisconnectCall: this.handleDisconnect,
        idleProps: this._lastIdleProps
      }) : null
    }), eb(this, "renderBottomLeft", () => {
      let {
        layout: e,
        mentionCount: t,
        channel: n,
        appContext: l,
        useNewInviteButton: s,
        selectedParticipant: r,
        shouldUseVoiceEffectsActionBar: o,
        inCall: u,
        participants: d
      } = this.props;
      if (!u) return null;
      let c = e === ej.ChannelLayouts.NO_CHAT ? X.default.Directions.UP : X.default.Directions.DOWN,
        h = [ej.ChannelLayouts.FULL_SCREEN, ej.ChannelLayouts.NO_CHAT].includes(e),
        m = d.some(e => e.type === eO.ParticipantTypes.STREAM),
        p = e === ej.ChannelLayouts.FULL_SCREEN ? () => {
          this._prevLayout = ej.ChannelLayouts.NORMAL, this.handleFullScreen()
        } : this.handleToggleLayout,
        {
          canChangeLayout: E,
          canInvite: C
        } = this.viewProperties,
        g = s ? (0, a.jsx)(W.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eO.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          applicationId: (null == r ? void 0 : r.type) === eO.ParticipantTypes.ACTIVITY ? r.id : void 0,
          appContext: l,
          className: eD.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === ej.ChannelTypes.GUILD_VOICE ? ej.AnalyticsPages.GUILD_CHANNEL : ej.AnalyticsPages.DM_CHANNEL
        }) : (0, a.jsx)(Q.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eO.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          className: eD.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === ej.ChannelTypes.GUILD_VOICE ? ej.AnalyticsPages.GUILD_CHANNEL : ej.AnalyticsPages.DM_CHANNEL
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [C && !o ? g : null, E ? (0, a.jsxs)(eh.default, {
          className: eD.iconWrapper,
          align: eh.default.Align.CENTER,
          grow: 0,
          children: [(0, a.jsx)(X.default, {
            label: h ? eP.default.Messages.SHOW_CHAT : eP.default.Messages.HIDE_CHAT,
            direction: c,
            className: eD.leftTrayIcon,
            onClick: p
          }), h && t > 0 ? (0, a.jsx)(f.NumberBadge, {
            className: eD.badge,
            count: t
          }) : null]
        }) : null, (null == r ? void 0 : r.type) !== eO.ParticipantTypes.STREAM && (null == r ? void 0 : r.type) !== eO.ParticipantTypes.ACTIVITY || o ? null : (0, a.jsx)(z.default, {
          children: (0, a.jsx)(eM.default, {
            className: i()(eD.leftTrayIcon, eD.viewersButton),
            participant: r,
            maxVisibleUsers: 4,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: this.inPopout || e === ej.ChannelLayouts.FULL_SCREEN
          })
        }), o && (0, a.jsx)(eL.default, {
          channel: n,
          hasActiveStream: m,
          themeable: this.viewProperties.useTheme
        }), (0, a.jsx)(b.default, {
          showLeftDivider: o,
          themeable: this.viewProperties.useTheme,
          className: eD.leftTrayIcon,
          channel: n
        })]
      })
    }), eb(this, "renderBottomRight", () => {
      let {
        popoutWindow: e,
        popoutWindowAlwaysOnTop: t,
        currentUserId: n,
        selectedParticipant: l
      } = this.props, {
        canFullscreen: s,
        canStayOnTop: i,
        canPopout: r,
        useTheme: o
      } = this.viewProperties;
      return (0, a.jsxs)(a.Fragment, {
        children: [null != l && l.type !== eO.ParticipantTypes.ACTIVITY && l.user.id !== n ? (0, a.jsx)(et.default, {
          context: (0, eI.default)(l.type),
          userId: l.user.id,
          currentWindow: this.inPopout ? null != e ? e : void 0 : window,
          sliderClassName: eD.volumeSlider,
          className: eD.rightTrayIcon
        }) : null, i ? (0, a.jsx)(ee.default, {
          className: eD.rightTrayIcon,
          popoutWindowAlwaysOnTop: t,
          onToggleStayOnTop: this.handleStayOnTop
        }) : null, r ? (0, a.jsx)($.default, {
          themeable: o,
          popoutOpen: this.popoutOpen,
          className: eD.rightTrayIcon,
          onOpenPopout: this.handleOpenPopout,
          onClosePopout: this.handleClosePopout
        }) : null, s ? (0, a.jsx)(J.default, {
          themeable: o,
          node: this.getRootNode(),
          guestWindow: e,
          className: eD.rightTrayIcon,
          onClick: this.handleFullScreen
        }) : null]
      })
    }), eb(this, "renderChatButton", e => {
      let {
        className: t,
        showingClassName: n
      } = e, {
        channel: l,
        chatOpen: s,
        inCall: i
      } = this.props;
      return s || this.popoutOpen && !this.inPopout && i ? null : (0, a.jsx)(q.ChatButton, {
        channelId: l.id,
        className: t,
        showingClassName: n
      })
    }), eb(this, "renderChatToasts", () => {
      let {
        showChatToasts: e,
        chatOpen: t,
        channel: n,
        inCall: l
      } = this.props;
      return !e || t || this.popoutOpen && !this.inPopout && l ? null : (0, a.jsx)(ev.default, {
        children: (0, a.jsx)(K.default, {
          className: eD.chatToasts,
          channelId: n.id
        })
      })
    }), eb(this, "renderVoiceChannelEffects", () => {
      let {
        channel: e,
        callContainerDimensions: t
      } = this.props;
      return (0, a.jsx)(eR.default, {
        children: (0, a.jsx)(en.default, {
          callHeight: t.height,
          channelId: e.id
        })
      })
    }), eb(this, "renderHeader", () => {
      let {
        renderExternalHeader: e,
        channel: t,
        guild: n,
        appContext: l,
        chatOpen: s,
        inCall: i
      } = this.props, {
        useExternalHeader: r,
        canSelectRegion: o,
        renderHeader: u
      } = this.viewProperties;
      return u ? (0, a.jsxs)(z.default, {
        children: [(0, a.jsx)("div", {
          className: eD.headerWrapper,
          children: r ? null == e ? void 0 : e() : (0, a.jsx)(eN.default, {
            channel: t,
            guild: n,
            appContext: l,
            inCall: i,
            isChatOpen: s || this.popoutOpen && !this.inPopout && i,
            exitFullScreen: this.maybeLeaveFullScreen
          })
        }), o ? this.renderRegionSelect() : null]
      }) : null
    })
  }
}
t.default = function(e) {
  var t;
  let {
    channel: n,
    renderExternalHeader: s,
    maxHeight: i
  } = e, {
    width: r = 0,
    ref: o
  } = (0, T.default)(), {
    width: c = 0,
    height: h = 0,
    ref: p
  } = (0, T.default)(), {
    ref: E
  } = (0, T.default)(), C = (0, A.useAppContext)(), S = (0, D.default)(), y = (0, u.useStateFromStores)([ed.default], () => {
    var e;
    return (null !== (e = null == S ? void 0 : S.channelId) && void 0 !== e ? e : ed.default.getVoiceChannelId()) === n.id
  }), L = (0, I.default)(y), {
    participants: b,
    filteredParticipants: U,
    participantsVersion: F,
    mode: w,
    layout: H,
    participantsOpen: B,
    chatOpen: V,
    selectedParticipant: W
  } = (0, u.useStateFromStoresObject)([eT.default], () => {
    let e = C === ej.AppContext.POPOUT,
      t = eT.default.getMode(n.id);
    e && (t = ej.ChannelModes.VIDEO);
    let a = t === ej.ChannelModes.VIDEO ? eT.default.getLayout(n.id, C) : ej.ChannelLayouts.MINIMUM;
    return e && a !== ej.ChannelLayouts.FULL_SCREEN && (a = ej.ChannelLayouts.NO_CHAT), {
      mode: t,
      layout: a,
      selectedParticipant: t !== ej.ChannelModes.VOICE ? eT.default.getSelectedParticipant(n.id) : null,
      participants: eT.default.getParticipants(n.id),
      filteredParticipants: eT.default.getFilteredParticipants(n.id),
      participantsOpen: eT.default.getParticipantsOpen(n.id),
      chatOpen: eT.default.getChatOpen(n.id),
      participantsVersion: eT.default.getParticipantsVersion(n.id)
    }
  }, [C, n.id]), Y = (0, u.useStateFromStoresArray)([ea.default], () => ea.default.getAllActiveStreams()), {
    selectedStream: z
  } = (0, u.useStateFromStoresObject)([ea.default], () => ({
    selectedStream: null != W ? ea.default.getActiveStreamForStreamKey(W.id) : null
  }), [W]), K = (0, u.useStateFromStores)([er.default], () => er.default.getGuild(n.getGuildId())), Z = (0, u.useStateFromStores)([ei.default], () => ei.default.getCall(n.id), [n.id]), X = (0, u.useStateFromStores)([eu.default], () => eu.default.getMentionCount(n.id), [n.id]), q = (0, u.useStateFromStores)([el.default], () => el.default.getId()), {
    popoutWindow: J,
    popoutWindowAlwaysOnTop: Q
  } = (0, u.useStateFromStoresObject)([k.default], () => ({
    popoutWindow: k.default.getWindow(ej.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: k.default.getIsAlwaysOnTop(ej.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), $ = (0, u.useStateFromStores)([eo.default], () => eo.default.can(ej.Permissions.CONNECT, n)), ee = (0, u.useStateFromStores)([es.default], () => es.default.getToastsEnabled(n.id)), et = (0, u.useStateFromStores)([P.default], () => P.default.getAwaitingRemoteSessionInfo()), en = (0, u.useStateFromStores)([G.default], () => G.default.callHeaderHeight), ec = l.useCallback(e => {
    g.default.updatedUnsyncedSettings({
      callHeaderHeight: e
    })
  }, []), ef = null !== (t = null == K ? void 0 : K.id) && void 0 !== t ? t : null, eh = (0, N.default)(ef, n.id), em = (0, u.useStateFromStores)([v.default], () => v.default.getFetchState(), []), ep = (0, I.default)(em);
  l.useEffect(() => {
    "errored" === em && "errored" !== ep && (0, f.showToast)((0, f.createToast)(eP.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, f.ToastType.FAILURE))
  }, [em, ep]);
  let eE = (0, u.useStateFromStores)([x.default], () => x.default.getSelfEmbeddedActivityForChannel(n.id), [n]);
  l.useEffect(() => {
    y && !L && null != eE && m.default.selectParticipant(n.id, eE.applicationId)
  }, [y, L, eE, n.id]), l.useEffect(() => {
    let e = !1,
      t = null;
    return (async () => {
      y && w === ej.ChannelModes.VIDEO && (t = await eS.default.blockDisplaySleep(), e && null != t && eS.default.unblockDisplaySleep(t))
    })(), () => {
      null != t ? eS.default.unblockDisplaySleep(t) : e = !0
    }
  }, [y, w]), (0, M.default)({
    onTransition: void 0
  });
  let eC = (0, eA.default)(n, !0),
    eg = (0, j.useIsContentShown)(d.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
    {
      analyticsLocations: e_
    } = (0, O.default)(R.default.CHANNEL_CALL),
    eI = x.default.getEmbeddedActivitiesForChannel(n.id);
  return (0, a.jsx)(O.AnalyticsLocationProvider, {
    value: e_,
    children: (0, a.jsx)(_.default, {
      page: ej.AnalyticsPages.CHANNEL_CALL,
      children: (0, a.jsx)(ev.ChannelCallChatLayerProvider, {
        children: (0, a.jsxs)(eR.VoiceChannelEffectsLayerProvider, {
          children: [(0, a.jsx)(ew, {
            channel: n,
            guild: K,
            hasConnectPermission: $,
            participantsOpen: B,
            renderExternalHeader: s,
            appContext: C,
            call: Z,
            popoutWindow: J,
            popoutWindowAlwaysOnTop: Q,
            mentionCount: X,
            selectedStream: z,
            mode: w,
            inCall: y,
            participants: b,
            filteredParticipants: U,
            participantsVersion: F,
            layout: H,
            chatOpen: V,
            maxSidebarWidth: r - 550,
            shouldUseVoiceEffectsActionBar: eC,
            currentUserId: q,
            selectedParticipant: W,
            allActiveStreams: Y,
            useNewInviteButton: eh,
            connectedToEmbeddedActivity: null != eE,
            showChatToasts: ee,
            storedCallHeaderHeight: en,
            updateStoredCallHeaderHeight: ec,
            wrapperRef: o,
            callContainerDimensions: {
              width: c,
              height: h
            },
            callContainerRef: p,
            channelChatRef: E,
            width: r,
            maxHeight: i,
            forceShowControls: eg,
            awaitingRemoteSessionInfo: et,
            currentChannelActivities: eI
          }), !n.isPrivate() && (0, a.jsx)(eR.VoiceChannelEffectsLayerContainer, {}), (0, a.jsx)(ev.ChannelCallChatLayerContainer, {})]
        })
      })
    })
  })
}