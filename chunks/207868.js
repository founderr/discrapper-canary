var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(557135),
    u = n(590293),
    d = n(66999),
    h = n(665906),
    m = n(496675),
    p = n(979651),
    f = n(585483),
    g = n(665149),
    C = n(981631),
    x = n(388032);
t.Z = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        r = (0, a.e7)([p.Z], () => p.Z.isInChannel(t.id)),
        v = (0, a.e7)([p.Z], () => !s().isEmpty(p.Z.getVoiceStatesForChannel(t.id))),
        _ = (0, a.e7)([m.Z], () => m.Z.can(C.Plq.CONNECT, t)),
        { needSubscriptionToAccess: I } = (0, d.Z)(t.id),
        E = (0, h.$R)(t),
        b = l.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: r,
                needSubscriptionToAccess: I,
                locked: !1
            });
        }, [t, r, I]);
    return (l.useEffect(
        () => (
            f.S.subscribe(C.CkL.CALL_START, b),
            () => {
                f.S.unsubscribe(C.CkL.CALL_START, b);
            }
        ),
        [b]
    ),
    h.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: '63250c_1'
        },
        { autoTrackExposure: !1 }
    ).enabled &&
        !n &&
        !r &&
        _ &&
        E &&
        t.isVocalThread())
        ? (0, i.jsx)(g.ZP.Icon, {
              icon: o.PhoneCallIcon,
              onClick: b,
              tooltip: v ? x.intl.string(x.t.fdEeb2) : x.intl.string(x.t.focH1t)
          })
        : null;
});
