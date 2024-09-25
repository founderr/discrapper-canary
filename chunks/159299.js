n(47120), n(653041), n(724458);
var i,
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    r = n(570140),
    o = n(592125),
    c = n(271383),
    u = n(797316),
    d = n(158776),
    h = n(885110),
    m = n(594174),
    p = n(823379),
    _ = n(700785),
    f = n(709054),
    E = n(51144),
    g = n(981631);
function C(e, t, n) {
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
let I = {};
class T {
    rebuild(e) {
        this.version++, (this.sections = {}), null != e && (this.allUserIds = new Set(e));
        let t = o.Z.getChannel(this.parentId);
        a()(Array.from(this.allUserIds))
            .map((e) => {
                let [n, i, s] = this.calculateNewState(e, t);
                return {
                    userId: e,
                    sectionId: n,
                    displayName: i,
                    canViewChannel: s
                };
            })
            .sort((e, t) => f.default.compare(e.userId, t.userId))
            .sortBy((e) => e.displayName)
            .forEach((e) => {
                this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0);
            });
    }
    updateMultipleUserIds(e, t) {
        return (null == t || this.guildId === t) && 0 !== (e = e.filter((e) => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach((e) => this.updateUserId(e)), !0);
    }
    updateUserId(e) {
        if (!this.allUserIds.has(e)) return !1;
        let [t, n, i] = this.findOldState(e),
            [s, a, l] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
        return (t !== s || n !== a || i !== l) && (this.removeUserId(e, t), this.addUser(e, s, a, l), !0);
    }
    addUserId(e) {
        let [t, n, i] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
        this.addUser(e, t, n, i);
    }
    removeUserId(e, t) {
        if ((this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t))) return !0;
        for (let t in this.sections) if (this.removeUserIdFromSection(e, t)) return !0;
        return !1;
    }
    addUser(e, t, n, i, s) {
        this.allUserIds.add(e);
        let a = m.default.getUser(e);
        if (null == a || '' === a.username) return;
        !(t in this.sections) &&
            (this.sections[t] = {
                sectionId: t,
                usersById: {},
                userIds: []
            });
        let l = this.sections[t];
        if (
            ((l.usersById[e] = {
                userId: e,
                displayName: n,
                canViewChannel: i
            }),
            s)
        )
            l.userIds.push(e);
        else {
            let t = this.findUserIdSortedPosition(l, e, n);
            l.userIds.splice(t, 0, e);
        }
        this.version++;
    }
    findUserIdSortedPosition(e, t, n) {
        let { userIds: i, usersById: s } = e;
        for (let e = 0; e < i.length; e++) {
            let a = i[e],
                l = s[a].displayName;
            if (l === n) {
                if (t < a) return e;
            } else if (null == l) {
                if (null != n) return e;
            } else if (null != n && n < l) return e;
        }
        return i.length;
    }
    removeUserIdFromSection(e, t) {
        let n = this.sections[t];
        return null != t && e in n.usersById && (delete n.usersById[e], (n.userIds = n.userIds.filter((t) => t !== e)), this.version++, !0);
    }
    findOldState(e) {
        for (let t in this.sections) {
            let n = this.sections[t];
            if (e in n.usersById) {
                let i = n.usersById[e];
                return [t, i.displayName, i.canViewChannel];
            }
        }
        return [void 0, void 0, !1];
    }
    calculateNewState(e, t) {
        var n, i;
        let s = c.ZP.getMember(this.guildId, e),
            a = m.default.getUser(e),
            l = m.default.getCurrentUser(),
            r = (null == a ? void 0 : a.id) === (null == l ? void 0 : l.id) ? h.Z.getStatus() : d.Z.getStatus(e, this.guildId),
            o =
                null != a &&
                null != t &&
                _.BT({
                    permission: g.Plq.VIEW_CHANNEL,
                    user: a,
                    context: t
                }),
            u = r !== g.Skl.OFFLINE && r !== g.Skl.INVISIBLE && r !== g.Skl.UNKNOWN ? (null !== (n = null == s ? void 0 : s.hoistRoleId) && void 0 !== n ? n : 'online') : 'offline',
            p = null !== (i = null == s ? void 0 : s.nick) && void 0 !== i ? i : E.ZP.getName(a);
        return [u, null == p ? void 0 : p.toLowerCase(), o];
    }
    constructor(e, t, n) {
        C(this, 'guildId', void 0), C(this, 'parentId', void 0), C(this, 'threadId', void 0), C(this, 'version', void 0), C(this, 'sections', void 0), C(this, 'allUserIds', void 0), (this.guildId = e), (this.parentId = t), (this.threadId = n), (this.version = 0), (this.sections = {}), (this.allUserIds = new Set());
    }
}
function x(e) {
    return v(e.user.id);
}
function v(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n in I) I[n].updateUserId(e) && (t = !0);
    return t;
}
function S(e) {
    let { guildId: t } = e,
        n = !1;
    for (let e in I) I[e].guildId === t && (I[e].rebuild(), (n = !0));
    return n;
}
class N extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, c.ZP, u.Z, d.Z, h.Z, m.default),
            this.syncWith([u.Z], () => {
                let e = u.Z.getSubscribedThreadIds(),
                    t = !1;
                for (let n in I) !e.has(n) && (delete I[n], (t = !0));
                return t;
            }),
            this.syncWith([h.Z], () => {
                var e;
                return v(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
            });
    }
    getMemberListVersion(e) {
        var t;
        return null === (t = I[e]) || void 0 === t ? void 0 : t.version;
    }
    getMemberListSections(e) {
        var t;
        return null === (t = I[e]) || void 0 === t ? void 0 : t.sections;
    }
    canUserViewChannel(e, t, n) {
        var i, s;
        let a = I[e];
        if (null == a) return !1;
        let l = null === (i = a.sections[t]) || void 0 === i ? void 0 : i.usersById[n];
        return null !== (s = null == l ? void 0 : l.canViewChannel) && void 0 !== s && s;
    }
}
C(N, 'displayName', 'ThreadMemberListStore'),
    (t.Z = new N(r.Z, {
        CONNECTION_OPEN: function () {
            I = {};
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            var t, n;
            if (!(e.id in I)) return !1;
            null === (t = e.addedMembers) ||
                void 0 === t ||
                t.forEach((t) => {
                    let { userId: n } = t;
                    return I[e.id].addUserId(n);
                }),
                null === (n = e.removedMemberIds) || void 0 === n || n.forEach((t) => I[e.id].removeUserId(t));
        },
        THREAD_UPDATE: function (e) {
            var t;
            let { channel: n } = e;
            if (!(n.id in I) || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived) !== !0) return !1;
            delete I[n.id];
        },
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            if (!(t.id in I)) return !1;
            delete I[t.id];
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = new Set(t.map((e) => e.id)),
                i = !1;
            for (let e in I) n.has(I[e].parentId) && (I[e].rebuild(), (i = !0));
            return i;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { threadId: t, guildId: n, members: i } = e,
                s = o.Z.getChannel(t),
                a = null == s ? void 0 : s.parent_id;
            null != a && ((I[t] = new T(n, a, t)), I[t].rebuild(i.map((e) => e.user_id)));
        },
        USER_UPDATE: x,
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { user: t } = e;
                    return v(t.id);
                })
                .some((e) => e);
        },
        GUILD_MEMBER_ADD: x,
        GUILD_MEMBER_UPDATE: x,
        GUILD_MEMBER_REMOVE: x,
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e,
                n = a()(t)
                    .map((e) => {
                        var t;
                        return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                    })
                    .filter(p.lm)
                    .uniq()
                    .value(),
                i = !1;
            for (let e in I) I[e].updateMultipleUserIds(n) && (i = !0);
            return i;
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let { guildId: e, members: i } of t) {
                let t = i.map((e) => e.user.id);
                for (let i in I) I[i].updateMultipleUserIds(t, e) && (n = !0);
            }
            return n;
        },
        GUILD_ROLE_UPDATE: S,
        GUILD_ROLE_DELETE: S,
        PASSIVE_UPDATE_V2: function (e) {
            return e.members.reduce((e, t) => v(t.user.id) || e, !1);
        }
    }));
