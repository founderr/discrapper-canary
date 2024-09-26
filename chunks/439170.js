n.d(t, {
    CR: function () {
        return L;
    },
    oL: function () {
        return b;
    },
    so: function () {
        return r;
    }
});
var r,
    i,
    a = n(724458);
var o = n(653041);
var s = n(47120);
var l = n(392711),
    u = n.n(l),
    c = n(108131),
    d = n.n(c),
    _ = n(149765),
    E = n(442837),
    f = n(570140),
    h = n(353926),
    p = n(700785),
    m = n(199902),
    I = n(314897),
    T = n(592125),
    g = n(650774),
    S = n(271383),
    A = n(430824),
    v = n(158776),
    N = n(885110),
    O = n(594174),
    R = n(981631),
    C = n(689938);
function y(e, t, n) {
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
let L = 'everyone',
    b = 0;
function D(e, t, n, r) {
    switch (t) {
        case R.Skl.ONLINE:
        case R.Skl.OFFLINE:
        case R.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case R.Skl.ONLINE:
                            return C.Z.Messages.STATUS_ONLINE;
                        case R.Skl.OFFLINE:
                            return C.Z.Messages.STATUS_OFFLINE;
                        default:
                            return C.Z.Messages.STATUS_UNKNOWN;
                    }
                },
                count: n,
                index: r
            };
        default:
            let i = A.Z.getGuild(e),
                a = null != i ? A.Z.getRole(i.id, t) : null;
            return {
                type: 'GROUP',
                key: t,
                id: t,
                title: null != a ? a.name : '',
                count: n,
                index: r
            };
    }
}
function M(e, t, n) {
    let r = n === I.default.getId(),
        i = v.Z.isMobileOnline(n),
        a = r ? N.Z.getStatus() : v.Z.getStatus(n, e),
        o = r ? N.Z.getActivities() : v.Z.getActivities(n, e),
        s = m.Z.getStreamForUser(n, e),
        l = O.default.getUser(n);
    return null == l
        ? null
        : {
              type: 'MEMBER',
              ...S.ZP.getMember(e, n),
              user: l,
              status: a,
              activities: o,
              applicationStream: s,
              isOwner: t === n,
              isMobileOnline: i
          };
}
function P(e) {
    let t = T.Z.getChannel(e);
    return null == t ? L : null == t.memberListId ? U(t) : t.memberListId;
}
function U(e) {
    return p.oz(R.Plq.VIEW_CHANNEL, e)
        ? L
        : d()
              .v3(
                  u()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: r, deny: i } = t;
                          return _.e$(r, R.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : _.e$(i, R.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
                      }, [])
                      .sort()
                      .join(',')
              )
              .toString();
}
!(function (e) {
    (e.GROUP = 'GROUP'), (e.MEMBER = 'MEMBER'), (e.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (e.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD');
})(r || (r = {}));
class w {
    updateOwnerId() {
        let e = A.Z.getGuild(this.guildId);
        if (null == e) return !1;
        let t = p.iJ(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            var n;
            let r = t,
                i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
            return (t += i + 1), D(this.guildId, e.id, i, r);
        })),
            (this.rows.length = t);
    }
    sync(e, t) {
        let [n] = e;
        t.forEach((e, t) => this.update(n + t, e));
    }
    invalidate(e) {
        let [t, n] = e;
        for (let e = t; e <= n; e++) {
            let t = this.rows[e];
            if (null == t) break;
            delete this.rows[e], 'MEMBER' === t.type && delete this.members[t.user.id];
        }
        this.version++;
    }
    insert(e, t) {
        let { group: n, member: r } = t;
        if (null != n) this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = M(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && 'MEMBER' === i.type && delete this.members[i.user.id], null != n)) this.rows[e] = D(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = M(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        if (null != t) 'MEMBER' === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++;
    }
    rebuildMember(e) {
        let t = this.members[e];
        if (null != t) Object.assign(t, M(this.guildId, this.ownerId, e)), this.version++;
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        y(this, 'guildId', void 0), y(this, 'listId', void 0), y(this, 'ownerId', void 0), y(this, 'rows', []), y(this, 'groups', []), y(this, 'members', {}), y(this, 'version', 0), (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
}
class x {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return (
            null == r &&
                ((r = new w(e, t)).setGroups([
                    {
                        id: R.Skl.UNKNOWN,
                        count: 0
                    }
                ]),
                (n[t] = r)),
            r
        );
    }
    forEach(e, t) {
        if (null == e)
            u().forEach(this._guildLists, (e) => {
                u().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && u().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        y(this, '_guildLists', {});
    }
}
let G = new x();
function k(e) {
    let t = G.get(e.guildId, e.id);
    e.ops.forEach((e) => {
        switch (e.op) {
            case 'SYNC':
                t.sync(e.range, e.items);
                break;
            case 'INVALIDATE':
                t.invalidate(e.range);
                break;
            case 'INSERT':
                t.insert(e.index, e.item);
                break;
            case 'UPDATE':
                t.update(e.index, e.item);
                break;
            case 'DELETE':
                t.delete(e.index);
        }
    }),
        t.setGroups(e.groups);
}
function B() {
    G.reset();
}
function F(e) {
    let { guild: t } = e;
    G.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function Z(e) {
    let { guild: t } = e;
    G.delete(t.id);
}
function V(e) {
    let { guildId: t } = e;
    G.forEach(t, (e) => e.rebuildMembers());
}
function H(e) {
    let { guildId: t, user: n } = e;
    G.forEach(t, (e) => e.rebuildMember(n.id));
}
let Y = [];
function j() {
    let e = m.Z.getAllApplicationStreams(),
        t = Y.concat(e);
    (Y = e),
        t.forEach((e) => {
            G.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function W() {
    let e = I.default.getId();
    G.forEach(null, (t) => t.rebuildMember(e));
}
function K() {
    return !0;
}
class z extends (i = E.ZP.Store) {
    initialize() {
        this.waitFor(O.default, A.Z, T.Z, S.ZP, v.Z, N.Z, I.default, g.Z, m.Z, h.Z), this.syncWith([N.Z], W), this.syncWith([m.Z], j);
    }
    getProps(e, t) {
        let n = G.get(e, P(t));
        return {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version
        };
    }
    getRows(e, t) {
        return G.get(e, P(t)).rows;
    }
}
y(z, 'displayName', 'ChannelMemberStore'),
    (t.ZP = new z(f.Z, {
        CONNECTION_OPEN: B,
        OVERLAY_INITIALIZE: B,
        GUILD_MEMBER_LIST_UPDATE: k,
        GUILD_UPDATE: F,
        GUILD_DELETE: Z,
        GUILD_ROLE_UPDATE: V,
        GUILD_MEMBER_UPDATE: H,
        CHANNEL_UPDATES: K
    }));
