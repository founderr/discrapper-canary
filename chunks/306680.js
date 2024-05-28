"use strict";
let i;
n.r(t), n.d(t, {
  shouldBadgeMessage: function() {
    return eL
  }
}), n("47120"), n("411104"), n("653041"), n("789020");
var r, s, a, o = n("512722"),
  l = n.n(o),
  u = n("913527"),
  d = n.n(u),
  _ = n("442837"),
  c = n("544891"),
  E = n("846519"),
  I = n("283693"),
  T = n("570140"),
  f = n("317381"),
  S = n("358221"),
  h = n("702321"),
  A = n("430198"),
  m = n("710845"),
  N = n("924301"),
  p = n("57132"),
  O = n("355298"),
  C = n("869404"),
  R = n("333984"),
  g = n("572804"),
  L = n("140155"),
  v = n("178480"),
  D = n("398758"),
  M = n("55557"),
  y = n("344185"),
  P = n("569471"),
  U = n("195663"),
  b = n("581883"),
  G = n("131704"),
  w = n("386438"),
  k = n("70956"),
  B = n("630388"),
  V = n("823379"),
  x = n("931619"),
  F = n("709054"),
  H = n("314897"),
  Y = n("433355"),
  j = n("592125"),
  W = n("796974"),
  K = n("828695"),
  z = n("486472"),
  Z = n("430824"),
  X = n("517100"),
  Q = n("375954"),
  q = n("496675"),
  J = n("699516"),
  $ = n("944486"),
  ee = n("9156"),
  et = n("594174"),
  en = n("451478"),
  ei = n("981631"),
  er = n("918559"),
  es = n("176505"),
  ea = n("765305"),
  eo = n("490897");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eu = new m.default("ReadStateStore");
__OVERLAY__ && (i = n("237997").default);
let ed = ei.BasicPermissions.VIEW_CHANNEL | ei.BasicPermissions.READ_MESSAGE_HISTORY,
  e_ = $.default.getChannelId(),
  ec = null,
  eE = null,
  eI = !1,
  eT = [],
  ef = !1,
  eS = null,
  eh = {},
  eA = (0, M.default)(),
  em = 30 * k.default.Millis.DAY;

function eN() {
  return F.default.fromTimestamp(Date.now() - em)
}
let ep = 0,
  eO = 0,
  eC = null;

function eR() {
  ep = Date.now() - 7 * k.default.Millis.DAY, eO = Date.now() - 3 * k.default.Millis.DAY, clearTimeout(eC), eC = setTimeout(() => {
    T.default.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, 1 * k.default.Millis.HOUR)
}

function eg(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eL(e, t) {
  let n = j.default.getChannel(e.channel_id);
  return !(null == n || J.default.isBlocked(e.author.id)) && (!!((0, g.default)({
    message: e,
    userId: t.id,
    suppressEveryone: ee.default.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: ee.default.isSuppressRolesEnabled(n.guild_id)
  }) || ev(n)) || !1)
}

function ev(e) {
  return null != e && e.isPrivate() && !ee.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function eD(e) {
  if (0 === eT.length) {
    ef = !1, null == e || e();
    return
  }
  ef = !0;
  let t = eT.splice(0, 100);
  await eM(() => c.HTTP.post({
    url: ei.Endpoints.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: !0
  })), await (0, E.timeoutPromise)(1e3), eD(e)
}
async function eM(e) {
  let t = H.default.getId();
  for (let n = 0; n < 3; n++) try {
    return await e()
  } catch (e) {
    if (eu.error("", e), n + 1 < 3 && (await (0, E.timeoutPromise)((n + 1) * 2e3), await x.default.awaitOnline(), t !== H.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function ey(e) {
  if (e.type !== eo.ReadStateTypes.CHANNEL) return !1;
  let t = j.default.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != f.default.getConnectedActivityChannelId() && f.default.getActivityPanelMode() === er.ActivityPanelModes.PANEL && f.default.getFocusedLayout() === er.FocusedActivityLayouts.NO_CHAT || X.default.isIdle() || !e.canTrackUnreads()) return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
    let t = eh[e.channelId],
      n = null != t && en.default.isFocused(t),
      r = null != i && i.isInstanceFocused() && i.isPinned(ei.OverlayWidgets.TEXT);
    if (!n && !r) return !1
  }
  if (n && !e._persisted) return !0;
  if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !W.default.isAtBottom(e.channelId)) return !1;
  let r = S.default.getLayout(e.channelId),
    s = S.default.getChatOpen(e.channelId);
  if (!s && (r === ei.ChannelLayouts.NO_CHAT || r === ei.ChannelLayouts.FULL_SCREEN) || null == eh[e.channelId]) return !1;
  let a = Q.default.getMessages(e.channelId);
  return null != a && !!a.ready && !a.loadingMore && (!eA || !!s) && !0
}(a = r || (r = {}))[a.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", a[a.IS_THREAD = 2] = "IS_THREAD";
class eP {
  static forEach(e) {
    for (let n of Object.keys(eP._readStates)) {
      var t;
      let i = null !== (t = eP._readStates[parseInt(n)]) && void 0 !== t ? t : {};
      for (let t of Object.keys(i))
        if (!1 === e(i[t])) break
    }
  }
  static get(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL,
      i = null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == i && (i = new eP(e, n), null == eP._readStates[n] && (eP._readStates[n] = {}), eP._readStates[n][e] = i), i
  }
  static getGuildSentinels(e) {
    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
      unreadsSentinel: 0
    }), this._guildReadStateSentinels[e]
  }
  static resetGuildSentinels() {
    this._guildReadStateSentinels = {}
  }
  static getIfExists(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e]
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of eP._mentionChannels) {
      let n = eP.getIfExists(t);
      null != n && n.canHaveMentions() ? e.push(t) : eP._mentionChannels.delete(t)
    }
    return e
  }
  static getValue(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL,
      i = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == s ? r : i(s)
  }
  static clear(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return (null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eP._readStates[n][e], eP._mentionChannels.delete(e), !0)
  }
  static clearAll() {
    eP._readStates = {}, eP._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: a,
      _persisted: o,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: f,
      oldestUnreadMessageIdStale: S,
      estimated: h,
      _mentionCount: A,
      flags: m,
      lastViewed: N
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: a,
      _persisted: o,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: f,
      oldestUnreadMessageIdStale: S,
      estimated: h,
      _mentionCount: A,
      flags: m,
      lastViewed: N
    };
    let p = {
      channelId: t,
      type: n,
      _guildId: i,
      _persisted: o,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      lastPinTimestamp: T,
      _mentionCount: A,
      flags: m
    };
    return null != N && N > 0 && (p.lastViewed = N), r && (p._isThread = r, p._isActiveThread = s, p._isJoinedThread = a), p
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveJoinedThread: s,
      _isActiveThread: a,
      _isJoinedThread: o,
      _persisted: l,
      loadedMessages: u,
      _lastMessageId: d,
      _lastMessageTimestamp: _,
      _ackMessageId: c,
      _ackMessageTimestamp: E,
      ackPinTimestamp: I,
      isManualAck: T,
      lastPinTimestamp: f,
      _oldestUnreadMessageId: S,
      oldestUnreadMessageIdStale: h,
      estimated: A,
      _unreadCount: m,
      _mentionCount: N,
      flags: p,
      lastViewed: O
    } = e;
    this.channelId = t, this.type = null != n ? n : eo.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != s ? (this._isActiveThread = s, this._isJoinedThread = s) : (this._isActiveThread = null != a && a, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = d, this._lastMessageTimestamp = _, this._ackMessageId = c, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = f, this._oldestUnreadMessageId = S, this.oldestUnreadMessageIdStale = null != h && h, this.estimated = null != A && A, this._unreadCount = null != m ? m : 0, this._mentionCount = N, this.flags = p, this.lastViewed = O, eP._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eP._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    null != this._guildId && eP.getGuildSentinels(this._guildId).unreadsSentinel++
  }
  get oldestUnreadMessageId() {
    return this._oldestUnreadMessageId
  }
  set oldestUnreadMessageId(e) {
    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
  }
  get lastMessageId() {
    return this._lastMessageId
  }
  set lastMessageId(e) {
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
  }
  get unreadCount() {
    var e;
    return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
  }
  set unreadCount(e) {
    (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
  }
  get mentionCount() {
    return this._mentionCount
  }
  set mentionCount(e) {
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eP._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eP._mentionChannels.add(this.channelId)
  }
  guessAckMessageId() {
    let e = Q.default.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      i = et.default.getCurrentUser();
    return e.forEach(e => {
      if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
      else if (0 === n) return t = e.id, !1
    }, this, !0), t
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = j.default.getChannel(this.channelId);
    return this._guildId = null != e ? e.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== eo.ReadStateTypes.CHANNEL) return !1;
    let e = j.default.getChannel(this.channelId);
    return null != e && e.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = arguments.length > 2 ? arguments[2] : void 0;
    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
      let e = et.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        r = !1,
        s = !1,
        a = null,
        o = Q.default.getMessages(this.channelId);
      o.forAll(n => {
        if (r) {
          var o;
          this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
        } else r = n.id === this._ackMessageId;
        F.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eL(n, e) && this.mentionCount++, a = null != a ? a : n.id) : s = !0
      }), this.estimated = !o.hasPresent() || !(r || s) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : a
    }
    null != r && (this.mentionCount = r)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (F.default.compare(this.ackMessageId, t) >= 0) return;
    let i = N.default.getGuildScheduledEventsForGuild(e),
      r = this.getAckTimestamp();
    if (isNaN(r)) return;
    let s = null !== (n = this._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(r),
      a = null,
      o = 0;
    i.forEach(e => {
      (0, N.isEventUpcoming)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, s) > 0 && o++)
    }), this.lastMessageId = a, this.mentionCount = o
  }
  canTrackUnreads() {
    if (this.type !== eo.ReadStateTypes.CHANNEL) return !0;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
    let e = j.default.getBasicChannel(this.channelId);
    return null != e && ("basicPermissions" in e ? w.default.has(e.basicPermissions, ei.BasicPermissions.VIEW_CHANNEL) : !A.default.isChannelGated(this.guildId, this.channelId) || q.default.can(ei.Permissions.VIEW_CHANNEL, e))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, C.isMessageRequestOrSpamRequest)(this.channelId, [O.default, R.default]) || !this._isThread && (0, D.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < ep || !ee.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, C.isMessageRequestOrSpamRequest)(this.channelId, [O.default, R.default]) || (0, D.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < ep) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    if (t && (this._lastMessageTimestamp < ep || !ee.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: !1
    };
    if ("basicPermissions" in e) {
      if (!w.default.has(e.basicPermissions, ei.BasicPermissions.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: !1
      }
    } else if (A.default.isChannelGated(this.guildId, this.channelId) && !q.default.can(ei.Permissions.VIEW_CHANNEL, e)) return {
      mentionCount: 0,
      unread: !1
    };
    return i || r ? {
      mentionCount: this.mentionCount,
      unread: !1
    } : {
      mentionCount: this.mentionCount,
      unread: this.getAckTimestamp() < this._lastMessageTimestamp
    }
  }
  hasUnread() {
    return this.getAckTimestamp() < this._lastMessageTimestamp
  }
  hasRecentlyVisitedAndRead() {
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eO && b.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
  }
  isForumPostUnread() {
    return !!this._isActiveThread && this.hasUnread()
  }
  hasMentions() {
    return this.getMentionCount() > 0
  }
  getMentionCount() {
    return this.mentionCount
  }
  hasUnreadOrMentions() {
    return this.hasMentions() || this.hasUnread()
  }
  ackPins() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    if (this.type !== eo.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
    if (null == e) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
      this._persisted = !0, eM(() => c.HTTP.post({
        url: ei.Endpoints.PINS_ACK(this.channelId),
        oldFormErrors: !0
      }))
    }
    let t = eg(e);
    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
  }
  ack(e) {
    let {
      messageId: t,
      local: n = !1,
      immediate: i = !1,
      force: r = !1,
      isExplicitUserAction: s = !1,
      location: a = {
        section: ei.AnalyticsSections.CHANNEL
      },
      trackAnalytics: o = !0
    } = e;
    if (!this._shouldAck(r, n, s) || !r && !this.canTrackUnreads()) return !1;
    let l = this.hasMentions();
    return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, eI && (this.ackedWhileCached = !0), function(e) {
      if (null == e) return;
      let t = eP.get(e);
      if (t.type !== eo.ReadStateTypes.CHANNEL) return;
      let n = j.default.getChannel(t.channelId);
      if (null == n || !n.isForumPost() || null == n.parent_id) return;
      let i = n.parent_id,
        r = eP.get(i);
      y.default.hasLoaded(n.guild_id) && F.default.keys(y.default.getThreadsForParent(n.guild_id, i)).every(e => e0.hasOpenedThread(e) || 0 > F.default.compare(e, r.ackMessageId)) && r.ack({})
    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === eo.ReadStateTypes.CHANNEL ? this._ack(a, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
  }
  takeSnapshot() {
    let {
      default: e
    } = n("888369"), t = this.guildId;
    return {
      unread: this.hasUnread(),
      mentionCount: this.mentionCount,
      guildUnread: null == t ? null : e.hasUnread(t),
      guildMentionCount: null == t ? null : e.getMentionCount(t),
      takenAt: Date.now()
    }
  }
  clearOutgoingAck() {
    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
  }
  _shouldAck(e, t, n) {
    var i;
    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== eo.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = j.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
  }
  _ack(e, t) {
    let {
      outgoingAck: i
    } = this;
    if (null == i) return;
    let r = H.default.getId(),
      s = eE;
    this._persisted = !0;
    let a = this.recalculateFlags(),
      o = a === this.flags ? void 0 : a;
    eM(() => c.HTTP.post({
      url: ei.Endpoints.MESSAGE_ACK(this.channelId, i),
      body: {
        token: eE,
        last_viewed: this.lastViewed,
        flags: o
      },
      oldFormErrors: !0
    })).then(e => {
      null != e && (eE === s && r === H.default.getId() && (eE = e.body.token), T.default.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.e("54076").then(n.bind(n, "189229")).then(e => {
        let {
          default: t
        } = e;
        t(this.channelId)
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== eo.ReadStateTypes.CHANNEL) return;
    let e = j.default.getChannel(this.channelId);
    if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
  }
  _nonChannelAck() {
    let e;
    let {
      outgoingAck: t,
      channelId: n,
      type: i
    } = this;
    if (null != t) {
      switch (i) {
        case eo.ReadStateTypes.GUILD_HOME:
        case eo.ReadStateTypes.GUILD_EVENT:
        case eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          e = ei.Endpoints.GUILD_FEATURE_ACK(n, t, i);
          break;
        case eo.ReadStateTypes.NOTIFICATION_CENTER:
        case eo.ReadStateTypes.MESSAGE_REQUESTS:
          e = ei.Endpoints.USER_NON_CHANNEL_ACK(t, i);
          break;
        default:
          return
      }
      this._persisted = !0, eM(() => c.HTTP.post({
        url: e,
        body: {},
        oldFormErrors: !0
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      n = j.default.getBasicChannel(this.channelId);
    eu.log("Deleting ReadState", this.channelId, this.type, {
      remote: t,
      persisted: this._persisted,
      channelMissing: null == n,
      isOld: eB(this, eN()),
      validType: null != n && G.ALL_CHANNEL_TYPES.has(n.type),
      readableType: null != n && (0, G.isReadableType)(n.type),
      oldThreadCutoff: eN(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), t && this._persisted && c.HTTP.del({
      url: ei.Endpoints.CHANNEL_ACK(this.channelId),
      body: {
        version: 2,
        read_state_type: this.type
      },
      oldFormErrors: !0
    }), null === (e = eP._readStates[this.type]) || void 0 === e || delete e[this.channelId], eP._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== z.default.totalUnavailableGuilds) return !1;
    if (null != this.type && this.type !== eo.ReadStateTypes.CHANNEL) return ! function(e) {
      switch (e.type) {
        case eo.ReadStateTypes.GUILD_HOME:
        case eo.ReadStateTypes.GUILD_EVENT:
        case eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          return null != Z.default.getGuild(e.channelId);
        case eo.ReadStateTypes.NOTIFICATION_CENTER:
          var t;
          return F.default.cast(null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
          return !0
      }
    }(this);
    let t = j.default.getBasicChannel(this.channelId);
    if (null == t) return !!eB(this, e) || !1;
    return !!G.ALL_CHANNEL_TYPES.has(t.type) && (!(0, G.isReadableType)(t.type) || !(0, G.isPrivate)(t.type) && (!!(G.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
      let i = e.guildId;
      return !(null != i && y.default.isActive(i, t.parent_id, e.channelId)) && eB(e, n)
    }(this, t, e)) || !!(this.mentionCount > 0) && !q.default.canBasicChannel(ed, t) || !1))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = ew(this.guildId, this.channelId), this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === eo.ReadStateTypes.GUILD_EVENT || this.type === eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = Z.default.getGuild(this.channelId);
    else if ((0, es.isStaticChannelRoute)(this.channelId)) e = Z.default.getGuild(this.guildId);
    else {
      let t = j.default.getChannel(this.channelId);
      if (null != t) {
        let n = t.getGuildId();
        e = Z.default.getGuild(n)
      }
    }
    return null != e ? isNaN(t = ek(e)) && (t = F.default.extractTimestamp(this.channelId)) : t = F.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = !0;
    let e = j.default.getChannel(this.channelId);
    if (null == e) return eu.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
    let t = this.guildId,
      n = null != t && y.default.isActive(t, e.parent_id, this.channelId),
      i = P.default.hasJoined(this.channelId);
    return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / k.default.Millis.DAY);
    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: !0,
      trackAnalytics: !1
    }))
  }
  constructor(e, t = eo.ReadStateTypes.CHANNEL) {
    el(this, "channelId", void 0), el(this, "type", eo.ReadStateTypes.CHANNEL), el(this, "_guildId", void 0), el(this, "_isThread", void 0), el(this, "_isActiveThread", void 0), el(this, "_isJoinedThread", void 0), el(this, "_isResourceChannel", void 0), el(this, "_persisted", void 0), el(this, "loadedMessages", void 0), el(this, "_lastMessageId", void 0), el(this, "_lastMessageTimestamp", void 0), el(this, "_ackMessageId", void 0), el(this, "_ackMessageTimestamp", void 0), el(this, "isManualAck", void 0), el(this, "ackPinTimestamp", void 0), el(this, "lastPinTimestamp", void 0), el(this, "_oldestUnreadMessageId", void 0), el(this, "oldestUnreadMessageIdStale", void 0), el(this, "estimated", void 0), el(this, "_unreadCount", void 0), el(this, "_mentionCount", void 0), el(this, "flags", void 0), el(this, "lastViewed", void 0), el(this, "outgoingAck", void 0), el(this, "outgoingAckTimer", null), el(this, "ackMessageIdAtChannelSelect", null), el(this, "ackedWhileCached", void 0), el(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function eU(e) {
  e.forEach(e => {
    if ((0, G.isReadableType)(e.type)) {
      let t = eP.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), G.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
    }
  })
}

function eb(e) {
  e.forEach(e => {
    if ((0, G.isReadableType)(e.type)) {
      var t;
      let n = eP.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eg(e.last_pin_timestamp), n._isResourceChannel = (0, B.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), G.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
    }
  })
}

function eG(e) {
  (function(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(t => {
      if (!G.ALL_CHANNEL_TYPES.has(t.type)) return;
      let n = eP.get(t.id);
      n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eg(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(ew(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = ew(e.id, t.id))
    })
  })(e),
  function(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eP.getIfExists(e.id, eo.ReadStateTypes.GUILD_EVENT)) return;
    let i = eP.get(e.id, eo.ReadStateTypes.GUILD_EVENT);
    i._guildId = e.id;
    let r = 0,
      s = null,
      a = null !== (n = i._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach(e => {
      F.default.compare(e.id, s) > 0 && (s = e.id), F.default.compare(e.id, a) > 0 && r++
    }), i.lastMessageId = s, i.mentionCount = r
  }(e),
  function(e) {
    eP.get(e.id, eo.ReadStateTypes.GUILD_HOME).lastMessageId = F.default.fromTimestamp(d()(Date.now()).subtract(24, "h").valueOf())
  }(e),
  function(e) {
    let t = Z.default.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let i = eP.get(t.id, eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  }(e)
}
el(eP, "_guildReadStateSentinels", {}), el(eP, "_readStates", {}), el(eP, "_mentionChannels", new Set);

function ew(e, t) {
  var n, i, r;
  let s = j.default.getChannel(t),
    a = Z.default.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
    o = (null == s ? void 0 : s.isForumPost()) ? 0 : ek(a),
    l = (null !== (r = null === (n = P.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3;
  isNaN(l) && (l = -5e3);
  let u = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
    d = null != u ? new Date(u).getTime() - 1 : 0;
  isNaN(d) && (d = 0);
  let _ = Math.max(l, d);
  return _ <= 0 && (_ = F.default.extractTimestamp(t) - 1), (isNaN(_) || _ <= 0) && (_ = 0), isNaN(o) ? _ : Math.max(o, _)
}

function ek(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) isNaN(e.joinedAt.getTime());
    else if ("string" == typeof e.joinedAt) isNaN(new Date(e.joinedAt).getTime());
    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function eB(e, t) {
  return !!(e.mentionCount > 0) || !(F.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0) && !0
}

function eV(e) {
  if (null != e) {
    let t = eP.get(e);
    if (ey(t)) return t.ack({})
  }
  return !1
}

function ex() {
  null != eS && clearTimeout(eS)
}

function eF(e) {
  if (null != e.channelUpdates) {
    var t;
    eU(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
  }
  if (null != e.channelTimestampUpdates)
    for (let t of e.channelTimestampUpdates) {
      let e = eP.get(t.id);
      null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eg(t.last_pin_timestamp))
    }
}

function eH(e) {
  let {
    channelId: t
  } = e;
  eP.get(t).rebuildChannelState()
}

function eY(e) {
  let {
    threads: t
  } = e;
  eb(t)
}

function ej(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t) eb(e.map(e => {
    let {
      thread: t
    } = e;
    return t
  }).filter(V.isNotNullish));
  eb(n)
}

function eW(e) {
  let t = et.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function eK(e) {
  let {
    channel: t
  } = e;
  return eP.clear(t.id)
}

function ez() {
  let e = Y.default.getCurrentSidebarChannelId(e_),
    t = !1;
  return ec !== e ? (t = eX(ec), ec = e) : t = eV(e) || t, t
}

function eZ(e) {
  if (null != e) eP.get(e).isManualAck = !1
}

function eX(e) {
  if (null == e) return !1;
  let t = eP.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
}

function eQ(e) {
  let {
    channelId: t,
    messageId: n,
    manual: i,
    newMentionCount: r
  } = e, s = eP.get(t);
  return i ? (s.rebuildChannelState(n, !0, r), !0) : n !== s._ackMessageId && s.ack({
    messageId: n,
    local: !0
  })
}

function eq(e) {
  let {
    id: t,
    ackType: n,
    ackedId: i,
    local: r
  } = e;
  return eJ(t, n, i, r)
}

function eJ(e, t, n, i) {
  var r;
  let s = eP.get(e, t);
  return n !== s.ackMessageId && s.lastMessageId !== s.ackMessageId && (null != s.lastMessageId || 0 !== s.mentionCount) && (n = null !== (r = null != n ? n : s.lastMessageId) && void 0 !== r ? r : F.default.fromTimestamp(s.getAckTimestamp()), s.ack({
    messageId: n,
    local: null == i || i
  }))
}
class e$ extends(s = _.default.Store) {
  initialize() {
    this.waitFor(W.default, et.default, Z.default, z.default, j.default, $.default, Q.default, q.default, S.default, y.default, P.default, Y.default, N.default, K.default, A.default, ee.default, en.default, L.default, O.default, b.default, R.default), this.syncWith([Y.default], ez)
  }
  getReadStatesByChannel() {
    var e;
    return null !== (e = eP._readStates[eo.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    var t;
    return null === (t = eP._readStates[eo.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
  }
  hasUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.isForumPostUnread(), !1)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL,
      n = eP.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
    if ((0, h.default)(e)) {
      if (n > 0) return 1
    }
    return n
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    return eP.getValue(e.id, eo.ReadStateTypes.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, i, r), {
      mentionCount: 0,
      unread: !1
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return eP.getValue(e, eo.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e.estimated, !1)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.ReadStateTypes.CHANNEL;
    return eP.getValue(e, t, e => e._persisted, !1)
  }
  hasUnreadPins(e) {
    return eP.getValue(e, eo.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
  }
  isNewForumThread(e, t, n) {
    let i = eP.get(t);
    if (!0 === eP.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= F.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
    let r = ek(n);
    return F.default.extractTimestamp(e) > r
  }
  getAllReadStates(e) {
    let t = [];
    return eP.forEach(n => {
      switch (n.type) {
        case eo.ReadStateTypes.GUILD_HOME:
        case eo.ReadStateTypes.GUILD_EVENT:
        case eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          null != Z.default.getGuild(n.channelId) && t.push(n.serialize(e));
          break;
        case eo.ReadStateTypes.NOTIFICATION_CENTER:
        case eo.ReadStateTypes.MESSAGE_REQUESTS:
          var i;
          F.default.cast(null === (i = et.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return eP.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return eP.getMentionChannelIds()
  }
  getNonChannelAckId(e) {
    var t;
    let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null == n ? null : eP.get(n, e).ackMessageId
  }
  getSnapshot(e, t) {
    let n = eP.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
}
el(e$, "displayName", "ReadStateStore");
let e0 = new e$(T.default, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      var n, i;
      let r = t[e],
        s = eP.getIfExists(e);
      if (null != s)
        for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(V.isNotNullish)) 1 === F.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id)
    }
  },
  CONNECTION_OPEN: function(e) {
    var t, n;
    let {
      guilds: i,
      relationships: r,
      initialPrivateChannels: s,
      readState: a
    } = e;
    eR(), eE = null, !eI && !a.partial && eP.clearAll(), eI = !1, a.entries.forEach(e => {
      var t, n, i;
      let r = null !== (t = e.read_state_type) && void 0 !== t ? t : eo.ReadStateTypes.CHANNEL;
      if (r !== eo.ReadStateTypes.CHANNEL) {
        ;
        e = {
          id: (i = e).id,
          read_state_type: i.read_state_type,
          mention_count: i.badge_count,
          last_message_id: i.last_acked_id
        }
      }
      let s = eP.get(e.id, r);
      s._persisted = !0, s._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, s.flags = e.flags, s.lastViewed = e.last_viewed;
      let a = j.default.getBasicChannel(e.id);
      null != a && (0, G.isThread)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? s.ackMessageId = F.default.fromTimestamp(ew(a.guild_id, a.id)) : s.ackedWhileCached ? -1 === F.default.compare(s.ackMessageId, e.last_message_id) && (s.ackMessageId = e.last_message_id) : s.ackMessageId = e.last_message_id, s.ackedWhileCached = void 0, s.ackPinTimestamp = eg(e.last_pin_timestamp), eP._mentionChannels.delete(s.channelId), s._mentionCount > 0 && s.canHaveMentions() && eP._mentionChannels.add(s.channelId)
    }), eP.resetGuildSentinels();
    let o = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != o && (eP.get(o, eo.ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = F.default.fromTimestamp(Date.now())), function(e) {
        let t = et.default.getCurrentUser();
        if (!(0, v.inNotificationCenterEnabled)() || null == t) return 0;
        let n = eP.get(t.id, eo.ReadStateTypes.NOTIFICATION_CENTER);
        e.forEach(e => {
          if (null == e.since || e.type !== ei.RelationshipTypes.PENDING_INCOMING) return;
          let t = new Date(e.since).getTime();
          (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = F.default.fromTimestamp(t))
        })
      }(r), eU(s), i)) eU(null !== (n = e.channels) && void 0 !== n ? n : []), eF(e), eG(e);
    ex(), eS = setTimeout(() => (function(e) {
      let t = eN();
      for (let i of e) {
        var n;
        let e = null !== (n = i.read_state_type) && void 0 !== n ? n : eo.ReadStateTypes.CHANNEL,
          r = eP.get(i.id, e);
        r.shouldDeleteReadState(t) && r.delete()
      }
    })(a.entries), 10 * k.default.Millis.SECOND)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    eU(t)
  },
  LOGOUT: ex,
  OVERLAY_INITIALIZE: function(e) {
    let {
      readStates: t,
      selectedChannelId: n
    } = e;
    eR(), eE = null, e_ = n, ec = Y.default.getCurrentSidebarChannelId(e_), eP.clearAll(), t.forEach(e => {
      let t = eP.get(e.channelId);
      t.deserializeForOverlay(e), t.type === eo.ReadStateTypes.CHANNEL && t.rebuildChannelState()
    })
  },
  CACHE_LOADED: function(e) {
    let {
      readStates: t
    } = e;
    eI = !0, eR(), t.forEach(e => {
      var t;
      let n = null !== (t = e.type) && void 0 !== t ? t : eo.ReadStateTypes.CHANNEL;
      e.type = n, null == eP._readStates[n] && (eP._readStates[n] = {}), eP._readStates[n][e.channelId] = (0, I.dangerouslyCast)(e, eP)
    })
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = eN();
    eP.forEach(e => {
      e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
    }), eU(null !== (t = n.channels) && void 0 !== t ? t : []), eF(n), eG(n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isAfter: n,
      messages: i
    } = e, r = eP.get(t);
    r.loadedMessages = !0;
    let s = Q.default.getMessages(t);
    null != s && (i.length > 0 && 1 === F.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && s.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), eb(i.map(e => e.thread).filter(V.isNotNullish))
  },
  MESSAGE_CREATE: function(e) {
    let t, n, {
        channelId: r,
        message: s,
        isPushNotification: a
      } = e,
      o = eP.get(r);
    o.lastMessageId = s.id;
    let l = et.default.getCurrentUser(),
      u = j.default.getBasicChannel(r);
    if (null != s.author && null != l && s.author.id === l.id && !ei.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(s.type)) return null != o.outgoingAck && o.clearOutgoingAck(), eQ({
      channelId: r,
      messageId: s.id,
      manual: !1
    });
    let d = (0, p.getRootNavigationRefIfInExperiment)();
    if ((null == d ? void 0 : d.isReady()) === !0) {
      let e = d.getCurrentRoute();
      if (S.default.getChatOpen(o.channelId)) t = o.channelId;
      else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
      else if ((null == e ? void 0 : e.name) === "guilds") {
        var _;
        t = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId
      }
    } else null == d && (t = $.default.getChannelId(), n = Y.default.getCurrentSidebarChannelId(t));
    let c = t === r || n === r;
    if (c && ey(o) && !a || null != i && i.isInstanceFocused() && c && i.isInstanceUILocked() && i.isPinned(ei.OverlayWidgets.TEXT)) return o.ack({
      messageId: s.id
    });
    (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = s.id), o.unreadCount++, !(null != s.author && J.default.isBlocked(s.author.id) || s.type === ei.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === ei.ChannelTypes.GROUP_DM) && function(e, t, n) {
      if (null != t && (0, g.isRawMessageMentioned)({
          rawMessage: e,
          userId: t.id,
          suppressEveryone: ee.default.isSuppressEveryoneEnabled(n.guildId),
          suppressRoles: ee.default.isSuppressRolesEnabled(n.guildId)
        })) return !0;
      let i = j.default.getChannel(e.channel_id);
      return !!ev(i) || !!ee.default.mentionOnAllMessages && null != i && !i.isVocal() && !ee.default.isChannelMuted(i.guild_id, i.id) && ee.default.resolvedMessageNotifications(i) === ei.UserNotificationSettings.ALL_MESSAGES || !1
    }(s, l, o) && o.mentionCount++
  },
  MESSAGE_DELETE: eH,
  MESSAGE_DELETE_BULK: eH,
  MESSAGE_ACK: eQ,
  CHANNEL_ACK: function(e) {
    let {
      channelId: t,
      messageId: n,
      immediate: i = !1,
      force: r = !1,
      context: s,
      location: a
    } = e, o = eP.get(t), l = o.ack({
      messageId: n,
      local: s !== ei.CURRENT_APP_CONTEXT,
      immediate: i,
      force: r,
      isExplicitUserAction: !0,
      location: a
    });
    return null != n ? (o.rebuildChannelState(), !0) : l
  },
  CHANNEL_LOCAL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eP.get(t).ack({
      messageId: void 0,
      local: !0,
      immediate: void 0,
      force: void 0,
      isExplicitUserAction: !0
    })
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e;
    return eP.get(t).ackPins(n)
  },
  CHANNEL_PINS_UPDATE: function(e) {
    let {
      channelId: t,
      lastPinTimestamp: n
    } = e, i = eP.get(t), r = eg(n);
    return i.lastPinTimestamp !== r && (i.lastPinTimestamp = r, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = Y.default.getCurrentSidebarChannelId(t), i = j.default.getChannel(t);
    if (null != i) {
      var r;
      let e = eP.get(i.id);
      e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : F.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
    }
    eZ(e_), eZ(ec);
    let s = !1;
    return e_ !== t && (s = eX(e_) || s, s = eX(ec) || s), (e_ === t || (null == i ? void 0 : i.type) != null && ei.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (s = eV(t) || s), e_ === t && (s = eV(n) || s), e_ = t, ec = n, s
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return;
    let n = eP.get(t);
    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
      isExplicitUserAction: !0
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, G.isReadableType)(t.type)) return !1;
    let n = eP.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eg(t.lastPinTimestamp)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    (function(e) {
      if (!G.ALL_CHANNEL_TYPES.has(e.type)) return 0;
      let t = eP.get(e.id);
      t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === H.default.getId() && (t.loadedMessages = !0)
    })(t),
    function(e) {
      let t = e.parent_id;
      eP.get(t).lastMessageId = e.id;
      let n = et.default.getCurrentUser();
      if (e.ownerId === (null == n ? void 0 : n.id)) eP.get(e.id)._persisted = !0, eQ({
        channelId: t,
        messageId: e.id,
        manual: !1
      })
    }(t)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return !!G.ALL_CHANNEL_TYPES.has(t.type) && eP.get(t.id).syncThreadSettings()
  },
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      if (!G.ALL_CHANNEL_TYPES.has(e.type)) return;
      let t = eP.get(e.id);
      if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eg(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.default.hasJoined(e.id), e.isForumPost()) {
        let t = eP.get(e.parent_id);
        0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
      }
    })
  },
  LOAD_THREADS_SUCCESS: eY,
  LOAD_ARCHIVED_THREADS_SUCCESS: eY,
  SEARCH_FINISH: ej,
  MOD_VIEW_SEARCH_FINISH: ej,
  THREAD_MEMBER_UPDATE: function(e) {
    let {
      id: t
    } = e;
    return eP.get(t).syncThreadSettings()
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return (0, U.doesThreadMembersActionAffectMe)(e) && eP.get(e.id).syncThreadSettings()
  },
  CHANNEL_DELETE: eK,
  THREAD_DELETE: eK,
  WINDOW_FOCUS: function(e) {
    let t = !1;
    for (let [n, i] of F.default.entries(eh)) i === e.windowId && (t = function(e, t) {
      if (null == e) return !1;
      let n = eP.get(e);
      return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eV(e)
    }(n, e.focused) || t);
    return t
  },
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
    let {
      channelId: t
    } = e;
    return eV(t)
  },
  CURRENT_USER_UPDATE: function() {
    eE = null
  },
  DRAWER_OPEN: function(e) {
    let {
      drawer: t,
      isLandscapedTablet: n
    } = e;
    if (null != e_) {
      let e = eP.get(e_);
      !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
    }
    return eA = null != t && !n, !1
  },
  DRAWER_CLOSE: function() {
    return eA = !1, eV(e_)
  },
  BULK_ACK: function(e) {
    var t, n, i;
    let {
      channels: r,
      context: s,
      onFinished: a
    } = e;
    t = r.filter(e => null != e.messageId && e0.hasUnread(e.channelId, e.readStateType)), n = s, i = a, t.forEach(e => {
      let {
        channelId: t,
        messageId: n,
        readStateType: i
      } = e;
      eP.get(t, i).ack({
        messageId: n,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
      })
    }), n !== ei.CURRENT_APP_CONTEXT || (eT.push(...t.map(e => ({
      channel_id: e.channelId,
      message_id: e.messageId,
      read_state_type: e.readStateType
    }))), ef || eD(i))
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t,
      windowId: n
    } = e;
    return eh[t] !== n && (l()(void 0 === eh[t], "handleEnableAutomaticAck: channel already visible in another window"), eh[t] = n, eV(t))
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eh[t] = void 0, !1
  },
  GUILD_FEATURE_ACK: eq,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id, i = eP.get(t.guild_id, eo.ReadStateTypes.GUILD_EVENT);
    if (i.lastMessageId = t.id, eW(t)) {
      eq({
        type: "GUILD_FEATURE_ACK",
        id: n,
        ackType: eo.ReadStateTypes.GUILD_EVENT,
        ackedId: t.id,
        local: !1
      });
      return
    }!ee.default.isMuteScheduledEventsEnabled(n) && i.mentionCount++
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eW(t) || ![ea.GuildScheduledEventStatus.CANCELED, ea.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
    eP.get(n, eo.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eW(t)) return !1;
    eP.get(t.guild_id, eo.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return eP.clear(t.id, eo.ReadStateTypes.GUILD_EVENT)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = t.latest_onboarding_question_id;
    if (null == n) return;
    let i = eP.get(t.id, eo.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    return eV(t)
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
    let {
      channelId: t,
      chatOpen: n
    } = e
  },
  DECAY_READ_STATES: eR,
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
    var t;
    let {
      item: n
    } = e;
    if (!(0, v.inNotificationCenterEnabled)()) return !1;
    let i = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eP.get(i, eo.ReadStateTypes.NOTIFICATION_CENTER);
    r.lastMessageId = n.id;
    if (0, L.default.active) {
      eJ(i, eo.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
      return
    }
    r.mentionCount++
  },
  RELATIONSHIP_ADD: function(e) {
    let t = et.default.getCurrentUser();
    if (!(0, v.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== ei.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== ei.RelationshipTypes.FRIEND) return !1;
    let n = eP.get(t.id, eo.ReadStateTypes.NOTIFICATION_CENTER),
      i = e.relationship.type === ei.RelationshipTypes.FRIEND,
      r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
      s = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
    s < r && (n.lastMessageId = F.default.fromTimestamp(r), (0, L.default.active) ? eJ(t.id, eo.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
  },
  RELATIONSHIP_REMOVE: function(e) {
    let t = et.default.getCurrentUser();
    if (!(0, v.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== ei.RelationshipTypes.PENDING_INCOMING) return !1;
    let n = eP.get(t.id, eo.ReadStateTypes.NOTIFICATION_CENTER),
      i = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    var t;
    let {
      ids: n,
      optimistic: i
    } = e;
    if (i || !(0, v.inNotificationCenterEnabled)() || L.default.active) return !1;
    let r = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let s = eP.get(r, eo.ReadStateTypes.NOTIFICATION_CENTER);
    n.forEach(e => {
      0 > F.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0))
    })
  },
  USER_NON_CHANNEL_ACK: function(e) {
    var t;
    let {
      ackType: n,
      ackedId: i,
      local: r
    } = e, s = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != s && eJ(s, n, i, r)
  },
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of e.channels) {
      let e = eP.get(n.id),
        i = eg(n.lastPinTimestamp);
      (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) && (t = !0, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = i)
    }
    return t
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    return eX(t)
  },
  TRY_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eV(t)
  },
  MESSAGE_REQUEST_ACK: function(e) {
    var t;
    let {
      ackedId: n
    } = e, i = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eP.get(i, eo.ReadStateTypes.MESSAGE_REQUESTS);
    if (n === r.ackMessageId) return !1;
    r.ackMessageId = n, r.ack({
      messageId: n,
      isExplicitUserAction: !0
    })
  },
  MESSAGE_REQUEST_CLEAR_ACK: function(e) {
    var t;
    let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let i = eP.get(n, eo.ReadStateTypes.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0
  }
});
t.default = e0