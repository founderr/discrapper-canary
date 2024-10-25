n.d(t, {
    o: function () {
        return Y;
    }
}),
    n(47120),
    n(51350),
    n(411104);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(956067),
    c = n(442837),
    d = n(570140),
    _ = n(287328),
    E = n(86670),
    f = n(591526),
    h = n(458772),
    p = n(38217),
    I = n(580552),
    m = n(710845),
    T = n(853856),
    S = n(131704),
    g = n(823379),
    A = n(709054),
    N = n(314897),
    R = n(430824),
    O = n(594174),
    v = n(981631);
let C = new m.Z('ChannelStore'),
    L = {},
    D = {},
    y = {},
    b = {},
    M = null,
    P = {},
    U = {},
    w = 0,
    x = {},
    G = {},
    k = new Set(),
    B = {},
    F = 0,
    V = {},
    H = 0,
    Z = 0;
class Y {
    static loadAllMissingChannels() {
        let e = R.Z.getGuildIds().filter((e) => !k.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : Y.loadGuildIds([null === (t = z(e)) || void 0 === t ? void 0 : t.guild_id]);
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
function j(e, t, n) {
    if (null == e || 'null' === e || k.has(e) || (0 === t && h.Z.hasGuild(e))) return;
    let r = _.Z.database();
    if (null == r) return;
    C.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
    let i = (0, E.Pv)('ensureGuildLoaded('.concat(e, ')'), () => f.Z.getSync(r, e), 'ensureGuildLoaded');
    if (null == i) {
        k.add(e), h.Z.restored(e), C.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(r, ')'));
        return;
    }
    let [a, s] = i;
    for (let n of ((0, p.ZP)(a), 0 !== t && (Z += 1), k.add(e), h.Z.restored(e), u.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), s), a)) !Object.hasOwn(D, n.id) && J((0, S._H)(n));
    C.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(Z, ')'));
}
function W(e, t, n) {
    if (!Object.hasOwn(D, e) && !Object.hasOwn(b, e) && !Object.hasOwn(P, e) && !Object.hasOwn(G, e) && 1 === t) {
        let r = h.Z.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && j(r.guild_id, t, n);
    }
}
function K(e) {
    if ((C.fileOnly('Deleting guild channels for '.concat(e)), null != y[e])) {
        for (let t of A.default.keys(y[e])) delete D[t];
        delete y[e];
    }
}
function z(e) {
    var t, n, r, i;
    return W(e, 0, 'getBasicChannel'), null !== (i = null !== (r = null !== (n = null !== (t = D[e]) && void 0 !== t ? t : b[e]) && void 0 !== n ? n : P[e]) && void 0 !== r ? r : G[e]) && void 0 !== i ? i : h.Z.getBasicChannel(e);
}
function q(e) {
    var t, n, r, i;
    return W(e, 1, 'getChannel'), null !== (i = null !== (r = null !== (n = null !== (t = D[e]) && void 0 !== t ? t : b[e]) && void 0 !== n ? n : P[e]) && void 0 !== r ? r : G[e]) && void 0 !== i ? i : V[e];
}
function Q(e) {
    e.isPrivate()
        ? (delete V[e.id], X(e))
        : e.isThread()
          ? $(e)
          : S.oj.has(e.type) &&
            (function (e) {
                J(e);
            })(e);
}
function X(e) {
    if (null != e.recipients.find((e) => (0, I.Z)(e))) return !1;
    (b[e.id] = e), e.type === v.d4z.DM && (U[e.getRecipientId()] = e.id), (w += 1);
}
function $(e) {
    let t = D[e.parent_id];
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
function J(e) {
    var t, n;
    let { id: r, guild_id: i } = e;
    (D[r] = e), (y[i] = null !== (t = y[i]) && void 0 !== t ? t : {}), (y[i][r] = e), (x[i] = (null !== (n = x[i]) && void 0 !== n ? n : 0) + 1);
}
function ee(e) {
    if (null != e.channels) for (let t of (C.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), K(e.id), k.add(e.id), h.Z.restored(e.id), e.channels)) J(t);
    if (null != e.channelUpdates) {
        let t = e.channelUpdates;
        for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && h.Z.invalidate(e.id), t.deletes)) er(D[n]);
        for (let e of t.writes) J(e);
    }
    if (null != e.threads) for (let t of e.threads) $(t);
}
function et(e) {
    if (!S.AW.has(e.channel.type)) return !1;
    let t = q(e.channel.id);
    if (null == t) t = e.channel;
    else {
        var n;
        t = t.merge({
            ...e.channel.toJS(),
            bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
        });
    }
    Q(t);
}
function en(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        S.AW.has(e.type) && Q((0, S.q_)(e));
    });
}
function er(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in b && delete b[e.id],
        e.id in D && delete D[e.id],
        e.id in P && delete P[e.id],
        null != t && null != y[t] && e.id in y[t] && delete y[t][e.id],
        !(function (e) {
            if (null == e.guild_id || S.Ec.has(e.type)) (0, S.hv)(e.type) && (w += 1);
            else {
                var t;
                x[e.guild_id] = (null !== (t = x[e.guild_id]) && void 0 !== t ? t : 0) + 1;
            }
        })(e);
}
function ei(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (n = null !== (t = D[r.id]) && void 0 !== t ? t : b[r.id]) && void 0 !== n ? n : P[r.id];
    if (null == i) return !1;
    er(i),
        !(function (e) {
            if ('basicPermissions' in e || e.type !== v.d4z.DM) return;
            let t = e.getRecipientId();
            if (U[t] === e.id) delete U[t];
        })(i);
}
function ea(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in P) && S.AW.has(e.thread.type) && $((0, S.q_)(e.thread));
}
function es(e) {
    let { messages: t, threads: n, channels: r } = e;
    for (let e of t) for (let t of e) eo(t.thread);
    n.forEach(eo),
        null == r ||
            r.forEach((e) => {
                let t = (0, S.q_)(e),
                    n = null != q(e.id),
                    r = null != V[e.id];
                t.isPrivate() && (!n || r) ? (V[t.id] = t) : !n && Q(t);
            });
}
function eo(e) {
    null != e && !(e.id in P) && S.AW.has(e.type) && $((0, S.q_)(e));
}
function el() {
    for (let e in ((G = {}), T.Z.getFavoriteChannels())) {
        let t = T.Z.getCategoryRecord(e);
        null != t && (G[e] = t);
    }
}
class eu extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, O.default, R.Z, T.Z), this.syncWith([T.Z], el);
    }
    hasChannel(e) {
        return null != z(e);
    }
    getBasicChannel(e) {
        if (null != e) return z(e);
    }
    getChannel(e) {
        if (null != e) return q(e);
    }
    loadAllGuildAndPrivateChannelsFromDisk() {
        for (let e of R.Z.getGuildIds()) j(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return {
            ...D,
            ...b
        };
    }
    getChannelIds(e) {
        var t, n;
        return (j(e, 0, 'getChannelIds'), null == e) ? A.default.keys(b) : A.default.keys(null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : L);
    }
    getMutablePrivateChannels() {
        return b;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return j(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : L;
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return j(e, 1, 'getMutableGuildChannelsForGuild'), null !== (t = y[e]) && void 0 !== t ? t : L;
    }
    getSortedPrivateChannels() {
        return l()(b)
            .values()
            .sort((e, t) => A.default.compare(e.lastMessageId, t.lastMessageId))
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
        return A.default.keys(U);
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
            ...D,
            ...b,
            ...P
        };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(k).sort(A.default.compare),
            pendingGuildLoads: Object.keys(B).sort(A.default.compare),
            guildSizes: Object.keys(y)
                .sort(A.default.compare)
                .map((e) => ''.concat(e, ': ').concat(ec(e)))
        };
    }
}
function ec(e) {
    return null == y[e] ? null : Object.keys(y[e]).length;
}
(s = 'ChannelStore'),
    (a = 'displayName') in (i = eu)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new eu(d.Z, {
        BACKGROUND_SYNC: function (e) {
            let { guilds: t } = e,
                n = y;
            (D = {}),
                (y = {}),
                (x = {}),
                t.forEach((e) => {
                    if ('unavailable' === e.data_mode) C.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(ec(e.id))), l().forEach(n[e.id], J);
                    else if ('partial' === e.data_mode) {
                        var t, r;
                        C.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(ec(e.id))), l().forEach(n[e.id], J);
                        let i = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
                        i.length > 0 && (j(e.id, 1, 'handleBackgroundSync'), i.forEach((e) => er(D[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach((t) => J((0, S.q_)(t, e.id)));
                    } else C.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), K(e.id), k.add(e.id), h.Z.restored(e.id), e.channels.forEach((t) => J((0, S.q_)(t, e.id)));
                });
        },
        CACHE_LOADED_LAZY: function (e) {
            for (let [t, n] of e.guildChannels) for (let e of (C.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), k.add(t), n)) Q((0, S._H)(e));
        },
        CACHE_LOADED: function (e) {
            var t;
            e.guilds.length;
            let { privateChannels: n, initialGuildChannels: r } = e;
            for (let e of [n, r]) for (let t of e) Q((0, p.d7)((0, S._H)(t)));
            let i = null === (t = r[0]) || void 0 === t ? void 0 : t.guild_id;
            null != i && (C.fileOnly('Early cache contained full guild channels for '.concat(i)), k.add(i));
        },
        CHANNEL_CREATE: function (e) {
            Q(e.channel);
        },
        CHANNEL_DELETE: ei,
        CHANNEL_RECIPIENT_ADD: function (e) {
            let t = q(e.channelId),
                n = N.default.getId();
            return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.addRecipient(e.user.id, e.nick, n)), !0);
        },
        CHANNEL_RECIPIENT_REMOVE: function (e) {
            let t = q(e.channelId);
            return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.removeRecipient(e.user.id)), !0);
        },
        CHANNEL_UPDATES: function (e) {
            let t = e.channels.some((e) => {
                let t = q(e.id);
                return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type);
            });
            for (let t of e.channels) Q(t);
            t && Object.values(P).forEach((e) => Q(e));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            null != M && ((b = {}), M.forEach(X)), t.forEach(X);
        },
        CONNECTION_OPEN: function (e) {
            let t = y;
            for (let n of ((U = {}), (D = {}), (y = {}), (P = {}), (x = {}), (V = {}), (B = {}), (F = Date.now()), (M = e.initialPrivateChannels), e.initialPrivateChannels.forEach(X), e.guilds)) 'partial' === n.dataMode && (l().forEach(t[n.id], J), C.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(ec(n.id)))), ee(n);
            el();
        },
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function (e) {
            let { channelId: t, overwrite: n } = e,
                r = q(t);
            if (null == r) return !1;
            Q(
                r.set('permissionOverwrites', {
                    ...r.permissionOverwrites,
                    [n.id]: n
                })
            );
        },
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function (e) {
            let { channelId: t, overwriteId: n } = e,
                r = q(t);
            if (null == r) return !1;
            let i = { ...r.permissionOverwrites };
            delete i[n], Q(r.set('permissionOverwrites', i));
        },
        GUILD_CREATE: function (e) {
            ee(e.guild);
        },
        GUILD_DELETE: function (e) {
            C.fileOnly('GuildDelete of '.concat(e.guild.id)), K(e.guild.id), k.delete(e.guild.id), h.Z.invalidate(e.guild.id);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: en,
        LOAD_CHANNELS: function (e) {
            for (let { guildId: t, channels: n } of e.channels) for (let e of (C.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, p.ZP)(n), k.add(t), h.Z.restored(t), n)) !Object.hasOwn(D, e.id) && J((0, S._H)(e));
            return !1;
        },
        LOAD_MESSAGES_AROUND_SUCCESS: ea,
        LOAD_MESSAGES_SUCCESS: ea,
        LOAD_THREADS_SUCCESS: en,
        LOGOUT: function () {
            C.fileOnly('initializeClear()'), (U = {}), (D = {}), (y = {}), (x = {}), (b = {}), (V = {}), (P = {}), (k = new Set()), (B = {}), (F = Date.now());
        },
        OVERLAY_INITIALIZE: function (e) {
            for (let t of (e.guilds.length, e.channels)) Q((0, p.d7)((0, S._H)(t)));
        },
        SEARCH_FINISH: es,
        MOD_VIEW_SEARCH_FINISH: es,
        THREAD_CREATE: et,
        THREAD_DELETE: ei,
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                S.AW.has(e.type) && Q(e);
            });
        },
        THREAD_UPDATE: et
    }));
