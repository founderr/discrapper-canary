let r;
n.d(t, {
    U: function () {
        return F;
    }
});
var i,
    a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(683860),
    u = n(442837),
    c = n(570140),
    d = n(344185),
    _ = n(144140),
    E = n(314897),
    f = n(592125),
    h = n(306680),
    p = n(944486),
    m = n(823379),
    I = n(709054),
    T = n(882252);
function g(e, t, n) {
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
let S = [],
    A = null,
    v = null,
    N = new Set(),
    O = l.z.LATEST_ACTIVITY,
    R = 0,
    C = [],
    y = !1,
    L = [],
    b = s().chain(S),
    D = s().chain(S),
    M = new Set(),
    P = new Set();
function U(e) {
    var t;
    return null !== (t = h.ZP.lastMessageId(e)) && void 0 !== t ? t : e;
}
function w(e) {
    let t = _.Z.getCount(e);
    return null === t || 0 === t;
}
function x(e) {
    return function (t, n) {
        if ((0, T.yv)(t)) return -1;
        if ((0, T.yv)(n)) return 1;
        if (e === l.z.LATEST_ACTIVITY) return I.default.compare(U(n), U(t));
        else return I.default.compare(n, t);
    };
}
function G(e) {
    return function (t) {
        var n;
        let r = null === (n = f.Z.getChannel(t)) || void 0 === n ? void 0 : n.appliedTags;
        return null != r && 0 !== r.length && r.some((t) => e.has(t));
    };
}
function k() {
    (C = []), (r = null), (v = null), (N = new Set()), (O = l.z.LATEST_ACTIVITY), (R = 0), (L = []), (b = s().chain(S)), (D = s().chain(S)), P.clear(), M.clear();
}
function B() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t || !(null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return k(), !1;
    Z({ refreshThreadIds: !0 });
}
function F(e) {
    let t = f.Z.getChannel(e);
    return null == t
        ? []
        : Object.values(d.Z.getThreadsForParent(t.guild_id, t.id))
              .map((e) => {
                  let { id: t } = e;
                  return t;
              })
              .sort(x(O));
}
function Z(e) {
    let t = f.Z.getChannel(v);
    if (null == t) return;
    (null == e ? void 0 : e.refreshThreadIds) &&
        ((L = Object.values(d.Z.getThreadsForParent(t.guild_id, t.id)).map((e) => {
            let { id: t } = e;
            return t;
        })),
        (R = 0),
        (y = !0)),
        0 !== M.size && ((L = L.filter((e) => !M.has(e))), M.clear()),
        0 !== P.size && ((L = Array.from(new Set([...L, ...P]))), P.clear()),
        ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && ((D = s().chain(L).sort(x(l.z.LATEST_ACTIVITY))), (b = s().chain(L).sort(x(l.z.CREATION_DATE))));
    let n = (O === l.z.LATEST_ACTIVITY ? D : b).value(),
        i = (C = 0 === N.size ? n : n.filter(G(N))).find((e) => w(e));
    r = null == i ? null : i;
}
function V(e) {
    var t;
    let { guildId: n } = e;
    if (null == v || n !== (null === (t = f.Z.getChannel(v)) || void 0 === t ? void 0 : t.guild_id)) return !1;
    Z({ refreshThreadIds: !0 });
}
function H(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    let n = (0, T.yv)(t.id),
        r = P.has(t.id);
    if (n && !r) P.add(t.id), Z({ sortThreadIds: !0 });
    else {
        if (n || !r) return !1;
        P.delete(t.id), Z({ sortThreadIds: !0 });
    }
}
function Y(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (null == t.parent_id || t.parent_id !== v || !n) return !1;
    t.ownerId !== E.default.getId() ? R++ : (A = t.id);
}
function j(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    M.add(t.id), Z({ sortThreadIds: !0 });
}
function W(e) {
    let { channel: t } = e;
    if (null == t.parent_id || t.parent_id !== v) return !1;
    k();
}
function K(e) {
    let { channelId: t } = e;
    if (null == t || t !== v) return !1;
    Z({ refreshThreadIds: !0 });
}
function z(e) {
    let { channelId: t } = e;
    if (null == t || t !== v) return !1;
    y = !1;
}
class q extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, d.Z, p.Z, h.ZP);
    }
    getNewThreadCount() {
        return R;
    }
    getCanAckThreads() {
        return y;
    }
    getThreadIds(e, t, n) {
        let r = e !== v,
            i = !(0, m.OL)(n, N),
            a = t !== O;
        return (v = e), (N = n), (O = t), r ? Z({ refreshThreadIds: !0 }) : a ? Z({ sortThreadIds: !0 }) : i && Z(), C;
    }
    getCurrentThreadIds() {
        return C;
    }
    getAndDeleteMostRecentUserCreatedThreadId() {
        let e = A;
        return (A = null), e;
    }
    getFirstNoReplyThreadId() {
        return r;
    }
}
g(q, 'displayName', 'ForumActivePostStore'),
    (t.Z = new q(c.Z, {
        CONNECTION_OPEN: B,
        OVERLAY_INITIALIZE: B,
        GUILD_CREATE: B,
        CHANNEL_SELECT: B,
        CHANNEL_DELETE: W,
        THREAD_LIST_SYNC: V,
        THREAD_CREATE: Y,
        THREAD_UPDATE: H,
        THREAD_DELETE: j,
        RESORT_THREADS: K,
        CHANNEL_ACK: z
    }));
