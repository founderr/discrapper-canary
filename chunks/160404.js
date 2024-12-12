var i,
    a = r(47120);
var s = r(789020);
var o = r(724458);
var l = r(442837),
    u = r(570140),
    c = r(430824),
    d = r(630388),
    f = r(709054),
    _ = r(225675),
    h = r(981631),
    p = r(526761);
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
let g = {};
function E(e) {
    let { guildId: n, data: r } = e;
    delete r.roles[f.default.castGuildIdAsEveryoneGuildRoleId(n)],
        (g[n] = {
            ...r,
            timestamp: Date.now()
        });
}
function v(e) {
    let { guildId: n } = e;
    if (null == g[n]) return !1;
    delete g[n];
}
function I(e) {
    let { guildId: n, roleId: r } = e;
    if (null == g[n]) return !1;
    delete g[n].roles[r];
}
function T(e) {
    var n;
    let { guildId: r, overrides: i } = e;
    if (null == r || null == g[r]) return !1;
    let a = g[r];
    if (null == a || a.type !== _.z.NEW_MEMBER) return !1;
    let s = null !== (n = a.optInChannels) && void 0 !== n ? n : new Set();
    return (
        f.default.keys(i).forEach((e) => {
            var n;
            let r = i[e];
            d.yE(null !== (n = r.flags) && void 0 !== n ? n : 0, p.ic.OPT_IN_ENABLED) ? s.add(e) : s.delete(e);
        }),
        (a.optInChannels = s),
        !0
    );
}
function b(e) {
    var n;
    let { guildId: r, optionId: i, selected: a, removedOptionIds: s } = e;
    if (null == r || null == g[r]) return !1;
    let o = g[r];
    if (null == o || o.type !== _.z.NEW_MEMBER) return !1;
    let l = null !== (n = o.onboardingResponses) && void 0 !== n ? n : new Set();
    return null != s && s.length > 0 && s.forEach((e) => l.delete(e)), a ? l.add(i) : l.delete(i), (o.onboardingResponses = l), !0;
}
function y(e) {
    let { guildId: n, roles: r, flags: i } = e;
    if (null == n) return !1;
    let a = g[n];
    return (
        null != a &&
        (null != r &&
            (a.roles = r.reduce((e, r) => {
                let i = c.Z.getRole(n, r);
                return null != i && (e[r] = i), e;
            }, {})),
        null != i && a.type === _.z.NEW_MEMBER && (a.memberOptions.flags = i),
        !0)
    );
}
class S extends (i = l.ZP.Store) {
    hasViewingRoles() {
        return Object.keys(g).length > 0;
    }
    isViewingRoles(e) {
        return null != e && null != g[e];
    }
    getViewingRoles(e) {
        var n;
        return null === (n = g[e]) || void 0 === n ? void 0 : n.roles;
    }
    getViewingRolesTimestamp(e) {
        var n;
        return null != e ? (null === (n = g[e]) || void 0 === n ? void 0 : n.timestamp) : null;
    }
    getData(e) {
        return g[e];
    }
    isFullServerPreview(e) {
        var n;
        return (null === (n = g[e]) || void 0 === n ? void 0 : n.type) === _.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let n = g[e];
        return null != n && n.type === _.z.NEW_MEMBER && n.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let n = g[e];
        return null != n && n.type === _.z.NEW_MEMBER && n.onboardingEnabled;
    }
    getViewingChannels(e) {
        let n = g[e];
        return null == n || n.type !== _.z.NEW_MEMBER ? null : n.optInChannels;
    }
    getOnboardingResponses(e) {
        let n = g[e];
        return null == n || n.type !== _.z.NEW_MEMBER ? null : n.onboardingResponses;
    }
    getMemberOptions(e) {
        let n = g[e];
        return null == n || n.type !== _.z.NEW_MEMBER ? null : n.memberOptions;
    }
    isChannelOptedIn(e, n) {
        let r = this.getViewingChannels(e);
        return null != r && r.has(n);
    }
    isViewingServerShop(e) {
        var n;
        return null != e && (null === (n = g[e]) || void 0 === n ? void 0 : n.type) === _.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let n = g[e];
        return null == n ? null : n.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return h.pNK.ROLES;
        let n = g[e];
        if (null == n) return h.pNK.ROLES;
        switch (n.type) {
            case _.z.ROLES:
            case _.z.SERVER_SHOP:
                return n.returnToSection;
            case _.z.NEW_MEMBER:
                return h.pNK.ONBOARDING;
            default:
                return h.pNK.ROLES;
        }
    }
}
m(S, 'displayName', 'ImpersonateStore'),
    (n.Z = new S(u.Z, {
        IMPERSONATE_UPDATE: E,
        IMPERSONATE_STOP: v,
        GUILD_ROLE_DELETE: I,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: T,
        GUILD_ONBOARDING_SELECT_OPTION: b,
        GUILD_MEMBER_UPDATE_LOCAL: y
    }));
