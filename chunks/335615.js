n.d(t, {
  Z: function() {
    return es
  }
}), n(47120), n(724458);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(91192),
  u = n(924826),
  d = n(873546),
  h = n(442837),
  m = n(902704),
  p = n(481060),
  E = n(239091),
  g = n(941028),
  f = n(144144),
  C = n(276264),
  _ = n(607070),
  I = n(100527),
  x = n(367907),
  T = n(906732),
  N = n(493324),
  Z = n(611064),
  S = n(677432),
  v = n(178762),
  A = n(868671),
  M = n(623624),
  R = n(518738),
  j = n(280234),
  L = n(480384),
  O = n(155409),
  P = n(484459),
  b = n(103575),
  y = n(439170),
  D = n(430824),
  U = n(111583),
  k = n(594174),
  w = n(153124),
  H = n(151827),
  B = n(176278),
  G = n(585483),
  V = n(823379),
  F = n(51144),
  z = n(998502),
  W = n(981631),
  Y = n(689938),
  K = n(279691);

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let X = z.ZP.getEnableHardwareAcceleration(),
  Q = 44 + C.x,
  J = {
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
class $ extends i.Component {
  shouldComponentUpdate(e) {
    return !(0, m.Z)(this.props, e, ["channelId"])
  }
  render() {
    let {
      colorString: e,
      colorRoleName: t,
      isOwner: n,
      nick: i,
      user: s,
      currentUser: a,
      activities: r,
      applicationStream: o,
      status: c,
      channel: u,
      guildId: h,
      isTyping: m,
      isMobileOnline: E,
      lastOnlineTimestamp: g,
      premiumSince: f,
      ..._
    } = this.props, I = null != f ? new Date(f) : null;
    return (0, l.jsx)(p.Popout, {
      preload: () => (0, P.W)(s, {
        channelId: u.id,
        guildId: h
      }),
      renderPopout: this.renderUserPopout,
      position: d.tq ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (d, p) => {
        let {
          isShown: f
        } = p;
        return (0, l.jsx)(C.Z, {
          className: K.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: X,
          user: s,
          currentUser: a,
          nick: i,
          status: c,
          activities: r,
          applicationStream: o,
          isOwner: n,
          premiumSince: I,
          colorString: e,
          colorRoleName: t,
          isTyping: m,
          channel: u,
          guildId: h,
          isMobile: E,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: f,
          itemProps: _,
          lastOnlineTimestamp: g,
          ...d
        })
      }
    })
  }
  constructor(...e) {
    super(...e), q(this, "renderUserContextMenu", e => {
      (0, E.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
        return t => (0, l.jsx)(e, {
          ...t,
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        })
      })
    }), q(this, "handleShiftClick", () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(F.ZP.getUserTag(e, {
        decoration: "never"
      })), l = "<@".concat(e.id, ">");
      G.S.dispatchToLastSubscribed(W.CkL.INSERT_TEXT, {
        plainText: n,
        rawText: l
      }), f.Z.startTyping(t.id)
    }), q(this, "openGuildSubscriptionModal", e => {
      let {
        guildId: t
      } = this.props;
      if (null != t) e.stopPropagation(), (0, M.f)({
        guildId: t,
        location: {
          section: W.jXE.MEMBER_LIST,
          object: W.qAy.BOOST_GEM_ICON
        }
      })
    }), q(this, "renderUserPopout", e => (0, l.jsx)(b.Z, {
      ...e,
      location: "ChannelMembers",
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      roleId: this.props.colorRoleId,
      analyticsParams: {
        location: {
          page: W.ZY5.GUILD_CHANNEL,
          section: W.jXE.MEMBER_LIST
        }
      }
    }))
  }
}
let ee = i.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: s,
      user: a,
      status: r,
      isGuildEligibleForRecentlyOnline: o,
      index: u
    } = e, d = (0, c.JA)("".concat(u)), m = (0, h.e7)([U.Z], () => U.Z.isTyping(s.id, a.id)), p = (0, h.e7)([k.default], () => k.default.getCurrentUser()), E = (0, h.e7)([D.Z], () => {
      var e;
      return null != t ? null === (e = D.Z.getRole(s.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0
    }, [s, t]);
    return i.useEffect(() => {
      r === W.Skl.OFFLINE && o && j.Z.trackExposure({
        location: "guild_member_list"
      })
    }, [o, r]), (0, l.jsx)($, {
      ...n,
      ...d,
      isTyping: m,
      currentUser: p,
      colorRoleName: E
    })
  }),
  et = i.memo(function(e) {
    let {
      id: t,
      title: n,
      count: i,
      guildId: s
    } = e, a = (0, R.p9)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === W.Skl.UNKNOWN ? (0, l.jsx)("div", {
      className: K.membersGroup,
      children: (0, l.jsx)("div", {
        className: K.memberGroupsPlaceholder
      })
    }) : (0, l.jsxs)(H.Z, {
      className: K.membersGroup,
      children: [(0, l.jsx)(p.HiddenVisually, {
        children: Y.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: i
        })
      }), (0, l.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != a ? (0, l.jsx)(B.Z, {
          className: K.roleIcon,
          ...a
        }) : null, n, " — ", i]
      })]
    })
  });

function en(e) {
  let {
    index: t
  } = e, n = (0, c.JA)("".concat(t));
  return (0, l.jsx)(C.Z, {
    itemProps: n
  })
}
class el extends i.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, N.$)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: l
    } = e, i = this.getContentFeedHeight(), s = Math.max(0, t - Math.max(0, i - l)), a = Math.floor(s / n);
    return {
      height: s,
      rowHeight: n,
      rowsVisible: a,
      y: Math.max(0, l - i)
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
    } = e.getScrollerState(), l = Math.floor(t / Q);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: Q,
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
    return (0, l.jsx)(p.FocusJumpSection, {
      children: i => (0, l.jsx)(w.FG, {
        children: s => (0, l.jsx)("aside", {
          className: a()(K.membersWrap, K.hiddenMembers),
          "aria-labelledby": s,
          children: (0, l.jsx)(p.HeadingLevel, {
            component: (0, l.jsx)(p.HiddenVisually, {
              children: (0, l.jsx)(p.H, {
                id: s,
                children: Y.Z.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
                  channel: n.name
                })
              })
            }),
            children: (0, l.jsx)(c.SJ, {
              children: n => {
                let {
                  ref: s,
                  role: r,
                  ...o
                } = n;
                return (0, l.jsx)(p.List, {
                  innerRole: r,
                  innerAriaLabel: Y.Z.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: a()(K.members, {
                    [K.fullWidth]: d.tq
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
                  ...i
                }, t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), q(this, "_list", null), q(this, "_areActivitiesExperimentallyHidden", !1), q(this, "lastReportedAnalyticsChannel", void 0), q(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), q(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, a = n[t];
      return (0, Z.R)(a) ? (0, i.createElement)(Z.Z, {
        ...a,
        key: "section-".concat(t)
      }) : 0 === t ? (0, l.jsx)(O.Z, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: J,
        children: (0, l.jsx)(et, {
          ...a,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, i.createElement)(et, {
        ...a,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }), q(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, l = t[e.section];
      if (null == l) return null;
      let {
        index: i
      } = l;
      return null == i || "row" !== e.type ? null : n[i + 1 + e.row]
    }), q(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: i
      } = e, {
        channel: s,
        isRecentlyOnlineEnabled: a
      } = this.props, r = this.getRowProps(e);
      if (null != r) {
        if (r.type === y.so.MEMBER && "user" in r) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: o,
            isOwner: c,
            isMobileOnline: u,
            nick: d,
            activities: h,
            applicationStream: m,
            premiumSince: p,
            lastOnlineTimestamp: E
          } = r;
          return (0, l.jsx)(ee, {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: o,
            isOwner: c,
            nick: d,
            activities: this._areActivitiesExperimentallyHidden ? [] : h,
            applicationStream: m,
            channel: s,
            guildId: s.guild_id,
            premiumSince: p,
            isMobileOnline: u,
            index: i,
            lastOnlineTimestamp: a ? E : void 0,
            isGuildEligibleForRecentlyOnline: this.props.isGuildEligibleForRecentlyOnline
          }, "member-".concat(r.user.id))
        }
        if (r.type === y.so.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(r.entry.id);
          return null != r.entry.original_id && (e += "-".concat(r.entry.original_id)), (0, l.jsx)(v.ZP, {
            ...r,
            channel: this.props.channel,
            index: i
          }, e)
        }
        if (r.type === y.so.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(S.Z, {}, "content-inventory-hidden-entry")
      }
      return (0, l.jsx)(en, {
        index: i
      }, "placeholder-".concat(t, ":").concat(n))
    }), q(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), q(this, "updateMaxContentFeedRowSeen", o().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState();
      this.props.updateMaxContentFeedRowSeen(n + t - 40)
    }, 50)), q(this, "getContentFeedGroup", () => {
      let e = this.props.groups[A.T];
      if ((0, Z.R)(e)) return e
    }), q(this, "hasContentFeed", () => null != this.getContentFeedGroup()), q(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let {
          rows: t
        } = this.props, n = e.index;
        return function(e, l) {
          if (e === A.T) {
            let e = t[n + 1 + l];
            return (0, v.iZ)(e)
          }
          return Q
        }
      }
      return Q
    }), q(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + 40 : 0
    }), q(this, "updateSubscription", o().debounce(() => {
      if (null == this._list) return;
      let {
        channel: e
      } = this.props, {
        rowHeight: t,
        y: n,
        height: l
      } = this.getDimensions();
      (0, g.TV)({
        guildId: e.guild_id,
        channelId: e.id,
        y: n,
        height: l,
        rowHeight: t
      })
    }, 50)), q(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== A.T));
      let l = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(V.lm);
      if (0 === l.length) return;
      let i = l.reduce((e, t) => t.type !== y.so.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === W.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, x.ZP.trackWithMetadata(W.rMx.MEMBER_LIST_VIEWED, {
        ...i
      })
    })
  }
}

function ei(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: s
  } = (0, T.ZP)(I.Z.MEMBER_LIST), r = (0, h.e7)([_.Z], () => _.Z.keyboardModeEnabled), o = (0, h.cj)([y.ZP], () => y.ZP.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: m,
    version: p,
    updateMaxRowSeen: E
  } = (0, A.H)({
    memberStoreProps: o,
    channelId: t.id,
    guildId: t.guild_id
  }), g = i.useRef(null), f = i.useCallback((e, t) => {
    let n = g.current;
    if (null == n) return;
    let l = parseInt(t, 10),
      [i, s] = n.getSectionRowFromIndex(l),
      a = 0 === i && 0 === s ? Q : 0;
    n.scrollToIndex({
      section: i,
      row: s,
      padding: a,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), C = i.useCallback(() => new Promise(e => {
    let t = g.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), x = i.useCallback(() => new Promise(e => {
    let t = g.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), N = (0, u.ZP)({
    id: "members-".concat(t.id),
    setFocus: f,
    isEnabled: r,
    scrollToStart: C,
    scrollToEnd: x
  }), Z = (0, h.e7)([L.Z], () => L.Z.getPriorityGuilds().includes(t.guild_id));
  return (0, l.jsx)(T.Gt, {
    value: s,
    children: (0, l.jsx)("div", {
      className: a()(K.container, n),
      children: (0, l.jsx)(c.bG, {
        navigator: N,
        children: (0, l.jsx)(el, {
          ...e,
          ...o,
          version: p,
          groups: m,
          rows: d,
          listRef: g,
          isGuildEligibleForRecentlyOnline: Z,
          updateMaxContentFeedRowSeen: E
        })
      })
    })
  })
}

function es(e) {
  let {
    channel: t,
    className: n
  } = e, s = i.useDeferredValue(t);
  return i.useMemo(() => (0, l.jsx)(ei, {
    channel: s,
    className: n
  }), [s, n])
}