n(47120), n(789020), n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(430824),
    c = n(630388),
    d = n(709054),
    f = n(225675),
    _ = n(981631),
    h = n(526761);
let p = {};
class m extends (r = o.ZP.Store) {
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
        return (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === f.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = p[e];
        return null != t && t.type === f.z.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = p[e];
        return null != t && t.type === f.z.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = p[e];
        return null == t || t.type !== f.z.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = p[e];
        return null == t || t.type !== f.z.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = p[e];
        return null == t || t.type !== f.z.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        var t;
        return null != e && (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === f.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = p[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return _.pNK.ROLES;
        let t = p[e];
        if (null == t) return _.pNK.ROLES;
        switch (t.type) {
            case f.z.ROLES:
            case f.z.SERVER_SHOP:
                return t.returnToSection;
            case f.z.NEW_MEMBER:
                return _.pNK.ONBOARDING;
            default:
                return _.pNK.ROLES;
        }
    }
}
(s = 'ImpersonateStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(l.Z, {
        IMPERSONATE_UPDATE: function (e) {
            let { guildId: t, data: n } = e;
            delete n.roles[d.default.castGuildIdAsEveryoneGuildRoleId(t)],
                (p[t] = {
                    ...n,
                    timestamp: Date.now()
                });
        },
        IMPERSONATE_STOP: function (e) {
            let { guildId: t } = e;
            if (null == p[t]) return !1;
            delete p[t];
        },
        GUILD_ROLE_DELETE: function (e) {
            let { guildId: t, roleId: n } = e;
            if (null == p[t]) return !1;
            delete p[t].roles[n];
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
            var t;
            let { guildId: n, overrides: r } = e;
            if (null == n || null == p[n]) return !1;
            let i = p[n];
            if (null == i || i.type !== f.z.NEW_MEMBER) return !1;
            let a = null !== (t = i.optInChannels) && void 0 !== t ? t : new Set();
            return (
                d.default.keys(r).forEach((e) => {
                    var t;
                    let n = r[e];
                    c.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, h.ic.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
                }),
                (i.optInChannels = a),
                !0
            );
        },
        GUILD_ONBOARDING_SELECT_OPTION: function (e) {
            var t;
            let { guildId: n, optionId: r, selected: i, removedOptionIds: a } = e;
            if (null == n || null == p[n]) return !1;
            let s = p[n];
            if (null == s || s.type !== f.z.NEW_MEMBER) return !1;
            let o = null !== (t = s.onboardingResponses) && void 0 !== t ? t : new Set();
            return null != a && a.length > 0 && a.forEach((e) => o.delete(e)), i ? o.add(r) : o.delete(r), (s.onboardingResponses = o), !0;
        },
        GUILD_MEMBER_UPDATE_LOCAL: function (e) {
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
                null != r && i.type === f.z.NEW_MEMBER && (i.memberOptions.flags = r),
                !0)
            );
        }
    }));
