let r;
n.d(t, {
    Ex: function () {
        return eP;
    }
});
var i,
    a,
    o = n(47120);
var s = n(411104);
var l = n(653041);
var u = n(789020);
var c = n(512722),
    d = n.n(c),
    _ = n(392711);
var E = n(913527),
    f = n.n(E),
    h = n(442837),
    p = n(544891),
    m = n(846519),
    I = n(283693),
    T = n(570140),
    g = n(317381),
    S = n(358221),
    A = n(702321),
    v = n(430198),
    N = n(710845),
    O = n(353926),
    R = n(924301),
    C = n(57132),
    y = n(355298),
    L = n(869404),
    b = n(333984),
    D = n(572804),
    M = n(140155),
    P = n(398758),
    U = n(725319),
    w = n(344185),
    x = n(569471),
    G = n(195663),
    k = n(581883),
    B = n(131704),
    F = n(386438),
    Z = n(70956),
    V = n(630388),
    H = n(823379),
    Y = n(931619),
    j = n(709054),
    W = n(314897),
    K = n(433355),
    z = n(592125),
    q = n(796974),
    Q = n(486472),
    X = n(430824),
    $ = n(517100),
    J = n(375954),
    ee = n(496675),
    et = n(699516),
    en = n(944486),
    er = n(9156),
    ei = n(594174),
    ea = n(451478),
    eo = n(981631),
    es = n(918559),
    el = n(176505),
    eu = n(765305),
    ec = n(490897);
function ed(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let e_ = new N.Z('ReadStateStore'),
    eE = 2;
__OVERLAY__ && (r = n(237997).Z);
let ef = eo.S7T.VIEW_CHANNEL | eo.S7T.READ_MESSAGE_HISTORY,
    eh = 100,
    ep = 1,
    em = en.Z.getChannelId(),
    eI = null,
    eT = null,
    eg = !1,
    eS = [],
    eA = !1,
    ev = null,
    eN = {};
let eO = 30 * Z.Z.Millis.DAY;
function eR() {
    return j.default.fromTimestamp(Date.now() - eO);
}
let eC = 0,
    ey = 0,
    eL = null;
function eb() {
    (eC = Date.now() - 7 * Z.Z.Millis.DAY),
        (ey = Date.now() - 3 * Z.Z.Millis.DAY),
        clearTimeout(eL),
        (eL = setTimeout(() => {
            T.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, 1 * Z.Z.Millis.HOUR));
}
function eD(e) {
    if (null == e) return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eM(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function eP(e, t) {
    let n = z.Z.getChannel(e.channel_id);
    return (
        !(null == n || et.Z.isBlockedForMessage(e)) &&
        (!!(
            (0, D.ZP)({
                message: e,
                userId: t.id,
                suppressEveryone: er.ZP.isSuppressEveryoneEnabled(n.guild_id),
                suppressRoles: er.ZP.isSuppressRolesEnabled(n.guild_id)
            }) || eU(n)
        ) ||
            !1)
    );
}
function eU(e) {
    return null != e && e.isPrivate() && !er.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ew(e) {
    if (0 === eS.length) {
        (eA = !1), null == e || e();
        return;
    }
    eA = !0;
    let t = eS.splice(0, eh);
    await eG(() =>
        p.tn.post({
            url: eo.ANM.BULK_ACK,
            body: { read_states: t },
            oldFormErrors: !0
        })
    ),
        await (0, m.GR)(1000 * ep),
        ew(e);
}
let ex = 3;
async function eG(e) {
    let t = W.default.getId();
    for (let n = 0; n < ex; n++)
        try {
            return await e();
        } catch (e) {
            if ((e_.error('', e), n + 1 < ex && (await (0, m.GR)((n + 1) * 2000), await Y.Z.awaitOnline(), t !== W.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function ek(e) {
    if (e.type !== ec.W.CHANNEL) return !1;
    let t = z.Z.getChannel(e.channelId),
        n = null != t && t.isForumPost();
    if ((null != g.ZP.getConnectedActivityChannelId() && g.ZP.getActivityPanelMode() === es.Ez.PANEL && g.ZP.getFocusedLayout() === es.MI.NO_CHAT) || $.Z.isIdle() || !e.canTrackUnreads()) return !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = eN[e.channelId],
            n = null != t && ea.Z.isFocused(t),
            i = null != r && r.isInstanceFocused() && r.isPinned(eo.Odu.TEXT);
        if (!n && !i) return !1;
    }
    if (n && !e._persisted) return !0;
    if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
    let i = !1;
    if (!(n && !e._isJoinedThread) && !q.Z.isAtBottom(e.channelId)) return i && e_.log('STAFF-ACK-LOG: Not at bottom', e.channelId), !1;
    let a = S.Z.getLayout(e.channelId),
        o = S.Z.getChatOpen(e.channelId);
    if ((!o && (a === eo.AEg.NO_CHAT || a === eo.AEg.FULL_SCREEN)) || null == eN[e.channelId]) return !1;
    let s = J.Z.getMessages(e.channelId);
    return null == s || !s.ready || s.loadingMore ? (i && e_.log('STAFF-ACK-LOG: Still loading messages', e.channelId), !1) : (0, U._)() || o ? (i && e_.log('STAFF-ACK-LOG: Acked', e.channelId), !0) : (i && e_.log('STAFF-ACK-LOG: Chat not focused', e.channelId), !1);
}
!(function (e) {
    (e[(e.IS_GUILD_CHANNEL = 1)] = 'IS_GUILD_CHANNEL'), (e[(e.IS_THREAD = 2)] = 'IS_THREAD');
})(i || (i = {}));
class eB {
    static forEach(e) {
        for (let n of Object.keys(eB._readStates)) {
            var t;
            let r = null !== (t = eB._readStates[parseInt(n)]) && void 0 !== t ? t : {};
            for (let t of Object.keys(r)) if (!1 === e(r[t])) break;
        }
    }
    static get(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            r = null === (t = eB._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == r && ((r = new eB(e, n)), null == eB._readStates[n] && (eB._readStates[n] = {}), (eB._readStates[n][e] = r)), r;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return null === (t = eB._readStates[n]) || void 0 === t ? void 0 : t[e];
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of eB._mentionChannels) {
            let n = eB.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : eB._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = null === (t = eB._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == a ? i : r(a);
    }
    static clear(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return (null === (t = eB._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eB._readStates[n][e], eB._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (eB._readStates = {}), eB._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: t, type: n, _guildId: r, _isThread: i, _isActiveThread: a, _isJoinedThread: o, _persisted: s, loadedMessages: l, _lastMessageId: u, _lastMessageTimestamp: c, _ackMessageId: d, _ackMessageTimestamp: _, ackPinTimestamp: E, isManualAck: f, lastPinTimestamp: h, _oldestUnreadMessageId: p, oldestUnreadMessageIdStale: m, estimated: I, _mentionCount: T, flags: g, lastViewed: S } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: r,
                _isThread: i,
                _isActiveThread: a,
                _isJoinedThread: o,
                _persisted: s,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: _,
                ackPinTimestamp: E,
                isManualAck: f,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: p,
                oldestUnreadMessageIdStale: m,
                estimated: I,
                _mentionCount: T,
                flags: g,
                lastViewed: S
            };
        let A = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: s,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            lastPinTimestamp: h,
            _mentionCount: T,
            flags: g
        };
        return null != S && S > 0 && (A.lastViewed = S), i && ((A._isThread = i), (A._isActiveThread = a), (A._isJoinedThread = o)), A;
    }
    deserializeForOverlay(e) {
        let { channelId: t, type: n, _guildId: r, _isThread: i, _isActiveJoinedThread: a, _isActiveThread: o, _isJoinedThread: s, _persisted: l, loadedMessages: u, _lastMessageId: c, _lastMessageTimestamp: d, _ackMessageId: _, _ackMessageTimestamp: E, ackPinTimestamp: f, isManualAck: h, lastPinTimestamp: p, _oldestUnreadMessageId: m, oldestUnreadMessageIdStale: I, estimated: T, _unreadCount: g, _mentionCount: S, flags: A, lastViewed: v } = e;
        (this.channelId = t), (this.type = null != n ? n : ec.W.CHANNEL), (this._guildId = r), (this._isThread = null != i && i), null != a ? ((this._isActiveThread = a), (this._isJoinedThread = a)) : ((this._isActiveThread = null != o && o), (this._isJoinedThread = null != s && s)), (this._persisted = !1 !== l), (this.loadedMessages = null != u && u), (this._lastMessageId = c), (this._lastMessageTimestamp = d), (this._ackMessageId = _), (this._ackMessageTimestamp = E), (this.ackPinTimestamp = f), (this.isManualAck = null != h && h), (this.lastPinTimestamp = p), (this._oldestUnreadMessageId = m), (this.oldestUnreadMessageIdStale = null != I && I), (this.estimated = null != T && T), (this._unreadCount = null != g ? g : 0), (this._mentionCount = S), (this.flags = A), (this.lastViewed = v), eB._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eB._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        if (null != this._guildId) eB.getGuildSentinels(this._guildId).unreadsSentinel++;
    }
    get oldestUnreadMessageId() {
        return this._oldestUnreadMessageId;
    }
    set oldestUnreadMessageId(e) {
        (this._oldestUnreadMessageId = e), (this.oldestUnreadMessageIdStale = !1);
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(e) {
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? j.default.extractTimestamp(e) : 0);
    }
    get unreadCount() {
        var e;
        return null !== (e = this._unreadCount) && void 0 !== e ? e : 0;
    }
    set unreadCount(e) {
        (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), (this._unreadCount = e);
    }
    get mentionCount() {
        return this._mentionCount;
    }
    set mentionCount(e) {
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), (this._mentionCount = e), eB._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eB._mentionChannels.add(this.channelId);
    }
    guessAckMessageId() {
        let e = J.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let t = null,
            n = this.mentionCount,
            r = ei.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (n > 0 && e.author.id !== (null == r ? void 0 : r.id)) --n;
                    else if (0 === n) return (t = e.id), !1;
                },
                this,
                !0
            ),
            t
        );
    }
    get guildId() {
        if (null != this._guildId) return this._guildId;
        let e = z.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ec.W.CHANNEL) return !1;
        let e = z.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), r && (this.mentionCount = 0), this.hasUnread())) {
            let e = ei.default.getCurrentUser(),
                t = this.getAckTimestamp(),
                i = !1,
                a = !1,
                o = null,
                s = J.Z.getMessages(this.channelId);
            s.forAll((n) => {
                if (i) {
                    var s;
                    this.oldestUnreadMessageId = null !== (s = this._oldestUnreadMessageId) && void 0 !== s ? s : n.id;
                } else i = n.id === this._ackMessageId;
                j.default.extractTimestamp(n.id) > t ? (this.unreadCount++, r && eP(n, e) && this.mentionCount++, (o = null != o ? o : n.id)) : (a = !0);
            }),
                (this.estimated = !s.hasPresent() || (!(i || a) && s.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : o);
        }
        null != i && (this.mentionCount = i);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (j.default.compare(this.ackMessageId, t) >= 0) return;
        let r = R.ZP.getGuildScheduledEventsForGuild(e),
            i = this.getAckTimestamp();
        if (isNaN(i)) return;
        let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : j.default.fromTimestamp(i),
            o = null,
            s = 0;
        r.forEach((e) => {
            (0, R.Ld)(e) && (j.default.compare(e.id, o) > 0 && (o = e.id), j.default.compare(e.id, a) > 0 && s++);
        }),
            (this.lastMessageId = o),
            (this.mentionCount = s);
    }
    canTrackUnreads() {
        if (this.type !== ec.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = z.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? F.Z.has(e.basicPermissions, eo.S7T.VIEW_CHANNEL) : !v.Z.isChannelGated(this.guildId, this.channelId) || ee.Z.can(eo.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, L.h3)(this.channelId, [y.Z, b.Z]) || (!this._isThread && (0, P.r1)(this._guildId) && (this._lastMessageTimestamp < eC || (!er.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, L.h3)(this.channelId, [y.Z, b.Z]) || ((0, P.r1)(this._guildId) && this._lastMessageTimestamp < eC)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (t && (this._lastMessageTimestamp < eC || (!er.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
            return {
                mentionCount: 0,
                unread: !1
            };
        if ('basicPermissions' in e) {
            if (!F.Z.has(e.basicPermissions, eo.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1
                };
        } else if (v.Z.isChannelGated(this.guildId, this.channelId) && !ee.Z.can(eo.Plq.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1
            };
        return r || i
            ? {
                  mentionCount: this.mentionCount,
                  unread: !1
              }
            : {
                  mentionCount: this.mentionCount,
                  unread: this.getAckTimestamp() < this._lastMessageTimestamp
              };
    }
    hasUnread() {
        return this.getAckTimestamp() < this._lastMessageTimestamp;
    }
    hasRecentlyVisitedAndRead() {
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > ey && k.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
    }
    isForumPostUnread() {
        return !!this._isActiveThread && this.hasUnread();
    }
    hasMentions() {
        return this.getMentionCount() > 0;
    }
    getMentionCount() {
        return this.mentionCount;
    }
    hasUnreadOrMentions() {
        return this.hasMentions() || this.hasUnread();
    }
    ackPins() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.type !== ec.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eG(() =>
                    p.tn.post({
                        url: eo.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0
                    })
                );
        }
        let t = eD(e);
        return (this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: t, local: n = !1, immediate: r = !1, force: i = !1, isExplicitUserAction: a = !1, location: o = { section: eo.jXE.CHANNEL }, trackAnalytics: s = !0 } = e;
        if (!this._shouldAck(i, n, a) || (!i && !this.canTrackUnreads())) return !1;
        let l = this.hasMentions();
        return (
            (this.estimated = !1),
            (this.snapshot = this.takeSnapshot()),
            (this.unreadCount = 0),
            (this.mentionCount = 0),
            (null != t || null != (t = this.lastMessageId)) &&
                ((this.ackMessageId = t),
                (this.isManualAck = !1),
                (this._persisted = !0),
                eg && (this.ackedWhileCached = !0),
                e1(this.channelId),
                n
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ec.W.CHANNEL ? this._ack(o, s) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
                              },
                              l || r ? 0 : 3000
                          )),
                      (this.outgoingAck = t)),
                !0)
        );
    }
    takeSnapshot() {
        let { default: e } = n(888369),
            t = this.guildId;
        return {
            unread: this.hasUnread(),
            mentionCount: this.mentionCount,
            guildUnread: null == t ? null : e.hasUnread(t),
            guildMentionCount: null == t ? null : e.getMentionCount(t),
            takenAt: Date.now()
        };
    }
    clearOutgoingAck() {
        (this.outgoingAck = null), null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null));
    }
    _shouldAck(e, t, n) {
        var r;
        return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== ec.W.CHANNEL || this.loadedMessages || (null === (r = z.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))) || !1;
    }
    _ack(e, t) {
        let { outgoingAck: r } = this;
        if (null == r) return;
        let i = W.default.getId(),
            a = eT;
        this._persisted = !0;
        let o = this.recalculateFlags(),
            s = o === this.flags ? void 0 : o;
        eG(() =>
            p.tn.post({
                url: eo.ANM.MESSAGE_ACK(this.channelId, r),
                body: {
                    token: eT,
                    last_viewed: this.lastViewed,
                    flags: s
                },
                oldFormErrors: !0
            })
        ).then((e) => {
            null != e &&
                (eT === a && i === W.default.getId() && (eT = e.body.token),
                T.Z.dispatch({ type: 'MESSAGE_ACKED' }),
                t &&
                    n
                        .e('54076')
                        .then(n.bind(n, 189229))
                        .then((e) => {
                            let { default: t } = e;
                            t(this.channelId);
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== ec.W.CHANNEL) return;
        let e = z.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let { outgoingAck: t, channelId: n, type: r } = this;
        if (null != t) {
            switch (r) {
                case ec.W.GUILD_HOME:
                case ec.W.GUILD_EVENT:
                case ec.W.GUILD_ONBOARDING_QUESTION:
                    e = eo.ANM.GUILD_FEATURE_ACK(n, t, r);
                    break;
                case ec.W.NOTIFICATION_CENTER:
                case ec.W.MESSAGE_REQUESTS:
                    e = eo.ANM.USER_NON_CHANNEL_ACK(t, r);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                eG(() =>
                    p.tn.post({
                        url: e,
                        body: {},
                        oldFormErrors: !0
                    })
                );
        }
    }
    delete() {
        var e;
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = z.Z.getBasicChannel(this.channelId);
        e_.log('Deleting ReadState', this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: e$(this, eR()),
            validType: null != n && B.AW.has(n.type),
            readableType: null != n && (0, B.Em)(n.type),
            oldThreadCutoff: eR(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            t &&
                this._persisted &&
                p.tn.del({
                    url: eo.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: eE,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0
                }),
            null === (e = eB._readStates[this.type]) || void 0 === e || delete e[this.channelId],
            eB._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== Q.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ec.W.CHANNEL) return !eJ(this);
        let t = z.Z.getBasicChannel(this.channelId);
        if (null == t) return !!e$(this, e) || !1;
        return !!B.AW.has(t.type) && (!(0, B.Em)(t.type) || (!(0, B.hv)(t.type) && (!!(B.Ec.has(t.type) && eX(this, t, e)) || (!!(this.mentionCount > 0) && !ee.Z.canBasicChannel(ef, t)) || !1)));
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eq(this.guildId, this.channelId)), (this._ackMessageId = j.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === ec.W.GUILD_EVENT || this.type === ec.W.GUILD_ONBOARDING_QUESTION) e = X.Z.getGuild(this.channelId);
        else if ((0, el.AB)(this.channelId)) e = X.Z.getGuild(this.guildId);
        else {
            let t = z.Z.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = X.Z.getGuild(n);
            }
        }
        return null != e ? isNaN((t = eQ(e))) && (t = j.default.extractTimestamp(this.channelId)) : (t = j.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = t), t;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? j.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = z.Z.getChannel(this.channelId);
        if (null == e) return e_.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let t = this.guildId,
            n = null != t && w.Z.isActive(t, e.parent_id, this.channelId),
            r = x.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== n || this._isJoinedThread !== r) && ((this._isActiveThread = n), (this._isJoinedThread = r), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - j.DISCORD_EPOCH) / Z.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, t = ec.W.CHANNEL) {
        ed(this, 'channelId', void 0), ed(this, 'type', ec.W.CHANNEL), ed(this, '_guildId', void 0), ed(this, '_isThread', void 0), ed(this, '_isActiveThread', void 0), ed(this, '_isJoinedThread', void 0), ed(this, '_isResourceChannel', void 0), ed(this, '_persisted', void 0), ed(this, 'loadedMessages', void 0), ed(this, '_lastMessageId', void 0), ed(this, '_lastMessageTimestamp', void 0), ed(this, '_ackMessageId', void 0), ed(this, '_ackMessageTimestamp', void 0), ed(this, 'isManualAck', void 0), ed(this, 'ackPinTimestamp', void 0), ed(this, 'lastPinTimestamp', void 0), ed(this, '_oldestUnreadMessageId', void 0), ed(this, 'oldestUnreadMessageIdStale', void 0), ed(this, 'estimated', void 0), ed(this, '_unreadCount', void 0), ed(this, '_mentionCount', void 0), ed(this, 'flags', void 0), ed(this, 'lastViewed', void 0), ed(this, 'outgoingAck', void 0), ed(this, 'outgoingAckTimer', null), ed(this, 'ackMessageIdAtChannelSelect', null), ed(this, 'ackedWhileCached', void 0), ed(this, 'snapshot', void 0), (this.channelId = e), (this.type = t), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function eF(e) {
    e.forEach((e) => {
        if ((0, B.Em)(e.type)) {
            let t = eB.get(e.id);
            (t._guildId = e.guild_id), (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eD(e.lastPinTimestamp)), (t._isResourceChannel = e.hasFlag(el.zZ.IS_GUILD_RESOURCE_CHANNEL)), B.Ec.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eZ(e) {
    e.forEach((e) => {
        if ((0, B.Em)(e.type)) {
            var t;
            let n = eB.get(e.id);
            (n.lastMessageId = e.last_message_id), (n.lastPinTimestamp = eD(e.last_pin_timestamp)), (n._isResourceChannel = (0, V.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, el.zZ.IS_GUILD_RESOURCE_CHANNEL)), B.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eV(e) {
    eW(e), eK(e), ej(e), ez(e);
}
function eH(e) {
    eY(e);
}
function eY(e) {
    let t = ei.default.getCurrentUser();
    if (null == t) return !1;
    let n = eB.get(t.id, ec.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== eo.OGo.PENDING_INCOMING) return;
        let t = new Date(e.since).getTime();
        (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, (n.lastMessageId = j.default.fromTimestamp(t)));
    });
}
function ej(e) {
    let t = 24;
    eB.get(e.id, ec.W.GUILD_HOME).lastMessageId = j.default.fromTimestamp(f()(Date.now()).subtract(t, 'h').valueOf());
}
function eW(e) {
    var t;
    null === (t = e.threads) ||
        void 0 === t ||
        t.forEach((t) => {
            if (!B.AW.has(t.type)) return;
            let n = eB.get(t.id);
            (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eD(t.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = null != t.member), null == n.ackMessageId && (n.ackMessageId = j.default.fromTimestamp(eq(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eq(e.id, t.id));
        });
}
function eK(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eB.getIfExists(e.id, ec.W.GUILD_EVENT)) return;
    let r = eB.get(e.id, ec.W.GUILD_EVENT);
    r._guildId = e.id;
    let i = 0,
        a = null,
        o = null !== (n = r._ackMessageId) && void 0 !== n ? n : j.default.fromTimestamp(r.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        j.default.compare(e.id, a) > 0 && (a = e.id), j.default.compare(e.id, o) > 0 && i++;
    }),
        (r.lastMessageId = a),
        (r.mentionCount = i);
}
function ez(e) {
    let t = X.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let r = eB.get(t.id, ec.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function eq(e, t) {
    var n, r, i;
    let a = z.Z.getChannel(t),
        o = X.Z.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
        s = (null == a ? void 0 : a.isForumPost()) ? 0 : eQ(o),
        l = (null !== (i = null === (n = x.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5000;
    isNaN(l) && (l = -5000);
    let u = null == a ? void 0 : null === (r = a.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp,
        c = null != u ? new Date(u).getTime() - 1 : 0;
    isNaN(c) && (c = 0);
    let d = Math.max(l, c);
    return d <= 0 && (d = j.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(s) ? d : Math.max(s, d);
}
function eQ(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let t = e.joinedAt.getTime();
            if (!isNaN(t)) return t;
        } else if ('string' == typeof e.joinedAt) {
            let t = new Date(e.joinedAt).getTime();
            if (!isNaN(t)) return t;
        } else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt;
    }
    return Date.now();
}
function eX(e, t, n) {
    let r = e.guildId;
    return !(null != r && w.Z.isActive(r, t.parent_id, e.channelId)) && e$(e, n);
}
function e$(e, t) {
    return !!(e.mentionCount > 0) || (!(j.default.compare(e.channelId, t) > 0 || (null != e._ackMessageId && j.default.compare(e._ackMessageId, t) > 0) || (null != e._lastMessageId && j.default.compare(e._lastMessageId, t) > 0)) && !0);
}
function eJ(e) {
    switch (e.type) {
        case ec.W.GUILD_HOME:
        case ec.W.GUILD_EVENT:
        case ec.W.GUILD_ONBOARDING_QUESTION:
            return null != X.Z.getGuild(e.channelId);
        case ec.W.NOTIFICATION_CENTER:
            var t;
            return j.default.cast(null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
            return !0;
    }
}
function e0(e) {
    if (null == e) return !1;
    let t = eB.get(e);
    return !!ek(t) && t.ack({});
}
function e1(e) {
    if (null == e) return;
    let t = eB.get(e);
    if (t.type !== ec.W.CHANNEL) return;
    let n = z.Z.getChannel(t.channelId);
    if (null == n || !n.isForumPost() || null == n.parent_id) return;
    let r = n.parent_id,
        i = eB.get(r);
    w.Z.hasLoaded(n.guild_id) && j.default.keys(w.Z.getThreadsForParent(n.guild_id, r)).every((e) => t4.hasOpenedThread(e) || 0 > j.default.compare(e, i.ackMessageId)) && i.ack({});
}
function e2(e) {
    var t, n;
    let { guilds: r, relationships: i, initialPrivateChannels: a, readState: o } = e;
    eb(),
        (eT = null),
        !eg && !o.partial && eB.clearAll(),
        (eg = !1),
        o.entries.forEach((e) => {
            var t, n;
            let r = null !== (t = e.read_state_type) && void 0 !== t ? t : ec.W.CHANNEL;
            r !== ec.W.CHANNEL && (e = eM(e));
            let i = eB.get(e.id, r);
            (i._persisted = !0), (i._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0), (i.flags = e.flags), (i.lastViewed = e.last_viewed);
            let a = z.Z.getBasicChannel(e.id);
            null != a && (0, B.Q5)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (i.ackMessageId = j.default.fromTimestamp(eq(a.guild_id, a.id))) : i.ackedWhileCached ? -1 === j.default.compare(i.ackMessageId, e.last_message_id) && (i.ackMessageId = e.last_message_id) : (i.ackMessageId = e.last_message_id), (i.ackedWhileCached = void 0), (i.ackPinTimestamp = eD(e.last_pin_timestamp)), eB._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && eB._mentionChannels.add(i.channelId);
        }),
        eB.resetGuildSentinels();
    let s = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != s && (eB.get(s, ec.W.NOTIFICATION_CENTER).lastMessageId = j.default.fromTimestamp(Date.now())), eH(i), eF(a), r)) eF(null !== (n = e.channels) && void 0 !== n ? n : []), e6(e), eV(e);
    e3(), (ev = setTimeout(() => e5(o.entries), 10 * Z.Z.Millis.SECOND));
}
function e3() {
    null != ev && clearTimeout(ev);
}
ed(eB, '_guildReadStateSentinels', {}), ed(eB, '_readStates', {}), ed(eB, '_mentionChannels', new Set());
let e4 = (0, _.throttle)((e) => {
    e.delete();
}, 100);
function e5(e) {
    let t = eR();
    for (let r of e) {
        var n;
        let e = null !== (n = r.read_state_type) && void 0 !== n ? n : ec.W.CHANNEL,
            i = eB.get(r.id, e);
        i.shouldDeleteReadState(t) && e4(i);
    }
}
function e6(e) {
    if (null != e.channelUpdates) {
        var t;
        eF(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let t of e.channelTimestampUpdates) {
            let e = eB.get(t.id);
            null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eD(t.last_pin_timestamp));
        }
}
function e7(e) {
    let { lazyPrivateChannels: t } = e;
    eF(t);
}
function e8(e) {
    let { readStates: t, selectedChannelId: n } = e;
    eb(),
        (eT = null),
        (em = n),
        (eI = K.ZP.getCurrentSidebarChannelId(em)),
        eB.clearAll(),
        t.forEach((e) => {
            let t = eB.get(e.channelId);
            t.deserializeForOverlay(e), t.type === ec.W.CHANNEL && t.rebuildChannelState();
        });
}
function e9(e) {
    var t;
    let { guild: n } = e,
        r = eR();
    eB.forEach((e) => {
        e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1);
    }),
        eF(null !== (t = n.channels) && void 0 !== t ? t : []),
        e6(n),
        eV(n);
}
function te(e) {
    let { channelId: t, isAfter: n, messages: r } = e,
        i = eB.get(t);
    i.loadedMessages = !0;
    let a = J.Z.getMessages(t);
    null != a && (r.length > 0 && 1 === j.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount ? i.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && a.has(i.ackMessageId, !0) && ((i.unreadCount += r.length), null == i.oldestUnreadMessageId && i.rebuildChannelState())), eZ(r.map((e) => e.thread).filter(H.lm));
}
function tt(e) {
    let { channelId: t } = e;
    eB.get(t).rebuildChannelState();
}
function tn(e) {
    let t,
        n,
        { channelId: i, message: a, isPushNotification: o } = e,
        s = eB.get(i),
        l = null != s.lastMessageId && s.lastMessageId >= a.id;
    s.lastMessageId = a.id;
    let u = ei.default.getCurrentUser(),
        c = z.Z.getBasicChannel(i);
    if (null != a.author && null != u && a.author.id === u.id && !eo.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type))
        return (
            null != s.outgoingAck && s.clearOutgoingAck(),
            tx({
                channelId: i,
                messageId: a.id,
                manual: !1
            })
        );
    let d = (0, C.PP)();
    if ((null == d ? void 0 : d.isReady()) === !0) {
        let e = d.getCurrentRoute();
        if (S.Z.getChatOpen(s.channelId)) t = s.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') t = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var _;
            t = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId;
        }
    } else null == d && ((t = en.Z.getChannelId()), (n = K.ZP.getCurrentSidebarChannelId(t)));
    let E = t === i || n === i;
    if ((E && ek(s) && !o) || (null != r && r.isInstanceFocused() && E && r.isInstanceUILocked() && r.isPinned(eo.Odu.TEXT))) return s.ack({ messageId: a.id });
    (null == s.oldestUnreadMessageId || s.oldestUnreadMessageIdStale) && (s.oldestUnreadMessageId = a.id), !l && s.unreadCount++, !(et.Z.isBlockedForMessage(a) || (a.type === eo.uaV.RECIPIENT_REMOVE && (null == c ? void 0 : c.type) === eo.d4z.GROUP_DM)) && tr(a, u, s) && s.mentionCount++;
}
function tr(e, t, n) {
    if (
        null != t &&
        (0, D.Hl)({
            rawMessage: e,
            userId: t.id,
            suppressEveryone: er.ZP.isSuppressEveryoneEnabled(n.guildId),
            suppressRoles: er.ZP.isSuppressRolesEnabled(n.guildId)
        })
    )
        return !0;
    let r = z.Z.getChannel(e.channel_id);
    return !!eU(r) || (!!er.ZP.mentionOnAllMessages && null != r && !r.isVocal() && !er.ZP.isChannelMuted(r.guild_id, r.id) && er.ZP.resolvedMessageNotifications(r) === eo.bL.ALL_MESSAGES) || !1;
}
function ti(e) {
    let { channel: t } = e;
    if (!(0, B.Em)(t.type)) return !1;
    let n = eB.get(t.id);
    (n.lastMessageId = t.lastMessageId), (n.lastPinTimestamp = eD(t.lastPinTimestamp));
}
function ta(e) {
    let { channel: t } = e;
    to(t), ts(t);
}
function to(e) {
    if (!B.AW.has(e.type)) return !1;
    let t = eB.get(e.id);
    (t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eD(e.lastPinTimestamp)), t.syncThreadSettings(), e.ownerId === W.default.getId() && (t.loadedMessages = !0);
}
function ts(e) {
    let t = e.parent_id;
    eB.get(t).lastMessageId = e.id;
    let n = ei.default.getCurrentUser();
    if (e.ownerId === (null == n ? void 0 : n.id))
        return (
            (eB.get(e.id)._persisted = !0),
            tx({
                channelId: t,
                messageId: e.id,
                manual: !1
            })
        );
}
function tl(e) {
    let { channel: t } = e;
    return !!B.AW.has(t.type) && eB.get(t.id).syncThreadSettings();
}
function tu(e) {
    let { id: t } = e;
    return eB.get(t).syncThreadSettings();
}
function tc(e) {
    return (0, G.s)(e) && eB.get(e.id).syncThreadSettings();
}
function td(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        if (!B.AW.has(e.type)) return;
        let t = eB.get(e.id);
        if (((t.lastMessageId = e.lastMessageId), (t.lastPinTimestamp = eD(e.lastPinTimestamp)), (t._isThread = !0), (t._isActiveThread = !0), (t._isJoinedThread = x.Z.hasJoined(e.id)), e.isForumPost())) {
            let t = eB.get(e.parent_id);
            0 > j.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
        }
    });
}
function t_(e) {
    let { threads: t } = e;
    eZ(t);
}
function tE(e) {
    let { channelId: t } = e;
    return e0(t);
}
function tf(e) {
    let { messages: t, threads: n } = e;
    for (let e of t)
        eZ(
            e
                .map((e) => {
                    let { thread: t } = e;
                    return t;
                })
                .filter(H.lm)
        );
    eZ(n);
}
function th(e) {
    let t = ei.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function tp(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id,
        r = eB.get(t.guild_id, ec.W.GUILD_EVENT);
    if (((r.lastMessageId = t.id), th(t))) {
        tk({
            type: 'GUILD_FEATURE_ACK',
            id: n,
            ackType: ec.W.GUILD_EVENT,
            ackedId: t.id,
            local: !1
        });
        return;
    }
    !er.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
}
function tm(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (th(t) || ![eu.p1.CANCELED, eu.p1.COMPLETED].includes(t.status)) return !1;
    eB.get(n, ec.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tI(e) {
    let { guildScheduledEvent: t } = e,
        n = t.guild_id;
    if (th(t)) return !1;
    eB.get(t.guild_id, ec.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
}
function tT(e) {
    let t = ei.default.getCurrentUser();
    if (null == t || null == e.relationship.since || (e.relationship.type !== eo.OGo.PENDING_INCOMING && e.relationship.type !== eo.OGo.FRIEND)) return !1;
    let n = eB.get(t.id, ec.W.NOTIFICATION_CENTER),
        r = e.relationship.type === eo.OGo.FRIEND,
        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
        a = null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0,
        o = !1;
    a < i && ((n.lastMessageId = j.default.fromTimestamp(i)), (!o && M.Z.active) || (o && M.Z.tabFocused) ? tF(t.id, ec.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
}
function tg(e) {
    let t = ei.default.getCurrentUser();
    if (null == t || null == e.relationship.since || e.relationship.type !== eo.OGo.PENDING_INCOMING) return !1;
    let n = eB.get(t.id, ec.W.NOTIFICATION_CENTER),
        r = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? j.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1));
}
function tS(e) {
    var t;
    let { item: n } = e,
        r = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let i = eB.get(r, ec.W.NOTIFICATION_CENTER);
    i.lastMessageId = n.id;
    let a = !1;
    if ((0, M.Z.active || (a && M.Z.tabFocused))) {
        tF(r, ec.W.NOTIFICATION_CENTER, n.id, !1);
        return;
    }
    i.mentionCount++;
}
function tA(e) {
    var t;
    let { ids: n, optimistic: r } = e;
    if (r || M.Z.active) return !1;
    let i = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let a = eB.get(i, ec.W.NOTIFICATION_CENTER);
    n.forEach((e) => {
        0 > j.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
    });
}
function tv(e) {
    let { guild: t } = e;
    return eB.clear(t.id, ec.W.GUILD_EVENT);
}
function tN(e) {
    let { guild: t } = e,
        n = t.latest_onboarding_question_id;
    if (null == n) return;
    let r = eB.get(t.id, ec.W.GUILD_ONBOARDING_QUESTION);
    (r._guildId = t.id), (r.lastMessageId = n);
}
function tO(e) {
    let { channel: t } = e;
    return eB.clear(t.id);
}
function tR(e) {
    let { channelId: t } = e,
        n = K.ZP.getCurrentSidebarChannelId(t),
        r = z.Z.getChannel(t);
    if (null != r) {
        var i;
        let e = eB.get(r.id);
        (e.ackMessageIdAtChannelSelect = null !== (i = e.ackMessageId) && void 0 !== i ? i : j.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tL(em), tL(eI);
    let a = !1;
    return em !== t && ((a = tb(em) || a), (a = tb(eI) || a)), (em === t || ((null == r ? void 0 : r.type) != null && eo.TPd.GUILD_THREADS_ONLY.has(r.type))) && (a = e0(t) || a), em === t && (a = e0(n) || a), (em = t), (eI = n), a;
}
function tC() {
    let e = K.ZP.getCurrentSidebarChannelId(em),
        t = !1;
    return eI !== e ? ((t = tb(eI)), (eI = e)) : (t = e0(e) || t), t;
}
function ty(e) {
    let { channelId: t } = e;
    if (null == t) return;
    let n = eB.get(t);
    if (!n.hasMentions()) return (n.oldestUnreadMessageId = null), n.ack({ isExplicitUserAction: !0 });
}
function tL(e) {
    if (null != e) eB.get(e).isManualAck = !1;
}
function tb(e) {
    if (null == e) return !1;
    let t = eB.get(e);
    return !t.hasUnread() && ((t.oldestUnreadMessageId = null), !0);
}
function tD(e) {
    let t = !1;
    for (let [n, r] of j.default.entries(eN)) r === e.windowId && (t = tM(n, e.focused) || t);
    return t;
}
function tM(e, t) {
    if (null == e) return !1;
    let n = eB.get(e);
    return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), e0(e);
}
function tP(e) {
    let { channelId: t } = e;
    return e0(t);
}
function tU(e) {
    let { channelId: t, messageId: n, immediate: r = !1, force: i = !1, context: a, location: o } = e,
        s = eB.get(t),
        l = s.ack({
            messageId: n,
            local: a !== eo.e3s,
            immediate: r,
            force: i,
            isExplicitUserAction: !0,
            location: o
        });
    return null != n ? (s.rebuildChannelState(), !0) : l;
}
function tw(e) {
    let { channelId: t, timestamp: n } = e;
    return eB.get(t).ackPins(n);
}
function tx(e) {
    let { channelId: t, messageId: n, manual: r, newMentionCount: i } = e,
        a = eB.get(t);
    return r
        ? (a.rebuildChannelState(n, !0, i), a.clearOutgoingAck(), !0)
        : n !== a._ackMessageId &&
              a.ack({
                  messageId: n,
                  local: !0
              });
}
function tG(e) {
    let { channelId: t } = e;
    return eB.get(t).ack({
        messageId: void 0,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
    });
}
function tk(e) {
    let { id: t, ackType: n, ackedId: r, local: i } = e;
    return tF(t, n, r, i);
}
function tB(e) {
    var t;
    let { ackType: n, ackedId: r, local: i } = e,
        a = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != a && tF(a, n, r, i);
}
function tF(e, t, n, r) {
    var i;
    let a = eB.get(e, t);
    return (
        n !== a.ackMessageId &&
        a.lastMessageId !== a.ackMessageId &&
        (null != a.lastMessageId || 0 !== a.mentionCount) &&
        ((n = null !== (i = null != n ? n : a.lastMessageId) && void 0 !== i ? i : j.default.fromTimestamp(a.getAckTimestamp())),
        a.ack({
            messageId: n,
            local: null == r || r
        }))
    );
}
function tZ(e) {
    let { channelId: t, lastPinTimestamp: n } = e,
        r = eB.get(t),
        i = eD(n);
    return r.lastPinTimestamp !== i && ((r.lastPinTimestamp = i), !0);
}
function tV(e) {
    let t = !1;
    for (let n of e.channels) {
        let e = eB.get(n.id),
            r = eD(n.lastPinTimestamp);
        (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) && ((t = !0), (e.lastMessageId = n.lastMessageId), (e.lastPinTimestamp = r));
    }
    return t;
}
function tH() {
    eT = null;
}
function tY(e) {
    let { readStates: t } = e;
    (eg = !0),
        eb(),
        t.forEach((e) => {
            var t;
            let n = null !== (t = e.type) && void 0 !== t ? t : ec.W.CHANNEL;
            (e.type = n), null == eB._readStates[n] && (eB._readStates[n] = {}), (eB._readStates[n][e.channelId] = (0, I.gh)(e, eB));
        });
}
function tj() {
    if (null != em) {
        let e = eB.get(em);
        !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0);
    }
    return !1;
}
function tW(e) {
    let { channelId: t, chatOpen: n } = e;
}
function tK() {
    return e0(em);
}
function tz(e, t, n) {
    e.forEach((e) => {
        let { channelId: t, messageId: n, readStateType: r } = e;
        eB.get(t, r).ack({
            messageId: n,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    }),
        t === eo.e3s &&
            (eS.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            !eA && ew(n));
}
function tq(e) {
    let { channels: t, context: n, onFinished: r } = e;
    tz(
        t.filter((e) => null != e.messageId && t4.hasUnreadOrMentions(e.channelId, e.readStateType)),
        n,
        r
    );
}
function tQ(e) {
    let { channelId: t, windowId: n } = e;
    return eN[t] !== n && (d()(void 0 === eN[t], 'handleEnableAutomaticAck: channel already visible in another window'), (eN[t] = n), e0(t));
}
function tX(e) {
    let { channelId: t } = e;
    return (eN[t] = void 0), !1;
}
function t$(e) {
    let { channelId: t } = e;
    return tb(t);
}
function tJ(e) {
    let { channelId: t } = e;
    return e0(t);
}
function t0(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        var n, r;
        let i = t[e],
            a = eB.getIfExists(e);
        if (null != a) for (let e of [null === (n = i.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (r = i.modified_messages) && void 0 !== r ? r : []).filter(H.lm)) 1 === j.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
    }
}
function t1(e) {
    var t;
    let { ackedId: n } = e,
        r = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let i = eB.get(r, ec.W.MESSAGE_REQUESTS);
    if (n === i.ackMessageId) return !1;
    (i.ackMessageId = n),
        i.ack({
            messageId: n,
            isExplicitUserAction: !0
        });
}
function t2(e) {
    var t;
    let n = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let r = eB.get(n, ec.W.MESSAGE_REQUESTS);
    if (null == r.ackMessageId) return !1;
    r.ackMessageId = void 0;
}
class t3 extends (a = h.ZP.Store) {
    initialize() {
        let e = [q.Z, ei.default, X.Z, Q.Z, z.Z, en.Z, J.Z, ee.Z, S.Z, w.Z, x.Z, K.ZP, R.ZP, O.Z, v.Z, er.ZP, ea.Z, M.Z, y.Z, k.Z, b.Z];
        this.waitFor(...e), this.syncWith([K.ZP], tC);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = eB._readStates[ec.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        var t;
        return null === (t = eB._readStates[ec.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e];
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL,
            n = eB.getValue(e, t, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, A.Z)(e)) {
            if (n > 0) return 1;
        }
        return n;
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eB.getValue(e.id, ec.W.CHANNEL, (a) => a.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eB.getValue(e, ec.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec.W.CHANNEL;
        return eB.getValue(e, t, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eB.getValue(e, ec.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eB.get(t);
        if (!0 === eB.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= j.default.compare(e, r.ackMessageIdAtChannelSelect)) return !1;
        let i = eQ(n);
        return j.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return (
            eB.forEach((n) => {
                switch (n.type) {
                    case ec.W.GUILD_HOME:
                    case ec.W.GUILD_EVENT:
                    case ec.W.GUILD_ONBOARDING_QUESTION:
                        null != X.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                        break;
                    case ec.W.NOTIFICATION_CENTER:
                    case ec.W.MESSAGE_REQUESTS:
                        var r;
                        j.default.cast(null === (r = ei.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
                        break;
                    default:
                        t.push(n.serialize(e));
                }
            }),
            t
        );
    }
    getGuildUnreadsSentinel(e) {
        return eB.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eB.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        var t;
        let n = null === (t = ei.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        return null == n ? null : eB.get(n, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eB.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
}
ed(t3, 'displayName', 'ReadStateStore');
let t4 = new t3(T.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: t0,
    CONNECTION_OPEN: e2,
    CONNECTION_OPEN_SUPPLEMENTAL: e7,
    LOGOUT: e3,
    OVERLAY_INITIALIZE: e8,
    CACHE_LOADED: tY,
    GUILD_CREATE: e9,
    LOAD_MESSAGES_SUCCESS: te,
    MESSAGE_CREATE: tn,
    MESSAGE_DELETE: tt,
    MESSAGE_DELETE_BULK: tt,
    MESSAGE_ACK: tx,
    CHANNEL_ACK: tU,
    CHANNEL_LOCAL_ACK: tG,
    CHANNEL_PINS_ACK: tw,
    CHANNEL_PINS_UPDATE: tZ,
    CHANNEL_SELECT: tR,
    VOICE_CHANNEL_SELECT: ty,
    CHANNEL_CREATE: ti,
    THREAD_CREATE: ta,
    THREAD_UPDATE: tl,
    THREAD_LIST_SYNC: td,
    LOAD_THREADS_SUCCESS: t_,
    LOAD_ARCHIVED_THREADS_SUCCESS: t_,
    SEARCH_FINISH: tf,
    MOD_VIEW_SEARCH_FINISH: tf,
    THREAD_MEMBER_UPDATE: tu,
    THREAD_MEMBERS_UPDATE: tc,
    CHANNEL_DELETE: tO,
    THREAD_DELETE: tO,
    WINDOW_FOCUS: tD,
    UPDATE_CHANNEL_DIMENSIONS: tP,
    CURRENT_USER_UPDATE: tH,
    DRAWER_OPEN: tj,
    DRAWER_CLOSE: tK,
    BULK_ACK: tq,
    ENABLE_AUTOMATIC_ACK: tQ,
    DISABLE_AUTOMATIC_ACK: tX,
    GUILD_FEATURE_ACK: tk,
    GUILD_SCHEDULED_EVENT_CREATE: tp,
    GUILD_SCHEDULED_EVENT_UPDATE: tm,
    GUILD_SCHEDULED_EVENT_DELETE: tI,
    GUILD_DELETE: tv,
    GUILD_UPDATE: tN,
    RESORT_THREADS: tE,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: tW,
    DECAY_READ_STATES: eb,
    NOTIFICATION_CENTER_ITEM_CREATE: tS,
    RELATIONSHIP_ADD: tT,
    RELATIONSHIP_REMOVE: tg,
    NOTIFICATION_CENTER_ITEMS_ACK: tA,
    USER_NON_CHANNEL_ACK: tB,
    PASSIVE_UPDATE_V2: tV,
    CLEAR_OLDEST_UNREAD_MESSAGE: t$,
    TRY_ACK: tJ,
    MESSAGE_REQUEST_ACK: t1,
    MESSAGE_REQUEST_CLEAR_ACK: t2
});
t.ZP = t4;
