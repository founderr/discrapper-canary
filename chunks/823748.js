n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(392711),
  u = n.n(c),
  d = n(266067),
  h = n(848246),
  m = n(442837),
  p = n(704215),
  E = n(952265),
  g = n(481060),
  f = n(239091),
  C = n(377993),
  _ = n(457868),
  I = n(561472),
  x = n(36311),
  T = n(112724),
  N = n(902840),
  Z = n(110924),
  S = n(317381),
  v = n(82888),
  A = n(917107),
  M = n(358221),
  R = n(677601),
  j = n(541716),
  L = n(236091),
  O = n(663993),
  P = n(252618),
  y = n(201493),
  b = n(605236),
  D = n(174130),
  U = n(588322),
  k = n(517525),
  w = n(445384),
  H = n(613464),
  B = n(705563),
  G = n(730647),
  V = n(66999),
  F = n(826763),
  z = n(180216),
  W = n(51486),
  Y = n(168843),
  K = n(442336),
  q = n(57304),
  X = n(605953),
  Q = n(374306),
  J = n(984370),
  $ = n(910611),
  ee = n(915718),
  et = n(518311),
  en = n(180539),
  el = n(882378),
  ei = n(207868),
  es = n(246919),
  ea = n(754688),
  er = n(41776),
  eo = n(6242),
  ec = n(757692),
  eu = n(386542),
  ed = n(134483),
  eh = n(703656),
  em = n(359110),
  ep = n(854709),
  eE = n(14091),
  eg = n(6025),
  ef = n(897473),
  eC = n(922482),
  e_ = n(504185),
  eI = n(657218),
  ex = n(66556),
  eT = n(739830),
  eN = n(377929),
  eZ = n(900157),
  eS = n(108427),
  ev = n(171368),
  eA = n(346967),
  eM = n(524329),
  eR = n(995532),
  ej = n(738643),
  eL = n(433355),
  eO = n(592125),
  eP = n(703558),
  ey = n(486472),
  eb = n(731290),
  eD = n(430824),
  eU = n(158776),
  ek = n(768119),
  ew = n(944486),
  eH = n(914010),
  eB = n(594174),
  eG = n(979651),
  eV = n(368666),
  eF = n(792125),
  ez = n(933557),
  eW = n(287746),
  eY = n(325708),
  eK = n(335615),
  eq = n(992744),
  eX = n(923029),
  eQ = n(176505),
  eJ = n(981631),
  e$ = n(918559),
  e0 = n(354459),
  e1 = n(921944),
  e2 = n(440493),
  e7 = n(157925),
  e3 = n(689938),
  e4 = n(175803);

function e5(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e9 = (0, O.Un)({
  createPromise: () => Promise.all([n.e("99387"), n.e("49131")]).then(n.bind(n, 434878)),
  webpackId: 434878,
  renderLoader: () => (0, l.jsx)("div", {
    className: e4.loader,
    children: (0, l.jsx)(g.Spinner, {})
  }),
  name: "ForumChannel"
});
class e6 extends i.PureComponent {
  componentDidMount() {
    (0, eS.e)("guild_channel")
  }
  componentDidUpdate(e) {
    null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({
      topicExpanded: !1
    }), this.openChannelModal()
  }
  openChannelContextMenu(e, t) {
    let {
      guild: i
    } = this.props;
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), o()(null != i, "Missing guild in Channel.openChannelContextMenu"), (0, f.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("24783")]).then(n.bind(n, 439635));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t,
        guild: i
      })
    })
  }
  openThreadContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, f.jW)(e, async () => {
      let {
        default: e
      } = await n.e("78650").then(n.bind(n, 422200));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openDMContextMenu");
    let i = eB.default.getUser(t.getRecipientId());
    o()(null != i, "Missing user in Channel.openDMContextMenu"), (0, f.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("22036"), n.e("56826")]).then(n.bind(n, 131404));
      return n => (0, l.jsx)(e, {
        ...n,
        user: i,
        channelSelected: !0,
        channel: t
      })
    })
  }
  shouldRenderCall() {
    let {
      channel: e,
      showCall: t,
      nsfwAllowed: n,
      nsfwAgree: l
    } = this.props;
    return (!(null == e ? void 0 : e.isNSFW()) || n && l) && t
  }
  renderCall() {
    let {
      channel: e
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall()) return null;
    switch (e.type) {
      case eJ.d4z.GUILD_STAGE_VOICE:
        return (0, l.jsx)(e_.Z, {
          channel: e
        }, e.id);
      case eJ.d4z.GUILD_VOICE:
      case eJ.d4z.DM:
      case eJ.d4z.GROUP_DM:
      case eJ.d4z.PUBLIC_THREAD:
      case eJ.d4z.PRIVATE_THREAD:
        let t = this.props.height - 200;
        return (0, l.jsx)(R.Z, {
          channel: e,
          renderExternalHeader: this.renderHeaderBar,
          maxHeight: t
        }, "call-".concat(e.id));
      default:
        return null
    }
  }
  renderEmbeddedActivityPanel() {
    let {
      channel: e
    } = this.props, t = this.shouldRenderCall();
    if (o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t) return null;
    let n = this.props.height - 200;
    return (0, l.jsx)(v.Z, {
      maxHeight: n,
      renderExternalHeader: this.renderHeaderBar
    })
  }
  renderChat() {
    let {
      channel: e,
      nsfwAgree: t,
      guild: n,
      nsfwAllowed: i,
      needSubscriptionToAccess: s
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderChat"), s) return (o()(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, l.jsx)(F.Z, {
      guildId: n.id
    }) : (0, l.jsx)(G.l, {
      guildId: n.id,
      children: (0, l.jsx)(z.Z, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!i || !t)) return (0, l.jsx)(x.Z, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return o()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(y.Z, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o()(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, l.jsx)(e9, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, l.jsx)(eW.Z, {
      channel: e,
      guild: n,
      chatInputType: j.I.NORMAL
    }, null != n ? n.id : "home")
  }
  renderSidebar() {
    let {
      searchId: e,
      channel: t,
      parentChannel: n,
      guild: i,
      needSubscriptionToAccess: s,
      section: a,
      showCall: r,
      showActivityPanel: c
    } = this.props;
    if (o()(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (a === eJ.ULH.PROFILE && t.isPrivate() && !r && !c) return (0, l.jsx)(eA.Z, {
      location: "Channel",
      channel: t
    }, "private-channel-profile-".concat(t.id));
    else if (a === eJ.ULH.MEMBERS) switch (t.type) {
      case eJ.d4z.GROUP_DM:
        return (0, l.jsx)(C.Z, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eJ.d4z.GUILD_DIRECTORY:
      case eJ.d4z.GUILD_FORUM:
      case eJ.d4z.GUILD_MEDIA:
      case eJ.d4z.GUILD_ANNOUNCEMENT:
      case eJ.d4z.GUILD_TEXT:
        var u;
        let d = !0 === eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, l.jsx)(eK.Z, {
          channel: t
        }, "channel-members-".concat(d));
      case eJ.d4z.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, l.jsx)(eK.Z, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eJ.d4z.PUBLIC_THREAD:
      case eJ.d4z.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != i) return (0, l.jsx)(_.Z, {
          channel: t,
          guild: i
        }, "channel-members-".concat(t.id))
    } else if (a === eJ.ULH.SEARCH && null != e) return (0, l.jsx)(eE.Z, {
      searchId: e
    });
    return null
  }
  openChannelModal() {
    let {
      channel: e,
      guildId: t,
      hasModalOpen: i,
      showWelcomeModal: s,
      isLurking: a,
      isUnavailable: r,
      showRealNameModal: o
    } = this.props;
    return null == e || null == t || r || i ? null : (o && (0, g.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("57372")]).then(n.bind(n, 784280));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => w.Z.viewPrompt(e2.r.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, g.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, 184782));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, eM.y0)(t, a),
      modalKey: "Guild Welcome Screen Modal"
    }), null)
  }
  renderThreadSidebar() {
    let e;
    let {
      channel: t,
      section: n,
      channelSidebarState: i,
      guildSidebarState: s,
      nsfwAgree: a,
      nsfwAllowed: r,
      width: o
    } = this.props;
    if (null == s && null == i) return null;
    if (n === eJ.ULH.SIDEBAR_CHAT && null != i) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !a)) return null;
      switch (i.type) {
        case ef.tI.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, l.jsx)(eI.Z, {
            parentChannelId: i.parentChannelId,
            parentMessageId: i.parentMessageId,
            location: i.location
          });
          break;
        case ef.tI.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.Z : eZ.Z;
          e = (0, l.jsx)(n, {
            channelId: i.channelId
          });
          break;
        case ef.tI.VIEW_CHANNEL:
        case ef.tI.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === ef.jL.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, l.jsx)("div", {
          style: {
            width: eJ.$Y6
          },
          className: e4.guildSidebar,
          children: (0, l.jsx)(H.Z, {
            guildId: e,
            userId: t,
            onClose: () => eg.Z.closeGuildSidebar(e)
          })
        })
      }
      return null
    }
    if (null == e) return null;
    let c = (null == t ? void 0 : t.type) != null && eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      u = o - eJ.PrS - c;
    return (0, l.jsx)(eY.Z, {
      sidebarType: (null == t ? void 0 : t.type) != null && eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? eY.y.PostSidebar : eY.y.ThreadSidebar,
      maxWidth: u,
      onWidthChange: this.handleThreadSidebarResize,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      formattedChannelName: n,
      isUnavailable: i,
      layout: s,
      section: r,
      hasModalOpen: o,
      guildSidebarState: c,
      hasTextActivityInPanelMode: u
    } = this.props, {
      threadSidebarWidth: d,
      isThreadSidebarFloating: h
    } = this.state, m = this.shouldRenderCall();
    if (i) return (0, l.jsx)(eq.Z, {});
    if (null == e) return (0, l.jsx)(eX.Z, {
      channelId: this.props.channelId
    });
    let p = r === eJ.ULH.SIDEBAR_CHAT,
      E = null != c && !p,
      g = !e.isForumLikeChannel() && !o,
      f = null == t ? void 0 : t.name;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(P.yY, {
        location: f,
        subsection: null != n ? n : void 0
      }), (0, l.jsxs)("div", {
        className: a()(e4.chat, {
          [e4.threadSidebarOpen]: p || E,
          [e4.threadSidebarFloating]: p && h
        }),
        children: [g ? (0, l.jsx)(I.Z, {
          style: {
            right: p ? d : void 0
          },
          className: e4.uploadArea,
          channel: e,
          draftType: eP.d.ChannelMessage
        }) : null, m || u ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, l.jsxs)("div", {
          className: a()(e4.content, {
            [e4.noChat]: s === eJ.AEg.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, l.jsx)(W.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), e5(this, "state", {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }), e5(this, "handleTitleParentClick", () => {
      let {
        parentChannel: e
      } = this.props;
      if (null != e)(0, em.Kh)(e.id)
    }), e5(this, "_handleContextMenu", (e, t) => {
      switch (t.type) {
        case eJ.d4z.GUILD_VOICE:
        case eJ.d4z.GUILD_ANNOUNCEMENT:
        case eJ.d4z.GUILD_TEXT:
        case eJ.d4z.GUILD_FORUM:
        case eJ.d4z.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eJ.d4z.ANNOUNCEMENT_THREAD:
        case eJ.d4z.PUBLIC_THREAD:
        case eJ.d4z.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eJ.d4z.DM:
          this.openDMContextMenu(e, t)
      }
    }), e5(this, "handleContextMenu", e => {
      o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }), e5(this, "handleParentContextMenu", e => {
      o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }), e5(this, "handleThreadSidebarResize", (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }), e5(this, "openUserProfile", () => {
      let {
        channel: e
      } = this.props;
      o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, ev.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eJ.jXE.CHANNEL_HEADER
        }
      })
    }), e5(this, "renderJoinRequestInterviewButtons", () => {
      let {
        channel: e
      } = this.props;
      return (null == e ? void 0 : e.hasFlag(eQ.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) ? (0, l.jsx)(B.Z, {
        channelId: e.id,
        showTrailingDivider: !0
      }) : null
    }), e5(this, "renderClipsEnabledIndicatorToolbarItem", () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, l.jsx)(L.Z, {
        channelId: null != t ? t.id : null
      }) : null
    }), e5(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
      let {
        selectedParticipant: e,
        premiumIndicatorEnabled: t
      } = this.props;
      return (null == e ? void 0 : e.type) !== e0.fO.STREAM ? null : (0, l.jsx)(k.Z, {
        size: eV.ZP.Sizes.LARGE,
        participant: e,
        showQuality: !0,
        premiumIndicator: t
      }, "live-indicator")
    }), e5(this, "renderHeaderToolbar", () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: i,
        showActivityPanel: s
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let a = [];
      if (e.isSystemDM()) return a;
      switch (e.type) {
        case eJ.d4z.GUILD_STAGE_VOICE:
        case eJ.d4z.GUILD_VOICE:
          break;
        case eJ.d4z.DM:
          a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, l.jsx)(ee.Z, {
            channel: e
          }, "calls")), a.push((0, l.jsx)(q.Z, {
            channel: e
          }, "pins")), a.push((0, l.jsx)(et.Z, {
            channel: e,
            tooltip: e3.Z.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), a.push((0, l.jsx)(en.Z, {
            channel: e,
            showCallOrActivityPanel: i || s
          }, "profile")), a.push((0, l.jsx)(el.Z, {
            channel: e
          }, "safety_tools"));
          break;
        case eJ.d4z.GROUP_DM:
          if (a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, l.jsx)(ee.Z, {
              channel: e
            }, "calls")), a.push((0, l.jsx)(q.Z, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = e3.Z.Messages.GROUP_DM_ADD_FRIENDS;
            a.push((0, l.jsx)(et.Z, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          a.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"));
          break;
        case eJ.d4z.ANNOUNCEMENT_THREAD:
        case eJ.d4z.PRIVATE_THREAD:
        case eJ.d4z.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && a.push((0, l.jsx)(ex.Z, {
            channel: t
          }, "browser")), e.isVocalThread() && a.push((0, l.jsx)(ei.Z, {
            channel: e
          }, "thread-call")), a.push((0, l.jsx)(eT.Z, {
            channel: e
          }, "notifications")), a.push((0, l.jsx)(q.Z, {
            channel: e
          }, "pins")), !e.isArchivedThread() && a.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members")), null != t && (0, N.Lp)(e) && a.push((0, l.jsx)(X.Z, {
            channel: e
          }, "summaries")), a.push((0, l.jsx)(eN.Z, {
            channel: e
          }, "threads-overflow"));
          break;
        case eJ.d4z.GUILD_ANNOUNCEMENT:
        case eJ.d4z.GUILD_TEXT:
          a.push((0, l.jsx)(D.Z, {
            channel: e
          }, "favorites")), a.push((0, l.jsx)(ex.Z, {
            channel: e
          }, "browser")), !n && a.push((0, l.jsx)(K.Z, {
            channel: e
          }, "notifications")), a.push((0, l.jsx)(q.Z, {
            channel: e
          }, "pins")), a.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members")), (0, N.Lp)(e) && a.push((0, l.jsx)(X.Z, {
            channel: e
          }, "summaries"));
          break;
        case eJ.d4z.GUILD_FORUM:
        case eJ.d4z.GUILD_MEDIA:
          !n && (a.push((0, l.jsx)(Q.Z, {
            channel: e
          }, "forum-onboarding")), a.push((0, l.jsx)(K.Z, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && a.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"));
          break;
        case eJ.d4z.GUILD_DIRECTORY:
          a.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"))
      }
      return a
    }), e5(this, "renderMobileToolbar", () => {
      let {
        channel: e
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eJ.d4z.GUILD_STAGE_VOICE:
        case eJ.d4z.GUILD_VOICE:
        case eJ.d4z.DM:
          break;
        case eJ.d4z.GROUP_DM:
          t.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"));
          break;
        case eJ.d4z.ANNOUNCEMENT_THREAD:
        case eJ.d4z.PRIVATE_THREAD:
        case eJ.d4z.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"));
          break;
        case eJ.d4z.GUILD_ANNOUNCEMENT:
        case eJ.d4z.GUILD_TEXT:
        case eJ.d4z.GUILD_FORUM:
        case eJ.d4z.GUILD_MEDIA:
        case eJ.d4z.GUILD_DIRECTORY:
          t.push((0, l.jsx)(Y.Z, {
            channelId: e.id
          }, "members"))
      }
      return t
    }), e5(this, "renderFollowButton", () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, l.jsx)(g.Button, {
        size: g.Button.Sizes.MIN,
        color: g.Button.Colors.PRIMARY,
        className: e4.followButton,
        onClick: () => (0, g.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, 720589));
          return n => (0, l.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e3.Z.Messages.FOLLOW
      }) : null
    }), e5(this, "renderHeaderBar", () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: i,
        guildId: s,
        showCall: r,
        showActivityPanel: c,
        hasVideo: u,
        headerGuildBreadcrumbPosition: d,
        isFavorites: h
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderBar"), o()(null != t, "Should not be null if channel is not null.");
      let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        p = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, l.jsxs)("div", {
        className: e4.subtitleContainer,
        children: [(0, l.jsxs)(J.Z, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || h && !(0, ep.X)(),
          showDivider: h && !(0, ep.X)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: a()(e4.title, u && r ? (0, eF.Q)(eJ.BRd.DARK) : null),
          transparent: r || c,
          "aria-label": e3.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
          children: ["left" === d && (0, l.jsx)($.TS, {
            channel: e,
            guild: i,
            caretPosition: "right"
          }), (0, $.ud)({
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: i,
            hasVideo: u,
            handleContextMenu: this.handleContextMenu,
            handleParentContextMenu: this.handleParentContextMenu,
            handleClick: m,
            handleParentClick: p,
            renderFollowButton: this.renderFollowButton
          }), "right" === d && (0, l.jsx)($.TS, {
            channel: e,
            guild: i,
            caretPosition: "left"
          }), (0, $.v0)(e, i)]
        }, "header-".concat(e.id)), (0, l.jsx)(ed.Z, {
          channelId: e.id
        })]
      })
    })
  }
}
let e8 = (0, T.Z)(e6);
t.Z = i.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, a] = i.useState(null), r = (0, m.e7)([ew.Z], () => ew.Z.getChannelId()), o = (0, m.e7)([ew.Z], () => ew.Z.getVoiceChannelId()), c = (0, m.e7)([eO.Z], () => null != n ? n : eO.Z.getChannel(r), [r, n]), g = (0, m.e7)([eO.Z], () => eO.Z.getChannel(o), [o]), f = null == c ? void 0 : c.parent_id, C = (0, m.e7)([eO.Z], () => eO.Z.getChannel(f), [f]), _ = (0, m.e7)([eD.Z], () => eD.Z.getGuild(null == c ? void 0 : c.guild_id), [c]), {
    needSubscriptionToAccess: I
  } = (0, V.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), x = (0, m.e7)([M.Z], () => {
    let e = null != r ? M.Z.getParticipants(r) : [],
      t = null != r ? M.Z.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), T = (0, m.e7)([S.ZP], () => {
    var e;
    return S.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : eJ.lds)
  }), v = (0, m.e7)([S.ZP], () => S.ZP.getActivityPanelMode()), R = null != T && !(0, A.Z)(null == c ? void 0 : c.id) && v === e$.Ez.PANEL, j = (0, m.e7)([eG.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eG.Z.getVoiceStatesForChannel(c.id)), [c]), L = null != c && c.isPrivate() && !R && x, O = (null == c ? void 0 : c.isGuildVocal()) || L || j, {
    welcomeModalChannelId: P
  } = (0, d.TH)(), y = (0, m.e7)([er.Z], () => null != c && er.Z.isLurking(c.guild_id), [c]), D = (0, m.e7)([eR.Z], () => eR.Z.hasSeen(null == c ? void 0 : c.guild_id, y), [c, y]), U = (0, m.e7)([M.Z, S.ZP], () => null != S.ZP.getConnectedActivityChannelId() && S.ZP.getActivityPanelMode() === e$.Ez.PANEL ? S.ZP.getFocusedLayout() === e$.MI.NO_CHAT ? eJ.AEg.NO_CHAT : eJ.AEg.NORMAL : null != r ? M.Z.getLayout(r) : eJ.AEg.NORMAL, [r]), k = (0, m.e7)([M.Z], () => null != c ? M.Z.getSelectedParticipant(c.id) : null), w = (0, m.e7)([eB.default], () => eB.default.getCurrentUser()), H = (0, es.Z)(_), B = (0, ej.Z)(P, null == _ ? void 0 : _.id), {
    section: G,
    channelSidebarState: F
  } = (0, m.cj)([eL.ZP], () => ({
    section: eL.ZP.getSection(r, null == c ? void 0 : c.isDM()),
    channelSidebarState: eL.ZP.getSidebarState(r)
  }), [r, c]), z = null == _ ? void 0 : _.id, W = (0, m.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(z), [z]), Y = (0, m.e7)([eH.Z], () => eH.Z.getGuildId()) === eJ.I_8, {
    available: K,
    activated: q,
    hqStreamingState: X
  } = (0, eu.k)(h.q.STREAM_HIGH_QUALITY), Q = K && q && X.hqStreamingIsEnabled, J = (0, ec.o)(k, w), $ = (0, eo.lL)("Channel", !0, w, J), ee = (0, ez.ZP)(c), et = (0, ez.ZP)(c, !0), en = null != c && o === c.id, el = null != c && c.isGuildStageVoice();
  i.useEffect(() => {
    var e, t, n;
    let l = (0, eh.s1)();
    if ((null == l ? void 0 : null === (e = l.location) || void 0 === e ? void 0 : e.state) === e7.Df) {
      let {
        channelId: e
      } = null !== (n = (0, ea.Qj)(null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && a(e)
    }
  }, []), i.useEffect(() => {
    null != s && null != c && el && c.id === s && !en && ((0, eC.Cq)(c), a(null))
  }, [s, el]);
  let ei = (0, N.ts)(c),
    ed = null != c && c.isPrivate(),
    em = (0, Z.Z)(ed),
    ep = (0, Z.Z)(null == c ? void 0 : c.id);
  i.useEffect(() => {
    let e = em && !ed,
      t = em && ed && (null == c ? void 0 : c.id) !== ep;
    (e || t) && (0, b.EW)(p.z.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: e1.L.AUTO
    })
  }, [null == c ? void 0 : c.id, ep, ed, em]);
  let eE = (0, E.f9)();
  return (0, l.jsx)(e8, {
    guildId: null == c ? void 0 : c.guild_id,
    channelId: r,
    channel: c,
    channelName: ee,
    formattedChannelName: et,
    parentChannel: C,
    voiceChannel: g,
    layout: U,
    needSubscriptionToAccess: I,
    isLurking: y,
    hasModalOpen: eE,
    section: G,
    channelSidebarState: F,
    guildSidebarState: W,
    guild: _,
    searchId: (0, m.e7)([ek.Z], () => ek.Z.getCurrentSearchId()),
    showCall: !I && O,
    showActivityPanel: R,
    nsfwAgree: (0, m.e7)([eb.Z], () => eb.Z.didAgree(null == c ? void 0 : c.guild_id)),
    isMobile: (0, m.e7)([eU.Z], () => (null == c ? void 0 : c.type) === eJ.d4z.DM && eU.Z.isMobileOnline(c.getRecipientId()), [c]),
    isUnavailable: (0, m.e7)([ey.Z], () => (null == c ? void 0 : c.guild_id) != null && ey.Z.isUnavailable(c.guild_id), [c]),
    showRealNameModal: H,
    showWelcomeModal: !D && B,
    showFollowButton: (null == c ? void 0 : c.type) === eJ.d4z.GUILD_ANNOUNCEMENT && (null == _ ? void 0 : _.hasFeature(eJ.oNc.NEWS)) || !1,
    ...(0, m.cj)([eG.Z], () => ({
      hasVideo: null != c && eG.Z.hasVideo(c.id)
    }), [c]),
    inCall: en,
    selectedParticipant: k,
    nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
    showChannelSummaries: ei,
    isFavorites: Y,
    headerGuildBreadcrumbPosition: Y ? "left" : "right",
    premiumIndicatorEnabled: Q || $.enabled,
    hasTextActivityInPanelMode: R
  })
})