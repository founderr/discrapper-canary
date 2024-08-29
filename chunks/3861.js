var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(112724),
    o = n(613611),
    c = n(351248),
    u = n(600164),
    d = n(585483),
    h = n(340295),
    p = n(171277),
    m = n(677845),
    _ = n(430371),
    f = n(236564),
    E = n(981631),
    C = n(354459),
    g = n(201614);
t.Z = (0, r.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: s, participantsVersion: r, layout: I, onSelectParticipant: x, onContextMenuParticipant: T, onFullscreenParticipant: N, channel: S, hasConnectPermission: v, className: Z, inCall: A, showParticipants: M = !0, paused: b = !1, width: R, height: L, idle: j, mode: O, popoutWindow: P, awaitingRemoteSessionInfo: y, callContainerDimensions: D } = e;
    a.useEffect(() => {
        d.S.dispatch(E.CkL.REMEASURE_TARGET);
    }, [R, L, D.width, D.height]);
    let k = a.useMemo(() => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, r]);
    if ((null == y ? void 0 : y.channelId) === S.id) return (0, i.jsx)(p.Z, { height: L });
    if ((null == S ? void 0 : S.isGuildVocal()) && !A)
        return (0, i.jsx)(h.Z, {
            channel: S,
            participants: t,
            hasConnectPermission: v
        });
    if (O === E.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: S.guild_id,
            width: R,
            className: g.voiceCallWrapper,
            participants: t,
            onContextMenu: T
        });
    if (((n = A ? n : t), null == s))
        return 0 === n.length
            ? (0, i.jsx)(f.Z, {
                  className: l()(g.videoGrid, g.hiddenParticipants),
                  channelId: S.id,
                  width: R
              })
            : (0, i.jsx)(u.Z, {
                  className: g.videoGridWrapper,
                  justify: u.Z.Justify.CENTER,
                  align: u.Z.Align.CENTER,
                  children: (0, i.jsx)(m.Z, {
                      channel: S,
                      className: g.videoGrid,
                      participants: k,
                      totalNumberOfParticipants: t.length,
                      onClick: x,
                      onDoubleClick: N,
                      onContextMenu: T,
                      paused: b,
                      inCall: A
                  })
              });
    return (0, i.jsx)(_.Z, {
        onFullscreenParticipant: N,
        onContextMenuParticipant: T,
        onSelectParticipant: x,
        selectedParticipant: s,
        filteredParticipants: k,
        participants: t,
        popoutWindow: P,
        className: Z,
        idle: j,
        height: L,
        width: R,
        layout: I,
        inCall: A,
        channel: S,
        showParticipants: M
    });
});
