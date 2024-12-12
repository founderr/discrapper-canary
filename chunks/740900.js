r.d(n, {
    R_: function () {
        return i;
    },
    cm: function () {
        return b;
    }
});
var i,
    a = r(653041);
var s = r(47120);
var o = r(498607),
    l = r.n(o),
    u = r(759174),
    c = r(493892),
    d = r(594174),
    f = r(815790),
    _ = r(588215),
    h = r(44715),
    p = r(331551);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = Date.now();
function E(e) {
    let n = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
    return e.isIncludedInSearchResults && n.push('INCLUDED_IN_SEARCH_RESULTS'), n;
}
function v(e) {
    return e.sort;
}
function I() {
    return new u.h(E, v);
}
function T(e) {
    return null != e && new Date(e).getTime() >= g - _.rL;
}
!(function (e) {
    (e.NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER'), (e.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER'), (e.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS');
})(i || (i = {}));
class b {
    reset() {
        this._membersMap.clear(), (this._membersMap = I()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = (0, f.Dw)(e.joinedAt),
            { hasUnusualDmActivity: s, hasUnusualAccountActivity: o, sourceInviteCode: l, joinSourceType: u, inviterId: c, integrationType: h } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            m = d.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: s,
            hasUnusualAccountActivity: o,
            sourceInviteCode: l,
            joinSourceType: u,
            inviterId: c,
            integrationType: h,
            ...e,
            isCurrentGuildMemberByTimestamp: a <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: m,
            sort: (0, p.b)(e, null !== (r = n.selectedSort) && void 0 !== r ? r : _.d$.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: a,
            ...i
        };
    }
    _computeMemberSupplementals(e, n) {
        var r;
        let { sourceInviteCode: i, joinSourceType: a, inviterId: s, integrationType: o } = null !== (r = (0, h.W2)(this.guildId)[e]) && void 0 !== r ? r : {};
        return {
            sourceInviteCode: null != i ? i : null,
            joinSourceType: null != a ? a : null,
            inviterId: null != s ? s : null,
            integrationType: null != o ? o : null,
            hasUnusualDmActivity: T(n),
            hasUnusualAccountActivity: (0, c.He)(e)
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, n) {
        var r;
        if (null == n) return this._membersMap.set(e.userId, e);
        let i = { ...e },
            a = { ...n },
            s = !1,
            { sourceInviteCode: o, hasUnusualDmActivity: u, hasUnusualAccountActivity: c, joinSourceType: d, inviterId: f, integrationType: _ } = this._computeMemberSupplementals(i.userId, null !== (r = a.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
        for (let e in (i.sourceInviteCode !== o && (a.sourceInviteCode = o), i.hasUnusualDmActivity !== u && (a.hasUnusualDmActivity = u), i.hasUnusualAccountActivity !== c && (a.hasUnusualAccountActivity = c), i.joinSourceType !== d && (a.joinSourceType = d), i.inviterId !== f && (a.inviterId = f), i.integrationType !== _ && (a.integrationType = _), a)) {
            let n = e,
                r = a[n],
                o = i[n];
            !l()(r, o) && ((i[n] = r), (s = !0));
        }
        return this._membersMap.set(i.userId, i) || s;
    }
    removeMember(e) {
        return this._membersMap.delete(e);
    }
    getMemberByUserId(e) {
        return this._membersMap.get(e);
    }
    values(e) {
        return this._membersMap.values(e, !0);
    }
    count(e) {
        return this._membersMap.size(e);
    }
    get version() {
        return this._membersMap.version;
    }
    constructor(e) {
        m(this, 'guildId', void 0), m(this, '_membersMap', void 0), m(this, 'newMemberTimestamp', Date.now()), (this.guildId = e), (this._membersMap = I());
    }
}
