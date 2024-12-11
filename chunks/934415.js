n.d(t, {
    EO: function () {
        return U;
    },
    LY: function () {
        return M;
    },
    Nj: function () {
        return a.Z;
    },
    a5: function () {
        return w;
    },
    c4: function () {
        return x;
    },
    g7: function () {
        return L;
    },
    jZ: function () {
        return C;
    },
    mE: function () {
        return B;
    },
    oQ: function () {
        return N;
    },
    rX: function () {
        return R;
    },
    rY: function () {
        return D;
    },
    rt: function () {
        return O;
    },
    wR: function () {
        return k;
    },
    wl: function () {
        return P;
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
    p = n(9156),
    h = n(938475),
    m = n(700785),
    g = n(709054),
    E = n(981631),
    v = n(474936),
    I = n(388032);
let { GUILD_VOICE: T, GUILD_CATEGORY: b, GUILD_STAGE_VOICE: S } = E.d4z;
function y(e, t) {
    return e === t || e === b;
}
function A(e, t, n) {
    let i = m.Hn;
    return (
        ((0, u.r8)(t) || t === b) && (i = r.IH(i, E.Plq.VIEW_CHANNEL)),
        (y(t, T) || y(t, S)) && ((i = r.IH(i, E.Plq.VIEW_CHANNEL)), (i = r.IH(i, E.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: m.Hn,
            allow: i
        }
    );
}
function N(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = [];
    if (n.length > 0 || a) {
        var o, l, c;
        let n;
        s.push(
            ((o = e),
            (l = t),
            (c = i.BN.ROLE),
            (n = m.Hn),
            ((0, u.r8)(l) || l === b) && (n = r.IH(n, E.Plq.VIEW_CHANNEL)),
            y(l, T) && ((n = r.IH(n, E.Plq.VIEW_CHANNEL)), (n = r.IH(n, E.Plq.CONNECT))),
            {
                id: o,
                type: c,
                allow: m.Hn,
                deny: n
            })
        );
    }
    return (
        n.forEach((e) => {
            s.push(A(e, t, i.BN.ROLE));
        }),
        s
    );
}
function C(e, t) {
    return A(e, t, i.BN.MEMBER);
}
function R(e, t) {
    return A(e, t, i.BN.ROLE);
}
function O(e) {
    return [
        {
            id: e,
            type: i.BN.ROLE,
            deny: E.Plq.SEND_MESSAGES,
            allow: m.Hn
        }
    ];
}
function D(e, t, n) {
    var r, i;
    let a = e.getGuildId(),
        o = n.getGuild(a),
        l = null !== (r = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== r ? r : -1,
        u = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
        c = h.ZP.countVoiceStatesForChannel(e.id),
        d = h.ZP.getVoiceStatesForChannel(e),
        _ = f.Z.can(E.Plq.MOVE_MEMBERS, e) && f.Z.can(E.Plq.CONNECT, e),
        p = !1;
    p = e.type === S ? null != a && (t.hasVideo(e.id) || (0, s.a)(d)) && u > 0 && c >= u : null != a && t.hasVideo(e.id) && l > 0 && c >= l + (_ ? 1 : 0);
    let m = e.userLimit > 0 && c >= e.userLimit;
    return p || (m && !_);
}
function L(e, t) {
    return t.isGuildStageVoice() ? E.epw : null == e ? E.eWB : Math.max(e.hasFeature(E.oNc.VIP_REGIONS) ? v.HO[E.Eu4.TIER_3].limits.bitrate : E.eWB, v.HO[e.premiumTier].limits.bitrate);
}
function x(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
            a = [];
        return (
            t.forEach((e) => {
                if (e.id === r || e.id === n || !p.ZP.isChannelOptedIn(e.guild_id, e.id)) return;
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
function w(e) {
    let { type: t } = e;
    switch (t) {
        case E.d4z.DM:
            return I.intl.string(I.t.jN2DfX);
        case E.d4z.GROUP_DM:
            return I.intl.string(I.t['e5y+go']);
        case E.d4z.GUILD_TEXT:
            return I.intl.string(I.t.Pnajj4);
        case E.d4z.GUILD_FORUM:
            return I.intl.string(I.t.GbryDQ);
        case E.d4z.GUILD_MEDIA:
            return I.intl.string(I.t.seKITE);
        case E.d4z.GUILD_VOICE:
            return I.intl.string(I.t.BVZqJi);
        case E.d4z.GUILD_STAGE_VOICE:
            return I.intl.string(I.t.EErMzM);
        case E.d4z.GUILD_ANNOUNCEMENT:
            return I.intl.string(I.t.l1dkSE);
        case E.d4z.GUILD_STORE:
            return I.intl.string(I.t['P1/Erq']);
        case E.d4z.GUILD_CATEGORY:
            return I.intl.string(I.t.vHCZws);
        default:
            return null;
    }
}
function P(e) {
    if (null == e) return 'text';
    let t = e.isMediaChannel();
    if (e.type === E.d4z.GUILD_VOICE) return f.Z.can(E.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === E.d4z.GUILD_STAGE_VOICE) return f.Z.can(E.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (u.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === E.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
    else if (e.type === E.d4z.GUILD_MEDIA) return 'media';
    else if (u.sR.has(e.type)) return 'text';
}
function M(e) {
    let t;
    let n = c.Z.getChannel(_.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === E.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = d.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return E.Z5c.CHANNEL(e, t);
}
function k(e, t, n, r) {
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(E.Z5c.CHANNEL(e, t, n))
        .concat(null == r ? '' : '?summaryId='.concat(r));
}
function U(e, t, n, r) {
    let i;
    let a = e.getGuildId(),
        s = (0, o.BC)(a, t);
    if (null != t && s) {
        var l, u, c, d;
        (l = a),
            (u = t.id),
            (c = e.id),
            (d = g.default.castChannelIdAsMessageId(e.id)),
            (i =
                null == l || null == u || null == c
                    ? k(l, u, d)
                    : ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(E.Z5c.CHANNEL_THREAD_VIEW(l, u, c, d)));
    } else i = null != r ? r : k(a, e.id, n);
    return i;
}
function B(e) {
    if (null == e) return null;
    switch (e.type) {
        case E.d4z.GUILD_ANNOUNCEMENT:
        case E.d4z.GUILD_TEXT:
        case E.d4z.GUILD_FORUM:
        case E.d4z.GUILD_MEDIA:
            return E.ZY5.GUILD_CHANNEL;
        case E.d4z.GROUP_DM:
        case E.d4z.DM:
            return E.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
