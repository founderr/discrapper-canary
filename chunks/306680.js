"use strict";
let i;
n.d(t, {
  Ex: function() {
    return eg
  }
}), n(47120), n(411104), n(653041), n(789020);
var r, s, o, a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  c = n(442837),
  d = n(544891),
  E = n(846519),
  I = n(283693),
  T = n(570140),
  h = n(317381),
  f = n(358221),
  S = n(702321),
  A = n(430198),
  N = n(710845),
  m = n(353926),
  O = n(924301),
  R = n(57132),
  p = n(355298),
  g = n(869404),
  C = n(333984),
  v = n(572804),
  L = n(140155),
  D = n(398758),
  M = n(725319),
  P = n(344185),
  y = n(569471),
  U = n(195663),
  b = n(581883),
  G = n(131704),
  w = n(386438),
  B = n(70956),
  x = n(630388),
  k = n(823379),
  V = n(931619),
  Z = n(709054),
  H = n(314897),
  F = n(433355),
  Y = n(592125),
  j = n(796974),
  W = n(486472),
  K = n(430824),
  z = n(517100),
  q = n(375954),
  X = n(496675),
  Q = n(699516),
  J = n(944486),
  $ = n(9156),
  ee = n(594174),
  et = n(451478),
  en = n(981631),
  ei = n(918559),
  er = n(176505),
  es = n(765305),
  eo = n(490897);

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let el = new N.Z("ReadStateStore");
__OVERLAY__ && (i = n(237997).Z);
let eu = en.S7T.VIEW_CHANNEL | en.S7T.READ_MESSAGE_HISTORY,
  e_ = J.Z.getChannelId(),
  ec = null,
  ed = null,
  eE = !1,
  eI = [],
  eT = !1,
  eh = null,
  ef = {},
  eS = 30 * B.Z.Millis.DAY;

function eA() {
  return Z.default.fromTimestamp(Date.now() - eS)
}
let eN = 0,
  em = 0,
  eO = null;

function eR() {
  eN = Date.now() - 7 * B.Z.Millis.DAY, em = Date.now() - 3 * B.Z.Millis.DAY, clearTimeout(eO), eO = setTimeout(() => {
    T.Z.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, 1 * B.Z.Millis.HOUR)
}

function ep(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eg(e, t) {
  let n = Y.Z.getChannel(e.channel_id);
  return !(null == n || Q.Z.isBlockedForMessage(e)) && (!!((0, v.ZP)({
    message: e,
    userId: t.id,
    suppressEveryone: $.ZP.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: $.ZP.isSuppressRolesEnabled(n.guild_id)
  }) || eC(n)) || !1)
}

function eC(e) {
  return null != e && e.isPrivate() && !$.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function ev(e) {
  if (0 === eI.length) {
    eT = !1, null == e || e();
    return
  }
  eT = !0;
  let t = eI.splice(0, 100);
  await eL(() => d.tn.post({
    url: en.ANM.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: !0
  })), await (0, E.GR)(1e3), ev(e)
}
async function eL(e) {
  let t = H.default.getId();
  for (let n = 0; n < 3; n++) try {
    return await e()
  } catch (e) {
    if (el.error("", e), n + 1 < 3 && (await (0, E.GR)((n + 1) * 2e3), await V.Z.awaitOnline(), t !== H.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function eD(e) {
  if (e.type !== eo.W.CHANNEL) return !1;
  let t = Y.Z.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != h.ZP.getConnectedActivityChannelId() && h.ZP.getActivityPanelMode() === ei.Ez.PANEL && h.ZP.getFocusedLayout() === ei.MI.NO_CHAT || z.Z.isIdle() || !e.canTrackUnreads()) return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
    let t = ef[e.channelId],
      n = null != t && et.Z.isFocused(t),
      r = null != i && i.isInstanceFocused() && i.isPinned(en.Odu.TEXT);
    if (!n && !r) return !1
  }
  if (n && !e._persisted) return !0;
  if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !j.Z.isAtBottom(e.channelId)) return !1;
  let r = f.Z.getLayout(e.channelId),
    s = f.Z.getChatOpen(e.channelId);
  if (!s && (r === en.AEg.NO_CHAT || r === en.AEg.FULL_SCREEN) || null == ef[e.channelId]) return !1;
  let o = q.Z.getMessages(e.channelId);
  return !!(null != o && o.ready && !o.loadingMore && ((0, M.Z)() || s)) || !1
}(o = r || (r = {}))[o.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", o[o.IS_THREAD = 2] = "IS_THREAD";
class eM {
  static forEach(e) {
    for (let n of Object.keys(eM._readStates)) {
      var t;
      let i = null !== (t = eM._readStates[parseInt(n)]) && void 0 !== t ? t : {};
      for (let t of Object.keys(i))
        if (!1 === e(i[t])) break
    }
  }
  static get(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
      i = null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == i && (i = new eM(e, n), null == eM._readStates[n] && (eM._readStates[n] = {}), eM._readStates[n][e] = i), i
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e]
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of eM._mentionChannels) {
      let n = eM.getIfExists(t);
      null != n && n.canHaveMentions() ? e.push(t) : eM._mentionChannels.delete(t)
    }
    return e
  }
  static getValue(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
      i = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == s ? r : i(s)
  }
  static clear(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return (null === (t = eM._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eM._readStates[n][e], eM._mentionChannels.delete(e), !0)
  }
  static clearAll() {
    eM._readStates = {}, eM._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: o,
      _persisted: a,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: c,
      _ackMessageTimestamp: d,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: f,
      estimated: S,
      _mentionCount: A,
      flags: N,
      lastViewed: m
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: o,
      _persisted: a,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: c,
      _ackMessageTimestamp: d,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: f,
      estimated: S,
      _mentionCount: A,
      flags: N,
      lastViewed: m
    };
    let O = {
      channelId: t,
      type: n,
      _guildId: i,
      _persisted: a,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: c,
      _ackMessageTimestamp: d,
      ackPinTimestamp: E,
      lastPinTimestamp: T,
      _mentionCount: A,
      flags: N
    };
    return null != m && m > 0 && (O.lastViewed = m), r && (O._isThread = r, O._isActiveThread = s, O._isJoinedThread = o), O
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveJoinedThread: s,
      _isActiveThread: o,
      _isJoinedThread: a,
      _persisted: l,
      loadedMessages: u,
      _lastMessageId: _,
      _lastMessageTimestamp: c,
      _ackMessageId: d,
      _ackMessageTimestamp: E,
      ackPinTimestamp: I,
      isManualAck: T,
      lastPinTimestamp: h,
      _oldestUnreadMessageId: f,
      oldestUnreadMessageIdStale: S,
      estimated: A,
      _unreadCount: N,
      _mentionCount: m,
      flags: O,
      lastViewed: R
    } = e;
    this.channelId = t, this.type = null != n ? n : eo.W.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != s ? (this._isActiveThread = s, this._isJoinedThread = s) : (this._isActiveThread = null != o && o, this._isJoinedThread = null != a && a), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = _, this._lastMessageTimestamp = c, this._ackMessageId = d, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = h, this._oldestUnreadMessageId = f, this.oldestUnreadMessageIdStale = null != S && S, this.estimated = null != A && A, this._unreadCount = null != N ? N : 0, this._mentionCount = m, this.flags = O, this.lastViewed = R, eM._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    if (null != this._guildId) eM.getGuildSentinels(this._guildId).unreadsSentinel++
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
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? Z.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? Z.default.extractTimestamp(e) : 0
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
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eM._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eM._mentionChannels.add(this.channelId)
  }
  guessAckMessageId() {
    let e = q.Z.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      i = ee.default.getCurrentUser();
    return e.forEach(e => {
      if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
      else if (0 === n) return t = e.id, !1
    }, this, !0), t
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = Y.Z.getChannel(this.channelId);
    return this._guildId = null != e ? e.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== eo.W.CHANNEL) return !1;
    let e = Y.Z.getChannel(this.channelId);
    return null != e && e.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = arguments.length > 2 ? arguments[2] : void 0;
    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
      let e = ee.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        r = !1,
        s = !1,
        o = null,
        a = q.Z.getMessages(this.channelId);
      a.forAll(n => {
        if (r) {
          var a;
          this.oldestUnreadMessageId = null !== (a = this._oldestUnreadMessageId) && void 0 !== a ? a : n.id
        } else r = n.id === this._ackMessageId;
        Z.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eg(n, e) && this.mentionCount++, o = null != o ? o : n.id) : s = !0
      }), this.estimated = !a.hasPresent() || !(r || s) && a.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : o
    }
    null != r && (this.mentionCount = r)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (Z.default.compare(this.ackMessageId, t) >= 0) return;
    let i = O.ZP.getGuildScheduledEventsForGuild(e),
      r = this.getAckTimestamp();
    if (isNaN(r)) return;
    let s = null !== (n = this._ackMessageId) && void 0 !== n ? n : Z.default.fromTimestamp(r),
      o = null,
      a = 0;
    i.forEach(e => {
      (0, O.Ld)(e) && (Z.default.compare(e.id, o) > 0 && (o = e.id), Z.default.compare(e.id, s) > 0 && a++)
    }), this.lastMessageId = o, this.mentionCount = a
  }
  canTrackUnreads() {
    if (this.type !== eo.W.CHANNEL) return !0;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
    let e = Y.Z.getBasicChannel(this.channelId);
    return null != e && ("basicPermissions" in e ? w.Z.has(e.basicPermissions, en.S7T.VIEW_CHANNEL) : !A.Z.isChannelGated(this.guildId, this.channelId) || X.Z.can(en.Plq.VIEW_CHANNEL, e))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, g.h3)(this.channelId, [p.Z, C.Z]) || !this._isThread && (0, D.r1)(this._guildId) && (this._lastMessageTimestamp < eN || !$.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, g.h3)(this.channelId, [p.Z, C.Z]) || (0, D.r1)(this._guildId) && this._lastMessageTimestamp < eN) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    if (t && (this._lastMessageTimestamp < eN || !$.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: !1
    };
    if ("basicPermissions" in e) {
      if (!w.Z.has(e.basicPermissions, en.S7T.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: !1
      }
    } else if (A.Z.isChannelGated(this.guildId, this.channelId) && !X.Z.can(en.Plq.VIEW_CHANNEL, e)) return {
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
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > em && b.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
    if (this.type !== eo.W.CHANNEL || !this.canTrackUnreads()) return !1;
    if (null == e) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
      this._persisted = !0, eL(() => d.tn.post({
        url: en.ANM.PINS_ACK(this.channelId),
        oldFormErrors: !0
      }))
    }
    let t = ep(e);
    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
  }
  ack(e) {
    let {
      messageId: t,
      local: n = !1,
      immediate: i = !1,
      force: r = !1,
      isExplicitUserAction: s = !1,
      location: o = {
        section: en.jXE.CHANNEL
      },
      trackAnalytics: a = !0
    } = e;
    if (!this._shouldAck(r, n, s) || !r && !this.canTrackUnreads()) return !1;
    let l = this.hasMentions();
    return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, eE && (this.ackedWhileCached = !0), function(e) {
      if (null == e) return;
      let t = eM.get(e);
      if (t.type !== eo.W.CHANNEL) return;
      let n = Y.Z.getChannel(t.channelId);
      if (null == n || !n.isForumPost() || null == n.parent_id) return;
      let i = n.parent_id,
        r = eM.get(i);
      P.Z.hasLoaded(n.guild_id) && Z.default.keys(P.Z.getThreadsForParent(n.guild_id, i)).every(e => eJ.hasOpenedThread(e) || 0 > Z.default.compare(e, r.ackMessageId)) && r.ack({})
    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === eo.W.CHANNEL ? this._ack(o, a) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
  }
  takeSnapshot() {
    let {
      default: e
    } = n(888369), t = this.guildId;
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
    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== eo.W.CHANNEL || this.loadedMessages || (null === (i = Y.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
  }
  _ack(e, t) {
    let {
      outgoingAck: i
    } = this;
    if (null == i) return;
    let r = H.default.getId(),
      s = ed;
    this._persisted = !0;
    let o = this.recalculateFlags(),
      a = o === this.flags ? void 0 : o;
    eL(() => d.tn.post({
      url: en.ANM.MESSAGE_ACK(this.channelId, i),
      body: {
        token: ed,
        last_viewed: this.lastViewed,
        flags: a
      },
      oldFormErrors: !0
    })).then(e => {
      null != e && (ed === s && r === H.default.getId() && (ed = e.body.token), T.Z.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.e("54076").then(n.bind(n, 189229)).then(e => {
        let {
          default: t
        } = e;
        t(this.channelId)
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== eo.W.CHANNEL) return;
    let e = Y.Z.getChannel(this.channelId);
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
        case eo.W.GUILD_HOME:
        case eo.W.GUILD_EVENT:
        case eo.W.GUILD_ONBOARDING_QUESTION:
          e = en.ANM.GUILD_FEATURE_ACK(n, t, i);
          break;
        case eo.W.NOTIFICATION_CENTER:
        case eo.W.MESSAGE_REQUESTS:
          e = en.ANM.USER_NON_CHANNEL_ACK(t, i);
          break;
        default:
          return
      }
      this._persisted = !0, eL(() => d.tn.post({
        url: e,
        body: {},
        oldFormErrors: !0
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      n = Y.Z.getBasicChannel(this.channelId);
    el.log("Deleting ReadState", this.channelId, this.type, {
      remote: t,
      persisted: this._persisted,
      channelMissing: null == n,
      isOld: ew(this, eA()),
      validType: null != n && G.AW.has(n.type),
      readableType: null != n && (0, G.Em)(n.type),
      oldThreadCutoff: eA(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), t && this._persisted && d.tn.del({
      url: en.ANM.CHANNEL_ACK(this.channelId),
      body: {
        version: 2,
        read_state_type: this.type
      },
      oldFormErrors: !0
    }), null === (e = eM._readStates[this.type]) || void 0 === e || delete e[this.channelId], eM._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== W.Z.totalUnavailableGuilds) return !1;
    if (null != this.type && this.type !== eo.W.CHANNEL) return ! function(e) {
      switch (e.type) {
        case eo.W.GUILD_HOME:
        case eo.W.GUILD_EVENT:
        case eo.W.GUILD_ONBOARDING_QUESTION:
          return null != K.Z.getGuild(e.channelId);
        case eo.W.NOTIFICATION_CENTER:
          var t;
          return Z.default.cast(null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
          return !0
      }
    }(this);
    let t = Y.Z.getBasicChannel(this.channelId);
    if (null == t) return !!ew(this, e) || !1;
    return !!G.AW.has(t.type) && (!(0, G.Em)(t.type) || !(0, G.hv)(t.type) && (!!(G.Ec.has(t.type) && function(e, t, n) {
      let i = e.guildId;
      return !(null != i && P.Z.isActive(i, t.parent_id, e.channelId)) && ew(e, n)
    }(this, t, e)) || !!(this.mentionCount > 0) && !X.Z.canBasicChannel(eu, t) || !1))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = eb(this.guildId, this.channelId), this._ackMessageId = Z.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === eo.W.GUILD_EVENT || this.type === eo.W.GUILD_ONBOARDING_QUESTION) e = K.Z.getGuild(this.channelId);
    else if ((0, er.AB)(this.channelId)) e = K.Z.getGuild(this.guildId);
    else {
      let t = Y.Z.getChannel(this.channelId);
      if (null != t) {
        let n = t.getGuildId();
        e = K.Z.getGuild(n)
      }
    }
    return null != e ? isNaN(t = eG(e)) && (t = Z.default.extractTimestamp(this.channelId)) : t = Z.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? Z.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = !0;
    let e = Y.Z.getChannel(this.channelId);
    if (null == e) return el.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
    let t = this.guildId,
      n = null != t && P.Z.isActive(t, e.parent_id, this.channelId),
      i = y.Z.hasJoined(this.channelId);
    return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - Z.DISCORD_EPOCH) / B.Z.Millis.DAY);
    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: !0,
      trackAnalytics: !1
    }))
  }
  constructor(e, t = eo.W.CHANNEL) {
    ea(this, "channelId", void 0), ea(this, "type", eo.W.CHANNEL), ea(this, "_guildId", void 0), ea(this, "_isThread", void 0), ea(this, "_isActiveThread", void 0), ea(this, "_isJoinedThread", void 0), ea(this, "_isResourceChannel", void 0), ea(this, "_persisted", void 0), ea(this, "loadedMessages", void 0), ea(this, "_lastMessageId", void 0), ea(this, "_lastMessageTimestamp", void 0), ea(this, "_ackMessageId", void 0), ea(this, "_ackMessageTimestamp", void 0), ea(this, "isManualAck", void 0), ea(this, "ackPinTimestamp", void 0), ea(this, "lastPinTimestamp", void 0), ea(this, "_oldestUnreadMessageId", void 0), ea(this, "oldestUnreadMessageIdStale", void 0), ea(this, "estimated", void 0), ea(this, "_unreadCount", void 0), ea(this, "_mentionCount", void 0), ea(this, "flags", void 0), ea(this, "lastViewed", void 0), ea(this, "outgoingAck", void 0), ea(this, "outgoingAckTimer", null), ea(this, "ackMessageIdAtChannelSelect", null), ea(this, "ackedWhileCached", void 0), ea(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function eP(e) {
  e.forEach(e => {
    if ((0, G.Em)(e.type)) {
      let t = eM.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(er.zZ.IS_GUILD_RESOURCE_CHANNEL), G.Ec.has(e.type) && t.syncThreadSettings()
    }
  })
}

function ey(e) {
  e.forEach(e => {
    if ((0, G.Em)(e.type)) {
      var t;
      let n = eM.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = ep(e.last_pin_timestamp), n._isResourceChannel = (0, x.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, er.zZ.IS_GUILD_RESOURCE_CHANNEL), G.Ec.has(e.type) && n.syncThreadSettings()
    }
  })
}

function eU(e) {
  (function(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(t => {
      if (!G.AW.has(t.type)) return;
      let n = eM.get(t.id);
      n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ep(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = Z.default.fromTimestamp(eb(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eb(e.id, t.id))
    })
  })(e),
  function(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eM.getIfExists(e.id, eo.W.GUILD_EVENT)) return;
    let i = eM.get(e.id, eo.W.GUILD_EVENT);
    i._guildId = e.id;
    let r = 0,
      s = null,
      o = null !== (n = i._ackMessageId) && void 0 !== n ? n : Z.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach(e => {
      Z.default.compare(e.id, s) > 0 && (s = e.id), Z.default.compare(e.id, o) > 0 && r++
    }), i.lastMessageId = s, i.mentionCount = r
  }(e),
  function(e) {
    eM.get(e.id, eo.W.GUILD_HOME).lastMessageId = Z.default.fromTimestamp(_()(Date.now()).subtract(24, "h").valueOf())
  }(e),
  function(e) {
    let t = K.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let i = eM.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  }(e)
}
ea(eM, "_guildReadStateSentinels", {}), ea(eM, "_readStates", {}), ea(eM, "_mentionChannels", new Set);

function eb(e, t) {
  var n, i, r;
  let s = Y.Z.getChannel(t),
    o = K.Z.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
    a = (null == s ? void 0 : s.isForumPost()) ? 0 : eG(o),
    l = (null !== (r = null === (n = y.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3;
  isNaN(l) && (l = -5e3);
  let u = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
    _ = null != u ? new Date(u).getTime() - 1 : 0;
  isNaN(_) && (_ = 0);
  let c = Math.max(l, _);
  return c <= 0 && (c = Z.default.extractTimestamp(t) - 1), (isNaN(c) || c <= 0) && (c = 0), isNaN(a) ? c : Math.max(a, c)
}

function eG(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) {
      let t = e.joinedAt.getTime();
      if (!isNaN(t)) return t
    } else if ("string" == typeof e.joinedAt) {
      let t = new Date(e.joinedAt).getTime();
      if (!isNaN(t)) return t
    } else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function ew(e, t) {
  return !!(e.mentionCount > 0) || !(Z.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && Z.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && Z.default.compare(e._lastMessageId, t) > 0) && !0
}

function eB(e) {
  if (null != e) {
    let t = eM.get(e);
    if (eD(t)) return t.ack({})
  }
  return !1
}

function ex() {
  null != eh && clearTimeout(eh)
}

function ek(e) {
  if (null != e.channelUpdates) {
    var t;
    eP(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
  }
  if (null != e.channelTimestampUpdates)
    for (let t of e.channelTimestampUpdates) {
      let e = eM.get(t.id);
      null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = ep(t.last_pin_timestamp))
    }
}

function eV(e) {
  let {
    channelId: t
  } = e;
  eM.get(t).rebuildChannelState()
}

function eZ(e) {
  let {
    threads: t
  } = e;
  ey(t)
}

function eH(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t) ey(e.map(e => {
    let {
      thread: t
    } = e;
    return t
  }).filter(k.lm));
  ey(n)
}

function eF(e) {
  let t = ee.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function eY(e) {
  let {
    channel: t
  } = e;
  return eM.clear(t.id)
}

function ej() {
  let e = F.ZP.getCurrentSidebarChannelId(e_),
    t = !1;
  return ec !== e ? (t = eK(ec), ec = e) : t = eB(e) || t, t
}

function eW(e) {
  if (null != e) eM.get(e).isManualAck = !1
}

function eK(e) {
  if (null == e) return !1;
  let t = eM.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
}

function ez(e) {
  let {
    channelId: t,
    messageId: n,
    manual: i,
    newMentionCount: r
  } = e, s = eM.get(t);
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
  return eX(t, n, i, r)
}

function eX(e, t, n, i) {
  var r;
  let s = eM.get(e, t);
  return n !== s.ackMessageId && s.lastMessageId !== s.ackMessageId && (null != s.lastMessageId || 0 !== s.mentionCount) && (n = null !== (r = null != n ? n : s.lastMessageId) && void 0 !== r ? r : Z.default.fromTimestamp(s.getAckTimestamp()), s.ack({
    messageId: n,
    local: null == i || i
  }))
}
class eQ extends(s = c.ZP.Store) {
  initialize() {
    let e = [j.Z, ee.default, K.Z, W.Z, Y.Z, J.Z, q.Z, X.Z, f.Z, P.Z, y.Z, F.ZP, O.ZP, m.Z, A.Z, $.ZP, et.Z, L.Z, p.Z, b.Z, C.Z];
    this.waitFor(...e), this.syncWith([F.ZP], ej)
  }
  getReadStatesByChannel() {
    var e;
    return null !== (e = eM._readStates[eo.W.CHANNEL]) && void 0 !== e ? e : {}
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    var t;
    return null === (t = eM._readStates[eo.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
  }
  hasUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
  }
  hasUnreadOrMentions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canBeUnread() && e.hasUnreadOrMentions(), !1)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.isForumPostUnread(), !1)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
      n = eM.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
    if ((0, S.Z)(e)) {
      if (n > 0) return 1
    }
    return n
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    return eM.getValue(e.id, eo.W.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, i, r), {
      mentionCount: 0,
      unread: !1
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return eM.getValue(e, eo.W.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e.estimated, !1)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
    return eM.getValue(e, t, e => e._persisted, !1)
  }
  hasUnreadPins(e) {
    return eM.getValue(e, eo.W.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
  }
  isNewForumThread(e, t, n) {
    let i = eM.get(t);
    if (!0 === eM.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= Z.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
    let r = eG(n);
    return Z.default.extractTimestamp(e) > r
  }
  getAllReadStates(e) {
    let t = [];
    return eM.forEach(n => {
      switch (n.type) {
        case eo.W.GUILD_HOME:
        case eo.W.GUILD_EVENT:
        case eo.W.GUILD_ONBOARDING_QUESTION:
          null != K.Z.getGuild(n.channelId) && t.push(n.serialize(e));
          break;
        case eo.W.NOTIFICATION_CENTER:
        case eo.W.MESSAGE_REQUESTS:
          var i;
          Z.default.cast(null === (i = ee.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return eM.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return eM.getMentionChannelIds()
  }
  getNonChannelAckId(e) {
    var t;
    let n = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null == n ? null : eM.get(n, e).ackMessageId
  }
  getSnapshot(e, t) {
    let n = eM.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
}
ea(eQ, "displayName", "ReadStateStore");
let eJ = new eQ(T.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      var n, i;
      let r = t[e],
        s = eM.getIfExists(e);
      if (null != s)
        for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(k.lm)) 1 === Z.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id)
    }
  },
  CONNECTION_OPEN: function(e) {
    var t, n;
    let {
      guilds: i,
      relationships: r,
      initialPrivateChannels: s,
      readState: o
    } = e;
    eR(), ed = null, !eE && !o.partial && eM.clearAll(), eE = !1, o.entries.forEach(e => {
      var t, n, i;
      let r = null !== (t = e.read_state_type) && void 0 !== t ? t : eo.W.CHANNEL;
      if (r !== eo.W.CHANNEL) {
        ;
        e = {
          id: (i = e).id,
          read_state_type: i.read_state_type,
          mention_count: i.badge_count,
          last_message_id: i.last_acked_id
        }
      }
      let s = eM.get(e.id, r);
      s._persisted = !0, s._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, s.flags = e.flags, s.lastViewed = e.last_viewed;
      let o = Y.Z.getBasicChannel(e.id);
      null != o && (0, G.Q5)(o.type) && (null == e.last_message_id || 0 === e.last_message_id) ? s.ackMessageId = Z.default.fromTimestamp(eb(o.guild_id, o.id)) : s.ackedWhileCached ? -1 === Z.default.compare(s.ackMessageId, e.last_message_id) && (s.ackMessageId = e.last_message_id) : s.ackMessageId = e.last_message_id, s.ackedWhileCached = void 0, s.ackPinTimestamp = ep(e.last_pin_timestamp), eM._mentionChannels.delete(s.channelId), s._mentionCount > 0 && s.canHaveMentions() && eM._mentionChannels.add(s.channelId)
    }), eM.resetGuildSentinels();
    let a = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != a && (eM.get(a, eo.W.NOTIFICATION_CENTER).lastMessageId = Z.default.fromTimestamp(Date.now())), function(e) {
        let t = ee.default.getCurrentUser();
        if (null == t) return 0;
        let n = eM.get(t.id, eo.W.NOTIFICATION_CENTER);
        e.forEach(e => {
          if (null == e.since || e.type !== en.OGo.PENDING_INCOMING) return;
          let t = new Date(e.since).getTime();
          (null != n.ackMessageId ? Z.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = Z.default.fromTimestamp(t))
        })
      }(r), eP(s), i)) eP(null !== (n = e.channels) && void 0 !== n ? n : []), ek(e), eU(e);
    ex(), eh = setTimeout(() => (function(e) {
      let t = eA();
      for (let i of e) {
        var n;
        let e = null !== (n = i.read_state_type) && void 0 !== n ? n : eo.W.CHANNEL,
          r = eM.get(i.id, e);
        r.shouldDeleteReadState(t) && r.delete()
      }
    })(o.entries), 10 * B.Z.Millis.SECOND)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    eP(t)
  },
  LOGOUT: ex,
  OVERLAY_INITIALIZE: function(e) {
    let {
      readStates: t,
      selectedChannelId: n
    } = e;
    eR(), ed = null, e_ = n, ec = F.ZP.getCurrentSidebarChannelId(e_), eM.clearAll(), t.forEach(e => {
      let t = eM.get(e.channelId);
      t.deserializeForOverlay(e), t.type === eo.W.CHANNEL && t.rebuildChannelState()
    })
  },
  CACHE_LOADED: function(e) {
    let {
      readStates: t
    } = e;
    eE = !0, eR(), t.forEach(e => {
      var t;
      let n = null !== (t = e.type) && void 0 !== t ? t : eo.W.CHANNEL;
      e.type = n, null == eM._readStates[n] && (eM._readStates[n] = {}), eM._readStates[n][e.channelId] = (0, I.gh)(e, eM)
    })
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = eA();
    eM.forEach(e => {
      e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
    }), eP(null !== (t = n.channels) && void 0 !== t ? t : []), ek(n), eU(n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isAfter: n,
      messages: i
    } = e, r = eM.get(t);
    r.loadedMessages = !0;
    let s = q.Z.getMessages(t);
    null != s && (i.length > 0 && 1 === Z.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && s.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), ey(i.map(e => e.thread).filter(k.lm))
  },
  MESSAGE_CREATE: function(e) {
    let t, n, {
        channelId: r,
        message: s,
        isPushNotification: o
      } = e,
      a = eM.get(r);
    a.lastMessageId = s.id;
    let l = ee.default.getCurrentUser(),
      u = Y.Z.getBasicChannel(r);
    if (null != s.author && null != l && s.author.id === l.id && !en.V$x.SELF_MENTIONABLE_SYSTEM.has(s.type)) return null != a.outgoingAck && a.clearOutgoingAck(), ez({
      channelId: r,
      messageId: s.id,
      manual: !1
    });
    let _ = (0, R.PP)();
    if ((null == _ ? void 0 : _.isReady()) === !0) {
      let e = _.getCurrentRoute();
      if (f.Z.getChatOpen(a.channelId)) t = a.channelId;
      else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
      else if ((null == e ? void 0 : e.name) === "guilds") {
        var c;
        t = null === (c = e.params) || void 0 === c ? void 0 : c.channelId
      }
    } else null == _ && (t = J.Z.getChannelId(), n = F.ZP.getCurrentSidebarChannelId(t));
    let d = t === r || n === r;
    if (d && eD(a) && !o || null != i && i.isInstanceFocused() && d && i.isInstanceUILocked() && i.isPinned(en.Odu.TEXT)) return a.ack({
      messageId: s.id
    });
    (null == a.oldestUnreadMessageId || a.oldestUnreadMessageIdStale) && (a.oldestUnreadMessageId = s.id), a.unreadCount++, !(Q.Z.isBlockedForMessage(s) || s.type === en.uaV.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === en.d4z.GROUP_DM) && function(e, t, n) {
      if (null != t && (0, v.Hl)({
          rawMessage: e,
          userId: t.id,
          suppressEveryone: $.ZP.isSuppressEveryoneEnabled(n.guildId),
          suppressRoles: $.ZP.isSuppressRolesEnabled(n.guildId)
        })) return !0;
      let i = Y.Z.getChannel(e.channel_id);
      return !!eC(i) || !!$.ZP.mentionOnAllMessages && null != i && !i.isVocal() && !$.ZP.isChannelMuted(i.guild_id, i.id) && $.ZP.resolvedMessageNotifications(i) === en.bL.ALL_MESSAGES || !1
    }(s, l, a) && a.mentionCount++
  },
  MESSAGE_DELETE: eV,
  MESSAGE_DELETE_BULK: eV,
  MESSAGE_ACK: ez,
  CHANNEL_ACK: function(e) {
    let {
      channelId: t,
      messageId: n,
      immediate: i = !1,
      force: r = !1,
      context: s,
      location: o
    } = e, a = eM.get(t), l = a.ack({
      messageId: n,
      local: s !== en.e3s,
      immediate: i,
      force: r,
      isExplicitUserAction: !0,
      location: o
    });
    return null != n ? (a.rebuildChannelState(), !0) : l
  },
  CHANNEL_LOCAL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eM.get(t).ack({
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
    return eM.get(t).ackPins(n)
  },
  CHANNEL_PINS_UPDATE: function(e) {
    let {
      channelId: t,
      lastPinTimestamp: n
    } = e, i = eM.get(t), r = ep(n);
    return i.lastPinTimestamp !== r && (i.lastPinTimestamp = r, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = F.ZP.getCurrentSidebarChannelId(t), i = Y.Z.getChannel(t);
    if (null != i) {
      var r;
      let e = eM.get(i.id);
      e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : Z.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
    }
    eW(e_), eW(ec);
    let s = !1;
    return e_ !== t && (s = eK(e_) || s, s = eK(ec) || s), (e_ === t || (null == i ? void 0 : i.type) != null && en.TPd.GUILD_THREADS_ONLY.has(i.type)) && (s = eB(t) || s), e_ === t && (s = eB(n) || s), e_ = t, ec = n, s
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return;
    let n = eM.get(t);
    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
      isExplicitUserAction: !0
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, G.Em)(t.type)) return !1;
    let n = eM.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ep(t.lastPinTimestamp)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    (function(e) {
      if (!G.AW.has(e.type)) return 0;
      let t = eM.get(e.id);
      t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === H.default.getId() && (t.loadedMessages = !0)
    })(t),
    function(e) {
      let t = e.parent_id;
      eM.get(t).lastMessageId = e.id;
      let n = ee.default.getCurrentUser();
      if (e.ownerId === (null == n ? void 0 : n.id)) eM.get(e.id)._persisted = !0, ez({
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
    return !!G.AW.has(t.type) && eM.get(t.id).syncThreadSettings()
  },
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      if (!G.AW.has(e.type)) return;
      let t = eM.get(e.id);
      if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = y.Z.hasJoined(e.id), e.isForumPost()) {
        let t = eM.get(e.parent_id);
        0 > Z.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
      }
    })
  },
  LOAD_THREADS_SUCCESS: eZ,
  LOAD_ARCHIVED_THREADS_SUCCESS: eZ,
  SEARCH_FINISH: eH,
  MOD_VIEW_SEARCH_FINISH: eH,
  THREAD_MEMBER_UPDATE: function(e) {
    let {
      id: t
    } = e;
    return eM.get(t).syncThreadSettings()
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return (0, U.s)(e) && eM.get(e.id).syncThreadSettings()
  },
  CHANNEL_DELETE: eY,
  THREAD_DELETE: eY,
  WINDOW_FOCUS: function(e) {
    let t = !1;
    for (let [n, i] of Z.default.entries(ef)) i === e.windowId && (t = function(e, t) {
      if (null == e) return !1;
      let n = eM.get(e);
      return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eB(e)
    }(n, e.focused) || t);
    return t
  },
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  },
  CURRENT_USER_UPDATE: function() {
    ed = null
  },
  DRAWER_OPEN: function() {
    if (null != e_) {
      let e = eM.get(e_);
      !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
    }
    return !1
  },
  DRAWER_CLOSE: function() {
    return eB(e_)
  },
  BULK_ACK: function(e) {
    var t, n, i;
    let {
      channels: r,
      context: s,
      onFinished: o
    } = e;
    t = r.filter(e => null != e.messageId && eJ.hasUnreadOrMentions(e.channelId, e.readStateType)), n = s, i = o, t.forEach(e => {
      let {
        channelId: t,
        messageId: n,
        readStateType: i
      } = e;
      eM.get(t, i).ack({
        messageId: n,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
      })
    }), n !== en.e3s || (eI.push(...t.map(e => ({
      channel_id: e.channelId,
      message_id: e.messageId,
      read_state_type: e.readStateType
    }))), eT || ev(i))
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t,
      windowId: n
    } = e;
    return ef[t] !== n && (l()(void 0 === ef[t], "handleEnableAutomaticAck: channel already visible in another window"), ef[t] = n, eB(t))
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ef[t] = void 0, !1
  },
  GUILD_FEATURE_ACK: eq,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id, i = eM.get(t.guild_id, eo.W.GUILD_EVENT);
    if (i.lastMessageId = t.id, eF(t)) {
      eq({
        type: "GUILD_FEATURE_ACK",
        id: n,
        ackType: eo.W.GUILD_EVENT,
        ackedId: t.id,
        local: !1
      });
      return
    }!$.ZP.isMuteScheduledEventsEnabled(n) && i.mentionCount++
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eF(t) || ![es.p1.CANCELED, es.p1.COMPLETED].includes(t.status)) return !1;
    eM.get(n, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eF(t)) return !1;
    eM.get(t.guild_id, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return eM.clear(t.id, eo.W.GUILD_EVENT)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = t.latest_onboarding_question_id;
    if (null == n) return;
    let i = eM.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
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
    } = e, i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eM.get(i, eo.W.NOTIFICATION_CENTER);
    r.lastMessageId = n.id;
    if (0, L.Z.active) {
      eX(i, eo.W.NOTIFICATION_CENTER, n.id, !1);
      return
    }
    r.mentionCount++
  },
  RELATIONSHIP_ADD: function(e) {
    let t = ee.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== en.OGo.PENDING_INCOMING && e.relationship.type !== en.OGo.FRIEND) return !1;
    let n = eM.get(t.id, eo.W.NOTIFICATION_CENTER),
      i = e.relationship.type === en.OGo.FRIEND,
      r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
      s = null != n.ackMessageId ? Z.default.extractTimestamp(n.ackMessageId) : 0;
    s < r && (n.lastMessageId = Z.default.fromTimestamp(r), (0, L.Z.active) ? eX(t.id, eo.W.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
  },
  RELATIONSHIP_REMOVE: function(e) {
    let t = ee.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== en.OGo.PENDING_INCOMING) return !1;
    let n = eM.get(t.id, eo.W.NOTIFICATION_CENTER),
      i = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? Z.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    var t;
    let {
      ids: n,
      optimistic: i
    } = e;
    if (i || L.Z.active) return !1;
    let r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let s = eM.get(r, eo.W.NOTIFICATION_CENTER);
    n.forEach(e => {
      0 > Z.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0))
    })
  },
  USER_NON_CHANNEL_ACK: function(e) {
    var t;
    let {
      ackType: n,
      ackedId: i,
      local: r
    } = e, s = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != s && eX(s, n, i, r)
  },
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of e.channels) {
      let e = eM.get(n.id),
        i = ep(n.lastPinTimestamp);
      (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) && (t = !0, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = i)
    }
    return t
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    return eK(t)
  },
  TRY_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  },
  MESSAGE_REQUEST_ACK: function(e) {
    var t;
    let {
      ackedId: n
    } = e, i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eM.get(i, eo.W.MESSAGE_REQUESTS);
    if (n === r.ackMessageId) return !1;
    r.ackMessageId = n, r.ack({
      messageId: n,
      isExplicitUserAction: !0
    })
  },
  MESSAGE_REQUEST_CLEAR_ACK: function(e) {
    var t;
    let n = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let i = eM.get(n, eo.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0
  }
});
t.ZP = eJ