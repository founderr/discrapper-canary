n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(841784),
    o = n(503438),
    l = n(812206),
    u = n(835473),
    c = n(574176),
    d = n(592125),
    f = n(430824),
    _ = n(496675),
    p = n(979651),
    h = n(626135),
    m = n(984173),
    g = n(9161),
    E = n(456644),
    v = n(409057),
    I = n(443375),
    T = n(128277),
    b = n(263059),
    S = n(981631);
function y(e) {
    let { user: t, currentUser: n, activity: y, className: A, onClose: N, profileGuildId: C } = e,
        R = (0, a.e7)([p.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: O } = c.n.useExperiment(
            {
                guildId: null == R ? void 0 : R.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        D = O && _.Z.can(S.Plq.CONNECT, R),
        L = (null == y ? void 0 : y.type) === S.IIU.HANG_STATUS && D ? R : null,
        { activityReactReplyEnabled: x } = (0, m.F)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityTabEnabled: w } = (0, g.O)({
            location: 'UserProfileActivityCardWrapper',
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: P } = (0, E.i)({
            location: 'UserProfileActivityCardWrapper',
            autoTrackExposure: !1
        }),
        M = t.id === n.id,
        k = (x || w || P) && !M && !t.bot,
        U = (0, a.e7)([f.Z, p.Z, d.Z], () => {
            if ((0, s.Z)(y)) {
                var e, n;
                let r = null === (e = p.Z.getVoiceStateForSession(t.id, null == y ? void 0 : y.session_id)) || void 0 === e ? void 0 : e.channelId;
                return f.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != L ? f.Z.getGuild(L.getGuildId()) : null;
        });
    (0, u.q)(null == y ? void 0 : y.application_id);
    let B = (0, a.e7)([l.Z], () => ((null == y ? void 0 : y.application_id) != null ? l.Z.getApplication(y.application_id) : (null == y ? void 0 : y.name) != null ? l.Z.getApplicationByName(y.name) : null));
    if (
        (i.useEffect(() => {
            (null == y ? void 0 : y.type) === S.IIU.HANG_STATUS &&
                D &&
                h.default.track(S.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == L ? void 0 : L.guild_id,
                    channel_id: null == L ? void 0 : L.id
                });
        }, [null == y ? void 0 : y.type, D, L]),
        (null == y ? void 0 : y.type) === S.IIU.HANG_STATUS && !D)
    )
        return null;
    if ((0, o.Z)(y))
        return k
            ? (0, r.jsx)(b.Z, {
                  user: t,
                  currentUser: n,
                  activity: y,
                  guild: U,
                  profileGuildId: C,
                  channel: R,
                  className: A,
                  onClose: N
              })
            : (0, r.jsx)(T.Z, {
                  user: t,
                  currentUser: n,
                  activity: y,
                  guild: U,
                  channel: R,
                  className: A,
                  onClose: N
              });
    return k
        ? (0, r.jsx)(I.Z, {
              user: t,
              currentUser: n,
              activity: y,
              application: B,
              guild: U,
              profileGuildId: C,
              channel: R,
              className: A,
              onClose: N
          })
        : (0, r.jsx)(v.Z, {
              user: t,
              currentUser: n,
              activity: y,
              application: B,
              guild: U,
              channel: R,
              className: A,
              onClose: N
          });
}
