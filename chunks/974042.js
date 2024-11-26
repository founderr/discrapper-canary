n(653041);
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(194359),
    c = n(81825),
    d = n(5254),
    u = n(441623),
    h = n(735778),
    m = n(199902),
    p = n(271383),
    g = n(430824),
    f = n(158776),
    _ = n(699516),
    I = n(594174),
    E = n(981631),
    C = n(474936);
function v(e, t, n) {
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
function N(e) {
    let t = I.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function S(e) {
    return {
        status: f.Z.getStatus(e),
        isMobile: f.Z.isMobileOnline(e),
        activities: f.Z.getActivities(e),
        applicationStream: m.Z.getAnyStreamForUser(e)
    };
}
function T(e) {
    let t = [];
    return (
        l()(p.ZP.memberOf(e))
            .map(g.Z.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5)
        }
    );
}
class x extends c.Z {
    get comparator() {
        var e, t, n, i, r;
        return [this.type, null != this.giftIntentType ? 0 : 1, null !== (r = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== r ? r : this.usernameLower];
    }
    constructor(e) {
        super(), v(this, 'key', void 0), v(this, 'type', void 0), v(this, 'status', void 0), v(this, 'isMobile', void 0), v(this, 'activities', void 0), v(this, 'applicationStream', void 0), v(this, 'user', void 0), v(this, 'usernameLower', void 0), v(this, 'mutualGuildsLength', void 0), v(this, 'mutualGuilds', void 0), v(this, 'nickname', void 0), v(this, 'spam', void 0), v(this, 'giftIntentType', void 0), v(this, 'ignoredUser', void 0), (this.key = e.key), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType), (this.ignoredUser = e.ignoredUser);
    }
}
class b {
    reset() {
        let e = l().map(
                _.Z.getRelationships(),
                (e, t) =>
                    new x({
                        key: t,
                        type: e,
                        nickname: _.Z.getNickname(t),
                        ...N(t),
                        ...S(t),
                        ...T(t),
                        spam: (0, h.A)({ location: 'friend-store' }) && _.Z.isSpam(t),
                        ignoredUser: _.Z.isIgnored(t),
                        giftIntentType: e === E.OGo.FRIEND && u.Z.isTopAffinityFriendAnniversary({ userId: t }) ? C.hX.FRIEND_ANNIVERSARY : void 0
                    })
            ),
            t = l().map(
                d.Z.getSuggestions(),
                (e) =>
                    new x({
                        key: e.key,
                        type: 99,
                        nickname: e.name,
                        ...N(e.key),
                        ...S(e.key),
                        ...T(e.key)
                    })
            );
        return new b(l().concat(e, t));
    }
    clone() {
        return new b(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n],
                r = i.merge(e(i.key));
            (t = t || r !== i), (this._rows[n] = r);
        }
        return t;
    }
    filter(e, t) {
        return l()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && '' !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName].map((e) => (null == e ? void 0 : e.toLowerCase())).some((e) => (null == e ? void 0 : e.includes(n)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case E.pJs.ONLINE:
                        return t.type === E.OGo.FRIEND && t.status !== E.Skl.OFFLINE;
                    case E.pJs.PENDING:
                        return (t.type === E.OGo.PENDING_INCOMING && (!(0, h.A)({ location: 'friends-store' }) || !t.spam) && !t.ignoredUser) || t.type === E.OGo.PENDING_OUTGOING;
                    case E.pJs.SPAM:
                        return t.type === E.OGo.PENDING_INCOMING && t.spam;
                    case E.pJs.PENDING_IGNORED:
                        return t.type === E.OGo.PENDING_INCOMING && t.ignoredUser;
                    case E.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case E.pJs.BLOCKED:
                        return t.type === E.OGo.BLOCKED;
                    case E.pJs.ALL:
                    default:
                        return t.type === E.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [E.OGo.FRIEND]: 0,
            [E.OGo.PENDING_INCOMING]: 0,
            [E.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [E.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        v(this, '_rows', void 0), (this._rows = e);
    }
}
let A = !0,
    Z = !1,
    L = E.pJs.ONLINE,
    y = new b(),
    P = !0,
    O = !1;
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    A && (e || (L !== E.pJs.ONLINE && L !== E.pJs.ADD_FRIEND)) && !Z && ((A = !1), (Z = !0), o.Z.fetchRelationships());
}
function j() {
    if (((A = !0), P ? (Z = !1) : R(), (y = y.reset()), O)) return;
    let e = y.getRelationshipCounts();
    L = 0 === e[E.OGo.FRIEND] ? (0 !== e[E.OGo.PENDING_INCOMING] ? E.pJs.PENDING : E.pJs.ADD_FRIEND) : E.pJs.ONLINE;
}
function D() {
    y = P ? new b() : y.reset();
}
function M(e) {
    return function () {
        return !P && !!y.update(e) && ((y = y.clone()), !0);
    };
}
class w extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, f.Z, I.default, g.Z, p.ZP, m.Z, d.Z), this.syncWith([_.Z], D), this.syncWith([d.Z], D), this.syncWith([u.Z], D), this.syncWith([I.default], M(N)), this.syncWith([f.Z, m.Z], M(S)), j();
    }
    getState() {
        return {
            fetching: Z,
            section: L,
            pendingCount: _.Z.getPendingCount(),
            rows: y
        };
    }
}
v(w, 'displayName', 'FriendsStore'),
    (t.ZP = new w(s.Z, {
        CONNECTION_OPEN: function () {
            j();
        },
        FRIENDS_SET_SECTION: function (e) {
            (L = e.section), R();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (P = null != t), D(), !P;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
            Z = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
            (A = !0), (Z = !0);
        },
        DRAWER_SELECT_TAB: function (e) {
            let { tab: t } = e;
            return (P = t !== E.cII.FRIENDS), D(), !P;
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
            (L = e.section), (O = !0);
        }
    }));
