var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(735778),
    c = n(23750),
    d = n(709054),
    _ = n(594174),
    E = n(981631);
function f(e, t, n) {
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
let h = {},
    p = {},
    m = {},
    I = new Set(),
    T = 0,
    g = 0,
    S = 0,
    A = 0,
    v = 0;
function N() {
    A = Object.values(h).length;
    let { [E.OGo.PENDING_INCOMING]: e = 0, [E.OGo.PENDING_OUTGOING]: t = 0, [E.OGo.FRIEND]: n = 0 } = o().countBy(Object.values(h), (e) => e);
    (g = t), (S = n), (T = e - (v = I.size));
}
function O(e) {
    (h = {}),
        (p = {}),
        (m = {}),
        e.relationships.forEach((e) => {
            (h[e.id] = e.type), null != e.nickname && (p[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), e.is_spam_request && (0, u.A)({ location: 'friend_request_spam_inbox' }) && I.add(e.id);
        }),
        N();
}
function R(e) {
    (h = { ...e.relationships }), N();
}
function C(e) {
    let t = h[e.relationship.id];
    (h = {
        ...h,
        [e.relationship.id]: e.relationship.type
    }),
        null != e.relationship.nickname &&
            (p = {
                ...p,
                [e.relationship.id]: e.relationship.nickname
            }),
        null != e.relationship.since &&
            (m = {
                ...m,
                [e.relationship.id]: e.relationship.since
            }),
        (0, u.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? I.add(e.relationship.id) : I.delete(e.relationship.id),
        N(),
        e.relationship.type === E.OGo.FRIEND &&
            t === E.OGo.PENDING_OUTGOING &&
            l.Z.dispatch({
                type: 'FRIEND_REQUEST_ACCEPTED',
                user: e.relationship.user
            });
}
function y(e) {
    (h = { ...h }), delete h[e.relationship.id], null != p[e.relationship.id] && ((p = { ...p }), delete p[e.relationship.id]), null != m[e.relationship.id] && ((m = { ...m }), delete m[e.relationship.id]), I.delete(e.relationship.id), N();
}
function L(e) {
    null == e.relationship.since ? delete m[e.relationship.id] : (m[e.relationship.id] = e.relationship.since), null == e.relationship.nickname ? delete p[e.relationship.id] : (p[e.relationship.id] = e.relationship.nickname), (0, u.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? I.add(e.relationship.id) : I.delete(e.relationship.id);
}
function b(e) {
    (h = { ...h }),
        d.default.keys(h).forEach((e) => {
            h[e] === E.OGo.PENDING_INCOMING && (delete h[e], I.delete(e));
        }),
        N();
}
class D extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(_.default);
    }
    isFriend(e) {
        return null != e && h[e] === E.OGo.FRIEND;
    }
    isBlocked(e) {
        return null != e && h[e] === E.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && h[e.author.id] === E.OGo.BLOCKED) return !0;
        if (e instanceof c.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    getPendingCount() {
        return T;
    }
    getSpamCount() {
        return (0, u.A)({ location: 'friend_request_spam_inbox' }) ? v : 0;
    }
    getOutgoingCount() {
        return g;
    }
    getFriendCount() {
        return S;
    }
    getRelationshipCount() {
        return A;
    }
    getRelationships() {
        return h;
    }
    isSpam(e) {
        return (0, u.A)({ location: 'friend_request_spam_inbox' }) && I.has(e);
    }
    getRelationshipType(e) {
        let t = h[e];
        return null != t ? t : E.OGo.NONE;
    }
    getNickname(e) {
        return p[e];
    }
    getSince(e) {
        return m[e];
    }
    getSinces() {
        return m;
    }
    getFriendIDs() {
        return d.default.keys(h).filter((e) => h[e] === E.OGo.FRIEND);
    }
    getBlockedIDs() {
        return d.default.keys(h).filter((e) => h[e] === E.OGo.BLOCKED);
    }
}
f(D, 'displayName', 'RelationshipStore'),
    (t.Z = new D(l.Z, {
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: R,
        RELATIONSHIP_ADD: C,
        RELATIONSHIP_REMOVE: y,
        RELATIONSHIP_UPDATE: L,
        RELATIONSHIP_PENDING_INCOMING_REMOVED: b
    }));
