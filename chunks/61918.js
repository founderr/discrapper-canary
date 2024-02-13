"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
}), n("222007"), n("808653");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("974667"),
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
  _ = n("95039"),
  I = n("405645"),
  T = n("12896"),
  v = n("506885"),
  x = n("981601"),
  N = n("19766"),
  A = n("305961"),
  M = n("191542"),
  R = n("697218"),
  j = n("476765"),
  L = n("826684"),
  O = n("483093"),
  y = n("659500"),
  P = n("449008"),
  b = n("158998"),
  D = n("50885"),
  U = n("49111"),
  w = n("782340"),
  F = n("881235");
let k = D.default.getEnableHardwareAcceleration(),
  V = 44 + S.AVATAR_DECORATION_PADDING,
  B = {
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
class H extends l.Component {
  shouldComponentUpdate(e) {
    return !(0, f.default)(this.props, e, ["channelId"])
  }
  render() {
    let {
      colorString: e,
      colorRoleName: t,
      isOwner: n,
      nick: l,
      user: s,
      currentUser: i,
      activities: r,
      applicationStream: o,
      status: u,
      channel: c,
      guildId: f,
      isTyping: m,
      isMobileOnline: p,
      premiumSince: E,
      ...g
    } = this.props, C = null != E ? new Date(E) : null;
    return (0, a.jsx)(h.Popout, {
      preload: () => (0, v.default)(s.id, s.getAvatarURL(f, 80), {
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
        return (0, a.jsx)(S.default, {
          className: F.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: k,
          user: s,
          currentUser: i,
          nick: l,
          status: u,
          activities: r,
          applicationStream: o,
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
        return t => (0, a.jsx)(e, {
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
      } = this.props, n = "@".concat(b.default.getUserTag(e, {
        decoration: "never"
      })), a = "<@".concat(e.id, ">");
      y.ComponentDispatch.dispatchToLastSubscribed(U.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: a
      }), E.default.startTyping(t.id)
    }, this.openGuildSubscriptionModal = e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, _.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: U.AnalyticsSections.MEMBER_LIST,
          object: U.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }, this.renderUserPopout = e => (0, a.jsx)(x.default, {
      ...e,
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      analyticsParams: {
        location: {
          page: U.AnalyticsPages.GUILD_CHANNEL,
          section: U.AnalyticsSections.MEMBER_LIST
        }
      }
    })
  }
}
let G = l.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: l,
      user: s,
      index: i
    } = e, r = (0, u.useListItem)("".concat(i)), o = (0, c.useStateFromStores)([M.default], () => M.default.isTyping(l.id, s.id)), d = (0, c.useStateFromStores)([R.default], () => R.default.getCurrentUser()), f = (0, c.useStateFromStores)([A.default], () => {
      var e, n;
      return null != t ? null === (n = A.default.getGuild(l.guild_id)) || void 0 === n ? void 0 : null === (e = n.getRole(t)) || void 0 === e ? void 0 : e.name : void 0
    }, [l, t]);
    return (0, a.jsx)(H, {
      ...n,
      ...r,
      isTyping: o,
      currentUser: d,
      colorRoleName: f
    })
  }),
  W = l.memo(function(e) {
    let {
      id: t,
      title: n,
      count: l,
      guildId: s
    } = e, i = (0, I.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === U.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: F.membersGroup,
      children: (0, a.jsx)("div", {
        className: F.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(L.default, {
      className: F.membersGroup,
      children: [(0, a.jsx)(h.HiddenVisually, {
        children: w.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: l
        })
      }), (0, a.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, a.jsx)(O.default, {
          className: F.roleIcon,
          ...i
        }) : null, n, " — ", l]
      })]
    })
  });

function Y(e) {
  let {
    index: t
  } = e, n = (0, u.useListItem)("".concat(t));
  return (0, a.jsx)(S.default, {
    itemProps: n
  })
}
class z extends l.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed()
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
    } = e.getScrollerState(), a = Math.floor(t / V);
    return {
      height: t,
      rowHeight: V,
      rowsVisible: a,
      y: n
    }
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, a.jsx)(h.FocusJumpSection, {
      children: l => (0, a.jsx)(j.UID, {
        children: s => (0, a.jsx)("aside", {
          className: i(F.membersWrap, F.hiddenMembers),
          "aria-labelledby": s,
          children: (0, a.jsx)(h.HeadingLevel, {
            component: (0, a.jsx)(h.HiddenVisually, {
              children: (0, a.jsx)(h.H, {
                id: s,
                children: w.default.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
                  channel: n.name
                })
              })
            }),
            children: (0, a.jsx)(u.ListNavigatorContainer, {
              children: n => {
                let {
                  ref: s,
                  role: r,
                  ...o
                } = n;
                return (0, a.jsx)(h.List, {
                  innerRole: r,
                  innerAriaLabel: w.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i(F.members, {
                    [F.fullWidth]: d.isMobile
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
                  ...o,
                  ...l
                }, t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._list = null, this.setList = e => {
      this._list = e, this.props.listRef.current = e
    }, this.renderSection = e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, i = n[t];
      return 0 === t ? (0, a.jsx)(T.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: B,
        children: (0, a.jsx)(W, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, l.createElement)(W, {
        ...i,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }, this.getRowProps = e => {
      let {
        groups: t,
        rows: n
      } = this.props, a = t[e.section];
      if (null == a) return null;
      let {
        index: l
      } = a;
      return null == l || "row" !== e.type ? null : n[l + 1 + e.row]
    }, this.renderRow = e => {
      let {
        section: t,
        row: n,
        rowIndex: l
      } = e, {
        channel: s
      } = this.props, i = this.getRowProps(e);
      if (null == i || i.type !== N.MemberListRowTypes.MEMBER || !("user" in i)) return (0, a.jsx)(Y, {
        index: l
      }, "placeholder-".concat(t, ":").concat(n));
      {
        let {
          colorString: e,
          colorRoleId: t,
          user: n,
          status: r,
          isOwner: o,
          isMobileOnline: u,
          nick: d,
          activities: c,
          applicationStream: f,
          premiumSince: h
        } = i;
        return (0, a.jsx)(G, {
          colorString: e,
          colorRoleId: t,
          user: n,
          status: r,
          isOwner: o,
          nick: d,
          activities: c,
          applicationStream: f,
          channel: s,
          guildId: s.guild_id,
          premiumSince: h,
          isMobileOnline: u,
          index: l
        }, "member-".concat(i.user.id))
      }
    }, this.handleScroll = () => {
      this.updateSubscription()
    }, this.updateSubscription = o.debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        channel: t
      } = this.props, {
        rowHeight: n,
        y: a,
        height: l
      } = this.getDimensions();
      (0, p.subscribeChannelDimensions)({
        guildId: t.guild_id,
        channelId: t.id,
        y: a,
        height: l,
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
      let a = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(P.isNotNullish);
      if (0 === a.length) return;
      let l = a.reduce((e, t) => t.type !== N.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === U.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, C.default.trackWithMetadata(U.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...l
      })
    }
  }
}

function K(e) {
  let {
    channel: t,
    className: n
  } = e, s = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), r = (0, c.useStateFromStoresObject)([N.default], () => N.default.getProps(t.guild_id, t.id)), {
    rows: o,
    groups: d
  } = r, f = l.useRef(null), h = l.useCallback((e, t) => {
    let n = f.current;
    if (null == n) return;
    let a = parseInt(t, 10),
      [l, s] = n.getSectionRowFromIndex(a),
      i = 0 === l && 0 === s ? V : 0;
    n.scrollToIndex({
      section: l,
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
  }, []), m = l.useCallback(() => new Promise(e => {
    let t = f.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), p = l.useCallback(() => new Promise(e => {
    let t = f.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), E = (0, u.default)({
    id: "members-".concat(t.id),
    setFocus: h,
    isEnabled: s,
    scrollToStart: m,
    scrollToEnd: p
  });
  return (0, a.jsx)("div", {
    className: i(F.container, n),
    children: (0, a.jsx)(u.ListNavigatorProvider, {
      navigator: E,
      children: (0, a.jsx)(z, {
        ...e,
        ...r,
        groups: d,
        rows: o,
        listRef: f
      })
    })
  })
}

function Z(e) {
  let {
    channel: t,
    className: n
  } = e, s = l.useDeferredValue(t);
  return l.useMemo(() => (0, a.jsx)(K, {
    channel: s,
    className: n
  }), [s, n])
}