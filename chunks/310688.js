"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("627445"),
  u = n.n(r),
  o = n("917351"),
  d = n.n(o),
  c = n("759843"),
  f = n("498574"),
  h = n("446674"),
  I = n("669491"),
  g = n("77078"),
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
  D = n("923959"),
  U = n("330154"),
  b = n("705955"),
  P = n("957255"),
  F = n("824563"),
  V = n("18494"),
  j = n("697218"),
  G = n("316133"),
  H = n("941886"),
  k = n("145131"),
  B = n("810567"),
  W = n("474571"),
  z = n("423487"),
  K = n("599110"),
  Y = n("568734"),
  Z = n("354023"),
  q = n("9294"),
  X = n("512027"),
  Q = n("234919"),
  J = n("52393"),
  $ = n("216463"),
  ee = n("474592"),
  et = n("652453"),
  en = n("470259"),
  el = n("91366"),
  ei = n("49111"),
  ea = n("724210"),
  es = n("782340"),
  er = n("696862"),
  eu = n("890957"),
  eo = n("633827"),
  ed = n("56585");
let {
  INVITE_OPTIONS_FOREVER: ec,
  INVITE_OPTIONS_7_DAYS: ef,
  INVITE_OPTIONS_UNLIMITED: eh
} = Z.default;
class eI extends i.PureComponent {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: a,
      streamUserId: s,
      targetType: r,
      targetUserId: u,
      application: o,
      initialCounts: d,
      rows: c,
      showFriends: f,
      modalState: h,
      setModalState: I
    } = this.props, {
      maxAge: g,
      maxUses: _,
      temporary: p
    } = h;
    if (i) {
      let n = null == e ? void 0 : e.id;
      if (null == n) return;
      I({
        networkError: void 0
      }), E.default.createInvite(n, {
        validate: null != t ? t : null,
        max_age: g,
        max_uses: _,
        target_user_id: u,
        target_type: r,
        target_application_id: null == o ? void 0 : o.id,
        temporary: p
      }, l).catch(e => I({
        networkError: e
      }))
    }
    if (f && K.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
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
      let e = R.default.getStreamForUser(s, n.id),
        t = (0, A.getStreamerApplication)(e, F.default);
      K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: a,
        other_user_id: s,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == o ? void 0 : o.id) != null || K.default.track(ei.AnalyticEvents.OPEN_MODAL, {
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
      showVanityURL: i
    } = l, a = i ? t : null != e ? e : t;
    return null == a ? a : (0, q.generateInviteKeyFromExtraData)({
      baseCode: a,
      guildScheduledEventId: null == n ? void 0 : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, S.default)(e) ? (0, l.jsxs)("div", {
      className: er.warningContainer,
      children: [(0, l.jsx)(z.default, {
        className: er.warningIcon,
        color: I.default.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, l.jsx)(g.Text, {
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
      streamUserId: a,
      application: r,
      welcomeToServer: u,
      inviteChannel: o,
      modalState: d,
      handleDone: c
    } = this.props, {
      query: f
    } = d, h = null, I = null;
    if (e = u ? null : null != a ? es.default.Messages.INVITE_STREAM_HEADER : null != r ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
        applicationName: r.name
      }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
        name: t.toString()
      }), null != o) {
      let e = (0, N.getChannelIconComponent)(o, t);
      null != e && (I = (0, l.jsxs)("div", {
        className: er.headerChannelContainer,
        children: [(0, l.jsx)(e, {
          className: er.channelIcon
        }), (0, l.jsx)(g.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: o.name
        })]
      }))
    }
    return h = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
      className: er.hubHeader,
      children: [(0, l.jsx)(g.Heading, {
        className: s(er.hubInviteTitle, er.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: es.default.Messages.HUB_INVITE_HEADER
      }), (0, l.jsx)(g.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: es.default.Messages.HUB_INVITE_SUBHEADER
      }), n && (0, l.jsx)(B.default, {
        query: f,
        className: er.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      })]
    }) : n ? (0, l.jsxs)("div", {
      className: er.header,
      children: [(0, l.jsx)("div", {
        className: er.headerTopRow,
        children: (0, l.jsx)(g.FormTitle, {
          id: this._headerId,
          tag: "h2",
          className: s(eu.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
          children: e
        })
      }), I, (0, l.jsx)(B.default, {
        query: f,
        className: er.searchBar,
        onChange: this.handleQueryChange,
        placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
        autoFocus: !0,
        onClear: this.handleClearSearch
      }), (0, l.jsx)("div", {
        className: eu.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(g.FormTitle, {
        id: this._headerId,
        tag: "h2",
        className: s(eu.marginReset, er.headerCloseButtonSpacing, er.headerText),
        children: e
      }), I, this.renderChannelWarning()]
    }), (0, l.jsxs)(g.ModalHeader, {
      separator: n,
      children: [(0, l.jsx)(g.ModalCloseButton, {
        className: er.closeButton,
        onClick: c
      }), (0, l.jsxs)("div", {
        className: er.headerContainer,
        children: [u && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("img", {
            className: er.welcomeImage,
            src: ed,
            alt: ""
          }), (0, l.jsx)(g.H, {
            className: er.welcomeHeading,
            children: es.default.Messages.INVITE_WELCOME_HEADING
          }), (0, l.jsx)("p", {
            className: er.welcomeSubheading,
            children: es.default.Messages.INVITE_WELCOME_SUBHEADING
          })]
        }), null != a ? (0, l.jsx)(x.default, {}) : null, h]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === e.length ? (0, l.jsx)(g.ModalContent, {
      className: s(er.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
      })
    }) : null == t ? (0, l.jsx)(g.ModalContent, {
      className: s(er.inviteRowEmptyState),
      children: (0, l.jsx)(H.EmptyStateText, {
        children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
      })
    }) : (0, l.jsx)(g.ModalListContent, {
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
      streamUserId: i,
      application: a
    } = this.props;
    if (n) return this.renderFriendsBody();
    let s = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
      r = j.default.getCurrentUser();
    u(null != r, "InstantInviteModal: user cannot be undefined");
    let o = t.isOwner(r),
      d = o ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != a && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(g.ModalContent, {
      className: er.noScroll,
      children: (0, l.jsxs)(k.default, {
        direction: k.default.Direction.VERTICAL,
        className: eu.marginBottom20,
        children: [(0, l.jsx)(g.Text, {
          className: er.subText,
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
      streamUserId: a,
      application: r,
      inviteChannel: u,
      modalState: o
    } = this.props, {
      maxAge: d
    } = o, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
    if (n) {
      let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
      null != a ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != r ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(k.default, {
        direction: k.default.Direction.VERTICAL,
        className: er.content,
        children: [(0, l.jsx)(g.FormTitle, {
          tag: "h5",
          className: eu.marginBottom8,
          children: e
        }), (0, l.jsx)(et.InviteCopyInput, {
          ...this.props,
          copyValue: f
        })]
      })
    } else !t && (c = (0, l.jsxs)(k.default, {
      justify: k.default.Justify.BETWEEN,
      className: eu.marginTop20,
      children: [(0, l.jsx)(g.Checkbox, {
        size: 18,
        type: g.Checkbox.Types.INVERTED,
        value: d === ec.value,
        onChange: this.handleToggleMaxAge,
        children: (0, l.jsx)(g.Text, {
          className: er.checkBoxLabel,
          variant: "text-sm/normal",
          children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
        })
      }), (0, l.jsx)(g.Tooltip, {
        text: es.default.Messages.LINK_SETTINGS,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, l.jsx)(g.Clickable, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eo.cursorPointer,
            children: (0, l.jsx)(W.default, {
              width: 18,
              height: 18,
              color: I.default.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, l.jsx)(g.ModalFooter, {
      className: s({
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
        var i;
        let a = (0, J.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
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
      children: (0, l.jsx)(g.ModalRoot, {
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
      } = this.props, a = this.getInviteKey(), s = this.props.rows[n], r = "".concat(s.type, "-").concat(s.item.id);
      switch (s.type) {
        case Z.RowTypes.GROUP_DM:
        case Z.RowTypes.CHANNEL:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            channel: s.item,
            inviteKey: a,
            location: i
          }, r);
        case Z.RowTypes.DM:
        case Z.RowTypes.FRIEND:
          return (0, l.jsx)(en.InviteRow, {
            row: s,
            user: s.item,
            inviteKey: a,
            location: i
          }, r);
        default:
          return null
      }
    }
  }
}
eI.defaultProps = {
  analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ef.value
};
var eg = i.forwardRef(function(e, t) {
  var n, a, s, r;
  let {
    channel: u,
    guild: o,
    source: d,
    guildScheduledEvent: c,
    streamUserId: I,
    applicationId: g,
    transitionState: N,
    onClose: A,
    welcomeToServer: x,
    page: R,
    analyticsLocation: F
  } = e, [j, H] = i.useState(R === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
    AnalyticsLocationProvider: k,
    analyticsLocations: B
  } = (0, m.default)(v.default.INSTANT_INVITE_MODAL), W = (0, h.useStateFromStores)([O.default, V.default], () => {
    let e = V.default.getVoiceChannelId();
    if (null == e) return null;
    let t = O.default.getChannel(e);
    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
  }), z = null != W && !(0, S.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), K = (0, y.default)(o.id), Z = (0, h.useStateFromStores)([V.default, O.default, D.default], () => {
    if (z && ((0, Y.hasFlag)(j, f.GuildInviteFlags.IS_GUEST_INVITE) || R === el.InstantInviteModalPages.GUEST)) return W;
    if (R === el.InstantInviteModalPages.GUEST) return 1 === K.length ? K[0] : void 0;
    if (null != u) return u;
    let e = V.default.getChannelId(),
      t = null == e || (0, ea.isStaticChannelRoute)(e) ? void 0 : O.default.getChannel(e);
    return (null == t ? void 0 : t.isThread()) && (t = O.default.getChannel(t.parent_id)), null != t ? t : D.default.getDefaultChannel(o.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
  }, [z, j, R, u, o.id, W, K]), [q, Q] = i.useState(null), J = null != q ? q : Z, $ = null;
  null != I ? $ = el.InviteTargetTypes.STREAM : null != g && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
  let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
    et = (0, h.useStateFromStores)([U.default], () => {
      let e = null != J ? J.id : null;
      return null == e ? null : U.default.getInvite(e, {
        targetType: $,
        targetUserId: I,
        targetApplicationId: g
      })
    }, [J, $, I, g]),
    [en, es, er, eu, eo] = (0, h.useStateFromStoresArray)([b.default, G.default, L.default], () => {
      let e = null != J ? J.id : null;
      return [b.default.getInviteSuggestionRows(), b.default.getTotalSuggestionsCount() >= 1, b.default.getInitialCounts(), null != u && null != J ? G.default.getVoiceStatesForChannel(J) : null, null != ee ? L.default.getProps(ee, e) : null]
    }, [J, u, ee]),
    ed = (0, h.useStateFromStores)([P.default], () => null != J && P.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
    eg = null === et || !ed,
    [eE] = i.useState(() => {
      let e = new Set;
      return null != I && null != eu ? eu.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != ee && null != eo && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
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
      applicationId: g,
      inviteTargetType: $
    }).catch(ei.NOOP_NULL)
  }, [eE, u, o, g, $]);
  let [ev] = (0, T.default)(null != g ? [g] : []), em = (0, C.default)({
    guildId: ee
  }), eT = null != et ? et.code : void 0, eS = null == et ? void 0 : et.maxAge, eN = null == et ? void 0 : et.maxUses, eC = null == et ? void 0 : et.temporary, eA = o.vanityURLCode, ex = null != eA && eA.length > 0, {
    enabled: eM
  } = X.default.useExperiment({
    guildId: null !== (s = null !== (a = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== a ? a : ee) && void 0 !== s ? s : ei.EMPTY_STRING_GUILD_ID,
    location: "acc417_2"
  }, {
    autoTrackExposure: ex
  }), ey = eM && !(null == J ? void 0 : J.isGuildVocal()) && ex, ew = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, eR = (0, S.default)(J);
  !ed && (null == ep ? void 0 : ep.invite_code) != null && (eT = ep.invite_code);
  let [eL, eO] = i.useState({
    query: "",
    maxAge: null !== (r = null != eS ? eS : em) && void 0 !== r ? r : ef.value,
    savedMaxAge: eS === ec.value ? null != em ? em : ef.value : ec.value,
    maxUses: null != eN && 0 !== eN ? eN : eh.value,
    temporary: null != eC && eC,
    networkError: void 0,
    showVanityURL: ey,
    currentPage: null != R ? R : el.InstantInviteModalPages.MAIN,
    lastPage: void 0
  }), eD = i.useCallback(e => {
    eO(t => ({
      ...t,
      ...e
    }))
  }, []), eU = i.useCallback(e => {
    eD({
      currentPage: e,
      lastPage: eL.currentPage
    })
  }, [eL.currentPage, eD]), eb = (ew || z) && R !== el.InstantInviteModalPages.GUEST && !ey && !eg && !eR, {
    enabled: eP
  } = M.GuestVoiceInvitesExperiment.useExperiment({
    guildId: null == o ? void 0 : o.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eb
  }), {
    maxAge: eF,
    maxUses: eV,
    temporary: ej,
    savedMaxAge: eG
  } = eL, eH = i.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = eL;
    e === el.InstantInviteModalPages.SETTINGS && null != t ? eU(t) : A()
  }, [eU, eL, A]), ek = i.useCallback(() => {
    let e = null == J ? void 0 : J.id;
    0 === eV && 0 === eF && !ej && ey ? eD({
      networkError: void 0,
      showVanityURL: !0
    }) : null != e && (eD({
      networkError: void 0,
      showVanityURL: !1
    }), E.default.createInvite(e, {
      max_age: eF,
      max_uses: eV,
      target_type: $,
      target_user_id: I,
      target_application_id: null == ev ? void 0 : ev.id,
      temporary: ej,
      flags: j
    }, d).catch(e => eD({
      networkError: e,
      showVanityURL: ey
    }))), eF !== ec.value && eG !== ec.value && eD({
      savedMaxAge: ec.value
    })
  }, [ey, J, d, null == ev ? void 0 : ev.id, $, I, eF, eV, ej, j, eD, eG]), eB = (0, p.default)(J), eW = (0, p.default)(j), ez = eB !== J, eK = eW !== j;
  return i.useEffect(() => {
    (ez || eK) && ek()
  }, [ek, ez, eK]), (0, l.jsx)(k, {
    children: (0, l.jsx)(eI, {
      ref: t,
      canCreateInvites: ed,
      noInvitesAvailable: eg,
      inviteChannel: J,
      guild: o,
      guildScheduledEvent: c,
      streamUserId: I,
      vanityURLCode: eA,
      targetType: $,
      targetUserId: I,
      application: ev,
      rows: en,
      showFriends: es,
      initialCounts: er,
      code: eT,
      source: d,
      welcomeToServer: x,
      analyticsLocations: B,
      analyticsLocation: F,
      transitionState: N,
      onClose: A,
      canShowVanityURL: ey,
      isGuestInviteCreationToggleEnabled: eP && eb,
      shouldHideTemporaryInviteToggle: eP && eb || R === el.InstantInviteModalPages.GUEST,
      modalState: eL,
      setModalState: eD,
      changePage: eU,
      onGenerateNewLink: ek,
      inviteFlags: j,
      setInviteFlags: H,
      showGuestInviteToggleForCurrentVoiceChannel: z,
      setInviteChannel: Q,
      handleDone: eH
    })
  })
})