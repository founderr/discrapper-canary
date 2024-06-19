n(47120), n(653041), n(724458);
var l, i = n(392711),
  s = n.n(i),
  a = n(442837),
  r = n(570140),
  o = n(592125),
  c = n(271383),
  u = n(797316),
  d = n(158776),
  h = n(885110),
  m = n(594174),
  p = n(823379),
  E = n(700785),
  g = n(709054),
  f = n(51144),
  C = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {};
class x {
  rebuild(e) {
    this.version++, this.sections = {}, null != e && (this.allUserIds = new Set(e));
    let t = o.Z.getChannel(this.parentId);
    s()(Array.from(this.allUserIds)).map(e => {
      let [n, l, i] = this.calculateNewState(e, t);
      return {
        userId: e,
        sectionId: n,
        displayName: l,
        canViewChannel: i
      }
    }).sort((e, t) => g.default.compare(e.userId, t.userId)).sortBy(e => e.displayName).forEach(e => {
      this.addUser(e.userId, e.sectionId, e.displayName, e.canViewChannel, !0)
    })
  }
  updateMultipleUserIds(e, t) {
    return (null == t || this.guildId === t) && 0 !== (e = e.filter(e => this.allUserIds.has(e))).length && (e.length > 50 ? this.rebuild() : e.forEach(e => this.updateUserId(e)), !0)
  }
  updateUserId(e) {
    if (!this.allUserIds.has(e)) return !1;
    let [t, n, l] = this.findOldState(e), [i, s, a] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
    return (t !== i || n !== s || l !== a) && (this.removeUserId(e, t), this.addUser(e, i, s, a), !0)
  }
  addUserId(e) {
    let [t, n, l] = this.calculateNewState(e, o.Z.getChannel(this.parentId));
    this.addUser(e, t, n, l)
  }
  removeUserId(e, t) {
    if (this.allUserIds.delete(e), null != t && this.removeUserIdFromSection(e, t)) return !0;
    for (let t in this.sections)
      if (this.removeUserIdFromSection(e, t)) return !0;
    return !1
  }
  addUser(e, t, n, l, i) {
    this.allUserIds.add(e);
    let s = m.default.getUser(e);
    if (null == s || "" === s.username) return;
    !(t in this.sections) && (this.sections[t] = {
      sectionId: t,
      usersById: {},
      userIds: []
    });
    let a = this.sections[t];
    if (a.usersById[e] = {
        userId: e,
        displayName: n,
        canViewChannel: l
      }, i) a.userIds.push(e);
    else {
      let t = this.findUserIdSortedPosition(a, e, n);
      a.userIds.splice(t, 0, e)
    }
    this.version++
  }
  findUserIdSortedPosition(e, t, n) {
    let {
      userIds: l,
      usersById: i
    } = e;
    for (let e = 0; e < l.length; e++) {
      let s = l[e],
        a = i[s].displayName;
      if (a === n) {
        if (t < s) return e
      } else if (null == a) {
        if (null != n) return e
      } else if (null != n && n < a) return e
    }
    return l.length
  }
  removeUserIdFromSection(e, t) {
    let n = this.sections[t];
    return null != t && e in n.usersById && (delete n.usersById[e], n.userIds = n.userIds.filter(t => t !== e), this.version++, !0)
  }
  findOldState(e) {
    for (let t in this.sections) {
      let n = this.sections[t];
      if (e in n.usersById) {
        let l = n.usersById[e];
        return [t, l.displayName, l.canViewChannel]
      }
    }
    return [void 0, void 0, !1]
  }
  calculateNewState(e, t) {
    var n, l;
    let i = c.ZP.getMember(this.guildId, e),
      s = m.default.getUser(e),
      a = m.default.getCurrentUser(),
      r = (null == s ? void 0 : s.id) === (null == a ? void 0 : a.id) ? h.Z.getStatus() : d.Z.getStatus(e, this.guildId),
      o = null != s && null != t && E.BT({
        permission: C.Plq.VIEW_CHANNEL,
        user: s,
        context: t
      }),
      u = r !== C.Skl.OFFLINE && r !== C.Skl.INVISIBLE && r !== C.Skl.UNKNOWN ? null !== (n = null == i ? void 0 : i.hoistRoleId) && void 0 !== n ? n : "online" : "offline",
      p = null !== (l = null == i ? void 0 : i.nick) && void 0 !== l ? l : f.ZP.getName(s);
    return [u, null == p ? void 0 : p.toLowerCase(), o]
  }
  constructor(e, t, n) {
    _(this, "guildId", void 0), _(this, "parentId", void 0), _(this, "threadId", void 0), _(this, "version", void 0), _(this, "sections", void 0), _(this, "allUserIds", void 0), this.guildId = e, this.parentId = t, this.threadId = n, this.version = 0, this.sections = {}, this.allUserIds = new Set
  }
}

function T(e) {
  return N(e.user.id)
}

function N(e) {
  if (null == e) return !1;
  let t = !1;
  for (let n in I) I[n].updateUserId(e) && (t = !0);
  return t
}

function Z(e) {
  let {
    guildId: t
  } = e, n = !1;
  for (let e in I) I[e].guildId === t && (I[e].rebuild(), n = !0);
  return n
}
class S extends(l = a.ZP.Store) {
  initialize() {
    this.waitFor(o.Z, c.ZP, u.Z, d.Z, h.Z, m.default), this.syncWith([u.Z], () => {
      let e = u.Z.getSubscribedThreadIds(),
        t = !1;
      for (let n in I) !e.has(n) && (delete I[n], t = !0);
      return t
    }), this.syncWith([h.Z], () => {
      var e;
      return N(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    })
  }
  getMemberListVersion(e) {
    var t;
    return null === (t = I[e]) || void 0 === t ? void 0 : t.version
  }
  getMemberListSections(e) {
    var t;
    return null === (t = I[e]) || void 0 === t ? void 0 : t.sections
  }
  canUserViewChannel(e, t, n) {
    var l, i;
    let s = I[e];
    if (null == s) return !1;
    let a = null === (l = s.sections[t]) || void 0 === l ? void 0 : l.usersById[n];
    return null !== (i = null == a ? void 0 : a.canViewChannel) && void 0 !== i && i
  }
}
_(S, "displayName", "ThreadMemberListStore"), t.Z = new S(r.Z, {
  CONNECTION_OPEN: function() {
    I = {}
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    var t, n;
    if (!(e.id in I)) return !1;
    null === (t = e.addedMembers) || void 0 === t || t.forEach(t => {
      let {
        userId: n
      } = t;
      return I[e.id].addUserId(n)
    }), null === (n = e.removedMemberIds) || void 0 === n || n.forEach(t => I[e.id].removeUserId(t))
  },
  THREAD_UPDATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    if (!(n.id in I) || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived) !== !0) return !1;
    delete I[n.id]
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (!(t.id in I)) return !1;
    delete I[t.id]
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = new Set(t.map(e => e.id)), l = !1;
    for (let e in I) n.has(I[e].parentId) && (I[e].rebuild(), l = !0);
    return l
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      threadId: t,
      guildId: n,
      members: l
    } = e, i = o.Z.getChannel(t), s = null == i ? void 0 : i.parent_id;
    null != s && (I[t] = new x(n, s, t), I[t].rebuild(l.map(e => e.user_id)))
  },
  USER_UPDATE: T,
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        user: t
      } = e;
      return N(t.id)
    }).some(e => e)
  },
  GUILD_MEMBER_ADD: T,
  GUILD_MEMBER_UPDATE: T,
  GUILD_MEMBER_REMOVE: T,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = s()(t).map(e => {
      var t;
      return null === (t = e.user) || void 0 === t ? void 0 : t.id
    }).filter(p.lm).uniq().value(), l = !1;
    for (let e in I) I[e].updateMultipleUserIds(n) && (l = !0);
    return l
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e, n = !1;
    for (let {
        guildId: e,
        members: l
      }
      of t) {
      let t = l.map(e => e.user.id);
      for (let l in I) I[l].updateMultipleUserIds(t, e) && (n = !0)
    }
    return n
  },
  GUILD_ROLE_UPDATE: Z,
  GUILD_ROLE_DELETE: Z,
  PASSIVE_UPDATE_V2: function(e) {
    return e.members.reduce((e, t) => N(t.user.id) || e, !1)
  }
})