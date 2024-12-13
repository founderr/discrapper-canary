r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(841784),
    l = r(503438),
    u = r(812206),
    c = r(835473),
    d = r(574176),
    f = r(592125),
    _ = r(430824),
    h = r(496675),
    p = r(979651),
    m = r(626135),
    g = r(9161),
    E = r(490231),
    v = r(456644),
    I = r(409057),
    T = r(443375),
    b = r(128277),
    y = r(263059),
    S = r(981631);
function A(e) {
    let { user: n, currentUser: r, activity: A, className: N, onClose: C, profileGuildId: R } = e,
        O = (0, s.e7)([p.Z, f.Z], () => {
            var e;
            return f.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: D } = d.n.useExperiment(
            {
                guildId: null == O ? void 0 : O.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        L = D && h.Z.can(S.Plq.CONNECT, O),
        x = (null == A ? void 0 : A.type) === S.IIU.HANG_STATUS && L ? O : null,
        { fadeInAndOutEnabled: w } = (0, E.o)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityTabEnabled: P } = (0, g.O)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityEnabled: M } = (0, v.i)({ location: 'UserProfileActivityCardWrapper' }),
        k = n.id === r.id,
        U = (w || P || M) && !k && !n.bot,
        B = (0, s.e7)([_.Z, p.Z, f.Z], () => {
            if ((0, o.Z)(A)) {
                var e, r;
                let i = null === (e = p.Z.getVoiceStateForSession(n.id, null == A ? void 0 : A.session_id)) || void 0 === e ? void 0 : e.channelId;
                return _.Z.getGuild(null === (r = f.Z.getChannel(i)) || void 0 === r ? void 0 : r.getGuildId());
            }
            return null != x ? _.Z.getGuild(x.getGuildId()) : null;
        });
    (0, c.q)(null == A ? void 0 : A.application_id);
    let G = (0, s.e7)([u.Z], () => ((null == A ? void 0 : A.application_id) != null ? u.Z.getApplication(A.application_id) : (null == A ? void 0 : A.name) != null ? u.Z.getApplicationByName(A.name) : null));
    if (
        (a.useEffect(() => {
            (null == A ? void 0 : A.type) === S.IIU.HANG_STATUS &&
                L &&
                m.default.track(S.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == x ? void 0 : x.guild_id,
                    channel_id: null == x ? void 0 : x.id
                });
        }, [null == A ? void 0 : A.type, L, x]),
        (null == A ? void 0 : A.type) === S.IIU.HANG_STATUS && !L)
    )
        return null;
    if ((0, l.Z)(A))
        return U
            ? (0, i.jsx)(y.Z, {
                  user: n,
                  currentUser: r,
                  activity: A,
                  guild: B,
                  profileGuildId: R,
                  channel: O,
                  className: N,
                  onClose: C
              })
            : (0, i.jsx)(b.Z, {
                  user: n,
                  currentUser: r,
                  activity: A,
                  guild: B,
                  channel: O,
                  className: N,
                  onClose: C
              });
    return U
        ? (0, i.jsx)(T.Z, {
              user: n,
              currentUser: r,
              activity: A,
              application: G,
              guild: B,
              profileGuildId: R,
              channel: O,
              className: N,
              onClose: C
          })
        : (0, i.jsx)(I.Z, {
              user: n,
              currentUser: r,
              activity: A,
              application: G,
              guild: B,
              channel: O,
              className: N,
              onClose: C
          });
}
