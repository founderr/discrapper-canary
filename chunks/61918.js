"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
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
  S = n("888503"),
  g = n("206230"),
  C = n("716241"),
  _ = n("86097"),
  I = n("95039"),
  T = n("405645"),
  v = n("12896"),
  x = n("506885"),
  N = n("981601"),
  A = n("19766"),
  M = n("305961"),
  R = n("191542"),
  j = n("697218"),
  L = n("476765"),
  y = n("826684"),
  O = n("483093"),
  P = n("659500"),
  b = n("449008"),
  D = n("158998"),
  U = n("50885"),
  w = n("49111"),
  F = n("782340"),
  k = n("559571");
let B = U.default.getEnableHardwareAcceleration(),
  V = 44 + S.AVATAR_DECORATION_PADDING,
  G = {
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
class H extends a.Component {
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
      ...g
    } = this.props, C = null != E ? new Date(E) : null;
    return (0, l.jsx)(h.Popout, {
      preload: () => (0, x.default)(s.id, s.getAvatarURL(f, 80), {
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
        return (0, l.jsx)(S.default, {
          className: k.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: B,
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
          itemProps: g,
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
      } = this.props, n = "@".concat(D.default.getUserTag(e, {
        decoration: "never"
      })), l = "<@".concat(e.id, ">");
      P.ComponentDispatch.dispatchToLastSubscribed(w.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: l
      }), E.default.startTyping(t.id)
    }, this.openGuildSubscriptionModal = e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, I.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: w.AnalyticsSections.MEMBER_LIST,
          object: w.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }, this.renderUserPopout = e => (0, l.jsx)(N.default, {
      ...e,
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      analyticsParams: {
        location: {
          page: w.AnalyticsPages.GUILD_CHANNEL,
          section: w.AnalyticsSections.MEMBER_LIST
        }
      }
    })
  }
}
let W = a.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: a,
      user: s,
      index: i
    } = e, r = (0, o.useListItem)("".concat(i)), u = (0, c.useStateFromStores)([R.default], () => R.default.isTyping(a.id, s.id)), d = (0, c.useStateFromStores)([j.default], () => j.default.getCurrentUser()), f = (0, c.useStateFromStores)([M.default], () => {
      var e, n;
      return null != t ? null === (n = M.default.getGuild(a.guild_id)) || void 0 === n ? void 0 : null === (e = n.getRole(t)) || void 0 === e ? void 0 : e.name : void 0
    }, [a, t]);
    return (0, l.jsx)(H, {
      ...n,
      ...r,
      isTyping: u,
      currentUser: d,
      colorRoleName: f
    })
  }),
  Y = a.memo(function(e) {
    let {
      id: t,
      title: n,
      count: a,
      guildId: s
    } = e, i = (0, T.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === w.StatusTypes.UNKNOWN ? (0, l.jsx)("div", {
      className: k.membersGroup,
      children: (0, l.jsx)("div", {
        className: k.memberGroupsPlaceholder
      })
    }) : (0, l.jsxs)(y.default, {
      className: k.membersGroup,
      children: [(0, l.jsx)(h.HiddenVisually, {
        children: F.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: a
        })
      }), (0, l.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, l.jsx)(O.default, {
          className: k.roleIcon,
          ...i
        }) : null, n, " — ", a]
      })]
    })
  });

function z(e) {
  let {
    index: t
  } = e, n = (0, o.useListItem)("".concat(t));
  return (0, l.jsx)(S.default, {
    itemProps: n
  })
}
class K extends a.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, _.isMemberListActivityHidden)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed()
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
    } = e.getScrollerState(), l = Math.floor(t / V);
    return {
      height: t,
      rowHeight: V,
      rowsVisible: l,
      y: n
    }
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, l.jsx)(h.FocusJumpSection, {
      children: a => (0, l.jsx)(L.UID, {
        children: s => (0, l.jsx)("aside", {
          className: i(k.membersWrap, k.hiddenMembers),
          "aria-labelledby": s,
          children: (0, l.jsx)(h.HeadingLevel, {
            component: (0, l.jsx)(h.HiddenVisually, {
              children: (0, l.jsx)(h.H, {
                id: s,
                children: F.default.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
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
                  innerAriaLabel: F.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i(k.members, {
                    [k.fullWidth]: d.isMobile
                  }),
                  paddingTop: 0,
                  sectionHeight: 40,
                  rowHeight: V,
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
      return 0 === t ? (0, l.jsx)(v.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: G,
        children: (0, l.jsx)(Y, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, a.createElement)(Y, {
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
      if (null == i || i.type !== A.MemberListRowTypes.MEMBER || !("user" in i)) return (0, l.jsx)(z, {
        index: a
      }, "placeholder-".concat(t, ":").concat(n));
      {
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
        return (0, l.jsx)(W, {
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
    }, this.handleScroll = () => {
      this.updateSubscription()
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
      let l = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(b.isNotNullish);
      if (0 === l.length) return;
      let a = l.reduce((e, t) => t.type !== A.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === w.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, C.default.trackWithMetadata(w.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...a
      })
    }
  }
}

function Z(e) {
  let {
    channel: t,
    className: n
  } = e, s = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), r = (0, c.useStateFromStoresObject)([A.default], () => A.default.getProps(t.guild_id, t.id)), {
    rows: u,
    groups: d
  } = r, f = a.useRef(null), h = a.useCallback((e, t) => {
    let n = f.current;
    if (null == n) return;
    let l = parseInt(t, 10),
      [a, s] = n.getSectionRowFromIndex(l),
      i = 0 === a && 0 === s ? V : 0;
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
  }, []), m = a.useCallback(() => new Promise(e => {
    let t = f.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), p = a.useCallback(() => new Promise(e => {
    let t = f.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), E = (0, o.default)({
    id: "members-".concat(t.id),
    setFocus: h,
    isEnabled: s,
    scrollToStart: m,
    scrollToEnd: p
  });
  return (0, l.jsx)("div", {
    className: i(k.container, n),
    children: (0, l.jsx)(o.ListNavigatorProvider, {
      navigator: E,
      children: (0, l.jsx)(K, {
        ...e,
        ...r,
        groups: d,
        rows: u,
        listRef: f
      })
    })
  })
}

function X(e) {
  let {
    channel: t,
    className: n
  } = e, s = a.useDeferredValue(t);
  return a.useMemo(() => (0, l.jsx)(Z, {
    channel: s,
    className: n
  }), [s, n])
}