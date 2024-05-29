"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("47120"), n("724458");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("873546"),
  c = n("442837"),
  f = n("902704"),
  h = n("481060"),
  m = n("239091"),
  p = n("941028"),
  E = n("144144"),
  C = n("276264"),
  g = n("607070"),
  S = n("100527"),
  _ = n("367907"),
  T = n("906732"),
  I = n("493324"),
  A = n("611064"),
  v = n("677432"),
  N = n("178762"),
  x = n("868671"),
  M = n("623624"),
  R = n("518738"),
  y = n("280234"),
  L = n("480384"),
  O = n("155409"),
  j = n("484459"),
  P = n("103575"),
  D = n("439170"),
  b = n("430824"),
  U = n("111583"),
  F = n("594174"),
  w = n("153124"),
  k = n("151827"),
  B = n("176278"),
  H = n("585483"),
  G = n("823379"),
  V = n("51144"),
  W = n("998502"),
  Y = n("981631"),
  z = n("689938"),
  K = n("67431");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let q = W.default.getEnableHardwareAcceleration(),
  X = 44 + C.AVATAR_DECORATION_PADDING,
  Q = {
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
class J extends l.Component {
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
      lastOnlineTimestamp: E,
      premiumSince: g,
      ...S
    } = this.props, _ = null != g ? new Date(g) : null;
    return (0, a.jsx)(h.Popout, {
      preload: () => (0, j.maybeFetchUserProfileForPopout)(s, {
        channelId: c.id,
        guildId: f
      }),
      renderPopout: this.renderUserPopout,
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (d, h) => {
        let {
          isShown: g
        } = h;
        return (0, a.jsx)(C.default, {
          className: K.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: q,
          user: s,
          currentUser: i,
          nick: l,
          status: u,
          activities: r,
          applicationStream: o,
          isOwner: n,
          premiumSince: _,
          colorString: e,
          colorRoleName: t,
          isTyping: m,
          channel: c,
          guildId: f,
          isMobile: p,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: g,
          itemProps: S,
          lastOnlineTimestamp: E,
          ...d
        })
      }
    })
  }
  constructor(...e) {
    super(...e), Z(this, "renderUserContextMenu", e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        })
      })
    }), Z(this, "handleShiftClick", () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(V.default.getUserTag(e, {
        decoration: "never"
      })), a = "<@".concat(e.id, ">");
      H.ComponentDispatch.dispatchToLastSubscribed(Y.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: a
      }), E.default.startTyping(t.id)
    }), Z(this, "openGuildSubscriptionModal", e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, M.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: Y.AnalyticsSections.MEMBER_LIST,
          object: Y.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }), Z(this, "renderUserPopout", e => (0, a.jsx)(P.default, {
      ...e,
      location: "ChannelMembers",
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      roleId: this.props.colorRoleId,
      analyticsParams: {
        location: {
          page: Y.AnalyticsPages.GUILD_CHANNEL,
          section: Y.AnalyticsSections.MEMBER_LIST
        }
      }
    }))
  }
}
let $ = l.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: s,
      user: i,
      status: r,
      isGuildEligibleForRecentlyOnline: o,
      index: d
    } = e, f = (0, u.useListItem)("".concat(d)), h = (0, c.useStateFromStores)([U.default], () => U.default.isTyping(s.id, i.id)), m = (0, c.useStateFromStores)([F.default], () => F.default.getCurrentUser()), p = (0, c.useStateFromStores)([b.default], () => {
      var e;
      return null != t ? null === (e = b.default.getRole(s.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0
    }, [s, t]);
    return l.useEffect(() => {
      r === Y.StatusTypes.OFFLINE && o && y.default.trackExposure({
        location: "guild_member_list"
      })
    }, [o, r]), (0, a.jsx)(J, {
      ...n,
      ...f,
      isTyping: h,
      currentUser: m,
      colorRoleName: p
    })
  }),
  ee = l.memo(function(e) {
    let {
      id: t,
      title: n,
      count: l,
      guildId: s
    } = e, i = (0, R.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === Y.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: K.membersGroup,
      children: (0, a.jsx)("div", {
        className: K.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(k.default, {
      className: K.membersGroup,
      children: [(0, a.jsx)(h.HiddenVisually, {
        children: z.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: l
        })
      }), (0, a.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, a.jsx)(B.default, {
          className: K.roleIcon,
          ...i
        }) : null, n, " — ", l]
      })]
    })
  });

function et(e) {
  let {
    index: t
  } = e, n = (0, u.useListItem)("".concat(t));
  return (0, a.jsx)(C.default, {
    itemProps: n
  })
}
class en extends l.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, I.isMemberListActivityHidden)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: a
    } = e, l = this.getContentFeedHeight(), s = Math.max(0, t - Math.max(0, l - a));
    return {
      height: s,
      rowHeight: n,
      rowsVisible: Math.floor(s / n),
      y: Math.max(0, a - l)
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
    } = e.getScrollerState(), a = Math.floor(t / X);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: X,
      rowsVisible: a,
      y: n
    })
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, a.jsx)(h.FocusJumpSection, {
      children: l => (0, a.jsx)(w.UID, {
        children: s => (0, a.jsx)("aside", {
          className: i()(K.membersWrap, K.hiddenMembers),
          "aria-labelledby": s,
          children: (0, a.jsx)(h.HeadingLevel, {
            component: (0, a.jsx)(h.HiddenVisually, {
              children: (0, a.jsx)(h.H, {
                id: s,
                children: z.default.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
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
                  innerAriaLabel: z.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i()(K.members, {
                    [K.fullWidth]: d.isMobile
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
    super(...e), Z(this, "_list", null), Z(this, "_areActivitiesExperimentallyHidden", !1), Z(this, "lastReportedAnalyticsChannel", void 0), Z(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), Z(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, i = n[t];
      return (0, A.isContentGroup)(i) ? (0, l.createElement)(A.default, {
        ...i,
        key: "section-".concat(t)
      }) : 0 === t ? (0, a.jsx)(O.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: Q,
        children: (0, a.jsx)(ee, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, l.createElement)(ee, {
        ...i,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }), Z(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, a = t[e.section];
      if (null == a) return null;
      let {
        index: l
      } = a;
      return null == l || "row" !== e.type ? null : n[l + 1 + e.row]
    }), Z(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: l
      } = e, {
        channel: s,
        isRecentlyOnlineEnabled: i
      } = this.props, r = this.getRowProps(e);
      if (null != r) {
        if (r.type === D.MemberListRowTypes.MEMBER && "user" in r) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: o,
            isOwner: u,
            isMobileOnline: d,
            nick: c,
            activities: f,
            applicationStream: h,
            premiumSince: m,
            lastOnlineTimestamp: p
          } = r;
          return (0, a.jsx)($, {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: o,
            isOwner: u,
            nick: c,
            activities: this._areActivitiesExperimentallyHidden ? [] : f,
            applicationStream: h,
            channel: s,
            guildId: s.guild_id,
            premiumSince: m,
            isMobileOnline: d,
            index: l,
            lastOnlineTimestamp: i ? p : void 0,
            isGuildEligibleForRecentlyOnline: this.props.isGuildEligibleForRecentlyOnline
          }, "member-".concat(r.user.id))
        }
        if (r.type === D.MemberListRowTypes.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(r.entry.id);
          return null != r.entry.original_id && (e += "-".concat(r.entry.original_id)), (0, a.jsx)(N.default, {
            ...r,
            channel: this.props.channel,
            index: l
          }, e)
        }
        if (r.type === D.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY) return (0, a.jsx)(v.default, {}, "content-inventory-hidden-entry")
      }
      return (0, a.jsx)(et, {
        index: l
      }, "placeholder-".concat(t, ":").concat(n))
    }), Z(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), Z(this, "updateMaxContentFeedRowSeen", o().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState();
      this.props.updateMaxContentFeedRowSeen(n + t - 40)
    }, 50)), Z(this, "getContentFeedGroup", () => {
      let e = this.props.groups[x.CONTENT_FEED_SECTION];
      if ((0, A.isContentGroup)(e)) return e
    }), Z(this, "hasContentFeed", () => null != this.getContentFeedGroup()), Z(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let {
          rows: t
        } = this.props, n = e.index;
        return function(e, a) {
          if (e === x.CONTENT_FEED_SECTION) {
            let e = t[n + 1 + a];
            return (0, N.getContentRowHeight)(e)
          }
          return X
        }
      }
      return X
    }), Z(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + 40 : 0
    }), Z(this, "updateSubscription", o().debounce(() => {
      if (null == this._list) return;
      let {
        channel: e
      } = this.props, {
        rowHeight: t,
        y: n,
        height: a
      } = this.getDimensions();
      (0, p.subscribeChannelDimensions)({
        guildId: e.guild_id,
        channelId: e.id,
        y: n,
        height: a,
        rowHeight: t
      })
    }, 50)), Z(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== x.CONTENT_FEED_SECTION));
      let a = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(G.isNotNullish);
      if (0 === a.length) return;
      let l = a.reduce((e, t) => t.type !== D.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === Y.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, _.default.trackWithMetadata(Y.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...l
      })
    })
  }
}

function ea(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: s
  } = (0, T.default)(S.default.MEMBER_LIST), r = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), o = (0, c.useStateFromStoresObject)([D.default], () => D.default.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: f,
    version: h,
    updateMaxRowSeen: m
  } = (0, x.useInjectContentInventoryFeed)({
    memberStoreProps: o,
    channelId: t.id,
    guildId: t.guild_id
  }), p = l.useRef(null), E = l.useCallback((e, t) => {
    let n = p.current;
    if (null == n) return;
    let a = parseInt(t, 10),
      [l, s] = n.getSectionRowFromIndex(a),
      i = 0 === l && 0 === s ? X : 0;
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
  }, []), C = l.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), _ = l.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), I = (0, u.default)({
    id: "members-".concat(t.id),
    setFocus: E,
    isEnabled: r,
    scrollToStart: C,
    scrollToEnd: _
  }), A = (0, c.useStateFromStores)([L.default], () => L.default.getPriorityGuilds().includes(t.guild_id));
  return (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsx)("div", {
      className: i()(K.container, n),
      children: (0, a.jsx)(u.ListNavigatorProvider, {
        navigator: I,
        children: (0, a.jsx)(en, {
          ...e,
          ...o,
          version: h,
          groups: f,
          rows: d,
          listRef: p,
          isGuildEligibleForRecentlyOnline: A,
          updateMaxContentFeedRowSeen: m
        })
      })
    })
  })
}

function el(e) {
  let {
    channel: t,
    className: n
  } = e, s = l.useDeferredValue(t);
  return l.useMemo(() => (0, a.jsx)(ea, {
    channel: s,
    className: n
  }), [s, n])
}