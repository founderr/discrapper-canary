var r,
    i = n(47120);
var a = n(789020);
var o = n(724458);
var s = n(442837),
    l = n(570140),
    u = n(430824),
    c = n(630388),
    d = n(709054),
    _ = n(225675),
    E = n(981631),
    f = n(526761);
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
let p = {};
function m(e) {
    let { guildId: t, data: n } = e;
    delete n.roles[d.default.castGuildIdAsEveryoneGuildRoleId(t)],
        (p[t] = {
            ...n,
            timestamp: Date.now()
        });
}
function I(e) {
    let { guildId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function T(e) {
    let { guildId: t, roleId: n } = e;
    if (null == p[t]) return !1;
    delete p[t].roles[n];
}
function g(e) {
    var t;
    let { guildId: n, overrides: r } = e;
    if (null == n || null == p[n]) return !1;
    let i = p[n];
    if (null == i || i.type !== _.z.NEW_MEMBER) return !1;
    let a = null !== (t = i.optInChannels) && void 0 !== t ? t : new Set();
    return (
        d.default.keys(r).forEach((e) => {
            var t;
            let n = r[e];
            c.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ic.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
        }),
        (i.optInChannels = a),
        !0
    );
}
function S(e) {
    var t;
    let { guildId: n, optionId: r, selected: i, removedOptionIds: a } = e;
    if (null == n || null == p[n]) return !1;
    let o = p[n];
    if (null == o || o.type !== _.z.NEW_MEMBER) return !1;
    let s = null !== (t = o.onboardingResponses) && void 0 !== t ? t : new Set();
    return null != a && a.length > 0 && a.forEach((e) => s.delete(e)), i ? s.add(r) : s.delete(r), (o.onboardingResponses = s), !0;
}
function A(e) {
    let { guildId: t, roles: n, flags: r } = e;
    if (null == t) return !1;
    let i = p[t];
    return (
        null != i &&
        (null != n &&
            (i.roles = n.reduce((e, n) => {
                let r = u.Z.getRole(t, n);
                return null != r && (e[n] = r), e;
            }, {})),
        null != r && i.type === _.z.NEW_MEMBER && (i.memberOptions.flags = r),
        !0)
    );
}
class v extends (r = s.ZP.Store) {
    hasViewingRoles() {
        return Object.keys(p).length > 0;
    }
    isViewingRoles(e) {
        return null != e && null != p[e];
    }
    getViewingRoles(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.roles;
    }
    getViewingRolesTimestamp(e) {
        var t;
        return null != e ? (null === (t = p[e]) || void 0 === t ? void 0 : t.timestamp) : null;
    }
    getData(e) {
        return p[e];
    }
    isFullServerPreview(e) {
        var t;
        return (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === _.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = p[e];
        return null != t && t.type === _.z.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = p[e];
        return null != t && t.type === _.z.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = p[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = p[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = p[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        var t;
        return null != e && (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === _.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = p[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return E.pNK.ROLES;
        let t = p[e];
        if (null == t) return E.pNK.ROLES;
        switch (t.type) {
            case _.z.ROLES:
            case _.z.SERVER_SHOP:
                return t.returnToSection;
            case _.z.NEW_MEMBER:
                return E.pNK.ONBOARDING;
            default:
                return E.pNK.ROLES;
        }
    }
}
h(v, 'displayName', 'ImpersonateStore'),
    (t.Z = new v(l.Z, {
        IMPERSONATE_UPDATE: m,
        IMPERSONATE_STOP: I,
        GUILD_ROLE_DELETE: T,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: g,
        GUILD_ONBOARDING_SELECT_OPTION: S,
        GUILD_MEMBER_UPDATE_LOCAL: A
    }));
