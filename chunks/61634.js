n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(106351),
    o = n(442837),
    s = n(846519),
    c = n(941028),
    u = n(595519),
    d = n(317381),
    h = n(470883),
    p = n(750881),
    f = n(554747),
    m = n(146085),
    g = n(427679),
    C = n(131704),
    _ = n(199902),
    v = n(314897),
    x = n(592125),
    I = n(650774),
    b = n(430824),
    S = n(496675),
    Z = n(699516),
    N = n(944486),
    E = n(9156),
    y = n(979651),
    j = n(709054),
    T = n(510601),
    P = n(901621),
    A = n(981631);
let M = [];
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.Z;
    return null != e && e.type !== a.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(A.S7T.VIEW_CHANNEL, e);
}
function L(e) {
    var t;
    let n = (0, o.e7)([E.ZP], () => E.ZP.isMuted(e)),
        l = (0, f.k5)(e);
    !(function (e, t) {
        let n = i.useRef(new Set()),
            l = i.useRef(new s.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = T.ZP.useExperiment({ location: 'useGuildMediaState' }, { autoTrackExposure: !1 }),
            u = (0, o.e7)([I.Z], () => {
                let t = I.Z.getMemberCount(e);
                return null == t || t > 1000;
            }),
            d = (0, o.cj)(
                [y.Z],
                () => {
                    if (!a || t || u) return M;
                    let n = Object.keys(y.Z.getVoiceStates(e));
                    return 0 === n.length ? M : n.slice(0, 50);
                },
                [e, t, u, a]
            );
        i.useEffect(() => {
            !(function (e, t, n, i, l) {
                let a = r().random(1000, 10000);
                i.start(a, () => {
                    let i = new Set(t),
                        r = t.filter((e) => !n.has(e)),
                        a = Array.from(n).filter((e) => !i.has(e));
                    (0, c.w5)(e, a), (0, c.ym)(e, r), l();
                });
            })(e, d, n.current, l.current, () => {
                n.current = new Set(d);
            });
        }, [e, d]),
            i.useEffect(
                () => () => {
                    l.current.stop(), (0, c.w5)(e, Array.from(n.current));
                },
                [e]
            );
    })(e, n);
    let a = (0, P.Z)(e),
        { enabled: A } = (0, p.bA)('use-guild-media-state'),
        L = (0, o.Wu)([d.ZP, Z.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return A ? t.filter((e) => !(0, h.Wu)([...e.userIds], Z.Z.getBlockedIDs())) : t;
        }),
        R = (0, u.NX)(null === (t = L[0]) || void 0 === t ? void 0 : t.channelId),
        {
            guildHasVoice: D,
            guildHasVideo: O,
            selectedVoiceChannelHasVideo: k
        } = (0, o.cj)(
            [N.Z, y.Z, b.Z, S.Z, x.Z],
            () => {
                var t;
                let i = N.Z.getVoiceChannelId(),
                    l = null === (t = b.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = y.Z.getUsersWithVideo(e),
                    a = A ? (0, h.DX)(y.Z.getVoiceStates(e)) : y.Z.getVoiceStates(e),
                    o = (() => {
                        if (n) return !1;
                        for (let e in a) if (w(x.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, S.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: o,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let e of r) if (w(x.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, S.Z)) return !0;
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && y.Z.hasVideo(i)
                };
            },
            [A, e, n]
        ),
        U = v.default.getId();
    return (0, o.cj)(
        [N.Z, x.Z, d.ZP, g.Z, _.Z, S.Z],
        () => {
            var t, i, r;
            let o = N.Z.getVoiceChannelId(),
                s = (null === (t = x.Z.getChannel(o)) || void 0 === t ? void 0 : t.guild_id) === e,
                c = !1,
                u = !1,
                p = !1,
                f = !1,
                v = !1,
                I = !1;
            if (!s && n)
                return {
                    audio: c,
                    video: f,
                    screenshare: v,
                    liveStage: p,
                    activeEvent: u,
                    activity: I,
                    gaming: a,
                    isCurrentUserConnected: !1
                };
            let b = j.default.keys(g.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = x.Z.getChannel(e);
                    return null != t && S.Z.can(m.gl, t);
                }),
                Z = s && null !== (r = null === (i = x.Z.getChannel(o)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== r && r,
                E = !!s && null != _.Z.getActiveStreamForUser(U, e),
                y = (A ? (0, h.aK)(_.Z.getAllApplicationStreams()) : _.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                T = s && k,
                P = (() => {
                    if (R) return L.length > 0;
                    for (let e of L) {
                        let t = x.Z.getChannel(e.channelId);
                        if (null != t && (0, C.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                M = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                s ? ((c = !0), (u = (null == l ? void 0 : l.channel_id) === o), (p = Z), (f = T), (v = E), (I = M)) : ((c = D), (u = null != l), (p = b), (f = O), (v = y), (I = P)),
                {
                    audio: c,
                    video: f,
                    screenshare: v,
                    liveStage: p,
                    activeEvent: u,
                    activity: I,
                    gaming: a,
                    isCurrentUserConnected: s || Z
                }
            );
        },
        [e, n, A, k, a, U, R, L, l, D, O]
    );
}
