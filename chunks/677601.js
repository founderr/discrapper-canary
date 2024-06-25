n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(846519),
  h = n(481060),
  m = n(570140),
  E = n(475179),
  p = n(239091),
  g = n(287734),
  f = n(872810),
  C = n(153867),
  _ = n(944543),
  I = n(410575),
  x = n(393238),
  T = n(110924),
  N = n(40851),
  Z = n(115130),
  S = n(317381),
  v = n(596040),
  A = n(296797),
  M = n(349619),
  R = n(100527),
  j = n(367907),
  L = n(906732),
  O = n(211644),
  P = n(258609),
  y = n(446226),
  b = n(276598),
  D = n(569545),
  U = n(382182),
  k = n(788983),
  w = n(928518),
  H = n(703656),
  G = n(740492),
  B = n(793319),
  V = n(3861),
  F = n(493754),
  z = n(937995),
  W = n(618158),
  Y = n(880831),
  K = n(73563),
  q = n(751843),
  X = n(616286),
  Q = n(268353),
  J = n(786915),
  $ = n(800965),
  ee = n(107169),
  et = n(891551),
  en = n(488785),
  el = n(199902),
  ei = n(314897),
  es = n(979696),
  ea = n(523746),
  er = n(430824),
  eo = n(496675),
  ec = n(306680),
  eu = n(944486),
  ed = n(594174),
  eh = n(979651),
  em = n(285952),
  eE = n(626135),
  ep = n(934415),
  eg = n(585483),
  ef = n(358085),
  eC = n(792125),
  e_ = n(998502),
  eI = n(228488),
  ex = n(358221),
  eT = n(414910),
  eN = n(887012),
  eZ = n(909820),
  eS = n(493010),
  ev = n(742603),
  eA = n(221888),
  eM = n(900211),
  eR = n(18759),
  ej = n(878752),
  eL = n(354459),
  eO = n(981631),
  eP = n(689938),
  ey = n(549321);

function eb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eD = {
    [eO.AEg.NORMAL]: ey.normal,
    [eO.AEg.MINIMUM]: ey.minimum,
    [eO.AEg.NO_CHAT]: ey.noChat,
    [eO.AEg.FULL_SCREEN]: ey.fullScreen
  },
  eU = {
    [eO.IlC.POPOUT]: ey.popout,
    [eO.IlC.APP]: null,
    [eO.IlC.OVERLAY]: null
  };
class ek extends i.PureComponent {
  getRootNode() {
    var e, t;
    return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById("app-mount")
  }
  componentDidMount() {
    let {
      channel: e,
      layout: t
    } = this.props;
    this.currentDocument.addEventListener(eI.NO, this.handleFullScreenChange), eE.default.track(eO.rMx.VIDEO_LAYOUT_TOGGLED, {
      video_layout: this.inPopout ? "popout" : t,
      ...(0, j.AB)(e.id)
    })
  }
  componentWillUnmount() {
    this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eI.NO, this.handleFullScreenChange), !(this.inPopout && (0, ef.isMac)()) && this.maybeLeaveFullScreen()
  }
  componentDidUpdate(e) {
    let {
      participantsOpen: t,
      inCall: n,
      mode: l,
      layout: i
    } = this.props, s = this.getRootNode();
    if (null != s && e.mode === eO.WtW.VIDEO && l === eO.WtW.VOICE && (0, eI.rB)(s, this.currentDocument) && (0, eI.Pr)(s, this.currentDocument), e.participantsOpen !== t || i !== e.layout) {
      var a;
      null === (a = this._contentRef.current) || void 0 === a || a.triggerResize()
    }
    e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout())
  }
  get nativePopoutSupported() {
    return ef.isPlatformEmbedded && e_.ZP.supportsFeature(eO.eRX.POPOUT_WINDOWS)
  }
  get popoutSupported() {
    return !ef.isPlatformEmbedded || this.nativePopoutSupported
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
      mainText: eP.Z.Messages.POPOUT_PLAYER_OPENED
    } : null
  }
  get paused() {
    return this.popoutOpen && !this.inPopout
  }
  get inPopout() {
    return this.props.appContext === eO.IlC.POPOUT
  }
  get viewProperties() {
    let {
      layout: e,
      mode: t,
      channel: n,
      inCall: l
    } = this.props, i = t === eO.WtW.VIDEO && l && !(this.popoutOpen && !this.inPopout), s = t === eO.WtW.VIDEO && l && this.popoutSupported, a = t !== eO.WtW.VOICE && n.isPrivate() && !this.inPopout && l, r = n.type === eO.d4z.GUILD_VOICE, o = e === eO.AEg.MINIMUM || e === eO.AEg.NORMAL, c = this.inPopout && this.nativePopoutSupported, u = {
      renderHeader: !0,
      useTheme: !1,
      useExternalHeader: o,
      canInvite: r,
      canPopout: s,
      canFullscreen: i,
      canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
      canChangeLayout: a,
      canStayOnTop: c
    };
    if (!l) return {
      ...u,
      canFullscreen: i,
      useTheme: !0
    };
    switch (e) {
      case eO.AEg.FULL_SCREEN:
        return {
          ...u, canPopout: !this.inPopout && this.popoutOpen && u.canPopout
        };
      case eO.AEg.MINIMUM:
        return {
          ...u, canPopout: !1, useTheme: !0
        };
      case eO.AEg.NO_CHAT:
      case eO.AEg.NORMAL:
        return {
          ...u
        }
    }
  }
  renderContent(e) {
    var t;
    let {
      selectedParticipant: n,
      inCall: i,
      hasConnectPermission: s,
      mode: a,
      popoutWindow: r,
      participantsOpen: o,
      participants: c,
      filteredParticipants: u,
      participantsVersion: d,
      channel: h,
      guild: m,
      layout: E,
      forceShowControls: p,
      awaitingRemoteSessionInfo: g,
      currentChannelActivities: f
    } = this.props, C = E === eO.AEg.MINIMUM, _ = C || E === eO.AEg.NORMAL, I = i && a === eO.WtW.VIDEO, x = (null !== (t = null == f ? void 0 : f.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
    return this._lastIdleProps = e, (0, l.jsx)(K.Z, {
      renderHeader: this.renderHeader,
      renderBottomLeft: this.renderBottomLeft,
      renderBottomCenter: this.renderBottomCenter,
      renderBottomRight: this.renderBottomRight,
      renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
      renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
      renderVoiceChannelEffects: this.renderVoiceChannelEffects,
      ...e,
      screenMessage: this.screenMessage,
      disableGradients: C,
      idle: !p && i && !C && e.idle,
      children: i && this.popoutOpen && !this.inPopout ? null : (0, l.jsx)(V.Z, {
        ref: this._contentRef,
        inCall: i,
        paused: this.paused,
        channel: h,
        hasConnectPermission: s,
        guild: m,
        participants: c,
        filteredParticipants: u,
        participantsVersion: d,
        selectedParticipant: I ? n : null,
        layout: E,
        idle: e.idle,
        mode: a,
        onSelectParticipant: this.handleSelectParticipant,
        onContextMenuParticipant: this.handleContextMenu,
        showParticipants: o && (!_ || x),
        popoutWindow: this.inPopout ? r : null,
        awaitingRemoteSessionInfo: g
      })
    })
  }
  render() {
    let {
      layout: e,
      channel: t,
      guild: n,
      mode: i,
      chatOpen: s,
      appContext: r,
      maxSidebarWidth: o,
      maxHeight: c,
      inCall: u
    } = this.props, {
      resizedHeight: d
    } = this.state, h = i === eO.WtW.VIDEO, m = e !== eO.AEg.NO_CHAT && e !== eO.AEg.FULL_SCREEN && null != c;
    return (0, l.jsxs)("div", {
      className: a()(ey.wrapper, eD[e], eU[r], {
        [ey.poppedOut]: this.popoutOpen && !this.inPopout && e !== eO.AEg.NO_CHAT && t.isPrivate(),
        [ey.video]: h,
        [ey.chatSidebarOpen]: s
      }),
      ref: e => {
        this._wrapperRef.current = e, this.props.wrapperRef.current = e
      },
      style: m && null != d ? {
        minHeight: 230,
        maxHeight: c,
        height: d
      } : void 0,
      children: [(0, l.jsx)("div", {
        className: a()(ey.callContainer, {
          [(0, eC.Q)(eO.BRd.DARK)]: h
        }),
        ref: e => {
          this._callContainerRef.current = e, this.props.callContainerRef.current = e
        },
        children: (0, l.jsx)(z.ZP, {
          timeout: 2e3,
          children: e => this.renderContent(e)
        })
      }), m && (0, l.jsx)(eM.Z, {
        minHeight: 230,
        maxHeight: c,
        resizableNode: this._wrapperRef,
        onResize: this.handleCallResize,
        onResizeEnd: this.props.updateStoredCallHeaderHeight
      }), (0, l.jsx)("div", {
        className: ey.channelChatWrapper,
        ref: e => {
          this._channelChatRef.current = e, this.props.channelChatRef.current = e
        },
        children: s && (!u || !this.popoutOpen || this.inPopout) && (0, l.jsx)(eS.Z, {
          channel: t,
          guild: n,
          maxWidth: o
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), eb(this, "_prevLayout", eO.AEg.MINIMUM), eb(this, "_wrapperRef", i.createRef()), eb(this, "_callContainerRef", i.createRef()), eb(this, "_channelChatRef", i.createRef()), eb(this, "_contentRef", i.createRef()), eb(this, "_videoBackgroundTooltipTimeout", new d.V7), eb(this, "_lastIdleProps", null), eb(this, "state", {
      resizedHeight: G.ZP.callHeaderHeight
    }), eb(this, "handleFullScreenChange", () => {
      let e = this.getRootNode();
      null != e && !(0, eI.rB)(e, this.currentDocument) && this.props.layout === eO.AEg.FULL_SCREEN && this.handleFullScreen()
    }), eb(this, "handleFullScreen", () => {
      let e = this.getRootNode();
      null != e && (this.props.layout !== eO.AEg.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(eO.AEg.FULL_SCREEN), (0, eI.Dj)(e)) : this.maybeLeaveFullScreen())
    }), eb(this, "maybeLeaveFullScreen", () => {
      let e = this.getRootNode();
      if (null != e) this.props.layout === eO.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eI.Pr)(e, this.currentDocument))
    }), eb(this, "handleToggleLayout", () => {
      this.handleChangeLayout(this.props.layout === eO.AEg.NORMAL ? eO.AEg.NO_CHAT : eO.AEg.NORMAL)
    }), eb(this, "handleChangeLayout", e => {
      let {
        channel: t,
        appContext: n,
        layout: l
      } = this.props;
      l !== e && (E.Z.updateLayout(t.id, e, n), e === eO.AEg.FULL_SCREEN && t.isPrivate() && eg.S.dispatch(eO.CkL.TEXTAREA_BLUR))
    }), eb(this, "handleDisconnect", () => {
      this.props.layout === eO.AEg.FULL_SCREEN && this.handleFullScreen()
    }), eb(this, "handleContextMenu", (e, t) => {
      var i, s;
      let {
        channel: a,
        appContext: r,
        layout: c
      } = this.props, u = {
        onClose: () => {
          var e;
          return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle("menu")
        },
        context: r
      };
      switch (null === (i = this._lastIdleProps) || void 0 === i || i.onPreventIdle("menu"), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
        case eL.fO.HIDDEN_STREAM:
        case eL.fO.STREAM:
          (0, p.jW)(t, async () => {
            let {
              default: t
            } = await n.e("22183").then(n.bind(n, 987281));
            return n => (0, l.jsx)(t, {
              ...n,
              stream: e.stream,
              exitFullscreen: this.maybeLeaveFullScreen,
              appContext: r
            })
          }, u);
          return;
        case eL.fO.USER:
          let d = ed.default.getUser(e.id);
          if (null != d) switch (a.type) {
            case eO.d4z.DM:
              return (0, p.jW)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("22036"), n.e("56826")]).then(n.bind(n, 131404));
                return t => (0, l.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  user: d,
                  channel: a,
                  showModalItems: !0
                })
              }, u);
            case eO.d4z.GROUP_DM:
              return (0, p.jW)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("60677")]).then(n.bind(n, 354589));
                return t => (0, l.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  showChatItems: c === eO.AEg.MINIMUM || c === eO.AEg.NORMAL,
                  user: d,
                  channel: a,
                  showModalItems: !0
                })
              }, u);
            case eO.d4z.GUILD_VOICE:
              let h = a.getGuildId();
              return o()(null != h, "GuildID null for guild voice channel"), (0, p.jW)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
                return t => (0, l.jsx)(e, {
                  ...t,
                  showMediaItems: !0,
                  showChannelCallItems: !0,
                  showChatItems: !1,
                  user: d,
                  channel: a,
                  guildId: h,
                  showModalItems: !0
                })
              }, u)
          }
      }
    }), eb(this, "handleCallResize", e => {
      this.setState({
        resizedHeight: e
      })
    }), eb(this, "handleSelectParticipant", (e, t) => {
      let {
        channel: n,
        selectedParticipant: l,
        allActiveStreams: i,
        inCall: s,
        mode: a
      } = this.props;
      (0, eL._5)(e) && (0, U.p9)(n, eh.Z, er.Z, eo.Z, P.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === i.filter(t => (0, D.V9)(t) === e.id && t.state !== eO.jm8.ENDED).length && (0, f.rn)((0, D.my)(e.id), {
        forceMultiple: t.shiftKey
      })), s && a === eO.WtW.VIDEO && ((null == l ? void 0 : l.id) === e.id ? E.Z.selectParticipant(n.id, null) : E.Z.selectParticipant(n.id, e.id))
    }), eb(this, "handleOpenPopout", () => {
      let {
        channel: e,
        connectedToEmbeddedActivity: t
      } = this.props, n = () => {
        let t = e.getGuildId();
        null != t && (0, H.uL)((0, ep.LY)(t)), k.hP(e)
      };
      t ? (0, M.Z)(n) : n()
    }), eb(this, "handleStayOnTop", e => {
      k.hY(eO.KJ3.CHANNEL_CALL_POPOUT, e)
    }), eb(this, "handleClosePopout", () => {
      k.xv(eO.KJ3.CHANNEL_CALL_POPOUT)
    }), eb(this, "handleFullscreenParticipant", (e, t) => {
      let {
        layout: n,
        selectedParticipant: l
      } = this.props, i = n === eO.AEg.FULL_SCREEN;
      (!i && (null == l ? void 0 : l.id) !== e.id || i && (null == l ? void 0 : l.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen()
    }), eb(this, "renderRegionSelect", () => {
      let e;
      let {
        call: t,
        channel: n,
        layout: i
      } = this.props;
      return !this.inPopout && i !== eO.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, l.jsx)(_.Z, {
        call: t
      })), (0, l.jsx)(em.Z, {
        justify: em.Z.Justify.END,
        children: e
      })
    }), eb(this, "renderBottomCenter", () => {
      let {
        channel: e,
        inCall: t,
        layout: n
      } = this.props;
      return t || n === eO.AEg.MINIMUM || n === eO.AEg.NORMAL ? (0, l.jsx)(B.ZP, {
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
        appContext: i,
        useNewInviteButton: s,
        selectedParticipant: r,
        shouldUseVoiceEffectsActionBar: o,
        inCall: c,
        participants: u
      } = this.props;
      if (!c) return null;
      let d = e === eO.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
        m = [eO.AEg.FULL_SCREEN, eO.AEg.NO_CHAT].includes(e),
        E = u.some(e => e.type === eL.fO.STREAM),
        p = e === eO.AEg.FULL_SCREEN ? () => {
          this._prevLayout = eO.AEg.NORMAL, this.handleFullScreen()
        } : this.handleToggleLayout,
        {
          canChangeLayout: g,
          canInvite: f
        } = this.viewProperties,
        C = s ? (0, l.jsx)(F.Z, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eL.fO.STREAM ? (0, D.my)(r.id) : void 0,
          applicationId: (null == r ? void 0 : r.type) === eL.fO.ACTIVITY ? r.id : void 0,
          appContext: i,
          className: ey.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eO.d4z.GUILD_VOICE ? eO.ZY5.GUILD_CHANNEL : eO.ZY5.DM_CHANNEL
        }) : (0, l.jsx)(J.Z, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eL.fO.STREAM ? (0, D.my)(r.id) : void 0,
          className: ey.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eO.d4z.GUILD_VOICE ? eO.ZY5.GUILD_CHANNEL : eO.ZY5.DM_CHANNEL
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [f && !o ? C : null, g ? (0, l.jsxs)(em.Z, {
          className: ey.iconWrapper,
          align: em.Z.Align.CENTER,
          grow: 0,
          children: [(0, l.jsx)(q.Z, {
            label: m ? eP.Z.Messages.SHOW_CHAT : eP.Z.Messages.HIDE_CHAT,
            direction: d,
            className: ey.leftTrayIcon,
            onClick: p
          }), m && t > 0 ? (0, l.jsx)(h.NumberBadge, {
            className: ey.badge,
            count: t
          }) : null]
        }) : null, (null == r ? void 0 : r.type) !== eL.fO.STREAM && (null == r ? void 0 : r.type) !== eL.fO.ACTIVITY || o ? null : (0, l.jsx)(W.Z, {
          children: (0, l.jsx)(eA.Z, {
            className: a()(ey.leftTrayIcon, ey.viewersButton),
            participant: r,
            maxVisibleUsers: 4,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: this.inPopout || e === eO.AEg.FULL_SCREEN
          })
        }), o && (0, l.jsx)(ej.Z, {
          channel: n,
          hasActiveStream: E,
          themeable: this.viewProperties.useTheme
        }), (0, l.jsx)(b.Z, {
          showLeftDivider: o,
          themeable: this.viewProperties.useTheme,
          className: ey.leftTrayIcon,
          channel: n
        })]
      })
    }), eb(this, "renderBottomRight", () => {
      let {
        popoutWindow: e,
        popoutWindowAlwaysOnTop: t,
        currentUserId: n,
        selectedParticipant: i
      } = this.props, {
        canFullscreen: s,
        canStayOnTop: a,
        canPopout: r,
        useTheme: o
      } = this.viewProperties;
      return (0, l.jsxs)(l.Fragment, {
        children: [null != i && i.type !== eL.fO.ACTIVITY && i.user.id !== n ? (0, l.jsx)(et.Z, {
          context: (0, eT.Z)(i.type),
          userId: i.user.id,
          currentWindow: this.inPopout ? null != e ? e : void 0 : window,
          sliderClassName: ey.volumeSlider,
          className: ey.rightTrayIcon
        }) : null, a ? (0, l.jsx)(ee.Z, {
          className: ey.rightTrayIcon,
          popoutWindowAlwaysOnTop: t,
          onToggleStayOnTop: this.handleStayOnTop
        }) : null, r ? (0, l.jsx)($.Z, {
          themeable: o,
          popoutOpen: this.popoutOpen,
          className: ey.rightTrayIcon,
          onOpenPopout: this.handleOpenPopout,
          onClosePopout: this.handleClosePopout
        }) : null, s ? (0, l.jsx)(Q.Z, {
          themeable: o,
          node: this.getRootNode(),
          guestWindow: e,
          className: ey.rightTrayIcon,
          onClick: this.handleFullScreen
        }) : null]
      })
    }), eb(this, "renderChatButton", e => {
      let {
        className: t,
        showingClassName: n
      } = e, {
        channel: i,
        chatOpen: s,
        inCall: a
      } = this.props;
      return s || this.popoutOpen && !this.inPopout && a ? null : (0, l.jsx)(X.T, {
        channelId: i.id,
        className: t,
        showingClassName: n
      })
    }), eb(this, "renderChatToasts", () => {
      let {
        showChatToasts: e,
        chatOpen: t,
        channel: n,
        inCall: i
      } = this.props;
      return !e || t || this.popoutOpen && !this.inPopout && i ? null : (0, l.jsx)(eZ.ZP, {
        children: (0, l.jsx)(Y.Z, {
          className: ey.chatToasts,
          channelId: n.id
        })
      })
    }), eb(this, "renderVoiceChannelEffects", () => {
      let {
        channel: e,
        callContainerDimensions: t
      } = this.props;
      return (0, l.jsx)(eR.ZP, {
        children: (0, l.jsx)(en.Z, {
          callHeight: t.height,
          channelId: e.id
        })
      })
    }), eb(this, "renderHeader", () => {
      let {
        renderExternalHeader: e,
        channel: t,
        guild: n,
        appContext: i,
        chatOpen: s,
        inCall: a
      } = this.props, {
        useExternalHeader: r,
        canSelectRegion: o,
        renderHeader: c
      } = this.viewProperties;
      return c ? (0, l.jsxs)(W.Z, {
        children: [(0, l.jsx)("div", {
          className: ey.headerWrapper,
          children: r ? null == e ? void 0 : e() : (0, l.jsx)(ev.Z, {
            channel: t,
            guild: n,
            appContext: i,
            inCall: a,
            isChatOpen: s || this.popoutOpen && !this.inPopout && a,
            exitFullScreen: this.maybeLeaveFullScreen
          })
        }), o ? this.renderRegionSelect() : null]
      }) : null
    })
  }
}
t.Z = function(e) {
  var t;
  let {
    channel: n,
    renderExternalHeader: s,
    maxHeight: a
  } = e, {
    width: r = 0,
    ref: o
  } = (0, x.Z)(), {
    width: d = 0,
    height: m = 0,
    ref: p
  } = (0, x.Z)(), {
    ref: g
  } = (0, x.Z)(), f = (0, N.bp)(), _ = (0, y.Z)(), M = (0, c.e7)([eu.Z], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id
  }), j = (0, T.Z)(M), {
    participants: b,
    filteredParticipants: D,
    participantsVersion: U,
    mode: k,
    layout: H,
    participantsOpen: B,
    chatOpen: V,
    selectedParticipant: F
  } = (0, c.cj)([ex.Z], () => {
    let e = f === eO.IlC.POPOUT,
      t = ex.Z.getMode(n.id);
    e && (t = eO.WtW.VIDEO);
    let l = t === eO.WtW.VIDEO ? ex.Z.getLayout(n.id, f) : eO.AEg.MINIMUM;
    return e && l !== eO.AEg.FULL_SCREEN && (l = eO.AEg.NO_CHAT), {
      mode: t,
      layout: l,
      selectedParticipant: t !== eO.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
      participants: ex.Z.getParticipants(n.id),
      filteredParticipants: ex.Z.getFilteredParticipants(n.id),
      participantsOpen: ex.Z.getParticipantsOpen(n.id),
      chatOpen: ex.Z.getChatOpen(n.id),
      participantsVersion: ex.Z.getParticipantsVersion(n.id)
    }
  }, [f, n.id]), z = (0, c.Wu)([el.Z], () => el.Z.getAllActiveStreams()), {
    selectedStream: W
  } = (0, c.cj)([el.Z], () => ({
    selectedStream: null != F ? el.Z.getActiveStreamForStreamKey(F.id) : null
  }), [F]), Y = (0, c.e7)([er.Z], () => er.Z.getGuild(n.getGuildId())), K = (0, c.e7)([ea.Z], () => ea.Z.getCall(n.id), [n.id]), q = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]), X = (0, c.e7)([ei.default], () => ei.default.getId()), {
    popoutWindow: Q,
    popoutWindowAlwaysOnTop: J
  } = (0, c.cj)([w.Z], () => ({
    popoutWindow: w.Z.getWindow(eO.KJ3.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: w.Z.getIsAlwaysOnTop(eO.KJ3.CHANNEL_CALL_POPOUT)
  })), $ = (0, c.e7)([eo.Z], () => eo.Z.can(eO.Plq.CONNECT, n)), ee = (0, c.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)), et = (0, c.e7)([P.Z], () => P.Z.getAwaitingRemoteSessionInfo()), en = (0, c.e7)([G.ZP], () => G.ZP.callHeaderHeight), ed = i.useCallback(e => {
    C.ZP.updatedUnsyncedSettings({
      callHeaderHeight: e
    })
  }, []), eh = null !== (t = null == Y ? void 0 : Y.id) && void 0 !== t ? t : null, em = (0, v.Z)(eh, n.id), eE = (0, c.e7)([Z.Z], () => Z.Z.getFetchState(), []), ep = (0, T.Z)(eE);
  i.useEffect(() => {
    "errored" === eE && "errored" !== ep && (0, h.showToast)((0, h.createToast)(eP.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, h.ToastType.FAILURE))
  }, [eE, ep]);
  let eg = (0, c.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
  i.useEffect(() => {
    M && !j && null != eg && E.Z.selectParticipant(n.id, eg.applicationId)
  }, [M, j, eg, n.id]), i.useEffect(() => {
    let e = !1,
      t = null;
    return (async () => {
      M && k === eO.WtW.VIDEO && (t = await e_.ZP.blockDisplaySleep(), e && null != t && e_.ZP.unblockDisplaySleep(t))
    })(), () => {
      null != t ? e_.ZP.unblockDisplaySleep(t) : e = !0
    }
  }, [M, k]), (0, A.Z)({
    onTransition: void 0
  });
  let ef = (0, eN.Z)(n, !0),
    eC = (0, O.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
    {
      analyticsLocations: eI
    } = (0, L.ZP)(R.Z.CHANNEL_CALL),
    eT = S.ZP.getEmbeddedActivitiesForChannel(n.id);
  return (0, l.jsx)(L.Gt, {
    value: eI,
    children: (0, l.jsx)(I.Z, {
      page: eO.ZY5.CHANNEL_CALL,
      children: (0, l.jsx)(eZ.B2, {
        children: (0, l.jsxs)(eR._A, {
          children: [(0, l.jsx)(ek, {
            channel: n,
            guild: Y,
            hasConnectPermission: $,
            participantsOpen: B,
            renderExternalHeader: s,
            appContext: f,
            call: K,
            popoutWindow: Q,
            popoutWindowAlwaysOnTop: J,
            mentionCount: q,
            selectedStream: W,
            mode: k,
            inCall: M,
            participants: b,
            filteredParticipants: D,
            participantsVersion: U,
            layout: H,
            chatOpen: V,
            maxSidebarWidth: r - 550,
            shouldUseVoiceEffectsActionBar: ef,
            currentUserId: X,
            selectedParticipant: F,
            allActiveStreams: z,
            useNewInviteButton: em,
            connectedToEmbeddedActivity: null != eg,
            showChatToasts: ee,
            storedCallHeaderHeight: en,
            updateStoredCallHeaderHeight: ed,
            wrapperRef: o,
            callContainerDimensions: {
              width: d,
              height: m
            },
            callContainerRef: p,
            channelChatRef: g,
            width: r,
            maxHeight: a,
            forceShowControls: eC,
            awaitingRemoteSessionInfo: et,
            currentChannelActivities: eT
          }), !n.isPrivate() && (0, l.jsx)(eR.YR, {}), (0, l.jsx)(eZ.H_, {})]
        })
      })
    })
  })
}