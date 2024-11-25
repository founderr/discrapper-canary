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
    m = n(554747),
    f = n(146085),
    g = n(427679),
    C = n(131704),
    _ = n(199902),
    v = n(314897),
    x = n(592125),
    I = n(650774),
    b = n(430824),
    E = n(496675),
    S = n(699516),
    Z = n(944486),
    N = n(9156),
    y = n(979651),
    T = n(709054),
    A = n(510601),
    P = n(901621),
    j = n(981631);
let R = [];
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Z;
    return null != e && e.type !== a.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(j.S7T.VIEW_CHANNEL, e);
}
function L(e) {
    var t;
    let n = (0, o.e7)([N.ZP], () => N.ZP.isMuted(e)),
        l = (0, m.k5)(e);
    !(function (e, t) {
        let n = i.useRef(new Set()),
            l = i.useRef(new s.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = A.ZP.useExperiment({ location: 'useGuildMediaState' }, { autoTrackExposure: !1 }),
            u = (0, o.e7)([I.Z], () => {
                let t = I.Z.getMemberCount(e);
                return null == t || t > 1000;
            }),
            d = (0, o.cj)(
                [y.Z],
                () => {
                    if (!a || t || u) return R;
                    let n = Object.keys(y.Z.getVoiceStates(e));
                    return 0 === n.length ? R : n.slice(0, 50);
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
        { enabled: j } = (0, p.bA)('use-guild-media-state'),
        L = (0, o.Wu)([d.ZP, S.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return j ? t.filter((e) => !(0, h.BA)([...e.userIds], S.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        w = (0, u.NX)(null === (t = L[0]) || void 0 === t ? void 0 : t.channelId),
        {
            guildHasVoice: D,
            guildHasVideo: O,
            selectedVoiceChannelHasVideo: k
        } = (0, o.cj)(
            [Z.Z, y.Z, b.Z, E.Z, x.Z],
            () => {
                var t;
                let i = Z.Z.getVoiceChannelId(),
                    l = null === (t = b.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = y.Z.getUsersWithVideo(e),
                    a = j ? (0, h.DX)(y.Z.getVoiceStates(e)) : y.Z.getVoiceStates(e),
                    o = (() => {
                        if (n) return !1;
                        for (let e in a) if (M(x.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, E.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: o,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (M(x.Z.getBasicChannel(null === (e = a[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, E.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && y.Z.hasVideo(i)
                };
            },
            [j, e, n]
        ),
        U = v.default.getId();
    return (0, o.cj)(
        [Z.Z, x.Z, d.ZP, g.Z, _.Z, E.Z],
        () => {
            var t, i, r;
            let o = Z.Z.getVoiceChannelId(),
                s = (null === (t = x.Z.getChannel(o)) || void 0 === t ? void 0 : t.guild_id) === e,
                c = !1,
                u = !1,
                p = !1,
                m = !1,
                v = !1,
                I = !1;
            if (!s && n)
                return {
                    audio: c,
                    video: m,
                    screenshare: v,
                    liveStage: p,
                    activeEvent: u,
                    activity: I,
                    gaming: a,
                    isCurrentUserConnected: !1
                };
            let b = T.default.keys(g.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = x.Z.getChannel(e);
                    return null != t && E.Z.can(f.gl, t);
                }),
                S = s && null !== (r = null === (i = x.Z.getChannel(o)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== r && r,
                N = !!s && null != _.Z.getActiveStreamForUser(U, e),
                y = (j ? (0, h.aK)(_.Z.getAllApplicationStreams()) : _.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                A = s && k,
                P = (() => {
                    if (w) return L.length > 0;
                    for (let e of L) {
                        let t = x.Z.getChannel(e.channelId);
                        if (null != t && (0, C.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                R = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                s ? ((c = !0), (u = (null == l ? void 0 : l.channel_id) === o), (p = S), (m = A), (v = N), (I = R)) : ((c = D), (u = null != l), (p = b), (m = O), (v = y), (I = P)),
                {
                    audio: c,
                    video: m,
                    screenshare: v,
                    liveStage: p,
                    activeEvent: u,
                    activity: I,
                    gaming: a,
                    isCurrentUserConnected: s || S
                }
            );
        },
        [e, n, j, k, a, U, w, L, l, D, O]
    );
}
