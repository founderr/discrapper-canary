"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  a = n.n(r),
  s = n("627445"),
  u = n.n(s),
  o = n("917351"),
  d = n.n(o),
  c = n("759843"),
  f = n("498574"),
  h = n("446674"),
  g = n("669491"),
  I = n("77078"),
  E = n("970728"),
  _ = n("685073"),
  p = n("84339"),
  v = n("812204"),
  m = n("685665"),
  T = n("442939"),
  S = n("656038"),
  N = n("419830"),
  C = n("262362"),
  A = n("582415"),
  x = n("385042"),
  M = n("87241"),
  y = n("155996"),
  w = n("834052"),
  R = n("373469"),
  L = n("19766"),
  O = n("42203"),
  b = n("923959"),
  F = n("330154"),
  V = n("705955"),
  P = n("957255"),
  U = n("824563"),
  D = n("18494"),
  j = n("697218"),
  G = n("316133"),
  H = n("941886"),
  B = n("145131"),
  k = n("810567"),
  W = n("474571"),
  K = n("423487"),
  z = n("599110"),
  Y = n("568734"),
  Z = n("354023"),
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
  ea = n("782340"),
  es = n("435808"),
  eu = n("926622"),
  eo = n("486425"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: ef,
  INVITE_OPTIONS_UNLIMITED: eh
} = Z.default;
class eg extends i.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: r,
      streamUserId: a,
      targetType: s,
      targetUserId: u,
      application: o,
      initialCounts: d,
      rows: c,
      showFriends: f,
      modalState: h,
      setModalState: g
    } = this.props, {
      maxAge: I,
      maxUses: _,
      temporary: p
    } = h;
    if (i) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      g({
        networkError: void 0
      }), E.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: I,
        max_uses: _,
        target_user_id: u,
        target_type: s,
        target_application_id: null == o ? void 0 : o.id,
        temporary: p
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
      }), null != a) {
      let e = R.default.getStreamForUser(a, n.id),
        t = (0, A.getStreamerApplication)(e, U.default);
      z.default.track(ei.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: r,
        other_user_id: a,
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
    (0, Y.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, Y.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), E.default.clearInviteFromStore(e.id))
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
      className: es.warningContainer,
      children: [(0, l.jsx)(K.default, {
        className: es.warningIcon,
        color: g.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(I.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: ea.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
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
      application: s,
      welcomeToServer: u,
      inviteChannel: o,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: f
    } = d, h = null, g = null;
    if (e = u ? null : null != r ? ea.default.Messages.INVITE_STREAM_HEADER : null != s ? ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: s.name
      }) : null != i ? ea.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ea.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != o) {
      let e = (0, N.getChannelIconComponent)(o, t);
      null != e && (g = (0, l.jsxs)("div", {
        className: es.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: es.channelIcon
        }), (0, l.jsx)(I.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: o.name
        })]
      }))
    }
    return h = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: es.hubHeader,
      children: [(0, l.jsx)(I.Heading, {
        className: a(es.hubInviteTitle, es.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: ea.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(I.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: ea.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(k.default, {
        query: f,
        className: es.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: es.header,
      children: [(0, l.jsx)("div", {
        className: es.headerTopRow,
        children: (0, l.jsx)(I.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: a(eu.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
          children: e
        })
      }), g, (0, l.jsx)(k.default, {
        query: f,
        className: es.searchBar,
        onChange: this.handleQueryChange,
        placeholder: ea.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
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
        className: a(eu.marginReset, es.headerCloseButtonSpacing, es.headerText),
        children: e
      }), g, this.renderChannelWarning()]
    }), (0, l.jsxs)(I.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(I.ModalCloseButton, {
        className: es.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: es.headerContainer,
        children: [u && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: es.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(I.H, {
            className: es.welcomeHeading,
            children: ea.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: es.welcomeSubheading,
            children: ea.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != r ? (0, l.jsx)(x.default, {}) : null, h]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
      className: a(es.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: ea.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(I.ModalContent, {
      className: a(es.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: ea.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(I.ModalListContent, {
      className: es.scroller,
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
    let a = (0, $.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      s = j.default.getCurrentUser();
    u(null != s, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(s),
      d = o ? ea.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ea.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != i ? d = ea.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = ea.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
      className: es.noScroll,
      children: (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: eu.marginBottom20,
        children: [(0, l.jsx)(I.Text, {
          className: es.subText,
          variant: "text-sm/normal",
          children: d
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: a
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
      application: s,
      inviteChannel: u,
      modalState: o
    } = this.props, {
      maxAge: d
    } = o, c = null, f = (0, $.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = ea.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != r ? e = ea.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != s ? e = ea.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = ea.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = ea.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(B.default, {
        direction: B.default.Direction.VERTICAL,
        className: es.content,
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
          className: es.checkBoxLabel,
          variant: "text-sm/normal",
          children: ea.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(I.Tooltip, {
        text: ea.default.Messages.LINK_SETTINGS,
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
      className: a({
        [es.noPadding]: !n,
        [es.footer]: n
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
      className: this.props.showFriends ? es.wrapper : void 0,
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
        className: es.modal,
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
      n((0, Y.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
    }, this.handleQueryChange = e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null === (t = this._scroller) || void 0 === t || t.scrollTo({
        to: 0
      }), (0, _.searchInviteSuggestions)(e), n({
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
        case Z.RowTypes.CHANNEL:
        case Z.RowTypes.GROUP_DM:
        case Z.RowTypes.DM:
        case Z.RowTypes.FRIEND:
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
      } = this.props, r = this.getInviteKey(), a = this.props.rows[n], s = "".concat(a.type, "-").concat(a.item.id);
      switch (a.type) {
        case Z.RowTypes.GROUP_DM:
        case Z.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: a,
            channel: a.item,
            inviteKey: r,
            location: i
          }, s);
        case Z.RowTypes.DM:
        case Z.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: a,
            user: a.item,
            inviteKey: r,
            location: i
          }, s);
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
  var n, r, a, s;
  let {
    channel: u,
    guild: o,
    source: d,
    guildScheduledEvent: c,
    streamUserId: g,
    applicationId: I,
    transitionState: N,
    onClose: A,
    welcomeToServer: x,
    page: R,
    analyticsLocation: U
  } = e, [j, H] = i.useState(R === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: B,
    analyticsLocations: k
  } = (0, m.default)(v.default.INSTANT_INVITE_MODAL), W = (0, h.useStateFromStores)([O.default, D.default], () => {
    let e = D.default.getVoiceChannelId();
    if (null == e) return null;
    let t = O.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
  }), K = null != W && !(0, S.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), z = (0, y.default)(o.id), Z = (0, h.useStateFromStores)([D.default, O.default, b.default], () => {
    if (K && ((0, Y.hasFlag)(j, f.GuildInviteFlags.IS_GUEST_INVITE) || R === el.InstantInviteModalPages.GUEST)) return W;
    if (R === el.InstantInviteModalPages.GUEST) return 1 === z.length ? z[0] : void 0;
    if (null != u) return u;
    let e = D.default.getChannelId(),
      t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : O.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = O.default.getChannel(t.parent_id)), null != t ? t : b.default.getDefaultChannel(o.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
  }, [K, j, R, u, o.id, W, z]), [q, Q] = i.useState(null), $ = null != q ? q : Z, J = null;
  null != g ? J = el.InviteTargetTypes.STREAM : null != I && (J = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
    et = (0, h.useStateFromStores)([F.default], () => {
      let e = null != $ ? $.id : null;
      return null == e ? null : F.default.getInvite(e, {
        targetType: J,
        targetUserId: g,
        targetApplicationId: I
      })
    }, [$, J, g, I]),
    [en, ea, es, eu, eo] = (0, h.useStateFromStoresArray)([V.default, G.default, L.default], () => {
      let e = null != $ ? $.id : null;
      return [V.default.getInviteSuggestionRows(), V.default.getTotalSuggestionsCount() >= 1, V.default.getInitialCounts(), null != u && null != $ ? G.default.getVoiceStatesForChannel($) : null, null != ee ? L.default.getProps(ee, e) : null]
    }, [$, u, ee]),
    ed = (0, h.useStateFromStores)([P.default], () => null != $ && P.default.can(ei.Permissions.CREATE_INSTANT_INVITE, $), [$]),
    eI = null === et || !ed,
    [eE] = i.useState(() => {
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
    e_ = null == u ? void 0 : u.id,
    ep = (0, h.useStateFromStores)([w.default], () => w.default.getStageInstanceByChannel(e_), [e_]);
  i.useEffect(() => {
    (0, _.loadInviteSuggestions)({
      omitUserIds: eE,
      guild: o,
      channel: u,
      applicationId: I,
      inviteTargetType: J
    }).catch(ei.NOOP_NULL)
  }, [eE, u, o, I, J]);
  let [ev] = (0, T.default)(null != I ? [I] : []), em = (0, C.default)({
    guildId: ee
  }), eT = null != et ? et.code : void 0, eS = null == et ? void 0 : et.maxAge, eN = null == et ? void 0 : et.maxUses, eC = null == et ? void 0 : et.temporary, eA = o.vanityURLCode, ex = null != eA && eA.length > 0, {
    enabled: eM
  } = X.default.useExperiment({
    guildId: null !== (a = null !== (r = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== a ? a : "",
    location: "acc417_2"
  }, {
    autoTrackExposure: ex
  }), ey = eM && !(null == $ ? void 0 : $.isGuildVocal()) && ex, ew = (null == $ ? void 0 : $.type) === ei.ChannelTypes.GUILD_VOICE, eR = (0, S.default)($);
  !ed && (null == ep ? void 0 : ep.invite_code) != null && (eT = ep.invite_code);
  let [eL, eO] = i.useState({
    query: "",
    maxAge: null !== (s = null != eS ? eS : em) && void 0 !== s ? s : ef.value,
    savedMaxAge: eS === ec.value ? null != em ? em : ef.value : ec.value,
    maxUses: null != eN && 0 !== eN ? eN : eh.value,
    temporary: null != eC && eC,
    networkError: void 0,
    showVanityURL: ey,
    currentPage: null != R ? R : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eb = i.useCallback(e => {
    eO(t => ({
      ...t,
      ...e
    }))
  }, []), eF = i.useCallback(e => {
    eb({
      currentPage: e,
      lastPage: eL.currentPage
    })
  }, [eL.currentPage, eb]), eV = (ew || K) && R !== el.InstantInviteModalPages.GUEST && !ey && !eI && !eR, {
    enabled: eP
  } = M.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == o ? void 0 : o.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eV
  }), {
    maxAge: eU,
    maxUses: eD,
    temporary: ej,
    savedMaxAge: eG
  } = eL, eH = i.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = eL;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eF(t) : A()
  }, [eF, eL, A]), eB = i.useCallback(() => {
    let e = null == $ ? void 0 : $.id;
    0 === eD && 0 === eU && !ej && ey ? eb({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eb({
      networkError: void 0,
      showVanityURL: !1
    }), E.default.createInvite(e, {
      max_age: eU,
      max_uses: eD,
      target_type: J,
      target_user_id: g,
      target_application_id: null == ev ? void 0 : ev.id,
      temporary: ej,
      flags: j
    }, d).catch(e => eb({
      networkError: e,
      showVanityURL: ey
    }))), eU !== ec.value && eG !== ec.value && eb({
      savedMaxAge: ec.value
    })
  }, [ey, $, d, null == ev ? void 0 : ev.id, J, g, eU, eD, ej, j, eb, eG]), ek = (0, p.default)($), eW = (0, p.default)(j), eK = ek !== $, ez = eW !== j;
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
      vanityURLCode: eA,
      targetType: J,
      targetUserId: g,
      application: ev,
      rows: en,
      showFriends: ea,
      initialCounts: es,
      code: eT,
      source: d,
      welcomeToServer: x,
      analyticsLocations: k,
      analyticsLocation: U,
      transitionState: N,
      onClose: A,
      canShowVanityURL: ey,
      isGuestInviteCreationToggleEnabled: eP && eV,
      shouldHideTemporaryInviteToggle: eP && eV || R === el.InstantInviteModalPages.GUEST,
      modalState: eL,
      setModalState: eb,
      changePage: eF,
      onGenerateNewLink: eB,
      inviteFlags: j,
      setInviteFlags: H,
      showGuestInviteToggleForCurrentVoiceChannel: K,
      setInviteChannel: Q,
      handleDone: eH
    })
  })
})