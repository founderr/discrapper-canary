n.d(t, {
    q: function () {
        return B;
    }
}),
    n(47120),
    n(724458);
var i,
    r,
    a,
    s,
    l = n(956067);
n(724522);
var o = n(149765),
    c = n(442837),
    d = n(433517),
    u = n(570140),
    g = n(86670),
    m = n(261375),
    f = n(17567),
    p = n(795513),
    _ = n(685736),
    h = n(266750),
    E = n(768910),
    x = n(632093),
    b = n(347994),
    C = n(591526),
    v = n(261875),
    T = n(710845),
    N = n(38618),
    I = n(218543),
    S = n(314897),
    R = n(944486),
    A = n(914010),
    j = n(449934),
    P = n(576376),
    O = n(38217),
    Z = n(864631),
    M = n(981631);
let w = new T.Z('CacheStore'),
    B = !1,
    y = !1,
    L = 'initializing',
    k = 0,
    U = !1,
    D = !1,
    G = !1;
function H(e) {
    w.log('Clearing cache store'), (k = Date.now()), d.K.remove(M.FsG), d.K.remove(M.ihW), d.K.remove(M.O42), (L = 'no-cache'), 'CLEAR_CACHES' === e.type && e.preventWritingCachesAgainThisSession && (y = !0);
}
async function V(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            w.verbose('skipped loaded messages (channel: '.concat(n, ', database: ').concat(e, ').')),
            [
                performance.now() - i,
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
        let r = await _.ZP.startupLoad(e, t, n, M.AQB);
        w.verbose('loaded '.concat(r.messages.length, ' messages (guild: ').concat(t, ', channel: ').concat(n, ').'));
        let a = {
            guildId: t,
            channelId: n,
            users: r.users,
            members: r.members,
            messages: r.messages
        };
        return [performance.now() - i, a];
    }
}
async function F(e, t, n) {
    var i, r, a;
    w.verbose('loading early cache');
    let s = N.Z.getSocket();
    s.connect();
    let o = null !== (i = A.Z.getGuildId()) && void 0 !== i ? i : null,
        d = null !== (r = R.Z.getChannelId()) && void 0 !== r ? r : null,
        g = performance.now(),
        m = I.Z.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, o, d)),
        f = I.Z.fetchGuildCache.measureAsync(() => z(e, n)),
        p = I.Z.fetchGuildCache.measureAsync(() => Y(e, n)),
        _ = null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: private_channels', () => C.Z.getAsync(e, null)) : Promise.resolve([]),
        h = null == e ? Promise.resolve({}) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_settings', () => b.Z.getAll(e)),
        v = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: read_states', () => E.Z.getAll(e)),
        T = null == e ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: user_guild_settings', () => x.Z.getAll(e)),
        [[S, j], P, O, M, B, y, L] = await Promise.all([m, f, p, _, h, v, T]),
        k = performance.now() - g;
    if ((w.verbose('cache loaded in '.concat(k, 'ms (channel_history ').concat(S, 'ms)')), null == j)) return (0, Z.Z)('database:history_cache_null'), w.verbose('finished without dispatching CACHE_LOADED'), [!1, null, 0];
    {
        let i = Object.fromEntries(j.members.map((e) => [e.userId, e])),
            r = null != O.guildId && null != O.channels,
            g = O.guildId;
        return (
            c.ZP.Emitter.batched(() => {
                l.Z.time('\uD83D\uDCBE', 'Dispatch Mini Cache', () => {
                    var e;
                    return u.Z.dispatch({
                        type: 'CACHE_LOADED',
                        guilds: P,
                        privateChannels: M,
                        initialGuildChannels: null !== (e = O.channels) && void 0 !== e ? e : [],
                        users: [...j.users],
                        messages: null == j.channelId ? {} : { [j.channelId]: j.messages },
                        guildMembers: null == j.guildId ? {} : { [j.guildId]: i },
                        userSettings: B,
                        userGuildSettings: L,
                        readStates: y
                    });
                }),
                    l.Z.time('\uD83D\uDCBE', 'socket.processFirstQueuedDispatch()', () => s.dispatcher.processFirstQueuedDispatch(new Set(['INITIAL_GUILD'])));
            }),
            w.verbose(
                'early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                    .concat(t, '\n          selected_guild: ')
                    .concat(o, '\n          selected_channel: ')
                    .concat(d, '\n          navigation_state: ')
                    .concat(JSON.stringify(n), '\n          database: ')
                    .concat(null != e, '\n            name: ')
                    .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            private_channels: ')
                    .concat(M.length, '\n            channel_history:\n              guild: ')
                    .concat(j.guildId, '\n              channel: ')
                    .concat(j.channelId, '\n              messages: ')
                    .concat(j.messages.length, '\n                members: ')
                    .concat(j.members.length, '\n                users: ')
                    .concat(j.users.length, '\n            initial_guild:\n              id: ')
                    .concat(g, '\n              channels: ')
                    .concat(null === (a = O.channels) || void 0 === a ? void 0 : a.length, '\n            user_settings: ')
                    .concat(Object.keys(B).length, '\n            read_states: ')
                    .concat(y.length, '\n            user_guild_settings: ')
                    .concat(L.length, '\n      )')
            ),
            w.verbose('finished dispatching CACHE_LOADED'),
            [!0, r && null != g ? g : null, M.length]
        );
    }
}
let W = !1;
async function z(e, t) {
    var n, i;
    if (null == e) return [];
    switch (t.page) {
        case 'private-channels':
        case 'guild-channels':
            W = !0;
            break;
        case 'other':
            '@me' === t.guildId && (W = !0);
    }
    if (W) return null !== (n = await (0, g.dI)(() => l.Z.timeAsync('\uD83D\uDCBE', 'cache: guilds', () => f.Z.getAsync(e)))) && void 0 !== n ? n : [];
    let r = null !== (i = (await h.Z.getCommittedVersions()).initial_guild_id) && void 0 !== i ? i : t.guildId;
    if (null == r || '@me' === r) return [];
    let a = await (0, g.dI)(() => f.Z.getOneAsync(e, r));
    return null != a ? [a] : [];
}
async function Y(e, t) {
    if (null == e)
        return Promise.resolve({
            channels: null,
            guildId: null
        });
    let n = (await h.Z.getCommittedVersions()).initial_guild_id;
    if ((null == n && 'guild-channels' === t.page && (n = t.guildId), null == e || null == n))
        return (
            w.verbose('skipped loading initial guild (guild: '.concat(n, ', database: ').concat(e, ')')),
            Promise.resolve({
                channels: null,
                guildId: null
            })
        );
    let i = n;
    return {
        channels: await (0, g.dI)(() => C.Z.getAsync(e, i)),
        guildId: n
    };
}
async function Q(e, t, n, i) {
    w.verbose('loading late lazy cache');
    let [r, a, s] = await I.Z.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, g.dI)(() => (null != e ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: cache_version', () => p.Z.okAsync(e)) : Promise.resolve(!0))),
                (0, g.dI)(() => (null == e || W ? Promise.resolve([]) : l.Z.timeAsync('\uD83D\uDCBE', 'cache: lazy guilds', () => f.Z.getAsync(e)))),
                (0, g.dI)(() =>
                    null != e
                        ? l.Z.timeAsync('\uD83D\uDCBE', 'cache: basic_channels', () => m.Z.getAsync(e))
                        : Promise.resolve({
                              all: [],
                              stale: [],
                              channels: []
                          })
                )
            ])
        ),
        c = await I.Z.fetchStaleChannels.measureAsync(() =>
            null != e && null != s && s.stale.length > 0
                ? (0, g.dI)(() => {
                      var t, n;
                      return (t = e), (n = s.stale), w.verbose('loading stale guild channels (count: '.concat(n.length, ', ids: ').concat(n.join(', '), ')')), Promise.all(n.map((e) => C.Z.getAsync(t, e).then((t) => [e, t])));
                  })
                : Promise.resolve([])
        );
    await new Promise((e) => setTimeout(e, 0)), I.Z.loadLazyCache.recordStart();
    let d = N.Z.getSocket();
    K(() => {
        let l = performance.now();
        if (!1 === r) {
            (0, Z.Z)('database:not_ok'),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:not_ok'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == a || null == s || null == c) {
            (0, Z.Z)('database:load_failed'),
                w.log(
                    "couldn't load database item (\n          database: "
                        .concat(null != e, '\n          basic_channels: ')
                        .concat(null != s, '\n          guild_channels: ')
                        .concat(null != c, '\n          guilds: ')
                        .concat(null != a, '\n        )')
                ),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:load_failed'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (null == r && (a.length > 0 || s.all.length > 0)) {
            (0, Z.Z)('database:versionless'),
                w.log('kv_cache was not ok (null version with values)'),
                u.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'database:versionless'
                }),
                u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        if (D) {
            (0, Z.Z)('already_connected'), w.log('Skipping lazy cache; already connected.'), u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' });
            return;
        }
        d.addAnalytics({ hadCacheAtStartup: !0 });
        let g = {
            type: 'CACHE_LOADED_LAZY',
            guilds: a,
            guildChannels: c,
            basicGuildChannels: s.channels,
            initialGuildId: n
        };
        I.Z.deserializeCache.measure(() =>
            (function (e) {
                if (null != e.guilds) {
                    for (let { roles: t } of e.guilds)
                        if (null != t)
                            for (let e in t) {
                                let n = t[e];
                                n.permissions = o.vB(n.permissions);
                            }
                }
                null != e.channels && (0, O.ZP)(e.channels), null != e.privateChannels && (0, O.ZP)(e.privateChannels), null != e.guildChannels && (0, O._$)(e.guildChannels);
            })(g)
        ),
            I.Z.dispatchLazyCache.measure(() => u.Z.dispatch(g)),
            w.verbose('late lazy cache loaded (ok: true, took: '.concat(performance.now() - l, 'ms)')),
            d.addAnalytics({ usedCacheAtStartup: !0 });
        let m = c.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            f = c.length,
            p = s.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            _ = s.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            h = p - _,
            E = 0 === s.stale.length ? '' : ' \xB7 '.concat(s.stale.join(', '));
        w.verbose(
            'lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: '
                .concat(t, '\n          initial_guild: ')
                .concat(n, '\n          database: ')
                .concat(null != e, '\n            ok: ')
                .concat(r, '\n            name: ')
                .concat(null == e ? void 0 : e.name, '\n        data:\n          database:\n            guilds: ')
                .concat(a.length, '\n            basic_channels:\n              total: ')
                .concat(p, ' (')
                .concat(s.channels.length, ' guilds)\n              stale: ')
                .concat(h, ' (')
                .concat(s.stale.length, ' guilds')
                .concat(E, ')\n              unstale: ')
                .concat(_, '\n            full_channels (guilds_with_stale_basic_channels):\n              total: ')
                .concat(m, ' (')
                .concat(c.length, ' guilds)\n      )')
        ),
            I.Z.setCacheInfo({
                guilds: a.length,
                privateChannels: i,
                basicChannels: p,
                basicChannelsStale: h,
                fullChannels: m,
                fullChannelGuilds: f
            });
    });
}
function K(e) {
    let t = N.Z.getSocket(),
        n = !1;
    c.ZP.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                w.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                I.Z.loadLazyCache.recordEnd(),
                w.verbose('Processing First Queued Dispatch'),
                t.dispatcher.processFirstQueuedDispatch(new Set(['READY', 'INITIAL_GUILD'])),
                setTimeout(() => {
                    w.verbose('Unpausing Dispatch Queue'), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            w.warn('Lazy cache has encountered error', e),
                u.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'LazyCache'
                    }
                });
        }
    }),
        !n && I.Z.loadLazyCache.recordEnd();
}
class J extends (i = c.ZP.Store) {
    initialize() {
        !B && N.Z.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !B || U;
    }
    getLazyCacheStatus() {
        return B ? L : 'no-cache';
    }
    get lastWriteTime() {
        return k;
    }
    canWriteCaches(e) {
        return (0, j.$8)() ? (y ? (w.log('Not writing cache because caches cleared'), !1) : !!e || !!G || (w.log('Not writing cache because never connected'), !1)) : (w.log('Not writing cache because not authenticated'), !1);
    }
    async loadCacheAsync(e, t) {
        let n = (0, P.h)(t);
        if ('initializing' !== L) {
            (0, Z.Z)('cache:lazy_cache_not_initializing'),
                n(),
                setTimeout(() => {
                    var e, t;
                    return null === (t = N.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue();
                }, 0);
            return;
        }
        try {
            let t = S.default.getId(),
                i = v.Z.carefullyOpenDatabase(t),
                [r, a, s] = await I.Z.loadMiniCache.measureAsync(() => F(i, t, e));
            r ? (n(), await Q(i, t, a, s)) : (n(), await (K(() => u.Z.dispatch({ type: 'CACHE_LOADED_LAZY_NO_CACHE' })), Promise.resolve()));
        } catch (e) {
            w.error('clearing cache. exception encountered while loading cache.', e, e.stack),
                (0, Z.Z)('cache:exception'),
                n(),
                u.Z.dispatch({
                    type: 'RESET_SOCKET',
                    args: {
                        error: e,
                        action: 'loadCacheAsync'
                    }
                });
        }
    }
}
(s = 'CacheStore'),
    (a = 'displayName') in (r = J)
        ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = s),
    new J(
        u.Z,
        B
            ? {
                  CONNECTION_OPEN: function () {
                      return (D = !0), (G = !0), !1;
                  },
                  LOGOUT: H,
                  CONNECTION_CLOSED: function () {
                      return (D = !1), (G = !0), !1;
                  },
                  CACHE_LOADED: function () {
                      U = !0;
                  },
                  CACHE_LOADED_LAZY: function () {
                      (U = !0), (L = 'cache-loaded');
                  },
                  CACHE_LOADED_LAZY_NO_CACHE: function () {
                      L = 'no-cache';
                  },
                  CLEAR_CACHES: H,
                  WRITE_CACHES: function () {
                      w.verbose('Writing cache now'), (k = Date.now()), (U = !0), d.K.remove(M.FsG), d.K.remove(M.O42), d.K.remove(M.ihW);
                  }
              }
            : {}
    );
