"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("627445"),
  u = n.n(a),
  o = n("917351"),
  d = n.n(o),
  c = n("759843"),
  f = n("498574"),
  h = n("446674"),
  g = n("669491"),
  I = n("77078"),
  v = n("970728"),
  E = n("685073"),
  _ = n("84339"),
  m = n("812204"),
  p = n("685665"),
  T = n("442939"),
  S = n("656038"),
  N = n("419830"),
  C = n("262362"),
  x = n("582415"),
  A = n("385042"),
  w = n("87241"),
  M = n("155996"),
  R = n("834052"),
  y = n("373469"),
  L = n("19766"),
  O = n("42203"),
  V = n("923959"),
  b = n("330154"),
  F = n("705955"),
  D = n("957255"),
  U = n("824563"),
  j = n("18494"),
  P = n("697218"),
  G = n("316133"),
  H = n("941886"),
  B = n("145131"),
  k = n("810567"),
  W = n("474571"),
  K = n("423487"),
  z = n("599110"),
  Z = n("568734"),
  Y = n("354023"),
  q = n("9294"),
  X = n("512027"),
  Q = n("234919"),
  $ = n("52393"),
  J = n("216463"),
  ee = n("474592"),
  et = n("652453"),
  en = n("470259"),
  el = n("91366"),
  ei = n("49111"),
  er = n("724210"),
  es = n("782340"),
  ea = n("435808"),
  eu = n("926622"),
  eo = n("486425"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: ef,
  INVITE_OPTIONS_UNLIMITED: eh
} = Y.default;
class eg extends i.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: r,
      streamUserId: s,
      targetType: a,
      targetUserId: u,
      application: o,
      initialCounts: d,
      rows: c,
      showFriends: f,
      modalState: h,
      setModalState: g
    } = this.props, {
      maxAge: I,
      maxUses: E,
      temporary: _
    } = h;
    if (i) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      g({
        networkError: void 0
      }), v.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: I,
        max_uses: E,
        target_user_id: u,
        target_type: a,
        target_application_id: null == o ? void 0 : o.id,
        temporary: _
      }, l).catch(e => g({
        networkError: e
      }))
    }
    if (f && z.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id
      }), Q.default.trackExposure({
        guildId: null == n ? void 0 : n.id,
        location: "acc417_1"
      }), null != s) {
      let e = y.default.getStreamForUser(s, n.id),
        t = (0, x.getStreamerApplication)(e, U.default);
      z.default.track(ei.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: r,
        other_user_id: s,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == o ? void 0 : o.id) != null || z.default.track(ei.AnalyticEvents.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: r
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      inviteFlags: t,
      setInviteFlags: n
    } = this.props;
    (0, Z.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Z.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), v.default.clearInviteFromStore(e.id))
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: i
    } = l, r = i ? t : null != e ? e : t;
    return null == r ? r : (0, q.generateInviteKeyFromExtraData)({
      baseCode: r,
      guildScheduledEventId: null == n ? void 0 : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, S.default)(e) ? (0, l.jsxs)("div", {
      className: ea.warningContainer,
      children: [(0, l.jsx)(K.default, {
        className: ea.warningIcon,
        color: g.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(I.Text, {
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
      guildScheduledEvent: i,
      streamUserId: r,
      application: a,
      welcomeToServer: u,
      inviteChannel: o,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: f
    } = d, h = null, g = null;
    if (e = u ? null : null != r ? es.default.Messages.INVITE_STREAM_HEADER : null != a ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: a.name
      }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != o) {
      let e = (0, N.getChannelIconComponent)(o, t);
      null != e && (g = (0, l.jsxs)("div", {
        className: ea.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: ea.channelIcon
        }), (0, l.jsx)(I.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: o.name
        })]
      }))
    }
    return h = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: ea.hubHeader,
      children: [(0, l.jsx)(I.Heading, {
        className: s(ea.hubInviteTitle, ea.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: es.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(I.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: es.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(k.default, {
        query: f,
        className: ea.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: ea.header,
      children: [(0, l.jsx)("div", {
        className: ea.headerTopRow,
        children: (0, l.jsx)(I.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: s(eu.marginBottom4, ea.headerCloseButtonSpacing, ea.headerText),
          children: e
        })
      }), g, (0, l.jsx)(k.default, {
        query: f,
        className: ea.searchBar,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      }), (0, l.jsx)("div", {
        className: eu.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.FormTitle, {
        id: this._headerId,
        tag: "h2",
        className: s(eu.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
        children: e
      }), g, this.renderChannelWarning()]
    }), (0, l.jsxs)(I.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(I.ModalCloseButton, {
        className: ea.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: ea.headerContainer,
        children: [u && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: ea.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(I.H, {
            className: ea.welcomeHeading,
            children: es.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: ea.welcomeSubheading,
            children: es.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != r ? (0, l.jsx)(A.default, {}) : null, h]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
      className: s(ea.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(I.ModalContent, {
      className: s(ea.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(I.ModalListContent, {
      className: ea.scroller,
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
      streamUserId: i,
      application: r
    } = this.props;
    if (n) return this.renderFriendsBody();
    let s = (0, $.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      a = P.default.getCurrentUser();
    u(null != a, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(a),
      d = o ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
      className: ea.noScroll,
      children: (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: eu.marginBottom20,
        children: [(0, l.jsx)(I.Text, {
          className: ea.subText,
          variant: "text-sm/normal",
          children: d
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: s
        })]
      })
    })
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: i,
      streamUserId: r,
      application: a,
      inviteChannel: u,
      modalState: o
    } = this.props, {
      maxAge: d
    } = o, c = null, f = (0, $.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != r ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != a ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: ea.content,
        children: [(0, l.jsx)(I.FormTitle, {
          tag: "h5",
          className: eu.marginBottom8,
          children: e
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: f
        })]
      })
    } else !t && (c = (0, l.jsxs)(B.default, {
      justify: B.default.Justify.BETWEEN,
      className: eu.marginTop20,
      children: [(0, l.jsx)(I.Checkbox, {
        size: 18,
        type: I.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, l.jsx)(I.Text, {
          className: ea.checkBoxLabel,
          variant: "text-sm/normal",
          children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(I.Tooltip, {
        text: es.default.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, l.jsx)(I.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eo.cursorPointer,
            children: (0, l.jsx)(W.default, {
              width: 18,
              height: 18,
              color: g.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, l.jsx)(I.ModalFooter, {
      className: s({
        [ea.noPadding]: !n,
        [ea.footer]: n
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
      case el.InstantInviteModalPages.MAIN:
        return (0, l.jsxs)(l.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case el.InstantInviteModalPages.SETTINGS:
        return (0, l.jsx)(ee.InstantInviteSettingsPage, {
          ...this.props,
          headerId: this._headerId,
          onSelectMaxAge: this.handleSelectMaxAge,
          onSelectMaxUses: this.handleSelectMaxUses,
          onToggleTemporary: this.handleToggleTemporary,
          handleDone: t
        });
      case el.InstantInviteModalPages.GUEST:
        var i;
        let r = (0, $.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
        return (0, l.jsx)(J.InstantInviteGuestPage, {
          ...this.props,
          headerId: this._headerId,
          handleDone: t,
          copyValue: r
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
    return (0, l.jsx)("div", {
      className: this.props.showFriends ? ea.wrapper : void 0,
      children: (0, l.jsx)(I.ModalRoot, {
        impression: {
          impressionName: c.ImpressionNames.GUILD_INVITE,
          impressionProperties: {
            invite_channel_id: null == t ? void 0 : t.id,
            invite_guild_id: n.id
          }
        },
        "aria-labelledby": this._headerId,
        transitionState: e,
        className: ea.modal,
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
      let {
        changePage: e
      } = this.props;
      e(el.InstantInviteModalPages.SETTINGS)
    }, this.handleSelectMaxAge = e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }, this.handleSelectMaxUses = e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }, this.handleToggleTemporary = e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }, this.handleToggleGuest = e => {
      let {
        inviteFlags: t,
        setInviteFlags: n
      } = this.props;
      n((0, Z.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
    }, this.handleQueryChange = e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null === (t = this._scroller) || void 0 === t || t.scrollTo({
        to: 0
      }), (0, E.searchInviteSuggestions)(e), n({
        query: e
      })
    }, this.handleClearSearch = () => {
      this.handleQueryChange("")
    }, this.handleToggleMaxAge = () => {
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
    }, this.getRowHeight = (e, t) => {
      if (e > 0) return 0;
      let n = this.props.rows[t];
      switch (n.type) {
        case Y.RowTypes.CHANNEL:
        case Y.RowTypes.GROUP_DM:
        case Y.RowTypes.DM:
        case Y.RowTypes.FRIEND:
          return en.INVITE_ROW_HEIGHT;
        default:
          return 0
      }
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        analyticsLocation: i
      } = this.props, r = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
      switch (s.type) {
        case Y.RowTypes.GROUP_DM:
        case Y.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            channel: s.item,
            inviteKey: r,
            location: i
          }, a);
        case Y.RowTypes.DM:
        case Y.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            user: s.item,
            inviteKey: r,
            location: i
          }, a);
        default:
          return null
      }
    }
  }
}
eg.defaultProps = {
  analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ef.value
};
var eI = i.forwardRef(function(e, t) {
  var n, r, s, a;
  let {
    channel: u,
    guild: o,
    source: d,
    guildScheduledEvent: c,
    streamUserId: g,
    applicationId: I,
    transitionState: N,
    onClose: x,
    welcomeToServer: A,
    page: y,
    analyticsLocation: U
  } = e, [P, H] = i.useState(y === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: B,
    analyticsLocations: k
  } = (0, p.default)(m.default.INSTANT_INVITE_MODAL), W = (0, h.useStateFromStores)([O.default, j.default], () => {
    let e = j.default.getVoiceChannelId();
    if (null == e) return null;
    let t = O.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
  }), K = null != W && !(0, S.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), z = (0, M.default)(o.id), Y = (0, h.useStateFromStores)([j.default, O.default, V.default], () => {
    if (K && ((0, Z.hasFlag)(P, f.GuildInviteFlags.IS_GUEST_INVITE) || y === el.InstantInviteModalPages.GUEST)) return W;
    if (y === el.InstantInviteModalPages.GUEST) return 1 === z.length ? z[0] : void 0;
    if (null != u) return u;
    let e = j.default.getChannelId(),
      t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : O.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = O.default.getChannel(t.parent_id)), null != t ? t : V.default.getDefaultChannel(o.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
  }, [K, P, y, u, o.id, W, z]), [q, Q] = i.useState(null), $ = null != q ? q : Y, J = null;
  null != g ? J = el.InviteTargetTypes.STREAM : null != I && (J = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
    et = (0, h.useStateFromStores)([b.default], () => {
      let e = null != $ ? $.id : null;
      return null == e ? null : b.default.getInvite(e, {
        targetType: J,
        targetUserId: g,
        targetApplicationId: I
      })
    }, [$, J, g, I]),
    [en, es, ea, eu, eo] = (0, h.useStateFromStoresArray)([F.default, G.default, L.default], () => {
      let e = null != $ ? $.id : null;
      return [F.default.getInviteSuggestionRows(), F.default.getTotalSuggestionsCount() >= 1, F.default.getInitialCounts(), null != u && null != $ ? G.default.getVoiceStatesForChannel($) : null, null != ee ? L.default.getProps(ee, e) : null]
    }, [$, u, ee]),
    ed = (0, h.useStateFromStores)([D.default], () => null != $ && D.default.can(ei.Permissions.CREATE_INSTANT_INVITE, $), [$]),
    eI = null === et || !ed,
    [ev] = i.useState(() => {
      let e = new Set;
      return null != g && null != eu ? eu.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != ee && null != eo && J !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
        t.type === L.MemberListRowTypes.MEMBER && e.add(t.userId)
      }), e
    }),
    eE = null == u ? void 0 : u.id,
    e_ = (0, h.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(eE), [eE]);
  i.useEffect(() => {
    (0, E.loadInviteSuggestions)({
      omitUserIds: ev,
      guild: o,
      channel: u,
      applicationId: I,
      inviteTargetType: J
    }).catch(ei.NOOP_NULL)
  }, [ev, u, o, I, J]);
  let [em] = (0, T.default)(null != I ? [I] : []), ep = (0, C.default)({
    guildId: ee
  }), eT = null != et ? et.code : void 0, eS = null == et ? void 0 : et.maxAge, eN = null == et ? void 0 : et.maxUses, eC = null == et ? void 0 : et.temporary, ex = o.vanityURLCode, eA = null != ex && ex.length > 0, {
    enabled: ew
  } = X.default.useExperiment({
    guildId: null !== (s = null !== (r = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== s ? s : "",
    location: "acc417_2"
  }, {
    autoTrackExposure: eA
  }), eM = ew && !(null == $ ? void 0 : $.isGuildVocal()) && eA, eR = (null == $ ? void 0 : $.type) === ei.ChannelTypes.GUILD_VOICE, ey = (0, S.default)($);
  !ed && (null == e_ ? void 0 : e_.invite_code) != null && (eT = e_.invite_code);
  let [eL, eO] = i.useState({
    query: "",
    maxAge: null !== (a = null != eS ? eS : ep) && void 0 !== a ? a : ef.value,
    savedMaxAge: eS === ec.value ? null != ep ? ep : ef.value : ec.value,
    maxUses: null != eN && 0 !== eN ? eN : eh.value,
    temporary: null != eC && eC,
    networkError: void 0,
    showVanityURL: eM,
    currentPage: null != y ? y : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eV = i.useCallback(e => {
    eO(t => ({
      ...t,
      ...e
    }))
  }, []), eb = i.useCallback(e => {
    eV({
      currentPage: e,
      lastPage: eL.currentPage
    })
  }, [eL.currentPage, eV]), eF = (eR || K) && y !== el.InstantInviteModalPages.GUEST && !eM && !eI && !ey, {
    enabled: eD
  } = w.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == o ? void 0 : o.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eF
  }), {
    maxAge: eU,
    maxUses: ej,
    temporary: eP,
    savedMaxAge: eG
  } = eL, eH = i.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = eL;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eb(t) : x()
  }, [eb, eL, x]), eB = i.useCallback(() => {
    let e = null == $ ? void 0 : $.id;
    0 === ej && 0 === eU && !eP && eM ? eV({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eV({
      networkError: void 0,
      showVanityURL: !1
    }), v.default.createInvite(e, {
      max_age: eU,
      max_uses: ej,
      target_type: J,
      target_user_id: g,
      target_application_id: null == em ? void 0 : em.id,
      temporary: eP,
      flags: P
    }, d).catch(e => eV({
      networkError: e,
      showVanityURL: eM
    }))), eU !== ec.value && eG !== ec.value && eV({
      savedMaxAge: ec.value
    })
  }, [eM, $, d, null == em ? void 0 : em.id, J, g, eU, ej, eP, P, eV, eG]), ek = (0, _.default)($), eW = (0, _.default)(P), eK = ek !== $, ez = eW !== P;
  return i.useEffect(() => {
    (eK || ez) && eB()
  }, [eB, eK, ez]), (0, l.jsx)(B, {
    children: (0, l.jsx)(eg, {
      ref: t,
      canCreateInvites: ed,
      noInvitesAvailable: eI,
      inviteChannel: $,
      guild: o,
      guildScheduledEvent: c,
      streamUserId: g,
      vanityURLCode: ex,
      targetType: J,
      targetUserId: g,
      application: em,
      rows: en,
      showFriends: es,
      initialCounts: ea,
      code: eT,
      source: d,
      welcomeToServer: A,
      analyticsLocations: k,
      analyticsLocation: U,
      transitionState: N,
      onClose: x,
      canShowVanityURL: eM,
      isGuestInviteCreationToggleEnabled: eD && eF,
      shouldHideTemporaryInviteToggle: eD && eF || y === el.InstantInviteModalPages.GUEST,
      modalState: eL,
      setModalState: eV,
      changePage: eb,
      onGenerateNewLink: eB,
      inviteFlags: P,
      setInviteFlags: H,
      showGuestInviteToggleForCurrentVoiceChannel: K,
      setInviteChannel: Q,
      handleDone: eH
    })
  })
})