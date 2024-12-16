n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(106351),
    l = n(442837),
    r = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(470883),
    c = n(750881),
    u = n(554747),
    d = n(146085),
    h = n(427679),
    p = n(131704),
    m = n(199902),
    f = n(314897),
    g = n(592125),
    C = n(430824),
    v = n(496675),
    _ = n(699516),
    x = n(944486),
    I = n(9156),
    b = n(979651),
    E = n(709054),
    S = n(981631);
function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Z;
    return null != e && e.type !== i.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.S7T.VIEW_CHANNEL, e);
}
function N(e) {
    var t;
    let n = (0, l.e7)([I.ZP], () => I.ZP.isMuted(e)),
        i = (0, u.k5)(e),
        { enabled: S } = (0, c.bA)('use-guild-media-state'),
        N = (0, l.Wu)([o.ZP, _.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return S ? t.filter((e) => !(0, s.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        y = (0, a.p)(null === (t = N[0]) || void 0 === t ? void 0 : t.location),
        T = (0, r.NX)(y),
        {
            guildHasVoice: j,
            guildHasVideo: A,
            selectedVoiceChannelHasVideo: P
        } = (0, l.cj)(
            [x.Z, b.Z, C.Z, v.Z, g.Z],
            () => {
                var t;
                let i = x.Z.getVoiceChannelId(),
                    l = null === (t = C.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = b.Z.getUsersWithVideo(e),
                    o = S ? (0, s.DX)(b.Z.getVoiceStates(e)) : b.Z.getVoiceStates(e),
                    a = (() => {
                        if (n) return !1;
                        for (let e in o) if (Z(g.Z.getBasicChannel(o[e].channelId), null != l ? l : void 0, v.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: a,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (Z(g.Z.getBasicChannel(null === (e = o[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, v.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && b.Z.hasVideo(i)
                };
            },
            [S, e, n]
        ),
        R = f.default.getId();
    return (0, l.cj)(
        [x.Z, g.Z, o.ZP, h.Z, m.Z, v.Z],
        () => {
            var t, l, r;
            let c = x.Z.getVoiceChannelId(),
                u = (null === (t = g.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
                f = !1,
                C = !1,
                _ = !1,
                I = !1,
                b = !1,
                Z = !1;
            if (!u && n)
                return {
                    audio: f,
                    video: I,
                    screenshare: b,
                    liveStage: _,
                    activeEvent: C,
                    activity: Z,
                    isCurrentUserConnected: !1
                };
            let y = E.default.keys(h.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = g.Z.getChannel(e);
                    return null != t && v.Z.can(d.gl, t);
                }),
                M = u && null !== (r = null === (l = g.Z.getChannel(c)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== r && r,
                L = !!u && null != m.Z.getActiveStreamForUser(R, e),
                w = (S ? (0, s.aK)(m.Z.getAllApplicationStreams()) : m.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = u && P,
                O = (() => {
                    if (T) return N.length > 0;
                    for (let e of N) {
                        let t = g.Z.getChannel((0, a.p)(e.location));
                        if (null != t && (0, p.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                k = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                u ? ((f = !0), (C = (null == i ? void 0 : i.channel_id) === c), (_ = M), (I = D), (b = L), (Z = k)) : ((f = j), (C = null != i), (_ = y), (I = A), (b = w), (Z = O)),
                {
                    audio: f,
                    video: I,
                    screenshare: b,
                    liveStage: _,
                    activeEvent: C,
                    activity: Z,
                    isCurrentUserConnected: u || M
                }
            );
        },
        [e, n, S, P, R, T, N, i, j, A]
    );
}
