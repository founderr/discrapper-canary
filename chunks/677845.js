n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(990547),
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
    C = n(430824),
    g = n(496675),
    I = n(434488),
    x = n(27457),
    T = n(251564),
    N = n(695492),
    S = n(981631),
    v = n(456902);
function Z(e) {
    let { participants: t, onClick: n, onDoubleClick: Z, onContextMenu: A, channel: M, className: b, inCall: R, totalNumberOfParticipants: L, paused: j = !1 } = e,
        O = (0, c.bp)() === S.IlC.POPOUT,
        P = (0, r.e7)([C.Z], () => C.Z.getGuild(M.guild_id), [M.guild_id]),
        { dismissedActivityEntryPointTileChannel: y } = (0, T.d)(),
        D = (0, r.e7)([p.Z], () => p.Z.getUserParticipantCount(M.id), [M]),
        k = (0, E.bt)(M.id, t),
        U = a.useCallback(() => {
            (0, l.j)(() => {
                T.d.setState({ dismissedActivityEntryPointTileChannel: M.id });
            });
        }, [M.id]);
    a.useEffect(() => {
        null != y &&
            M.id !== y &&
            (0, l.j)(() => {
                T.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [M.id, y]);
    let w = (0, r.e7)([g.Z], () => M.isPrivate() || (0, _.b)(g.Z, P, M), [P, M]),
        B = (null == P ? void 0 : P.afkChannelId) === M.id,
        H = M.userLimit <= 0 || M.userLimit > 1,
        G = (0, r.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(M.id).length <= 0),
        V = (0, m.N)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.KF)(M.id) !== d.jy.CAN_LAUNCH,
        W = null != y && y === M.id,
        z = k.map(
            (e) => (t) =>
                (0, i.jsx)(
                    x.ZP,
                    {
                        participant: e,
                        channel: M,
                        className: v.tile,
                        paused: j,
                        onClick: n,
                        onDoubleClick: Z,
                        onContextMenu: A,
                        inCall: R,
                        width: t,
                        inPopout: O
                    },
                    e.id
                )
        );
    (0, h.Z)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
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
        null != P &&
            !B &&
            (!(D >= 2) || !G || F || V || W
                ? H &&
                  1 === D &&
                  w &&
                  (G && !F
                      ? z.push((e) =>
                            (0, i.jsx)(I.h, {
                                channel: M,
                                guild: P,
                                width: e,
                                inPopout: O,
                                handleClose: U,
                                userParticipantCount: D
                            })
                        )
                      : z.push((e) =>
                            (0, i.jsx)(N.Z, {
                                width: e,
                                channel: M,
                                guild: P,
                                inPopout: O
                            })
                        ))
                : z.push((e) =>
                      (0, i.jsx)(I.h, {
                          channel: M,
                          guild: P,
                          width: e,
                          inPopout: O,
                          handleClose: U,
                          userParticipantCount: D
                      })
                  ));
    let Y = a.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = k[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [k]
    );
    return (0, i.jsx)(f.Z, {
        className: b,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
