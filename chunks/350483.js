e(47120);
var i = e(200651);
e(192379);
var l = e(392711),
    o = e.n(l),
    r = e(481060),
    u = e(718528),
    a = e(905423),
    d = e(984933),
    E = e(914010),
    s = e(771845),
    c = e(55589),
    _ = e(585483),
    C = e(475468),
    A = e(981631),
    S = e(490897);
function I(n, t) {
    var e, i;
    return [
        {
            resourceId: n,
            type: S.W.GUILD_EVENT
        },
        ...((e = n),
        (i = t),
        e === A.ME
            ? c.Z.getPrivateChannelIds()
            : (0, u.Z)(e, {
                  withVoiceChannels: i,
                  withCurrentVoiceChannel: !0
              }).map((n) => n.id))
    ];
}
t.Z = o().throttle(function (n, t) {
    var l, o;
    let u,
        { channelPredicate: c = () => !0, guildPredicate: S = () => !0, guildFeaturePredicate: T = () => !1, ensureChatIsVisible: L = () => !1, withVoiceChannels: h = !1 } = t,
        g = null !== (l = a.Z.getState().guildId) && void 0 !== l ? l : A.ME,
        f = a.Z.getState().channelId,
        p = (function (n, t) {
            let e = [A.ME, ...s.ZP.getFlattenedGuildIds()],
                i = e.indexOf(n);
            return t > 0 ? e.slice(i).concat(e.slice(0, i), n) : (e.splice(i, 0, n), e.slice(i + 1).concat(e.slice(0, i + 1)));
        })(g, n),
        O = n > 0 ? 0 : p.length - 1,
        N = I(g, h),
        b = N.indexOf(f) + n;
    for (; null != g && '' !== g; ) {
        if (((u = N[b]), S(g)))
            for (; null != u && '' !== u; ) {
                if ('string' == typeof u) {
                    if (c(g, u)) return (0, C.K)(g, u, !1, L(g, u));
                } else if ('object' == typeof u && T(u.resourceId, u.type))
                    return (
                        g !== E.Z.getGuildId() && (0, C.K)(g, null === (o = d.ZP.getDefaultChannel(g)) || void 0 === o ? void 0 : o.id),
                        (0, r.openModalLazy)(async () => {
                            let { default: n } = await Promise.all([e.e('18543'), e.e('22347'), e.e('56236'), e.e('76351')]).then(e.bind(e, 17671));
                            return (t) =>
                                (0, i.jsx)(n, {
                                    ...t,
                                    guildId: g
                                });
                        })
                    );
                (b += n), (u = N[b]);
            }
        if (((O += n), null == (g = p[O]) || '' === g)) break;
        (N = I(g, h)), (b = n < 0 ? N.length - 1 : 0);
    }
    _.S.dispatch(A.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, A.aZC);
