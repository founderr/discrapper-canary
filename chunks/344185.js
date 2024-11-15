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
let p = {},
    h = new Set();
function m(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function g(e) {
    e in p && delete p[e];
}
function E(e) {
    null != e.threads && e.threads.length > 0 && ((p[e.id] = {}), e.threads.filter((e) => d.AW.has(e.type)).forEach((t) => v(e.id, t))), e.hasThreadsSubscription && h.add(e.id);
}
function v(e, t) {
    let n = p[e],
        r = t.parent_id;
    !(r in n) && (n[r] = {}), (p[e][r][t.id] = m(t));
}
function b(e) {
    var t, n;
    let { channel: r } = e;
    if (!d.AW.has(r.type)) return !1;
    if ((null === (t = r.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return I(r);
    {
        let e = null !== (n = p[r.guild_id]) && void 0 !== n ? n : {};
        p[r.guild_id] = {
            ...e,
            [r.parent_id]: {
                ...e[r.parent_id],
                [r.id]: m(r)
            }
        };
    }
}
function I(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in p) || !(n in p[t]) || !(r in p[t][n])) return !1;
    (p[t] = {
        ...p[t],
        [n]: { ...p[t][n] }
    }),
        delete p[t][n][r],
        l().isEmpty(p[t][n]) && delete p[t][n];
}
let S = {};
class T extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : S;
    }
    getThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : S;
    }
    hasThreadsForChannel(e, t) {
        return !l().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        _.default.keys(p).forEach((t) => {
            e(t, p[t]);
        });
    }
    hasLoaded(e) {
        return h.has(e);
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
            (p = {}),
                h.clear(),
                e.guilds.forEach((e) => {
                    E(e);
                });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { channels: t } = e;
            (p = {}),
                l()(t)
                    .filter((e) => d.Ec.has(e.type))
                    .groupBy('guild_id')
                    .forEach((e, t) => {
                        (p[t] = {}), e.forEach((e) => v(t, e));
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
        THREAD_CREATE: b,
        THREAD_UPDATE: b,
        THREAD_LIST_SYNC: function (e) {
            let { guildId: t, threads: n, channelIds: r } = e;
            for (let e in (null == r && h.add(t), (p[t] = { ...p[t] }), p[t])) p[t][e] = { ...p[t][e] };
            n.forEach((e) => v(t, e));
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            return I(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (null == t.guild_id || !(t.guild_id in p)) return !1;
            (p[t.guild_id] = { ...p[t.guild_id] }), delete p[t.guild_id][t.id];
        }
    }));
