var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(557135),
    d = n(590293),
    u = n(66999),
    h = n(665906),
    p = n(496675),
    m = n(979651),
    f = n(585483),
    g = n(665149),
    C = n(981631),
    x = n(388032);
t.Z = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.Z)(),
        r = (0, s.e7)([m.Z], () => m.Z.isInChannel(t.id)),
        _ = (0, s.e7)([m.Z], () => !a().isEmpty(m.Z.getVoiceStatesForChannel(t.id))),
        v = (0, s.e7)([p.Z], () => p.Z.can(C.Plq.CONNECT, t)),
        { needSubscriptionToAccess: I } = (0, u.Z)(t.id),
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
        v &&
        E &&
        t.isVocalThread())
        ? (0, i.jsx)(g.ZP.Icon, {
              icon: o.PhoneCallIcon,
              onClick: b,
              tooltip: _ ? x.intl.string(x.t.fdEeb2) : x.intl.string(x.t.focH1t)
          })
        : null;
});
