n.d(t, {
    $H: function () {
        return k;
    },
    AB: function () {
        return w;
    },
    JS: function () {
        return P;
    },
    hH: function () {
        return D;
    },
    kO: function () {
        return B;
    },
    oG: function () {
        return F;
    },
    v_: function () {
        return U;
    },
    yw: function () {
        return G;
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
    v = n(979651),
    N = n(626135),
    O = n(70956),
    R = n(700785),
    C = n(546416),
    y = n(981631),
    b = n(176505);
function L(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function D(e) {
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
        c = v.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: _.Z.getMemberCount(e),
        guild_num_channels: s + l,
        guild_num_text_channels: s,
        guild_num_voice_channels: l,
        guild_num_roles: L(r),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null !== (t = p.Z.getGuildPermissions(n)) && void 0 !== t ? t : R.Hn),
        guild_is_vip: n.hasFeature(y.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: L(c)
    };
}
function M(e, t) {
    return {
        channel_static_route: t,
        channel_hidden: !1
    };
}
function P(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    return null == t ? null : U(t);
}
function U(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && a.e$(t.deny, y.Plq.VIEW_CHANNEL);
        };
        n = l.Ec.has(e.type) && null != e.parent_id ? t(c.Z.getChannel(e.parent_id)) : t(e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : R.Hn),
        channel_hidden: n
    };
}
function w(e) {
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
        ...B(t.getGuildId(), t.id, n),
        ...(0, C.V)()
    };
}
function x(e, t) {
    var n, r;
    return null == e ? (null != t ? t : null) : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (N.default.isThrottled(e)) return;
    let r = !('location' in t) || t.location !== y.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        i = 'guild_id' in t ? t.guild_id : r ? S.Z.getGuildId() : null,
        a = 'channel_id' in t ? t.channel_id : r ? g.Z.getChannelId(i) : null,
        o = c.Z.getChannel(a),
        s = x(o, i),
        l = {
            ...t,
            ...D(s),
            ...(null != i && null != a && (0, b.AB)(a) ? M(i, a) : U(o))
        };
    N.default.track(e, l, { flush: n });
}
function k(e) {
    let t = c.Z.getChannel(e);
    if (null == t || null == t.guild_id) return { channel_id: e };
    let n = f.Z.getGuild(t.guild_id);
    if (null == n) return { channel_id: e };
    let r = T.ZP.getSnapshot(e, 10 * O.Z.Millis.SECOND);
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
        can_send_message: p.Z.can(y.Plq.SEND_MESSAGES, t)
    };
}
function B(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(v.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function F(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(v.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != m.Z.findActivity(e.userId, (e) => e.type === y.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
t.ZP = {
    trackWithMetadata: G,
    getVoiceStateMetadata: B
};
