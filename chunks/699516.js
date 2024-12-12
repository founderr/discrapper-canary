var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(735778),
    d = r(922611),
    f = r(23750),
    _ = r(709054),
    h = r(594174),
    p = r(981631);
function m(e, n, r) {
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
let g = {},
    E = {},
    v = {},
    I = new Set(),
    T = new Set(),
    b = new Set(),
    y = 0,
    S = 0,
    A = 0,
    N = 0,
    C = 0,
    R = 0;
function O() {
    N = Object.values(g).length;
    let { [p.OGo.PENDING_INCOMING]: e = 0, [p.OGo.PENDING_OUTGOING]: n = 0, [p.OGo.FRIEND]: r = 0 } = o().countBy(Object.values(g), (e) => e);
    (S = n), (A = r), (C = I.size), (R = b.size), (y = Math.max(e - C - R, 0));
}
function D(e) {
    (g = {}),
        (E = {}),
        (v = {}),
        e.relationships.forEach((e) => {
            (g[e.id] = e.type), null != e.nickname && (E[e.id] = e.nickname), null != e.since && (v[e.id] = e.since), e.is_spam_request && (0, c.A)({ location: 'friend_request_spam_inbox' }) && I.add(e.id), (0, d.JX)({ location: 'relationship_store' }) && e.user_ignored && (T.add(e.id), e.type === p.OGo.PENDING_INCOMING && b.add(e.id));
        }),
        O();
}
function L(e) {
    (g = { ...e.relationships }), O();
}
function x(e) {
    let n = g[e.relationship.id];
    (g = {
        ...g,
        [e.relationship.id]: e.relationship.type
    }),
        null != e.relationship.nickname &&
            (E = {
                ...E,
                [e.relationship.id]: e.relationship.nickname
            }),
        null != e.relationship.since &&
            (v = {
                ...v,
                [e.relationship.id]: e.relationship.since
            }),
        (0, c.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? I.add(e.relationship.id) : I.delete(e.relationship.id),
        (0, d.JX)({ location: 'RelationshipStore::handleRelationshipAdd' }) && e.relationship.userIgnored ? (T.add(e.relationship.id), e.relationship.type === p.OGo.PENDING_INCOMING ? b.add(e.relationship.id) : e.relationship.type === p.OGo.FRIEND && b.delete(e.relationship.id)) : (T.delete(e.relationship.id), b.delete(e.relationship.id)),
        O(),
        e.relationship.type === p.OGo.FRIEND &&
            n === p.OGo.PENDING_OUTGOING &&
            u.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function w(e) {
    (g = { ...g }), delete g[e.relationship.id], null != E[e.relationship.id] && ((E = { ...E }), delete E[e.relationship.id]), null != v[e.relationship.id] && ((v = { ...v }), delete v[e.relationship.id]), !e.relationship.userIgnored && (T.delete(e.relationship.id), b.delete(e.relationship.id)), I.delete(e.relationship.id), O();
}
function P(e) {
    let { relationship: n } = e;
    (g = {
        ...g,
        [n.id]: n.type
    }),
        null == n.since ? delete v[n.id] : (v[n.id] = n.since),
        null == n.nickname ? delete E[n.id] : (E[n.id] = n.nickname),
        (0, c.A)({ location: 'relationship_store' }) && n.isSpamRequest ? I.add(n.id) : I.delete(n.id),
        (0, d.JX)({ location: 'RelationshipStore::handleRelationshipUpdate' }) && n.userIgnored ? (T.add(n.id), n.type === p.OGo.PENDING_INCOMING && b.add(n.id)) : (T.delete(n.id), b.delete(n.id)),
        O();
}
function M(e) {
    (g = { ...g }),
        _.default.keys(g).forEach((e) => {
            g[e] === p.OGo.PENDING_INCOMING && (delete g[e], I.delete(e), b.delete(e));
        }),
        O();
}
class k extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    isFriend(e) {
        return null != e && g[e] === p.OGo.FRIEND;
    }
    isBlockedOrIgnored(e) {
        return this.isBlocked(e) || this.isIgnored(e);
    }
    isBlockedOrIgnoredForMessage(e) {
        return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e);
    }
    isBlocked(e) {
        return null != e && g[e] === p.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var n, r, i, a;
        if (null != e.author && g[e.author.id] === p.OGo.BLOCKED) return !0;
        if (e instanceof f.ZP) {
            if (this.isBlocked(null === (a = e.interactionMetadata) || void 0 === a ? void 0 : null === (i = a.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isBlocked(null === (r = e.interaction_metadata) || void 0 === r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.id)) return !0;
        return !1;
    }
    isIgnored(e) {
        return !!(0, d.JX)({ location: 'relationship-store' }) && null != e && g[e] !== p.OGo.BLOCKED && T.has(e);
    }
    isIgnoredForMessage(e) {
        var n, r, i, a;
        if (null != e.author && this.isIgnored(e.author.id)) return !0;
        if (e instanceof f.ZP) {
            if (this.isIgnored(null === (a = e.interactionMetadata) || void 0 === a ? void 0 : null === (i = a.user) || void 0 === i ? void 0 : i.id)) return !0;
        } else if (this.isIgnored(null === (r = e.interaction_metadata) || void 0 === r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.id)) return !0;
        return !1;
    }
    isUnfilteredPendingIncoming(e) {
        return g[e] === p.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e);
    }
    getPendingCount() {
        return y;
    }
    getSpamCount() {
        return (0, c.A)({ location: 'friend_request_spam_inbox' }) ? C : 0;
    }
    getPendingIgnoredCount() {
        return (0, d.JX)({ location: 'RelationshipStore::getPendingIgnoredCount' }) ? R : 0;
    }
    getOutgoingCount() {
        return S;
    }
    getFriendCount() {
        return A;
    }
    getRelationshipCount() {
        return N;
    }
    getRelationships() {
        return g;
    }
    isSpam(e) {
        return (0, c.A)({ location: 'friend_request_spam_inbox' }) && I.has(e);
    }
    getRelationshipType(e) {
        let n = g[e];
        return null != n ? n : p.OGo.NONE;
    }
    getNickname(e) {
        return E[e];
    }
    getSince(e) {
        return v[e];
    }
    getSinces() {
        return v;
    }
    getFriendIDs() {
        return _.default.keys(g).filter((e) => g[e] === p.OGo.FRIEND);
    }
    getBlockedIDs() {
        return _.default.keys(g).filter((e) => g[e] === p.OGo.BLOCKED);
    }
    getIgnoredIDs() {
        return _.default.keys(g).filter((e) => this.isIgnored(e));
    }
    getBlockedOrIgnoredIDs() {
        return _.default.keys(g).filter((e) => this.isBlockedOrIgnored(e));
    }
}
m(k, 'displayName', 'RelationshipStore'),
    (n.Z = new k(u.Z, {
        CONNECTION_OPEN: D,
        OVERLAY_INITIALIZE: L,
        RELATIONSHIP_ADD: x,
        RELATIONSHIP_REMOVE: w,
        RELATIONSHIP_UPDATE: P,
        RELATIONSHIP_PENDING_INCOMING_REMOVED: M
    }));
