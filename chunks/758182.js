n.d(t, {
    q: function () {
        return U;
    }
}),
    n(47120),
    n(724458);
var s,
    a,
    r,
    i,
    l = n(956067);
n(724522);
var o = n(149765),
    c = n(442837),
    _ = n(433517),
    d = n(570140),
    E = n(86670),
    u = n(261375),
    T = n(17567),
    I = n(795513),
    R = n(685736),
    g = n(266750),
    N = n(768910),
    m = n(632093),
    C = n(347994),
    A = n(591526),
    f = n(261875),
    p = n(710845),
    M = n(38618),
    S = n(218543),
    h = n(314897),
    b = n(944486),
    x = n(914010),
    O = n(449934),
    P = n(576376),
    v = n(38217),
    L = n(864631),
    Z = n(981631);
let D = new p.Z('CacheStore'),
    U = !1,
    B = !1,
    j = 'initializing',
    G = 0,
    w = !1,
    H = !1,
    y = !1;
function k(e) {
    D.log('Clearing cache store'), (G = Date.now()), _.K.remove(Z.FsG), _.K.remove(Z.ihW), _.K.remove(Z.O42), (j = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (B = !0);
}
async function F(e, t, n) {
    let s = performance.now();
    if (null == e || null == n)
        return (
            D.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
            [
                performance.now() - s,
                {
                    guildId: null,
                    channelId: null,
                    users: [],
                    members: [],
                    messages: []
                }
            ]
        );
    {
        let a = await R.ZP.startupLoad(e, t, n, Z.AQB);
        D.verbose('loaded '.concat(a.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let r = {
            guildId: t,
            channelId: n,
            users: a.users,
            members: a.members,
            messages: a.messages
        };
        return [performance.now() - s, r];
    }
}
async function V(e, t, n) {
    var s, a, r;
    D.verbose('loading early cache');
    let i = M.Z.getSocket();
    i.connect();
    let o = null !== (s = x.Z.getGuildId()) && void 0 !== s ? s : null,
        _ = null !== (a = b.Z.getChannelId()) && void 0 !== a ? a : null,
        E = performance.now(),
        u = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => F(e, o, _)),
        T = S.Z.fetchGuildCache.measureAsync(() => K(e, n)),
        I = S.Z.fetchGuildCache.measureAsync(() => Y(e, n)),
        R = null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => A.Z.getAsync(e, null)) : Promise.resolve([]),
        g = null == e ? Promise.resolve({}) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => C.Z.getAll(e)),
        f = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => N.Z.getAll(e)),
        p = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => m.Z.getAll(e)),
        [[h, O], P, v, Z, U, B, j] = await Promise.all([u, T, I, R, g, f, p]),
        G = performance.now() - E;
    if ((D.verbose('cache loaded in '.concat(G, 'ms (channel_history ').concat(h, 'ms)')), null == O)) return (0, L.Z)('database:history_cache_null'), D.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let s = Object.fromEntries(O.members.map((e) => [e.userId, e])),
            a = null != v.guildId && null != v.channels,
            E = v.guildId;
        return (
            c.ZP.Emitter.batched(() => {
                l.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return d.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: P,
                        privateChannels: Z,
                        initialGuildChannels: null !== (e = v.channels) && void 0 !== e ? e : [],
                        users: [...O.users],
                        messages: null == O.channelId ? {} : { [O.channelId]: O.messages },
                        guildMembers: null == O.guildId ? {} : { [O.guildId]: s },
                        userSettings: U,
                        userGuildSettings: j,
                        readStates: B
                    });
                }),
                    l.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => i.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            D.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(o, '\n          selected_channel: ')
                    .concat(_, '\n          navigation_state: ')
                    .concat(JSON.stringify(n), '\n          database: ')
                    .concat(null != e, '\n            name: ')
                    .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            private_channels: ')
                    .concat(Z.length, '\n            channel_history:\n              guild: ')
                    .concat(O.guildId, '\n              channel: ')
                    .concat(O.channelId, '\n              messages: ')
                    .concat(O.messages.length, '\n                members: ')
                    .concat(O.members.length, '\n                users: ')
                    .concat(O.users.length, '\n            initial_guild:\n              id: ')
                    .concat(E, '\n              channels: ')
                    .concat(null === (r = v.channels) || void 0 === r ? void 0 : r.length, '\n            user_settings: ')
                    .concat(Object.keys(U).length, '\n            read_states: ')
                    .concat(B.length, '\n            user_guild_settings: ')
                    .concat(j.length, '\n      )')
            ),
            D.verbose('finished dispatching CACHE_LOADED'),
            [!0, a && null != E ? E : null, Z.length]
        );
    }
}
let W = !1;
async function K(e, t) {
    var n, s;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            W = !0;
            break;
        case 'other':
            '@me' === t.guildId && (W = !0);
    }
    if (W) return null !== (n = await (0, E.dI)(() => l.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => T.Z.getAsync(e)))) && void 0 !== n ? n : [];
    let a = null !== (s = (await g.Z.getCommittedVersions()).initial_guild_id) && void 0 !== s ? s : t.guildId;
    if (null == a || '@me' === a) return [];
    let r = await (0, E.dI)(() => T.Z.getOneAsync(e, a));
    return null != r ? [r] : [];
}
async function Y(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null
        });
    let n = (await g.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && 'guild-channels' === t.page && (n = t.guildId), null == e || null == n))
        return (
            D.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let s = n;
    return {
        channels: await (0, E.dI)(() => A.Z.getAsync(e, s)),
        guildId: n
    };
}
async function z(e, t, n, s) {
    D.verbose('loading late lazy cache');
    let [a, r, i] = await S.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, E.dI)(() => (null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => I.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, E.dI)(() => (null == e || W ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => T.Z.getAsync(e)))),
                (0, E.dI)(() =>
                    null != e
                        ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => u.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await S.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != i && i.stale.length > 0
                ? (0, E.dI)(() => {
                      var t, n;
                      return (t = e), (n = i.stale), D.verbose('loading stale guild channels (count: '.concat(n.length, ', ids: ').concat(n.join(', '), ')')), Promise.all(n.map((e) => A.Z.getAsync(t, e).then((t) => [e, t])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), S.Z.loadLazyCache.recordStart();
    let _ = M.Z.getSocket();
    Q(() => {
        let l = performance.now();
        if (!1 === a) {
            (0, L.Z)('database:not_ok'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r || null == i || null == c) {
            (0, L.Z)('database:load_failed'),
                D.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != i, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != r, '\n        )')
                ),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == a && (r.length > 0 || i.all.length > 0)) {
            (0, L.Z)('database:versionless'),
                D.log('kv_cache was not ok (null version with values)'),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (H) {
            (0, L.Z)('already_connected'), D.log('Skipping lazy cache; already connected.'), d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        _.addAnalytics({ hadCacheAtStartup: !0 });
        let E = {
            type: 'CACHE_LOADED_LAZY',
            guilds: r,
            guildChannels: c,
            basicGuildChannels: i.channels,
            initialGuildId: n
        };
        S.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = o.vB(n.permissions);
                            }
                }
                null != e.channels && (0, v.ZP)(e.channels), null != e.privateChannels && (0, v.ZP)(e.privateChannels), null != e.guildChannels && (0, v._$)(e.guildChannels);
            })(E)
        ),
            S.Z.dispatchLazyCache.measure(() => d.Z.dispatch(E)),
            D.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - l, 'ms)')),
            _.addAnalytics({ usedCacheAtStartup: !0 });
        let u = c.reduce((e, t) => {
                let [n, s] = t;
                return e + s.length;
            }, 0),
            T = c.length,
            I = i.all.reduce((e, t) => {
                let [n, s] = t;
                return e + s.length;
            }, 0),
            R = i.channels.reduce((e, t) => {
                let [n, s] = t;
                return e + s.length;
            }, 0),
            g = I - R,
            N = 0 === i.stale.length ? '' : ' \xB7 '.concat(i.stale.join(', '));
        D.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(a, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(r.length, '\n            basic_channels:\n              total: ')
                .concat(I, ' (')
                .concat(i.channels.length, ' guilds)\n              stale: ')
                .concat(g, ' (')
                .concat(i.stale.length, ' guilds')
                .concat(N, ')\n              unstale: ')
                .concat(R, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(u, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            S.Z.setCacheInfo({
                guilds: r.length,
                privateChannels: s,
                basicChannels: I,
                basicChannelsStale: g,
                fullChannels: u,
                fullChannelGuilds: T
            });
    });
}
function Q(e) {
    let t = M.Z.getSocket(),
        n = !1;
    c.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                D.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                S.Z.loadLazyCache.recordEnd(),
                D.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    D.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            D.warn('Lazy cache has encountered error', e),
                d.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'LazyCache'
                    }
                });
        }
    }),
        !n && S.Z.loadLazyCache.recordEnd();
}
class J extends (s = c.ZP.Store) {
    initialize() {
        !U && M.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !U || w;
    }
    getLazyCacheStatus() {
        return U ? j : 'no-cache';
    }
    get lastWriteTime() {
        return G;
    }
    canWriteCaches(e) {
        return (0, O.$8)() ? (B ? (D.log('Not writing cache because caches cleared'), !1) : !!e || !!y || (D.log('Not writing cache because never connected'), !1)) : (D.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, P.h)(t);
        if ('initializing' !== j) {
            (0, L.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null === (t = M.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = h.default.getId(),
                s = f.Z.carefullyOpenDatabase(t),
                [a, r, i] = await S.Z.loadMiniCache.measureAsync(() => V(s, t, e));
            a ? (n(), await z(s, t, r, i)) : (n(), await (Q(() => d.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            D.error('clearing cache. exception encountered while loading cache.', e, e.stack),
                (0, L.Z)('cache:exception'),
                n(),
                d.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'loadCacheAsync'
                    }
                });
        }
    }
}
(i = 'CacheStore'),
    (r = 'displayName') in (a = J)
        ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = i),
    new J(
        d.Z,
        U
            ? {
                  CONNECTION_OPEN: function () {
                      return (H = !0), (y = !0), !1;
                  },
                  LOGOUT: k,
                  CONNECTION_CLOSED: function () {
                      return (H = !1), (y = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      w = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (w = !0), (j = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      j = 'no-cache';
                  },
                  CLEAR_CACHES: k,
                  WRITE_CACHES: function () {
                      D.verbose('Writing cache now'), (G = Date.now()), (w = !0), _.K.remove(Z.FsG), _.K.remove(Z.O42), _.K.remove(Z.ihW);
                  }
              }
            : {}
    );
