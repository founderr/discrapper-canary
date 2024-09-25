n.d(t, {
    P: function () {
        return m;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(392711);
var s = n(271383),
    l = n(594174),
    u = n(70956),
    c = n(815790),
    d = n(740900),
    _ = n(823596),
    E = n(993374),
    f = n(331551);
function h(e, t, n) {
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
let p = 3 * u.Z.Millis.SECOND;
class m {
    getSearchIndex() {
        return null == this._search || this._search.hasDefaultQuery ? d.R_.CURRENT_GUILD_MEMBER : d.R_.INCLUDED_IN_SEARCH_RESULTS;
    }
    initialize() {
        if (this._initialized) {
            this.lastCursorTimestamp = Date.now();
            return;
        }
        (this._initialized = !0), (this._search = new E.j(this.guildId)), (this._members = new d.cm(this.guildId)), (this._pagination = new _.Rt(this.guildId, this._members.values(this.getSearchIndex())));
    }
    get isInitialized() {
        return this._initialized;
    }
    reset() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!!this._initialized) null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (n = this._search) || void 0 === n || n.reset(), r && this.initialize();
    }
    get searchChunkSize() {
        return null != this._pagination && this._initialized ? (0, _.t3)(this._pagination.getPaginationState()) : 0;
    }
    getMember(e) {
        var t;
        return null != this._members && this._initialized ? (null !== (t = this._members.getMemberByUserId(e)) && void 0 !== t ? t : null) : null;
    }
    getMembersByIndex(e) {
        return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [[], 0];
    }
    countMembersByIndex(e) {
        return null != this._members && this._initialized ? this._members.count(e) : 0;
    }
    _checkUpdatesForPaginationUpdate(e, t) {
        return (null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults) || (null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp) || !1;
    }
    _getIsIncludedInSearch(e, t) {
        if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
        let n = {
                ...e,
                ...t
            },
            r = this._search.isMemberIncludedInSearchResults(n),
            i = r !== e.isIncludedInSearchResults;
        return [r, i];
    }
    updatePaginationChunks() {
        if (null == this._pagination || null == this._members || !this._initialized) return !1;
        let e = this._members.values(this.getSearchIndex());
        return this._pagination.updateSortedMembers(e);
    }
    removeMember(e) {
        if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) return !1;
        let t = this._members.removeMember(e);
        return t ? this.updatePaginationChunks() : t;
    }
    _rawUpdateMember(e, t) {
        if (null == this._members) return [!1, !1];
        let n = !1,
            r = this._members.getMemberByUserId(e);
        if (null == r) {
            n = !0;
            let i = s.ZP.getTrueMember(this.guildId, e);
            if (null == i) return [!1, !1];
            r = this._members.enhanceNewMember(i, this.getSearchState(), t);
        }
        if (null == t.isIncludedInSearchResults) {
            let [e, i] = this._getIsIncludedInSearch(r, t);
            i && ((n = !0), (t.isIncludedInSearchResults = e));
        } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (n = !0);
        let i = this._members.updateMember(r, t);
        return !n && (n = this._checkUpdatesForPaginationUpdate(r, t)), [n, i];
    }
    isMemberInIndex(e) {
        return null != this._members && !!this._initialized && this._members._membersMap.has(e);
    }
    isMemberIncludedInSearchResults(e) {
        if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
        if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
        let t = this._members.getMemberByUserId(e);
        if (null == t) {
            let n = s.ZP.getTrueMember(this.guildId, e);
            if (null == n) return !1;
            t = this._members.enhanceNewMember(n, this.getSearchState());
        } else if (t.isIncludedInSearchResults) return !0;
        return this._search.isMemberIncludedInSearchResults(t);
    }
    updateMember(e, t) {
        if (null == this._members || !this._initialized) return !1;
        let [n, r] = this._rawUpdateMember(e, t);
        return n ? this.updatePaginationChunks() : r;
    }
    updateClientMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == this._members || !this._initialized) return !1;
        let r = !1,
            i = !1;
        for (let a of e) {
            if (null == a.joinedAt) continue;
            let e = a;
            if (
                (t &&
                    (e = {
                        ...e,
                        isIncludedInSearchResults: !0
                    }),
                n)
            ) {
                let t = (0, c.Dw)(a.joinedAt);
                e = {
                    ...e,
                    isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                    refreshTimestamp: this.lastRefreshTimestamp
                };
            }
            let [o, s] = this._rawUpdateMember(a.userId, e);
            (r = o || r), (i = s || i);
        }
        return r ? this.updatePaginationChunks() : i;
    }
    updateServerMembers(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = !1,
            n = !1;
        for (let r of e) {
            let e = s.ZP.getTrueMember(this.guildId, r.user.id);
            if (null == e) continue;
            let [i, a] = this._rawUpdateMember(r.user.id, e);
            (t = i || t), (n = a || n);
        }
        return t ? this.updatePaginationChunks() : n;
    }
    updateMembersByMemberIds(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = s.ZP.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t);
    }
    updateMembersSort(e) {
        return new Promise((t) => {
            let n = (0, o.cloneDeep)(this.getMembersByIndex(d.R_.CURRENT_GUILD_MEMBER)[0]);
            [...n, ...(0, o.cloneDeep)(this.getMembersByIndex(d.R_.NEW_GUILD_MEMBER)[0])].forEach((t) => {
                var n, r, i;
                let a = (0, f.b)(t, e),
                    o = null !== (i = null === (n = this._search) || void 0 === n ? void 0 : n.isMemberIncludedInSearchResults(t)) && void 0 !== i && i;
                null === (r = this._members) ||
                    void 0 === r ||
                    r.updateMember(t, {
                        sort: a,
                        isIncludedInSearchResults: o
                    });
            }),
                t();
        });
    }
    sortMembersBySelectedSort(e) {
        if (null != this._search && null != this._members && !!this._initialized)
            null != e &&
                (this.updatePaginationState({ sort: e }, !0),
                this.updateMembersSort(e).then(() => {
                    this.updatePaginationChunks();
                }));
    }
    updateSearchedMembersByMemberIds(e) {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = s.ZP.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp);
    }
    rebuildAllMembers() {
        if (null == this._members || !this._initialized) return !1;
        let e = s.ZP.getMembers(this.guildId);
        return this.updateClientMembers(e);
    }
    _scheduleRefresh(e) {
        (this.lastRefreshTimestamp = e),
            (this.lastCursorTimestamp = Date.now()),
            null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer),
            (this._lastRefreshTimer = setTimeout(() => {
                (this._lastRefreshTimer = null), (this.lastRefreshTimestamp = 0);
            }, p));
    }
    refreshNewMembersAndSearchResults() {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let e = Number(Date.now());
        this._scheduleRefresh(e);
        let t = (0, o.cloneDeep)(this._members.values(d.R_.NEW_GUILD_MEMBER)),
            n = !1;
        for (let r of t)
            n =
                this._members.updateMember(r, {
                    isCurrentGuildMemberByTimestamp: !0,
                    refreshTimestamp: e,
                    user: l.default.getUser(r.userId)
                }) || n;
        this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = !1);
        let [r, i] = this.updatePaginationState({ currentPage: 1 }, !1);
        return i && (n = !1), n && this.updatePaginationChunks(), !0;
    }
    getNewMemberTimestamp() {
        return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0;
    }
    updateSearchState(e) {
        if (null == this._members || null == this._search || !this._initialized) return !1;
        let t = !!this._search.hasDefaultQuery;
        null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
        let n = this._search.updateSearchState(e);
        if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
        let r = (0, o.cloneDeep)(this._members.values(d.R_.CURRENT_GUILD_MEMBER)),
            i = t !== this._search.hasDefaultQuery;
        for (let e of r) {
            if (!e.isCurrentGuildMemberByTimestamp) continue;
            let t = this._search.isMemberIncludedInSearchResults(e);
            t !== e.isIncludedInSearchResults && ((i = !0), (n = !0), this._members.updateMember(e, { isIncludedInSearchResults: t }));
        }
        return i ? (this.updatePaginationChunks(), this.updatePaginationState({ currentPage: 1 }), !0) : n;
    }
    getSearchState() {
        return null != this._search && this._initialized ? this._search.getSearchState() : (0, E.I)();
    }
    hasDefaultSearchState() {
        return null == this._search || !this._initialized || this._search.hasDefaultQuery;
    }
    resetSearchState() {
        return !!(null != this._search && this._initialized && this._search.resetSearchState()) && this.updatePaginationChunks();
    }
    getTotalResultsCount() {
        return null != this._search && null != this._pagination && this._initialized ? (this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount) : 0;
    }
    updatePaginationState(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1];
    }
    clearPaginationState() {
        var e;
        null === (e = this._pagination) || void 0 === e || e.reset();
    }
    getPaginationState() {
        return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, _.IF)();
    }
    getPaginatedMembers() {
        return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0];
    }
    updatePaginationToken(e) {
        return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e);
    }
    getElasticSearchPagination() {
        return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null;
    }
    removeRoleFromSearchState(e) {
        let t = new Set(this.getSearchState().selectedRoleIds);
        return t.delete(e), this.updateSearchState({ selectedRoleIds: t });
    }
    constructor(e) {
        h(this, 'guildId', void 0), h(this, 'lastRefreshTimestamp', 0), h(this, 'lastCursorTimestamp', Date.now()), h(this, '_initialized', void 0), h(this, '_pagination', void 0), h(this, '_search', void 0), h(this, '_members', void 0), h(this, '_lastRefreshTimer', null), h(this, '_defaultSearchTotalResultsCount', void 0), (this.guildId = e), (this._initialized = !1), (this._members = null), (this._pagination = null), (this._search = null);
    }
}
