"use strict";
r.r(t), r.d(t, {
  getDefaultSearchState: function() {
    return o
  },
  GuildMemberSafetySearch: function() {
    return _
  }
}), r("222007");
var i = r("448105"),
  n = r.n(i),
  s = r("969176"),
  u = r.n(s),
  a = r("249654"),
  l = r("681937"),
  h = r("509"),
  d = r("770115");

function o() {
  return {
    query: "",
    requireUnusualDmActivity: !1,
    requireCommunicationDisabled: !1,
    requireUnusualAccountActivity: !1,
    requireUsernameQuarantined: !1,
    selectedRoleIds: new Set,
    selectedJoinDateOption: {
      optionId: 0,
      afterDate: null,
      beforeDate: null
    },
    selectedAccountAgeOption: {
      optionId: 0,
      afterDate: null,
      beforeDate: null
    },
    selectedJoinSourceType: void 0,
    selectedSourceInviteCode: void 0
  }
}
let m = Object.freeze(o());

function c(e, t) {
  return null != e && (!!(e.toLowerCase().includes(t.toLowerCase()) || n(e.toLowerCase(), t.toLowerCase())) || !1)
}
class _ {
  get requiresUsernameMatch() {
    return this._searchState.query.trim().length > 0
  }
  reset() {
    this._searchState = o(), this.hasDefaultQuery = !0
  }
  updateSearchState(e) {
    return this._searchState = {
      ...this._searchState,
      ...e
    }, this.hasDefaultQuery = u(this._searchState, m), !0
  }
  resetSearchState() {
    return !this.hasDefaultQuery && (this._searchState = o(), this.hasDefaultQuery = !0, !0)
  }
  getSearchState() {
    return this._searchState
  }
  isMemberIncludedInSearchResults(e) {
    let {
      query: t,
      requireUnusualDmActivity: r,
      requireCommunicationDisabled: i,
      requireUnusualAccountActivity: n,
      requireUsernameQuarantined: s,
      selectedRoleIds: u,
      selectedJoinDateOption: o,
      selectedAccountAgeOption: m,
      selectedSourceInviteCode: _,
      selectedJoinSourceType: M
    } = this._searchState;
    if (t.length > 0 && ! function(e, t) {
        if ("" === t.trim()) return !1;
        let [r, i] = (0, d.splitQuery)(t);
        for (let t of i)
          if (e.userId === t) return !0;
        for (let t of r)
          if (c(e.nick, t)) return !0;
        if (null == e.user) return !1;
        let {
          globalName: n,
          username: s
        } = e.user;
        for (let e of r)
          if (c(s, e)) return !0;
        for (let e of r)
          if (c(n, e)) return !0;
        return !1
      }(e, t)) return !1;
    if (u.size > 0) {
      var f, b;
      if (f = e, !(0 !== (b = u).size && Array.from(b).every(e => f.roles.includes(e)))) return !1
    }
    if (null != o.afterDate && e.joinedAtTimestamp < o.afterDate || null != o.beforeDate && e.joinedAtTimestamp > o.beforeDate || null != m.afterDate && a.default.extractTimestamp(e.userId) < m.afterDate || null != m.beforeDate && a.default.extractTimestamp(e.userId) > m.beforeDate || null != _ && e.sourceInviteCode !== _ || null != M && e.joinSourceType !== M) return !1;
    if (r || i || n || s) return !!(r && e.hasUnusualDmActivity || i && (0, h.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || s && (0, l.hasAutomodQuarantinedProfile)(e)) || !1;
    return !0
  }
  constructor(e) {
    this.guildId = e, this._searchState = o(), this.hasDefaultQuery = !0
  }
}