n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(735778),
    f = n(23750),
    _ = n(709054),
    h = n(594174),
    p = n(981631);
let m = {},
    g = {},
    E = {},
    v = new Set(),
    I = 0,
    S = 0,
    T = 0,
    b = 0,
    y = 0;
function A() {
    b = Object.values(m).length;
    let { [p.OGo.PENDING_INCOMING]: e = 0, [p.OGo.PENDING_OUTGOING]: t = 0, [p.OGo.FRIEND]: n = 0 } = l().countBy(Object.values(m), (e) => e);
    (S = t), (T = n), (I = e - (y = v.size));
}
class N extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    isFriend(e) {
        return null != e && m[e] === p.OGo.FRIEND;
    }
    isBlocked(e) {
        return null != e && m[e] === p.OGo.BLOCKED;
    }
    isBlockedForMessage(e) {
        var t, n, r, i;
        if (null != e.author && m[e.author.id] === p.OGo.BLOCKED) return !0;
        if (e instanceof f.ZP) {
            if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0;
        } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
        return !1;
    }
    getPendingCount() {
        return I;
    }
    getSpamCount() {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) ? y : 0;
    }
    getOutgoingCount() {
        return S;
    }
    getFriendCount() {
        return T;
    }
    getRelationshipCount() {
        return b;
    }
    getRelationships() {
        return m;
    }
    isSpam(e) {
        return (0, d.A)({ location: 'friend_request_spam_inbox' }) && v.has(e);
    }
    getRelationshipType(e) {
        let t = m[e];
        return null != t ? t : p.OGo.NONE;
    }
    getNickname(e) {
        return g[e];
    }
    getSince(e) {
        return E[e];
    }
    getSinces() {
        return E;
    }
    getFriendIDs() {
        return _.default.keys(m).filter((e) => m[e] === p.OGo.FRIEND);
    }
    getBlockedIDs() {
        return _.default.keys(m).filter((e) => m[e] === p.OGo.BLOCKED);
    }
}
(s = 'RelationshipStore'),
    (a = 'displayName') in (i = N)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new N(c.Z, {
        CONNECTION_OPEN: function (e) {
            (m = {}),
                (g = {}),
                (E = {}),
                e.relationships.forEach((e) => {
                    (m[e.id] = e.type), null != e.nickname && (g[e.id] = e.nickname), null != e.since && (E[e.id] = e.since), e.is_spam_request && (0, d.A)({ location: 'friend_request_spam_inbox' }) && v.add(e.id);
                }),
                A();
        },
        OVERLAY_INITIALIZE: function (e) {
            (m = { ...e.relationships }), A();
        },
        RELATIONSHIP_ADD: function (e) {
            let t = m[e.relationship.id];
            (m = {
                ...m,
                [e.relationship.id]: e.relationship.type
            }),
                null != e.relationship.nickname &&
                    (g = {
                        ...g,
                        [e.relationship.id]: e.relationship.nickname
                    }),
                null != e.relationship.since &&
                    (E = {
                        ...E,
                        [e.relationship.id]: e.relationship.since
                    }),
                (0, d.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? v.add(e.relationship.id) : v.delete(e.relationship.id),
                A(),
                e.relationship.type === p.OGo.FRIEND &&
                    t === p.OGo.PENDING_OUTGOING &&
                    c.Z.dispatch({
                        type: 'FRIEND_REQUEST_ACCEPTED',
                        user: e.relationship.user
                    });
        },
        RELATIONSHIP_REMOVE: function (e) {
            (m = { ...m }), delete m[e.relationship.id], null != g[e.relationship.id] && ((g = { ...g }), delete g[e.relationship.id]), null != E[e.relationship.id] && ((E = { ...E }), delete E[e.relationship.id]), v.delete(e.relationship.id), A();
        },
        RELATIONSHIP_UPDATE: function (e) {
            null == e.relationship.since ? delete E[e.relationship.id] : (E[e.relationship.id] = e.relationship.since), null == e.relationship.nickname ? delete g[e.relationship.id] : (g[e.relationship.id] = e.relationship.nickname), (0, d.A)({ location: 'relationship_store' }) && e.relationship.isSpamRequest ? v.add(e.relationship.id) : v.delete(e.relationship.id);
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function (e) {
            (m = { ...m }),
                _.default.keys(m).forEach((e) => {
                    m[e] === p.OGo.PENDING_INCOMING && (delete m[e], v.delete(e));
                }),
                A();
        }
    }));
