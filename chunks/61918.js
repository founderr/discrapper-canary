"use strict";
n.r(t), n.d(t, {
  default: function() {
    return J
  }
}), n("222007"), n("808653");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("974667"),
  d = n("394846"),
  c = n("446674"),
  f = n("233736"),
  h = n("77078"),
  m = n("272030"),
  p = n("666020"),
  E = n("352674"),
  g = n("888503"),
  S = n("206230"),
  C = n("716241"),
  _ = n("86097"),
  I = n("29319"),
  T = n("346967"),
  v = n("653319"),
  x = n("95039"),
  N = n("405645"),
  A = n("12896"),
  M = n("506885"),
  R = n("981601"),
  j = n("19766"),
  L = n("305961"),
  y = n("191542"),
  O = n("697218"),
  P = n("476765"),
  b = n("826684"),
  D = n("483093"),
  U = n("659500"),
  w = n("449008"),
  F = n("158998"),
  k = n("50885"),
  B = n("49111"),
  V = n("782340"),
  G = n("559571");
let H = k.default.getEnableHardwareAcceleration(),
  W = 44 + g.AVATAR_DECORATION_PADDING,
  Y = {
    origin: {
      x: 38,
      y: 11
    },
    targetWidth: 232,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class z extends a.Component {
  shouldComponentUpdate(e) {
    return !(0, f.default)(this.props, e, ["channelId"])
  }
  render() {
    let {
      colorString: e,
      colorRoleName: t,
      isOwner: n,
      nick: a,
      user: s,
      currentUser: i,
      activities: r,
      applicationStream: u,
      status: o,
      channel: c,
      guildId: f,
      isTyping: m,
      isMobileOnline: p,
      premiumSince: E,
      ...S
    } = this.props, C = null != E ? new Date(E) : null;
    return (0, l.jsx)(h.Popout, {
      preload: () => (0, M.default)(s.id, s.getAvatarURL(f, 80), {
        guildId: f,
        channelId: c.id
      }),
      renderPopout: this.renderUserPopout,
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (d, h) => {
        let {
          isShown: E
        } = h;
        return (0, l.jsx)(g.default, {
          className: G.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: H,
          user: s,
          currentUser: i,
          nick: a,
          status: o,
          activities: r,
          applicationStream: u,
          isOwner: n,
          premiumSince: C,
          colorString: e,
          colorRoleName: t,
          isTyping: m,
          channel: c,
          guildId: f,
          isMobile: p,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: E,
          itemProps: S,
          ...d
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderUserContextMenu = e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return t => (0, l.jsx)(e, {
          ...t,
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        })
      })
    }, this.handleShiftClick = () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(F.default.getUserTag(e, {
        decoration: "never"
      })), l = "<@".concat(e.id, ">");
      U.ComponentDispatch.dispatchToLastSubscribed(B.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: l
      }), E.default.startTyping(t.id)
    }, this.openGuildSubscriptionModal = e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, x.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: B.AnalyticsSections.MEMBER_LIST,
          object: B.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }, this.renderUserPopout = e => (0, l.jsx)(R.default, {
      ...e,
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      analyticsParams: {
        location: {
          page: B.AnalyticsPages.GUILD_CHANNEL,
          section: B.AnalyticsSections.MEMBER_LIST
        }
      }
    })
  }
}
let K = a.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: a,
      user: s,
      index: i
    } = e, r = (0, o.useListItem)("".concat(i)), u = (0, c.useStateFromStores)([y.default], () => y.default.isTyping(a.id, s.id)), d = (0, c.useStateFromStores)([O.default], () => O.default.getCurrentUser()), f = (0, c.useStateFromStores)([L.default], () => {
      var e, n;
      return null != t ? null === (n = L.default.getGuild(a.guild_id)) || void 0 === n ? void 0 : null === (e = n.getRole(t)) || void 0 === e ? void 0 : e.name : void 0
    }, [a, t]);
    return (0, l.jsx)(z, {
      ...n,
      ...r,
      isTyping: u,
      currentUser: d,
      colorRoleName: f
    })
  }),
  Z = a.memo(function(e) {
    let {
      id: t,
      title: n,
      count: a,
      guildId: s
    } = e, i = (0, N.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === B.StatusTypes.UNKNOWN ? (0, l.jsx)("div", {
      className: G.membersGroup,
      children: (0, l.jsx)("div", {
        className: G.memberGroupsPlaceholder
      })
    }) : (0, l.jsxs)(b.default, {
      className: G.membersGroup,
      children: [(0, l.jsx)(h.HiddenVisually, {
        children: V.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: a
        })
      }), (0, l.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, l.jsx)(D.default, {
          className: G.roleIcon,
          ...i
        }) : null, n, " — ", a]
      })]
    })
  });

function Q(e) {
  let {
    index: t
  } = e, n = (0, o.useListItem)("".concat(t));
  return (0, l.jsx)(g.default, {
    itemProps: n
  })
}
class X extends a.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, _.isMemberListActivityHidden)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: l
    } = e, a = this.getContentFeedHeight(), s = Math.max(0, t - Math.max(0, a - l));
    return {
      height: s,
      rowHeight: n,
      rowsVisible: Math.floor(s / n),
      y: Math.max(0, l - a)
    }
  }
  getDimensions() {
    let e = this._list;
    if (null == e) return {
      y: 0,
      height: 0,
      rowHeight: 0
    };
    let {
      offsetHeight: t,
      scrollTop: n
    } = e.getScrollerState(), l = Math.floor(t / W);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: W,
      rowsVisible: l,
      y: n
    })
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, l.jsx)(h.FocusJumpSection, {
      children: a => (0, l.jsx)(P.UID, {
        children: s => (0, l.jsx)("aside", {
          className: i(G.membersWrap, G.hiddenMembers),
          "aria-labelledby": s,
          children: (0, l.jsx)(h.HeadingLevel, {
            component: (0, l.jsx)(h.HiddenVisually, {
              children: (0, l.jsx)(h.H, {
                id: s,
                children: V.default.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
                  channel: n.name
                })
              })
            }),
            children: (0, l.jsx)(o.ListNavigatorContainer, {
              children: n => {
                let {
                  ref: s,
                  role: r,
                  ...u
                } = n;
                return (0, l.jsx)(h.List, {
                  innerRole: r,
                  innerAriaLabel: V.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i(G.members, {
                    [G.fullWidth]: d.isMobile
                  }),
                  paddingTop: 0,
                  sectionHeight: 40,
                  rowHeight: this.getRowHeightComputer(),
                  renderSection: this.renderSection,
                  renderRow: this.renderRow,
                  sections: e.map(e => e.count),
                  onScroll: this.handleScroll,
                  fade: !0,
                  customTheme: !0,
                  ...u,
                  ...a
                }, t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._list = null, this._areActivitiesExperimentallyHidden = !1, this.setList = e => {
      this._list = e, this.props.listRef.current = e
    }, this.renderSection = e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, i = n[t];
      return (0, I.isContentGroup)(i) ? (0, a.createElement)(I.default, {
        ...i,
        key: "section-".concat(t)
      }) : 0 === t ? (0, l.jsx)(A.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: Y,
        children: (0, l.jsx)(Z, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, a.createElement)(Z, {
        ...i,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }, this.getRowProps = e => {
      let {
        groups: t,
        rows: n
      } = this.props, l = t[e.section];
      if (null == l) return null;
      let {
        index: a
      } = l;
      return null == a || "row" !== e.type ? null : n[a + 1 + e.row]
    }, this.renderRow = e => {
      let {
        section: t,
        row: n,
        rowIndex: a
      } = e, {
        channel: s
      } = this.props, i = this.getRowProps(e);
      if (null != i) {
        if (i.type === j.MemberListRowTypes.MEMBER && "user" in i) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: r,
            isOwner: u,
            isMobileOnline: o,
            nick: d,
            activities: c,
            applicationStream: f,
            premiumSince: h
          } = i;
          return (0, l.jsx)(K, {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: r,
            isOwner: u,
            nick: d,
            activities: this._areActivitiesExperimentallyHidden ? [] : c,
            applicationStream: f,
            channel: s,
            guildId: s.guild_id,
            premiumSince: h,
            isMobileOnline: o,
            index: a
          }, "member-".concat(i.user.id))
        }
        if (i.type === j.MemberListRowTypes.CONTENT_INVENTORY) return (0, l.jsx)(T.default, {
          ...i,
          index: a
        }, "content-inventory-".concat(i.entry.id))
      }
      return (0, l.jsx)(Q, {
        index: a
      }, "placeholder-".concat(t, ":").concat(n))
    }, this.handleScroll = () => {
      this.updateSubscription()
    }, this.getContentFeedGroup = () => {
      let e = this.props.groups[v.CONTENT_FEED_SECTION];
      if ((0, I.isContentGroup)(e)) return e
    }, this.hasContentFeed = () => null != this.getContentFeedGroup(), this.getRowHeightComputer = () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let {
          rows: t
        } = this.props, n = e.index;
        return function(e, l) {
          if (e === v.CONTENT_FEED_SECTION) {
            let e = t[n + 1 + l];
            return (0, T.getContentRowHeight)(e)
          }
          return W
        }
      }
      return W
    }, this.getContentFeedHeight = () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let t = e.feedHeight;
        return t + 40
      }
      return 0
    }, this.updateSubscription = u.debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        channel: t
      } = this.props, {
        rowHeight: n,
        y: l,
        height: a
      } = this.getDimensions();
      (0, p.subscribeChannelDimensions)({
        guildId: t.guild_id,
        channelId: t.id,
        y: l,
        height: a,
        rowHeight: n
      })
    }, 50), this.trackMemberListViewed = () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== v.CONTENT_FEED_SECTION));
      let l = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(w.isNotNullish);
      if (0 === l.length) return;
      let a = l.reduce((e, t) => t.type !== j.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === B.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, C.default.trackWithMetadata(B.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...a
      })
    }
  }
}

function q(e) {
  let {
    channel: t,
    className: n
  } = e, s = (0, c.useStateFromStores)([S.default], () => S.default.keyboardModeEnabled), r = (0, c.useStateFromStoresObject)([j.default], () => j.default.getProps(t.guild_id, t.id)), {
    rows: u,
    groups: d,
    version: f
  } = (0, v.useInjectContentInventoryFeed)(r), h = a.useRef(null), m = a.useCallback((e, t) => {
    let n = h.current;
    if (null == n) return;
    let l = parseInt(t, 10),
      [a, s] = n.getSectionRowFromIndex(l),
      i = 0 === a && 0 === s ? W : 0;
    n.scrollToIndex({
      section: a,
      row: s,
      padding: i,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), p = a.useCallback(() => new Promise(e => {
    let t = h.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), E = a.useCallback(() => new Promise(e => {
    let t = h.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), g = (0, o.default)({
    id: "members-".concat(t.id),
    setFocus: m,
    isEnabled: s,
    scrollToStart: p,
    scrollToEnd: E
  });
  return (0, l.jsx)("div", {
    className: i(G.container, n),
    children: (0, l.jsx)(o.ListNavigatorProvider, {
      navigator: g,
      children: (0, l.jsx)(X, {
        ...e,
        ...r,
        version: f,
        groups: d,
        rows: u,
        listRef: h
      })
    })
  })
}

function J(e) {
  let {
    channel: t,
    className: n
  } = e, s = a.useDeferredValue(t);
  return a.useMemo(() => (0, l.jsx)(q, {
    channel: s,
    className: n
  }), [s, n])
}