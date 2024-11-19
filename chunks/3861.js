var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    _ = n(456895);
t.Z = (0, s.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: r, participantsVersion: s, layout: v, onSelectParticipant: I, onContextMenuParticipant: E, onFullscreenParticipant: b, channel: Z, hasConnectPermission: N, className: S, inCall: T, showParticipants: j = !0, paused: A = !1, width: y, height: P, idle: M, mode: L, popoutWindow: R, awaitingRemoteSessionInfo: k, callContainerDimensions: O } = e;
    l.useEffect(() => {
        u.S.dispatch(C.CkL.REMEASURE_TARGET);
    }, [y, P, O.width, O.height]);
    let D = l.useMemo(() => n.filter((e) => e.type !== x.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, s]);
    if ((null == k ? void 0 : k.channelId) === Z.id) return (0, i.jsx)(p.Z, { height: P });
    if ((null == Z ? void 0 : Z.isGuildVocal()) && !T)
        return (0, i.jsx)(h.Z, {
            channel: Z,
            participants: t,
            hasConnectPermission: N
        });
    if (L === C.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: Z.guild_id,
            width: y,
            className: _.voiceCallWrapper,
            participants: t,
            onContextMenu: E
        });
    if (((n = T ? n : t), null == r))
        return 0 === n.length
            ? (0, i.jsx)(g.Z, {
                  className: a()(_.videoGrid, _.hiddenParticipants),
                  channelId: Z.id,
                  width: y
              })
            : (0, i.jsx)(d.Z, {
                  className: _.videoGridWrapper,
                  justify: d.Z.Justify.CENTER,
                  align: d.Z.Align.CENTER,
                  children: (0, i.jsx)(m.Z, {
                      channel: Z,
                      className: _.videoGrid,
                      participants: D,
                      totalNumberOfParticipants: t.length,
                      onClick: I,
                      onDoubleClick: b,
                      onContextMenu: E,
                      paused: A,
                      inCall: T
                  })
              });
    return (0, i.jsx)(f.Z, {
        onFullscreenParticipant: b,
        onContextMenuParticipant: E,
        onSelectParticipant: I,
        selectedParticipant: r,
        filteredParticipants: D,
        participants: t,
        popoutWindow: R,
        className: S,
        idle: M,
        height: P,
        width: y,
        layout: v,
        inCall: T,
        channel: Z,
        showParticipants: j
    });
});
