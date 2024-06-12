"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("613828"),
  f = n("848246"),
  h = n("442837"),
  m = n("704215"),
  p = n("952265"),
  E = n("481060"),
  g = n("239091"),
  C = n("377993"),
  S = n("457868"),
  _ = n("561472"),
  T = n("36311"),
  I = n("112724"),
  A = n("902840"),
  v = n("110924"),
  x = n("317381"),
  N = n("82888"),
  M = n("917107"),
  y = n("358221"),
  R = n("677601"),
  L = n("541716"),
  O = n("236091"),
  j = n("663993"),
  P = n("252618"),
  D = n("201493"),
  b = n("605236"),
  U = n("174130"),
  F = n("588322"),
  w = n("517525"),
  k = n("445384"),
  H = n("613464"),
  G = n("705563"),
  B = n("730647"),
  V = n("66999"),
  W = n("826763"),
  Y = n("180216"),
  z = n("51486"),
  K = n("168843"),
  Z = n("442336"),
  X = n("57304"),
  q = n("605953"),
  J = n("374306"),
  Q = n("984370"),
  $ = n("910611"),
  ee = n("915718"),
  et = n("518311"),
  en = n("180539"),
  ea = n("882378"),
  el = n("207868"),
  es = n("246919"),
  ei = n("754688"),
  er = n("41776"),
  eo = n("6242"),
  eu = n("757692"),
  ed = n("386542"),
  ec = n("134483"),
  ef = n("703656"),
  eh = n("359110"),
  em = n("854709"),
  ep = n("14091"),
  eE = n("6025"),
  eg = n("897473"),
  eC = n("922482"),
  eS = n("504185"),
  e_ = n("657218"),
  eT = n("66556"),
  eI = n("739830"),
  eA = n("377929"),
  ev = n("900157"),
  ex = n("108427"),
  eN = n("171368"),
  eM = n("346967"),
  ey = n("524329"),
  eR = n("995532"),
  eL = n("738643"),
  eO = n("433355"),
  ej = n("592125"),
  eP = n("703558"),
  eD = n("486472"),
  eb = n("731290"),
  eU = n("430824"),
  eF = n("158776"),
  ew = n("768119"),
  ek = n("944486"),
  eH = n("914010"),
  eG = n("594174"),
  eB = n("979651"),
  eV = n("368666"),
  eW = n("792125"),
  eY = n("933557"),
  ez = n("287746"),
  eK = n("325708"),
  eZ = n("335615"),
  eX = n("992744"),
  eq = n("923029"),
  eJ = n("176505"),
  eQ = n("981631"),
  e$ = n("918559"),
  e0 = n("354459"),
  e1 = n("921944"),
  e2 = n("440493"),
  e3 = n("157925"),
  e4 = n("689938"),
  e7 = n("19340");

function e5(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e6 = (0, j.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("49131")]).then(n.bind(n, "434878")),
  webpackId: "434878",
  renderLoader: () => (0, a.jsx)("div", {
    className: e7.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  name: "ForumChannel"
});
class e9 extends l.PureComponent {
  componentDidMount() {
    (0, ex.trackAppUIViewed)("guild_channel")
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
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), o()(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, g.openContextMenuLazy)(e, async () => {
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
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, g.openContextMenuLazy)(e, async () => {
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
    let l = eG.default.getUser(t.getRecipientId());
    o()(null != l, "Missing user in Channel.openDMContextMenu"), (0, g.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("22036"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: l,
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
      nsfwAgree: a
    } = this.props;
    return (!(null == e ? void 0 : e.isNSFW()) || n && a) && t
  }
  renderCall() {
    let {
      channel: e
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall()) return null;
    switch (e.type) {
      case eQ.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(eS.default, {
          channel: e
        }, e.id);
      case eQ.ChannelTypes.GUILD_VOICE:
      case eQ.ChannelTypes.DM:
      case eQ.ChannelTypes.GROUP_DM:
      case eQ.ChannelTypes.PUBLIC_THREAD:
      case eQ.ChannelTypes.PRIVATE_THREAD:
        let t = this.props.height - 200;
        return (0, a.jsx)(R.default, {
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
    return (0, a.jsx)(N.default, {
      maxHeight: n,
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
    }) : (0, a.jsx)(B.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, a.jsx)(Y.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(T.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return o()(null != n, "directory channels must exist within a guild"), (0, a.jsx)(D.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o()(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e6, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(ez.default, {
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
      showCall: r,
      showActivityPanel: u
    } = this.props;
    if (o()(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eQ.ChannelSections.PROFILE && t.isPrivate() && !r && !u) return (0, a.jsx)(eM.default, {
      location: "Channel",
      channel: t
    }, "private-channel-profile-".concat(t.id));
    else if (i === eQ.ChannelSections.MEMBERS) switch (t.type) {
      case eQ.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(C.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eQ.ChannelTypes.GUILD_DIRECTORY:
      case eQ.ChannelTypes.GUILD_FORUM:
      case eQ.ChannelTypes.GUILD_MEDIA:
      case eQ.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eQ.ChannelTypes.GUILD_TEXT:
        var d;
        let c = !0 === eQ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
        return (0, a.jsx)(eZ.default, {
          channel: t
        }, "channel-members-".concat(c));
      case eQ.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eZ.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eQ.ChannelTypes.PUBLIC_THREAD:
      case eQ.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(S.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eQ.ChannelSections.SEARCH && null != e) return (0, a.jsx)(ep.default, {
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
    return null == e || null == t || r || l ? null : (o && (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("57372")]).then(n.bind(n, "784280"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(e2.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, "184782"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, ey.welcomeScreenViewed)(t, i),
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
    if (n === eQ.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case eg.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(e_.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case eg.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.default : ev.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case eg.SidebarType.VIEW_CHANNEL:
        case eg.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === eg.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: eQ.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          className: e7.guildSidebar,
          children: (0, a.jsx)(H.default, {
            guildId: e,
            userId: t,
            onClose: () => eE.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && eQ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - eQ.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eK.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eQ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eK.ChatSidebarType.PostSidebar : eK.ChatSidebarType.ThreadSidebar,
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
      isUnavailable: l,
      layout: s,
      section: r,
      hasModalOpen: o,
      guildSidebarState: u,
      hasTextActivityInPanelMode: d
    } = this.props, {
      threadSidebarWidth: c,
      isThreadSidebarFloating: f
    } = this.state, h = this.shouldRenderCall();
    if (l) return (0, a.jsx)(eX.default, {});
    if (null == e) return (0, a.jsx)(eq.default, {
      channelId: this.props.channelId
    });
    let m = r === eQ.ChannelSections.SIDEBAR_CHAT,
      p = null != u && !m,
      E = !e.isForumLikeChannel() && !o,
      g = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.AppPageTitle, {
        location: g,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i()(e7.chat, {
          [e7.threadSidebarOpen]: m || p,
          [e7.threadSidebarFloating]: m && f
        }),
        children: [E ? (0, a.jsx)(_.default, {
          style: {
            right: m ? c : void 0
          },
          className: e7.uploadArea,
          channel: e,
          draftType: eP.DraftType.ChannelMessage
        }) : null, h || d ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i()(e7.content, {
            [e7.noChat]: s === eQ.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(z.default, {})]
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
      null != e && (0, eh.transitionToChannel)(e.id)
    }), e5(this, "_handleContextMenu", (e, t) => {
      switch (t.type) {
        case eQ.ChannelTypes.GUILD_VOICE:
        case eQ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eQ.ChannelTypes.GUILD_TEXT:
        case eQ.ChannelTypes.GUILD_FORUM:
        case eQ.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eQ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eQ.ChannelTypes.PUBLIC_THREAD:
        case eQ.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eQ.ChannelTypes.DM:
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
      o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eN.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eQ.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }), e5(this, "renderJoinRequestInterviewButtons", () => {
      let {
        channel: e
      } = this.props;
      return (null == e ? void 0 : e.hasFlag(eJ.ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) ? (0, a.jsx)(G.default, {
        channelId: e.id,
        showTrailingDivider: !0
      }) : null
    }), e5(this, "renderClipsEnabledIndicatorToolbarItem", () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(O.default, {
        channelId: null != t ? t.id : null
      }) : null
    }), e5(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
      let {
        selectedParticipant: e,
        premiumIndicatorEnabled: t
      } = this.props;
      return (null == e ? void 0 : e.type) !== e0.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
        size: eV.default.Sizes.LARGE,
        participant: e,
        showQuality: !0,
        premiumIndicator: t
      }, "live-indicator")
    }), e5(this, "renderHeaderToolbar", () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: l,
        showActivityPanel: s
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let i = [];
      if (e.isSystemDM()) return i;
      switch (e.type) {
        case eQ.ChannelTypes.GUILD_STAGE_VOICE:
        case eQ.ChannelTypes.GUILD_VOICE:
          break;
        case eQ.ChannelTypes.DM:
          i.push(this.renderClipsEnabledIndicatorToolbarItem()), i.push(this.renderStreamQualityLiveIndicatorToolbarItem()), i.push((0, a.jsx)(ee.default, {
            channel: e
          }, "calls")), i.push((0, a.jsx)(X.default, {
            channel: e
          }, "pins")), i.push((0, a.jsx)(et.default, {
            channel: e,
            tooltip: e4.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), i.push((0, a.jsx)(en.default, {
            channel: e,
            showCallOrActivityPanel: l || s
          }, "profile")), i.push((0, a.jsx)(ea.default, {
            channel: e
          }, "safety_tools"));
          break;
        case eQ.ChannelTypes.GROUP_DM:
          if (i.push(this.renderJoinRequestInterviewButtons()), i.push(this.renderClipsEnabledIndicatorToolbarItem()), i.push(this.renderStreamQualityLiveIndicatorToolbarItem()), i.push((0, a.jsx)(ee.default, {
              channel: e
            }, "calls")), i.push((0, a.jsx)(X.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = e4.default.Messages.GROUP_DM_ADD_FRIENDS;
            i.push((0, a.jsx)(et.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          i.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eQ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eQ.ChannelTypes.PRIVATE_THREAD:
        case eQ.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && i.push((0, a.jsx)(eT.default, {
            channel: t
          }, "browser")), e.isVocalThread() && i.push((0, a.jsx)(el.default, {
            channel: e
          }, "thread-call")), i.push((0, a.jsx)(eI.default, {
            channel: e
          }, "notifications")), i.push((0, a.jsx)(X.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && i.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), null != t && (0, A.canSeeChannelSummaries)(e) && i.push((0, a.jsx)(q.default, {
            channel: e
          }, "summaries")), i.push((0, a.jsx)(eA.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eQ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eQ.ChannelTypes.GUILD_TEXT:
          i.push((0, a.jsx)(U.default, {
            channel: e
          }, "favorites")), i.push((0, a.jsx)(eT.default, {
            channel: e
          }, "browser")), !n && i.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications")), i.push((0, a.jsx)(X.default, {
            channel: e
          }, "pins")), i.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), (0, A.canSeeChannelSummaries)(e) && i.push((0, a.jsx)(q.default, {
            channel: e
          }, "summaries"));
          break;
        case eQ.ChannelTypes.GUILD_FORUM:
        case eQ.ChannelTypes.GUILD_MEDIA:
          !n && (i.push((0, a.jsx)(J.default, {
            channel: e
          }, "forum-onboarding")), i.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && i.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eQ.ChannelTypes.GUILD_DIRECTORY:
          i.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return i
    }), e5(this, "renderMobileToolbar", () => {
      let {
        channel: e
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eQ.ChannelTypes.GUILD_STAGE_VOICE:
        case eQ.ChannelTypes.GUILD_VOICE:
        case eQ.ChannelTypes.DM:
          break;
        case eQ.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eQ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eQ.ChannelTypes.PRIVATE_THREAD:
        case eQ.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eQ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eQ.ChannelTypes.GUILD_TEXT:
        case eQ.ChannelTypes.GUILD_FORUM:
        case eQ.ChannelTypes.GUILD_MEDIA:
        case eQ.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }), e5(this, "renderFollowButton", () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, a.jsx)(E.Button, {
        size: E.Button.Sizes.MIN,
        color: E.Button.Colors.PRIMARY,
        className: e7.followButton,
        onClick: () => (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e4.default.Messages.FOLLOW
      }) : null
    }), e5(this, "renderHeaderBar", () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        showActivityPanel: u,
        hasVideo: d,
        headerGuildBreadcrumbPosition: c,
        isFavorites: f
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderBar"), o()(null != t, "Should not be null if channel is not null.");
      let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)("div", {
        className: e7.subtitleContainer,
        children: [(0, a.jsxs)(Q.default, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || f && !(0, em.isFavoriteSearchEnabled)(),
          showDivider: f && !(0, em.isFavoriteSearchEnabled)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: i()(e7.title, d && r ? (0, eW.getThemeClass)(eQ.ThemeTypes.DARK) : null),
          transparent: r || u,
          "aria-label": e4.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
          children: ["left" === c && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "right"
          }), (0, $.renderTitle)({
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: l,
            hasVideo: d,
            handleContextMenu: this.handleContextMenu,
            handleParentContextMenu: this.handleParentContextMenu,
            handleClick: h,
            handleParentClick: m,
            renderFollowButton: this.renderFollowButton
          }), "right" === c && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "left"
          }), (0, $.renderTopic)(e, l)]
        }, "header-".concat(e.id)), (0, a.jsx)(ec.default, {
          channelId: e.id
        })]
      })
    })
  }
}
let e8 = (0, I.default)(e9);
t.default = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, h.useStateFromStores)([ek.default], () => ek.default.getChannelId()), o = (0, h.useStateFromStores)([ek.default], () => ek.default.getVoiceChannelId()), u = (0, h.useStateFromStores)([ej.default], () => null != n ? n : ej.default.getChannel(r), [r, n]), E = (0, h.useStateFromStores)([ej.default], () => ej.default.getChannel(o), [o]), g = null == u ? void 0 : u.parent_id, C = (0, h.useStateFromStores)([ej.default], () => ej.default.getChannel(g), [g]), S = (0, h.useStateFromStores)([eU.default], () => eU.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: _
  } = (0, V.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), T = (0, h.useStateFromStores)([y.default], () => {
    let e = null != r ? y.default.getParticipants(r) : [],
      t = null != r ? y.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, h.useStateFromStores)([x.default], () => {
    var e;
    return x.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : eQ.EMPTY_STRING_SNOWFLAKE_ID)
  }), N = (0, h.useStateFromStores)([x.default], () => x.default.getActivityPanelMode()), R = null != I && !(0, M.default)(null == u ? void 0 : u.id) && N === e$.ActivityPanelModes.PANEL, L = (0, h.useStateFromStores)([eB.default], () => null != u && u.isVocalThread() && !d().isEmpty(eB.default.getVoiceStatesForChannel(u.id)), [u]), O = null != u && u.isPrivate() && !R && T, j = (null == u ? void 0 : u.isGuildVocal()) || O || L, {
    welcomeModalChannelId: P
  } = (0, c.useLocation)(), D = (0, h.useStateFromStores)([er.default], () => null != u && er.default.isLurking(u.guild_id), [u]), U = (0, h.useStateFromStores)([eR.default], () => eR.default.hasSeen(null == u ? void 0 : u.guild_id, D), [u, D]), F = (0, h.useStateFromStores)([y.default, x.default], () => null != x.default.getConnectedActivityChannelId() && x.default.getActivityPanelMode() === e$.ActivityPanelModes.PANEL ? x.default.getFocusedLayout() === e$.FocusedActivityLayouts.NO_CHAT ? eQ.ChannelLayouts.NO_CHAT : eQ.ChannelLayouts.NORMAL : null != r ? y.default.getLayout(r) : eQ.ChannelLayouts.NORMAL, [r]), w = (0, h.useStateFromStores)([y.default], () => null != u ? y.default.getSelectedParticipant(u.id) : null), k = (0, h.useStateFromStores)([eG.default], () => eG.default.getCurrentUser()), H = (0, es.default)(S), G = (0, eL.default)(P, null == S ? void 0 : S.id), {
    section: B,
    channelSidebarState: W
  } = (0, h.useStateFromStoresObject)([eO.default], () => ({
    section: eO.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eO.default.getSidebarState(r)
  }), [r, u]), Y = null == S ? void 0 : S.id, z = (0, h.useStateFromStores)([eO.default], () => eO.default.getGuildSidebarState(Y), [Y]), K = (0, h.useStateFromStores)([eH.default], () => eH.default.getGuildId()) === eQ.FAVORITES, {
    available: Z,
    activated: X,
    hqStreamingState: q
  } = (0, ed.usePerksDemo)(f.EntitlementFeatureNames.STREAM_HIGH_QUALITY), J = Z && X && q.hqStreamingIsEnabled, Q = (0, eu.canStreamParticipantSetting)(w, k), $ = (0, eo.useHDStreamingViewerExperiment)("Channel", !0, k, Q), ee = (0, eY.default)(u), et = (0, eY.default)(u, !0), en = null != u && o === u.id, ea = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, ef.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === e3.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, ei.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && ea && u.id === s && !en && ((0, eC.connectAndOpen)(u), i(null))
  }, [s, ea]);
  let el = (0, A.useChannelSummariesExperiment)(u),
    ec = null != u && u.isPrivate(),
    eh = (0, v.default)(ec),
    em = (0, v.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = eh && !ec,
      t = eh && ec && (null == u ? void 0 : u.id) !== em;
    (e || t) && (0, b.markDismissibleContentAsDismissed)(m.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: e1.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, em, ec, eh]);
  let ep = (0, p.useHasAnyModalOpen)();
  return (0, a.jsx)(e8, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: ee,
    formattedChannelName: et,
    parentChannel: C,
    voiceChannel: E,
    layout: F,
    needSubscriptionToAccess: _,
    isLurking: D,
    hasModalOpen: ep,
    section: B,
    channelSidebarState: W,
    guildSidebarState: z,
    guild: S,
    searchId: (0, h.useStateFromStores)([ew.default], () => ew.default.getCurrentSearchId()),
    showCall: !_ && j,
    showActivityPanel: R,
    nsfwAgree: (0, h.useStateFromStores)([eb.default], () => eb.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, h.useStateFromStores)([eF.default], () => (null == u ? void 0 : u.type) === eQ.ChannelTypes.DM && eF.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, h.useStateFromStores)([eD.default], () => (null == u ? void 0 : u.guild_id) != null && eD.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: H,
    showWelcomeModal: !U && G,
    showFollowButton: (null == u ? void 0 : u.type) === eQ.ChannelTypes.GUILD_ANNOUNCEMENT && (null == S ? void 0 : S.hasFeature(eQ.GuildFeatures.NEWS)) || !1,
    ...(0, h.useStateFromStoresObject)([eB.default], () => ({
      hasVideo: null != u && eB.default.hasVideo(u.id)
    }), [u]),
    inCall: en,
    selectedParticipant: w,
    nsfwAllowed: (null == k ? void 0 : k.nsfwAllowed) === !0,
    showChannelSummaries: el,
    isFavorites: K,
    headerGuildBreadcrumbPosition: K ? "left" : "right",
    premiumIndicatorEnabled: J || $.enabled,
    hasTextActivityInPanelMode: R
  })
})