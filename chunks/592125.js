n.d(t, {
    o: function () {
        return j;
    }
});
var r,
    i = n(47120);
var a = n(51350);
var o = n(411104);
var s = n(392711),
    l = n.n(s),
    u = n(956067),
    c = n(442837),
    d = n(570140),
    _ = n(287328),
    E = n(86670),
    f = n(591526),
    h = n(458772),
    p = n(38217),
    m = n(710845),
    I = n(853856),
    T = n(131704),
    g = n(823379),
    S = n(709054),
    A = n(314897),
    v = n(430824),
    N = n(594174),
    O = n(981631);
function R(e, t, n) {
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
let C = new m.Z('ChannelStore'),
    y = {},
    L = {},
    b = {},
    D = {},
    M = null,
    P = {},
    U = {},
    w = 0,
    x = {},
    G = {},
    k = new Set(),
    B = {},
    F = 0,
    Z = {},
    V = 0,
    H = 0,
    Y = !1;
class j {
    static loadAllMissingChannels() {
        let e = v.Z.getGuildIds().filter((e) => !k.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : j.loadGuildIds([null === (t = q(e)) || void 0 === t ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(g.lm);
        if (0 === t.length) return null;
        let n = _.Z.database();
        if (null == n || !t.some((e) => !k.has(e))) return null;
        let r = F;
        return (0, E.gs)('loadChannels', async () => {
            let e = t
                    .map((e) => {
                        if (k.has(e)) return null;
                        if (null != B[e]) return C.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
                        let t = f.Z.getAsync(n, e).then(
                            (t) => (
                                C.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t
                                }
                            )
                        );
                        return (
                            (B[e] = t),
                            {
                                guildId: e,
                                promise: t
                            }
                        );
                    })
                    .filter(g.lm),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (F !== r) return C.fileOnly('lastResetTime has changed, skipping loads for ' + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !k.has(e.guildId));
                await d.Z.dispatch({
                    type: 'LOAD_CHANNELS',
                    channels: n
                });
            } catch (t) {
                for (let n of (C.error('Failed to load channels from disk for ' + e.map((e) => e.guildId), t), e)) delete B[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function W(e, t, n) {
    if (null == e || 'null' === e || k.has(e) || (0 === t && h.Z.hasGuild(e))) return;
    let r = _.Z.database();
    if (null == r) return;
    C.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
    let i = (0, E.Pv)('ensureGuildLoaded('.concat(e, ')'), () => f.Z.getSync(r, e), 'ensureGuildLoaded');
    if (null == i) {
        k.add(e), h.Z.restored(e), C.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(r, ')'));
        return;
    }
    let [a, o] = i;
    for (let n of ((0, p.ZP)(a), 0 !== t && (H += 1), k.add(e), h.Z.restored(e), u.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), o), a)) !Object.hasOwn(L, n.id) && ee((0, T._H)(n));
    C.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(H, ')'));
}
function K(e, t, n) {
    if (!Object.hasOwn(L, e) && !Object.hasOwn(D, e) && !Object.hasOwn(P, e) && !Object.hasOwn(G, e) && 1 === t) {
        let r = h.Z.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && W(r.guild_id, t, n);
    }
}
function z(e) {
    if ((C.fileOnly('Deleting guild channels for '.concat(e)), null != b[e])) {
        for (let t of S.default.keys(b[e])) delete L[t];
        delete b[e];
    }
}
function q(e) {
    var t, n, r, i;
    return K(e, 0, 'getBasicChannel'), null !== (i = null !== (r = null !== (n = null !== (t = L[e]) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : P[e]) && void 0 !== r ? r : G[e]) && void 0 !== i ? i : h.Z.getBasicChannel(e);
}
function Q(e) {
    var t, n, r, i;
    return K(e, 1, 'getChannel'), null !== (i = null !== (r = null !== (n = null !== (t = L[e]) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : P[e]) && void 0 !== r ? r : G[e]) && void 0 !== i ? i : Z[e];
}
function X(e) {
    e.isPrivate() ? (delete Z[e.id], $(e)) : e.isThread() ? J(e) : T.oj.has(e.type) && et(e);
}
function $(e) {
    (D[e.id] = e), e.type === O.d4z.DM && (U[e.getRecipientId()] = e.id), (w += 1);
}
function J(e) {
    let t = L[e.parent_id];
    (P[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type
    })),
        e.isScheduledForDeletion() &&
            d.Z.dispatch({
                type: 'THREAD_DELETE',
                channel: e
            });
}
function ee(e) {
    var t, n;
    let { id: r, guild_id: i } = e;
    (L[r] = e), (b[i] = null !== (t = b[i]) && void 0 !== t ? t : {}), (b[i][r] = e), (x[i] = (null !== (n = x[i]) && void 0 !== n ? n : 0) + 1);
}
function et(e) {
    ee(e);
}
function en(e) {
    if (null == e.guild_id || T.Ec.has(e.type)) (0, T.hv)(e.type) && (w += 1);
    else {
        var t;
        x[e.guild_id] = (null !== (t = x[e.guild_id]) && void 0 !== t ? t : 0) + 1;
    }
}
function er(e) {
    let t = b;
    for (let n of ((U = {}), (L = {}), (b = {}), (P = {}), (x = {}), (Z = {}), (B = {}), (F = Date.now()), (M = e.initialPrivateChannels), e.initialPrivateChannels.forEach($), e.guilds)) 'partial' === n.dataMode && (l().forEach(t[n.id], ee), C.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(eb(n.id)))), ei(n);
    eC();
}
function ei(e) {
    if (null != e.channels) for (let t of (C.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), z(e.id), k.add(e.id), h.Z.restored(e.id), e.channels)) ee(t);
    if (null != e.channelUpdates) {
        let t = e.channelUpdates;
        for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && h.Z.invalidate(e.id), t.deletes)) eI(L[n]);
        for (let e of t.writes) ee(e);
    }
    if (null != e.threads) for (let t of e.threads) J(t);
}
function ea(e) {
    let { lazyPrivateChannels: t } = e;
    null != M && ((D = {}), M.forEach($)), t.forEach($);
}
function eo(e) {
    let { guilds: t } = e,
        n = b;
    (L = {}),
        (b = {}),
        (x = {}),
        t.forEach((e) => {
            if ('unavailable' === e.data_mode) C.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(eb(e.id))), l().forEach(n[e.id], ee);
            else if ('partial' === e.data_mode) {
                var t, r;
                C.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(eb(e.id))), l().forEach(n[e.id], ee);
                let i = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
                i.length > 0 && (W(e.id, 1, 'handleBackgroundSync'), i.forEach((e) => eI(L[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach((t) => ee((0, T.q_)(t, e.id)));
            } else C.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), z(e.id), k.add(e.id), h.Z.restored(e.id), e.channels.forEach((t) => ee((0, T.q_)(t, e.id)));
        });
}
function es(e) {
    for (let { guildId: t, channels: n } of e.channels) for (let e of (C.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, p.ZP)(n), k.add(t), h.Z.restored(t), n)) !Object.hasOwn(L, e.id) && ee((0, T._H)(e));
    return !1;
}
function el() {
    C.fileOnly('initializeClear()'), (U = {}), (L = {}), (b = {}), (x = {}), (D = {}), (Z = {}), (P = {}), (k = new Set()), (B = {}), (F = Date.now());
}
function eu(e) {
    var t;
    V = e.guilds.length;
    let { privateChannels: n, initialGuildChannels: r } = e;
    for (let e of [n, r]) for (let t of e) X((0, p.d7)((0, T._H)(t)));
    let i = null === (t = r[0]) || void 0 === t ? void 0 : t.guild_id;
    null != i && (C.fileOnly('Early cache contained full guild channels for '.concat(i)), k.add(i));
}
function ec(e) {
    for (let t of ((V = e.guilds.length), e.channels)) X((0, p.d7)((0, T._H)(t)));
}
function ed(e) {
    for (let [t, n] of ((Y = !0), e.guildChannels)) for (let e of (C.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), k.add(t), n)) X((0, T._H)(e));
}
function e_(e) {
    X(e.channel);
}
function eE(e) {
    if (!T.AW.has(e.channel.type)) return !1;
    let t = Q(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge({
            ...e.channel.toJS(),
            bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
        });
    }
    X(t);
}
function ef(e) {
    let t = e.channels.some((e) => {
        let t = e,
            n = Q(e.id);
        return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type);
    });
    for (let t of e.channels) X(t);
    t && Object.values(P).forEach((e) => X(e));
}
function eh(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        T.AW.has(e.type) && X(e);
    });
}
function ep(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        T.AW.has(e.type) && X((0, T.q_)(e));
    });
}
function em(e) {
    if ('basicPermissions' in e || e.type !== O.d4z.DM) return;
    let t = e.getRecipientId();
    if (U[t] === e.id) delete U[t];
}
function eI(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in D && delete D[e.id], e.id in L && delete L[e.id], e.id in P && delete P[e.id], null != t && null != b[t] && e.id in b[t] && delete b[t][e.id], en(e);
}
function eT(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (n = null !== (t = L[r.id]) && void 0 !== t ? t : D[r.id]) && void 0 !== n ? n : P[r.id];
    if (null == i) return !1;
    eI(i), em(i);
}
function eg(e) {
    ei(e.guild);
}
function eS(e) {
    C.fileOnly('GuildDelete of '.concat(e.guild.id)), z(e.guild.id), k.delete(e.guild.id), h.Z.invalidate(e.guild.id);
}
function eA(e) {
    let t = Q(e.channelId),
        n = A.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (X(t.addRecipient(e.user.id, e.nick, n)), !0);
}
function ev(e) {
    let t = Q(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (X(t.removeRecipient(e.user.id)), !0);
}
function eN(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in P) && T.AW.has(e.thread.type) && J((0, T.q_)(e.thread));
}
function eO(e) {
    let { messages: t, threads: n, channels: r } = e;
    for (let e of t) for (let t of e) eR(t.thread);
    n.forEach(eR),
        null == r ||
            r.forEach((e) => {
                let t = (0, T.q_)(e),
                    n = null != Q(e.id),
                    r = null != Z[e.id];
                t.isPrivate() && (!n || r) ? (Z[t.id] = t) : !n && X(t);
            });
}
function eR(e) {
    null != e && !(e.id in P) && T.AW.has(e.type) && J((0, T.q_)(e));
}
function eC() {
    for (let e in ((G = {}), I.Z.getFavoriteChannels())) {
        let t = I.Z.getCategoryRecord(e);
        null != t && (G[e] = t);
    }
}
function ey() {
    el();
}
class eL extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, N.default, v.Z, I.Z), this.syncWith([I.Z], eC);
    }
    hasChannel(e) {
        return null != q(e);
    }
    getBasicChannel(e) {
        if (null != e) return q(e);
    }
    getChannel(e) {
        if (null != e) return Q(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of v.Z.getGuildIds()) W(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return {
            ...L,
            ...D
        };
    }
    getChannelIds(e) {
        var t, n;
        return (W(e, 0, 'getChannelIds'), null == e) ? S.default.keys(D) : S.default.keys(null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : b[e]) && void 0 !== n ? n : y);
    }
    getMutablePrivateChannels() {
        return D;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return W(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : b[e]) && void 0 !== n ? n : y;
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return W(e, 1, 'getMutableGuildChannelsForGuild'), null !== (t = b[e]) && void 0 !== t ? t : y;
    }
    getSortedPrivateChannels() {
        return l()(D)
            .values()
            .sort((e, t) => S.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return U[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(U[e]);
    }
    getMutableDMsByUserIds() {
        return U;
    }
    getDMUserIds() {
        return S.default.keys(U);
    }
    getPrivateChannelsVersion() {
        return w;
    }
    getGuildChannelsVersion(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : 0;
    }
    getAllThreadsForParent(e) {
        return l()
            .values(P)
            .filter((t) => t.parent_id === e);
    }
    getInitialOverlayState() {
        return {
            ...L,
            ...D,
            ...P
        };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(k).sort(S.default.compare),
            pendingGuildLoads: Object.keys(B).sort(S.default.compare),
            guildSizes: Object.keys(b)
                .sort(S.default.compare)
                .map((e) => ''.concat(e, ': ').concat(eb(e)))
        };
    }
}
function eb(e) {
    return null == b[e] ? null : Object.keys(b[e]).length;
}
R(eL, 'displayName', 'ChannelStore'),
    (t.Z = new eL(d.Z, {
        BACKGROUND_SYNC: eo,
        CACHE_LOADED_LAZY: ed,
        CACHE_LOADED: eu,
        CHANNEL_CREATE: e_,
        CHANNEL_DELETE: eT,
        CHANNEL_RECIPIENT_ADD: eA,
        CHANNEL_RECIPIENT_REMOVE: ev,
        CHANNEL_UPDATES: ef,
        CONNECTION_OPEN_SUPPLEMENTAL: ea,
        CONNECTION_OPEN: er,
        GUILD_CREATE: eg,
        GUILD_DELETE: eS,
        LOAD_ARCHIVED_THREADS_SUCCESS: ep,
        LOAD_CHANNELS: es,
        LOAD_MESSAGES_AROUND_SUCCESS: eN,
        LOAD_MESSAGES_SUCCESS: eN,
        LOAD_THREADS_SUCCESS: ep,
        LOGOUT: ey,
        OVERLAY_INITIALIZE: ec,
        SEARCH_FINISH: eO,
        MOD_VIEW_SEARCH_FINISH: eO,
        THREAD_CREATE: eE,
        THREAD_DELETE: eT,
        THREAD_LIST_SYNC: eh,
        THREAD_UPDATE: eE
    }));
