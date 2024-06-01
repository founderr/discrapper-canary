"use strict";
n.r(t), n.d(t, {
  LoadState: function() {
    return l
  },
  MAX_SHOWN_MESSAGES: function() {
    return H
  },
  SortOrder: function() {
    return a
  },
  default: function() {
    return X
  }
}), n("653041"), n("47120");
var a, l, s, i, r = n("470079"),
  o = n("836560"),
  u = n("512722"),
  d = n.n(u),
  c = n("392711"),
  f = n.n(c),
  h = n("570140"),
  E = n("904245"),
  m = n("45114"),
  p = n("607070"),
  S = n("853856"),
  g = n("181945"),
  N = n("220444"),
  _ = n("601070"),
  I = n("344185"),
  T = n("569471"),
  C = n("723170"),
  A = n("675478"),
  v = n("581883"),
  x = n("131704"),
  R = n("592125"),
  M = n("984933"),
  b = n("731290"),
  O = n("430824"),
  y = n("375954"),
  L = n("496675"),
  j = n("306680"),
  D = n("771845"),
  F = n("9156"),
  P = n("70956"),
  k = n("823379"),
  U = n("709054"),
  w = n("981631"),
  G = n("124368");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = a || (a = {}))[s.Favorite = 0] = "Favorite", s[s.PrivateChannel = 1] = "PrivateChannel", s[s.Mentioned = 2] = "Mentioned", s[s.AllMessagesNotifications = 3] = "AllMessagesNotifications", s[s.GuildChannel = 4] = "GuildChannel", s[s.OldChannel = 5] = "OldChannel", s[s.NoNotifications = 6] = "NoNotifications", s[s.ReallyOldChannel = 7] = "ReallyOldChannel", (i = l || (l = {})).Loading = "loading", i.Loaded = "loaded", i.Done = "done";
let H = 25;
class V extends o.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== e) return;
    let n = !1,
      a = t.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed) return e.hasLoadedAnything ? e : {
          ...e,
          hasLoadedAnything: !0
        };
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
      });
    (!n || a.some((e, n) => e !== t[n])) && this.setState({
      channels: a,
      loadState: n ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return Y(e, !1);
    if ("nsfw" === e.type) return {
      ...e,
      isFullyLoaded: !0,
      hasLoadedAnything: !0
    };
    if ("forum" === e.type) {
      let t = I.default.hasLoaded(e.guildId);
      return {
        ...e,
        isFullyLoaded: t,
        hasLoadedAnything: t
      }
    } else(0, k.assertNever)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    E.default.clearChannel(e.channelId);
    let t = E.default.fetchMessages({
      channelId: e.channelId,
      limit: w.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: e.oldestReadMessageId,
        flash: !0
      }
    });
    return null != t && !1 !== t && (this.setState({
      loadState: "loading"
    }), t.then(t => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          d()("messages" === e.type, "channel cannot change type");
          let n = Y(e, !0);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = {
            ...n,
            hasLoadedAnything: !0,
            isFullyLoaded: !0,
            hasError: !t
          }), n
        })
      })
    }, () => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          var t;
          return d()("messages" === e.type, "channel cannot change type"), {
            ...Y(e, !0),
            isFullyLoaded: !0,
            hasError: !0,
            hasLoadedAnything: !0,
            newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
          }
        })
      })
    }), !0)
  }
  updateChannel(e, t) {
    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = {
          ...this.state,
          ...e
        }, this.emit("change", this.state);
        return
      }
  }
  constructor(e, t) {
    super(), B(this, "state", void 0), B(this, "scrollerRef", void 0), B(this, "maybeLoadMore", void 0), B(this, "reloadMessages", void 0), B(this, "getNumUnreadChannels", void 0), B(this, "markChannelRead", void 0), B(this, "markGuildRead", void 0), B(this, "deleteChannel", void 0), B(this, "markAllRead", void 0), B(this, "toggle", void 0), B(this, "handleUserGuildSettingsStoreChange", void 0), B(this, "handleJoinedThreadsStoreChange", void 0), B(this, "handleActiveThreadsStoreChange", void 0), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
      var e;
      let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? Y(e, !1, !0) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      if (h.default.wait(() => m.ack(t, !0, void 0, n, {
          section: w.AnalyticsSections.INBOX
        })), 1 === this.state.channels.length) {
        this.deleteChannel(t);
        return
      }
      this.setState({
        channels: this.updateChannel(t, e => ({
          ...e,
          deleted: !0
        }))
      }), p.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.markGuildRead = e => {
      h.default.wait(() => (0, g.default)([e], w.AnalyticsSections.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: f().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      m.bulkAck(this.state.channels.map(e => ({
        channelId: e.channelId,
        messageId: e.newestUnreadMessageId
      }))), this.setState({
        channels: []
      })
    }, this.toggle = e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        channels: a,
        collapsedChannels: l,
        loadState: s
      } = this.state, i = f().findIndex(a, e => e.channelId === t), r = a[i], o = !r.collapsed;
      l[t] = o, (0, A.updateUserChannelSettings)(n, t, e => {
        e.collapsedInInbox = o
      }, A.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: i,
        collapsedChannels: l,
        loadState: "done" !== s || o || r.isFullyLoaded ? s : "loaded",
        channels: this.updateChannel(t, e => ({
          ...e,
          collapsed: o
        }))
      }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !F.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !T.default.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          let t = I.default.hasLoaded(e.guildId);
          return {
            ...e,
            isFullyLoaded: t,
            hasLoadedAnything: t
          }
        }
      });
      this.setState({
        channels: e
      })
    }
  }
}

function Y(e, t) {
  var n;
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = y.default.getMessages(e.channelId),
    s = l.toArray().filter(t => U.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= U.default.compare(t.id, e.newestUnreadMessageId));
  if (s.length === e.messages.length && s.every((t, n) => e.messages[n] === t) && a) return e;
  let i = null != l.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
    r = s[s.length - 1],
    o = U.default.compare(null == r ? void 0 : r.id, e.newestUnreadMessageId) >= 0 || s.length >= H;
  return {
    ...e,
    messages: s,
    hasLoadedAnything: e.hasLoadedAnything || i || t,
    hasLoadedFirst: e.hasLoadedFirst || i || t,
    isFullyLoaded: e.isFullyLoaded || i && o || t && !l.hasMoreAfter
  }
}

function z() {
  let e = function() {
      var e, t;
      let n = {},
        a = null !== (t = null === (e = v.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
      for (let e in a)
        for (let t in a[e].channels) {
          let l = R.default.getChannel(t);
          (!(t in n) || (null == l ? void 0 : l.guild_id) === e) && (n[t] = a[e].channels[t].collapsedInInbox)
        }
      return n
    }(),
    t = function(e) {
      let t = [];
      return R.default.getSortedPrivateChannels().forEach(n => K(e, t, null, n.id)), D.default.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let a = M.default.getSelectableChannelIds(n),
          l = _.default.getActiveJoinedUnreadThreadsForGuild(n);
        a.forEach(a => {
          var s;
          K(e, t, n, a);
          let i = null !== (s = l[a]) && void 0 !== s ? s : {};
          for (let a in i) K(e, t, n, a)
        })
      }), f().sortBy(t, e => e.sortOrder)
    }(e),
    n = f().uniq(t.map(e => e.guildId)).filter(k.isNotNullish);
  return h.default.dispatch({
    type: "INBOX_OPEN",
    guildIds: n
  }), {
    collapsedChannels: e,
    loadState: "loaded",
    channels: t,
    scrollToChannelIndex: null
  }
}

function K(e, t, n, a) {
  if (null == a) return;
  let l = R.default.getChannel(a);
  if (null == l || !x.THREAD_CHANNEL_TYPES.has(l.type) && F.default.isGuildOrCategoryOrChannelMuted(n, l.id)) return;
  if (l.isPrivate()) {
    if (0 === j.default.getMentionCount(a)) return
  } else if (!(0, N.getHasImportantUnread)(l) && 0 === j.default.getMentionCount(a)) return;
  if (!l.isPrivate() && !L.default.can(w.Permissions.READ_MESSAGE_HISTORY, l)) return;
  let s = j.default.ackMessageId(a);
  if (null == s) {
    let e = O.default.getGuild(l.guild_id);
    if (null == e || null == e.joinedAt) return;
    s = U.default.fromTimestamp(e.joinedAt.getTime())
  }
  let i = j.default.getOldestUnreadMessageId(a),
    r = j.default.lastMessageId(a),
    o = j.default.getMentionCount(a),
    u = o > 0 || l.isPrivate();
  if (null == r || U.default.compare(s, r) >= 0) return;
  let d = {
    guildId: n,
    channelId: a,
    oldestReadMessageId: s,
    oldestUnreadMessageId: i,
    newestUnreadMessageId: r,
    collapsed: !0 === e[a],
    hasLoadedAnything: !1,
    hasLoadedFirst: !1,
    isFullyLoaded: !1,
    hasError: !1,
    hasMentionsOrUnreads: u,
    mentionCount: o,
    sortOrder: function(e, t, n) {
      let a = R.default.getChannel(t);
      if (S.default.isFavorite(t)) return 0;
      if (a.isPrivate()) return 1;
      if (j.default.getMentionCount(t) > 0) return 2;
      if (null != n) {
        let e = U.default.extractTimestamp(n);
        if (Date.now() - e > W) return 7;
        if (Date.now() - e > Q) return 5
      }
      if (a.isThread()) {
        let e = (0, C.computeThreadNotificationSetting)(a);
        return e === G.ThreadMemberFlags.ALL_MESSAGES ? 3 : e === G.ThreadMemberFlags.NO_MESSAGES ? 6 : 4
      } {
        let n = F.default.getChannelMessageNotifications(e, t),
          a = n === w.UserNotificationSettings.NULL ? F.default.getMessageNotifications(e) : n;
        return a === w.UserNotificationSettings.ALL_MESSAGES ? 3 : a === w.UserNotificationSettings.NO_MESSAGES ? 6 : 4
      }
    }(n, a, r)
  };
  l.isNSFW() && !b.default.didAgree(l.guild_id) ? t.push({
    ...d,
    type: "nsfw"
  }) : l.isForumLikeChannel() ? t.push({
    ...d,
    type: "forum"
  }) : t.push({
    ...d,
    type: "messages",
    messages: []
  })
}
let Q = 2 * P.default.Millis.DAY,
  W = 10 * P.default.Millis.DAY;

function X(e) {
  let [t, n] = r.useState(() => new V(z(), e)), [a, l] = r.useState(!1), s = r.useRef(Date.now()), [i, o] = r.useState(() => z());
  return r.useEffect(() => {
    let e = e => o(e);
    return t.on("change", e), o(t.state), () => {
      t.off("change", e)
    }
  }, [t]), r.useEffect(() => {
    if (null == i || i.channels.length > 0 || a) return;
    let t = Date.now(),
      r = z();
    0 === r.channels.length || t - s.current < 10 * P.default.Millis.SECOND ? l(!0) : (s.current = Date.now(), n(new V(r, e)))
  }, [i, a, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (y.default.addChangeListener(t.reloadMessages), () => y.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (F.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => F.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (T.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => T.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (I.default.addChangeListener(t.handleActiveThreadsStoreChange), () => I.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
}