var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(112724),
    o = n(413458),
    c = n(351248),
    d = n(600164),
    u = n(585483),
    h = n(340295),
    p = n(171277),
    m = n(677845),
    f = n(430371),
    g = n(236564),
    C = n(981631),
    x = n(354459),
    v = n(396602);
t.Z = (0, s.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: a, participantsVersion: s, layout: _, onSelectParticipant: I, onContextMenuParticipant: E, onFullscreenParticipant: b, channel: N, hasConnectPermission: Z, className: T, inCall: S, showParticipants: j = !0, paused: A = !1, width: y, height: P, idle: M, mode: R, popoutWindow: L, awaitingRemoteSessionInfo: k, callContainerDimensions: O } = e;
    l.useEffect(() => {
        u.S.dispatch(C.CkL.REMEASURE_TARGET);
    }, [y, P, O.width, O.height]);
    let D = l.useMemo(() => n.filter((e) => e.type !== x.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, s]);
    if ((null == k ? void 0 : k.channelId) === N.id) return (0, i.jsx)(p.Z, { height: P });
    if ((null == N ? void 0 : N.isGuildVocal()) && !S)
        return (0, i.jsx)(h.Z, {
            channel: N,
            participants: t,
            hasConnectPermission: Z
        });
    if (R === C.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: N.guild_id,
            width: y,
            className: v.voiceCallWrapper,
            participants: t,
            onContextMenu: E
        });
    if (((n = S ? n : t), null == a))
        return 0 === n.length
            ? (0, i.jsx)(g.Z, {
                  className: r()(v.videoGrid, v.hiddenParticipants),
                  channelId: N.id,
                  width: y
              })
            : (0, i.jsx)(d.Z, {
                  className: v.videoGridWrapper,
                  justify: d.Z.Justify.CENTER,
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsx)(m.Z, {
                      channel: N,
                      className: v.videoGrid,
                      participants: D,
                      totalNumberOfParticipants: t.length,
                      onClick: I,
                      onDoubleClick: b,
                      onContextMenu: E,
                      paused: A,
                      inCall: S
                  })
              });
    return (0, i.jsx)(f.Z, {
        onFullscreenParticipant: b,
        onContextMenuParticipant: E,
        onSelectParticipant: I,
        selectedParticipant: a,
        filteredParticipants: D,
        participants: t,
        popoutWindow: L,
        className: T,
        idle: M,
        height: P,
        width: y,
        layout: _,
        inCall: S,
        channel: N,
        showParticipants: j
    });
});
