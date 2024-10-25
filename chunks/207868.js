var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(557135),
    u = n(590293),
    d = n(66999),
    h = n(665906),
    m = n(496675),
    p = n(979651),
    _ = n(585483),
    f = n(665149),
    E = n(981631),
    g = n(689938);
t.Z = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        a = (0, r.e7)([p.Z], () => p.Z.isInChannel(t.id)),
        C = (0, r.e7)([p.Z], () => !l().isEmpty(p.Z.getVoiceStatesForChannel(t.id))),
        I = (0, r.e7)([m.Z], () => m.Z.can(E.Plq.CONNECT, t)),
        { needSubscriptionToAccess: T } = (0, d.Z)(t.id),
        x = (0, h.$R)(t),
        S = s.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: a,
                needSubscriptionToAccess: T,
                locked: !1
            });
        }, [t, a, T]);
    return (s.useEffect(
        () => (
            _.S.subscribe(E.CkL.CALL_START, S),
            () => {
                _.S.unsubscribe(E.CkL.CALL_START, S);
            }
        ),
        [S]
    ),
    h.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: '63250c_1'
        },
        { autoTrackExposure: !1 }
    ).enabled &&
        !n &&
        !a &&
        I &&
        x &&
        t.isVocalThread())
        ? (0, i.jsx)(f.ZP.Icon, {
              icon: o.PhoneCallIcon,
              onClick: S,
              tooltip: C ? g.Z.Messages.JOIN_VOICE_CALL : g.Z.Messages.START_VOICE_CALL
          })
        : null;
});
