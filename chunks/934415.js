r.d(n, {
    EO: function () {
        return H;
    },
    LY: function () {
        return F;
    },
    Nj: function () {
        return u.Z;
    },
    a5: function () {
        return G;
    },
    c4: function () {
        return B;
    },
    g7: function () {
        return k;
    },
    jZ: function () {
        return x;
    },
    mE: function () {
        return Y;
    },
    oQ: function () {
        return L;
    },
    rX: function () {
        return w;
    },
    rY: function () {
        return M;
    },
    rt: function () {
        return P;
    },
    wR: function () {
        return V;
    },
    wl: function () {
        return Z;
    }
});
var i = r(411104);
var a = r(653041);
var s = r(47120);
var o = r(149765),
    l = r(911969),
    u = r(90463),
    c = r(968358),
    d = r(874748),
    f = r(590415),
    _ = r(131704),
    h = r(592125),
    p = r(984933),
    m = r(496675),
    g = r(944486),
    E = r(9156),
    v = r(938475),
    I = r(700785),
    T = r(709054),
    b = r(981631),
    y = r(474936),
    S = r(388032);
let { GUILD_VOICE: A, GUILD_CATEGORY: N, GUILD_STAGE_VOICE: C } = b.d4z;
function R(e, n) {
    return e === n || e === N;
}
function O(e, n, r) {
    let i = I.Hn;
    return (
        ((0, _.r8)(n) || n === N) && (i = o.IH(i, b.Plq.VIEW_CHANNEL)),
        R(n, A) && ((i = o.IH(i, b.Plq.VIEW_CHANNEL)), (i = o.IH(i, b.Plq.CONNECT))),
        {
            id: e,
            type: r,
            allow: I.Hn,
            deny: i
        }
    );
}
function D(e, n, r) {
    let i = I.Hn;
    return (
        ((0, _.r8)(n) || n === N) && (i = o.IH(i, b.Plq.VIEW_CHANNEL)),
        (R(n, A) || R(n, C)) && ((i = o.IH(i, b.Plq.VIEW_CHANNEL)), (i = o.IH(i, b.Plq.CONNECT))),
        {
            id: e,
            type: r,
            deny: I.Hn,
            allow: i
        }
    );
}
function L(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [];
    return (
        (r.length > 0 || i) && a.push(O(e, n, l.BN.ROLE)),
        r.forEach((e) => {
            a.push(D(e, n, l.BN.ROLE));
        }),
        a
    );
}
function x(e, n) {
    return D(e, n, l.BN.MEMBER);
}
function w(e, n) {
    return D(e, n, l.BN.ROLE);
}
function P(e) {
    return [
        {
            id: e,
            type: l.BN.ROLE,
            deny: b.Plq.SEND_MESSAGES,
            allow: I.Hn
        }
    ];
}
function M(e, n, r) {
    var i, a;
    let s = e.getGuildId(),
        o = r.getGuild(s),
        l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
        u = null !== (a = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== a ? a : -1,
        d = v.ZP.countVoiceStatesForChannel(e.id),
        f = v.ZP.getVoiceStatesForChannel(e),
        _ = m.Z.can(b.Plq.MOVE_MEMBERS, e) && m.Z.can(b.Plq.CONNECT, e),
        h = !1;
    h = e.type === C ? null != s && (n.hasVideo(e.id) || (0, c.a)(f)) && u > 0 && d >= u : null != s && n.hasVideo(e.id) && l > 0 && d >= l + (_ ? 1 : 0);
    let p = e.userLimit > 0 && d >= e.userLimit;
    return h || (p && !_);
}
function k(e, n) {
    return n.isGuildStageVoice() ? b.epw : null == e ? b.eWB : Math.max(e.hasFeature(b.oNc.VIP_REGIONS) ? y.HO[b.Eu4.TIER_3].limits.bitrate : b.eWB, y.HO[e.premiumTier].limits.bitrate);
}
function U(e) {
    let { channels: n, selectedChannelId: r, selectedVoiceChannelId: i, voiceStates: a } = e,
        s = [];
    return (
        n.forEach((e) => {
            if (e.id === i || e.id === r || !E.ZP.isChannelOptedIn(e.guild_id, e.id)) return;
            let n = a[e.id];
            null != n &&
                (e.isGuildStageVoice()
                    ? n.forEach((e) => {
                          (0, f.gf)(e.voiceState) === f.xO.ON_STAGE && s.push(e);
                      })
                    : n.forEach((e) => s.push(e)));
        }),
        s
    );
}
function B(e) {
    let { channels: n, selectedChannelId: r, selectedVoiceChannelId: i, voiceStates: a } = e;
    return U({
        channels: n,
        selectedChannelId: r,
        selectedVoiceChannelId: i,
        voiceStates: a
    }).map((e) => e.user);
}
function G(e) {
    let { type: n } = e;
    switch (n) {
        case b.d4z.DM:
            return S.intl.string(S.t.jN2DfX);
        case b.d4z.GROUP_DM:
            return S.intl.string(S.t['e5y+go']);
        case b.d4z.GUILD_TEXT:
            return S.intl.string(S.t.Pnajj4);
        case b.d4z.GUILD_FORUM:
            return S.intl.string(S.t.GbryDQ);
        case b.d4z.GUILD_MEDIA:
            return S.intl.string(S.t.seKITE);
        case b.d4z.GUILD_VOICE:
            return S.intl.string(S.t.BVZqJi);
        case b.d4z.GUILD_STAGE_VOICE:
            return S.intl.string(S.t.EErMzM);
        case b.d4z.GUILD_ANNOUNCEMENT:
            return S.intl.string(S.t.l1dkSE);
        case b.d4z.GUILD_STORE:
            return S.intl.string(S.t['P1/Erq']);
        case b.d4z.GUILD_CATEGORY:
            return S.intl.string(S.t.vHCZws);
        default:
            return null;
    }
}
function Z(e) {
    if (null == e) return 'text';
    let n = e.isMediaChannel();
    if (e.type === b.d4z.GUILD_VOICE) return m.Z.can(b.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === b.d4z.GUILD_STAGE_VOICE) return m.Z.can(b.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (_.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === b.d4z.GUILD_FORUM) return n ? 'media' : 'forum';
    else if (e.type === b.d4z.GUILD_MEDIA) return 'media';
    else if (_.sR.has(e.type)) return 'text';
}
function F(e) {
    let n;
    let r = h.Z.getChannel(g.Z.getLastSelectedChannelId());
    if (null != r && r.getGuildId() === e && r.type === b.d4z.GUILD_TEXT) n = r.id;
    else {
        let r = p.ZP.getDefaultChannel(e);
        n = null != r ? r.id : null;
    }
    return b.Z5c.CHANNEL(e, n);
}
function V(e, n, r, i) {
    let a = null == i ? '' : '?summaryId='.concat(i);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(b.Z5c.CHANNEL(e, n, r))
        .concat(a);
}
function j(e, n, r, i) {
    return null == e || null == n || null == r
        ? V(e, n, i)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(b.Z5c.CHANNEL_THREAD_VIEW(e, n, r, i));
}
function H(e, n, r, i) {
    let a;
    let s = e.getGuildId(),
        o = (0, d.BC)(s, n);
    return (a = null != n && o ? j(s, n.id, e.id, T.default.castChannelIdAsMessageId(e.id)) : null != i ? i : V(s, e.id, r));
}
function Y(e) {
    if (null == e) return null;
    switch (e.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_FORUM:
        case b.d4z.GUILD_MEDIA:
            return b.ZY5.GUILD_CHANNEL;
        case b.d4z.GROUP_DM:
        case b.d4z.DM:
            return b.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
