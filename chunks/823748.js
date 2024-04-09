"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("613828"),
  f = n("442837"),
  h = n("524437"),
  m = n("952265"),
  p = n("481060"),
  E = n("239091"),
  C = n("377993"),
  g = n("457868"),
  S = n("561472"),
  _ = n("36311"),
  T = n("112724"),
  I = n("902840"),
  A = n("110924"),
  v = n("317381"),
  x = n("82888"),
  N = n("917107"),
  M = n("358221"),
  R = n("677601"),
  L = n("541716"),
  y = n("236091"),
  O = n("663993"),
  j = n("252618"),
  P = n("201493"),
  D = n("605236"),
  b = n("174130"),
  U = n("588322"),
  F = n("874950"),
  w = n("517525"),
  k = n("445384"),
  H = n("613464"),
  B = n("705563"),
  G = n("730647"),
  V = n("66999"),
  W = n("826763"),
  Y = n("180216"),
  z = n("51486"),
  K = n("168843"),
  Z = n("442336"),
  q = n("57304"),
  X = n("605953"),
  Q = n("374306"),
  J = n("984370"),
  $ = n("910611"),
  ee = n("915718"),
  et = n("518311"),
  en = n("180539"),
  ea = n("882378"),
  el = n("207868"),
  es = n("246919"),
  ei = n("754688"),
  er = n("41776"),
  eo = n("134483"),
  eu = n("703656"),
  ed = n("359110"),
  ec = n("854709"),
  ef = n("14091"),
  eh = n("6025"),
  em = n("897473"),
  ep = n("922482"),
  eE = n("504185"),
  eC = n("657218"),
  eg = n("66556"),
  eS = n("739830"),
  e_ = n("377929"),
  eT = n("900157"),
  eI = n("108427"),
  eA = n("171368"),
  ev = n("123579"),
  ex = n("524329"),
  eN = n("995532"),
  eM = n("738643"),
  eR = n("433355"),
  eL = n("592125"),
  ey = n("703558"),
  eO = n("486472"),
  ej = n("731290"),
  eP = n("430824"),
  eD = n("158776"),
  eb = n("768119"),
  eU = n("944486"),
  eF = n("914010"),
  ew = n("594174"),
  ek = n("979651"),
  eH = n("368666"),
  eB = n("792125"),
  eG = n("933557"),
  eV = n("287746"),
  eW = n("325708"),
  eY = n("335615"),
  ez = n("992744"),
  eK = n("923029"),
  eZ = n("176505"),
  eq = n("981631"),
  eX = n("918559"),
  eQ = n("354459"),
  eJ = n("921944"),
  e$ = n("440493"),
  e0 = n("157925"),
  e1 = n("689938"),
  e2 = n("121950");

function e4(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e3 = (0, O.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("49131")]).then(n.bind(n, "434878")),
  webpackId: "434878",
  renderLoader: () => (0, a.jsx)("div", {
    className: e2.loader,
    children: (0, a.jsx)(p.Spinner, {})
  }),
  name: "ForumChannel"
});
class e7 extends l.PureComponent {
  componentDidMount() {
    (0, eI.trackAppUIViewed)("guild_channel")
  }
  componentDidUpdate(e) {
    null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({
      topicExpanded: !1
    }), this.openChannelModal()
  }
  openChannelContextMenu(e, t) {
    let {
      guild: l
    } = this.props;
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), o()(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("24783")]).then(n.bind(n, "439635"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t,
        guild: l
      })
    })
  }
  openThreadContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("78650").then(n.bind(n, "422200"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openDMContextMenu");
    let l = ew.default.getUser(t.getRecipientId());
    o()(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: l,
        channelSelected: !0,
        channel: t
      })
    })
  }
  renderCall() {
    let {
      channel: e,
      showCall: t,
      nsfwAllowed: n,
      nsfwAgree: l
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
    switch (e.type) {
      case eq.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(eE.default, {
          channel: e
        }, e.id);
      case eq.ChannelTypes.GUILD_VOICE:
      case eq.ChannelTypes.DM:
      case eq.ChannelTypes.GROUP_DM:
      case eq.ChannelTypes.PUBLIC_THREAD:
      case eq.ChannelTypes.PRIVATE_THREAD:
        let s = this.props.height - 200;
        return (0, a.jsx)(R.default, {
          channel: e,
          renderExternalHeader: this.renderHeaderBar,
          maxHeight: s
        }, "call-".concat(e.id));
      default:
        return null
    }
  }
  renderEmbeddedActivityPanel() {
    let e = this.props.height - 200;
    return (0, a.jsx)(x.default, {
      maxHeight: e,
      renderExternalHeader: this.renderHeaderBar
    })
  }
  renderChat() {
    let {
      channel: e,
      nsfwAgree: t,
      guild: n,
      nsfwAllowed: l,
      needSubscriptionToAccess: s
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderChat"), s) return (o()(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(W.default, {
      guildId: n.id
    }) : (0, a.jsx)(G.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, a.jsx)(Y.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(_.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return o()(null != n, "directory channels must exist within a guild"), (0, a.jsx)(P.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o()(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e3, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eV.default, {
      channel: e,
      guild: n,
      chatInputType: L.ChatInputTypes.NORMAL
    }, null != n ? n.id : "home")
  }
  renderSidebar() {
    let {
      searchId: e,
      channel: t,
      parentChannel: n,
      guild: l,
      needSubscriptionToAccess: s,
      section: i,
      showCall: r
    } = this.props;
    if (o()(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eq.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(ev.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === eq.ChannelSections.MEMBERS) switch (t.type) {
      case eq.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(C.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eq.ChannelTypes.GUILD_DIRECTORY:
      case eq.ChannelTypes.GUILD_FORUM:
      case eq.ChannelTypes.GUILD_MEDIA:
      case eq.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eq.ChannelTypes.GUILD_TEXT:
        var u;
        if (null != l && l.hasFeature(eq.GuildFeatures.CLAN)) return (0, a.jsx)(F.default, {
          guildId: l.id,
          channel: t
        }, "clan-sidebar-".concat(t.id));
        let d = !0 === eq.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, a.jsx)(eY.default, {
          channel: t
        }, "channel-members-".concat(d));
      case eq.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eY.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eq.ChannelTypes.PUBLIC_THREAD:
      case eq.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(g.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eq.ChannelSections.SEARCH && null != e) return (0, a.jsx)(ef.default, {
      searchId: e
    });
    return null
  }
  openChannelModal() {
    let {
      channel: e,
      guildId: t,
      hasModalOpen: l,
      showWelcomeModal: s,
      isLurking: i,
      isUnavailable: r,
      showRealNameModal: o
    } = this.props;
    return null == e || null == t || r || l ? null : (o && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("57372")]).then(n.bind(n, "784280"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(e$.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, "184782"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, ex.welcomeScreenViewed)(t, i),
      modalKey: "Guild Welcome Screen Modal"
    }), null)
  }
  renderThreadSidebar() {
    let e;
    let {
      channel: t,
      section: n,
      channelSidebarState: l,
      guildSidebarState: s,
      nsfwAgree: i,
      nsfwAllowed: r,
      width: o
    } = this.props;
    if (null == s && null == l) return null;
    if (n === eq.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case em.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(eC.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case em.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.default : eT.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case em.SidebarType.VIEW_CHANNEL:
        case em.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === em.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: eq.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(H.default, {
            guildId: e,
            userId: t,
            onClose: () => eh.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && eq.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - eq.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eW.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eq.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eW.ChatSidebarType.PostSidebar : eW.ChatSidebarType.ThreadSidebar,
      maxWidth: d,
      onWidthChange: this.handleThreadSidebarResize,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      formattedChannelName: n,
      showCall: l,
      isUnavailable: s,
      layout: r,
      section: o,
      hasModalOpen: u,
      guildSidebarState: d
    } = this.props, {
      threadSidebarWidth: c,
      isThreadSidebarFloating: f
    } = this.state;
    if (s) return (0, a.jsx)(ez.default, {});
    if (null == e) return (0, a.jsx)(eK.default, {
      channelId: this.props.channelId
    });
    let h = o === eq.ChannelSections.SIDEBAR_CHAT,
      m = null != d && !h,
      p = !e.isForumLikeChannel() && !u,
      E = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(j.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i()(e2.chat, {
          [e2.threadSidebarOpen]: h || m,
          [e2.threadSidebarFloating]: h && f
        }),
        children: [p ? (0, a.jsx)(S.default, {
          style: {
            right: h ? c : void 0
          },
          className: e2.uploadArea,
          channel: e,
          draftType: ey.DraftType.ChannelMessage
        }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i()(e2.content, {
            [e2.noChat]: r === eq.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(z.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e4(this, "state", {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }), e4(this, "handleTitleParentClick", () => {
      let {
        parentChannel: e
      } = this.props;
      null != e && (0, ed.transitionToChannel)(e.id)
    }), e4(this, "_handleContextMenu", (e, t) => {
      switch (t.type) {
        case eq.ChannelTypes.GUILD_VOICE:
        case eq.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eq.ChannelTypes.GUILD_TEXT:
        case eq.ChannelTypes.GUILD_FORUM:
        case eq.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eq.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eq.ChannelTypes.PUBLIC_THREAD:
        case eq.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eq.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }), e4(this, "handleContextMenu", e => {
      o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }), e4(this, "handleParentContextMenu", e => {
      o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }), e4(this, "handleThreadSidebarResize", (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }), e4(this, "openUserProfile", () => {
      let {
        channel: e
      } = this.props;
      o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eA.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eq.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }), e4(this, "renderJoinRequestInterviewButtons", () => {
      let {
        channel: e
      } = this.props;
      return (null == e ? void 0 : e.hasFlag(eZ.ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) ? (0, a.jsx)(B.default, {
        channelId: e.id,
        showTrailingDivider: !0
      }) : null
    }), e4(this, "renderClipsEnabledIndicatorToolbarItem", () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(y.default, {
        channelId: null != t ? t.id : null
      }) : null
    }), e4(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eQ.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
        size: eH.default.Sizes.LARGE,
        participant: e,
        showQuality: !0
      }, "live-indicator")
    }), e4(this, "renderHeaderToolbar", () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: l
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case eq.ChannelTypes.GUILD_STAGE_VOICE:
        case eq.ChannelTypes.GUILD_VOICE:
          break;
        case eq.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(ee.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(et.default, {
            channel: e,
            tooltip: e1.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, a.jsx)(en.default, {
            channel: e,
            showCall: l
          }, "profile")), s.push((0, a.jsx)(ea.default, {
            channel: e
          }, "safety_tools"));
          break;
        case eq.ChannelTypes.GROUP_DM:
          if (s.push(this.renderJoinRequestInterviewButtons()), s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(ee.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(q.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = e1.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, a.jsx)(et.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eq.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eq.ChannelTypes.PRIVATE_THREAD:
        case eq.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(eg.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(el.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(eS.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), null != t && (0, I.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(e_.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eq.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eq.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(b.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(eg.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), (0, I.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case eq.ChannelTypes.GUILD_FORUM:
        case eq.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(Q.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eq.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }), e4(this, "renderMobileToolbar", () => {
      let {
        channel: e
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eq.ChannelTypes.GUILD_STAGE_VOICE:
        case eq.ChannelTypes.GUILD_VOICE:
        case eq.ChannelTypes.DM:
          break;
        case eq.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eq.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eq.ChannelTypes.PRIVATE_THREAD:
        case eq.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eq.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eq.ChannelTypes.GUILD_TEXT:
        case eq.ChannelTypes.GUILD_FORUM:
        case eq.ChannelTypes.GUILD_MEDIA:
        case eq.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }), e4(this, "renderFollowButton", () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, a.jsx)(p.Button, {
        size: p.Button.Sizes.MIN,
        color: p.Button.Colors.PRIMARY,
        className: e2.followButton,
        onClick: () => (0, p.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e1.default.Messages.FOLLOW
      }) : null
    }), e4(this, "renderHeaderBar", () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        hasVideo: u,
        headerGuildBreadcrumbPosition: d,
        isFavorites: c
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderBar"), o()(null != t, "Should not be null if channel is not null.");
      let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)("div", {
        className: e2.subtitleContainer,
        children: [(0, a.jsxs)(J.default, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || c && !(0, ec.isFavoriteSearchEnabled)(),
          showDivider: c && !(0, ec.isFavoriteSearchEnabled)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: i()(e2.title, u && r ? (0, eB.getThemeClass)(eq.ThemeTypes.DARK) : null),
          transparent: r,
          "aria-label": e1.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
          children: ["left" === d && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "right"
          }), (0, $.renderTitle)({
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: l,
            hasVideo: u,
            handleContextMenu: this.handleContextMenu,
            handleParentContextMenu: this.handleParentContextMenu,
            handleClick: f,
            handleParentClick: h,
            renderFollowButton: this.renderFollowButton
          }), "right" === d && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "left"
          }), (0, $.renderTopic)(e, l)]
        }, "header-".concat(e.id)), (0, a.jsx)(eo.default, {
          channelId: e.id
        })]
      })
    })
  }
}
let e5 = (0, T.default)(e7);
t.default = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eU.default], () => eU.default.getChannelId()), o = (0, f.useStateFromStores)([eU.default], () => eU.default.getVoiceChannelId()), u = (0, f.useStateFromStores)([eL.default], () => null != n ? n : eL.default.getChannel(r), [r, n]), p = (0, f.useStateFromStores)([eL.default], () => eL.default.getChannel(o), [o]), E = null == u ? void 0 : u.parent_id, C = (0, f.useStateFromStores)([eL.default], () => eL.default.getChannel(E), [E]), g = (0, f.useStateFromStores)([eP.default], () => eP.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: S
  } = (0, V.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([M.default], () => {
    let e = null != r ? M.default.getParticipants(r) : [],
      t = null != r ? M.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), T = (0, f.useStateFromStores)([v.default], () => {
    var e;
    return v.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : eq.EMPTY_STRING_SNOWFLAKE_ID)
  }), x = (0, f.useStateFromStores)([v.default], () => v.default.getActivityPanelMode()), R = null != T && !(0, N.default)(null == u ? void 0 : u.id) && x === eX.ActivityPanelModes.PANEL, L = (0, f.useStateFromStores)([ek.default], () => null != u && u.isVocalThread() && !d().isEmpty(ek.default.getVoiceStatesForChannel(u.id)), [u]), y = (null == u ? void 0 : u.isGuildVocal()) || R || _ || L, {
    welcomeModalChannelId: O
  } = (0, c.useLocation)(), j = (0, f.useStateFromStores)([er.default], () => null != u && er.default.isLurking(u.guild_id), [u]), P = (0, f.useStateFromStores)([eN.default], () => eN.default.hasSeen(null == u ? void 0 : u.guild_id, j), [u, j]), b = (0, f.useStateFromStores)([M.default, v.default], () => null != v.default.getConnectedActivityChannelId() && v.default.getActivityPanelMode() === eX.ActivityPanelModes.PANEL ? v.default.getFocusedLayout() === eX.FocusedActivityLayouts.NO_CHAT ? eq.ChannelLayouts.NO_CHAT : eq.ChannelLayouts.NORMAL : null != r ? M.default.getLayout(r) : eq.ChannelLayouts.NORMAL, [r]), U = (0, f.useStateFromStores)([M.default], () => null != u ? M.default.getSelectedParticipant(u.id) : null), F = (0, f.useStateFromStores)([ew.default], () => ew.default.getCurrentUser()), w = (0, es.default)(g), k = (0, eM.default)(O, null == g ? void 0 : g.id), {
    section: H,
    channelSidebarState: B
  } = (0, f.useStateFromStoresObject)([eR.default], () => ({
    section: eR.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eR.default.getSidebarState(r)
  }), [r, u]), G = null == g ? void 0 : g.id, W = (0, f.useStateFromStores)([eR.default], () => eR.default.getGuildSidebarState(G), [G]), Y = (0, f.useStateFromStores)([eF.default], () => eF.default.getGuildId()) === eq.FAVORITES, z = (0, eG.default)(u), K = (0, eG.default)(u, !0), Z = null != u && o === u.id, q = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, eu.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === e0.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, ei.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && q && u.id === s && !Z && ((0, ep.connectAndOpen)(u), i(null))
  }, [s, q]);
  let X = (0, I.useChannelSummariesExperiment)(u),
    Q = null != u && u.isPrivate(),
    J = (0, A.default)(Q),
    $ = (0, A.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = J && !Q,
      t = J && Q && (null == u ? void 0 : u.id) !== $;
    (e || t) && (0, D.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eJ.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, $, Q, J]);
  let ee = (0, m.useHasAnyModalOpen)();
  return (0, a.jsx)(e5, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: z,
    formattedChannelName: K,
    parentChannel: C,
    voiceChannel: p,
    layout: b,
    needSubscriptionToAccess: S,
    isLurking: j,
    hasModalOpen: ee,
    section: H,
    channelSidebarState: B,
    guildSidebarState: W,
    guild: g,
    searchId: (0, f.useStateFromStores)([eb.default], () => eb.default.getCurrentSearchId()),
    showCall: !S && y,
    nsfwAgree: (0, f.useStateFromStores)([ej.default], () => ej.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, f.useStateFromStores)([eD.default], () => (null == u ? void 0 : u.type) === eq.ChannelTypes.DM && eD.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, f.useStateFromStores)([eO.default], () => (null == u ? void 0 : u.guild_id) != null && eO.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: w,
    showWelcomeModal: !P && k,
    showFollowButton: (null == u ? void 0 : u.type) === eq.ChannelTypes.GUILD_ANNOUNCEMENT && (null == g ? void 0 : g.hasFeature(eq.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([ek.default], () => ({
      hasVideo: null != u && ek.default.hasVideo(u.id)
    }), [u]),
    inCall: Z,
    selectedParticipant: U,
    nsfwAllowed: (null == F ? void 0 : F.nsfwAllowed) === !0,
    showChannelSummaries: X,
    isFavorites: Y,
    headerGuildBreadcrumbPosition: Y ? "left" : "right"
  })
})