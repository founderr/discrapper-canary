let r;
n.d(t, {
    I: function () {
        return g;
    }
});
var i,
    a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(683860),
    u = n(442837),
    c = n(570140),
    d = n(882252),
    _ = n(228392),
    E = n(131704),
    f = n(592125),
    h = n(306680),
    p = n(823379),
    m = n(709054),
    I = n(569471);
function T(e, t, n) {
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
let g = 25,
    S = !1,
    A = !0,
    v = !1,
    N = !1,
    O = null,
    R = l.z.LATEST_ACTIVITY,
    C = [],
    y = 0;
function L() {
    (S = !1), (A = !0), (v = !1), (N = !1), (O = null), (R = l.z.LATEST_ACTIVITY), (r = new Set()), (y = 0), (C = []);
}
function b(e, t) {
    return t === l.z.LATEST_ACTIVITY ? h.ZP.lastMessageId(e.id) : e.id;
}
function D(e) {
    (e.channelId !== O || e.sortOrder !== R || !(0, p.OL)(e.tagFilter, r)) && L(), (O = e.channelId), (R = e.sortOrder), (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (S = !0), (A = !1);
}
function M(e) {
    if (e.channelId !== O || e.sortOrder !== R || !(0, p.OL)(e.tagFilter, r)) return !1;
    let t = e.threads.filter((e) => E.AW.has(e.type)).map((e) => e.id);
    C = C.concat(t);
    let n = f.Z.getChannel(O);
    null != n &&
        n.isForumLikeChannel() &&
        (0, _.Hr)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: C.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder
        }),
        U(),
        (v = e.hasMore),
        (y = e.offset + g),
        (S = !1),
        (A = !1);
}
function P(e) {
    return (null == O || null == e.channelId || O === e.channelId) && U();
}
function U() {
    if (null == O) return !1;
    let e = !v,
        t = f.Z.getChannel(C[C.length - 1]),
        n = null == t ? null : b(t, R);
    C = s()(f.Z.getAllThreadsForParent(O))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            var i;
            if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : b(t, R);
                return null != e && m.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => m.default.compare(b(e, R), b(t, R)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function w(e) {
    if (e.channelId !== O || e.sortOrder !== R || !(0, p.OL)(e.tagFilter, r)) return !1;
    (S = !1), (N = !0), (A = !1);
}
function x(e) {
    if (e.channel.id !== O) return !1;
    L();
}
function G(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter((t) => t !== e);
}
function k(e) {
    let { channel: t } = e;
    return G(t.id);
}
function B(e) {
    let { channel: t } = e;
    return O === t.parent_id && !!(0, d.yv)(t.id) && void G(t.id);
}
let F = [];
class Z extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, I.Z, h.ZP);
    }
    get canLoadMore() {
        return v && !S && !N;
    }
    get nextOffset() {
        return y;
    }
    get isInitialLoad() {
        return A;
    }
    isLoading(e, t, n) {
        return O === e && R === t && (0, p.OL)(r, n) ? S : (L(), !1);
    }
    getThreads(e, t, n) {
        return O === e && R === t && (0, p.OL)(r, n) ? C : F;
    }
}
T(Z, 'displayName', 'ArchivedThreadsStore'),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: L,
        THREAD_DELETE: k,
        THREAD_UPDATE: B,
        CHANNEL_DELETE: x,
        LOAD_ARCHIVED_THREADS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: M,
        LOAD_ARCHIVED_THREADS_FAIL: w,
        RESORT_THREADS: P
    }));
