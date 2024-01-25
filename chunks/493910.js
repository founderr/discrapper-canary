"use strict";
r.r(t), r.d(t, {
  MemberSafetySecondaryIndex: function() {
    return i
  },
  GuildMemberSafetyMembers: function() {
    return b
  }
}), r("424973"), r("222007");
var i, n, s = r("969176"),
  u = r.n(s),
  a = r("407846"),
  l = r("654017"),
  h = r("26989"),
  d = r("697218"),
  o = r("490931"),
  m = r("159132");
let c = Date.now();

function _(e) {
  let t = !e.isCurrentGuildMemberByTimestamp,
    r = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
  return e.isIncludedInSearchResults && r.push("INCLUDED_IN_SEARCH_RESULTS"), r
}

function M(e) {
  return -e.joinedAtTimestamp
}

function f() {
  return new a.default(_, M)
}(n = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
class b {
  reset() {
    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  getJoinedAtTimestamp(e) {
    let t = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
      r = t.getTime();
    return r
  }
  enhanceNewMember(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = this.getJoinedAtTimestamp(e),
      {
        hasUnusualDmActivity: i,
        hasUnusualAccountActivity: n,
        sourceInviteCode: s,
        joinSourceType: u,
        inviterId: a,
        integrationType: l
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      h = d.default.getUser(e.userId),
      o = {
        hasUnusualDmActivity: i,
        hasUnusualAccountActivity: n,
        sourceInviteCode: s,
        joinSourceType: u,
        inviterId: a,
        integrationType: l,
        ...e,
        isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
        isIncludedInSearchResults: !1,
        user: h,
        joinedAtTimestamp: r,
        ...t
      };
    return o
  }
  _computeMemberSupplementals(e, t) {
    var r;
    let i = (0, m.getMemberSupplementalByGuildId)(this.guildId),
      {
        sourceInviteCode: n,
        joinSourceType: s,
        inviterId: u,
        integrationType: a
      } = null !== (r = i[e]) && void 0 !== r ? r : {};
    return {
      sourceInviteCode: null != n ? n : null,
      joinSourceType: null != s ? s : null,
      inviterId: null != u ? u : null,
      integrationType: null != a ? a : null,
      hasUnusualDmActivity: function(e) {
        if (null == e) return !1;
        let t = new Date(e).getTime();
        return t >= c - o.UNUSUAL_DM_COMPARISON_DELTA
      }(t),
      hasUnusualAccountActivity: (0, l.isSpammer)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var r;
    if (null == t) return this._membersMap.set(e.userId, e);
    let i = {
        ...e
      },
      n = {
        ...t
      },
      s = !1,
      {
        sourceInviteCode: a,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: h,
        joinSourceType: d,
        inviterId: o,
        integrationType: m
      } = this._computeMemberSupplementals(i.userId, null !== (r = n.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
    for (let e in i.sourceInviteCode !== a && (n.sourceInviteCode = a), i.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== h && (n.hasUnusualAccountActivity = h), i.joinSourceType !== d && (n.joinSourceType = d), i.inviterId !== o && (n.inviterId = o), i.integrationType !== m && (n.integrationType = m), n) {
      let t = n[e],
        r = i[e];
      !u(t, r) && (i[e] = t, s = !0)
    }
    return this._membersMap.set(i.userId, i) || s
  }
  upsertMember(e, t) {
    let r = this.getMemberByUserId(e);
    if (null == r) {
      let t = h.default.getTrueMember(this.guildId, e);
      if (null == t) return !1;
      r = this.enhanceNewMember(t)
    }
    return this.updateMember(r, t)
  }
  removeMember(e) {
    return this._membersMap.delete(e)
  }
  syncFromGuildMemberStore(e, t) {
    let r = h.default.getTrueMember(e, t);
    return null == r ? this.removeMember(t) : this.upsertMember(t, r)
  }
  getMemberByUserId(e) {
    return this._membersMap.get(e)
  }
  values(e) {
    return this._membersMap.values(e, !0)
  }
  count(e) {
    return this._membersMap.size(e)
  }
  get version() {
    return this._membersMap.version
  }
  constructor(e) {
    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = f()
  }
}