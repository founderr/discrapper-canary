n.d(t, {
    R_: function () {
        return r;
    },
    cm: function () {
        return S;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(498607),
    s = n.n(o),
    l = n(759174),
    u = n(493892),
    c = n(594174),
    d = n(815790),
    _ = n(588215),
    E = n(44715),
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
let p = Date.now();
function m(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
    return e.isIncludedInSearchResults && t.push('INCLUDED_IN_SEARCH_RESULTS'), t;
}
function I(e) {
    return e.sort;
}
function T() {
    return new l.h(m, I);
}
function g(e) {
    return null != e && new Date(e).getTime() >= p - _.rL;
}
!(function (e) {
    (e.NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER'), (e.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER'), (e.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS');
})(r || (r = {}));
class S {
    reset() {
        this._membersMap.clear(), (this._membersMap = T()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (0, d.Dw)(e.joinedAt),
            { hasUnusualDmActivity: a, hasUnusualAccountActivity: o, sourceInviteCode: s, joinSourceType: l, inviterId: u, integrationType: E } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            h = c.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: a,
            hasUnusualAccountActivity: o,
            sourceInviteCode: s,
            joinSourceType: l,
            inviterId: u,
            integrationType: E,
            ...e,
            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: h,
            sort: (0, f.b)(e, null !== (n = t.selectedSort) && void 0 !== n ? n : _.d$.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: i,
            ...r
        };
    }
    _computeMemberSupplementals(e, t) {
        var n;
        let { sourceInviteCode: r, joinSourceType: i, inviterId: a, integrationType: o } = null !== (n = (0, E.W2)(this.guildId)[e]) && void 0 !== n ? n : {};
        return {
            sourceInviteCode: null != r ? r : null,
            joinSourceType: null != i ? i : null,
            inviterId: null != a ? a : null,
            integrationType: null != o ? o : null,
            hasUnusualDmActivity: g(t),
            hasUnusualAccountActivity: (0, u.He)(e)
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        var n;
        if (null == t) return this._membersMap.set(e.userId, e);
        let r = { ...e },
            i = { ...t },
            a = !1,
            { sourceInviteCode: o, hasUnusualDmActivity: l, hasUnusualAccountActivity: u, joinSourceType: c, inviterId: d, integrationType: _ } = this._computeMemberSupplementals(r.userId, null !== (n = i.unusualDMActivityUntil) && void 0 !== n ? n : r.unusualDMActivityUntil);
        for (let e in (r.sourceInviteCode !== o && (i.sourceInviteCode = o), r.hasUnusualDmActivity !== l && (i.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== u && (i.hasUnusualAccountActivity = u), r.joinSourceType !== c && (i.joinSourceType = c), r.inviterId !== d && (i.inviterId = d), r.integrationType !== _ && (i.integrationType = _), i)) {
            let t = e,
                n = i[t],
                o = r[t];
            !s()(n, o) && ((r[t] = n), (a = !0));
        }
        return this._membersMap.set(r.userId, r) || a;
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
        h(this, 'guildId', void 0), h(this, '_membersMap', void 0), h(this, 'newMemberTimestamp', Date.now()), (this.guildId = e), (this._membersMap = T());
    }
}
