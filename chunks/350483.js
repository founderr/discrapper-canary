t(47120);
var l = t(200651);
t(192379);
var i = t(392711),
    o = t.n(i),
    a = t(481060),
    u = t(718528),
    r = t(905423),
    d = t(984933),
    c = t(914010),
    s = t(771845),
    E = t(55589),
    C = t(585483),
    _ = t(475468),
    h = t(981631),
    S = t(490897);
function I(e, n) {
    var t, l;
    return [
        {
            resourceId: e,
            type: S.W.GUILD_EVENT
        },
        ...((t = e),
        (l = n),
        t === h.ME
            ? E.Z.getPrivateChannelIds()
            : (0, u.Z)(t, {
                  withVoiceChannels: l,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
n.Z = o().throttle(function (e, n) {
    var i, o;
    let u,
        { channelPredicate: E = () => !0, guildPredicate: S = () => !0, guildFeaturePredicate: A = () => !1, ensureChatIsVisible: T = () => !1, withVoiceChannels: f = !1 } = n,
        L = null !== (i = r.Z.getState().guildId) && void 0 !== i ? i : h.ME,
        g = r.Z.getState().channelId,
        Z = (function (e, n) {
            let t = [h.ME, ...s.ZP.getFlattenedGuildIds()],
                l = t.indexOf(e);
            return n > 0 ? t.slice(l).concat(t.slice(0, l), e) : (t.splice(l, 0, e), t.slice(l + 1).concat(t.slice(0, l + 1)));
        })(L, e),
        p = e > 0 ? 0 : Z.length - 1,
        P = I(L, f),
        N = P.indexOf(g) + e;
    for (; null != L && '' !== L; ) {
        if (((u = P[N]), S(L)))
            for (; null != u && '' !== u; ) {
                if ('string' == typeof u) {
                    if (E(L, u)) return (0, _.K)(L, u, !1, T(L, u));
                } else if ('object' == typeof u && A(u.resourceId, u.type))
                    return (
                        L !== c.Z.getGuildId() && (0, _.K)(L, null === (o = d.ZP.getDefaultChannel(L)) || void 0 === o ? void 0 : o.id),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([t.e('18543'), t.e('22347'), t.e('56236'), t.e('25152')]).then(t.bind(t, 17671));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    guildId: L
                                });
                        })
                    );
                (N += e), (u = P[N]);
            }
        if (((p += e), null == (L = Z[p]) || '' === L)) break;
        (P = I(L, f)), (N = e < 0 ? P.length - 1 : 0);
    }
    C.S.dispatch(h.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, h.aZC);
