n.d(t, {
    I: function () {
        return d;
    },
    j: function () {
        return p;
    }
});
var r = n(47120);
var i = n(498607),
    a = n.n(i),
    o = n(715903),
    s = n(69882),
    l = n(709054),
    u = n(733026);
function c(e, t, n) {
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
function d() {
    return {
        query: '',
        requireUnusualDmActivity: !1,
        requireCommunicationDisabled: !1,
        requireUnusualAccountActivity: !1,
        requireUsernameQuarantined: !1,
        selectedRoleIds: new Set(),
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
        selectedSourceInviteCode: void 0,
        selectedSort: void 0
    };
}
let _ = Object.freeze(d());
function E(e, t) {
    return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1);
}
function f(e, t) {
    if ('' === t.trim()) return !1;
    let [n, r] = (0, u.C)(t);
    for (let t of r) if (e.userId === t) return !0;
    for (let t of n) if (E(e.nick, t)) return !0;
    if (null == e.user) return !1;
    let { globalName: i, username: a } = e.user;
    for (let e of n) if (E(a, e)) return !0;
    for (let e of n) if (E(i, e)) return !0;
    return !1;
}
function h(e, t) {
    return 0 !== t.size && Array.from(t).every((t) => e.roles.includes(t));
}
class p {
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = d()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (
            (this._searchState = {
                ...this._searchState,
                ...e
            }),
            (this.hasDefaultQuery = a()(this._searchState, _)),
            !0
        );
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = d()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let { query: t, requireUnusualDmActivity: n, requireCommunicationDisabled: r, requireUnusualAccountActivity: i, requireUsernameQuarantined: a, selectedRoleIds: u, selectedJoinDateOption: c, selectedAccountAgeOption: d, selectedSourceInviteCode: _, selectedJoinSourceType: E } = this._searchState;
        if ((t.length > 0 && !f(e, t)) || (u.size > 0 && !h(e, u)) || (null != c.afterDate && e.joinedAtTimestamp < c.afterDate) || (null != c.beforeDate && e.joinedAtTimestamp > c.beforeDate) || (null != d.afterDate && l.default.extractTimestamp(e.userId) < d.afterDate) || (null != d.beforeDate && l.default.extractTimestamp(e.userId) > d.beforeDate) || (null != _ && e.sourceInviteCode !== _) || (null != E && e.joinSourceType !== E)) return !1;
        if (n || r || i || a) return !!((n && e.hasUnusualDmActivity) || (r && (0, s.b)(e)) || (i && e.hasUnusualAccountActivity) || (a && (0, o.EY)(e))) || !1;
        return !0;
    }
    constructor(e) {
        c(this, 'guildId', void 0), c(this, '_searchState', void 0), c(this, 'hasDefaultQuery', void 0), (this.guildId = e), (this._searchState = d()), (this.hasDefaultQuery = !0);
    }
}
