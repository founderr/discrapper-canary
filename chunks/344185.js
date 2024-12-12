var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(131704),
    d = r(592125),
    f = r(709054);
function _(e, n, r) {
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
    null != e.threads && e.threads.length > 0 && ((h[e.id] = {}), e.threads.filter((e) => c.AW.has(e.type)).forEach((n) => v(e.id, n))), e.hasThreadsSubscription && p.add(e.id);
}
function v(e, n) {
    let r = h[e],
        i = n.parent_id;
    !(i in r) && (r[i] = {}), (h[e][i][n.id] = m(n));
}
function I(e) {
    (h = {}),
        p.clear(),
        e.guilds.forEach((e) => {
            E(e);
        });
}
function T(e) {
    let { channels: n } = e;
    (h = {}),
        o()(n)
            .filter((e) => c.Ec.has(e.type))
            .groupBy('guild_id')
            .forEach((e, n) => {
                (h[n] = {}), e.forEach((e) => v(n, e));
            });
}
function b(e) {
    let { guild: n } = e;
    g(n.id), E(n);
}
function y(e) {
    let { guild: n } = e;
    g(n.id);
}
function S(e) {
    var n, r;
    let { channel: i } = e;
    if (!c.AW.has(i.type)) return !1;
    if ((null === (n = i.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0) return N(i);
    {
        let e = null !== (r = h[i.guild_id]) && void 0 !== r ? r : {};
        h[i.guild_id] = {
            ...e,
            [i.parent_id]: {
                ...e[i.parent_id],
                [i.id]: m(i)
            }
        };
    }
}
function A(e) {
    let { guildId: n, threads: r, channelIds: i } = e;
    for (let e in (null == i && p.add(n), (h[n] = { ...h[n] }), h[n])) h[n][e] = { ...h[n][e] };
    r.forEach((e) => v(n, e));
}
function N(e) {
    let { guild_id: n, parent_id: r, id: i } = e;
    if (null == n || null == r || !(n in h) || !(r in h[n]) || !(i in h[n][r])) return !1;
    (h[n] = {
        ...h[n],
        [r]: { ...h[n][r] }
    }),
        delete h[n][r][i],
        o().isEmpty(h[n][r]) && delete h[n][r];
}
function C(e) {
    let { channel: n } = e;
    return N(n);
}
function R(e) {
    let { channel: n } = e;
    if (null == n.guild_id || !(n.guild_id in h)) return !1;
    (h[n.guild_id] = { ...h[n.guild_id] }), delete h[n.guild_id][n.id];
}
let O = {};
class D extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isActive(e, n, r) {
        return null != e && null != this.getThreadsForParent(e, n)[r];
    }
    getThreadsForGuild(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : O;
    }
    getThreadsForParent(e, n) {
        var r;
        return null !== (r = this.getThreadsForGuild(e)[n]) && void 0 !== r ? r : O;
    }
    hasThreadsForChannel(e, n) {
        return !o().isEmpty(this.getThreadsForParent(e, n));
    }
    forEachGuild(e) {
        f.default.keys(h).forEach((n) => {
            e(n, h[n]);
        });
    }
    hasLoaded(e) {
        return p.has(e);
    }
}
_(D, 'displayName', 'ActiveThreadsStore'),
    (n.Z = new D(u.Z, {
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: T,
        GUILD_CREATE: b,
        GUILD_DELETE: y,
        THREAD_CREATE: S,
        THREAD_UPDATE: S,
        THREAD_LIST_SYNC: A,
        THREAD_DELETE: C,
        CHANNEL_DELETE: R
    }));
