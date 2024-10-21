n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(653041);
var i = n(200651),
    s = n(192379),
    a = n(990547),
    l = n(731965),
    r = n(442837),
    o = n(704215),
    c = n(40851),
    u = n(317381),
    d = n(374065),
    h = n(213609),
    p = n(358221),
    m = n(381586),
    _ = n(159300),
    f = n(800329),
    E = n(470956),
    g = n(430824),
    C = n(496675),
    I = n(434488),
    T = n(27457),
    x = n(251564),
    v = n(695492),
    S = n(981631),
    N = n(301439);
function A(e) {
    let { participants: t, onClick: n, onDoubleClick: A, onContextMenu: Z, channel: M, className: b, inCall: R, totalNumberOfParticipants: L, paused: j = !1 } = e,
        P = (0, c.bp)() === S.IlC.POPOUT,
        O = (0, r.e7)([g.Z], () => g.Z.getGuild(M.guild_id), [M.guild_id]),
        { dismissedActivityEntryPointTileChannel: y } = (0, x.d)(),
        D = (0, r.e7)([p.Z], () => p.Z.getUserParticipantCount(M.id), [M]),
        U = (0, E.bt)(M.id, t),
        k = s.useCallback(() => {
            (0, l.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: M.id });
            });
        }, [M.id]);
    s.useEffect(() => {
        null != y &&
            M.id !== y &&
            (0, l.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [M.id, y]);
    let w = (0, r.e7)([C.Z], () => M.isPrivate() || (0, _.b)(C.Z, O, M), [O, M]),
        B = (null == O ? void 0 : O.afkChannelId) === M.id,
        H = M.userLimit <= 0 || M.userLimit > 1,
        G = (0, r.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(M.id).length <= 0),
        V = (0, m.N)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.KF)(M.id) !== d.jy.CAN_LAUNCH,
        W = null != y && y === M.id,
        z = U.map(
            (e) => (t) =>
                (0, i.jsx)(
                    T.ZP,
                    {
                        participant: e,
                        channel: M,
                        className: N.tile,
                        paused: j,
                        onClick: n,
                        onDoubleClick: A,
                        onContextMenu: Z,
                        inCall: R,
                        width: t,
                        inPopout: P
                    },
                    e.id
                )
        );
    (0, h.Z)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: L,
                can_invite: w,
                is_afk_channel: B,
                channel_user_limit: M.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != O &&
            !B &&
            (!(D >= 2) || !G || F || V || W
                ? H &&
                  1 === D &&
                  w &&
                  (G && !F
                      ? z.push((e) =>
                            (0, i.jsx)(I.h, {
                                channel: M,
                                guild: O,
                                width: e,
                                inPopout: P,
                                handleClose: k,
                                userParticipantCount: D
                            })
                        )
                      : z.push((e) =>
                            (0, i.jsx)(v.Z, {
                                width: e,
                                channel: M,
                                guild: O,
                                inPopout: P
                            })
                        ))
                : z.push((e) =>
                      (0, i.jsx)(I.h, {
                          channel: M,
                          guild: O,
                          width: e,
                          inPopout: P,
                          handleClose: k,
                          userParticipantCount: D
                      })
                  ));
    let Y = s.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = U[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [U]
    );
    return (0, i.jsx)(f.Z, {
        className: b,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
