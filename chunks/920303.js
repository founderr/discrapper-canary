let r;
n.d(t, {
    I: function () {
        return b;
    }
}),
    n(47120);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(683860),
    d = n(442837),
    f = n(570140),
    _ = n(882252),
    p = n(228392),
    h = n(131704),
    m = n(592125),
    g = n(306680),
    E = n(823379),
    v = n(709054),
    I = n(569471);
let b = 25,
    S = !1,
    T = !0,
    y = !1,
    A = !1,
    N = null,
    C = c.z.LATEST_ACTIVITY,
    R = [],
    O = 0;
function D() {
    (S = !1), (T = !0), (y = !1), (A = !1), (N = null), (C = c.z.LATEST_ACTIVITY), (r = new Set()), (O = 0), (R = []);
}
function L(e, t) {
    return t === c.z.LATEST_ACTIVITY ? g.ZP.lastMessageId(e.id) : e.id;
}
function x() {
    if (null == N) return !1;
    let e = !y,
        t = m.Z.getChannel(R[R.length - 1]),
        n = null == t ? null : L(t, C);
    R = u()(m.Z.getAllThreadsForParent(N))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            var i;
            if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : L(t, C);
                return null != e && v.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => v.default.compare(L(e, C), L(t, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function w(e) {
    if (!(R.indexOf(e) >= 0)) return !1;
    R = R.filter((t) => t !== e);
}
let M = [];
class P extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.Z, g.ZP);
    }
    get canLoadMore() {
        return y && !S && !A;
    }
    get nextOffset() {
        return O;
    }
    get isInitialLoad() {
        return T;
    }
    isLoading(e, t, n) {
        return N === e && C === t && (0, E.OL)(r, n) ? S : (D(), !1);
    }
    getThreads(e, t, n) {
        return N === e && C === t && (0, E.OL)(r, n) ? R : M;
    }
}
(o = 'ArchivedThreadsStore'),
    (s = 'displayName') in (a = P)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new P(f.Z, {
        CONNECTION_OPEN: D,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            return w(t.id);
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return N === t.parent_id && !!(0, _.yv)(t.id) && void w(t.id);
        },
        CHANNEL_DELETE: function (e) {
            if (e.channel.id !== N) return !1;
            D();
        },
        LOAD_ARCHIVED_THREADS: function (e) {
            (e.channelId !== N || e.sortOrder !== C || !(0, E.OL)(e.tagFilter, r)) && D(), (N = e.channelId), (C = e.sortOrder), (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (S = !0), (T = !1);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
            if (e.channelId !== N || e.sortOrder !== C || !(0, E.OL)(e.tagFilter, r)) return !1;
            let t = e.threads.filter((e) => h.AW.has(e.type)).map((e) => e.id);
            R = R.concat(t);
            let n = m.Z.getChannel(N);
            null != n &&
                n.isForumLikeChannel() &&
                (0, p.Hr)({
                    guildId: n.guild_id,
                    channelId: n.id,
                    numArchivedThreads: R.length,
                    hasMoreThreads: e.hasMore,
                    filterTagIds: Array.from(e.tagFilter),
                    sortOrder: e.sortOrder
                }),
                x(),
                (y = e.hasMore),
                (O = e.offset + b),
                (S = !1),
                (T = !1);
        },
        LOAD_ARCHIVED_THREADS_FAIL: function (e) {
            if (e.channelId !== N || e.sortOrder !== C || !(0, E.OL)(e.tagFilter, r)) return !1;
            (S = !1), (A = !0), (T = !1);
        },
        RESORT_THREADS: function (e) {
            return (null == N || null == e.channelId || N === e.channelId) && x();
        }
    }));
