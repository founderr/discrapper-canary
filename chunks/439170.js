n.d(t, {
    CR: function () {
        return C;
    },
    oL: function () {
        return R;
    },
    so: function () {
        return r;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s = n(392711),
    o = n.n(s),
    l = n(108131),
    u = n.n(l),
    c = n(149765),
    d = n(442837),
    f = n(570140),
    _ = n(353926),
    p = n(700785),
    h = n(199902),
    m = n(314897),
    g = n(592125),
    E = n(650774),
    v = n(271383),
    I = n(430824),
    b = n(158776),
    T = n(885110),
    S = n(594174),
    y = n(981631),
    A = n(388032);
function N(e, t, n) {
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
let C = 'everyone',
    R = 0;
function O(e, t, n, r) {
    switch (t) {
        case y.Skl.ONLINE:
        case y.Skl.OFFLINE:
        case y.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case y.Skl.ONLINE:
                            return A.intl.string(A.t.WbGtnJ);
                        case y.Skl.OFFLINE:
                            return A.intl.string(A.t.Vv0abG);
                        default:
                            return A.intl.string(A.t['UQMV/P']);
                    }
                },
                count: n,
                index: r
            };
        default:
            let i = I.Z.getGuild(e),
                a = null != i ? I.Z.getRole(i.id, t) : null;
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
function D(e, t, n) {
    let r = n === m.default.getId(),
        i = b.Z.isMobileOnline(n),
        a = r ? T.Z.getStatus() : b.Z.getStatus(n, e),
        s = r ? T.Z.getActivities() : b.Z.getActivities(n, e),
        o = h.Z.getStreamForUser(n, e),
        l = S.default.getUser(n);
    return null == l
        ? null
        : {
              type: 'MEMBER',
              ...v.ZP.getMember(e, n),
              user: l,
              status: a,
              activities: s,
              applicationStream: o,
              isOwner: t === n,
              isMobileOnline: i
          };
}
function L(e) {
    let t = g.Z.getChannel(e);
    return null == t
        ? C
        : null == t.memberListId
          ? (function (e) {
                return p.oz(y.Plq.VIEW_CHANNEL, e)
                    ? C
                    : u()
                          .v3(
                              o()(e.permissionOverwrites)
                                  .reduce((e, t) => {
                                      let { id: n, allow: r, deny: i } = t;
                                      return c.e$(r, y.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : c.e$(i, y.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
                                  }, [])
                                  .sort()
                                  .join(',')
                          )
                          .toString();
            })(t)
          : t.memberListId;
}
((a = r || (r = {})).GROUP = 'GROUP'), (a.MEMBER = 'MEMBER'), (a.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (a.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (a.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (a.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD');
class x {
    updateOwnerId() {
        let e = I.Z.getGuild(this.guildId);
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
            return (t += i + 1), O(this.guildId, e.id, i, r);
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
        if (null != n) this.rows.splice(e, 0, O(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = D(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && 'MEMBER' === i.type && delete this.members[i.user.id], null != n)) this.rows[e] = O(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = D(this.guildId, this.ownerId, r.user.id);
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
        if (null != t) Object.assign(t, D(this.guildId, this.ownerId, e)), this.version++;
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        N(this, 'guildId', void 0), N(this, 'listId', void 0), N(this, 'ownerId', void 0), N(this, 'rows', []), N(this, 'groups', []), N(this, 'members', {}), N(this, 'version', 0), (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
}
let w = new (class e {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return (
            null == r &&
                ((r = new x(e, t)).setGroups([
                    {
                        id: y.Skl.UNKNOWN,
                        count: 0
                    }
                ]),
                (n[t] = r)),
            r
        );
    }
    forEach(e, t) {
        if (null == e)
            o().forEach(this._guildLists, (e) => {
                o().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && o().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        N(this, '_guildLists', {});
    }
})();
function M() {
    w.reset();
}
let P = [];
function k() {
    let e = h.Z.getAllApplicationStreams(),
        t = P.concat(e);
    (P = e),
        t.forEach((e) => {
            w.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function U() {
    let e = m.default.getId();
    w.forEach(null, (t) => t.rebuildMember(e));
}
class B extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(S.default, I.Z, g.Z, v.ZP, b.Z, T.Z, m.default, E.Z, h.Z, _.Z), this.syncWith([T.Z], U), this.syncWith([h.Z], k);
    }
    getProps(e, t) {
        let n = w.get(e, L(t));
        return {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version
        };
    }
    getRows(e, t) {
        return w.get(e, L(t)).rows;
    }
}
N(B, 'displayName', 'ChannelMemberStore'),
    (t.ZP = new B(f.Z, {
        CONNECTION_OPEN: M,
        OVERLAY_INITIALIZE: M,
        GUILD_MEMBER_LIST_UPDATE: function (e) {
            let t = w.get(e.guildId, e.id);
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
        },
        GUILD_UPDATE: function (e) {
            let { guild: t } = e;
            w.forEach(t.id, (e) => {
                e.updateOwnerId() && e.rebuildMembers();
            });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            w.delete(t.id);
        },
        GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            w.forEach(t, (e) => e.rebuildMembers());
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            w.forEach(t, (e) => e.rebuildMember(n.id));
        },
        CHANNEL_UPDATES: function () {
            return !0;
        }
    }));
