var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(131704),
    c = n(592125),
    d = n(709054);
function _(e, t, n) {
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
let E = {},
    f = new Set();
function h(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function p(e) {
    e in E && delete E[e];
}
function m(e) {
    null != e.threads && e.threads.length > 0 && ((E[e.id] = {}), e.threads.filter((e) => u.AW.has(e.type)).forEach((t) => I(e.id, t))), e.hasThreadsSubscription && f.add(e.id);
}
function I(e, t) {
    let n = E[e],
        r = t.parent_id;
    !(r in n) && (n[r] = {}), (E[e][r][t.id] = h(t));
}
function T(e) {
    (E = {}),
        f.clear(),
        e.guilds.forEach((e) => {
            m(e);
        });
}
function g(e) {
    let { channels: t } = e;
    (E = {}),
        o()(t)
            .filter((e) => u.Ec.has(e.type))
            .groupBy('guild_id')
            .forEach((e, t) => {
                (E[t] = {}), e.forEach((e) => I(t, e));
            });
}
function S(e) {
    let { guild: t } = e;
    p(t.id), m(t);
}
function A(e) {
    let { guild: t } = e;
    p(t.id);
}
function v(e) {
    var t, n;
    let { channel: r } = e;
    if (!u.AW.has(r.type)) return !1;
    if ((null === (t = r.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return O(r);
    {
        let e = null !== (n = E[r.guild_id]) && void 0 !== n ? n : {};
        E[r.guild_id] = {
            ...e,
            [r.parent_id]: {
                ...e[r.parent_id],
                [r.id]: h(r)
            }
        };
    }
}
function N(e) {
    let { guildId: t, threads: n, channelIds: r } = e;
    for (let e in (null == r && f.add(t), (E[t] = { ...E[t] }), E[t])) E[t][e] = { ...E[t][e] };
    n.forEach((e) => I(t, e));
}
function O(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in E) || !(n in E[t]) || !(r in E[t][n])) return !1;
    (E[t] = {
        ...E[t],
        [n]: { ...E[t][n] }
    }),
        delete E[t][n][r],
        o().isEmpty(E[t][n]) && delete E[t][n];
}
function R(e) {
    let { channel: t } = e;
    return O(t);
}
function C(e) {
    let { channel: t } = e;
    if (null == t.guild_id || !(t.guild_id in E)) return !1;
    (E[t.guild_id] = { ...E[t.guild_id] }), delete E[t.guild_id][t.id];
}
let y = {};
class b extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : y;
    }
    getThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : y;
    }
    hasThreadsForChannel(e, t) {
        return !o().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        d.default.keys(E).forEach((t) => {
            e(t, E[t]);
        });
    }
    hasLoaded(e) {
        return f.has(e);
    }
}
_(b, 'displayName', 'ActiveThreadsStore'),
    (t.Z = new b(l.Z, {
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: g,
        GUILD_CREATE: S,
        GUILD_DELETE: A,
        THREAD_CREATE: v,
        THREAD_UPDATE: v,
        THREAD_LIST_SYNC: N,
        THREAD_DELETE: R,
        CHANNEL_DELETE: C
    }));
