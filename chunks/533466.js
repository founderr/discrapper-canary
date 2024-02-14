"use strict";
n.r(t), n.d(t, {
  default: function() {
    return e2
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("90915"),
  f = n("446674"),
  h = n("151426"),
  m = n("551042"),
  p = n("77078"),
  E = n("272030"),
  S = n("942722"),
  g = n("561963"),
  C = n("264732"),
  _ = n("738073"),
  I = n("737960"),
  T = n("734575"),
  v = n("84339"),
  x = n("191225"),
  N = n("169920"),
  A = n("420444"),
  M = n("191145"),
  R = n("494286"),
  j = n("850391"),
  L = n("992207"),
  O = n("269936"),
  y = n("69927"),
  P = n("40635"),
  b = n("10641"),
  D = n("499520"),
  U = n("327432"),
  w = n("336804"),
  F = n("928265"),
  k = n("744568"),
  V = n("257869"),
  B = n("848848"),
  H = n("93252"),
  G = n("661455"),
  W = n("230035"),
  Y = n("155832"),
  z = n("353054"),
  K = n("262956"),
  Z = n("723431"),
  X = n("977983"),
  J = n("539938"),
  q = n("557809"),
  Q = n("853189"),
  $ = n("718091"),
  ee = n("922164"),
  et = n("391751"),
  en = n("148205"),
  ea = n("969103"),
  el = n("361572"),
  es = n("267567"),
  ei = n("393414"),
  er = n("144491"),
  eo = n("200745"),
  eu = n("56778"),
  ed = n("208021"),
  ec = n("582713"),
  ef = n("716214"),
  eh = n("58343"),
  em = n("445375"),
  ep = n("38861"),
  eE = n("31673"),
  eS = n("338273"),
  eg = n("861570"),
  eC = n("970366"),
  e_ = n("401642"),
  eI = n("514917"),
  eT = n("223170"),
  ev = n("59811"),
  ex = n("824135"),
  eN = n("982108"),
  eA = n("42203"),
  eM = n("474643"),
  eR = n("341542"),
  ej = n("247013"),
  eL = n("305961"),
  eO = n("824563"),
  ey = n("744983"),
  eP = n("18494"),
  eb = n("162771"),
  eD = n("697218"),
  eU = n("800762"),
  ew = n("980423"),
  eF = n("439932"),
  ek = n("679653"),
  eV = n("176347"),
  eB = n("665182"),
  eH = n("61918"),
  eG = n("656612"),
  eW = n("624027"),
  eY = n("49111"),
  ez = n("272505"),
  eK = n("99795"),
  eZ = n("994428"),
  eX = n("237542"),
  eJ = n("837979"),
  eq = n("782340"),
  eQ = n("250455");
let e$ = (0, O.makeLazy)({
  createPromise: () => n.el("479273").then(n.bind(n, "479273")),
  webpackId: "479273",
  renderLoader: () => (0, a.jsx)("div", {
    className: eQ.loader,
    children: (0, a.jsx)(p.Spinner, {})
  }),
  name: "ForumChannel"
});
class e0 extends l.PureComponent {
  componentDidMount() {
    (0, eC.trackAppUIViewed)("guild_channel")
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
    o(null != t, "Missing channel in Channel.openChannelContextMenu"), o(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("229233").then(n.bind(n, "229233"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t,
        guild: l
      })
    })
  }
  openThreadContextMenu(e, t) {
    o(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("994827").then(n.bind(n, "994827"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    o(null != t, "Missing channel in Channel.openDMContextMenu");
    let l = eD.default.getUser(t.getRecipientId());
    o(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("130074").then(n.bind(n, "130074"));
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
    if (o(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
    switch (e.type) {
      case eY.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(eh.default, {
          channel: e
        }, e.id);
      case eY.ChannelTypes.GUILD_VOICE:
      case eY.ChannelTypes.DM:
      case eY.ChannelTypes.GROUP_DM:
      case eY.ChannelTypes.PUBLIC_THREAD:
      case eY.ChannelTypes.PRIVATE_THREAD:
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
    return (0, a.jsx)(N.default, {
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
    if (o(null != e, "Missing channel in Channel.renderChat"), s) return (o(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(H.default, {
      guildId: n.id
    }) : (0, a.jsx)(V.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, a.jsx)(G.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(_.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return o(null != n, "directory channels must exist within a guild"), (0, a.jsx)(P.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e$, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eV.default, {
      channel: e,
      guild: n,
      chatInputType: j.ChatInputTypes.NORMAL
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
    if (o(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eY.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(eI.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === eY.ChannelSections.MEMBERS) switch (t.type) {
      case eY.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(S.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eY.ChannelTypes.GUILD_DIRECTORY:
      case eY.ChannelTypes.GUILD_FORUM:
      case eY.ChannelTypes.GUILD_MEDIA:
      case eY.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eY.ChannelTypes.GUILD_TEXT:
        var u;
        let d = !0 === eY.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, a.jsx)(eH.default, {
          channel: t
        }, "channel-members-".concat(d));
      case eY.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eH.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eY.ChannelTypes.PUBLIC_THREAD:
      case eY.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(g.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eY.ChannelSections.SEARCH && null != e) return (0, a.jsx)(eu.default, {
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
      } = await n.el("278999").then(n.bind(n, "278999"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => F.default.viewPrompt(eX.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("900257").then(n.bind(n, "900257"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, eT.welcomeScreenViewed)(t, i),
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
    if (n === eY.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case ec.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(em.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case ec.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.default : eg.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case ec.SidebarType.VIEW_CHANNEL:
        case ec.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === ec.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: eY.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(k.default, {
            guildId: e,
            userId: t,
            onClose: () => ed.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && eY.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - eY.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eB.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eY.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eB.ChatSidebarType.PostSidebar : eB.ChatSidebarType.ThreadSidebar,
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
    if (s) return (0, a.jsx)(eG.default, {});
    if (null == e) return (0, a.jsx)(eW.default, {
      channelId: this.props.channelId
    });
    let h = o === eY.ChannelSections.SIDEBAR_CHAT,
      m = null != d && !h,
      p = !e.isForumLikeChannel() && !u,
      E = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(y.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i(eQ.chat, {
          [eQ.threadSidebarOpen]: h || m,
          [eQ.threadSidebarFloating]: h && f
        }),
        children: [p ? (0, a.jsx)(C.default, {
          style: {
            right: h ? c : void 0
          },
          className: eQ.uploadArea,
          channel: e,
          draftType: eM.DraftType.ChannelMessage
        }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i(eQ.content, {
            [eQ.noChat]: r === eY.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(W.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }, this.handleTitleParentClick = () => {
      let {
        parentChannel: e
      } = this.props;
      null != e && (0, er.transitionToChannel)(e.id)
    }, this._handleContextMenu = (e, t) => {
      switch (t.type) {
        case eY.ChannelTypes.GUILD_VOICE:
        case eY.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eY.ChannelTypes.GUILD_TEXT:
        case eY.ChannelTypes.GUILD_FORUM:
        case eY.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eY.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eY.ChannelTypes.PUBLIC_THREAD:
        case eY.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eY.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }, this.handleContextMenu = e => {
      o(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }, this.handleParentContextMenu = e => {
      o(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }, this.handleThreadSidebarResize = (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }, this.openUserProfile = () => {
      let {
        channel: e
      } = this.props;
      o(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, e_.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eY.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }, this.renderClipsEnabledIndicatorToolbarItem = () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(L.default, {
        channelId: null != t ? t.id : null
      }) : null
    }, this.renderStreamQualityLiveIndicatorToolbarItem = () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eK.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
        size: ew.default.Sizes.LARGE,
        participant: e,
        showQuality: !0
      }, "live-indicator")
    }, this.renderHeaderToolbar = () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: l
      } = this.props;
      o(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case eY.ChannelTypes.GUILD_STAGE_VOICE:
        case eY.ChannelTypes.GUILD_VOICE:
          break;
        case eY.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(Q.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)($.default, {
            channel: e,
            tooltip: eq.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, a.jsx)(ee.default, {
            channel: e,
            showCall: l
          }, "profile")), s.push((0, a.jsx)(et.default, {
            channel: e
          }, "safety_tools"));
          break;
        case eY.ChannelTypes.GROUP_DM:
          if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(Q.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(K.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = eq.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, a.jsx)($.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"));
          break;
        case eY.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eY.ChannelTypes.PRIVATE_THREAD:
        case eY.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(ep.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(en.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(eE.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members")), null != t && (0, T.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(eS.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eY.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eY.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(D.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(ep.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(z.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members")), (0, T.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "summaries"));
          break;
        case eY.ChannelTypes.GUILD_FORUM:
        case eY.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(X.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(z.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"));
          break;
        case eY.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }, this.renderMobileToolbar = () => {
      let {
        channel: e
      } = this.props;
      o(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eY.ChannelTypes.GUILD_STAGE_VOICE:
        case eY.ChannelTypes.GUILD_VOICE:
        case eY.ChannelTypes.DM:
          break;
        case eY.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"));
          break;
        case eY.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eY.ChannelTypes.PRIVATE_THREAD:
        case eY.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"));
          break;
        case eY.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eY.ChannelTypes.GUILD_TEXT:
        case eY.ChannelTypes.GUILD_FORUM:
        case eY.ChannelTypes.GUILD_MEDIA:
        case eY.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(Y.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }, this.renderFollowButton = () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, a.jsx)(p.Button, {
        size: p.Button.Sizes.MIN,
        color: p.Button.Colors.PRIMARY,
        className: eQ.followButton,
        onClick: () => (0, p.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("996177").then(n.bind(n, "996177"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: eq.default.Messages.FOLLOW
      }) : null
    }, this.renderHeaderBar = () => {
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
      o(null != e, "Missing channel in Channel.renderHeaderBar"), o(null != t, "Should not be null if channel is not null.");
      let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)(J.default, {
        guildId: s,
        channelId: e.id,
        channelType: e.type,
        hideSearch: e.isDirectory() || c && !(0, eo.isFavoriteSearchEnabled)(),
        showDivider: c && !(0, eo.isFavoriteSearchEnabled)(),
        toolbar: this.renderHeaderToolbar(),
        mobileToolbar: this.renderMobileToolbar(),
        className: i(eQ.title, u && r ? (0, eF.getThemeClass)(eY.ThemeTypes.DARK) : null),
        transparent: r,
        "aria-label": eq.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
        children: ["left" === d && (0, a.jsx)(q.HeaderGuildBreadcrumb, {
          channel: e,
          guild: l,
          caretPosition: "right"
        }), (0, q.renderTitle)({
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
        }), "right" === d && (0, a.jsx)(q.HeaderGuildBreadcrumb, {
          channel: e,
          guild: l,
          caretPosition: "left"
        }), (0, q.renderTopic)(e, l)]
      }, "header-".concat(e.id))
    }
  }
}
let e1 = (0, I.default)(e0);
var e2 = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eP.default], () => eP.default.getChannelId()), o = (0, f.useStateFromStores)([eP.default], () => eP.default.getVoiceChannelId()), u = (0, f.useStateFromStores)([eA.default], () => null != n ? n : eA.default.getChannel(r), [r, n]), p = (0, f.useStateFromStores)([eA.default], () => eA.default.getChannel(o), [o]), E = null == u ? void 0 : u.parent_id, S = (0, f.useStateFromStores)([eA.default], () => eA.default.getChannel(E), [E]), g = (0, f.useStateFromStores)([eL.default], () => eL.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: C
  } = (0, B.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([M.default], () => {
    let e = null != r ? M.default.getParticipants(r) : [],
      t = null != r ? M.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, f.useStateFromStores)([x.default], () => {
    var e;
    return x.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : "")
  }), N = (0, f.useStateFromStores)([x.default], () => x.default.getActivityPanelMode()), R = null != I && !(0, A.default)(null == u ? void 0 : u.id) && N === ez.ActivityPanelModes.PANEL, j = (0, f.useStateFromStores)([eU.default], () => null != u && u.isVocalThread() && !d.isEmpty(eU.default.getVoiceStatesForChannel(u.id)), [u]), L = (null == u ? void 0 : u.isGuildVocal()) || R || _ || j, {
    welcomeModalChannelId: O
  } = (0, c.useLocation)(), y = (0, f.useStateFromStores)([es.default], () => null != u && es.default.isLurking(u.guild_id), [u]), P = (0, f.useStateFromStores)([ev.default], () => ev.default.hasSeen(null == u ? void 0 : u.guild_id, y), [u, y]), D = (0, f.useStateFromStores)([M.default, x.default], () => null != x.default.getConnectedActivityChannelId() && x.default.getActivityPanelMode() === ez.ActivityPanelModes.PANEL ? x.default.getFocusedLayout() === ez.FocusedActivityLayouts.NO_CHAT ? eY.ChannelLayouts.NO_CHAT : eY.ChannelLayouts.NORMAL : null != r ? M.default.getLayout(r) : eY.ChannelLayouts.NORMAL, [r]), U = (0, f.useStateFromStores)([M.default], () => null != u ? M.default.getSelectedParticipant(u.id) : null), w = (0, f.useStateFromStores)([eD.default], () => eD.default.getCurrentUser()), F = (0, ea.default)(g), k = (0, ex.default)(O, null == g ? void 0 : g.id), {
    section: V,
    channelSidebarState: H
  } = (0, f.useStateFromStoresObject)([eN.default], () => ({
    section: eN.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eN.default.getSidebarState(r)
  }), [r, u]), G = null == g ? void 0 : g.id, W = (0, f.useStateFromStores)([eN.default], () => eN.default.getGuildSidebarState(G), [G]), Y = (0, f.useStateFromStores)([eb.default], () => eb.default.getGuildId()), z = Y === eY.FAVORITES, K = (0, ek.default)(u), Z = (0, ek.default)(u, !0), X = null != u && o === u.id, J = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, ei.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === eJ.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, el.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && J && u.id === s && !X && ((0, ef.connectAndOpen)(u), i(null))
  }, [s, J]);
  let q = (0, T.useChannelSummariesExperiment)(u),
    Q = null != u && u.isPrivate(),
    $ = (0, v.default)(Q),
    ee = (0, v.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = $ && !Q,
      t = $ && Q && (null == u ? void 0 : u.id) !== ee;
    (e || t) && (0, b.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eZ.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, ee, Q, $]);
  let et = (0, m.useHasAnyModalOpen)();
  return (0, a.jsx)(e1, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: K,
    formattedChannelName: Z,
    parentChannel: S,
    voiceChannel: p,
    layout: D,
    needSubscriptionToAccess: C,
    isLurking: y,
    hasModalOpen: et,
    section: V,
    channelSidebarState: H,
    guildSidebarState: W,
    guild: g,
    searchId: (0, f.useStateFromStores)([ey.default], () => ey.default.getCurrentSearchId()),
    showCall: !C && L,
    nsfwAgree: (0, f.useStateFromStores)([ej.default], () => ej.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, f.useStateFromStores)([eO.default], () => (null == u ? void 0 : u.type) === eY.ChannelTypes.DM && eO.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, f.useStateFromStores)([eR.default], () => (null == u ? void 0 : u.guild_id) != null && eR.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: F,
    showWelcomeModal: !P && k,
    showFollowButton: (null == u ? void 0 : u.type) === eY.ChannelTypes.GUILD_ANNOUNCEMENT && (null == g ? void 0 : g.hasFeature(eY.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([eU.default], () => ({
      hasVideo: null != u && eU.default.hasVideo(u.id)
    }), [u]),
    inCall: X,
    selectedParticipant: U,
    nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
    showChannelSummaries: q,
    isFavorites: z,
    headerGuildBreadcrumbPosition: z ? "left" : "right"
  })
})