n.d(t, {
    CR: function () {
        return C;
    },
    oL: function () {
        return L;
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
    _ = n(570140),
    E = n(353926),
    f = n(700785),
    h = n(199902),
    p = n(314897),
    I = n(592125),
    m = n(650774),
    T = n(271383),
    S = n(430824),
    g = n(158776),
    A = n(885110),
    N = n(594174),
    O = n(981631),
    R = n(689938);
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
let C = 'everyone',
    L = 0;
function D(e, t, n, r) {
    switch (t) {
        case O.Skl.ONLINE:
        case O.Skl.OFFLINE:
        case O.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case O.Skl.ONLINE:
                            return R.Z.Messages.STATUS_ONLINE;
                        case O.Skl.OFFLINE:
                            return R.Z.Messages.STATUS_OFFLINE;
                        default:
                            return R.Z.Messages.STATUS_UNKNOWN;
                    }
                },
                count: n,
                index: r
            };
        default:
            let i = S.Z.getGuild(e),
                a = null != i ? S.Z.getRole(i.id, t) : null;
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
function y(e, t, n) {
    let r = n === p.default.getId(),
        i = g.Z.isMobileOnline(n),
        a = r ? A.Z.getStatus() : g.Z.getStatus(n, e),
        s = r ? A.Z.getActivities() : g.Z.getActivities(n, e),
        o = h.Z.getStreamForUser(n, e),
        l = N.default.getUser(n);
    return null == l
        ? null
        : {
              type: 'MEMBER',
              ...T.ZP.getMember(e, n),
              user: l,
              status: a,
              activities: s,
              applicationStream: o,
              isOwner: t === n,
              isMobileOnline: i
          };
}
function b(e) {
    let t = I.Z.getChannel(e);
    return null == t
        ? C
        : null == t.memberListId
          ? (function (e) {
                return f.oz(O.Plq.VIEW_CHANNEL, e)
                    ? C
                    : u()
                          .v3(
                              o()(e.permissionOverwrites)
                                  .reduce((e, t) => {
                                      let { id: n, allow: r, deny: i } = t;
                                      return c.e$(r, O.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : c.e$(i, O.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
                                  }, [])
                                  .sort()
                                  .join(',')
                          )
                          .toString();
            })(t)
          : t.memberListId;
}
((a = r || (r = {})).GROUP = 'GROUP'), (a.MEMBER = 'MEMBER'), (a.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (a.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (a.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (a.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD');
class M {
    updateOwnerId() {
        let e = S.Z.getGuild(this.guildId);
        if (null == e) return !1;
        let t = f.iJ(e);
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
            let t = y(this.guildId, this.ownerId, r.user.id);
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
            let t = y(this.guildId, this.ownerId, r.user.id);
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
        if (null != t) Object.assign(t, y(this.guildId, this.ownerId, e)), this.version++;
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        v(this, 'guildId', void 0), v(this, 'listId', void 0), v(this, 'ownerId', void 0), v(this, 'rows', []), v(this, 'groups', []), v(this, 'members', {}), v(this, 'version', 0), (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
}
let P = new (class e {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return (
            null == r &&
                ((r = new M(e, t)).setGroups([
                    {
                        id: O.Skl.UNKNOWN,
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
        v(this, '_guildLists', {});
    }
})();
function U() {
    P.reset();
}
let w = [];
function x() {
    let e = h.Z.getAllApplicationStreams(),
        t = w.concat(e);
    (w = e),
        t.forEach((e) => {
            P.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function G() {
    let e = p.default.getId();
    P.forEach(null, (t) => t.rebuildMember(e));
}
class k extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(N.default, S.Z, I.Z, T.ZP, g.Z, A.Z, p.default, m.Z, h.Z, E.Z), this.syncWith([A.Z], G), this.syncWith([h.Z], x);
    }
    getProps(e, t) {
        let n = P.get(e, b(t));
        return {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version
        };
    }
    getRows(e, t) {
        return P.get(e, b(t)).rows;
    }
}
v(k, 'displayName', 'ChannelMemberStore'),
    (t.ZP = new k(_.Z, {
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
        GUILD_MEMBER_LIST_UPDATE: function (e) {
            let t = P.get(e.guildId, e.id);
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
            P.forEach(t.id, (e) => {
                e.updateOwnerId() && e.rebuildMembers();
            });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            P.delete(t.id);
        },
        GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            P.forEach(t, (e) => e.rebuildMembers());
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            P.forEach(t, (e) => e.rebuildMember(n.id));
        },
        CHANNEL_UPDATES: function () {
            return !0;
        }
    }));
