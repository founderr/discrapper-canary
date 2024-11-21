let r;
n.d(t, {
    U: function () {
        return B;
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
    _ = n(344185),
    p = n(144140),
    h = n(314897),
    m = n(592125),
    g = n(306680),
    E = n(944486),
    v = n(823379),
    b = n(709054),
    I = n(882252);
let T = [],
    S = null,
    y = null,
    A = new Set(),
    N = c.z.LATEST_ACTIVITY,
    C = 0,
    R = [],
    O = !1,
    D = [],
    L = u().chain(T),
    x = u().chain(T),
    w = new Set(),
    M = new Set();
function P(e) {
    var t;
    return null !== (t = g.ZP.lastMessageId(e)) && void 0 !== t ? t : e;
}
function k(e) {
    return function (t, n) {
        if ((0, I.yv)(t)) return -1;
        if ((0, I.yv)(n)) return 1;
        if (e === c.z.LATEST_ACTIVITY) return b.default.compare(P(n), P(t));
        else return b.default.compare(n, t);
    };
}
function U() {
    (R = []), (r = null), (y = null), (A = new Set()), (N = c.z.LATEST_ACTIVITY), (C = 0), (D = []), (L = u().chain(T)), (x = u().chain(T)), M.clear(), w.clear();
}
function G() {
    var e;
    let t = E.Z.getChannelId();
    if (null == t || !(null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
    Z({ refreshThreadIds: !0 });
}
function B(e) {
    let t = m.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(_.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(k(N));
}
function Z(e) {
    var t;
    let n = m.Z.getChannel(y);
    if (null == n) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((D = Object.values(_.Z.getThreadsForParent(n.guild_id, n.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (C = 0),
        (O = !0)),
        0 !== w.size && ((D = D.filter((e) => !w.has(e))), w.clear()),
        0 !== M.size && ((D = Array.from(new Set([...D, ...M]))), M.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((x = u().chain(D).sort(k(c.z.LATEST_ACTIVITY))), (L = u().chain(D).sort(k(c.z.CREATION_DATE))));
    let i = (N === c.z.LATEST_ACTIVITY ? x : L).value();
    let a = (R =
        0 === A.size
            ? i
            : i.filter(
                  ((t = A),
                  function (e) {
                      var n;
                      let r = null === (n = m.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                      return null != r && 0 !== r.length && r.some((e) => t.has(e));
                  })
              )).find((e) =>
        (function (e) {
            let t = p.Z.getCount(e);
            return null === t || 0 === t;
        })(e)
    );
    r = null == a ? null : a;
}
class F extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, _.Z, E.Z, g.ZP);
    }
    getNewThreadCount() {
        return C;
    }
    getCanAckThreads() {
        return O;
    }
    getThreadIds(e, t, n) {
        let r = e !== y,
            i = !(0, v.OL)(n, A),
            a = t !== N;
        return (y = e), (A = n), (N = t), r ? Z({ refreshThreadIds: !0 }) : a ? Z({ sortThreadIds: !0 }) : i && Z(), R;
    }
    getCurrentThreadIds() {
        return R;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = S;
        return (S = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
(o = 'ForumActivePostStore'),
    (s = 'displayName') in (a = F)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new F(f.Z, {
        CONNECTION_OPEN: G,
        OVERLAY_INITIALIZE: G,
        GUILD_CREATE: G,
        CHANNEL_SELECT: G,
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            if (null == t.parent_id || t.parent_id !== y) return !1;
            U();
        },
        THREAD_LIST_SYNC: function (e) {
            var t;
            let { guildId: n } = e;
            if (null == y || n !== (null === (t = m.Z.getChannel(y)) || void 0 === t ? void 0 : t.guild_id)) return !1;
            Z({ refreshThreadIds: !0 });
        },
        THREAD_CREATE: function (e) {
            let { channel: t, isNewlyCreated: n } = e;
            if (null == t.parent_id || t.parent_id !== y || !n) return !1;
            t.ownerId !== h.default.getId() ? C++ : (S = t.id);
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            if (null == t.parent_id || t.parent_id !== y) return !1;
            let n = (0, I.yv)(t.id),
                r = M.has(t.id);
            if (n && !r) M.add(t.id), Z({ sortThreadIds: !0 });
            else {
                if (n || !r) return !1;
                M.delete(t.id), Z({ sortThreadIds: !0 });
            }
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            if (null == t.parent_id || t.parent_id !== y) return !1;
            w.add(t.id), Z({ sortThreadIds: !0 });
        },
        RESORT_THREADS: function (e) {
            let { channelId: t } = e;
            if (null == t || t !== y) return !1;
            Z({ refreshThreadIds: !0 });
        },
        CHANNEL_ACK: function (e) {
            let { channelId: t } = e;
            if (null == t || t !== y) return !1;
            O = !1;
        }
    }));
