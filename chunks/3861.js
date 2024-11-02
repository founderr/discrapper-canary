var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(112724),
    o = n(613611),
    c = n(351248),
    u = n(600164),
    d = n(585483),
    h = n(340295),
    m = n(171277),
    p = n(677845),
    f = n(430371),
    g = n(236564),
    C = n(981631),
    x = n(354459),
    v = n(396602);
t.Z = (0, s.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: r, participantsVersion: s, layout: _, onSelectParticipant: I, onContextMenuParticipant: E, onFullscreenParticipant: b, channel: S, hasConnectPermission: Z, className: T, inCall: N, showParticipants: j = !0, paused: A = !1, width: y, height: P, idle: M, mode: R, popoutWindow: L, awaitingRemoteSessionInfo: k, callContainerDimensions: O } = e;
    l.useEffect(() => {
        d.S.dispatch(C.CkL.REMEASURE_TARGET);
    }, [y, P, O.width, O.height]);
    let w = l.useMemo(() => n.filter((e) => e.type !== x.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, s]);
    if ((null == k ? void 0 : k.channelId) === S.id) return (0, i.jsx)(m.Z, { height: P });
    if ((null == S ? void 0 : S.isGuildVocal()) && !N)
        return (0, i.jsx)(h.Z, {
            channel: S,
            participants: t,
            hasConnectPermission: Z
        });
    if (R === C.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: S.guild_id,
            width: y,
            className: v.voiceCallWrapper,
            participants: t,
            onContextMenu: E
        });
    if (((n = N ? n : t), null == r))
        return 0 === n.length
            ? (0, i.jsx)(g.Z, {
                  className: a()(v.videoGrid, v.hiddenParticipants),
                  channelId: S.id,
                  width: y
              })
            : (0, i.jsx)(u.Z, {
                  className: v.videoGridWrapper,
                  justify: u.Z.Justify.CENTER,
                  align: u.Z.Align.CENTER,
                  children: (0, i.jsx)(p.Z, {
                      channel: S,
                      className: v.videoGrid,
                      participants: w,
                      totalNumberOfParticipants: t.length,
                      onClick: I,
                      onDoubleClick: b,
                      onContextMenu: E,
                      paused: A,
                      inCall: N
                  })
              });
    return (0, i.jsx)(f.Z, {
        onFullscreenParticipant: b,
        onContextMenuParticipant: E,
        onSelectParticipant: I,
        selectedParticipant: r,
        filteredParticipants: w,
        participants: t,
        popoutWindow: L,
        className: T,
        idle: M,
        height: P,
        width: y,
        layout: _,
        inCall: N,
        channel: S,
        showParticipants: j
    });
});
