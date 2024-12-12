let i;
r.d(n, {
    Ex: function () {
        return eP;
    }
});
var a,
    s,
    o = r(47120);
var l = r(411104);
var u = r(653041);
var c = r(789020);
var d = r(512722),
    f = r.n(d),
    _ = r(392711);
var h = r(913527),
    p = r.n(h),
    m = r(442837),
    g = r(544891),
    E = r(846519),
    v = r(283693),
    I = r(570140),
    T = r(317381),
    b = r(358221),
    y = r(702321),
    S = r(430198),
    A = r(710845),
    N = r(353926),
    C = r(924301),
    R = r(57132),
    O = r(355298),
    D = r(869404),
    L = r(333984),
    x = r(572804),
    w = r(140155),
    P = r(398758),
    M = r(725319),
    k = r(344185),
    U = r(569471),
    B = r(195663),
    G = r(581883),
    Z = r(131704),
    F = r(386438),
    V = r(70956),
    j = r(630388),
    H = r(823379),
    Y = r(931619),
    W = r(709054),
    K = r(314897),
    z = r(433355),
    q = r(592125),
    Q = r(796974),
    X = r(486472),
    J = r(430824),
    $ = r(517100),
    ee = r(375954),
    et = r(496675),
    en = r(699516),
    er = r(944486),
    ei = r(9156),
    ea = r(594174),
    es = r(451478),
    eo = r(981631),
    el = r(918559),
    eu = r(176505),
    ec = r(765305),
    ed = r(490897);
function ef(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let e_ = new A.Z('ReadStateStore'),
    eh = 2;
__OVERLAY__ && (i = r(237997).Z);
let ep = eo.S7T.VIEW_CHANNEL | eo.S7T.READ_MESSAGE_HISTORY,
    em = 100,
    eg = 1,
    eE = er.Z.getChannelId(),
    ev = null,
    eI = null,
    eT = !1,
    eb = [],
    ey = !1,
    eS = null,
    eA = {};
let eN = 30 * V.Z.Millis.DAY;
function eC() {
    return W.default.fromTimestamp(Date.now() - eN);
}
let eR = 0,
    eO = 0,
    eD = null;
function eL() {
    (eR = Date.now() - 7 * V.Z.Millis.DAY),
        (eO = Date.now() - 3 * V.Z.Millis.DAY),
        clearTimeout(eD),
        (eD = setTimeout(() => {
            I.Z.dispatch({ type: 'DECAY_READ_STATES' });
        }, 1 * V.Z.Millis.HOUR));
}
function ex(e) {
    if (null == e) return 0;
    let n = Date.parse(e);
    return isNaN(n) ? 0 : n;
}
function ew(e) {
    return {
        id: e.id,
        read_state_type: e.read_state_type,
        mention_count: e.badge_count,
        last_message_id: e.last_acked_id
    };
}
function eP(e, n) {
    let r = q.Z.getChannel(e.channel_id);
    return (
        !(null == r || en.Z.isBlockedOrIgnoredForMessage(e)) &&
        (!!(
            (0, x.ZP)({
                message: e,
                userId: n.id,
                suppressEveryone: ei.ZP.isSuppressEveryoneEnabled(r.guild_id),
                suppressRoles: ei.ZP.isSuppressRolesEnabled(r.guild_id)
            }) || eM(r)
        ) ||
            !1)
    );
}
function eM(e) {
    return null != e && e.isPrivate() && !ei.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ek(e) {
    if (0 === eb.length) {
        (ey = !1), null == e || e();
        return;
    }
    ey = !0;
    let n = eb.splice(0, em);
    await eB(() =>
        g.tn.post({
            url: eo.ANM.BULK_ACK,
            body: { read_states: n },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ),
        await (0, E.GR)(1000 * eg),
        ek(e);
}
let eU = 3;
async function eB(e) {
    let n = K.default.getId();
    for (let r = 0; r < eU; r++)
        try {
            return await e();
        } catch (e) {
            if ((e_.error('', e), r + 1 < eU && (await (0, E.GR)((r + 1) * 2000), await Y.Z.awaitOnline(), n !== K.default.getId()))) return Promise.reject(Error('User changed.'));
        }
}
function eG(e) {
    if (e.type !== ed.W.CHANNEL) return !1;
    let n = q.Z.getChannel(e.channelId),
        r = null != n && n.isForumPost();
    if ((null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === el.Ez.PANEL && T.ZP.getFocusedLayout() === el.MI.NO_CHAT) || $.Z.isIdle() || !e.canTrackUnreads()) return !1;
    if ((null == n ? void 0 : n.isForumLikeChannel()) !== !0) {
        let n = eA[e.channelId],
            r = null != n && es.Z.isFocused(n),
            a = null != i && i.isInstanceFocused() && i.isPinned(eo.Odu.TEXT);
        if (!r && !a) return !1;
    }
    if (r && !e._persisted) return !0;
    if (!e.hasUnreadOrMentions() || (null == n ? void 0 : n.isForumLikeChannel()) === !0) return !1;
    let a = !1;
    if (!(r && !e._isJoinedThread) && !Q.Z.isAtBottom(e.channelId)) return a && e_.log('STAFF-ACK-LOG: Not at bottom', e.channelId), !1;
    let s = b.Z.getLayout(e.channelId),
        o = b.Z.getChatOpen(e.channelId);
    if ((!o && (s === eo.AEg.NO_CHAT || s === eo.AEg.FULL_SCREEN)) || null == eA[e.channelId]) return !1;
    let l = ee.Z.getMessages(e.channelId);
    return null == l || !l.ready || l.loadingMore ? (a && e_.log('STAFF-ACK-LOG: Still loading messages', e.channelId), !1) : (0, M._E)() || o ? (a && e_.log('STAFF-ACK-LOG: Acked', e.channelId), !0) : (a && e_.log('STAFF-ACK-LOG: Chat not focused', e.channelId), !1);
}
!(function (e) {
    (e[(e.IS_GUILD_CHANNEL = 1)] = 'IS_GUILD_CHANNEL'), (e[(e.IS_THREAD = 2)] = 'IS_THREAD');
})(a || (a = {}));
class eZ {
    static forEach(e) {
        for (let r of Object.keys(eZ._readStates)) {
            var n;
            let i = null !== (n = eZ._readStates[parseInt(r)]) && void 0 !== n ? n : {};
            for (let n of Object.keys(i)) if (!1 === e(i[n])) break;
        }
    }
    static get(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL,
            i = null === (n = eZ._readStates[r]) || void 0 === n ? void 0 : n[e];
        return null == i && ((i = new eZ(e, r)), null == eZ._readStates[r] && (eZ._readStates[r] = {}), (eZ._readStates[r][e] = i)), i;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return null === (n = eZ._readStates[r]) || void 0 === n ? void 0 : n[e];
    }
    static getMentionChannelIds() {
        let e = [];
        for (let n of eZ._mentionChannels) {
            let r = eZ.getIfExists(n);
            null != r && r.canHaveMentions() ? e.push(n) : eZ._mentionChannels.delete(n);
        }
        return e;
    }
    static getValue(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = null === (n = eZ._readStates[r]) || void 0 === n ? void 0 : n[e];
        return null == s ? a : i(s);
    }
    static clear(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return (null === (n = eZ._readStates[r]) || void 0 === n ? void 0 : n[e]) != null && (delete eZ._readStates[r][e], eZ._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        (eZ._readStates = {}), eZ._mentionChannels.clear();
    }
    serialize(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveThread: s, _isJoinedThread: o, _persisted: l, loadedMessages: u, _lastMessageId: c, _lastMessageTimestamp: d, _ackMessageId: f, _ackMessageTimestamp: _, ackPinTimestamp: h, isManualAck: p, lastPinTimestamp: m, _oldestUnreadMessageId: g, oldestUnreadMessageIdStale: E, estimated: v, _mentionCount: I, flags: T, lastViewed: b } = this;
        if (e)
            return {
                channelId: n,
                type: r,
                _guildId: i,
                _isThread: a,
                _isActiveThread: s,
                _isJoinedThread: o,
                _persisted: l,
                loadedMessages: u,
                _lastMessageId: c,
                _lastMessageTimestamp: d,
                _ackMessageId: f,
                _ackMessageTimestamp: _,
                ackPinTimestamp: h,
                isManualAck: p,
                lastPinTimestamp: m,
                _oldestUnreadMessageId: g,
                oldestUnreadMessageIdStale: E,
                estimated: v,
                _mentionCount: I,
                flags: T,
                lastViewed: b
            };
        let y = {
            channelId: n,
            type: r,
            _guildId: i,
            _persisted: l,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: f,
            _ackMessageTimestamp: _,
            ackPinTimestamp: h,
            lastPinTimestamp: m,
            _mentionCount: I,
            flags: T
        };
        return null != b && b > 0 && (y.lastViewed = b), a && ((y._isThread = a), (y._isActiveThread = s), (y._isJoinedThread = o)), y;
    }
    deserializeForOverlay(e) {
        let { channelId: n, type: r, _guildId: i, _isThread: a, _isActiveJoinedThread: s, _isActiveThread: o, _isJoinedThread: l, _persisted: u, loadedMessages: c, _lastMessageId: d, _lastMessageTimestamp: f, _ackMessageId: _, _ackMessageTimestamp: h, ackPinTimestamp: p, isManualAck: m, lastPinTimestamp: g, _oldestUnreadMessageId: E, oldestUnreadMessageIdStale: v, estimated: I, _unreadCount: T, _mentionCount: b, flags: y, lastViewed: S } = e;
        (this.channelId = n), (this.type = null != r ? r : ed.W.CHANNEL), (this._guildId = i), (this._isThread = null != a && a), null != s ? ((this._isActiveThread = s), (this._isJoinedThread = s)) : ((this._isActiveThread = null != o && o), (this._isJoinedThread = null != l && l)), (this._persisted = !1 !== u), (this.loadedMessages = null != c && c), (this._lastMessageId = d), (this._lastMessageTimestamp = f), (this._ackMessageId = _), (this._ackMessageTimestamp = h), (this.ackPinTimestamp = p), (this.isManualAck = null != m && m), (this.lastPinTimestamp = g), (this._oldestUnreadMessageId = E), (this.oldestUnreadMessageIdStale = null != v && v), (this.estimated = null != I && I), (this._unreadCount = null != T ? T : 0), (this._mentionCount = b), (this.flags = y), (this.lastViewed = S), eZ._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eZ._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        if (null != this._guildId) eZ.getGuildSentinels(this._guildId).unreadsSentinel++;
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
        (this._lastMessageId = e), (this._lastMessageTimestamp = null != e ? W.default.extractTimestamp(e) : 0);
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        (this._ackMessageId = e), (this._ackMessageTimestamp = null != e ? W.default.extractTimestamp(e) : 0);
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
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), (this._mentionCount = e), eZ._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eZ._mentionChannels.add(this.channelId);
    }
    guessAckMessageId() {
        let e = ee.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
        if (!this.hasMentions()) return this.lastMessageId;
        let n = null,
            r = this.mentionCount,
            i = ea.default.getCurrentUser();
        return (
            e.forEach(
                (e) => {
                    if (r > 0 && e.author.id !== (null == i ? void 0 : i.id)) --r;
                    else if (0 === r) return (n = e.id), !1;
                },
                this,
                !0
            ),
            n
        );
    }
    get guildId() {
        if (null != this._guildId) return this._guildId;
        let e = q.Z.getChannel(this.channelId);
        return (this._guildId = null != e ? e.getGuildId() : null);
    }
    isPrivate() {
        if (this.type !== ed.W.CHANNEL) return !1;
        let e = q.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0;
        if (((this.ackMessageId = null !== (n = null != e ? e : this._ackMessageId) && void 0 !== n ? n : this.guessAckMessageId()), (this.isManualAck = null != e), (this.oldestUnreadMessageId = null), (this.estimated = !1), (this.unreadCount = 0), i && (this.mentionCount = 0), this.hasUnread())) {
            let e = ea.default.getCurrentUser(),
                n = this.getAckTimestamp(),
                a = !1,
                s = !1,
                o = null,
                l = ee.Z.getMessages(this.channelId);
            l.forAll((r) => {
                if (a) {
                    var l;
                    this.oldestUnreadMessageId = null !== (l = this._oldestUnreadMessageId) && void 0 !== l ? l : r.id;
                } else a = r.id === this._ackMessageId;
                W.default.extractTimestamp(r.id) > n ? (this.unreadCount++, i && eP(r, e) && this.mentionCount++, (o = null != o ? o : r.id)) : (s = !0);
            }),
                (this.estimated = !l.hasPresent() || (!(a || s) && l.length === this.unreadCount)),
                (this.oldestUnreadMessageId = null !== (r = this._oldestUnreadMessageId) && void 0 !== r ? r : o);
        }
        null != a && (this.mentionCount = a);
    }
    handleGuildEventRemoval(e, n) {
        var r;
        if (W.default.compare(this.ackMessageId, n) >= 0) return;
        let i = C.ZP.getGuildScheduledEventsForGuild(e),
            a = this.getAckTimestamp();
        if (isNaN(a)) return;
        let s = null !== (r = this._ackMessageId) && void 0 !== r ? r : W.default.fromTimestamp(a),
            o = null,
            l = 0;
        i.forEach((e) => {
            (0, C.Ld)(e) && (W.default.compare(e.id, o) > 0 && (o = e.id), W.default.compare(e.id, s) > 0 && l++);
        }),
            (this.lastMessageId = o),
            (this.mentionCount = l);
    }
    canTrackUnreads() {
        if (this.type !== ed.W.CHANNEL) return !0;
        if ((this._isThread && !this._isActiveThread) || this._isResourceChannel) return !1;
        let e = q.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? F.Z.has(e.basicPermissions, eo.S7T.VIEW_CHANNEL) : !S.Z.isChannelGated(this.guildId, this.channelId) || et.Z.can(eo.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !((this._isThread && !this._isJoinedThread) || (0, D.h3)(this.channelId, [O.Z, L.Z]) || (!this._isThread && (0, P.r1)(this._guildId) && (this._lastMessageTimestamp < eR || (!ei.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())))) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || (this._isThread && !this._isJoinedThread) || (0, D.h3)(this.channelId, [O.Z, L.Z]) || ((0, P.r1)(this._guildId) && this._lastMessageTimestamp < eR)) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        if (n && (this._lastMessageTimestamp < eR || (!ei.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)))
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
        } else if (S.Z.isChannelGated(this.guildId, this.channelId) && !et.Z.can(eo.Plq.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1
            };
        return i || a
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
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eO && G.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
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
        if (this.type !== ed.W.CHANNEL || !this.canTrackUnreads()) return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
            (this._persisted = !0),
                eB(() =>
                    g.tn.post({
                        url: eo.ANM.PINS_ACK(this.channelId),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
        let n = ex(e);
        return (this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp), !0;
    }
    ack(e) {
        let { messageId: n, local: r = !1, immediate: i = !1, force: a = !1, isExplicitUserAction: s = !1, location: o = { section: eo.jXE.CHANNEL }, trackAnalytics: l = !0 } = e;
        if (!this._shouldAck(a, r, s) || (!a && !this.canTrackUnreads())) return !1;
        let u = this.hasMentions();
        return (
            (this.estimated = !1),
            (this.snapshot = this.takeSnapshot()),
            (this.unreadCount = 0),
            (this.mentionCount = 0),
            (null != n || null != (n = this.lastMessageId)) &&
                ((this.ackMessageId = n),
                (this.isManualAck = !1),
                (this._persisted = !0),
                eT && (this.ackedWhileCached = !0),
                e2(this.channelId),
                r
                    ? (this.oldestUnreadMessageId = null)
                    : (null == this.outgoingAck &&
                          (this.outgoingAckTimer = setTimeout(
                              () => {
                                  this.type === ed.W.CHANNEL ? this._ack(o, l) : this._nonChannelAck(), (this.outgoingAck = null), (this.outgoingAckTimer = null);
                              },
                              u || i ? 0 : 3000
                          )),
                      (this.outgoingAck = n)),
                !0)
        );
    }
    takeSnapshot() {
        let { default: e } = r(888369),
            n = this.guildId;
        return {
            unread: this.hasUnread(),
            mentionCount: this.mentionCount,
            guildUnread: null == n ? null : e.hasUnread(n),
            guildMentionCount: null == n ? null : e.getMentionCount(n),
            takenAt: Date.now()
        };
    }
    clearOutgoingAck() {
        (this.outgoingAck = null), null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), (this.outgoingAckTimer = null));
    }
    _shouldAck(e, n, r) {
        var i;
        return !!e || !!r || !!n || !!(!this.isManualAck && (this.type !== ed.W.CHANNEL || this.loadedMessages || (null === (i = q.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1;
    }
    _ack(e, n) {
        let { outgoingAck: i } = this;
        if (null == i) return;
        let a = K.default.getId(),
            s = eI;
        this._persisted = !0;
        let o = this.recalculateFlags(),
            l = o === this.flags ? void 0 : o;
        eB(() =>
            g.tn.post({
                url: eo.ANM.MESSAGE_ACK(this.channelId, i),
                body: {
                    token: eI,
                    last_viewed: this.lastViewed,
                    flags: l
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).then((e) => {
            null != e &&
                (eI === s && a === K.default.getId() && (eI = e.body.token),
                I.Z.dispatch({ type: 'MESSAGE_ACKED' }),
                n &&
                    r
                        .e('54076')
                        .then(r.bind(r, 189229))
                        .then((e) => {
                            let { default: n } = e;
                            n(this.channelId);
                        }));
        });
    }
    recalculateFlags() {
        if (this.type !== ed.W.CHANNEL) return;
        let e = q.Z.getChannel(this.channelId);
        if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let { outgoingAck: n, channelId: r, type: i } = this;
        if (null != n) {
            switch (i) {
                case ed.W.GUILD_HOME:
                case ed.W.GUILD_EVENT:
                case ed.W.GUILD_ONBOARDING_QUESTION:
                    e = eo.ANM.GUILD_FEATURE_ACK(r, n, i);
                    break;
                case ed.W.NOTIFICATION_CENTER:
                case ed.W.MESSAGE_REQUESTS:
                    e = eo.ANM.USER_NON_CHANNEL_ACK(n, i);
                    break;
                default:
                    return;
            }
            (this._persisted = !0),
                eB(() =>
                    g.tn.post({
                        url: e,
                        body: {},
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                );
        }
    }
    delete() {
        var e;
        let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            r = q.Z.getBasicChannel(this.channelId);
        e_.log('Deleting ReadState', this.channelId, this.type, {
            remote: n,
            persisted: this._persisted,
            channelMissing: null == r,
            isOld: e$(this, eC()),
            validType: null != r && Z.AW.has(r.type),
            readableType: null != r && (0, Z.Em)(r.type),
            oldThreadCutoff: eC(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }),
            n &&
                this._persisted &&
                g.tn.del({
                    url: eo.ANM.CHANNEL_ACK(this.channelId),
                    body: {
                        version: eh,
                        read_state_type: this.type
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                }),
            null === (e = eZ._readStates[this.type]) || void 0 === e || delete e[this.channelId],
            eZ._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== X.Z.totalUnavailableGuilds) return !1;
        if (null != this.type && this.type !== ed.W.CHANNEL) return !e0(this);
        let n = q.Z.getBasicChannel(this.channelId);
        if (null == n) return !!e$(this, e) || !1;
        return !!Z.AW.has(n.type) && (!(0, Z.Em)(n.type) || (!(0, Z.hv)(n.type) && (!!(Z.Ec.has(n.type) && eJ(this, n, e)) || (!!(this.mentionCount > 0) && !et.Z.canBasicChannel(ep, n)) || !1)));
    }
    getAckTimestamp() {
        let e, n;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
        if (this._isThread) return (this._ackMessageTimestamp = eQ(this.guildId, this.channelId)), (this._ackMessageId = W.default.fromTimestamp(this._ackMessageTimestamp)), this._ackMessageTimestamp;
        if (this.type === ed.W.GUILD_EVENT || this.type === ed.W.GUILD_ONBOARDING_QUESTION) e = J.Z.getGuild(this.channelId);
        else if ((0, eu.AB)(this.channelId)) e = J.Z.getGuild(this.guildId);
        else {
            let n = q.Z.getChannel(this.channelId);
            if (null != n) {
                let r = n.getGuildId();
                e = J.Z.getGuild(r);
            }
        }
        return null != e ? isNaN((n = eX(e))) && (n = W.default.extractTimestamp(this.channelId)) : (n = W.default.extractTimestamp(this.channelId)), (this._ackMessageTimestamp = n), n;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? W.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = q.Z.getChannel(this.channelId);
        if (null == e) return e_.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let n = this.guildId,
            r = null != n && k.Z.isActive(n, e.parent_id, this.channelId),
            i = U.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== r || this._isJoinedThread !== i) && ((this._isActiveThread = r), (this._isJoinedThread = i), !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - W.DISCORD_EPOCH) / V.Z.Millis.DAY);
        e !== this.lastViewed &&
            ((this.lastViewed = e),
            this.canTrackUnreads() &&
                !this.hasUnread() &&
                this.ack({
                    force: !0,
                    trackAnalytics: !1
                }));
    }
    constructor(e, n = ed.W.CHANNEL) {
        ef(this, 'channelId', void 0), ef(this, 'type', ed.W.CHANNEL), ef(this, '_guildId', void 0), ef(this, '_isThread', void 0), ef(this, '_isActiveThread', void 0), ef(this, '_isJoinedThread', void 0), ef(this, '_isResourceChannel', void 0), ef(this, '_persisted', void 0), ef(this, 'loadedMessages', void 0), ef(this, '_lastMessageId', void 0), ef(this, '_lastMessageTimestamp', void 0), ef(this, '_ackMessageId', void 0), ef(this, '_ackMessageTimestamp', void 0), ef(this, 'isManualAck', void 0), ef(this, 'ackPinTimestamp', void 0), ef(this, 'lastPinTimestamp', void 0), ef(this, '_oldestUnreadMessageId', void 0), ef(this, 'oldestUnreadMessageIdStale', void 0), ef(this, 'estimated', void 0), ef(this, '_unreadCount', void 0), ef(this, '_mentionCount', void 0), ef(this, 'flags', void 0), ef(this, 'lastViewed', void 0), ef(this, 'outgoingAck', void 0), ef(this, 'outgoingAckTimer', null), ef(this, 'ackMessageIdAtChannelSelect', null), ef(this, 'ackedWhileCached', void 0), ef(this, 'snapshot', void 0), (this.channelId = e), (this.type = n), (this._guildId = null), (this._isThread = !1), (this._isActiveThread = !1), (this._isJoinedThread = !1), (this._isResourceChannel = !1), (this._persisted = !1), (this.loadedMessages = !1), (this._lastMessageId = null), (this._lastMessageTimestamp = 0), (this._ackMessageId = null), (this._ackMessageTimestamp = 0), (this.isManualAck = !1), (this.ackPinTimestamp = 0), (this.lastPinTimestamp = 0), (this._oldestUnreadMessageId = null), (this.oldestUnreadMessageIdStale = !1), (this.estimated = !1), (this._unreadCount = 0), (this._mentionCount = 0), (this.outgoingAck = null);
    }
}
function eF(e) {
    e.forEach((e) => {
        if ((0, Z.Em)(e.type)) {
            let n = eZ.get(e.id);
            (n._guildId = e.guild_id), (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ex(e.lastPinTimestamp)), (n._isResourceChannel = e.hasFlag(eu.zZ.IS_GUILD_RESOURCE_CHANNEL)), Z.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eV(e) {
    e.forEach((e) => {
        if ((0, Z.Em)(e.type)) {
            var n;
            let r = eZ.get(e.id);
            (r.lastMessageId = e.last_message_id), (r.lastPinTimestamp = ex(e.last_pin_timestamp)), (r._isResourceChannel = (0, j.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, eu.zZ.IS_GUILD_RESOURCE_CHANNEL)), Z.Ec.has(e.type) && r.syncThreadSettings();
        }
    });
}
function ej(e) {
    eK(e), ez(e), eW(e), eq(e);
}
function eH(e) {
    eY(e);
}
function eY(e) {
    let n = ea.default.getCurrentUser();
    if (null == n) return !1;
    let r = eZ.get(n.id, ed.W.NOTIFICATION_CENTER);
    e.forEach((e) => {
        if (null == e.since || e.type !== eo.OGo.PENDING_INCOMING) return;
        let n = new Date(e.since).getTime();
        (null != r.ackMessageId ? W.default.extractTimestamp(r.ackMessageId) : 0) < n && (r.mentionCount++, (r.lastMessageId = W.default.fromTimestamp(n)));
    });
}
function eW(e) {
    let n = 24;
    eZ.get(e.id, ed.W.GUILD_HOME).lastMessageId = W.default.fromTimestamp(p()(Date.now()).subtract(n, 'h').valueOf());
}
function eK(e) {
    var n;
    null === (n = e.threads) ||
        void 0 === n ||
        n.forEach((n) => {
            if (!Z.AW.has(n.type)) return;
            let r = eZ.get(n.id);
            (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = ex(n.lastPinTimestamp)), (r._isThread = !0), (r._isActiveThread = !0), (r._isJoinedThread = null != n.member), null == r.ackMessageId && (r.ackMessageId = W.default.fromTimestamp(eQ(e.id, n.id))), null == r.ackPinTimestamp && (r.ackPinTimestamp = eQ(e.id, n.id));
        });
}
function ez(e) {
    var n, r;
    if ((null === (n = e.guild_scheduled_events) || void 0 === n ? void 0 : n.length) === 0 && null == eZ.getIfExists(e.id, ed.W.GUILD_EVENT)) return;
    let i = eZ.get(e.id, ed.W.GUILD_EVENT);
    i._guildId = e.id;
    let a = 0,
        s = null,
        o = null !== (r = i._ackMessageId) && void 0 !== r ? r : W.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach((e) => {
        W.default.compare(e.id, s) > 0 && (s = e.id), W.default.compare(e.id, o) > 0 && a++;
    }),
        (i.lastMessageId = s),
        (i.mentionCount = a);
}
function eq(e) {
    let n = J.Z.getGuild(e.id);
    if (null == n) return;
    let r = null == n ? void 0 : n.latestOnboardingQuestionId;
    if (null == r) return;
    let i = eZ.get(n.id, ed.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function eQ(e, n) {
    var r, i, a;
    let s = q.Z.getChannel(n),
        o = J.Z.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
        l = (null == s ? void 0 : s.isForumPost()) ? 0 : eX(o),
        u = (null !== (a = null === (r = U.Z.joinTimestamp(n)) || void 0 === r ? void 0 : r.getTime()) && void 0 !== a ? a : 0) - 5000;
    isNaN(u) && (u = -5000);
    let c = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
        d = null != c ? new Date(c).getTime() - 1 : 0;
    isNaN(d) && (d = 0);
    let f = Math.max(u, d);
    return f <= 0 && (f = W.default.extractTimestamp(n) - 1), (isNaN(f) || f <= 0) && (f = 0), isNaN(l) ? f : Math.max(l, f);
}
function eX(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let n = e.joinedAt.getTime();
            if (!isNaN(n)) return n;
        } else if ('string' == typeof e.joinedAt) {
            let n = new Date(e.joinedAt).getTime();
            if (!isNaN(n)) return n;
        } else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt;
    }
    return Date.now();
}
function eJ(e, n, r) {
    let i = e.guildId;
    return !(null != i && k.Z.isActive(i, n.parent_id, e.channelId)) && e$(e, r);
}
function e$(e, n) {
    return !!(e.mentionCount > 0) || (!(W.default.compare(e.channelId, n) > 0 || (null != e._ackMessageId && W.default.compare(e._ackMessageId, n) > 0) || (null != e._lastMessageId && W.default.compare(e._lastMessageId, n) > 0)) && !0);
}
function e0(e) {
    switch (e.type) {
        case ed.W.GUILD_HOME:
        case ed.W.GUILD_EVENT:
        case ed.W.GUILD_ONBOARDING_QUESTION:
            return null != J.Z.getGuild(e.channelId);
        case ed.W.NOTIFICATION_CENTER:
            var n;
            return W.default.cast(null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.channelId;
        default:
            return !0;
    }
}
function e1(e) {
    if (null == e) return !1;
    let n = eZ.get(e);
    return !!eG(n) && n.ack({});
}
function e2(e) {
    if (null == e) return;
    let n = eZ.get(e);
    if (n.type !== ed.W.CHANNEL) return;
    let r = q.Z.getChannel(n.channelId);
    if (null == r || !r.isForumPost() || null == r.parent_id) return;
    let i = r.parent_id,
        a = eZ.get(i);
    k.Z.hasLoaded(r.guild_id) && W.default.keys(k.Z.getThreadsForParent(r.guild_id, i)).every((e) => t6.hasOpenedThread(e) || 0 > W.default.compare(e, a.ackMessageId)) && a.ack({});
}
function e3(e) {
    var n, r;
    let { guilds: i, relationships: a, initialPrivateChannels: s, readState: o } = e;
    eL(),
        (eI = null),
        !eT && !o.partial && eZ.clearAll(),
        (eT = !1),
        o.entries.forEach((e) => {
            var n, r;
            let i = null !== (n = e.read_state_type) && void 0 !== n ? n : ed.W.CHANNEL;
            i !== ed.W.CHANNEL && (e = ew(e));
            let a = eZ.get(e.id, i);
            (a._persisted = !0), (a._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0), (a.flags = e.flags), (a.lastViewed = e.last_viewed);
            let s = q.Z.getBasicChannel(e.id);
            null != s && (0, Z.Q5)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? (a.ackMessageId = W.default.fromTimestamp(eQ(s.guild_id, s.id))) : a.ackedWhileCached ? -1 === W.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : (a.ackMessageId = e.last_message_id), (a.ackedWhileCached = void 0), (a.ackPinTimestamp = ex(e.last_pin_timestamp)), eZ._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eZ._mentionChannels.add(a.channelId);
        }),
        eZ.resetGuildSentinels();
    let l = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    for (let e of (null != l && (eZ.get(l, ed.W.NOTIFICATION_CENTER).lastMessageId = W.default.fromTimestamp(Date.now())), eH(a), eF(s), i)) eF(null !== (r = e.channels) && void 0 !== r ? r : []), e7(e), ej(e);
    e4(), (eS = setTimeout(() => e5(o.entries), 10 * V.Z.Millis.SECOND));
}
function e4() {
    null != eS && clearTimeout(eS);
}
ef(eZ, '_guildReadStateSentinels', {}), ef(eZ, '_readStates', {}), ef(eZ, '_mentionChannels', new Set());
let e6 = (0, _.throttle)((e) => {
    e.delete();
}, 100);
function e5(e) {
    let n = eC();
    for (let i of e) {
        var r;
        let e = null !== (r = i.read_state_type) && void 0 !== r ? r : ed.W.CHANNEL,
            a = eZ.get(i.id, e);
        a.shouldDeleteReadState(n) && e6(a);
    }
}
function e7(e) {
    if (null != e.channelUpdates) {
        var n;
        eF(null === (n = e.channelUpdates) || void 0 === n ? void 0 : n.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let n of e.channelTimestampUpdates) {
            let e = eZ.get(n.id);
            null != n.last_message_id && (e.lastMessageId = n.last_message_id), null != n.last_pin_timestamp && (e.lastPinTimestamp = ex(n.last_pin_timestamp));
        }
}
function e8(e) {
    let { lazyPrivateChannels: n } = e;
    eF(n);
}
function e9(e) {
    let { readStates: n, selectedChannelId: r } = e;
    eL(),
        (eI = null),
        (eE = r),
        (ev = z.ZP.getCurrentSidebarChannelId(eE)),
        eZ.clearAll(),
        n.forEach((e) => {
            let n = eZ.get(e.channelId);
            n.deserializeForOverlay(e), n.type === ed.W.CHANNEL && n.rebuildChannelState();
        });
}
function te(e) {
    var n;
    let { guild: r } = e,
        i = eC();
    eZ.forEach((e) => {
        e.guildId === r.id && e.shouldDeleteReadState(i) && e.delete(!1);
    }),
        eF(null !== (n = r.channels) && void 0 !== n ? n : []),
        e7(r),
        ej(r);
}
function tt(e) {
    let { channelId: n, isAfter: r, messages: i } = e,
        a = eZ.get(n);
    a.loadedMessages = !0;
    let s = ee.Z.getMessages(n);
    null != s && (i.length > 0 && 1 === W.default.compare(i[0].id, a.ackMessageId) && 0 === a.unreadCount ? a.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === a.ackMessageId ? a.rebuildChannelState() : r && null != a.ackMessageId && s.has(a.ackMessageId, !0) && ((a.unreadCount += i.length), null == a.oldestUnreadMessageId && a.rebuildChannelState())), eV(i.map((e) => e.thread).filter(H.lm));
}
function tn(e) {
    let { channelId: n } = e;
    eZ.get(n).rebuildChannelState();
}
function tr(e) {
    let n,
        r,
        { channelId: a, message: s, isPushNotification: o } = e,
        l = eZ.get(a),
        u = null != l.lastMessageId && l.lastMessageId >= s.id;
    l.lastMessageId = s.id;
    let c = ea.default.getCurrentUser(),
        d = q.Z.getBasicChannel(a);
    if (null != s.author && null != c && s.author.id === c.id && !eo.V$x.SELF_MENTIONABLE_SYSTEM.has(s.type))
        return (
            null != l.outgoingAck && l.clearOutgoingAck(),
            tU({
                channelId: a,
                messageId: s.id,
                manual: !1
            })
        );
    let f = (0, R.P)();
    if ((null == f ? void 0 : f.isReady()) === !0) {
        let e = f.getCurrentRoute();
        if (b.Z.getChatOpen(l.channelId)) n = l.channelId;
        else if ((null == e ? void 0 : e.name) === 'channel') n = e.params.channelId;
        else if ((null == e ? void 0 : e.name) === 'guilds') {
            var _;
            n = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId;
        }
    } else null == f && ((n = er.Z.getChannelId()), (r = z.ZP.getCurrentSidebarChannelId(n)));
    let h = n === a || r === a;
    if ((h && eG(l) && !o) || (null != i && i.isInstanceFocused() && h && i.isInstanceLocked() && i.isPinned(eo.Odu.TEXT))) return l.ack({ messageId: s.id });
    (null == l.oldestUnreadMessageId || l.oldestUnreadMessageIdStale) && (l.oldestUnreadMessageId = s.id), !u && l.unreadCount++, !(en.Z.isBlockedOrIgnoredForMessage(s) || (s.type === eo.uaV.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === eo.d4z.GROUP_DM)) && ti(s, c, l) && l.mentionCount++;
}
function ti(e, n, r) {
    if (
        null != n &&
        (0, x.Hl)({
            rawMessage: e,
            userId: n.id,
            suppressEveryone: ei.ZP.isSuppressEveryoneEnabled(r.guildId),
            suppressRoles: ei.ZP.isSuppressRolesEnabled(r.guildId)
        })
    )
        return !0;
    let i = q.Z.getChannel(e.channel_id);
    return !!eM(i) || (!!ei.ZP.mentionOnAllMessages && null != i && !i.isVocal() && !ei.ZP.isChannelMuted(i.guild_id, i.id) && ei.ZP.resolvedMessageNotifications(i) === eo.bL.ALL_MESSAGES) || !1;
}
function ta(e) {
    let { channel: n } = e;
    if (!(0, Z.Em)(n.type)) return !1;
    let r = eZ.get(n.id);
    (r.lastMessageId = n.lastMessageId), (r.lastPinTimestamp = ex(n.lastPinTimestamp));
}
function ts(e) {
    let { channel: n } = e;
    to(n), tl(n);
}
function to(e) {
    if (!Z.AW.has(e.type)) return !1;
    let n = eZ.get(e.id);
    (n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ex(e.lastPinTimestamp)), n.syncThreadSettings(), e.ownerId === K.default.getId() && (n.loadedMessages = !0);
}
function tl(e) {
    let n = e.parent_id;
    eZ.get(n).lastMessageId = e.id;
    let r = ea.default.getCurrentUser();
    if (e.ownerId === (null == r ? void 0 : r.id))
        return (
            (eZ.get(e.id)._persisted = !0),
            tU({
                channelId: n,
                messageId: e.id,
                manual: !1
            })
        );
}
function tu(e) {
    let { channel: n } = e;
    return !!Z.AW.has(n.type) && eZ.get(n.id).syncThreadSettings();
}
function tc(e) {
    let { id: n } = e;
    return eZ.get(n).syncThreadSettings();
}
function td(e) {
    return (0, B.s)(e) && eZ.get(e.id).syncThreadSettings();
}
function tf(e) {
    let { threads: n } = e;
    n.forEach((e) => {
        if (!Z.AW.has(e.type)) return;
        let n = eZ.get(e.id);
        if (((n.lastMessageId = e.lastMessageId), (n.lastPinTimestamp = ex(e.lastPinTimestamp)), (n._isThread = !0), (n._isActiveThread = !0), (n._isJoinedThread = U.Z.hasJoined(e.id)), e.isForumPost())) {
            let n = eZ.get(e.parent_id);
            0 > W.default.compare(n.lastMessageId, e.id) && (n.lastMessageId = e.id);
        }
    });
}
function t_(e) {
    let { threads: n } = e;
    eV(n);
}
function th(e) {
    let { channelId: n } = e;
    return e1(n);
}
function tp(e) {
    let { messages: n, threads: r } = e;
    for (let e of n)
        eV(
            e
                .map((e) => {
                    let { thread: n } = e;
                    return n;
                })
                .filter(H.lm)
        );
    eV(r);
}
function tm(e) {
    let n = ea.default.getCurrentUser();
    return null != e.creator_id && null != n && e.creator_id === n.id;
}
function tg(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id,
        i = eZ.get(n.guild_id, ed.W.GUILD_EVENT);
    if (((i.lastMessageId = n.id), tm(n))) {
        tG({
            type: 'GUILD_FEATURE_ACK',
            id: r,
            ackType: ed.W.GUILD_EVENT,
            ackedId: n.id,
            local: !1
        });
        return;
    }
    !ei.ZP.isMuteScheduledEventsEnabled(r) && i.mentionCount++;
}
function tE(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tm(n) || ![ec.p1.CANCELED, ec.p1.COMPLETED].includes(n.status)) return !1;
    eZ.get(r, ed.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tv(e) {
    let { guildScheduledEvent: n } = e,
        r = n.guild_id;
    if (tm(n)) return !1;
    eZ.get(n.guild_id, ed.W.GUILD_EVENT).handleGuildEventRemoval(r, n.id);
}
function tI(e) {
    let n = ea.default.getCurrentUser();
    if (null == n || null == e.relationship.since || (e.relationship.type !== eo.OGo.PENDING_INCOMING && e.relationship.type !== eo.OGo.FRIEND)) return !1;
    let r = eZ.get(n.id, ed.W.NOTIFICATION_CENTER),
        i = e.relationship.type === eo.OGo.FRIEND,
        a = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? W.default.extractTimestamp(r.ackMessageId) : 0) < a && ((r.lastMessageId = W.default.fromTimestamp(a)), w.Z.active ? tF(n.id, ed.W.NOTIFICATION_CENTER, void 0, !1) : i ? r.mentionCount-- : r.mentionCount++);
}
function tT(e) {
    let n = ea.default.getCurrentUser();
    if (null == n || null == e.relationship.since || e.relationship.type !== eo.OGo.PENDING_INCOMING) return !1;
    let r = eZ.get(n.id, ed.W.NOTIFICATION_CENTER),
        i = new Date(e.relationship.since).getTime();
    (null != r.ackMessageId ? W.default.extractTimestamp(r.ackMessageId) : 0) <= i && (r.mentionCount = Math.max(0, r.mentionCount - 1));
}
function tb(e) {
    var n;
    let { item: r } = e,
        i = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eZ.get(i, ed.W.NOTIFICATION_CENTER);
    if (((a.lastMessageId = r.id), w.Z.active)) {
        tF(i, ed.W.NOTIFICATION_CENTER, r.id, !1);
        return;
    }
    a.mentionCount++;
}
function ty(e) {
    var n;
    let { ids: r, optimistic: i } = e;
    if (i || w.Z.active) return !1;
    let a = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == a) return !1;
    let s = eZ.get(a, ed.W.NOTIFICATION_CENTER);
    r.forEach((e) => {
        0 > W.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0));
    });
}
function tS(e) {
    let { guild: n } = e;
    return eZ.clear(n.id, ed.W.GUILD_EVENT);
}
function tA(e) {
    let { guild: n } = e,
        r = n.latest_onboarding_question_id;
    if (null == r) return;
    let i = eZ.get(n.id, ed.W.GUILD_ONBOARDING_QUESTION);
    (i._guildId = n.id), (i.lastMessageId = r);
}
function tN(e) {
    let { channel: n } = e;
    return eZ.clear(n.id);
}
function tC(e) {
    let { channelId: n } = e,
        r = z.ZP.getCurrentSidebarChannelId(n),
        i = q.Z.getChannel(n);
    if (null != i) {
        var a;
        let e = eZ.get(i.id);
        (e.ackMessageIdAtChannelSelect = null !== (a = e.ackMessageId) && void 0 !== a ? a : W.default.fromTimestamp(e.getAckTimestamp())), e.recordLastViewedTime();
    }
    tD(eE), tD(ev);
    let s = !1;
    return eE !== n && ((s = tL(eE) || s), (s = tL(ev) || s)), (eE === n || ((null == i ? void 0 : i.type) != null && eo.TPd.GUILD_THREADS_ONLY.has(i.type))) && (s = e1(n) || s), eE === n && (s = e1(r) || s), (eE = n), (ev = r), s;
}
function tR() {
    let e = z.ZP.getCurrentSidebarChannelId(eE),
        n = !1;
    return ev !== e ? ((n = tL(ev)), (ev = e)) : (n = e1(e) || n), n;
}
function tO(e) {
    let { channelId: n } = e;
    if (null == n) return;
    let r = eZ.get(n);
    if (!r.hasMentions()) return (r.oldestUnreadMessageId = null), r.ack({ isExplicitUserAction: !0 });
}
function tD(e) {
    if (null != e) eZ.get(e).isManualAck = !1;
}
function tL(e) {
    if (null == e) return !1;
    let n = eZ.get(e);
    return !n.hasUnread() && ((n.oldestUnreadMessageId = null), !0);
}
function tx(e) {
    let n = !1;
    for (let [r, i] of W.default.entries(eA)) i === e.windowId && (n = tw(r, e.focused) || n);
    return n;
}
function tw(e, n) {
    if (null == e) return !1;
    let r = eZ.get(e);
    return !n && !r.hasUnread() && (r.oldestUnreadMessageIdStale = !0), e1(e);
}
function tP(e) {
    let { channelId: n } = e;
    return e1(n);
}
function tM(e) {
    let { channelId: n, messageId: r, immediate: i = !1, force: a = !1, context: s, location: o } = e,
        l = eZ.get(n),
        u = l.ack({
            messageId: r,
            local: s !== eo.e3s,
            immediate: i,
            force: a,
            isExplicitUserAction: !0,
            location: o
        });
    return null != r ? (l.rebuildChannelState(), !0) : u;
}
function tk(e) {
    let { channelId: n, timestamp: r } = e;
    return eZ.get(n).ackPins(r);
}
function tU(e) {
    let { channelId: n, messageId: r, manual: i, newMentionCount: a } = e,
        s = eZ.get(n);
    return i
        ? (s.rebuildChannelState(r, !0, a), s.clearOutgoingAck(), !0)
        : r !== s._ackMessageId &&
              s.ack({
                  messageId: r,
                  local: !0
              });
}
function tB(e) {
    let { channelId: n } = e;
    return eZ.get(n).ack({
        messageId: void 0,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
    });
}
function tG(e) {
    let { id: n, ackType: r, ackedId: i, local: a } = e;
    return tF(n, r, i, a);
}
function tZ(e) {
    var n;
    let { ackType: r, ackedId: i, local: a } = e,
        s = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    return null != s && tF(s, r, i, a);
}
function tF(e, n, r, i) {
    var a;
    let s = eZ.get(e, n);
    return (
        r !== s.ackMessageId &&
        s.lastMessageId !== s.ackMessageId &&
        (null != s.lastMessageId || 0 !== s.mentionCount) &&
        ((r = null !== (a = null != r ? r : s.lastMessageId) && void 0 !== a ? a : W.default.fromTimestamp(s.getAckTimestamp())),
        s.ack({
            messageId: r,
            local: null == i || i
        }))
    );
}
function tV(e) {
    let { channelId: n, lastPinTimestamp: r } = e,
        i = eZ.get(n),
        a = ex(r);
    return i.lastPinTimestamp !== a && ((i.lastPinTimestamp = a), !0);
}
function tj(e) {
    let n = !1;
    for (let r of e.channels) {
        let e = eZ.get(r.id),
            i = ex(r.lastPinTimestamp);
        (e.lastMessageId !== r.lastMessageId || e.lastPinTimestamp !== i) && ((n = !0), (e.lastMessageId = r.lastMessageId), (e.lastPinTimestamp = i));
    }
    return n;
}
function tH() {
    eI = null;
}
function tY(e) {
    let { readStates: n } = e;
    (eT = !0),
        eL(),
        n.forEach((e) => {
            var n;
            let r = null !== (n = e.type) && void 0 !== n ? n : ed.W.CHANNEL;
            (e.type = r), null == eZ._readStates[r] && (eZ._readStates[r] = {}), (eZ._readStates[r][e.channelId] = (0, v.gh)(e, eZ));
        });
}
function tW() {
    if (null != eE) {
        let e = eZ.get(eE);
        !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0);
    }
    return !1;
}
function tK(e) {
    let { channelId: n, chatOpen: r } = e;
}
function tz() {
    return e1(eE);
}
function tq(e, n, r) {
    e.forEach((e) => {
        let { channelId: n, messageId: r, readStateType: i } = e;
        eZ.get(n, i).ack({
            messageId: r,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    }),
        n === eo.e3s &&
            (eb.push(
                ...e.map((e) => ({
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    read_state_type: e.readStateType
                }))
            ),
            !ey && ek(r));
}
function tQ(e) {
    let { channels: n, context: r, onFinished: i } = e;
    tq(
        n.filter((e) => null != e.messageId && t6.hasUnreadOrMentions(e.channelId, e.readStateType)),
        r,
        i
    );
}
function tX(e) {
    let { channelId: n, windowId: r } = e;
    return eA[n] !== r && (f()(void 0 === eA[n], 'handleEnableAutomaticAck: channel already visible in another window'), (eA[n] = r), e1(n));
}
function tJ(e) {
    let { channelId: n } = e;
    return (eA[n] = void 0), !1;
}
function t$(e) {
    let { channelId: n } = e;
    return tL(n);
}
function t0(e) {
    let { channelId: n } = e;
    return e1(n);
}
function t1(e) {
    let { changesByChannelId: n } = e;
    for (let e in n) {
        var r, i;
        let a = n[e],
            s = eZ.getIfExists(e);
        if (null != s) for (let e of [null === (r = a.new_messages) || void 0 === r ? void 0 : r[0]].concat(null !== (i = a.modified_messages) && void 0 !== i ? i : []).filter(H.lm)) 1 === W.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id);
    }
}
function t2(e) {
    var n;
    let { ackedId: r } = e,
        i = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == i) return !1;
    let a = eZ.get(i, ed.W.MESSAGE_REQUESTS);
    if (r === a.ackMessageId) return !1;
    (a.ackMessageId = r),
        a.ack({
            messageId: r,
            isExplicitUserAction: !0
        });
}
function t3(e) {
    var n;
    let r = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null == r) return !1;
    let i = eZ.get(r, ed.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0;
}
class t4 extends (s = m.ZP.Store) {
    initialize() {
        let e = [Q.Z, ea.default, J.Z, X.Z, q.Z, er.Z, ee.Z, et.Z, b.Z, k.Z, U.Z, z.ZP, C.ZP, N.Z, S.Z, ei.ZP, es.Z, w.Z, O.Z, G.Z, L.Z];
        this.waitFor(...e), this.syncWith([z.ZP], tR);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = eZ._readStates[ed.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getIfExists(e, n);
    }
    getNotifCenterReadState(e) {
        var n;
        return null === (n = eZ._readStates[ed.W.NOTIFICATION_CENTER]) || void 0 === n ? void 0 : n[e];
    }
    hasUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => (e.canBeUnread() ? e.unreadCount : 0), 0);
    }
    getMentionCount(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL,
            r = eZ.getValue(e, n, (e) => (e.canHaveMentions() ? e.getMentionCount() : 0), 0);
        if ((0, y.Z)(e)) {
            if (r > 0) return 1;
        }
        return r;
    }
    getGuildChannelUnreadState(e, n, r, i, a) {
        return eZ.getValue(e.id, ed.W.CHANNEL, (s) => s.getGuildChannelUnreadState(e, n, r, i, a), {
            mentionCount: 0,
            unread: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => (e.canBeUnread() ? e.ackMessageId : null), null);
    }
    getTrackedAckMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => (e.canTrackUnreads() ? e._ackMessageId : null), null);
    }
    lastMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eZ.getValue(e, ed.W.CHANNEL, (e) => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadMessageId : null), null);
    }
    getOldestUnreadTimestamp(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => (e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0), 0);
    }
    isEstimated(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.W.CHANNEL;
        return eZ.getValue(e, n, (e) => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eZ.getValue(e, ed.W.CHANNEL, (e) => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, n, r) {
        let i = eZ.get(n);
        if (!0 === eZ.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= W.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
        let a = eX(r);
        return W.default.extractTimestamp(e) > a;
    }
    getAllReadStates(e) {
        let n = [];
        return (
            eZ.forEach((r) => {
                switch (r.type) {
                    case ed.W.GUILD_HOME:
                    case ed.W.GUILD_EVENT:
                    case ed.W.GUILD_ONBOARDING_QUESTION:
                        null != J.Z.getGuild(r.channelId) && n.push(r.serialize(e));
                        break;
                    case ed.W.NOTIFICATION_CENTER:
                    case ed.W.MESSAGE_REQUESTS:
                        var i;
                        W.default.cast(null === (i = ea.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === r.channelId && n.push(r.serialize(e));
                        break;
                    default:
                        n.push(r.serialize(e));
                }
            }),
            n
        );
    }
    getGuildUnreadsSentinel(e) {
        return eZ.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eZ.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        var n;
        let r = null === (n = ea.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        return null == r ? null : eZ.get(r, e).ackMessageId;
    }
    getSnapshot(e, n) {
        let r = eZ.get(e);
        return null == r.snapshot || Date.now() - r.snapshot.takenAt > n ? r.takeSnapshot() : r.snapshot;
    }
}
ef(t4, 'displayName', 'ReadStateStore');
let t6 = new t4(I.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: t1,
    CONNECTION_OPEN: e3,
    CONNECTION_OPEN_SUPPLEMENTAL: e8,
    LOGOUT: e4,
    OVERLAY_INITIALIZE: e9,
    CACHE_LOADED: tY,
    GUILD_CREATE: te,
    LOAD_MESSAGES_SUCCESS: tt,
    MESSAGE_CREATE: tr,
    MESSAGE_DELETE: tn,
    MESSAGE_DELETE_BULK: tn,
    MESSAGE_ACK: tU,
    CHANNEL_ACK: tM,
    CHANNEL_LOCAL_ACK: tB,
    CHANNEL_PINS_ACK: tk,
    CHANNEL_PINS_UPDATE: tV,
    CHANNEL_SELECT: tC,
    VOICE_CHANNEL_SELECT: tO,
    CHANNEL_CREATE: ta,
    THREAD_CREATE: ts,
    THREAD_UPDATE: tu,
    THREAD_LIST_SYNC: tf,
    LOAD_THREADS_SUCCESS: t_,
    LOAD_ARCHIVED_THREADS_SUCCESS: t_,
    SEARCH_FINISH: tp,
    MOD_VIEW_SEARCH_FINISH: tp,
    THREAD_MEMBER_UPDATE: tc,
    THREAD_MEMBERS_UPDATE: td,
    CHANNEL_DELETE: tN,
    THREAD_DELETE: tN,
    WINDOW_FOCUS: tx,
    UPDATE_CHANNEL_DIMENSIONS: tP,
    CURRENT_USER_UPDATE: tH,
    DRAWER_OPEN: tW,
    DRAWER_CLOSE: tz,
    BULK_ACK: tQ,
    ENABLE_AUTOMATIC_ACK: tX,
    DISABLE_AUTOMATIC_ACK: tJ,
    GUILD_FEATURE_ACK: tG,
    GUILD_SCHEDULED_EVENT_CREATE: tg,
    GUILD_SCHEDULED_EVENT_UPDATE: tE,
    GUILD_SCHEDULED_EVENT_DELETE: tv,
    GUILD_DELETE: tS,
    GUILD_UPDATE: tA,
    RESORT_THREADS: th,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: tK,
    DECAY_READ_STATES: eL,
    NOTIFICATION_CENTER_ITEM_CREATE: tb,
    RELATIONSHIP_ADD: tI,
    RELATIONSHIP_REMOVE: tT,
    NOTIFICATION_CENTER_ITEMS_ACK: ty,
    USER_NON_CHANNEL_ACK: tZ,
    PASSIVE_UPDATE_V2: tj,
    CLEAR_OLDEST_UNREAD_MESSAGE: t$,
    TRY_ACK: t0,
    MESSAGE_REQUEST_ACK: t2,
    MESSAGE_REQUEST_CLEAR_ACK: t3
});
n.ZP = t6;
