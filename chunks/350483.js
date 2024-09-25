t(47120);
var i = t(735250);
t(470079);
var o = t(392711),
    l = t.n(o),
    E = t(481060),
    r = t(718528),
    a = t(905423),
    u = t(984933),
    d = t(914010),
    s = t(771845),
    _ = t(55589),
    c = t(585483),
    A = t(475468),
    C = t(981631),
    S = t(490897);
function I(e, n) {
    var t, i;
    return [
        {
            resourceId: e,
            type: S.W.GUILD_EVENT
        },
        ...((t = e),
        (i = n),
        t === C.ME
            ? _.Z.getPrivateChannelIds()
            : (0, r.Z)(t, {
                  withVoiceChannels: i,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
n.Z = l().throttle(function (e, n) {
    var o, l;
    let r,
        { channelPredicate: _ = () => !0, guildPredicate: S = () => !0, guildFeaturePredicate: T = () => !1, ensureChatIsVisible: L = () => !1, withVoiceChannels: N = !1 } = n,
        O = null !== (o = a.Z.getState().guildId) && void 0 !== o ? o : C.ME,
        D = a.Z.getState().channelId,
        g = (function (e, n) {
            let t = [C.ME, ...s.ZP.getFlattenedGuildIds()],
                i = t.indexOf(e);
            return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
        })(O, e),
        R = e > 0 ? 0 : g.length - 1,
        f = I(O, N),
        h = f.indexOf(D) + e;
    for (; null != O && '' !== O; ) {
        if (((r = f[h]), S(O)))
            for (; null != r && '' !== r; ) {
                if ('string' == typeof r) {
                    if (_(O, r)) return (0, A.K)(O, r, !1, L(O, r));
                } else if ('object' == typeof r && T(r.resourceId, r.type))
                    return (
                        O !== d.Z.getGuildId() && (0, A.K)(O, null === (l = u.ZP.getDefaultChannel(O)) || void 0 === l ? void 0 : l.id),
                        (0, E.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([t.e('53115'), t.e('22347'), t.e('56236'), t.e('39273')]).then(t.bind(t, 17671));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: O
                                });
                        })
                    );
                (h += e), (r = f[h]);
            }
        if (((R += e), null == (O = g[R]) || '' === O)) break;
        (f = I(O, N)), (h = e < 0 ? f.length - 1 : 0);
    }
    c.S.dispatch(C.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, C.aZC);
