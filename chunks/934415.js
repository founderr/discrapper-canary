n.d(t, {
    EO: function () {
        return V;
    },
    LY: function () {
        return B;
    },
    Nj: function () {
        return l.Z;
    },
    a5: function () {
        return G;
    },
    c4: function () {
        return x;
    },
    g7: function () {
        return U;
    },
    jZ: function () {
        return b;
    },
    mE: function () {
        return H;
    },
    oQ: function () {
        return L;
    },
    rX: function () {
        return D;
    },
    rY: function () {
        return P;
    },
    rt: function () {
        return M;
    },
    wR: function () {
        return F;
    },
    wl: function () {
        return k;
    }
});
var r = n(411104);
var i = n(653041);
var a = n(47120);
var o = n(149765),
    s = n(911969),
    l = n(90463),
    u = n(968358),
    c = n(874748),
    d = n(590415),
    _ = n(131704),
    E = n(592125),
    f = n(984933),
    h = n(496675),
    p = n(944486),
    m = n(938475),
    I = n(700785),
    T = n(709054),
    g = n(981631),
    S = n(474936),
    A = n(689938);
let { GUILD_VOICE: v, GUILD_CATEGORY: N, GUILD_STAGE_VOICE: O } = g.d4z;
function R(e, t) {
    return e === t || e === N;
}
function C(e, t, n) {
    let r = I.Hn;
    return (
        ((0, _.r8)(t) || t === N) && (r = o.IH(r, g.Plq.VIEW_CHANNEL)),
        R(t, v) && ((r = o.IH(r, g.Plq.VIEW_CHANNEL)), (r = o.IH(r, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            allow: I.Hn,
            deny: r
        }
    );
}
function y(e, t, n) {
    let r = I.Hn;
    return (
        ((0, _.r8)(t) || t === N) && (r = o.IH(r, g.Plq.VIEW_CHANNEL)),
        (R(t, v) || R(t, O)) && ((r = o.IH(r, g.Plq.VIEW_CHANNEL)), (r = o.IH(r, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: I.Hn,
            allow: r
        }
    );
}
function L(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = [];
    return (
        (n.length > 0 || r) && i.push(C(e, t, s.BN.ROLE)),
        n.forEach((e) => {
            i.push(y(e, t, s.BN.ROLE));
        }),
        i
    );
}
function b(e, t) {
    return y(e, t, s.BN.MEMBER);
}
function D(e, t) {
    return y(e, t, s.BN.ROLE);
}
function M(e) {
    return [
        {
            id: e,
            type: s.BN.ROLE,
            deny: g.Plq.SEND_MESSAGES,
            allow: I.Hn
        }
    ];
}
function P(e, t, n) {
    var r, i;
    let a = e.getGuildId(),
        o = n.getGuild(a),
        s = null !== (r = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== r ? r : -1,
        l = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
        c = m.ZP.countVoiceStatesForChannel(e.id),
        d = m.ZP.getVoiceStatesForChannel(e),
        _ = h.Z.can(g.Plq.MOVE_MEMBERS, e) && h.Z.can(g.Plq.CONNECT, e),
        E = !1;
    E = e.type === O ? null != a && (t.hasVideo(e.id) || (0, u.a)(d)) && l > 0 && c >= l : null != a && t.hasVideo(e.id) && s > 0 && c >= s + (_ ? 1 : 0);
    let f = e.userLimit > 0 && c >= e.userLimit;
    return E || (f && !_);
}
function U(e, t) {
    return t.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.hasFeature(g.oNc.VIP_REGIONS) ? S.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, S.HO[e.premiumTier].limits.bitrate);
}
function w(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
        a = [];
    return (
        t.forEach((e) => {
            if (e.id === r || e.id === n) return;
            let t = i[e.id];
            null != t &&
                (e.isGuildStageVoice()
                    ? t.forEach((e) => {
                          (0, d.gf)(e.voiceState) === d.xO.ON_STAGE && a.push(e);
                      })
                    : t.forEach((e) => a.push(e)));
        }),
        a
    );
}
function x(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return w({
        channels: t,
        selectedChannelId: n,
        selectedVoiceChannelId: r,
        voiceStates: i
    }).map((e) => e.user);
}
function G(e) {
    let { type: t } = e;
    switch (t) {
        case g.d4z.DM:
            return A.Z.Messages.DM;
        case g.d4z.GROUP_DM:
            return A.Z.Messages.GROUP_DM;
        case g.d4z.GUILD_TEXT:
            return A.Z.Messages.TEXT_CHANNEL;
        case g.d4z.GUILD_FORUM:
            return A.Z.Messages.FORUM_CHANNEL;
        case g.d4z.GUILD_MEDIA:
            return A.Z.Messages.MEDIA_CHANNEL;
        case g.d4z.GUILD_VOICE:
            return A.Z.Messages.VOICE_CHANNEL;
        case g.d4z.GUILD_STAGE_VOICE:
            return A.Z.Messages.STAGE_CHANNEL;
        case g.d4z.GUILD_ANNOUNCEMENT:
            return A.Z.Messages.NEWS_CHANNEL;
        case g.d4z.GUILD_STORE:
            return A.Z.Messages.STORE_CHANNEL;
        case g.d4z.GUILD_CATEGORY:
            return A.Z.Messages.CATEGORY;
        default:
            return null;
    }
}
function k(e) {
    if (null == e) return 'text';
    let t = e.isMediaChannel();
    if (e.type === g.d4z.GUILD_VOICE) return h.Z.can(g.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === g.d4z.GUILD_STAGE_VOICE) return h.Z.can(g.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (_.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === g.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
    else if (e.type === g.d4z.GUILD_MEDIA) return 'media';
    else if (_.sR.has(e.type)) return 'text';
}
function B(e) {
    let t;
    let n = E.Z.getChannel(p.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = f.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.Z5c.CHANNEL(e, t);
}
function F(e, t, n, r) {
    let i = null == r ? '' : '?summaryId='.concat(r);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(g.Z5c.CHANNEL(e, t, n))
        .concat(i);
}
function Z(e, t, n, r) {
    return null == e || null == t || null == n
        ? F(e, t, r)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(g.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r));
}
function V(e, t, n, r) {
    let i;
    let a = e.getGuildId(),
        o = (0, c.BC)(a, t);
    return (i = null != t && o ? Z(a, t.id, e.id, T.default.castChannelIdAsMessageId(e.id)) : null != r ? r : F(a, e.id, n));
}
function H(e) {
    if (null == e) return null;
    switch (e.type) {
        case g.d4z.GUILD_ANNOUNCEMENT:
        case g.d4z.GUILD_TEXT:
        case g.d4z.GUILD_FORUM:
        case g.d4z.GUILD_MEDIA:
            return g.ZY5.GUILD_CHANNEL;
        case g.d4z.GROUP_DM:
        case g.d4z.DM:
            return g.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
