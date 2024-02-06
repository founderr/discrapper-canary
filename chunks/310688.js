"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eI
  }
}), n("222007");
var l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  u = n.n(r),
  o = n("917351"),
  d = n.n(o),
  c = n("759843"),
  f = n("498574"),
  h = n("446674"),
  g = n("669491"),
  I = n("77078"),
  E = n("970728"),
  v = n("685073"),
  m = n("84339"),
  p = n("812204"),
  _ = n("685665"),
  T = n("442939"),
  C = n("656038"),
  N = n("419830"),
  S = n("262362"),
  x = n("582415"),
  A = n("385042"),
  M = n("87241"),
  y = n("155996"),
  R = n("834052"),
  L = n("373469"),
  w = n("19766"),
  j = n("42203"),
  V = n("923959"),
  O = n("330154"),
  U = n("705955"),
  F = n("957255"),
  D = n("824563"),
  H = n("18494"),
  G = n("697218"),
  P = n("316133"),
  B = n("941886"),
  b = n("145131"),
  k = n("810567"),
  K = n("474571"),
  W = n("423487"),
  Z = n("599110"),
  Y = n("568734"),
  z = n("354023"),
  q = n("9294"),
  X = n("512027"),
  Q = n("234919"),
  J = n("52393"),
  $ = n("216463"),
  ee = n("474592"),
  et = n("652453"),
  en = n("470259"),
  el = n("91366"),
  es = n("49111"),
  ea = n("724210"),
  ei = n("782340"),
  er = n("435808"),
  eu = n("926622"),
  eo = n("486425"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: ef,
  INVITE_OPTIONS_UNLIMITED: eh
} = z.default;
class eg extends s.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: s,
      analyticsLocation: a,
      streamUserId: i,
      targetType: r,
      targetUserId: u,
      application: o,
      initialCounts: d,
      rows: c,
      showFriends: f,
      modalState: h,
      setModalState: g
    } = this.props, {
      maxAge: I,
      maxUses: v,
      temporary: m
    } = h;
    if (s) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      g({
        networkError: void 0
      }), E.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: I,
        max_uses: v,
        target_user_id: u,
        target_type: r,
        target_application_id: null == o ? void 0 : o.id,
        temporary: m
      }, l).catch(e => g({
        networkError: e
      }))
    }
    if (f && Z.default.track(es.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id
      }), Q.default.trackExposure({
        guildId: null == n ? void 0 : n.id,
        location: "acc417_1"
      }), null != i) {
      let e = L.default.getStreamForUser(i, n.id),
        t = (0, x.getStreamerApplication)(e, D.default);
      Z.default.track(es.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: a,
        other_user_id: i,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == o ? void 0 : o.id) != null || Z.default.track(es.AnalyticEvents.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: a
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
      showVanityURL: s
    } = l, a = s ? t : null != e ? e : t;
    return null == a ? a : (0, q.generateInviteKeyFromExtraData)({
      baseCode: a,
      guildScheduledEventId: null == n ? void 0 : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, C.default)(e) ? (0, l.jsxs)("div", {
      className: er.warningContainer,
      children: [(0, l.jsx)(W.default, {
        className: er.warningIcon,
        color: g.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(I.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: ei.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
      })]
    }) : null
  }
  renderHeader() {
    let e;
    let {
      guild: t,
      showFriends: n,
      guildScheduledEvent: s,
      streamUserId: a,
      application: r,
      welcomeToServer: u,
      inviteChannel: o,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: f
    } = d, h = null, g = null;
    if (e = u ? null : null != a ? ei.default.Messages.INVITE_STREAM_HEADER : null != r ? ei.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: r.name
      }) : null != s ? ei.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? ei.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : ei.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != o) {
      let e = (0, N.getChannelIconComponent)(o, t);
      null != e && (g = (0, l.jsxs)("div", {
        className: er.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: er.channelIcon
        }), (0, l.jsx)(I.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: o.name
        })]
      }))
    }
    return h = t.hasFeature(es.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: er.hubHeader,
      children: [(0, l.jsx)(I.Heading, {
        className: i(er.hubInviteTitle, er.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: ei.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(I.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: ei.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(k.default, {
        query: f,
        className: er.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: er.header,
      children: [(0, l.jsx)("div", {
        className: er.headerTopRow,
        children: (0, l.jsx)(I.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: i(eu.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
          children: e
        })
      }), g, (0, l.jsx)(k.default, {
        query: f,
        className: er.searchBar,
        onChange: this.handleQueryChange,
        placeholder: ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
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
        className: i(eu.marginReset, er.headerCloseButtonSpacing, er.headerText),
        children: e
      }), g, this.renderChannelWarning()]
    }), (0, l.jsxs)(I.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(I.ModalCloseButton, {
        className: er.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: er.headerContainer,
        children: [u && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: er.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(I.H, {
            className: er.welcomeHeading,
            children: ei.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: er.welcomeSubheading,
            children: ei.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != a ? (0, l.jsx)(A.default, {}) : null, h]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
      className: i(er.inviteRowEmptyState),
      children: (0, l.jsx)(B.EmptyStateText, {
        children: ei.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(I.ModalContent, {
      className: i(er.inviteRowEmptyState),
      children: (0, l.jsx)(B.EmptyStateText, {
        children: ei.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(I.ModalListContent, {
      className: er.scroller,
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
      streamUserId: s,
      application: a
    } = this.props;
    if (n) return this.renderFriendsBody();
    let i = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      r = G.default.getCurrentUser();
    u(null != r, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(r),
      d = o ? ei.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : ei.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != s ? d = ei.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != a && (d = ei.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
      className: er.noScroll,
      children: (0, l.jsxs)(b.default, {
        direction: b.default.Direction.VERTICAL,
        className: eu.marginBottom20,
        children: [(0, l.jsx)(I.Text, {
          className: er.subText,
          variant: "text-sm/normal",
          children: d
        }), (0, l.jsx)(et.InviteCopyInput, {
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
      guildScheduledEvent: s,
      streamUserId: a,
      application: r,
      inviteChannel: u,
      modalState: o
    } = this.props, {
      maxAge: d
    } = o, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = ei.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != a ? e = ei.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != r ? e = ei.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != s ? e = ei.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = ei.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(b.default, {
        direction: b.default.Direction.VERTICAL,
        className: er.content,
        children: [(0, l.jsx)(I.FormTitle, {
          tag: "h5",
          className: eu.marginBottom8,
          children: e
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: f
        })]
      })
    } else !t && (c = (0, l.jsxs)(b.default, {
      justify: b.default.Justify.BETWEEN,
      className: eu.marginTop20,
      children: [(0, l.jsx)(I.Checkbox, {
        size: 18,
        type: I.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, l.jsx)(I.Text, {
          className: er.checkBoxLabel,
          variant: "text-sm/normal",
          children: ei.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(I.Tooltip, {
        text: ei.default.Messages.LINK_SETTINGS,
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
            children: (0, l.jsx)(K.default, {
              width: 18,
              height: 18,
              color: g.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, l.jsx)(I.ModalFooter, {
      className: i({
        [er.noPadding]: !n,
        [er.footer]: n
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
        var s;
        let a = (0, J.default)(null !== (s = this.getInviteKey()) && void 0 !== s ? s : "");
        return (0, l.jsx)($.InstantInviteGuestPage, {
          ...this.props,
          headerId: this._headerId,
          handleDone: t,
          copyValue: a
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
      className: this.props.showFriends ? er.wrapper : void 0,
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
        className: er.modal,
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
      }), (0, v.searchInviteSuggestions)(e), n({
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
        case z.RowTypes.CHANNEL:
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
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
        analyticsLocation: s
      } = this.props, a = this.getInviteKey(), i = this.props.rows[n], r = "".concat(i.type, "-").concat(i.item.id);
      switch (i.type) {
        case z.RowTypes.GROUP_DM:
        case z.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: i,
            channel: i.item,
            inviteKey: a,
            location: s
          }, r);
        case z.RowTypes.DM:
        case z.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: i,
            user: i.item,
            inviteKey: a,
            location: s
          }, r);
        default:
          return null
      }
    }
  }
}
eg.defaultProps = {
  analyticsLocation: es.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ef.value
};
var eI = s.forwardRef(function(e, t) {
  var n, a, i, r;
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
    page: L,
    analyticsLocation: D
  } = e, [G, B] = s.useState(L === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: b,
    analyticsLocations: k
  } = (0, _.default)(p.default.INSTANT_INVITE_MODAL), K = (0, h.useStateFromStores)([j.default, H.default], () => {
    let e = H.default.getVoiceChannelId();
    if (null == e) return null;
    let t = j.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
  }), W = null != K && !(0, C.default)(K) && [es.InstantInviteSources.GUILD_CONTEXT_MENU, es.InstantInviteSources.GUILD_HEADER].includes(d), Z = (0, y.default)(o.id), z = (0, h.useStateFromStores)([H.default, j.default, V.default], () => {
    if (W && ((0, Y.hasFlag)(G, f.GuildInviteFlags.IS_GUEST_INVITE) || L === el.InstantInviteModalPages.GUEST)) return K;
    if (L === el.InstantInviteModalPages.GUEST) return 1 === Z.length ? Z[0] : void 0;
    if (null != u) return u;
    let e = H.default.getChannelId(),
      t = null == e || (0, ea.isStaticChannelRoute)(e) ? void 0 : j.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = j.default.getChannel(t.parent_id)), null != t ? t : V.default.getDefaultChannel(o.id, !0, es.Permissions.CREATE_INSTANT_INVITE)
  }, [W, G, L, u, o.id, K, Z]), [q, Q] = s.useState(null), J = null != q ? q : z, $ = null;
  null != g ? $ = el.InviteTargetTypes.STREAM : null != I && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
    et = (0, h.useStateFromStores)([O.default], () => {
      let e = null != J ? J.id : null;
      return null == e ? null : O.default.getInvite(e, {
        targetType: $,
        targetUserId: g,
        targetApplicationId: I
      })
    }, [J, $, g, I]),
    [en, ei, er, eu, eo] = (0, h.useStateFromStoresArray)([U.default, P.default, w.default], () => {
      let e = null != J ? J.id : null;
      return [U.default.getInviteSuggestionRows(), U.default.getTotalSuggestionsCount() >= 1, U.default.getInitialCounts(), null != u && null != J ? P.default.getVoiceStatesForChannel(J) : null, null != ee ? w.default.getProps(ee, e) : null]
    }, [J, u, ee]),
    ed = (0, h.useStateFromStores)([F.default], () => null != J && F.default.can(es.Permissions.CREATE_INSTANT_INVITE, J), [J]),
    eI = null === et || !ed,
    [eE] = s.useState(() => {
      let e = new Set;
      return null != g && null != eu ? eu.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != ee && null != eo && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
        t.type === w.MemberListRowTypes.MEMBER && e.add(t.userId)
      }), e
    }),
    ev = null == u ? void 0 : u.id,
    em = (0, h.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(ev), [ev]);
  s.useEffect(() => {
    (0, v.loadInviteSuggestions)({
      omitUserIds: eE,
      guild: o,
      channel: u,
      applicationId: I,
      inviteTargetType: $
    }).catch(es.NOOP_NULL)
  }, [eE, u, o, I, $]);
  let [ep] = (0, T.default)(null != I ? [I] : []), e_ = (0, S.default)({
    guildId: ee
  }), eT = null != et ? et.code : void 0, eC = null == et ? void 0 : et.maxAge, eN = null == et ? void 0 : et.maxUses, eS = null == et ? void 0 : et.temporary, ex = o.vanityURLCode, eA = null != ex && ex.length > 0, {
    enabled: eM
  } = X.default.useExperiment({
    guildId: null !== (i = null !== (a = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== a ? a : ee) && void 0 !== i ? i : "",
    location: "acc417_2"
  }, {
    autoTrackExposure: eA
  }), ey = eM && !(null == J ? void 0 : J.isGuildVocal()) && eA, eR = (null == J ? void 0 : J.type) === es.ChannelTypes.GUILD_VOICE, eL = (0, C.default)(J);
  !ed && (null == em ? void 0 : em.invite_code) != null && (eT = em.invite_code);
  let [ew, ej] = s.useState({
    query: "",
    maxAge: null !== (r = null != eC ? eC : e_) && void 0 !== r ? r : ef.value,
    savedMaxAge: eC === ec.value ? null != e_ ? e_ : ef.value : ec.value,
    maxUses: null != eN && 0 !== eN ? eN : eh.value,
    temporary: null != eS && eS,
    networkError: void 0,
    showVanityURL: ey,
    currentPage: null != L ? L : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eV = s.useCallback(e => {
    ej(t => ({
      ...t,
      ...e
    }))
  }, []), eO = s.useCallback(e => {
    eV({
      currentPage: e,
      lastPage: ew.currentPage
    })
  }, [ew.currentPage, eV]), eU = (eR || W) && L !== el.InstantInviteModalPages.GUEST && !ey && !eI && !eL, {
    enabled: eF
  } = M.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == o ? void 0 : o.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eU
  }), {
    maxAge: eD,
    maxUses: eH,
    temporary: eG,
    savedMaxAge: eP
  } = ew, eB = s.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = ew;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eO(t) : x()
  }, [eO, ew, x]), eb = s.useCallback(() => {
    let e = null == J ? void 0 : J.id;
    0 === eH && 0 === eD && !eG && ey ? eV({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eV({
      networkError: void 0,
      showVanityURL: !1
    }), E.default.createInvite(e, {
      max_age: eD,
      max_uses: eH,
      target_type: $,
      target_user_id: g,
      target_application_id: null == ep ? void 0 : ep.id,
      temporary: eG,
      flags: G
    }, d).catch(e => eV({
      networkError: e,
      showVanityURL: ey
    }))), eD !== ec.value && eP !== ec.value && eV({
      savedMaxAge: ec.value
    })
  }, [ey, J, d, null == ep ? void 0 : ep.id, $, g, eD, eH, eG, G, eV, eP]), ek = (0, m.default)(J), eK = (0, m.default)(G), eW = ek !== J, eZ = eK !== G;
  return s.useEffect(() => {
    (eW || eZ) && eb()
  }, [eb, eW, eZ]), (0, l.jsx)(b, {
    children: (0, l.jsx)(eg, {
      ref: t,
      canCreateInvites: ed,
      noInvitesAvailable: eI,
      inviteChannel: J,
      guild: o,
      guildScheduledEvent: c,
      streamUserId: g,
      vanityURLCode: ex,
      targetType: $,
      targetUserId: g,
      application: ep,
      rows: en,
      showFriends: ei,
      initialCounts: er,
      code: eT,
      source: d,
      welcomeToServer: A,
      analyticsLocations: k,
      analyticsLocation: D,
      transitionState: N,
      onClose: x,
      canShowVanityURL: ey,
      isGuestInviteCreationToggleEnabled: eF && eU,
      shouldHideTemporaryInviteToggle: eF && eU || L === el.InstantInviteModalPages.GUEST,
      modalState: ew,
      setModalState: eV,
      changePage: eO,
      onGenerateNewLink: eb,
      inviteFlags: G,
      setInviteFlags: B,
      showGuestInviteToggleForCurrentVoiceChannel: W,
      setInviteChannel: Q,
      handleDone: eB
    })
  })
})