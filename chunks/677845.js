n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(990547),
    s = n(731965),
    a = n(442837),
    o = n(704215),
    c = n(40851),
    u = n(317381),
    d = n(374065),
    h = n(213609),
    m = n(358221),
    p = n(381586),
    f = n(159300),
    g = n(800329),
    C = n(470956),
    x = n(430824),
    v = n(496675),
    _ = n(434488),
    I = n(27457),
    E = n(251564),
    b = n(695492),
    S = n(981631),
    Z = n(301439);
function T(e) {
    let { participants: t, onClick: n, onDoubleClick: T, onContextMenu: N, channel: j, className: A, inCall: y, totalNumberOfParticipants: P, paused: M = !1 } = e,
        R = (0, c.bp)() === S.IlC.POPOUT,
        L = (0, a.e7)([x.Z], () => x.Z.getGuild(j.guild_id), [j.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, E.d)(),
        O = (0, a.e7)([m.Z], () => m.Z.getUserParticipantCount(j.id), [j]),
        w = (0, C.bt)(j.id, t),
        D = l.useCallback(() => {
            (0, s.j)(() => {
                E.d.setState({ dismissedActivityEntryPointTileChannel: j.id });
            });
        }, [j.id]);
    l.useEffect(() => {
        null != k &&
            j.id !== k &&
            (0, s.j)(() => {
                E.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [j.id, k]);
    let U = (0, a.e7)([v.Z], () => j.isPrivate() || (0, f.b)(v.Z, L, j), [L, j]),
        B = (null == L ? void 0 : L.afkChannelId) === j.id,
        H = j.userLimit <= 0 || j.userLimit > 1,
        F = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(j.id).length <= 0),
        G = (0, p.N)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, d.KF)(j.id) !== d.jy.CAN_LAUNCH,
        z = null != k && k === j.id,
        W = w.map(
            (e) => (t) =>
                (0, i.jsx)(
                    I.ZP,
                    {
                        participant: e,
                        channel: j,
                        className: Z.tile,
                        paused: M,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: N,
                        inCall: y,
                        width: t,
                        inPopout: R
                    },
                    e.id
                )
        );
    (0, h.Z)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: P,
                can_invite: U,
                is_afk_channel: B,
                channel_user_limit: j.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != L &&
            !B &&
            (!(O >= 2) || !F || V || G || z
                ? H &&
                  1 === O &&
                  U &&
                  (F && !V
                      ? W.push((e) =>
                            (0, i.jsx)(_.h, {
                                channel: j,
                                guild: L,
                                width: e,
                                inPopout: R,
                                handleClose: D,
                                userParticipantCount: O
                            })
                        )
                      : W.push((e) =>
                            (0, i.jsx)(b.Z, {
                                width: e,
                                channel: j,
                                guild: L,
                                inPopout: R
                            })
                        ))
                : W.push((e) =>
                      (0, i.jsx)(_.h, {
                          channel: j,
                          guild: L,
                          width: e,
                          inPopout: R,
                          handleClose: D,
                          userParticipantCount: O
                      })
                  ));
    let Y = l.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = w[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [w]
    );
    return (0, i.jsx)(g.Z, {
        className: A,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    });
}
