n.d(t, {
    $R: function () {
        return m;
    },
    GA: function () {
        return A;
    },
    I: function () {
        return N;
    },
    UE: function () {
        return p;
    },
    Wq: function () {
        return I;
    },
    ZB: function () {
        return r;
    },
    jz: function () {
        return S;
    },
    rU: function () {
        return v;
    },
    sK: function () {
        return g;
    },
    wK: function () {
        return O;
    }
});
var r,
    i = n(789020);
var a = n(47120);
var o = n(367907),
    s = n(601992),
    l = n(592125),
    u = n(375954),
    c = n(9156);
n(626135);
var d = n(630388),
    _ = n(981631),
    E = n(468788),
    f = n(490897),
    h = n(526761);
!(function (e) {
    (e.ForumThreadsCreatedOn = 'enabled forum thread created notifs'), (e.ForumThreadsCreatedOff = 'disabled forum thread created notifs'), (e.SuppressEveryoneOn = 'enabled suppress everyone'), (e.SuppressEveryoneOff = 'disabled suppress everyone'), (e.SuppressRolesOn = 'enabled suppress roles'), (e.SuppressRolesOff = 'disabled suppress roles'), (e.HighlightsOn = 'enabled highlights'), (e.HighlightsOff = 'disabled highlights'), (e.MobilePushOn = 'enabled mobile push notifications'), (e.MobilePushOff = 'disabled mobile push notifications'), (e.UnreadsAll = 'unreads set to all messages'), (e.UnreadsMentions = 'unreads set to mentions'), (e.UnreadsDefault = 'unreads set to the default'), (e.NotificationsAll = 'notifications set to all messages'), (e.NotificationsMentions = 'notifications set to mentions'), (e.NotificationsNothing = 'notifications set to nothing'), (e.NotificationsDefault = 'notifications set to the default'), (e.PresetAll = 'notification preset set to all messages'), (e.PresetMentions = 'notification preset set to mentions'), (e.PresetNothing = 'notification preset set to nothing'), (e.PresetDefault = 'notification preset set to the default'), (e.OptedIn = 'opted in to entity'), (e.OptedOut = 'opted out from entity'), (e.Favorited = 'favorited'), (e.UnFavorited = 'unfavorited'), (e.Muted = 'muted'), (e.Unmuted = 'unmuted'), (e.MutedScheduledEvents = 'muted scheduled events'), (e.UnmutedScheduledEvents = 'unmuted scheduled events'), (e.OverrideCreated = 'channel override created'), (e.OverrideDeleted = 'channel override deleted');
})(r || (r = {}));
let p = {
        forumThreadsCreated: (e) => (e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs'),
        suppressEveryone: (e) => (e ? 'enabled suppress everyone' : 'disabled suppress everyone'),
        suppressRoles: (e) => (e ? 'enabled suppress roles' : 'disabled suppress roles'),
        highlights: (e) => (e ? 'enabled highlights' : 'disabled highlights'),
        mobilePush: (e) => (e ? 'enabled mobile push notifications' : 'disabled mobile push notifications'),
        optedIn: (e) => (e ? 'opted in to entity' : 'opted out from entity'),
        favorited: (e) => (e ? 'favorited' : 'unfavorited'),
        muted: (e) => (e ? 'muted' : 'unmuted'),
        mutedEvents: (e) => (e ? 'muted scheduled events' : 'unmuted scheduled events'),
        unreads: (e) => (e === f.i.ALL_MESSAGES ? 'unreads set to all messages' : e === f.i.ONLY_MENTIONS ? 'unreads set to mentions' : 'unreads set to the default'),
        notifications: (e) => (e === _.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === _.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === _.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default')
    },
    m = Object.freeze({
        [_.bL.ALL_MESSAGES]: 'All',
        [_.bL.ONLY_MENTIONS]: 'Mentions',
        [_.bL.NO_MESSAGES]: 'Nothing',
        [_.bL.NULL]: null
    });
function I(e, t, n, r, i) {
    var a, l;
    let u = function (e) {
            var t, n, r, i, a, o, s;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
                c = null != l.message_notifications ? m[l.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: u,
                guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                guild_message_notification_settings: c,
                guild_suppress_roles: null !== (r = l.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (i = l.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (a = l.notify_highlights) && void 0 !== a ? a : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (o = l.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (s = l.mute_scheduled_events) && void 0 !== s ? s : e.guild_scheduled_events_muted
            };
        },
        c = u(n),
        f = u(A(e), t),
        p = T(c, f, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        I = null !== (a = p('guild_flags')) && void 0 !== a ? a : 0,
        g = (null !== (l = f.guild_flags) && void 0 !== l ? l : 0) ^ I,
        S = 0 === (0, d.M1)(g, h.vc.OPT_IN_CHANNELS_OFF, h.vc.OPT_IN_CHANNELS_ON);
    o.ZP.trackWithMetadata(_.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...f,
        ...s.Z.getStats(e),
        location: i,
        guild_id: e,
        update_type: E.I.GUILD,
        label: r,
        guild_flags_old: p('guild_flags'),
        guild_is_muted_old: p('guild_is_muted'),
        guild_suppress_roles_old: p('guild_suppress_roles'),
        guild_notify_highlights_old: p('guild_notify_highlights'),
        guild_suppress_everyone_old: p('guild_suppress_everyone'),
        guild_receive_mobile_push_old: p('guild_receive_mobile_push'),
        guild_scheduled_events_muted_old: p('guild_scheduled_events_muted'),
        guild_message_notification_settings_old: p('guild_message_notification_settings'),
        is_opt_in_only_change: S
    });
}
function T(e, t, n) {
    return (r) => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function g(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e, t, n, r, i, a) {
    var c, f, p, I;
    let S = function (t) {
            var n, r;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                o = null != i.message_notifications ? m[i.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                s = null == e ? null : !0 === a || null != o;
            return {
                channel_is_muted: a,
                channel_is_overridden: s,
                channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
                channel_message_notification_settings: o,
                channel_muted_until: g(i.mute_config)
            };
        },
        A = S(r),
        v = S(N(e, t), n),
        O = T(A, v, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        R = l.Z.getChannel(t),
        C = null !== (f = O('channel_flags')) && void 0 !== f ? f : 0,
        y = (null !== (p = v.channel_flags) && void 0 !== p ? p : 0) ^ C,
        b = 0 === (0, d.M1)(y, h.ic.FAVORITED, h.ic.OPT_IN_ENABLED),
        L = null !== (I = null === (c = u.Z.getLastMessage(t)) || void 0 === c ? void 0 : c.type) && void 0 !== I ? I : null;
    o.ZP.trackWithMetadata(_.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...v,
        ...s.Z.getStats(e),
        location: a,
        guild_id: e,
        channel_id: t,
        update_type: E.I.CHANNEL,
        label: i,
        parent_id: null != R ? R.parent_id : null,
        channel_flags_old: O('channel_flags'),
        channel_is_muted_old: O('channel_is_muted'),
        channel_muted_until_old: O('channel_muted_until'),
        channel_is_overridden_old: O('channel_is_overridden'),
        channel_message_notification_settings_old: O('channel_message_notification_settings'),
        is_opt_in_only_change: b,
        last_message_type: L
    });
}
function A(e) {
    let t = c.ZP.isMuted(e),
        n = c.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: c.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: c.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: c.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: c.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: m[c.ZP.getMessageNotifications(e)],
        guild_notify_highlights: c.ZP.getNotifyHighlights(e),
        guild_flags: c.ZP.getGuildFlags(e)
    };
}
function v(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e, A(e))), t;
}
function N(e, t) {
    let n = c.ZP.isChannelMuted(e, t),
        r = c.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: m[c.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: c.ZP.getChannelIdFlags(e, t)
    };
}
function O(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, N(e, t))), n;
}
