n.d(t, {
  As: function() {
    return s
  },
  ZP: function() {
    return Q
  },
  hC: function() {
    return V
  },
  jd: function() {
    return i
  }
}), n(653041), n(47120);
var s, i, l, a, r = n(470079),
  o = n(836560),
  c = n(512722),
  u = n.n(c),
  d = n(392711),
  E = n.n(d),
  _ = n(570140),
  I = n(904245),
  T = n(45114),
  m = n(607070),
  N = n(853856),
  h = n(181945),
  C = n(220444),
  S = n(601070),
  A = n(344185),
  g = n(569471),
  p = n(723170),
  f = n(675478),
  R = n(581883),
  O = n(131704),
  M = n(592125),
  x = n(984933),
  v = n(731290),
  L = n(430824),
  Z = n(375954),
  P = n(496675),
  D = n(306680),
  j = n(771845),
  U = n(9156),
  b = n(70956),
  y = n(823379),
  B = n(709054),
  k = n(981631),
  G = n(124368);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {}))[l.Favorite = 0] = "Favorite", l[l.PrivateChannel = 1] = "PrivateChannel", l[l.Mentioned = 2] = "Mentioned", l[l.AllMessagesNotifications = 3] = "AllMessagesNotifications", l[l.GuildChannel = 4] = "GuildChannel", l[l.OldChannel = 5] = "OldChannel", l[l.NoNotifications = 6] = "NoNotifications", l[l.ReallyOldChannel = 7] = "ReallyOldChannel", (a = i || (i = {})).Loading = "loading", a.Loaded = "loaded", a.Done = "done";
let V = 25;
class w extends o.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== e) return;
    let n = !1,
      s = t.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed) return e.hasLoadedAnything ? e : {
          ...e,
          hasLoadedAnything: !0
        };
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (u()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
      });
    (!n || s.some((e, n) => e !== t[n])) && this.setState({
      channels: s,
      loadState: n ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return H(e, !1);
    if ("nsfw" === e.type) return {
      ...e,
      isFullyLoaded: !0,
      hasLoadedAnything: !0
    };
    if ("forum" === e.type) {
      let t = A.Z.hasLoaded(e.guildId);
      return {
        ...e,
        isFullyLoaded: t,
        hasLoadedAnything: t
      }
    } else(0, y.vE)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    I.Z.clearChannel(e.channelId);
    let t = I.Z.fetchMessages({
      channelId: e.channelId,
      limit: k.AQB,
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
          u()("messages" === e.type, "channel cannot change type");
          let n = H(e, !0);
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
          return u()("messages" === e.type, "channel cannot change type"), {
            ...H(e, !0),
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
    super(), F(this, "state", void 0), F(this, "scrollerRef", void 0), F(this, "maybeLoadMore", void 0), F(this, "reloadMessages", void 0), F(this, "getNumUnreadChannels", void 0), F(this, "markChannelRead", void 0), F(this, "markGuildRead", void 0), F(this, "deleteChannel", void 0), F(this, "markAllRead", void 0), F(this, "toggle", void 0), F(this, "handleUserGuildSettingsStoreChange", void 0), F(this, "handleJoinedThreadsStoreChange", void 0), F(this, "handleActiveThreadsStoreChange", void 0), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
      var e;
      let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? H(e, !1, !0) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      if (_.Z.wait(() => T.In(t, !0, void 0, n, {
          section: k.jXE.INBOX
        })), 1 === this.state.channels.length) {
        this.deleteChannel(t);
        return
      }
      this.setState({
        channels: this.updateChannel(t, e => ({
          ...e,
          deleted: !0
        }))
      }), m.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.markGuildRead = e => {
      _.Z.wait(() => (0, h.Z)([e], k.jXE.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: E().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      T.y5(this.state.channels.map(e => ({
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
        channels: s,
        collapsedChannels: i,
        loadState: l
      } = this.state, a = E().findIndex(s, e => e.channelId === t), r = s[a], o = !r.collapsed;
      i[t] = o, (0, f.BU)(n, t, e => {
        e.collapsedInInbox = o
      }, f.fy.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: a,
        collapsedChannels: i,
        loadState: "done" !== l || o || r.isFullyLoaded ? l : "loaded",
        channels: this.updateChannel(t, e => ({
          ...e,
          collapsed: o
        }))
      }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !U.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !g.Z.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          let t = A.Z.hasLoaded(e.guildId);
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

function H(e, t) {
  var n;
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = Z.Z.getMessages(e.channelId),
    l = i.toArray().filter(t => B.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= B.default.compare(t.id, e.newestUnreadMessageId));
  if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && s) return e;
  let a = null != i.getAfter(e.oldestReadMessageId) || (null === (n = l[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
    r = l[l.length - 1],
    o = B.default.compare(null == r ? void 0 : r.id, e.newestUnreadMessageId) >= 0 || l.length >= V;
  return {
    ...e,
    messages: l,
    hasLoadedAnything: e.hasLoadedAnything || a || t,
    hasLoadedFirst: e.hasLoadedFirst || a || t,
    isFullyLoaded: e.isFullyLoaded || a && o || t && !i.hasMoreAfter
  }
}

function Y() {
  let e = function() {
      var e, t;
      let n = {},
        s = null !== (t = null === (e = R.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
      for (let e in s)
        for (let t in s[e].channels) {
          let i = M.Z.getChannel(t);
          (!(t in n) || (null == i ? void 0 : i.guild_id) === e) && (n[t] = s[e].channels[t].collapsedInInbox)
        }
      return n
    }(),
    t = function(e) {
      let t = [];
      return M.Z.getSortedPrivateChannels().forEach(n => W(e, t, null, n.id)), j.ZP.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let s = x.ZP.getSelectableChannelIds(n),
          i = S.Z.getActiveJoinedUnreadThreadsForGuild(n);
        s.forEach(s => {
          var l;
          W(e, t, n, s);
          let a = null !== (l = i[s]) && void 0 !== l ? l : {};
          for (let s in a) W(e, t, n, s)
        })
      }), E().sortBy(t, e => e.sortOrder)
    }(e),
    n = E().uniq(t.map(e => e.guildId)).filter(y.lm);
  return _.Z.dispatch({
    type: "INBOX_OPEN",
    guildIds: n
  }), {
    collapsedChannels: e,
    loadState: "loaded",
    channels: t,
    scrollToChannelIndex: null
  }
}

function W(e, t, n, s) {
  if (null == s) return;
  let i = M.Z.getChannel(s);
  if (null == i || !O.Ec.has(i.type) && U.ZP.isGuildOrCategoryOrChannelMuted(n, i.id)) return;
  if (i.isPrivate()) {
    if (0 === D.ZP.getMentionCount(s)) return
  } else if (!(0, C.d)(i) && 0 === D.ZP.getMentionCount(s)) return;
  if (!i.isPrivate() && !P.Z.can(k.Plq.READ_MESSAGE_HISTORY, i)) return;
  let l = D.ZP.ackMessageId(s);
  if (null == l) {
    let e = L.Z.getGuild(i.guild_id);
    if (null == e || null == e.joinedAt) return;
    l = B.default.fromTimestamp(e.joinedAt.getTime())
  }
  let a = D.ZP.getOldestUnreadMessageId(s),
    r = D.ZP.lastMessageId(s),
    o = D.ZP.getMentionCount(s),
    c = o > 0 || i.isPrivate();
  if (null == r || B.default.compare(l, r) >= 0) return;
  let u = {
    guildId: n,
    channelId: s,
    oldestReadMessageId: l,
    oldestUnreadMessageId: a,
    newestUnreadMessageId: r,
    collapsed: !0 === e[s],
    hasLoadedAnything: !1,
    hasLoadedFirst: !1,
    isFullyLoaded: !1,
    hasError: !1,
    hasMentionsOrUnreads: c,
    mentionCount: o,
    sortOrder: function(e, t, n) {
      let s = M.Z.getChannel(t);
      if (N.Z.isFavorite(t)) return 0;
      if (s.isPrivate()) return 1;
      if (D.ZP.getMentionCount(t) > 0) return 2;
      if (null != n) {
        let e = B.default.extractTimestamp(n);
        if (Date.now() - e > K) return 7;
        if (Date.now() - e > z) return 5
      }
      if (s.isThread()) {
        let e = (0, p.J)(s);
        return e === G.iN.ALL_MESSAGES ? 3 : e === G.iN.NO_MESSAGES ? 6 : 4
      } {
        let n = U.ZP.getChannelMessageNotifications(e, t),
          s = n === k.bL.NULL ? U.ZP.getMessageNotifications(e) : n;
        return s === k.bL.ALL_MESSAGES ? 3 : s === k.bL.NO_MESSAGES ? 6 : 4
      }
    }(n, s, r)
  };
  i.isNSFW() && !v.Z.didAgree(i.guild_id) ? t.push({
    ...u,
    type: "nsfw"
  }) : i.isForumLikeChannel() ? t.push({
    ...u,
    type: "forum"
  }) : t.push({
    ...u,
    type: "messages",
    messages: []
  })
}
let z = 2 * b.Z.Millis.DAY,
  K = 10 * b.Z.Millis.DAY;

function Q(e) {
  let [t, n] = r.useState(() => new w(Y(), e)), [s, i] = r.useState(!1), l = r.useRef(Date.now()), [a, o] = r.useState(() => Y());
  return r.useEffect(() => {
    let e = e => o(e);
    return t.on("change", e), o(t.state), () => {
      t.off("change", e)
    }
  }, [t]), r.useEffect(() => {
    if (null == a || a.channels.length > 0 || s) return;
    let t = Date.now(),
      r = Y();
    0 === r.channels.length || t - l.current < 10 * b.Z.Millis.SECOND ? i(!0) : (l.current = Date.now(), n(new w(r, e)))
  }, [a, s, e]), r.useLayoutEffect(t.maybeLoadMore, [null == a ? void 0 : a.channels, null == a ? void 0 : a.loadState]), r.useEffect(() => (Z.Z.addChangeListener(t.reloadMessages), () => Z.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (U.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => U.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (g.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => g.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (A.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => A.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [a, t]
}