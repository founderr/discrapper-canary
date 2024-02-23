"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eF
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("151426"),
  c = n("862337"),
  f = n("77078"),
  h = n("913144"),
  m = n("255397"),
  p = n("272030"),
  E = n("987317"),
  S = n("990766"),
  g = n("452804"),
  C = n("654978"),
  _ = n("901582"),
  I = n("731898"),
  T = n("84339"),
  v = n("244201"),
  x = n("84460"),
  N = n("191225"),
  A = n("372610"),
  M = n("735890"),
  R = n("812204"),
  j = n("716241"),
  L = n("685665"),
  y = n("862853"),
  O = n("76393"),
  P = n("261552"),
  b = n("710560"),
  D = n("374014"),
  U = n("223913"),
  w = n("383294"),
  F = n("292687"),
  k = n("393414"),
  V = n("168973"),
  B = n("581389"),
  G = n("103738"),
  H = n("486030"),
  W = n("908583"),
  Y = n("550410"),
  z = n("115531"),
  K = n("620592"),
  Z = n("172131"),
  X = n("640553"),
  Q = n("95032"),
  q = n("331759"),
  J = n("336971"),
  $ = n("555038"),
  ee = n("634472"),
  et = n("260014"),
  en = n("373469"),
  el = n("271938"),
  ea = n("712234"),
  es = n("950104"),
  ei = n("305961"),
  er = n("957255"),
  eo = n("660478"),
  eu = n("18494"),
  ed = n("697218"),
  ec = n("800762"),
  ef = n("145131"),
  eh = n("956089"),
  em = n("599110"),
  ep = n("404008"),
  eE = n("659500"),
  eS = n("773336"),
  eg = n("439932"),
  eC = n("50885"),
  e_ = n("563680"),
  eI = n("191145"),
  eT = n("161306"),
  ev = n("598785"),
  ex = n("412090"),
  eN = n("452027"),
  eA = n("328715"),
  eM = n("836087"),
  eR = n("579408"),
  ej = n("198755"),
  eL = n("636150"),
  ey = n("99795"),
  eO = n("49111"),
  eP = n("782340"),
  eb = n("65640");
let eD = {
    [eO.ChannelLayouts.NORMAL]: eb.normal,
    [eO.ChannelLayouts.MINIMUM]: eb.minimum,
    [eO.ChannelLayouts.NO_CHAT]: eb.noChat,
    [eO.ChannelLayouts.FULL_SCREEN]: eb.fullScreen
  },
  eU = {
    [eO.AppContext.POPOUT]: eb.popout,
    [eO.AppContext.APP]: null,
    [eO.AppContext.OVERLAY]: null
  };
class ew extends a.PureComponent {
  getRootNode() {
    var e, t;
    let n = null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window;
    return n.document.getElementById("app-mount")
  }
  componentDidMount() {
    let {
      channel: e,
      layout: t
    } = this.props;
    this.currentDocument.addEventListener(e_.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), em.default.track(eO.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
      video_layout: this.inPopout ? "popout" : t,
      ...(0, j.collectVoiceAnalyticsMetadata)(e.id)
    })
  }
  componentWillUnmount() {
    this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(e_.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), !(this.inPopout && (0, eS.isMac)()) && this.maybeLeaveFullScreen()
  }
  componentDidUpdate(e) {
    let {
      participantsOpen: t,
      inCall: n,
      mode: l,
      layout: a
    } = this.props, s = this.getRootNode();
    if (null != s && e.mode === eO.ChannelModes.VIDEO && l === eO.ChannelModes.VOICE && (0, e_.isFullScreen)(s, this.currentDocument) && (0, e_.exitFullScreen)(s, this.currentDocument), e.participantsOpen !== t || a !== e.layout) {
      var i;
      null === (i = this._contentRef.current) || void 0 === i || i.triggerResize()
    }
    e.inCall && !n && this.inPopout && h.default.wait(() => this.handleClosePopout())
  }
  get nativePopoutSupported() {
    return eS.isPlatformEmbedded && eC.default.supportsFeature(eO.NativeFeatures.POPOUT_WINDOWS)
  }
  get popoutSupported() {
    return !eS.isPlatformEmbedded || this.nativePopoutSupported
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
    return this.props.appContext === eO.AppContext.POPOUT
  }
  get viewProperties() {
    let {
      layout: e,
      mode: t,
      channel: n,
      inCall: l
    } = this.props, a = t === eO.ChannelModes.VIDEO && l && !(this.popoutOpen && !this.inPopout), s = t === eO.ChannelModes.VIDEO && l && this.popoutSupported, i = t !== eO.ChannelModes.VOICE && n.isPrivate() && !this.inPopout && l, r = n.type === eO.ChannelTypes.GUILD_VOICE, o = e === eO.ChannelLayouts.MINIMUM || e === eO.ChannelLayouts.NORMAL, u = this.inPopout && this.nativePopoutSupported, d = n.isPrivate() && !n.isBroadcastChannel(), c = {
      renderHeader: !0,
      useTheme: !1,
      useExternalHeader: o,
      canInvite: r,
      canPopout: s,
      canFullscreen: a,
      canSelectRegion: d,
      canChangeLayout: i,
      canStayOnTop: u
    };
    if (!l) return {
      ...c,
      canFullscreen: a,
      useTheme: !0
    };
    switch (e) {
      case eO.ChannelLayouts.FULL_SCREEN:
        return {
          ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout
        };
      case eO.ChannelLayouts.MINIMUM:
        return {
          ...c, canPopout: !1, useTheme: !0
        };
      case eO.ChannelLayouts.NO_CHAT:
      case eO.ChannelLayouts.NORMAL:
        return {
          ...c
        }
    }
  }
  renderContent(e) {
    let {
      selectedParticipant: t,
      inCall: n,
      hasConnectPermission: a,
      mode: s,
      popoutWindow: i,
      participantsOpen: r,
      participants: o,
      filteredParticipants: u,
      participantsVersion: d,
      channel: c,
      guild: f,
      layout: h,
      forceShowControls: m,
      awaitingRemoteSessionInfo: p
    } = this.props, E = h === eO.ChannelLayouts.MINIMUM, S = E || h === eO.ChannelLayouts.NORMAL, g = n && s === eO.ChannelModes.VIDEO;
    return this._lastIdleProps = e, (0, l.jsx)(K.default, {
      renderHeader: this.renderHeader,
      renderBottomLeft: this.renderBottomLeft,
      renderBottomCenter: this.renderBottomCenter,
      renderBottomRight: this.renderBottomRight,
      renderChatButton: c.isGuildVoice() ? this.renderChatButton : void 0,
      renderChatToasts: c.isGuildVoice() ? this.renderChatToasts : void 0,
      renderVoiceChannelEffects: this.renderVoiceChannelEffects,
      ...e,
      screenMessage: this.screenMessage,
      disableGradients: E,
      idle: !m && n && !E && e.idle,
      children: n && this.popoutOpen && !this.inPopout ? null : (0, l.jsx)(G.default, {
        ref: this._contentRef,
        inCall: n,
        paused: this.paused,
        channel: c,
        hasConnectPermission: a,
        guild: f,
        participants: o,
        filteredParticipants: u,
        participantsVersion: d,
        selectedParticipant: g ? t : null,
        layout: h,
        idle: e.idle,
        mode: s,
        onSelectParticipant: this.handleSelectParticipant,
        onContextMenuParticipant: this.handleContextMenu,
        showParticipants: r && !S,
        popoutWindow: this.inPopout ? i : null,
        awaitingRemoteSessionInfo: p
      })
    })
  }
  render() {
    let {
      layout: e,
      channel: t,
      guild: n,
      mode: a,
      chatOpen: s,
      appContext: r,
      maxSidebarWidth: o,
      maxHeight: u,
      inCall: d
    } = this.props, {
      resizedHeight: c
    } = this.state, f = a === eO.ChannelModes.VIDEO, h = e !== eO.ChannelLayouts.NO_CHAT && e !== eO.ChannelLayouts.FULL_SCREEN && null != u;
    return (0, l.jsxs)("div", {
      className: i(eb.wrapper, eD[e], eU[r], {
        [eb.poppedOut]: this.popoutOpen && !this.inPopout && e !== eO.ChannelLayouts.NO_CHAT && t.isPrivate(),
        [eb.video]: f,
        [eb.chatSidebarOpen]: s
      }),
      ref: e => {
        this._wrapperRef.current = e, this.props.wrapperRef.current = e
      },
      style: h && null != c ? {
        minHeight: 200,
        maxHeight: u,
        height: c
      } : void 0,
      children: [(0, l.jsx)("div", {
        className: i(eb.callContainer, {
          [(0, eg.getThemeClass)(eO.ThemeTypes.DARK)]: f
        }),
        ref: e => {
          this._callContainerRef.current = e, this.props.callContainerRef.current = e
        },
        children: (0, l.jsx)(W.default, {
          timeout: 2e3,
          children: e => this.renderContent(e)
        })
      }), h && (0, l.jsx)(eR.default, {
        minHeight: 200,
        maxHeight: u,
        resizableNode: this._wrapperRef,
        onResize: this.handleCallResize,
        onResizeEnd: this.props.updateStoredCallHeaderHeight
      }), (0, l.jsx)("div", {
        className: eb.channelChatWrapper,
        ref: e => {
          this._channelChatRef.current = e, this.props.channelChatRef.current = e
        },
        children: s && (!d || !this.popoutOpen || this.inPopout) && (0, l.jsx)(eN.default, {
          channel: t,
          guild: n,
          maxWidth: o
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this._prevLayout = eO.ChannelLayouts.MINIMUM, this._wrapperRef = a.createRef(), this._callContainerRef = a.createRef(), this._channelChatRef = a.createRef(), this._contentRef = a.createRef(), this._videoBackgroundTooltipTimeout = new c.Timeout, this._lastIdleProps = null, this.state = {
      resizedHeight: V.default.callHeaderHeight
    }, this.handleFullScreenChange = () => {
      let e = this.getRootNode();
      null != e && !(0, e_.isFullScreen)(e, this.currentDocument) && this.props.layout === eO.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }, this.handleFullScreen = () => {
      let e = this.getRootNode();
      null != e && (this.props.layout !== eO.ChannelLayouts.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(eO.ChannelLayouts.FULL_SCREEN), (0, e_.requestFullScreen)(e)) : this.maybeLeaveFullScreen())
    }, this.maybeLeaveFullScreen = () => {
      let e = this.getRootNode();
      if (null != e) this.props.layout === eO.ChannelLayouts.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, e_.exitFullScreen)(e, this.currentDocument))
    }, this.handleToggleLayout = () => {
      this.handleChangeLayout(this.props.layout === eO.ChannelLayouts.NORMAL ? eO.ChannelLayouts.NO_CHAT : eO.ChannelLayouts.NORMAL)
    }, this.handleChangeLayout = e => {
      let {
        channel: t,
        appContext: n,
        layout: l
      } = this.props;
      l !== e && (m.default.updateLayout(t.id, e, n), e === eO.ChannelLayouts.FULL_SCREEN && t.isPrivate() && eE.ComponentDispatch.dispatch(eO.ComponentActions.TEXTAREA_BLUR))
    }, this.handleDisconnect = () => {
      this.props.layout === eO.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }, this.handleContextMenu = (e, t) => {
      var a, s;
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
      switch (null === (a = this._lastIdleProps) || void 0 === a || a.onPreventIdle("menu"), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
        case ey.ParticipantTypes.HIDDEN_STREAM:
        case ey.ParticipantTypes.STREAM:
          (0, p.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.el("172844").then(n.bind(n, "172844"));
            return n => (0, l.jsx)(t, {
              ...n,
              stream: e.stream,
              exitFullscreen: this.maybeLeaveFullScreen,
              appContext: r
            })
          }, d);
          return;
        case ey.ParticipantTypes.USER:
          let c = ed.default.getUser(e.id);
          if (null != c) switch (i.type) {
            case eO.ChannelTypes.DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("130074").then(n.bind(n, "130074"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case eO.ChannelTypes.GROUP_DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("166452").then(n.bind(n, "166452"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  showChatItems: u === eO.ChannelLayouts.MINIMUM || u === eO.ChannelLayouts.NORMAL,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case eO.ChannelTypes.GUILD_VOICE:
              let f = i.getGuildId();
              return o(null != f, "GuildID null for guild voice channel"), (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, l.jsx)(e, {
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
    }, this.handleCallResize = e => {
      this.setState({
        resizedHeight: e
      })
    }, this.handleSelectParticipant = (e, t) => {
      let {
        channel: n,
        selectedParticipant: l,
        allActiveStreams: a,
        inCall: s,
        mode: i
      } = this.props;
      if ((0, ey.isStreamParticipant)(e) && (0, U.canWatchStream)(n, ec.default, ei.default, er.default, O.default)[0]) {
        E.default.selectVoiceChannel(n.id);
        let l = a.filter(t => (0, D.encodeStreamKey)(t) === e.id && t.state !== eO.ApplicationStreamStates.ENDED);
        0 === l.length && (0, S.watchStream)((0, D.decodeStreamKey)(e.id), {
          forceMultiple: t.shiftKey
        })
      }
      s && i === eO.ChannelModes.VIDEO && ((null == l ? void 0 : l.id) === e.id ? m.default.selectParticipant(n.id, null) : m.default.selectParticipant(n.id, e.id))
    }, this.handleOpenPopout = () => {
      let {
        channel: e,
        connectedToEmbeddedActivity: t
      } = this.props, n = () => {
        let t = e.getGuildId();
        null != t && (0, k.transitionTo)((0, ep.previousTextChannelRouteForGuild)(t)), w.openChannelCallPopout(e)
      };
      t ? (0, M.default)(n) : n()
    }, this.handleStayOnTop = e => {
      w.setAlwaysOnTop(eO.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
    }, this.handleClosePopout = () => {
      w.close(eO.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
    }, this.handleFullscreenParticipant = (e, t) => {
      let {
        layout: n,
        selectedParticipant: l
      } = this.props, a = n === eO.ChannelLayouts.FULL_SCREEN;
      (!a && (null == l ? void 0 : l.id) !== e.id || a && (null == l ? void 0 : l.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen()
    }, this.renderRegionSelect = () => {
      let e;
      let {
        call: t,
        channel: n,
        layout: a
      } = this.props;
      return !this.inPopout && a !== eO.ChannelLayouts.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, l.jsx)(C.default, {
        call: t
      })), (0, l.jsx)(ef.default, {
        justify: ef.default.Justify.END,
        children: e
      })
    }, this.renderBottomCenter = () => {
      let {
        channel: e,
        inCall: t,
        layout: n
      } = this.props;
      return t || n === eO.ChannelLayouts.MINIMUM || n === eO.ChannelLayouts.NORMAL ? (0, l.jsx)(B.default, {
        exitFullScreen: this.maybeLeaveFullScreen,
        channel: e,
        onDisconnectCall: this.handleDisconnect,
        idleProps: this._lastIdleProps
      }) : null
    }, this.renderBottomLeft = () => {
      let {
        layout: e,
        mentionCount: t,
        channel: n,
        appContext: a,
        useNewInviteButton: s,
        selectedParticipant: r,
        shouldUseVoiceEffectsActionBar: o,
        inCall: u,
        participants: d
      } = this.props;
      if (!u) return null;
      let c = e === eO.ChannelLayouts.NO_CHAT ? Z.default.Directions.UP : Z.default.Directions.DOWN,
        f = [eO.ChannelLayouts.FULL_SCREEN, eO.ChannelLayouts.NO_CHAT].includes(e),
        h = d.some(e => e.type === ey.ParticipantTypes.STREAM),
        m = e === eO.ChannelLayouts.FULL_SCREEN ? () => {
          this._prevLayout = eO.ChannelLayouts.NORMAL, this.handleFullScreen()
        } : this.handleToggleLayout,
        {
          canChangeLayout: p,
          canInvite: E
        } = this.viewProperties,
        S = s ? (0, l.jsx)(H.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === ey.ParticipantTypes.STREAM ? (0, D.decodeStreamKey)(r.id) : void 0,
          applicationId: (null == r ? void 0 : r.type) === ey.ParticipantTypes.ACTIVITY ? r.id : void 0,
          appContext: a,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eO.ChannelTypes.GUILD_VOICE ? eO.AnalyticsPages.GUILD_CHANNEL : eO.AnalyticsPages.DM_CHANNEL
        }) : (0, l.jsx)(q.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === ey.ParticipantTypes.STREAM ? (0, D.decodeStreamKey)(r.id) : void 0,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eO.ChannelTypes.GUILD_VOICE ? eO.AnalyticsPages.GUILD_CHANNEL : eO.AnalyticsPages.DM_CHANNEL
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [E && !o ? S : null, p ? (0, l.jsxs)(ef.default, {
          className: eb.iconWrapper,
          align: ef.default.Align.CENTER,
          grow: 0,
          children: [(0, l.jsx)(Z.default, {
            label: f ? eP.default.Messages.SHOW_CHAT : eP.default.Messages.HIDE_CHAT,
            direction: c,
            className: eb.leftTrayIcon,
            onClick: m
          }), f && t > 0 ? (0, l.jsx)(eh.NumberBadge, {
            className: eb.badge,
            count: t
          }) : null]
        }) : null, (null == r ? void 0 : r.type) !== ey.ParticipantTypes.STREAM && (null == r ? void 0 : r.type) !== ey.ParticipantTypes.ACTIVITY || o ? null : (0, l.jsx)(Y.default, {
          children: (0, l.jsx)(eM.default, {
            className: i(eb.leftTrayIcon, eb.viewersButton),
            participant: r,
            maxVisibleUsers: 4,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: this.inPopout || e === eO.ChannelLayouts.FULL_SCREEN
          })
        }), o && (0, l.jsx)(eL.default, {
          channel: n,
          hasActiveStream: h,
          themeable: this.viewProperties.useTheme
        }), (0, l.jsx)(b.default, {
          showLeftDivider: o,
          themeable: this.viewProperties.useTheme,
          className: eb.leftTrayIcon,
          channel: n
        })]
      })
    }, this.renderBottomRight = () => {
      let {
        popoutWindow: e,
        popoutWindowAlwaysOnTop: t,
        currentUserId: n,
        selectedParticipant: a
      } = this.props, {
        canFullscreen: s,
        canStayOnTop: i,
        canPopout: r,
        useTheme: o
      } = this.viewProperties;
      return (0, l.jsxs)(l.Fragment, {
        children: [null != a && a.type !== ey.ParticipantTypes.ACTIVITY && a.user.id !== n ? (0, l.jsx)(ee.default, {
          context: (0, eT.default)(a.type),
          userId: a.user.id,
          currentWindow: this.inPopout ? null != e ? e : void 0 : window,
          sliderClassName: eb.volumeSlider,
          className: eb.rightTrayIcon
        }) : null, i ? (0, l.jsx)($.default, {
          className: eb.rightTrayIcon,
          popoutWindowAlwaysOnTop: t,
          onToggleStayOnTop: this.handleStayOnTop
        }) : null, r ? (0, l.jsx)(J.default, {
          themeable: o,
          popoutOpen: this.popoutOpen,
          className: eb.rightTrayIcon,
          onOpenPopout: this.handleOpenPopout,
          onClosePopout: this.handleClosePopout
        }) : null, s ? (0, l.jsx)(Q.default, {
          themeable: o,
          node: this.getRootNode(),
          guestWindow: e,
          className: eb.rightTrayIcon,
          onClick: this.handleFullScreen
        }) : null]
      })
    }, this.renderChatButton = e => {
      let {
        className: t,
        showingClassName: n
      } = e, {
        channel: a,
        chatOpen: s,
        inCall: i
      } = this.props;
      return s || this.popoutOpen && !this.inPopout && i ? null : (0, l.jsx)(X.ChatButton, {
        channelId: a.id,
        className: t,
        showingClassName: n
      })
    }, this.renderChatToasts = () => {
      let {
        showChatToasts: e,
        chatOpen: t,
        channel: n,
        inCall: a
      } = this.props;
      return !e || t || this.popoutOpen && !this.inPopout && a ? null : (0, l.jsx)(ex.default, {
        children: (0, l.jsx)(z.default, {
          className: eb.chatToasts,
          channelId: n.id
        })
      })
    }, this.renderVoiceChannelEffects = () => {
      let {
        channel: e,
        callContainerDimensions: t
      } = this.props;
      return (0, l.jsx)(ej.default, {
        children: (0, l.jsx)(et.default, {
          callHeight: t.height,
          channelId: e.id
        })
      })
    }, this.renderHeader = () => {
      let {
        renderExternalHeader: e,
        channel: t,
        guild: n,
        appContext: a,
        chatOpen: s,
        inCall: i
      } = this.props, {
        useExternalHeader: r,
        canSelectRegion: o,
        renderHeader: u
      } = this.viewProperties;
      return u ? (0, l.jsxs)(Y.default, {
        children: [(0, l.jsx)("div", {
          className: eb.headerWrapper,
          children: r ? null == e ? void 0 : e() : (0, l.jsx)(eA.default, {
            channel: t,
            guild: n,
            appContext: a,
            inCall: i,
            isChatOpen: s || this.popoutOpen && !this.inPopout && i,
            exitFullScreen: this.maybeLeaveFullScreen
          })
        }), o ? this.renderRegionSelect() : null]
      }) : null
    }
  }
}
var eF = function(e) {
  var t;
  let {
    channel: n,
    renderExternalHeader: s,
    maxHeight: i
  } = e, {
    width: r = 0,
    ref: o
  } = (0, I.default)(), {
    width: c = 0,
    height: h = 0,
    ref: m
  } = (0, I.default)(), {
    ref: p
  } = (0, I.default)(), E = (0, v.useAppContext)(), S = (0, P.default)(), C = (0, u.useStateFromStores)([eu.default], () => {
    var e;
    return (null !== (e = null == S ? void 0 : S.channelId) && void 0 !== e ? e : eu.default.getVoiceChannelId()) === n.id
  }), {
    participants: M,
    filteredParticipants: j,
    participantsVersion: b,
    mode: D,
    layout: U,
    participantsOpen: w,
    chatOpen: k,
    selectedParticipant: B
  } = (0, u.useStateFromStoresObject)([eI.default], () => {
    let e = E === eO.AppContext.POPOUT,
      t = eI.default.getMode(n.id);
    e && (t = eO.ChannelModes.VIDEO);
    let l = t === eO.ChannelModes.VIDEO ? eI.default.getLayout(n.id, E) : eO.ChannelLayouts.MINIMUM;
    return e && l !== eO.ChannelLayouts.FULL_SCREEN && (l = eO.ChannelLayouts.NO_CHAT), {
      mode: t,
      layout: l,
      selectedParticipant: t !== eO.ChannelModes.VOICE ? eI.default.getSelectedParticipant(n.id) : null,
      participants: eI.default.getParticipants(n.id),
      filteredParticipants: eI.default.getFilteredParticipants(n.id),
      participantsOpen: eI.default.getParticipantsOpen(n.id),
      chatOpen: eI.default.getChatOpen(n.id),
      participantsVersion: eI.default.getParticipantsVersion(n.id)
    }
  }, [E, n.id]), G = (0, u.useStateFromStoresArray)([en.default], () => en.default.getAllActiveStreams()), {
    selectedStream: H
  } = (0, u.useStateFromStoresObject)([en.default], () => ({
    selectedStream: null != B ? en.default.getActiveStreamForStreamKey(B.id) : null
  }), [B]), W = (0, u.useStateFromStores)([ei.default], () => ei.default.getGuild(n.getGuildId())), Y = (0, u.useStateFromStores)([es.default], () => es.default.getCall(n.id), [n.id]), z = (0, u.useStateFromStores)([eo.default], () => eo.default.getMentionCount(n.id), [n.id]), K = (0, u.useStateFromStores)([el.default], () => el.default.getId()), {
    popoutWindow: Z,
    popoutWindowAlwaysOnTop: X
  } = (0, u.useStateFromStoresObject)([F.default], () => ({
    popoutWindow: F.default.getWindow(eO.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: F.default.getIsAlwaysOnTop(eO.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), Q = (0, u.useStateFromStores)([er.default], () => er.default.can(eO.Permissions.CONNECT, n)), q = (0, u.useStateFromStores)([ea.default], () => ea.default.getToastsEnabled(n.id)), J = (0, u.useStateFromStores)([O.default], () => O.default.getAwaitingRemoteSessionInfo()), $ = (0, u.useStateFromStores)([V.default], () => V.default.callHeaderHeight), ee = a.useCallback(e => {
    g.default.updatedUnsyncedSettings({
      callHeaderHeight: e
    })
  }, []), et = null !== (t = null == W ? void 0 : W.id) && void 0 !== t ? t : null, ed = (0, A.default)(et, n.id), ec = (0, u.useStateFromStores)([x.default], () => x.default.getFetchState(), []), ef = (0, T.default)(ec);
  a.useEffect(() => {
    "errored" === ec && "errored" !== ef && (0, f.showToast)((0, f.createToast)(eP.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, f.ToastType.FAILURE))
  }, [ec, ef]);
  let eh = (0, u.useStateFromStores)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id), [n]);
  a.useEffect(() => {
    let e = !1,
      t = null,
      n = async () => {
        C && D === eO.ChannelModes.VIDEO && (t = await eC.default.blockDisplaySleep(), e && null != t && eC.default.unblockDisplaySleep(t))
      };
    return n(), () => {
      null != t ? eC.default.unblockDisplaySleep(t) : e = !0
    }
  }, [C, D]);
  let em = (0, ev.default)(n, !0),
    ep = (0, y.useIsContentShown)(d.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
    {
      AnalyticsLocationProvider: eE
    } = (0, L.default)(R.default.CHANNEL_CALL);
  return (0, l.jsx)(eE, {
    children: (0, l.jsx)(_.default, {
      page: eO.AnalyticsPages.CHANNEL_CALL,
      children: (0, l.jsx)(ex.ChannelCallChatLayerProvider, {
        children: (0, l.jsxs)(ej.VoiceChannelEffectsLayerProvider, {
          children: [(0, l.jsx)(ew, {
            channel: n,
            guild: W,
            hasConnectPermission: Q,
            participantsOpen: w,
            renderExternalHeader: s,
            appContext: E,
            call: Y,
            popoutWindow: Z,
            popoutWindowAlwaysOnTop: X,
            mentionCount: z,
            selectedStream: H,
            mode: D,
            inCall: C,
            participants: M,
            filteredParticipants: j,
            participantsVersion: b,
            layout: U,
            chatOpen: k,
            maxSidebarWidth: r - 550,
            shouldUseVoiceEffectsActionBar: em,
            currentUserId: K,
            selectedParticipant: B,
            allActiveStreams: G,
            useNewInviteButton: ed,
            connectedToEmbeddedActivity: eh,
            showChatToasts: q,
            storedCallHeaderHeight: $,
            updateStoredCallHeaderHeight: ee,
            wrapperRef: o,
            callContainerDimensions: {
              width: c,
              height: h
            },
            callContainerRef: m,
            channelChatRef: p,
            width: r,
            maxHeight: i,
            forceShowControls: ep,
            awaitingRemoteSessionInfo: J
          }), !n.isPrivate() && (0, l.jsx)(ej.VoiceChannelEffectsLayerContainer, {}), (0, l.jsx)(ex.ChannelCallChatLayerContainer, {})]
        })
      })
    })
  })
}