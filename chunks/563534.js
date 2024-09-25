n.d(t, {
    P: function () {
        return l;
    }
});
var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
function s(e, t, n) {
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
let l = { enabled: !1 },
    u = [],
    c = {},
    d = new Set(),
    _ = {};
function E(e) {
    var t;
    let n = null === (t = c[e]) || void 0 === t ? void 0 : t.newMemberActions;
    return null == n ? null : ((_[e] = n), _[e]);
}
function f(e) {
    let { homeSettings: t, guildId: n } = e;
    null != n && (null == t && (c[n] = l), (c[n] = t), E(n), d.delete(n));
}
function h(e) {
    let { guildId: t } = e;
    d.add(t);
}
function p(e) {
    let { guildId: t } = e;
    d.delete(t);
}
function m(e) {
    let { guildId: t, enabled: n } = e,
        r = c[t];
    if (null == r) return !1;
    r.enabled = n;
}
function I(e) {
    let { guild: t } = e;
    if (null == c[t.id]) return !1;
    delete c[t.id], delete _[t.id];
}
function T(e) {
    var t;
    let { guildId: n, resourceChannel: r } = e,
        i = c[n];
    if (null == i) return !1;
    i.resourceChannels = null !== (t = i.resourceChannels) && void 0 !== t ? t : [];
    let a = i.resourceChannels.findIndex((e) => e.channelId === r.channelId);
    return -1 !== a && ((i.resourceChannels[a] = { ...r }), !0);
}
function g(e) {
    var t;
    let { guildId: n, action: r } = e,
        i = c[n];
    if (null == i) return !1;
    i.newMemberActions = null !== (t = i.newMemberActions) && void 0 !== t ? t : [];
    let a = i.newMemberActions.findIndex((e) => e.channelId === r.channelId);
    return -1 !== a && ((i.newMemberActions[a] = { ...r }), !0);
}
class S extends (r = a.ZP.Store) {
    getSettings(e) {
        var t;
        return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : l;
    }
    getNewMemberActions(e) {
        var t;
        return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == _[e] ? E(e) : _[e];
    }
    getActionForChannel(e, t) {
        var n;
        let r = this.getSettings(e);
        return null == r ? null : (null !== (n = r.newMemberActions) && void 0 !== n ? n : []).find((e) => e.channelId === t);
    }
    hasMemberAction(e, t) {
        return null != this.getActionForChannel(e, t);
    }
    getResourceChannels(e) {
        var t, n;
        return null !== (n = null === (t = c[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : u;
    }
    getResourceForChannel(e, t) {
        if (null == e) return null;
        let n = this.getResourceChannels(e);
        return n === u ? null : n.find((e) => e.channelId === t);
    }
    getIsLoading(e) {
        return null != e && d.has(e);
    }
    getWelcomeMessage(e) {
        var t;
        if (null != e) return null === (t = c[e]) || void 0 === t ? void 0 : t.welcomeMessage;
    }
    hasSettings(e) {
        return null != e && null != c[e];
    }
    getEnabled(e) {
        var t, n;
        return null != e && null !== (n = null === (t = c[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getNewMemberAction(e, t) {
        var n, r, i;
        return null == e || null == t ? null : null !== (i = null === (r = c[e]) || void 0 === r ? void 0 : null === (n = r.newMemberActions) || void 0 === n ? void 0 : n.find((e) => e.channelId === t)) && void 0 !== i ? i : null;
    }
}
s(S, 'displayName', 'GuildOnboardingHomeSettingsStore'),
    (t.Z = new S(o.Z, {
        GUILD_HOME_SETTINGS_FETCH_START: h,
        GUILD_HOME_SETTINGS_FETCH_SUCCESS: f,
        GUILD_HOME_SETTINGS_FETCH_FAIL: p,
        GUILD_HOME_SETTINGS_UPDATE_SUCCESS: f,
        GUILD_HOME_SETTINGS_TOGGLE_ENABLED: m,
        GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: T,
        GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: g,
        GUILD_DELETE: I
    }));
