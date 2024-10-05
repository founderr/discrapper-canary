let r;
n.d(t, {
    I: function () {
        return g;
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
    _ = n(570140),
    E = n(882252),
    f = n(228392),
    h = n(131704),
    p = n(592125),
    I = n(306680),
    m = n(823379),
    T = n(709054),
    S = n(569471);
let g = 25,
    A = !1,
    N = !0,
    O = !1,
    R = !1,
    v = null,
    C = c.z.LATEST_ACTIVITY,
    L = [],
    D = 0;
function y() {
    (A = !1), (N = !0), (O = !1), (R = !1), (v = null), (C = c.z.LATEST_ACTIVITY), (r = new Set()), (D = 0), (L = []);
}
function b(e, t) {
    return t === c.z.LATEST_ACTIVITY ? I.ZP.lastMessageId(e.id) : e.id;
}
function M() {
    if (null == v) return !1;
    let e = !O,
        t = p.Z.getChannel(L[L.length - 1]),
        n = null == t ? null : b(t, C);
    L = u()(p.Z.getAllThreadsForParent(v))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            var i;
            if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : b(t, C);
                return null != e && T.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => T.default.compare(b(e, C), b(t, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function P(e) {
    if (!(L.indexOf(e) >= 0)) return !1;
    L = L.filter((t) => t !== e);
}
let U = [];
class w extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, S.Z, I.ZP);
    }
    get canLoadMore() {
        return O && !A && !R;
    }
    get nextOffset() {
        return D;
    }
    get isInitialLoad() {
        return N;
    }
    isLoading(e, t, n) {
        return v === e && C === t && (0, m.OL)(r, n) ? A : (y(), !1);
    }
    getThreads(e, t, n) {
        return v === e && C === t && (0, m.OL)(r, n) ? L : U;
    }
}
(o = 'ArchivedThreadsStore'),
    (s = 'displayName') in (a = w)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new w(_.Z, {
        CONNECTION_OPEN: y,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            return P(t.id);
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return v === t.parent_id && !!(0, E.yv)(t.id) && void P(t.id);
        },
        CHANNEL_DELETE: function (e) {
            if (e.channel.id !== v) return !1;
            y();
        },
        LOAD_ARCHIVED_THREADS: function (e) {
            (e.channelId !== v || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) && y(), (v = e.channelId), (C = e.sortOrder), (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (A = !0), (N = !1);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
            if (e.channelId !== v || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) return !1;
            let t = e.threads.filter((e) => h.AW.has(e.type)).map((e) => e.id);
            L = L.concat(t);
            let n = p.Z.getChannel(v);
            null != n &&
                n.isForumLikeChannel() &&
                (0, f.Hr)({
                    guildId: n.guild_id,
                    channelId: n.id,
                    numArchivedThreads: L.length,
                    hasMoreThreads: e.hasMore,
                    filterTagIds: Array.from(e.tagFilter),
                    sortOrder: e.sortOrder
                }),
                M(),
                (O = e.hasMore),
                (D = e.offset + g),
                (A = !1),
                (N = !1);
        },
        LOAD_ARCHIVED_THREADS_FAIL: function (e) {
            if (e.channelId !== v || e.sortOrder !== C || !(0, m.OL)(e.tagFilter, r)) return !1;
            (A = !1), (R = !0), (N = !1);
        },
        RESORT_THREADS: function (e) {
            return (null == v || null == e.channelId || v === e.channelId) && M();
        }
    }));
