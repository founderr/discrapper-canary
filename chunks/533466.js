"use strict";
n.r(t), n.d(t, {
  default: function() {
    return e4
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("917351"),
  d = n.n(o),
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
  y = n("269936"),
  O = n("69927"),
  P = n("40635"),
  b = n("10641"),
  D = n("499520"),
  U = n("327432"),
  w = n("579425"),
  F = n("336804"),
  k = n("928265"),
  B = n("744568"),
  V = n("257869"),
  H = n("848848"),
  G = n("93252"),
  W = n("661455"),
  Y = n("230035"),
  z = n("155832"),
  K = n("353054"),
  Z = n("262956"),
  X = n("723431"),
  Q = n("977983"),
  q = n("539938"),
  J = n("557809"),
  $ = n("853189"),
  ee = n("718091"),
  et = n("922164"),
  en = n("391751"),
  el = n("148205"),
  ea = n("969103"),
  es = n("361572"),
  ei = n("267567"),
  er = n("393414"),
  eu = n("144491"),
  eo = n("200745"),
  ed = n("56778"),
  ec = n("208021"),
  ef = n("582713"),
  eh = n("716214"),
  em = n("58343"),
  ep = n("445375"),
  eE = n("38861"),
  eS = n("31673"),
  eg = n("338273"),
  eC = n("861570"),
  e_ = n("970366"),
  eI = n("401642"),
  eT = n("514917"),
  ev = n("223170"),
  ex = n("59811"),
  eN = n("824135"),
  eA = n("982108"),
  eM = n("42203"),
  eR = n("474643"),
  ej = n("341542"),
  eL = n("247013"),
  ey = n("305961"),
  eO = n("824563"),
  eP = n("744983"),
  eb = n("18494"),
  eD = n("162771"),
  eU = n("697218"),
  ew = n("800762"),
  eF = n("980423"),
  ek = n("439932"),
  eB = n("679653"),
  eV = n("176347"),
  eH = n("665182"),
  eG = n("61918"),
  eW = n("656612"),
  eY = n("624027"),
  ez = n("49111"),
  eK = n("272505"),
  eZ = n("99795"),
  eX = n("994428"),
  eQ = n("237542"),
  eq = n("837979"),
  eJ = n("782340"),
  e$ = n("250455");
let e0 = (0, y.makeLazy)({
  createPromise: () => n.el("479273").then(n.bind(n, "479273")),
  webpackId: "479273",
  renderLoader: () => (0, l.jsx)("div", {
    className: e$.loader,
    children: (0, l.jsx)(p.Spinner, {})
  }),
  name: "ForumChannel"
});
class e1 extends a.PureComponent {
  componentDidMount() {
    (0, e_.trackAppUIViewed)("guild_channel")
  }
  componentDidUpdate(e) {
    null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({
      topicExpanded: !1
    }), this.openChannelModal()
  }
  openChannelContextMenu(e, t) {
    let {
      guild: a
    } = this.props;
    u(null != t, "Missing channel in Channel.openChannelContextMenu"), u(null != a, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("229233").then(n.bind(n, "229233"));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t,
        guild: a
      })
    })
  }
  openThreadContextMenu(e, t) {
    u(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("994827").then(n.bind(n, "994827"));
      return n => (0, l.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    u(null != t, "Missing channel in Channel.openDMContextMenu");
    let a = eU.default.getUser(t.getRecipientId());
    u(null != a, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("130074").then(n.bind(n, "130074"));
      return n => (0, l.jsx)(e, {
        ...n,
        user: a,
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
      nsfwAgree: a
    } = this.props;
    if (u(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !a) || !t) return null;
    switch (e.type) {
      case ez.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, l.jsx)(em.default, {
          channel: e
        }, e.id);
      case ez.ChannelTypes.GUILD_VOICE:
      case ez.ChannelTypes.DM:
      case ez.ChannelTypes.GROUP_DM:
      case ez.ChannelTypes.PUBLIC_THREAD:
      case ez.ChannelTypes.PRIVATE_THREAD:
        let s = this.props.height - 200;
        return (0, l.jsx)(R.default, {
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
    return (0, l.jsx)(N.default, {
      maxHeight: e,
      renderExternalHeader: this.renderHeaderBar
    })
  }
  renderChat() {
    let {
      channel: e,
      nsfwAgree: t,
      guild: n,
      nsfwAllowed: a,
      needSubscriptionToAccess: s
    } = this.props;
    if (u(null != e, "Missing channel in Channel.renderChat"), s) return (u(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, l.jsx)(G.default, {
      guildId: n.id
    }) : (0, l.jsx)(V.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, l.jsx)(W.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!a || !t)) return (0, l.jsx)(_.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return u(null != n, "directory channels must exist within a guild"), (0, l.jsx)(P.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      u(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, l.jsx)(e0, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, l.jsx)(eV.default, {
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
      guild: a,
      needSubscriptionToAccess: s,
      section: i,
      showCall: r
    } = this.props;
    if (u(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === ez.ChannelSections.PROFILE && t.isPrivate()) return (0, l.jsx)(eT.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === ez.ChannelSections.MEMBERS) switch (t.type) {
      case ez.ChannelTypes.GROUP_DM:
        return (0, l.jsx)(S.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case ez.ChannelTypes.GUILD_DIRECTORY:
      case ez.ChannelTypes.GUILD_FORUM:
      case ez.ChannelTypes.GUILD_MEDIA:
      case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
      case ez.ChannelTypes.GUILD_TEXT:
        var o;
        if (null != a && a.hasFeature(ez.GuildFeatures.CLAN)) return (0, l.jsx)(w.default, {
          guildId: a.id,
          channel: t
        }, "clan-sidebar-".concat(t.id));
        let d = !0 === ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (o = t.guild_id) && void 0 !== o ? o : t.id;
        return (0, l.jsx)(eG.default, {
          channel: t
        }, "channel-members-".concat(d));
      case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, l.jsx)(eG.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case ez.ChannelTypes.PUBLIC_THREAD:
      case ez.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != a) return (0, l.jsx)(g.default, {
          channel: t,
          guild: a
        }, "channel-members-".concat(t.id))
    } else if (i === ez.ChannelSections.SEARCH && null != e) return (0, l.jsx)(ed.default, {
      searchId: e
    });
    return null
  }
  openChannelModal() {
    let {
      channel: e,
      guildId: t,
      hasModalOpen: a,
      showWelcomeModal: s,
      isLurking: i,
      isUnavailable: r,
      showRealNameModal: u
    } = this.props;
    return null == e || null == t || r || a ? null : (u && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("278999").then(n.bind(n, "278999"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(eQ.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("900257").then(n.bind(n, "900257"));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, ev.welcomeScreenViewed)(t, i),
      modalKey: "Guild Welcome Screen Modal"
    }), null)
  }
  renderThreadSidebar() {
    let e;
    let {
      channel: t,
      section: n,
      channelSidebarState: a,
      guildSidebarState: s,
      nsfwAgree: i,
      nsfwAllowed: r,
      width: u
    } = this.props;
    if (null == s && null == a) return null;
    if (n === ez.ChannelSections.SIDEBAR_CHAT && null != a) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (a.type) {
        case ef.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, l.jsx)(ep.default, {
            parentChannelId: a.parentChannelId,
            parentMessageId: a.parentMessageId,
            location: a.location
          });
          break;
        case ef.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.default : eC.default;
          e = (0, l.jsx)(n, {
            channelId: a.channelId
          });
          break;
        case ef.SidebarType.VIEW_CHANNEL:
        case ef.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === ef.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, l.jsx)("div", {
          style: {
            width: ez.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, l.jsx)(B.default, {
            guildId: e,
            userId: t,
            onClose: () => ec.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let o = (null == t ? void 0 : t.type) != null && ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = u - ez.CHANNEL_SIDEBAR_WIDTH - o;
    return (0, l.jsx)(eH.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eH.ChatSidebarType.PostSidebar : eH.ChatSidebarType.ThreadSidebar,
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
      showCall: a,
      isUnavailable: s,
      layout: r,
      section: u,
      hasModalOpen: o,
      guildSidebarState: d
    } = this.props, {
      threadSidebarWidth: c,
      isThreadSidebarFloating: f
    } = this.state;
    if (s) return (0, l.jsx)(eW.default, {});
    if (null == e) return (0, l.jsx)(eY.default, {
      channelId: this.props.channelId
    });
    let h = u === ez.ChannelSections.SIDEBAR_CHAT,
      m = null != d && !h,
      p = !e.isForumLikeChannel() && !o,
      E = null == t ? void 0 : t.name;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(O.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, l.jsxs)("div", {
        className: i(e$.chat, {
          [e$.threadSidebarOpen]: h || m,
          [e$.threadSidebarFloating]: h && f
        }),
        children: [p ? (0, l.jsx)(C.default, {
          style: {
            right: h ? c : void 0
          },
          className: e$.uploadArea,
          channel: e,
          draftType: eR.DraftType.ChannelMessage
        }) : null, a ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, l.jsxs)("div", {
          className: i(e$.content, {
            [e$.noChat]: r === ez.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, l.jsx)(Y.default, {})]
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
      null != e && (0, eu.transitionToChannel)(e.id)
    }, this._handleContextMenu = (e, t) => {
      switch (t.type) {
        case ez.ChannelTypes.GUILD_VOICE:
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case ez.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }, this.handleContextMenu = e => {
      u(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }, this.handleParentContextMenu = e => {
      u(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }, this.handleThreadSidebarResize = (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }, this.openUserProfile = () => {
      let {
        channel: e
      } = this.props;
      u(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eI.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: ez.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }, this.renderClipsEnabledIndicatorToolbarItem = () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, l.jsx)(L.default, {
        channelId: null != t ? t.id : null
      }) : null
    }, this.renderStreamQualityLiveIndicatorToolbarItem = () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eZ.ParticipantTypes.STREAM ? null : (0, l.jsx)(F.default, {
        size: eF.default.Sizes.LARGE,
        participant: e,
        showQuality: !0
      }, "live-indicator")
    }, this.renderHeaderToolbar = () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: a
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case ez.ChannelTypes.GUILD_STAGE_VOICE:
        case ez.ChannelTypes.GUILD_VOICE:
          break;
        case ez.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, l.jsx)($.default, {
            channel: e
          }, "calls")), s.push((0, l.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, l.jsx)(ee.default, {
            channel: e,
            tooltip: eJ.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, l.jsx)(et.default, {
            channel: e,
            showCall: a
          }, "profile")), s.push((0, l.jsx)(en.default, {
            channel: e
          }, "safety_tools"));
          break;
        case ez.ChannelTypes.GROUP_DM:
          if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, l.jsx)($.default, {
              channel: e
            }, "calls")), s.push((0, l.jsx)(Z.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = eJ.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, l.jsx)(ee.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, l.jsx)(eE.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, l.jsx)(el.default, {
            channel: e
          }, "thread-call")), s.push((0, l.jsx)(eS.default, {
            channel: e
          }, "notifications")), s.push((0, l.jsx)(Z.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members")), null != t && (0, T.canSeeChannelSummaries)(e) && s.push((0, l.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, l.jsx)(eg.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
          s.push((0, l.jsx)(D.default, {
            channel: e
          }, "favorites")), s.push((0, l.jsx)(eE.default, {
            channel: e
          }, "browser")), !n && s.push((0, l.jsx)(K.default, {
            channel: e
          }, "notifications")), s.push((0, l.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members")), (0, T.canSeeChannelSummaries)(e) && s.push((0, l.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, l.jsx)(Q.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, l.jsx)(K.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }, this.renderMobileToolbar = () => {
      let {
        channel: e
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case ez.ChannelTypes.GUILD_STAGE_VOICE:
        case ez.ChannelTypes.GUILD_VOICE:
        case ez.ChannelTypes.DM:
          break;
        case ez.ChannelTypes.GROUP_DM:
          t.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
        case ez.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, l.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }, this.renderFollowButton = () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, l.jsx)(p.Button, {
        size: p.Button.Sizes.MIN,
        color: p.Button.Colors.PRIMARY,
        className: e$.followButton,
        onClick: () => (0, p.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("996177").then(n.bind(n, "996177"));
          return n => (0, l.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: eJ.default.Messages.FOLLOW
      }) : null
    }, this.renderHeaderBar = () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: a,
        guildId: s,
        showCall: r,
        hasVideo: o,
        headerGuildBreadcrumbPosition: d,
        isFavorites: c
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderBar"), u(null != t, "Should not be null if channel is not null.");
      let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, l.jsxs)(q.default, {
        guildId: s,
        channelId: e.id,
        channelType: e.type,
        hideSearch: e.isDirectory() || c && !(0, eo.isFavoriteSearchEnabled)(),
        showDivider: c && !(0, eo.isFavoriteSearchEnabled)(),
        toolbar: this.renderHeaderToolbar(),
        mobileToolbar: this.renderMobileToolbar(),
        className: i(e$.title, o && r ? (0, ek.getThemeClass)(ez.ThemeTypes.DARK) : null),
        transparent: r,
        "aria-label": eJ.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
        children: ["left" === d && (0, l.jsx)(J.HeaderGuildBreadcrumb, {
          channel: e,
          guild: a,
          caretPosition: "right"
        }), (0, J.renderTitle)({
          channel: e,
          channelName: t,
          parentChannel: n,
          guild: a,
          hasVideo: o,
          handleContextMenu: this.handleContextMenu,
          handleParentContextMenu: this.handleParentContextMenu,
          handleClick: f,
          handleParentClick: h,
          renderFollowButton: this.renderFollowButton
        }), "right" === d && (0, l.jsx)(J.HeaderGuildBreadcrumb, {
          channel: e,
          guild: a,
          caretPosition: "left"
        }), (0, J.renderTopic)(e, a)]
      }, "header-".concat(e.id))
    }
  }
}
let e2 = (0, I.default)(e1);
var e4 = a.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = a.useState(null), r = (0, f.useStateFromStores)([eb.default], () => eb.default.getChannelId()), u = (0, f.useStateFromStores)([eb.default], () => eb.default.getVoiceChannelId()), o = (0, f.useStateFromStores)([eM.default], () => null != n ? n : eM.default.getChannel(r), [r, n]), p = (0, f.useStateFromStores)([eM.default], () => eM.default.getChannel(u), [u]), E = null == o ? void 0 : o.parent_id, S = (0, f.useStateFromStores)([eM.default], () => eM.default.getChannel(E), [E]), g = (0, f.useStateFromStores)([ey.default], () => ey.default.getGuild(null == o ? void 0 : o.guild_id), [o]), {
    needSubscriptionToAccess: C
  } = (0, H.default)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([M.default], () => {
    let e = null != r ? M.default.getParticipants(r) : [],
      t = null != r ? M.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, f.useStateFromStores)([x.default], () => {
    var e;
    return x.default.getSelfEmbeddedActivityForChannel(null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : ez.EMPTY_STRING_CHANNEL_ID)
  }), N = (0, f.useStateFromStores)([x.default], () => x.default.getActivityPanelMode()), R = null != I && !(0, A.default)(null == o ? void 0 : o.id) && N === eK.ActivityPanelModes.PANEL, j = (0, f.useStateFromStores)([ew.default], () => null != o && o.isVocalThread() && !d.isEmpty(ew.default.getVoiceStatesForChannel(o.id)), [o]), L = (null == o ? void 0 : o.isGuildVocal()) || R || _ || j, {
    welcomeModalChannelId: y
  } = (0, c.useLocation)(), O = (0, f.useStateFromStores)([ei.default], () => null != o && ei.default.isLurking(o.guild_id), [o]), P = (0, f.useStateFromStores)([ex.default], () => ex.default.hasSeen(null == o ? void 0 : o.guild_id, O), [o, O]), D = (0, f.useStateFromStores)([M.default, x.default], () => null != x.default.getConnectedActivityChannelId() && x.default.getActivityPanelMode() === eK.ActivityPanelModes.PANEL ? x.default.getFocusedLayout() === eK.FocusedActivityLayouts.NO_CHAT ? ez.ChannelLayouts.NO_CHAT : ez.ChannelLayouts.NORMAL : null != r ? M.default.getLayout(r) : ez.ChannelLayouts.NORMAL, [r]), U = (0, f.useStateFromStores)([M.default], () => null != o ? M.default.getSelectedParticipant(o.id) : null), w = (0, f.useStateFromStores)([eU.default], () => eU.default.getCurrentUser()), F = (0, ea.default)(g), k = (0, eN.default)(y, null == g ? void 0 : g.id), {
    section: B,
    channelSidebarState: V
  } = (0, f.useStateFromStoresObject)([eA.default], () => ({
    section: eA.default.getSection(r, null == o ? void 0 : o.isDM()),
    channelSidebarState: eA.default.getSidebarState(r)
  }), [r, o]), G = null == g ? void 0 : g.id, W = (0, f.useStateFromStores)([eA.default], () => eA.default.getGuildSidebarState(G), [G]), Y = (0, f.useStateFromStores)([eD.default], () => eD.default.getGuildId()), z = Y === ez.FAVORITES, K = (0, eB.default)(o), Z = (0, eB.default)(o, !0), X = null != o && u === o.id, Q = null != o && o.isGuildStageVoice();
  a.useEffect(() => {
    var e, t, n;
    let l = (0, er.getHistory)();
    if ((null == l ? void 0 : null === (e = l.location) || void 0 === e ? void 0 : e.state) === eq.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, es.tryParseChannelPath)(null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), a.useEffect(() => {
    null != s && null != o && Q && o.id === s && !X && ((0, eh.connectAndOpen)(o), i(null))
  }, [s, Q]);
  let q = (0, T.useChannelSummariesExperiment)(o),
    J = null != o && o.isPrivate(),
    $ = (0, v.default)(J),
    ee = (0, v.default)(null == o ? void 0 : o.id);
  a.useEffect(() => {
    let e = $ && !J,
      t = $ && J && (null == o ? void 0 : o.id) !== ee;
    (e || t) && (0, b.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eX.ContentDismissActionType.AUTO
    })
  }, [null == o ? void 0 : o.id, ee, J, $]);
  let et = (0, m.useHasAnyModalOpen)();
  return (0, l.jsx)(e2, {
    guildId: null == o ? void 0 : o.guild_id,
    channelId: r,
    channel: o,
    channelName: K,
    formattedChannelName: Z,
    parentChannel: S,
    voiceChannel: p,
    layout: D,
    needSubscriptionToAccess: C,
    isLurking: O,
    hasModalOpen: et,
    section: B,
    channelSidebarState: V,
    guildSidebarState: W,
    guild: g,
    searchId: (0, f.useStateFromStores)([eP.default], () => eP.default.getCurrentSearchId()),
    showCall: !C && L,
    nsfwAgree: (0, f.useStateFromStores)([eL.default], () => eL.default.didAgree(null == o ? void 0 : o.guild_id)),
    isMobile: (0, f.useStateFromStores)([eO.default], () => (null == o ? void 0 : o.type) === ez.ChannelTypes.DM && eO.default.isMobileOnline(o.getRecipientId()), [o]),
    isUnavailable: (0, f.useStateFromStores)([ej.default], () => (null == o ? void 0 : o.guild_id) != null && ej.default.isUnavailable(o.guild_id), [o]),
    showRealNameModal: F,
    showWelcomeModal: !P && k,
    showFollowButton: (null == o ? void 0 : o.type) === ez.ChannelTypes.GUILD_ANNOUNCEMENT && (null == g ? void 0 : g.hasFeature(ez.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([ew.default], () => ({
      hasVideo: null != o && ew.default.hasVideo(o.id)
    }), [o]),
    inCall: X,
    selectedParticipant: U,
    nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
    showChannelSummaries: q,
    isFavorites: z,
    headerGuildBreadcrumbPosition: z ? "left" : "right"
  })
})