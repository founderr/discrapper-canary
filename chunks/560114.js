"use strict";
n.r(t), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("512722"),
  u = n.n(o),
  d = n("392711"),
  c = n.n(d),
  I = n("990547"),
  g = n("533800"),
  h = n("442837"),
  E = n("692547"),
  f = n("481060"),
  _ = n("447543"),
  T = n("247272"),
  v = n("110924"),
  m = n("100527"),
  N = n("906732"),
  p = n("835473"),
  S = n("447003"),
  x = n("471445"),
  M = n("259473"),
  C = n("687516"),
  A = n("111810"),
  y = n("301935"),
  R = n("397195"),
  L = n("427679"),
  j = n("199902"),
  O = n("439170"),
  V = n("592125"),
  G = n("984933"),
  D = n("341165"),
  U = n("751771"),
  F = n("496675"),
  w = n("158776"),
  P = n("944486"),
  b = n("594174"),
  B = n("938475"),
  k = n("285952"),
  H = n("937482"),
  K = n("759231"),
  Y = n("626135"),
  W = n("630388"),
  z = n("971130"),
  X = n("264229"),
  Q = n("751499"),
  q = n("181852"),
  J = n("366980"),
  Z = n("444260"),
  $ = n("585385"),
  ee = n("603236"),
  et = n("462376"),
  en = n("245335"),
  el = n("981631"),
  ea = n("176505"),
  es = n("689938"),
  ei = n("898678"),
  er = n("611273"),
  eo = n("663086"),
  eu = n("622577");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: eI,
  INVITE_OPTIONS_UNLIMITED: eg
} = z.default;
class eh extends(l = s.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: a,
      analyticsLocation: s,
      streamUserId: i,
      targetType: r,
      targetUserId: o,
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: I,
      modalState: g,
      setModalState: h
    } = this.props, {
      maxAge: E,
      maxUses: f,
      temporary: T
    } = g;
    if (a) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      h({
        networkError: void 0
      }), _.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: E,
        max_uses: f,
        target_user_id: o,
        target_type: r,
        target_application_id: null == u ? void 0 : u.id,
        temporary: T
      }, l).catch(e => h({
        networkError: e
      }))
    }
    if (I && Y.default.track(el.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id
      }), q.default.trackExposure({
        guildId: null == n ? void 0 : n.id,
        location: "acc417_1"
      }), null != i) {
      let e = j.default.getStreamForUser(i, n.id),
        t = (0, C.getStreamerApplication)(e, w.default);
      Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: s,
        other_user_id: i,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == u ? void 0 : u.id) != null || Y.default.track(el.AnalyticEvents.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: s
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      inviteFlags: t,
      setInviteFlags: n
    } = this.props;
    (0, W.hasFlag)(t, g.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, W.removeFlag)(t, g.GuildInviteFlags.IS_GUEST_INVITE)), _.default.clearInviteFromStore(e.id))
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: a
    } = l, s = a ? t : null != e ? e : t;
    return null == s ? s : (0, X.generateInviteKeyFromExtraData)({
      baseCode: s,
      guildScheduledEventId: null == n ? void 0 : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, S.default)(e) ? (0, a.jsxs)("div", {
      className: ei.warningContainer,
      children: [(0, a.jsx)(K.default, {
        className: ei.warningIcon,
        color: E.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: es.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
      })]
    }) : null
  }
  renderHeader() {
    let e;
    let {
      guild: t,
      showFriends: n,
      guildScheduledEvent: l,
      streamUserId: s,
      application: i,
      welcomeToServer: o,
      inviteChannel: u,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: I
    } = d, g = null, h = null;
    if (e = o ? null : null != s ? es.default.Messages.INVITE_STREAM_HEADER : null != i ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: i.name
      }) : null != l ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == u ? void 0 : u.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != u) {
      let e = (0, x.getChannelIconComponent)(u, t);
      null != e && (h = (0, a.jsxs)("div", {
        className: ei.headerChannelContainer,
        children: [(0, a.jsx)(e, {
          className: ei.channelIcon
        }), (0, a.jsx)(f.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: u.name
        })]
      }))
    }
    return g = t.hasFeature(el.GuildFeatures.HUB) ? (0, a.jsxs)("div", {
      className: ei.hubHeader,
      children: [(0, a.jsx)(f.Heading, {
        className: r()(ei.hubInviteTitle, ei.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: es.default.Messages.HUB_INVITE_HEADER
      }), (0, a.jsx)(f.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: es.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, a.jsx)(f.SearchBar, {
        query: I,
        className: ei.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, a.jsxs)("div", {
      className: ei.header,
      children: [(0, a.jsx)("div", {
        className: ei.__invalid_headerTopRow,
        children: (0, a.jsx)(f.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: r()(er.marginBottom4, ei.headerCloseButtonSpacing, ei.headerText),
          children: e
        })
      }), h, (0, a.jsx)(f.SearchBar, {
        query: I,
        className: ei.searchBar,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      }), (0, a.jsx)("div", {
        className: er.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.FormTitle, {
        id: this._headerId,
        tag: "h2",
        className: r()(er.marginReset, ei.headerCloseButtonSpacing, ei.headerText),
        children: e
      }), h, this.renderChannelWarning()]
    }), (0, a.jsxs)(f.ModalHeader, {
      separator: n,
      children: [(0, a.jsx)(f.ModalCloseButton, {
        className: ei.closeButton,
        onClick: c
      }), (0, a.jsxs)("div", {
        className: ei.headerContainer,
        children: [o && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("img", {
            className: ei.welcomeImage,
            src: eu,
            alt: ""
          }), (0, a.jsx)(f.Heading, {
            variant: "heading-lg/semibold",
            className: ei.welcomeHeading,
            children: es.default.Messages.INVITE_WELCOME_HEADING
          }), (0, a.jsx)(f.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: ei.welcomeSubheading,
            children: es.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != s ? (0, a.jsx)(A.default, {}) : null, g]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, a.jsx)(f.ModalContent, {
      className: r()(ei.inviteRowEmptyState),
      children: (0, a.jsx)(f.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, a.jsx)(f.ModalContent, {
      className: r()(ei.inviteRowEmptyState),
      children: (0, a.jsx)(f.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, a.jsx)(f.ModalListContent, {
      className: ei.scroller,
      sections: [e.length],
      renderSection: this.renderSection,
      sectionHeight: 0,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      paddingBottom: 16
    })
  }
  renderSection() {
    return null
  }
  renderBody() {
    var e;
    let {
      guild: t,
      showFriends: n,
      streamUserId: l,
      application: s
    } = this.props;
    if (n) return this.renderFriendsBody();
    let i = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      r = b.default.getCurrentUser();
    u()(null != r, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(r) ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != l ? o = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != s && (o = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, a.jsx)(f.ModalContent, {
      className: ei.noScroll,
      children: (0, a.jsxs)(k.default, {
        direction: k.default.Direction.VERTICAL,
        className: er.marginBottom20,
        children: [(0, a.jsx)(f.Text, {
          className: ei.subText,
          variant: "text-sm/normal",
          children: o
        }), (0, a.jsx)(ee.InviteCopyInput, {
          ...this.props,
          copyValue: i
        })]
      })
    })
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: l,
      streamUserId: s,
      application: i,
      inviteChannel: o,
      modalState: u
    } = this.props, {
      maxAge: d
    } = u, c = null, I = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != s ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != l ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == o ? void 0 : o.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, a.jsxs)(k.default, {
        direction: k.default.Direction.VERTICAL,
        className: ei.content,
        children: [(0, a.jsx)(f.FormTitle, {
          tag: "h5",
          className: er.marginBottom8,
          children: e
        }), (0, a.jsx)(ee.InviteCopyInput, {
          ...this.props,
          copyValue: I
        })]
      })
    } else !t && (c = (0, a.jsxs)(k.default, {
      justify: k.default.Justify.BETWEEN,
      className: er.marginTop20,
      children: [(0, a.jsx)(f.Checkbox, {
        size: 18,
        type: f.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/normal",
          children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, a.jsx)(f.Tooltip, {
        text: es.default.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, a.jsx)(f.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eo.cursorPointer,
            children: (0, a.jsx)(H.default, {
              width: 18,
              height: 18,
              color: E.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, a.jsx)(f.ModalFooter, {
      className: r()({
        [ei.noPadding]: !n,
        [ei.footer]: n
      }),
      children: c
    }) : null
  }
  getModalContent() {
    let {
      modalState: e,
      handleDone: t
    } = this.props, {
      currentPage: n
    } = e;
    switch (n) {
      case en.InstantInviteModalPages.MAIN:
        return (0, a.jsxs)(a.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case en.InstantInviteModalPages.SETTINGS:
        return (0, a.jsx)($.InstantInviteSettingsPage, {
          ...this.props,
          headerId: this._headerId,
          onSelectMaxAge: this.handleSelectMaxAge,
          onSelectMaxUses: this.handleSelectMaxUses,
          onToggleTemporary: this.handleToggleTemporary,
          handleDone: t
        });
      case en.InstantInviteModalPages.GUEST:
        var l;
        let s = (0, J.default)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : "");
        return (0, a.jsx)(Z.InstantInviteGuestPage, {
          ...this.props,
          headerId: this._headerId,
          handleDone: t,
          copyValue: s
        });
      default:
        return null
    }
  }
  render() {
    let {
      transitionState: e,
      inviteChannel: t,
      guild: n
    } = this.props;
    return (0, a.jsx)("div", {
      className: this.props.showFriends ? ei.wrapper : void 0,
      children: (0, a.jsx)(f.ModalRoot, {
        impression: {
          impressionName: I.ImpressionNames.GUILD_INVITE,
          impressionProperties: {
            invite_channel_id: null == t ? void 0 : t.id,
            invite_guild_id: n.id
          }
        },
        "aria-labelledby": this._headerId,
        transitionState: e,
        className: ei.modal,
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), ed(this, "_scroller", null), ed(this, "_headerId", c().uniqueId()), ed(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(en.InstantInviteModalPages.SETTINGS)
    }), ed(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), ed(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), ed(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), ed(this, "handleToggleGuest", e => {
      let {
        inviteFlags: t,
        setInviteFlags: n
      } = this.props;
      n((0, W.setFlag)(t, g.GuildInviteFlags.IS_GUEST_INVITE, e))
    }), ed(this, "handleQueryChange", e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null === (t = this._scroller) || void 0 === t || t.scrollTo({
        to: 0
      }), (0, T.searchInviteSuggestions)(e), n({
        query: e
      })
    }), ed(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ed(this, "handleToggleMaxAge", () => {
      let {
        modalState: e,
        setModalState: t
      } = this.props, {
        maxAge: n,
        savedMaxAge: l
      } = e;
      t({
        maxAge: l,
        savedMaxAge: n
      })
    }), ed(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      switch (this.props.rows[t].type) {
        case z.RowTypes.CHANNEL:
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return et.INVITE_ROW_HEIGHT;
        default:
          return 0
      }
    }), ed(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        analyticsLocation: l
      } = this.props, s = this.getInviteKey(), i = this.props.rows[n], r = "".concat(i.type, "-").concat(i.item.id);
      switch (i.type) {
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.CHANNEL:
          return (0, a.jsx)(et.InviteRow, {
            row: i,
            channel: i.item,
            inviteKey: s,
            location: l
          }, r);
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return (0, a.jsx)(et.InviteRow, {
            row: i,
            user: i.item,
            inviteKey: s,
            location: l
          }, r);
        default:
          return null
      }
    })
  }
}
ed(eh, "defaultProps", {
  analyticsLocation: el.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eI.value
}), t.default = s.forwardRef(function(e, t) {
  var n, l, i, r;
  let {
    channel: o,
    guild: u,
    source: d,
    guildScheduledEvent: c,
    streamUserId: I,
    applicationId: E,
    transitionState: f,
    onClose: x,
    welcomeToServer: C,
    page: A,
    analyticsLocation: j
  } = e, [w, b] = s.useState(A === en.InstantInviteModalPages.GUEST ? g.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    analyticsLocations: k
  } = (0, N.default)(m.default.INSTANT_INVITE_MODAL), H = (0, h.useStateFromStores)([V.default, P.default], () => {
    let e = P.default.getVoiceChannelId();
    if (null == e) return null;
    let t = V.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === u.id ? t : null
  }), K = null != H && !(0, S.default)(H) && [el.InstantInviteSources.GUILD_CONTEXT_MENU, el.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, R.default)(u.id), z = (0, h.useStateFromStores)([P.default, V.default, G.default], () => {
    if (K && ((0, W.hasFlag)(w, g.GuildInviteFlags.IS_GUEST_INVITE) || A === en.InstantInviteModalPages.GUEST)) return H;
    if (A === en.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
    if (null != o) return o;
    let e = P.default.getChannelId(),
      t = null == e || (0, ea.isStaticChannelRoute)(e) ? void 0 : V.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = V.default.getChannel(t.parent_id)), null != t ? t : G.default.getDefaultChannel(u.id, !0, el.Permissions.CREATE_INSTANT_INVITE)
  }, [K, w, A, o, u.id, H, Y]), [X, q] = s.useState(null), J = null != X ? X : z, Z = null;
  null != I ? Z = en.InviteTargetTypes.STREAM : null != E && (Z = en.InviteTargetTypes.EMBEDDED_APPLICATION);
  let $ = null != o ? o.getGuildId() : null != u ? u.id : null,
    ee = (0, h.useStateFromStores)([D.default], () => {
      let e = null != J ? J.id : null;
      return null == e ? null : D.default.getInvite(e, {
        targetType: Z,
        targetUserId: I,
        targetApplicationId: E
      })
    }, [J, Z, I, E]),
    [et, es, ei, er, eo] = (0, h.useStateFromStoresArray)([U.default, B.default, O.default], () => {
      let e = null != J ? J.id : null;
      return [U.default.getInviteSuggestionRows(), U.default.getTotalSuggestionsCount() >= 1, U.default.getInitialCounts(), null != o && null != J ? B.default.getVoiceStatesForChannel(J) : null, null != $ ? O.default.getProps($, e) : null]
    }, [J, o, $]),
    eu = (0, h.useStateFromStores)([F.default], () => null != J && F.default.can(el.Permissions.CREATE_INSTANT_INVITE, J), [J]),
    ed = null === ee || !eu,
    [eE] = s.useState(() => {
      let e = new Set;
      return null != I && null != er ? er.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != $ && null != eo && Z !== en.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
        t.type === O.MemberListRowTypes.MEMBER && e.add(t.userId)
      }), e
    }),
    ef = null == o ? void 0 : o.id,
    e_ = (0, h.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(ef), [ef]);
  s.useEffect(() => {
    (0, T.loadInviteSuggestions)({
      omitUserIds: eE,
      guild: u,
      channel: o,
      applicationId: E,
      inviteTargetType: Z
    }).catch(el.NOOP_NULL)
  }, [eE, o, u, E, Z]);
  let [eT] = (0, p.default)(null != E ? [E] : []), ev = (0, M.default)({
    guildId: $
  }), em = null != ee ? ee.code : void 0, eN = null == ee ? void 0 : ee.maxAge, ep = null == ee ? void 0 : ee.maxUses, eS = null == ee ? void 0 : ee.temporary, ex = u.vanityURLCode, eM = null != ex && ex.length > 0, {
    enabled: eC
  } = Q.default.useExperiment({
    guildId: null !== (i = null !== (l = null !== (n = u.id) && void 0 !== n ? n : null == ee ? void 0 : ee.guild.id) && void 0 !== l ? l : $) && void 0 !== i ? i : el.EMPTY_STRING_SNOWFLAKE_ID,
    location: "acc417_2"
  }, {
    autoTrackExposure: eM
  }), eA = eC && !(null == J ? void 0 : J.isGuildVocal()) && eM, ey = (null == J ? void 0 : J.type) === el.ChannelTypes.GUILD_VOICE, eR = (0, S.default)(J);
  !eu && (null == e_ ? void 0 : e_.invite_code) != null && (em = e_.invite_code);
  let [eL, ej] = s.useState({
    query: "",
    maxAge: null !== (r = null != eN ? eN : ev) && void 0 !== r ? r : eI.value,
    savedMaxAge: eN === ec.value ? null != ev ? ev : eI.value : ec.value,
    maxUses: null != ep && 0 !== ep ? ep : eg.value,
    temporary: null != eS && eS,
    networkError: void 0,
    showVanityURL: eA,
    currentPage: null != A ? A : en.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eO = s.useCallback(e => {
    ej(t => ({
      ...t,
      ...e
    }))
  }, []), eV = s.useCallback(e => {
    eO({
      currentPage: e,
      lastPage: eL.currentPage
    })
  }, [eL.currentPage, eO]), eG = (ey || K) && A !== en.InstantInviteModalPages.GUEST && !eA && !ed && !eR, {
    enabled: eD
  } = y.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == u ? void 0 : u.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eG
  }), {
    maxAge: eU,
    maxUses: eF,
    temporary: ew,
    savedMaxAge: eP
  } = eL, eb = s.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = eL;
    e === en.InstantInviteModalPages.SETTINGS && null != t ? eV(t) : x()
  }, [eV, eL, x]), eB = s.useCallback(() => {
    let e = null == J ? void 0 : J.id;
    0 === eF && 0 === eU && !ew && eA ? eO({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eO({
      networkError: void 0,
      showVanityURL: !1
    }), _.default.createInvite(e, {
      max_age: eU,
      max_uses: eF,
      target_type: Z,
      target_user_id: I,
      target_application_id: null == eT ? void 0 : eT.id,
      temporary: ew,
      flags: w
    }, d).catch(e => eO({
      networkError: e,
      showVanityURL: eA
    }))), eU !== ec.value && eP !== ec.value && eO({
      savedMaxAge: ec.value
    })
  }, [eA, J, d, null == eT ? void 0 : eT.id, Z, I, eU, eF, ew, w, eO, eP]), ek = (0, v.default)(J), eH = (0, v.default)(w), eK = ek !== J, eY = eH !== w;
  return s.useEffect(() => {
    (eK || eY) && eB()
  }, [eB, eK, eY]), (0, a.jsx)(N.AnalyticsLocationProvider, {
    value: k,
    children: (0, a.jsx)(eh, {
      ref: t,
      canCreateInvites: eu,
      noInvitesAvailable: ed,
      inviteChannel: J,
      guild: u,
      guildScheduledEvent: c,
      streamUserId: I,
      vanityURLCode: ex,
      targetType: Z,
      targetUserId: I,
      application: eT,
      rows: et,
      showFriends: es,
      initialCounts: ei,
      code: em,
      source: d,
      welcomeToServer: C,
      analyticsLocations: k,
      analyticsLocation: j,
      transitionState: f,
      onClose: x,
      canShowVanityURL: eA,
      isGuestInviteCreationToggleEnabled: eD && eG,
      shouldHideTemporaryInviteToggle: eD && eG || A === en.InstantInviteModalPages.GUEST,
      modalState: eL,
      setModalState: eO,
      changePage: eV,
      onGenerateNewLink: eB,
      inviteFlags: w,
      setInviteFlags: b,
      showGuestInviteToggleForCurrentVoiceChannel: K,
      setInviteChannel: q,
      handleDone: eb
    })
  })
})