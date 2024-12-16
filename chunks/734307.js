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
    s = t(16609),
    c = t(430198),
    C = t(924301),
    S = t(601070),
    A = t(569471),
    T = t(581883),
    I = t(314897),
    L = t(680089),
    D = t(592125),
    N = t(58468),
    h = t(77498),
    U = t(496675),
    P = t(306680),
    R = t(944486),
    f = t(9156),
    g = t(823379),
    G = t(709054),
    O = t(540126),
    m = t(526761);
let v = null,
    p = null,
    H = new O.ZP();
function Z() {
    let n = R.Z.getChannelId(),
        e = R.Z.getVoiceChannelId();
    return (v = n), (p = e), H.clear();
}
function x(n) {
    let {
        guild: { id: e }
    } = n;
    return H.clearGuildId(e);
}
function b(n) {
    let {
        channel: { guild_id: e }
    } = n;
    return H.clearGuildId(e);
}
function M(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function B(n) {
    let { channelId: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function j() {
    return null != v && H.nonPositionalChannelIdUpdate(v);
}
function w(n) {
    let { channel: e } = n;
    return H.nonPositionalChannelIdUpdate(e.id);
}
function y(n) {
    let { id: e } = n;
    return H.nonPositionalChannelIdUpdate(e);
}
function F() {
    let n = R.Z.getChannelId(),
        e = R.Z.getVoiceChannelId(),
        t = v !== n || p !== e;
    return (
        !!t &&
        (o()([v, p, n, e])
            .uniq()
            .forEach((n) => {
                null != n && H.nonPositionalChannelIdUpdate(n) && (t = !0);
            }),
        (v = n),
        (p = e),
        !0)
    );
}
function V(n) {
    let { id: e } = n,
        t = D.Z.getChannel(e);
    return null == t ? H.clearGuildId(e) : H.clearGuildId(t.guild_id);
}
function Y(n) {
    let { guildId: e } = n;
    return H.clearGuildId(e);
}
function k() {
    return H.updateSubtitles();
}
function K(n) {
    let { guildScheduledEvent: e } = n;
    return H.updateSubtitles(e.guild_id);
}
class W extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, I.default, L.Z, D.Z, N.Z, _.ZP, h.Z, c.Z, C.ZP, A.Z, U.Z, P.ZP, R.Z, f.ZP, T.Z);
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
    (a = 'displayName') in (l = W)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (e.Z = new W(u.Z, {
        APPLICATION_FETCH_FAIL: k,
        APPLICATION_FETCH_SUCCESS: k,
        APPLICATION_FETCH: k,
        APPLICATIONS_FETCH_FAIL: k,
        APPLICATIONS_FETCH_SUCCESS: k,
        APPLICATIONS_FETCH: k,
        BACKGROUND_SYNC: Z,
        BULK_ACK: function (n) {
            let { channels: e } = n,
                t = !1;
            return (
                o()(e)
                    .map((n) => {
                        var e;
                        return null === (e = D.Z.getChannel(n.channelId)) || void 0 === e ? void 0 : e.guild_id;
                    })
                    .filter(g.lm)
                    .uniq()
                    .forEach((n) => {
                        H.clearGuildId(n) && (t = !0);
                    }),
                t
            );
        },
        BULK_CLEAR_RECENTS: M,
        CACHE_LOADED_LAZY: Z,
        CATEGORY_COLLAPSE_ALL: M,
        CATEGORY_COLLAPSE: V,
        CATEGORY_EXPAND_ALL: M,
        CATEGORY_EXPAND: V,
        CHANNEL_ACK: B,
        CHANNEL_COLLAPSE: function (n) {
            var e;
            let { channelId: t } = n;
            return H.clearGuildId(null === (e = D.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id);
        },
        CHANNEL_CREATE: b,
        CHANNEL_DELETE: b,
        CHANNEL_LOCAL_ACK: B,
        CHANNEL_MUTE_EXPIRED: M,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: B,
        CHANNEL_SELECT: F,
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
        CONNECTION_OPEN_SUPPLEMENTAL: k,
        CONNECTION_OPEN: Z,
        CURRENT_USER_UPDATE: Z,
        DECAY_READ_STATES: Z,
        DEV_TOOLS_DESIGN_TOGGLE_SET: Z,
        DISABLE_AUTOMATIC_ACK: B,
        DISMISS_FAVORITE_SUGGESTION: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
        },
        DRAWER_CLOSE: j,
        DRAWER_OPEN: j,
        EMBEDDED_ACTIVITY_UPDATE_V2: function (n) {
            let { location: e } = n;
            return H.updateSubtitles((0, s.j)(e), (0, s.p)(e));
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (n) {
            k();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: k,
        ENABLE_AUTOMATIC_ACK: B,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (n) {
            let { guildId: e } = n;
            return H.updateSubtitles(e);
        },
        GAMES_DATABASE_FETCH_FAIL: k,
        GAMES_DATABASE_FETCH: k,
        GAMES_DATABASE_UPDATE: k,
        GUILD_APPLICATIONS_FETCH_SUCCESS: k,
        GUILD_CREATE: x,
        GUILD_DELETE: x,
        GUILD_MEMBER_UPDATE: function (n) {
            let { guildId: e, user: t } = n;
            return I.default.getId() === t.id && H.clearGuildId(e);
        },
        GUILD_MUTE_EXPIRED: M,
        GUILD_ROLE_CREATE: M,
        GUILD_ROLE_DELETE: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
        GUILD_ROLE_UPDATE: M,
        GUILD_SCHEDULED_EVENT_CREATE: K,
        GUILD_SCHEDULED_EVENT_DELETE: K,
        GUILD_SCHEDULED_EVENT_UPDATE: K,
        GUILD_TOGGLE_COLLAPSE_MUTED: M,
        GUILD_UPDATE: x,
        IMPERSONATE_STOP: M,
        IMPERSONATE_UPDATE: M,
        LOAD_CHANNELS: function (n) {
            n.channels.forEach((n) => {
                let { guildId: e } = n;
                return H.clearGuildId(e);
            });
        },
        LOAD_MESSAGES_SUCCESS: B,
        MESSAGE_ACK: B,
        MESSAGE_CREATE: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
        },
        MESSAGE_DELETE_BULK: B,
        MESSAGE_DELETE: B,
        NOTIFICATION_SETTINGS_UPDATE: Z,
        OVERLAY_INITIALIZE: Z,
        PASSIVE_UPDATE_V2: function (n) {
            return H.clearGuildId(n.guildId);
        },
        RECOMPUTE_READ_STATES: Z,
        RESORT_THREADS: B,
        SET_RECENTLY_ACTIVE_COLLAPSED: Z,
        THREAD_CREATE: w,
        THREAD_DELETE: function (n) {
            let { channel: e } = n;
            return H.nonPositionalChannelUpdate(e);
        },
        THREAD_LIST_SYNC: M,
        THREAD_MEMBER_UPDATE: y,
        THREAD_MEMBERS_UPDATE: y,
        THREAD_UPDATE: w,
        TRY_ACK: B,
        UPDATE_CHANNEL_DIMENSIONS: B,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (n) {
            let { guildId: e } = n;
            H.updateSubtitles(e);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (n) {
            let { userGuildSettings: e } = n;
            e.forEach((n) => {
                let { guild_id: e } = n;
                return H.clearGuildId(e);
            });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
        USER_GUILD_SETTINGS_GUILD_UPDATE: M,
        USER_SETTINGS_PROTO_UPDATE: function (n) {
            var e;
            let { settings: t } = n;
            if (t.type !== m.yP.PRELOADED_USER_SETTINGS) return !1;
            let i = null === (e = t.proto.guilds) || void 0 === e ? void 0 : e.guilds,
                l = !1;
            return (
                null != i &&
                    G.default.keys(i).forEach((n) => {
                        null != i[n].guildRecentsDismissedAt && (l = H.updateRecentsCategory(n) || l);
                    }),
                l
            );
        },
        VOICE_CATEGORY_COLLAPSE: Y,
        VOICE_CATEGORY_EXPAND: Y,
        VOICE_CHANNEL_SELECT: F,
        VOICE_CHANNEL_STATUS_UPDATE: function (n) {
            return H.nonPositionalChannelIdUpdate(n.id);
        },
        VOICE_STATE_UPDATES: function (n) {
            let { voiceStates: e } = n,
                t = F(),
                i = new Set();
            for (let { channelId: n, oldChannelId: l } of e) null != l && !i.has(l) && (H.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)), null != n && !i.has(n) && (H.nonPositionalChannelIdUpdate(n) && (t = !0), i.add(n));
            return t;
        },
        WINDOW_FOCUS: j
    }));
