n.d(t, {
    $H: function () {
        return B;
    },
    AB: function () {
        return x;
    },
    JS: function () {
        return U;
    },
    hH: function () {
        return M;
    },
    kO: function () {
        return F;
    },
    oG: function () {
        return Z;
    },
    v_: function () {
        return w;
    },
    yw: function () {
        return k;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(50244),
    s = n(686660),
    l = n(131704),
    u = n(314897),
    c = n(592125),
    d = n(984933),
    _ = n(650774),
    E = n(271383),
    f = n(430824),
    h = n(131951),
    p = n(496675),
    m = n(158776),
    I = n(19780),
    T = n(306680),
    g = n(944486),
    S = n(914010),
    A = n(9156),
    v = n(594174),
    N = n(979651),
    O = n(626135),
    R = n(70956),
    C = n(700785),
    y = n(546416),
    L = n(981631),
    b = n(176505);
function D(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function M(e) {
    var t;
    if (null == e) return null;
    let n = f.Z.getGuild(e);
    if (null == n) return null;
    let r = f.Z.getRoles(n.id),
        i = u.default.getId(),
        a = E.ZP.getMember(e, i),
        o = d.ZP.getChannels(e),
        s = o[d.sH].length,
        l = o[d.Zb].length,
        c = N.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: _.Z.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: D(r),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null !== (t = p.Z.getGuildPermissions(n)) && void 0 !== t ? t : C.Hn),
        guild_is_vip: n.hasFeature(L.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: D(c)
    };
}
function P(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1
    };
}
function U(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    return null == t ? null : w(t);
}
function w(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && a.e$(t.deny, L.Plq.VIEW_CHANNEL);
        };
        n = l.Ec.has(e.type) && null != e.parent_id ? t(c.Z.getChannel(e.parent_id)) : t(e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : C.Hn),
        channel_hidden: n
    };
}
function x(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        r = I.Z.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...F(t.getGuildId(), t.id, n),
        ...(0, y.V)()
    };
}
function G(e, t) {
    var n, r;
    return null == e ? (null != t ? t : null) : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (O.default.isThrottled(e)) return;
    let r = !('location' in t) || t.location !== L.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        i = 'guild_id' in t ? t.guild_id : r ? S.Z.getGuildId() : null,
        a = 'channel_id' in t ? t.channel_id : r ? g.Z.getChannelId(i) : null,
        o = c.Z.getChannel(a),
        s = G(o, i),
        l = {
            ...t,
            ...M(s),
            ...(null != i && null != a && (0, b.AB)(a) ? P(i, a) : w(o))
        };
    O.default.track(e, l, { flush: n });
}
function B(e) {
    let t = c.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = f.Z.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = v.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n
        };
    }
    let r = T.ZP.getSnapshot(e, 10 * R.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: A.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: A.ZP.resolveUnreadSetting(t),
        channel_preset: (0, s.gs)(A.ZP.resolveUnreadSetting(t), A.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: A.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: A.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, s.gs)(A.ZP.resolveGuildUnreadSetting(n), A.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, o.P)(t.guild_id, e),
        can_send_message: p.Z.can(L.Plq.SEND_MESSAGES, t),
        is_app_dm: !1
    };
}
function F(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(N.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function Z(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(N.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != m.Z.findActivity(e.userId, (e) => e.type === L.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
t.ZP = {
    trackWithMetadata: k,
    getVoiceStateMetadata: F
};
