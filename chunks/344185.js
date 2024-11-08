n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(131704),
    f = n(592125),
    _ = n(709054);
let h = {},
    p = new Set();
function m(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function g(e) {
    e in h && delete h[e];
}
function E(e) {
    null != e.threads && e.threads.length > 0 && ((h[e.id] = {}), e.threads.filter((e) => d.AW.has(e.type)).forEach((t) => v(e.id, t))), e.hasThreadsSubscription && p.add(e.id);
}
function v(e, t) {
    let n = h[e],
        r = t.parent_id;
    !(r in n) && (n[r] = {}), (h[e][r][t.id] = m(t));
}
function I(e) {
    var t, n;
    let { channel: r } = e;
    if (!d.AW.has(r.type)) return !1;
    if ((null === (t = r.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return S(r);
    {
        let e = null !== (n = h[r.guild_id]) && void 0 !== n ? n : {};
        h[r.guild_id] = {
            ...e,
            [r.parent_id]: {
                ...e[r.parent_id],
                [r.id]: m(r)
            }
        };
    }
}
function S(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in h) || !(n in h[t]) || !(r in h[t][n])) return !1;
    (h[t] = {
        ...h[t],
        [n]: { ...h[t][n] }
    }),
        delete h[t][n][r],
        l().isEmpty(h[t][n]) && delete h[t][n];
}
let b = {};
class T extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : b;
    }
    getThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : b;
    }
    hasThreadsForChannel(e, t) {
        return !l().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        _.default.keys(h).forEach((t) => {
            e(t, h[t]);
        });
    }
    hasLoaded(e) {
        return p.has(e);
    }
}
(s = 'ActiveThreadsStore'),
    (a = 'displayName') in (i = T)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new T(c.Z, {
        CONNECTION_OPEN: function (e) {
            (h = {}),
                p.clear(),
                e.guilds.forEach((e) => {
                    E(e);
                });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { channels: t } = e;
            (h = {}),
                l()(t)
                    .filter((e) => d.Ec.has(e.type))
                    .groupBy('guild_id')
                    .forEach((e, t) => {
                        (h[t] = {}), e.forEach((e) => v(t, e));
                    });
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            g(t.id), E(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            g(t.id);
        },
        THREAD_CREATE: I,
        THREAD_UPDATE: I,
        THREAD_LIST_SYNC: function (e) {
            let { guildId: t, threads: n, channelIds: r } = e;
            for (let e in (null == r && p.add(t), (h[t] = { ...h[t] }), h[t])) h[t][e] = { ...h[t][e] };
            n.forEach((e) => v(t, e));
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            return S(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (null == t.guild_id || !(t.guild_id in h)) return !1;
            (h[t.guild_id] = { ...h[t.guild_id] }), delete h[t.guild_id][t.id];
        }
    }));
