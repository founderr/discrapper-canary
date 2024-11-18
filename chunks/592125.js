n.d(t, {
    o: function () {
        return H;
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
    f = n(287328),
    _ = n(86670),
    p = n(591526),
    h = n(458772),
    m = n(38217),
    g = n(580552),
    E = n(710845),
    v = n(853856),
    b = n(131704),
    I = n(823379),
    S = n(709054),
    T = n(314897),
    y = n(430824),
    A = n(594174),
    N = n(981631);
let C = new E.Z('ChannelStore'),
    R = {},
    O = {},
    D = {},
    L = {},
    x = null,
    w = {},
    M = {},
    P = 0,
    k = {},
    U = {},
    B = new Set(),
    G = {},
    Z = 0,
    F = {},
    V = 0,
    j = 0;
class H {
    static loadAllMissingChannels() {
        let e = y.Z.getGuildIds().filter((e) => !B.has(e));
        return this.loadGuildIds(e);
    }
    static loadGuildFromChannelId(e) {
        var t;
        return null == e ? null : H.loadGuildIds([null === (t = z(e)) || void 0 === t ? void 0 : t.guild_id]);
    }
    static loadGuildIds(e) {
        let t = e.filter(I.lm);
        if (0 === t.length) return null;
        let n = f.Z.database();
        if (null == n || !t.some((e) => !B.has(e))) return null;
        let r = Z;
        return (0, _.gs)('loadChannels', async () => {
            let e = t
                    .map((e) => {
                        if (B.has(e)) return null;
                        if (null != G[e]) return C.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
                        let t = p.Z.getAsync(n, e).then(
                            (t) => (
                                C.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(t.length)),
                                {
                                    guildId: e,
                                    channels: t
                                }
                            )
                        );
                        return (
                            (G[e] = t),
                            {
                                guildId: e,
                                promise: t
                            }
                        );
                    })
                    .filter(I.lm),
                i = e.map((e) => e.promise);
            try {
                let t = await Promise.all(i);
                if (Z !== r) return C.fileOnly('lastResetTime has changed, skipping loads for ' + e.map((e) => e.guildId)), null;
                let n = t.filter((e) => !B.has(e.guildId));
                await d.Z.dispatch({
                    type: 'LOAD_CHANNELS',
                    channels: n
                });
            } catch (t) {
                for (let n of (C.error('Failed to load channels from disk for ' + e.map((e) => e.guildId), t), e)) delete G[n.guildId];
                throw t;
            }
            return null;
        });
    }
}
function Y(e, t, n) {
    if (null == e || 'null' === e || B.has(e) || (0 === t && h.Z.hasGuild(e))) return;
    let r = f.Z.database();
    if (null == r) return;
    C.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
    let i = (0, _.Pv)('ensureGuildLoaded('.concat(e, ')'), () => p.Z.getSync(r, e), 'ensureGuildLoaded');
    if (null == i) {
        B.add(e), h.Z.restored(e), C.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(r, ')'));
        return;
    }
    let [a, s] = i;
    for (let n of ((0, m.ZP)(a), 0 !== t && (j += 1), B.add(e), h.Z.restored(e), u.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), s), a)) !Object.hasOwn(O, n.id) && $((0, b._H)(n));
    C.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(j, ')'));
}
function W(e, t, n) {
    if (!Object.hasOwn(O, e) && !Object.hasOwn(L, e) && !Object.hasOwn(w, e) && !Object.hasOwn(U, e) && 1 === t) {
        let r = h.Z.getBasicChannel(e);
        (null == r ? void 0 : r.guild_id) != null && Y(r.guild_id, t, n);
    }
}
function K(e) {
    if ((C.fileOnly('Deleting guild channels for '.concat(e)), null != D[e])) {
        for (let t of S.default.keys(D[e])) delete O[t];
        delete D[e];
    }
}
function z(e) {
    var t, n, r, i;
    return W(e, 0, 'getBasicChannel'), null !== (i = null !== (r = null !== (n = null !== (t = O[e]) && void 0 !== t ? t : L[e]) && void 0 !== n ? n : w[e]) && void 0 !== r ? r : U[e]) && void 0 !== i ? i : h.Z.getBasicChannel(e);
}
function q(e) {
    var t, n, r, i;
    return W(e, 1, 'getChannel'), null !== (i = null !== (r = null !== (n = null !== (t = O[e]) && void 0 !== t ? t : L[e]) && void 0 !== n ? n : w[e]) && void 0 !== r ? r : U[e]) && void 0 !== i ? i : F[e];
}
function Q(e) {
    e.isPrivate()
        ? (delete F[e.id], X(e))
        : e.isThread()
          ? J(e)
          : b.oj.has(e.type) &&
            (function (e) {
                $(e);
            })(e);
}
function X(e) {
    if (null != e.recipients.find((e) => (0, g.Z)(e))) return !1;
    (L[e.id] = e), e.type === N.d4z.DM && (M[e.getRecipientId()] = e.id), (P += 1);
}
function J(e) {
    let t = O[e.parent_id];
    (w[e.id] = e.merge({
        nsfw: (null == t ? void 0 : t.nsfw) === !0,
        parentChannelThreadType: null == t ? void 0 : t.type
    })),
        e.isScheduledForDeletion() &&
            d.Z.dispatch({
                type: 'THREAD_DELETE',
                channel: e
            });
}
function $(e) {
    var t, n;
    let { id: r, guild_id: i } = e;
    (O[r] = e), (D[i] = null !== (t = D[i]) && void 0 !== t ? t : {}), (D[i][r] = e), (k[i] = (null !== (n = k[i]) && void 0 !== n ? n : 0) + 1);
}
function ee(e) {
    if (null != e.channels) for (let t of (C.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), K(e.id), B.add(e.id), h.Z.restored(e.id), e.channels)) $(t);
    if (null != e.channelUpdates) {
        let t = e.channelUpdates;
        for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && h.Z.invalidate(e.id), t.deletes)) er(O[n]);
        for (let e of t.writes) $(e);
    }
    if (null != e.threads) for (let t of e.threads) J(t);
}
function et(e) {
    if (!b.AW.has(e.channel.type)) return !1;
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
        b.AW.has(e.type) && Q((0, b.q_)(e));
    });
}
function er(e) {
    if (null == e) return;
    let t = e.guild_id;
    e.id in L && delete L[e.id],
        e.id in O && delete O[e.id],
        e.id in w && delete w[e.id],
        null != t && null != D[t] && e.id in D[t] && delete D[t][e.id],
        !(function (e) {
            if (null == e.guild_id || b.Ec.has(e.type)) (0, b.hv)(e.type) && (P += 1);
            else {
                var t;
                k[e.guild_id] = (null !== (t = k[e.guild_id]) && void 0 !== t ? t : 0) + 1;
            }
        })(e);
}
function ei(e) {
    var t, n;
    let { channel: r } = e,
        i = null !== (n = null !== (t = O[r.id]) && void 0 !== t ? t : L[r.id]) && void 0 !== n ? n : w[r.id];
    if (null == i) return !1;
    er(i),
        !(function (e) {
            if ('basicPermissions' in e || e.type !== N.d4z.DM) return;
            let t = e.getRecipientId();
            if (M[t] === e.id) delete M[t];
        })(i);
}
function ea(e) {
    let { messages: t } = e;
    for (let e of t) null != e.thread && !(e.thread.id in w) && b.AW.has(e.thread.type) && J((0, b.q_)(e.thread));
}
function es(e) {
    let { messages: t, threads: n, channels: r } = e;
    for (let e of t) for (let t of e) eo(t.thread);
    n.forEach(eo),
        null == r ||
            r.forEach((e) => {
                let t = (0, b.q_)(e),
                    n = null != q(e.id),
                    r = null != F[e.id];
                t.isPrivate() && (!n || r) ? (F[t.id] = t) : !n && Q(t);
            });
}
function eo(e) {
    null != e && !(e.id in w) && b.AW.has(e.type) && J((0, b.q_)(e));
}
function el() {
    for (let e in ((U = {}), v.Z.getFavoriteChannels())) {
        let t = v.Z.getCategoryRecord(e);
        null != t && (U[e] = t);
    }
}
class eu extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, A.default, y.Z, v.Z), this.syncWith([v.Z], el);
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
        for (let e of y.Z.getGuildIds()) Y(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
        return {
            ...O,
            ...L
        };
    }
    getChannelIds(e) {
        var t, n;
        return (Y(e, 0, 'getChannelIds'), null == e) ? S.default.keys(L) : S.default.keys(null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : R);
    }
    getMutablePrivateChannels() {
        return L;
    }
    getMutableBasicGuildChannelsForGuild(e) {
        var t, n;
        return Y(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : R;
    }
    getMutableGuildChannelsForGuild(e) {
        var t;
        return Y(e, 1, 'getMutableGuildChannelsForGuild'), null !== (t = D[e]) && void 0 !== t ? t : R;
    }
    getSortedPrivateChannels() {
        return l()(L)
            .values()
            .sort((e, t) => S.default.compare(e.lastMessageId, t.lastMessageId))
            .reverse()
            .value();
    }
    getDMFromUserId(e) {
        if (null != e) return M[e];
    }
    getDMChannelFromUserId(e) {
        if (null != e) return this.getChannel(M[e]);
    }
    getMutableDMsByUserIds() {
        return M;
    }
    getDMUserIds() {
        return S.default.keys(M);
    }
    getPrivateChannelsVersion() {
        return P;
    }
    getGuildChannelsVersion(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t ? t : 0;
    }
    getAllThreadsForParent(e) {
        return l()
            .values(w)
            .filter((t) => t.parent_id === e);
    }
    getInitialOverlayState() {
        return {
            ...O,
            ...L,
            ...w
        };
    }
    getDebugInfo() {
        return {
            loadedGuildIds: Array.from(B).sort(S.default.compare),
            pendingGuildLoads: Object.keys(G).sort(S.default.compare),
            guildSizes: Object.keys(D)
                .sort(S.default.compare)
                .map((e) => ''.concat(e, ': ').concat(ec(e)))
        };
    }
}
function ec(e) {
    return null == D[e] ? null : Object.keys(D[e]).length;
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
                n = D;
            (O = {}),
                (D = {}),
                (k = {}),
                t.forEach((e) => {
                    if ('unavailable' === e.data_mode) C.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(ec(e.id))), l().forEach(n[e.id], $);
                    else if ('partial' === e.data_mode) {
                        var t, r;
                        C.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(ec(e.id))), l().forEach(n[e.id], $);
                        let i = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
                        i.length > 0 && (Y(e.id, 1, 'handleBackgroundSync'), i.forEach((e) => er(O[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach((t) => $((0, b.q_)(t, e.id)));
                    } else C.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), K(e.id), B.add(e.id), h.Z.restored(e.id), e.channels.forEach((t) => $((0, b.q_)(t, e.id)));
                });
        },
        CACHE_LOADED_LAZY: function (e) {
            for (let [t, n] of e.guildChannels) for (let e of (C.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), B.add(t), n)) Q((0, b._H)(e));
        },
        CACHE_LOADED: function (e) {
            var t;
            e.guilds.length;
            let { privateChannels: n, initialGuildChannels: r } = e;
            for (let e of [n, r]) for (let t of e) Q((0, m.d7)((0, b._H)(t)));
            let i = null === (t = r[0]) || void 0 === t ? void 0 : t.guild_id;
            null != i && (C.fileOnly('Early cache contained full guild channels for '.concat(i)), B.add(i));
        },
        CHANNEL_CREATE: function (e) {
            Q(e.channel);
        },
        CHANNEL_DELETE: ei,
        CHANNEL_RECIPIENT_ADD: function (e) {
            let t = q(e.channelId),
                n = T.default.getId();
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
            t && Object.values(w).forEach((e) => Q(e));
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { lazyPrivateChannels: t } = e;
            null != x && ((L = {}), x.forEach(X)), t.forEach(X);
        },
        CONNECTION_OPEN: function (e) {
            let t = D;
            for (let n of ((M = {}), (O = {}), (D = {}), (w = {}), (k = {}), (F = {}), (G = {}), (Z = Date.now()), (x = e.initialPrivateChannels), e.initialPrivateChannels.forEach(X), e.guilds)) 'partial' === n.dataMode && (l().forEach(t[n.id], $), C.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(ec(n.id)))), ee(n);
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
            C.fileOnly('GuildDelete of '.concat(e.guild.id)), K(e.guild.id), B.delete(e.guild.id), h.Z.invalidate(e.guild.id);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: en,
        LOAD_CHANNELS: function (e) {
            for (let { guildId: t, channels: n } of e.channels) for (let e of (C.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, m.ZP)(n), B.add(t), h.Z.restored(t), n)) !Object.hasOwn(O, e.id) && $((0, b._H)(e));
            return !1;
        },
        LOAD_MESSAGES_AROUND_SUCCESS: ea,
        LOAD_MESSAGES_SUCCESS: ea,
        LOAD_THREADS_SUCCESS: en,
        LOGOUT: function () {
            C.fileOnly('initializeClear()'), (M = {}), (O = {}), (D = {}), (k = {}), (L = {}), (F = {}), (w = {}), (B = new Set()), (G = {}), (Z = Date.now());
        },
        OVERLAY_INITIALIZE: function (e) {
            for (let t of (e.guilds.length, e.channels)) Q((0, m.d7)((0, b._H)(t)));
        },
        SEARCH_FINISH: es,
        MOD_VIEW_SEARCH_FINISH: es,
        THREAD_CREATE: et,
        THREAD_DELETE: ei,
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach((e) => {
                b.AW.has(e.type) && Q(e);
            });
        },
        THREAD_UPDATE: et
    }));
