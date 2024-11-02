t(47120);
var i,
    l,
    a,
    r,
    E = t(392711),
    o = t.n(E),
    d = t(442837),
    u = t(570140),
    _ = t(317381),
    s = t(430198),
    c = t(924301),
    C = t(601070),
    S = t(569471),
    A = t(581883),
    T = t(314897),
    I = t(680089),
    L = t(592125),
    D = t(58468),
    N = t(77498),
    h = t(496675),
    U = t(306680),
    P = t(944486),
    R = t(9156),
    f = t(823379),
    g = t(709054),
    G = t(540126),
    O = t(526761);
let m = null,
    v = null,
    H = new G.ZP();
function Z() {
    let n = P.Z.getChannelId(),
        e = P.Z.getVoiceChannelId();
    return (m = n), (v = e), H.clear();
}
function p(n) {
    let {
        guild: { id: e }
    } = n;
    return H.clearGuildId(e);
}
function x(n) {
    let {
        channel: { guild_id: e }
    } = n;
    return H.clearGuildId(e);
}
function b(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function M(n) {
    let { channelId: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function B() {
    return null != m && H.nonPositionalChannelIdUpdate(m);
}
function w(n) {
    let { channel: e } = n;
    return H.nonPositionalChannelIdUpdate(e.id);
}
function j(n) {
    let { id: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function y() {
    let n = P.Z.getChannelId(),
        e = P.Z.getVoiceChannelId(),
        t = m !== n || v !== e;
    return (
        !!t &&
        (o()([m, v, n, e])
            .uniq()
            .forEach((n) => {
                null != n && H.nonPositionalChannelIdUpdate(n) && (t = !0);
            }),
        (m = n),
        (v = e),
        !0)
    );
}
function F(n) {
    let { id: e } = n,
        t = L.Z.getChannel(e);
    return null == t ? H.clearGuildId(e) : H.clearGuildId(t.guild_id);
}
function V(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function Y() {
    return H.updateSubtitles();
}
function k(n) {
    let { guildScheduledEvent: e } = n;
    return H.updateSubtitles(e.guild_id);
}
class K extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, T.default, I.Z, L.Z, D.Z, _.ZP, N.Z, s.Z, c.ZP, S.Z, h.Z, U.ZP, P.Z, R.ZP, A.Z);
    }
    getGuild(n, e) {
        var t, i;
        let l = H.getGuild(n, null !== (t = null == e ? void 0 : e.guildActionRows) && void 0 !== t ? t : [], null !== (i = null == e ? void 0 : e.channelNoticeRows) && void 0 !== i ? i : []);
        return {
            guildChannelsVersion: l.version,
            guildChannels: l
        };
    }
    getGuildWithoutChangingGuildActionRows(n) {
        let e = H.getGuildChannelRowsOnly(n);
        return {
            guildChannelsVersion: e.version,
            guildChannels: e
        };
    }
    recentsChannelCount(n) {
        if (null == n) return 0;
        let e = H.getGuildChannelRowsOnly(n);
        return e.getCategoryFromSection(e.recentsSectionNumber).getShownChannelIds().length;
    }
}
(r = 'ChannelListStore'),
    (a = 'displayName') in (l = K)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (e.Z = new K(u.Z, {
        APPLICATION_FETCH_FAIL: Y,
        APPLICATION_FETCH_SUCCESS: Y,
        APPLICATION_FETCH: Y,
        APPLICATIONS_FETCH_FAIL: Y,
        APPLICATIONS_FETCH_SUCCESS: Y,
        APPLICATIONS_FETCH: Y,
        BACKGROUND_SYNC: Z,
        BULK_ACK: function (n) {
            let { channels: e } = n,
                t = !1;
            return (
                o()(e)
                    .map((n) => {
                        var e;
                        return null === (e = L.Z.getChannel(n.channelId)) || void 0 === e ? void 0 : e.guild_id;
                    })
                    .filter(f.lm)
                    .uniq()
                    .forEach((n) => {
                        H.clearGuildId(n) && (t = !0);
                    }),
                t
            );
        },
        BULK_CLEAR_RECENTS: b,
        CACHE_LOADED_LAZY: Z,
        CATEGORY_COLLAPSE_ALL: b,
        CATEGORY_COLLAPSE: F,
        CATEGORY_EXPAND_ALL: b,
        CATEGORY_EXPAND: F,
        CHANNEL_ACK: M,
        CHANNEL_COLLAPSE: function (n) {
            var e;
            let { channelId: t } = n;
            return H.clearGuildId(null === (e = L.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id);
        },
        CHANNEL_CREATE: x,
        CHANNEL_DELETE: x,
        CHANNEL_LOCAL_ACK: M,
        CHANNEL_MUTE_EXPIRED: b,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
        CHANNEL_SELECT: y,
        CHANNEL_STATUSES: function (n) {
            return H.clearGuildId(n.guildId);
        },
        CHANNEL_UPDATES: function (n) {
            let { channels: e } = n,
                t = !1;
            return (
                o()(e)
                    .map((n) => n.guild_id)
                    .uniq()
                    .forEach((n) => {
                        H.clearGuildId(n) && (t = !0);
                    }),
                t
            );
        },
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        CONNECTION_OPEN: Z,
        CURRENT_USER_UPDATE: Z,
        DECAY_READ_STATES: Z,
        DEV_TOOLS_DESIGN_TOGGLE_SET: Z,
        DISABLE_AUTOMATIC_ACK: M,
        DISMISS_FAVORITE_SUGGESTION: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
        },
        DRAWER_CLOSE: B,
        DRAWER_OPEN: B,
        EMBEDDED_ACTIVITY_UPDATE_V2: function (n) {
            let { location: e } = n;
            return H.updateSubtitles(e.guild_id, e.channel_id);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (n) {
            Y();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
        ENABLE_AUTOMATIC_ACK: M,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (n) {
            let { guildId: e } = n;
            return H.updateSubtitles(e);
        },
        GAMES_DATABASE_FETCH_FAIL: Y,
        GAMES_DATABASE_FETCH: Y,
        GAMES_DATABASE_UPDATE: Y,
        GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
        GUILD_CREATE: p,
        GUILD_DELETE: p,
        GUILD_MEMBER_UPDATE: function (n) {
            let { guildId: e, user: t } = n;
            return T.default.getId() === t.id && H.clearGuildId(e);
        },
        GUILD_MUTE_EXPIRED: b,
        GUILD_ROLE_CREATE: b,
        GUILD_ROLE_DELETE: b,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: b,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: b,
        GUILD_ROLE_UPDATE: b,
        GUILD_SCHEDULED_EVENT_CREATE: k,
        GUILD_SCHEDULED_EVENT_DELETE: k,
        GUILD_SCHEDULED_EVENT_UPDATE: k,
        GUILD_TOGGLE_COLLAPSE_MUTED: b,
        GUILD_UPDATE: p,
        IMPERSONATE_STOP: b,
        IMPERSONATE_UPDATE: b,
        LOAD_CHANNELS: function (n) {
            n.channels.forEach((n) => {
                let { guildId: e } = n;
                return H.clearGuildId(e);
            });
        },
        LOAD_MESSAGES_SUCCESS: M,
        MESSAGE_ACK: M,
        MESSAGE_CREATE: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
        },
        MESSAGE_DELETE_BULK: M,
        MESSAGE_DELETE: M,
        NOTIFICATION_SETTINGS_UPDATE: Z,
        OVERLAY_INITIALIZE: Z,
        PASSIVE_UPDATE_V2: function (n) {
            return H.clearGuildId(n.guildId);
        },
        RECOMPUTE_READ_STATES: Z,
        RESORT_THREADS: M,
        SET_RECENTLY_ACTIVE_COLLAPSED: Z,
        THREAD_CREATE: w,
        THREAD_DELETE: function (n) {
            let { channel: e } = n;
            return H.nonPositionalChannelUpdate(e);
        },
        THREAD_LIST_SYNC: b,
        THREAD_MEMBER_UPDATE: j,
        THREAD_MEMBERS_UPDATE: j,
        THREAD_UPDATE: w,
        TRY_ACK: M,
        UPDATE_CHANNEL_DIMENSIONS: M,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (n) {
            let { guildId: e } = n;
            H.updateSubtitles(e);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: b,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: b,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (n) {
            let { userGuildSettings: e } = n;
            e.forEach((n) => {
                let { guild_id: e } = n;
                return H.clearGuildId(e);
            });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b,
        USER_GUILD_SETTINGS_GUILD_UPDATE: b,
        USER_SETTINGS_PROTO_UPDATE: function (n) {
            var e;
            let { settings: t } = n;
            if (t.type !== O.yP.PRELOADED_USER_SETTINGS) return !1;
            let i = null === (e = t.proto.guilds) || void 0 === e ? void 0 : e.guilds,
                l = !1;
            return (
                null != i &&
                    g.default.keys(i).forEach((n) => {
                        null != i[n].guildRecentsDismissedAt && (l = H.updateRecentsCategory(n) || l);
                    }),
                l
            );
        },
        VOICE_CATEGORY_COLLAPSE: V,
        VOICE_CATEGORY_EXPAND: V,
        VOICE_CHANNEL_SELECT: y,
        VOICE_CHANNEL_STATUS_UPDATE: function (n) {
            return H.nonPositionalChannelIdUpdate(n.id);
        },
        VOICE_STATE_UPDATES: function (n) {
            let { voiceStates: e } = n,
                t = y(),
                i = new Set();
            for (let { channelId: n, oldChannelId: l } of e) null != l && !i.has(l) && (H.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)), null != n && !i.has(n) && (H.nonPositionalChannelIdUpdate(n) && (t = !0), i.add(n));
            return t;
        },
        WINDOW_FOCUS: B
    }));
