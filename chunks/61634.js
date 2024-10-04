n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(470079),
    l = n(392711),
    r = n.n(l),
    a = n(106351),
    s = n(442837),
    o = n(846519),
    c = n(941028),
    u = n(595519),
    d = n(317381),
    h = n(470883),
    p = n(750881),
    f = n(554747),
    _ = n(146085),
    m = n(427679),
    g = n(131704),
    C = n(199902),
    I = n(314897),
    E = n(592125),
    N = n(650774),
    S = n(430824),
    x = n(496675),
    v = n(699516),
    Z = n(944486),
    T = n(9156),
    b = n(979651),
    A = n(709054),
    M = n(510601),
    R = n(901621),
    L = n(981631);
let y = [];
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.Z;
    return null != e && e.type !== a.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(L.S7T.VIEW_CHANNEL, e);
}
function O(e) {
    var t;
    let n = (0, s.e7)([T.ZP], () => T.ZP.isMuted(e)),
        l = (0, f.k5)(e);
    !(function (e, t) {
        let n = i.useRef(new Set()),
            l = i.useRef(new o.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = M.ZP.useExperiment({ location: 'useGuildMediaState' }, { autoTrackExposure: !1 }),
            u = (0, s.e7)([N.Z], () => {
                let t = N.Z.getMemberCount(e);
                return null == t || t > 1000;
            }),
            d = (0, s.cj)(
                [b.Z],
                () => {
                    if (!a || t || u) return y;
                    let n = Object.keys(b.Z.getVoiceStates(e));
                    return 0 === n.length ? y : n.slice(0, 50);
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
    let a = (0, R.Z)(e),
        L = (0, p.ci)('use-guild-media-state'),
        O = (0, s.Wu)([d.ZP, v.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return L ? t.filter((e) => !(0, h.Wu)([...e.userIds], v.Z.getBlockedIDs())) : t;
        }),
        j = (0, u.NX)(null === (t = O[0]) || void 0 === t ? void 0 : t.channelId),
        {
            guildHasVoice: D,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: U
        } = (0, s.cj)(
            [Z.Z, b.Z, S.Z, x.Z, E.Z],
            () => {
                var t;
                let i = Z.Z.getVoiceChannelId(),
                    l = null === (t = S.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = b.Z.getUsersWithVideo(e),
                    a = L ? (0, h.DX)(b.Z.getVoiceStates(e)) : b.Z.getVoiceStates(e),
                    s = (() => {
                        if (n) return !1;
                        for (let e in a) if (P(E.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, x.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: s,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let e of r) if (P(E.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, x.Z)) return !0;
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && b.Z.hasVideo(i)
                };
            },
            [L, e, n]
        ),
        G = I.default.getId();
    return (0, s.cj)(
        [Z.Z, E.Z, d.ZP, m.Z, C.Z, x.Z],
        () => {
            var t, i, r;
            let s = Z.Z.getVoiceChannelId(),
                o = (null === (t = E.Z.getChannel(s)) || void 0 === t ? void 0 : t.guild_id) === e,
                c = !1,
                u = !1,
                p = !1,
                f = !1,
                I = !1,
                N = !1;
            if (!o && n)
                return {
                    audio: c,
                    video: f,
                    screenshare: I,
                    liveStage: p,
                    activeEvent: u,
                    activity: N,
                    gaming: a,
                    isCurrentUserConnected: !1
                };
            let S = A.default.keys(m.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = E.Z.getChannel(e);
                    return null != t && x.Z.can(_.gl, t);
                }),
                v = o && null !== (r = null === (i = E.Z.getChannel(s)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== r && r,
                T = !!o && null != C.Z.getActiveStreamForUser(G, e),
                b = (L ? (0, h.aK)(C.Z.getAllApplicationStreams()) : C.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                M = o && U,
                R = (() => {
                    if (j) return O.length > 0;
                    for (let e of O) {
                        let t = E.Z.getChannel(e.channelId);
                        if (null != t && (0, g.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                y = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                o ? ((c = !0), (u = (null == l ? void 0 : l.channel_id) === s), (p = v), (f = M), (I = T), (N = y)) : ((c = D), (u = null != l), (p = S), (f = w), (I = b), (N = R)),
                {
                    audio: c,
                    video: f,
                    screenshare: I,
                    liveStage: p,
                    activeEvent: u,
                    activity: N,
                    gaming: a,
                    isCurrentUserConnected: o || v
                }
            );
        },
        [e, n, L, U, a, G, j, O, l, D, w]
    );
}
