n.d(t, {
    IF: function () {
        return f;
    },
    LU: function () {
        return c;
    },
    Rt: function () {
        return p;
    },
    hW: function () {
        return d;
    },
    t3: function () {
        return h;
    }
});
var r,
    i = n(724458);
var a = n(653041);
var o = n(47120);
var s = n(271383),
    l = n(588215);
function u(e, t, n) {
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
let c = [12, 25, 50, 100],
    d = 7,
    _ = 5,
    E = 250;
function f() {
    return {
        pageSize: c[0],
        currentPage: 1,
        continuationToken: null,
        sort: l.d$.ORDER_BY_UNSPECIFIED,
        elasticSearchCursor: null
    };
}
function h(e) {
    return Math.max(e.pageSize * _, E);
}
!(function (e) {
    (e[(e.FORWARD = 1)] = 'FORWARD'), (e[(e.BACKWARD = -1)] = 'BACKWARD');
})(r || (r = {}));
class p {
    reset() {
        (this._paginationState = f()), (this._sortedMemberIds = []), (this._cachedPaginationChunks = {}), (this._version += 1);
    }
    isMemberOnCurrentPage(e) {
        var t;
        return (null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : []).includes(e);
    }
    isMemberInAnyChunk(e) {
        return this._sortedMemberIds.includes(e);
    }
    _initPaginationFromRawMembers(e) {
        let t = [],
            n = e.reduce((e, n, r) => ((e = this._reduceMemberIdsToPaginationChunks(e, n.userId, r)), t.push(n.userId), e), {});
        return [t, n];
    }
    _buildPaginationFromMemberIds(e) {
        return e.reduce(this._reduceMemberIdsToPaginationChunks, {});
    }
    _rebuildPaginationChunksFromStoredMembers() {
        return (this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds)), (this._version += 1), !0;
    }
    getPaginationState() {
        return this._paginationState;
    }
    updatePaginationToken(e) {
        return (
            e !== this._paginationState.continuationToken &&
            ((this._paginationState = {
                ...this._paginationState,
                continuationToken: e
            }),
            !0)
        );
    }
    _calculateNewPageFromPageSizeChange(e, t) {
        let { currentPage: n, pageSize: r } = this._paginationState;
        return e * r <= this._sortedMemberIds.length ? Math.max(Math.ceil((r / e) * (null != t ? t : n)), 1) : 1;
    }
    updatePaginationState(e) {
        let t = !1;
        if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
            var n;
            (t = !0), (e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (n = e.pageSize) && void 0 !== n ? n : this._paginationState.pageSize, e.currentPage));
        }
        return (
            (this._paginationState = {
                ...this._paginationState,
                ...e
            }),
            t && this._rebuildPaginationChunksFromStoredMembers(),
            [!0, t]
        );
    }
    updateSortedMembers(e) {
        let [t, n] = this._initPaginationFromRawMembers(e);
        return (this._sortedMemberIds = t), (this._cachedPaginationChunks = n), (this._version += 1), !0;
    }
    updateSortedMembersByUserIds(e) {
        return (this._sortedMemberIds = e), this._rebuildPaginationChunksFromStoredMembers(), !0;
    }
    _findMember(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = e;
        n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
        let r = this._sortedMemberIds[e],
            i = s.ZP.getMember(this.guildId, r);
        for (; null == i && !((e += t) < 0) && !(e >= this._sortedMemberIds.length); ) {
            (r = this._sortedMemberIds[e]), (null == (i = s.ZP.getMember(this.guildId, r)) ? void 0 : i.joinedAt) == null && (i = null);
        }
        return i;
    }
    getElasticSearchPagination() {
        return this.getPaginationState().elasticSearchCursor;
    }
    get paginatedMembers() {
        return this._cachedPaginationChunks;
    }
    get version() {
        return this._version;
    }
    constructor(e, t) {
        u(this, 'guildId', void 0),
            u(this, '_sortedMemberIds', void 0),
            u(this, '_paginationState', void 0),
            u(this, '_version', void 0),
            u(this, '_cachedPaginationChunks', void 0),
            u(this, '_reduceMemberIdsToPaginationChunks', (e, t, n) => {
                let r = Math.floor(n / this._paginationState.pageSize) + 1;
                return null == e[r] && (e[r] = []), e[r].push(t), e;
            }),
            (this.guildId = e),
            (this._paginationState = f()),
            (this._version = 0);
        let [n, r] = this._initPaginationFromRawMembers(t);
        (this._sortedMemberIds = n), (this._cachedPaginationChunks = r), (this._version += 1);
    }
}
