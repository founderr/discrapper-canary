n.d(t, {
    U2: function () {
        return Q;
    },
    wL: function () {
        return q;
    }
});
var r,
    i = n(47120);
var a = n(789020);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(798140),
    d = n(160404),
    _ = n(312400),
    E = n(569471),
    f = n(131704),
    h = n(630388),
    p = n(709054),
    m = n(592125),
    I = n(430824),
    T = n(594174),
    g = n(981631),
    S = n(468788),
    A = n(490897),
    v = n(526761);
function N(e, t, n) {
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
let O = {},
    R = {},
    C = !1,
    y = !1,
    L = { flags: 0 },
    b = new c.ZP(),
    D = new c.ZP(),
    M = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: g.bL.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: g.gLR.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null
    },
    P = {
        [g.bL.ALL_MESSAGES]: {
            ...M,
            message_notifications: g.bL.ALL_MESSAGES
        },
        [g.bL.ONLY_MENTIONS]: {
            ...M,
            message_notifications: g.bL.ONLY_MENTIONS
        }
    },
    U = {},
    w = {},
    x = 'null',
    G = new Set(),
    k = new Set(),
    B = {},
    F = {};
function Z(e, t) {
    var n;
    let r = O[e],
        i = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {},
        a = Q(t.channel_overrides),
        o = {
            ...q(e),
            ...r,
            ...t,
            channel_overrides: a
        };
    b.clearTimer(e),
        s().forEach(i, (e) => {
            D.clearTimer(e.channel_id);
        }),
        V(e, o),
        (O[e] = o),
        (U[e] = ed(O[e]));
    let l = s().filter(o.channel_overrides, (e) => {
        var t;
        return h.yE(null !== (t = e.flags) && void 0 !== t ? t : 0, v.ic.OPT_IN_ENABLED);
    });
    (w[e] = new Set(l.map((e) => e.channel_id))), H(e), delete R[e];
}
function V(e, t) {
    !0 === t.muted &&
        b.setTimer(e, t.mute_config, () => {
            Y(e, { muted: !1 }),
                u.Z.dispatch({
                    type: 'GUILD_MUTE_EXPIRED',
                    guildId: e
                });
        }) &&
        (t.muted = !1),
        s().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                D.setTimer(t.channel_id, t.mute_config, () => {
                    j(e, t.channel_id, { muted: !1 }),
                        u.Z.dispatch({
                            type: 'CHANNEL_MUTE_EXPIRED',
                            guildId: e,
                            channelId: t.channel_id
                        });
                }) &&
                (t.muted = !1);
        });
}
function H(e) {
    var t;
    if (null == e) return;
    let n = new Set(w[e]),
        r = null !== (t = B[e]) && void 0 !== t ? t : {};
    for (let e in r) {
        let t = r[e];
        h.yE(t.flags, v.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
    }
    Object.keys(r).length > 0 ? (F[e] = n) : delete F[e];
}
function Y(e, t) {
    var n;
    let r = O[e];
    Z(e, {
        channel_overrides: null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {},
        ...t
    });
}
function j(e, t, n) {
    let r = z(e, t, n);
    K(e, { [t]: r });
}
function W(e, t) {
    var n;
    let r = {},
        i = null !== (n = null != e ? B[e] : null) && void 0 !== n ? n : {};
    p.default.keys(t).forEach((n) => {
        var a;
        let o = z(e, n, t[n]);
        (r[n] = o), (i[n] = { flags: null !== (a = o.flags) && void 0 !== a ? a : 0 });
    }),
        null != e &&
            (B[e] = {
                ...B[e],
                ...i
            }),
        K(e, r);
}
function K(e, t) {
    var n;
    let r = O[e],
        i = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {};
    Z(e, {
        channel_overrides:
            null == r
                ? t
                : {
                      ...i,
                      ...t
                  }
    });
}
function z(e, t, n) {
    var r;
    let i = O[e],
        a = null !== (r = null == i ? void 0 : i.channel_overrides) && void 0 !== r ? r : {};
    return {
        channel_id: t,
        muted: !1,
        ...a[t],
        ...n
    };
}
function q(e) {
    let t = I.Z.getGuild(e);
    return P[null != t ? t.defaultMessageNotifications : g.bL.ALL_MESSAGES];
}
function Q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? s().keyBy(e, 'channel_id') : e;
}
function X(e) {
    var t;
    return null !== (t = O[e]) && void 0 !== t ? t : q(e);
}
function $(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((O = {}),
        (U = {}),
        (w = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            O[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                var i;
                let a = e.channel_overrides[t];
                (0, c.m$)(a) && n.add(t), h.yE(null !== (i = a.flags) && void 0 !== i ? i : 0, v.ic.OPT_IN_ENABLED) && r.add(t);
            }
            (U[t] = n), (w[t] = r);
        }));
}
function J(e) {
    en(e.notificationSettings), b.reset(), D.reset(), !e.userGuildSettings.partial && ((O = {}), (U = {}), (w = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        !('channel_overrides' in n) && (n.channel_overrides = {}), Z(e.guild_id, n), null != e.guild_id && t.add(e.guild_id);
    }),
    O))
        !t.has(n) && V(n, O[n]);
}
function ee(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (O = { ...n }),
        (U = {}),
        (w = {}),
        p.default.keys(r).forEach((e) => {
            U[e] = new Set(r[e]);
        }),
        p.default.keys(i).forEach((e) => {
            w[e] = new Set(i[e]);
        });
}
function et(e) {
    let { settings: t } = e;
    en(t);
}
function en(e) {
    (C = h.yE(e.flags, S.c.USE_NEW_NOTIFICATIONS)), (y = h.yE(e.flags, S.c.MENTION_ON_ALL_MESSAGES)), (L = e);
}
function er(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        Z(e.guild_id, {
            channel_overrides: {},
            ...e
        });
    });
}
function ei(e) {
    let { guildId: t, settings: n } = e;
    Y(t, n);
}
function ea(e) {
    let { guildId: t, settings: n } = e;
    Y(t, n), W(t, n.channel_overrides);
}
function eo(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t &&
        null != r.flags &&
        (B[t] = {
            ...B[t],
            [n]: { flags: r.flags }
        }),
        j(t, n, r);
}
function es(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete B[t], delete F[t];
}
function el(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = B[t];
    if (null == r) return !1;
    for (let e in n) s().isEqual(n[e], r[e]) && delete r[e];
}
function eu(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || d.Z.isFullServerPreview(t)) && (W(t, n), !0);
}
function ec(e) {
    let { guildId: t } = e,
        n = null == O[t] ? q(t) : O[t];
    O[t] = {
        ...n,
        guild_id: t,
        hide_muted_channels: !0 !== n.hide_muted_channels
    };
}
function ed(e) {
    return new Set(
        null != e.channel_overrides
            ? s()(e.channel_overrides)
                  .filter((e) => (0, c.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null
    );
}
function e_() {
    return !0;
}
function eE() {
    return C && _.xT.getCurrentConfig({ location: 'UserGuildSettingsStore' }, { autoTrackExposure: !1 }).enabled;
}
class ef extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(T.default, I.Z, d.Z, E.Z), null != e)) {
            var t, n;
            (C = null !== (t = e.useNewNotifications) && void 0 !== t && t),
                'userGuildSettings' in e &&
                    ((O = e.userGuildSettings),
                    (w = s().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, (e) => new Set(e))),
                    s().forEach(O, (e, t) => {
                        U[t] = ed(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: C };
    }
    get mentionOnAllMessages() {
        return y;
    }
    isSuppressEveryoneEnabled(e) {
        return X(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return X(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return X(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return X(e).mobile_push;
    }
    isMuted(e) {
        let t = X(e);
        return (0, c.m$)(t);
    }
    isTemporarilyMuted(e) {
        let t = X(e);
        return (0, c.Cl)(t);
    }
    getMuteConfig(e) {
        return X(e).mute_config;
    }
    getMessageNotifications(e) {
        return X(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null !== (t = X(e).channel_overrides) && void 0 !== t ? t : {};
    }
    getNotifyHighlights(e) {
        return X(e).notify_highlights;
    }
    getGuildFlags(e) {
        return X(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? g.bL.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t ? t : G;
    }
    isChannelMuted(e, t) {
        var n;
        let r = m.Z.getChannel(t);
        return (e = null !== (n = null == r ? void 0 : r.getGuildId()) && void 0 !== n ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = m.Z.getChannel(t);
        if (null == n) return !1;
        let r = n.parent_id;
        return null != r && this.getMutedChannels(e).has(r);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== g.bL.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== g.bL.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (f.Ec.has(e.type) || (0, f.hv)(e.type) || !eE()) return A.i.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== A.i.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== A.i.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== A.i.UNSET ? n : this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES ? A.i.ALL_MESSAGES : A.i.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === g.bL.NO_MESSAGES || (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e));
    }
    allowAllMessages(e) {
        return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e));
    }
    isGuildCollapsed(e) {
        var t;
        return (null === (t = O[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: O,
            mutedChannels: U,
            optedInChannelsByGuild: w
        };
    }
    getChannelIdFlags(e, t) {
        var n;
        let r = this.getChannelOverrides(e)[t];
        return null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (h.yE(t.flags, v.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (h.yE(t.flags, v.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return null != e && (d.Z.isFullServerPreview(e) ? d.Z.isOptInEnabled(e) : h.yE(this.getGuildFlags(e), v.vc.OPT_IN_CHANNELS_ON));
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)));
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(m.Z.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (d.Z.isFullServerPreview(e)) return d.Z.isChannelOptedIn(e, t);
        if (i && null != F[e]) return F[e].has(t);
        let a = null !== (r = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
        return h.yE(a, v.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return d.Z.isFullServerPreview(e) ? (null !== (t = d.Z.getViewingChannels(e)) && void 0 !== t ? t : k) : null !== (n = w[e]) && void 0 !== n ? n : k;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return F[e];
    }
    getPendingChannelUpdates(e) {
        return B[e];
    }
    getGuildFavorites(e) {
        if (d.Z.isFullServerPreview(e)) return null;
        if (null == R[e]) {
            let t = s().filter(this.getChannelOverrides(e), (t) => {
                var n, r;
                return h.yE(null !== (r = t.flags) && void 0 !== r ? r : 0, v.ic.FAVORITED) && (null === (n = m.Z.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e;
            });
            R[e] = t.map((e) => e.channel_id);
        }
        return R[e];
    }
    isFavorite(e, t) {
        var n;
        return !d.Z.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0;
    }
    isMessagesFavorite(e) {
        var t, n;
        let r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return h.yE(r, v.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return h.yE(r, v.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null !== (e = w[x]) && void 0 !== e ? e : k;
    }
    get accountNotificationSettings() {
        return L;
    }
    get useNewNotifications() {
        return C;
    }
    getGuildUnreadSetting(e) {
        if (!eE()) return A.i.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return h.yE(t, v.vc.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : h.yE(t, v.vc.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : A.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !eE() || h.yE(t, v.vc.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : h.yE(t, v.vc.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : e.defaultMessageNotifications === g.bL.ALL_MESSAGES ? A.i.ALL_MESSAGES : A.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return h.yE(n, v.ic.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : h.yE(n, v.ic.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : A.i.UNSET;
    }
}
N(ef, 'displayName', 'UserGuildSettingsStore'), N(ef, 'persistKey', 'collapsedGuilds');
let eh = new ef(u.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: er,
    USER_GUILD_SETTINGS_GUILD_UPDATE: ei,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: eo,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eu,
    CONNECTION_OPEN: J,
    CACHE_LOADED: $,
    OVERLAY_INITIALIZE: ee,
    GUILD_CREATE: e_,
    GUILD_UPDATE: e_,
    GUILD_TOGGLE_COLLAPSE_MUTED: ec,
    IMPERSONATE_UPDATE: e_,
    IMPERSONATE_STOP: e_,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: el,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: es,
    NOTIFICATION_SETTINGS_UPDATE: et,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0
});
t.ZP = eh;
