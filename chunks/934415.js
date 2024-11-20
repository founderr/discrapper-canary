n.d(t, {
    EO: function () {
        return k;
    },
    LY: function () {
        return M;
    },
    Nj: function () {
        return a.Z;
    },
    a5: function () {
        return x;
    },
    c4: function () {
        return L;
    },
    g7: function () {
        return D;
    },
    jZ: function () {
        return N;
    },
    mE: function () {
        return U;
    },
    oQ: function () {
        return A;
    },
    rX: function () {
        return C;
    },
    rY: function () {
        return O;
    },
    rt: function () {
        return R;
    },
    wR: function () {
        return P;
    },
    wl: function () {
        return w;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var r = n(149765),
    i = n(911969),
    a = n(90463),
    s = n(968358),
    o = n(874748),
    l = n(590415),
    u = n(131704),
    c = n(592125),
    d = n(984933),
    f = n(496675),
    _ = n(944486),
    p = n(938475),
    h = n(700785),
    m = n(709054),
    g = n(981631),
    E = n(474936),
    v = n(388032);
let { GUILD_VOICE: I, GUILD_CATEGORY: b, GUILD_STAGE_VOICE: T } = g.d4z;
function S(e, t) {
    return e === t || e === b;
}
function y(e, t, n) {
    let i = h.Hn;
    return (
        ((0, u.r8)(t) || t === b) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)),
        (S(t, I) || S(t, T)) && ((i = r.IH(i, g.Plq.VIEW_CHANNEL)), (i = r.IH(i, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: h.Hn,
            allow: i
        }
    );
}
function A(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = [];
    if (n.length > 0 || a) {
        var o, l, c;
        let n;
        s.push(
            ((o = e),
            (l = t),
            (c = i.BN.ROLE),
            (n = h.Hn),
            ((0, u.r8)(l) || l === b) && (n = r.IH(n, g.Plq.VIEW_CHANNEL)),
            S(l, I) && ((n = r.IH(n, g.Plq.VIEW_CHANNEL)), (n = r.IH(n, g.Plq.CONNECT))),
            {
                id: o,
                type: c,
                allow: h.Hn,
                deny: n
            })
        );
    }
    return (
        n.forEach((e) => {
            s.push(y(e, t, i.BN.ROLE));
        }),
        s
    );
}
function N(e, t) {
    return y(e, t, i.BN.MEMBER);
}
function C(e, t) {
    return y(e, t, i.BN.ROLE);
}
function R(e) {
    return [
        {
            id: e,
            type: i.BN.ROLE,
            deny: g.Plq.SEND_MESSAGES,
            allow: h.Hn
        }
    ];
}
function O(e, t, n) {
    var r, i;
    let a = e.getGuildId(),
        o = n.getGuild(a),
        l = null !== (r = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== r ? r : -1,
        u = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
        c = p.ZP.countVoiceStatesForChannel(e.id),
        d = p.ZP.getVoiceStatesForChannel(e),
        _ = f.Z.can(g.Plq.MOVE_MEMBERS, e) && f.Z.can(g.Plq.CONNECT, e),
        h = !1;
    h = e.type === T ? null != a && (t.hasVideo(e.id) || (0, s.a)(d)) && u > 0 && c >= u : null != a && t.hasVideo(e.id) && l > 0 && c >= l + (_ ? 1 : 0);
    let m = e.userLimit > 0 && c >= e.userLimit;
    return h || (m && !_);
}
function D(e, t) {
    return t.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.hasFeature(g.oNc.VIP_REGIONS) ? E.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, E.HO[e.premiumTier].limits.bitrate);
}
function L(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
            a = [];
        return (
            t.forEach((e) => {
                if (e.id === r || e.id === n) return;
                let t = i[e.id];
                null != t &&
                    (e.isGuildStageVoice()
                        ? t.forEach((e) => {
                              (0, l.gf)(e.voiceState) === l.xO.ON_STAGE && a.push(e);
                          })
                        : t.forEach((e) => a.push(e)));
            }),
            a
        );
    })({
        channels: t,
        selectedChannelId: n,
        selectedVoiceChannelId: r,
        voiceStates: i
    }).map((e) => e.user);
}
function x(e) {
    let { type: t } = e;
    switch (t) {
        case g.d4z.DM:
            return v.intl.string(v.t.jN2DfX);
        case g.d4z.GROUP_DM:
            return v.intl.string(v.t['e5y+go']);
        case g.d4z.GUILD_TEXT:
            return v.intl.string(v.t.Pnajj4);
        case g.d4z.GUILD_FORUM:
            return v.intl.string(v.t.GbryDQ);
        case g.d4z.GUILD_MEDIA:
            return v.intl.string(v.t.seKITE);
        case g.d4z.GUILD_VOICE:
            return v.intl.string(v.t.BVZqJi);
        case g.d4z.GUILD_STAGE_VOICE:
            return v.intl.string(v.t.EErMzM);
        case g.d4z.GUILD_ANNOUNCEMENT:
            return v.intl.string(v.t.l1dkSE);
        case g.d4z.GUILD_STORE:
            return v.intl.string(v.t['P1/Erq']);
        case g.d4z.GUILD_CATEGORY:
            return v.intl.string(v.t.vHCZws);
        default:
            return null;
    }
}
function w(e) {
    if (null == e) return 'text';
    let t = e.isMediaChannel();
    if (e.type === g.d4z.GUILD_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === g.d4z.GUILD_STAGE_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (u.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === g.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
    else if (e.type === g.d4z.GUILD_MEDIA) return 'media';
    else if (u.sR.has(e.type)) return 'text';
}
function M(e) {
    let t;
    let n = c.Z.getChannel(_.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = d.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.Z5c.CHANNEL(e, t);
}
function P(e, t, n, r) {
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(g.Z5c.CHANNEL(e, t, n))
        .concat(null == r ? '' : '?summaryId='.concat(r));
}
function k(e, t, n, r) {
    let i;
    let a = e.getGuildId(),
        s = (0, o.BC)(a, t);
    if (null != t && s) {
        var l, u, c, d;
        (l = a),
            (u = t.id),
            (c = e.id),
            (d = m.default.castChannelIdAsMessageId(e.id)),
            (i =
                null == l || null == u || null == c
                    ? P(l, u, d)
                    : ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(g.Z5c.CHANNEL_THREAD_VIEW(l, u, c, d)));
    } else i = null != r ? r : P(a, e.id, n);
    return i;
}
function U(e) {
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
