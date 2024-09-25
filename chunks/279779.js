var r,
    i = n(789020);
var a = n(653041);
var o = n(315314);
var s = n(610138);
var l = n(216116);
var u = n(78328);
var c = n(815648);
var d = n(47120);
var _ = n(411104);
var E = n(312677);
var f = n(390547);
var h = n(392711),
    p = n.n(h),
    m = n(772848),
    I = n(147913),
    T = n(131704),
    g = n(598077),
    S = n(592125),
    A = n(271383),
    v = n(699516),
    N = n(594174),
    O = n(630388),
    R = n(823379),
    C = n(960048),
    y = n(709054),
    b = n(51144),
    L = n(981631);
function D(e, t, n) {
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
let M = 10;
function P(e) {
    if (null == e || v.Z.isBlocked(e.id)) return null;
    let t = {
        id: e.id,
        username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
    };
    if ((null != b.ZP.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), e instanceof g.Z)) t.isProvisional = e.isProvisional();
    else if ('flags' in e) {
        var n;
        t.isProvisional = O.yE(null !== (n = e.flags) && void 0 !== n ? n : 0, L.xW$.PROVISIONAL_ACCOUNT);
    } else t.isProvisional = !1;
    return v.Z.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = v.Z.getNickname(e.id))), t;
}
function U(e, t, n) {
    null != e && (e[t] = null != n && '' !== n ? n : null);
}
function w(e) {
    let t = [];
    if (null == e || !(0, T.hv)(e.type)) return t;
    let { recipients: n = [] } = e;
    return (
        n.forEach((n) => {
            let r = P(N.default.getUser(n));
            null != e && U(r, e.id), t.push(r);
        }),
        t
    );
}
function x(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = P(e.user);
            null != r && (U(r, t, e.nick), n.push(r));
        }),
        n
    );
}
!(function (e) {
    (e.UPDATE_USERS = 'UPDATE_USERS'), (e.USER_RESULTS = 'USER_RESULTS'), (e.QUERY_SET = 'QUERY_SET'), (e.QUERY_CLEAR = 'QUERY_CLEAR');
})(r || (r = {}));
class G {
    setLimit(e) {
        (this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null != this._worker && !this._subscribed && (this._worker.addEventListener('message', this.handleMessages, !1), (this._subscribed = !0), this._setNextQuery());
    }
    unsubscribe() {
        null != this._worker && this._subscribed && (this._worker.removeEventListener('message', this.handleMessages, !1), (this._subscribed = !1));
    }
    destroy() {
        this.clearQuery(), this.unsubscribe();
    }
    clearQuery() {
        (this._currentQuery = !1),
            (this._nextQuery = null),
            null != this._worker &&
                this._subscribed &&
                this._worker.postMessage({
                    uuid: this._uuid,
                    type: 'QUERY_CLEAR'
                });
    }
    setQuery(e, t, n, r) {
        if (null != e)
            (this._nextQuery = {
                query: e,
                filters: t,
                blacklist: n,
                boosters: null != r ? r : {},
                limit: this._limit
            }),
                this._setNextQuery();
    }
    _setNextQuery() {
        if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery)
            null != this._worker && this._subscribed
                ? ((this._currentQuery = this._nextQuery),
                  (this._nextQuery = null),
                  this._worker.postMessage({
                      uuid: this._uuid,
                      type: 'QUERY_SET',
                      payload: this._currentQuery
                  }))
                : !this._subscribed && this.subscribe();
    }
    constructor(e, t, n = M) {
        D(this, '_worker', void 0),
            D(this, '_uuid', void 0),
            D(this, '_callback', void 0),
            D(this, '_limit', void 0),
            D(this, '_currentQuery', void 0),
            D(this, '_nextQuery', void 0),
            D(this, '_subscribed', void 0),
            D(this, 'handleMessages', (e) => {
                let t = e.data;
                if (null != t && 'USER_RESULTS' === t.type && t.uuid === this._uuid) !1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery();
            }),
            (this._worker = e),
            (this._uuid = (0, m.Z)()),
            (this._callback = t),
            (this._limit = n),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
}
class k extends I.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
        this._worker = new Worker(new URL('/assets/' + n.u('69731'), n.b));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(R.lm)))
                (null == n ? void 0 : n.id) == null &&
                    C.Z.addBreadcrumb({
                        category: 'debug',
                        message: 'User missing id',
                        data: {
                            action: t,
                            userFields: {
                                userIsNull: null == n,
                                idIsNull: (null == n ? void 0 : n.id) == null,
                                usernameIsNull: (null == n ? void 0 : n.username) == null,
                                isBot: null == n ? void 0 : n.isBot,
                                isFriend: null == n ? void 0 : n.isFriend,
                                isProvisional: null == n ? void 0 : n.isProvisional,
                                globalNameIsNull: (null == n ? void 0 : n.globalName) == null,
                                usersArrayLength: e.length
                            }
                        }
                    });
            n.postMessage({
                type: 'UPDATE_USERS',
                payload: e
            });
        }
    }
    getSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
        this.initialize();
        let { _worker: n } = this;
        if (null == n) throw Error('SearchContextManager: No webworker initialized');
        return new G(n, e, t);
    }
    constructor(...e) {
        super(...e),
            D(this, '_worker', void 0),
            D(this, 'actions', {
                LOGOUT: () => this._handleLogout(),
                POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                CONNECTION_OPEN_SUPPLEMENTAL: (e) => this._handleConnectionOpenSupplemental(e),
                OVERLAY_INITIALIZE: (e) => this._handleOverlayInitialize(e),
                CURRENT_USER_UPDATE: (e) => this._handleCurrentUserUpdate(e),
                GUILD_CREATE: (e) => this._handleGuildCreate(e),
                GUILD_MEMBERS_CHUNK_BATCH: (e) => this._handleGuildMembersChunkBatch(e),
                GUILD_MEMBER_ADD: (e) => this._handleGuildMemberUpdate(e),
                GUILD_MEMBER_UPDATE: (e) => this._handleGuildMemberUpdate(e),
                RELATIONSHIP_ADD: (e) => this._handleRelationshipAdd(e),
                RELATIONSHIP_UPDATE: (e) => this._handleRelationshipUpdate(e),
                RELATIONSHIP_REMOVE: (e) => this._handleRelationshipRemove(e),
                CHANNEL_CREATE: (e) => this._handleDMCreate(e),
                CHANNEL_UPDATES: (e) => this._handleDMUpdates(e),
                CHANNEL_RECIPIENT_ADD: (e) => this._handleRecipientChanges(e),
                PASSIVE_UPDATE_V2: (e) => this._handlePassiveUpdateV2(e)
            }),
            D(this, '_handleLogout', () => {
                this.rebootWebworker();
            }),
            D(this, '_handleConnectionOpen', () => {
                setTimeout(() => {
                    let e = N.default.getCurrentUser();
                    if (null == e) return;
                    let t = P(e),
                        n = { [t.id]: t };
                    Object.values(N.default.getUsers()).forEach((e) => {
                        n[e.id] = P(e);
                    });
                    let r = A.ZP.getMutableAllGuildsAndMembers();
                    for (let e in r)
                        for (let t in r[e]) {
                            var i, a;
                            let o = n[t],
                                s = null !== (a = null === (i = r[e][t]) || void 0 === i ? void 0 : i.nick) && void 0 !== a ? a : b.ZP.getGlobalName(o);
                            null != o && (o[e] = null != s && '' !== s ? s : null);
                        }
                    this.updateUsers(Object.values(n), 'connection_open');
                }, 3000);
            }),
            D(this, '_handleConnectionOpenSupplemental', (e) => {
                let { guilds: t } = e;
                setTimeout(() => {
                    let e = p().flatMap(t, (e) => x(e.members, e.id)),
                        n = p().flatMap(t, (e) => {
                            var t;
                            let n = [];
                            return (
                                null === (t = e.activity_instances) ||
                                    void 0 === t ||
                                    t.forEach((t) => {
                                        t.participants.forEach((t) => {
                                            let r = t.member;
                                            if (null != r) {
                                                let t = P(r.user);
                                                null != t && (U(t, e.id, r.nick), n.push(t));
                                            }
                                        });
                                    }),
                                n
                            );
                        });
                    this.updateUsers([...e, ...n], 'connection_open_supplemental');
                }, 3000);
            }),
            D(this, '_handleOverlayInitialize', (e) => {
                let { users: t, guildMembers: n } = e,
                    r = new Map();
                for (let e of t) r.set(e.id, P(e));
                for (let e of y.default.keys(n)) {
                    let t = n[e];
                    if (null != t)
                        for (let n of y.default.keys(t)) {
                            let i = r.get(n),
                                a = t[n];
                            if (null != i && null != a && null != a.nick) U(i, e, a.nick), r.set(n, i);
                        }
                }
                this.updateUsers(Array.from(r.values()), 'overlay_initialize'), r.clear();
            }),
            D(this, '_handleCurrentUserUpdate', (e) => {
                let { user: t } = e,
                    n = P(t);
                null != n && this.updateUsers([n], 'current_user_update');
            }),
            D(this, '_handleGuildCreate', (e) => {
                let { guild: t } = e,
                    { members: n } = t;
                this.updateUsers(x(n, t.id), 'guild_create');
            }),
            D(this, '_handleGuildMembersChunkBatch', (e) => {
                let { chunks: t } = e,
                    n = [];
                for (let e of t) n.push(...x(e.members, e.guildId));
                this.updateUsers(n, 'guild_members_chunk_batch');
            }),
            D(this, '_handleGuildMemberUpdate', (e) => {
                let { guildId: t, user: n, nick: r } = e,
                    i = P(n);
                null != i && (U(i, t, r), this.updateUsers([i], 'guild_member_update'));
            }),
            D(this, '_handlePassiveUpdateV2', (e) => {
                this.updateUsers(x(e.members, e.guildId), 'passive_update_v2');
            }),
            D(this, '_handleRelationshipAdd', (e) => {
                let t = P(e.relationship.user);
                this.updateUsers([t], 'relationship_add');
            }),
            D(this, '_handleRelationshipUpdate', (e) => {
                let t = P(N.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_update');
            }),
            D(this, '_handleRelationshipRemove', (e) => {
                let t = P(N.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_remove');
            }),
            D(this, '_handleDMCreate', (e) => {
                let {
                        channel: { id: t }
                    } = e,
                    n = w(S.Z.getChannel(t));
                if (0 === n.length) return;
                let r = P(N.default.getCurrentUser());
                U(r, t), n.push(r), this.updateUsers(n, 'dm_create');
            }),
            D(this, '_handleDMUpdates', (e) => {
                let { channels: t } = e;
                for (let e of t) {
                    let t = w(S.Z.getChannel(e.id));
                    if (0 === t.length) continue;
                    let n = P(N.default.getCurrentUser());
                    U(n, e.id), t.push(n), this.updateUsers(t, 'dm_updates');
                }
            }),
            D(this, '_handleRecipientChanges', (e) => {
                let { channelId: t, user: n, isMember: r } = e;
                if (!r) return;
                let i = P(n);
                U(i, t), this.updateUsers([i], 'recipient_changes');
            });
    }
}
t.Z = new k();
