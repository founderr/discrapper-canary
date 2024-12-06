n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(106351),
    l = n(442837),
    r = n(595519),
    o = n(317381),
    a = n(470883),
    s = n(750881),
    c = n(554747),
    u = n(146085),
    d = n(427679),
    h = n(131704),
    p = n(199902),
    m = n(314897),
    f = n(592125),
    g = n(430824),
    C = n(496675),
    _ = n(699516),
    v = n(944486),
    x = n(9156),
    I = n(979651),
    b = n(709054),
    S = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Z;
    return null != e && e.type !== i.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.S7T.VIEW_CHANNEL, e);
}
function Z(e) {
    var t;
    let n = (0, l.e7)([x.ZP], () => x.ZP.isMuted(e)),
        i = (0, c.k5)(e),
        { enabled: S } = (0, s.bA)('use-guild-media-state'),
        Z = (0, l.Wu)([o.ZP, _.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return S ? t.filter((e) => !(0, a.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        N = (0, r.NX)(null === (t = Z[0]) || void 0 === t ? void 0 : t.channelId),
        {
            guildHasVoice: y,
            guildHasVideo: T,
            selectedVoiceChannelHasVideo: A
        } = (0, l.cj)(
            [v.Z, I.Z, g.Z, C.Z, f.Z],
            () => {
                var t;
                let i = v.Z.getVoiceChannelId(),
                    l = null === (t = g.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = I.Z.getUsersWithVideo(e),
                    o = S ? (0, a.DX)(I.Z.getVoiceStates(e)) : I.Z.getVoiceStates(e),
                    s = (() => {
                        if (n) return !1;
                        for (let e in o) if (E(f.Z.getBasicChannel(o[e].channelId), null != l ? l : void 0, C.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: s,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (E(f.Z.getBasicChannel(null === (e = o[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, C.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && I.Z.hasVideo(i)
                };
            },
            [S, e, n]
        ),
        j = m.default.getId();
    return (0, l.cj)(
        [v.Z, f.Z, o.ZP, d.Z, p.Z, C.Z],
        () => {
            var t, l, r;
            let s = v.Z.getVoiceChannelId(),
                c = (null === (t = f.Z.getChannel(s)) || void 0 === t ? void 0 : t.guild_id) === e,
                m = !1,
                g = !1,
                _ = !1,
                x = !1,
                I = !1,
                E = !1;
            if (!c && n)
                return {
                    audio: m,
                    video: x,
                    screenshare: I,
                    liveStage: _,
                    activeEvent: g,
                    activity: E,
                    isCurrentUserConnected: !1
                };
            let P = b.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = f.Z.getChannel(e);
                    return null != t && C.Z.can(u.gl, t);
                }),
                R = c && null !== (r = null === (l = f.Z.getChannel(s)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== r && r,
                M = !!c && null != p.Z.getActiveStreamForUser(j, e),
                L = (S ? (0, a.aK)(p.Z.getAllApplicationStreams()) : p.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                w = c && A,
                D = (() => {
                    if (N) return Z.length > 0;
                    for (let e of Z) {
                        let t = f.Z.getChannel(e.channelId);
                        if (null != t && (0, h.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                O = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                c ? ((m = !0), (g = (null == i ? void 0 : i.channel_id) === s), (_ = R), (x = w), (I = M), (E = O)) : ((m = y), (g = null != i), (_ = P), (x = T), (I = L), (E = D)),
                {
                    audio: m,
                    video: x,
                    screenshare: I,
                    liveStage: _,
                    activeEvent: g,
                    activity: E,
                    isCurrentUserConnected: c || R
                }
            );
        },
        [e, n, S, A, j, N, Z, i, y, T]
    );
}
