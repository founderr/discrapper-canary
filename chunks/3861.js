var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
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
    g = n(354459),
    C = n(396602);
t.Z = (0, r.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: a, participantsVersion: r, layout: I, onSelectParticipant: T, onContextMenuParticipant: x, onFullscreenParticipant: v, channel: S, hasConnectPermission: N, className: A, inCall: Z, showParticipants: M = !0, paused: b = !1, width: R, height: L, idle: j, mode: P, popoutWindow: O, awaitingRemoteSessionInfo: y, callContainerDimensions: D } = e;
    s.useEffect(() => {
        d.S.dispatch(E.CkL.REMEASURE_TARGET);
    }, [R, L, D.width, D.height]);
    let U = s.useMemo(() => n.filter((e) => e.type !== g.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, r]);
    if ((null == y ? void 0 : y.channelId) === S.id) return (0, i.jsx)(p.Z, { height: L });
    if ((null == S ? void 0 : S.isGuildVocal()) && !Z)
        return (0, i.jsx)(h.Z, {
            channel: S,
            participants: t,
            hasConnectPermission: N
        });
    if (P === E.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: S.guild_id,
            width: R,
            className: C.voiceCallWrapper,
            participants: t,
            onContextMenu: x
        });
    if (((n = Z ? n : t), null == a))
        return 0 === n.length
            ? (0, i.jsx)(f.Z, {
                  className: l()(C.videoGrid, C.hiddenParticipants),
                  channelId: S.id,
                  width: R
              })
            : (0, i.jsx)(u.Z, {
                  className: C.videoGridWrapper,
                  justify: u.Z.Justify.CENTER,
                  align: u.Z.Align.CENTER,
                  children: (0, i.jsx)(m.Z, {
                      channel: S,
                      className: C.videoGrid,
                      participants: U,
                      totalNumberOfParticipants: t.length,
                      onClick: T,
                      onDoubleClick: v,
                      onContextMenu: x,
                      paused: b,
                      inCall: Z
                  })
              });
    return (0, i.jsx)(_.Z, {
        onFullscreenParticipant: v,
        onContextMenuParticipant: x,
        onSelectParticipant: T,
        selectedParticipant: a,
        filteredParticipants: U,
        participants: t,
        popoutWindow: O,
        className: A,
        idle: j,
        height: L,
        width: R,
        layout: I,
        inCall: Z,
        channel: S,
        showParticipants: M
    });
});
