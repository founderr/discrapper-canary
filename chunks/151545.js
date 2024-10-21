n.d(t, {
    Z: function () {
        return A;
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
    _ = n(430824),
    E = n(496675),
    f = n(979651),
    h = n(626135),
    p = n(984173),
    I = n(409057),
    m = n(443375),
    T = n(128277),
    S = n(263059),
    g = n(981631);
function A(e) {
    let { user: t, currentUser: n, activity: A, className: N, onClose: R, profileGuildId: O } = e,
        v = (0, a.e7)([f.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: C } = c.n.useExperiment(
            {
                guildId: null == v ? void 0 : v.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        L = C && E.Z.can(g.Plq.CONNECT, v),
        D = (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS && L ? v : null,
        y = (0, p.F)({ location: 'UserProfileActivityCardWrapper' }),
        b = t.id === n.id,
        M = (0, a.e7)([_.Z, f.Z, d.Z], () => {
            if ((0, s.Z)(A)) {
                var e, n;
                let r = null === (e = f.Z.getVoiceStateForSession(t.id, null == A ? void 0 : A.session_id)) || void 0 === e ? void 0 : e.channelId;
                return _.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != D ? _.Z.getGuild(D.getGuildId()) : null;
        });
    (0, u.q)(null == A ? void 0 : A.application_id);
    let P = (0, a.e7)([l.Z], () => ((null == A ? void 0 : A.application_id) != null ? l.Z.getApplication(A.application_id) : (null == A ? void 0 : A.name) != null ? l.Z.getApplicationByName(A.name) : null));
    if (
        (i.useEffect(() => {
            (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS &&
                L &&
                h.default.track(g.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == D ? void 0 : D.guild_id,
                    channel_id: null == D ? void 0 : D.id
                });
        }, [null == A ? void 0 : A.type, L, D]),
        (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS && !L)
    )
        return null;
    if ((0, o.Z)(A))
        return !y || b || t.bot
            ? (0, r.jsx)(T.Z, {
                  user: t,
                  currentUser: n,
                  activity: A,
                  guild: M,
                  channel: v,
                  className: N,
                  onClose: R
              })
            : (0, r.jsx)(S.Z, {
                  user: t,
                  currentUser: n,
                  activity: A,
                  guild: M,
                  profileGuildId: O,
                  channel: v,
                  className: N,
                  onClose: R
              });
    return !y || b || t.bot
        ? (0, r.jsx)(I.Z, {
              user: t,
              currentUser: n,
              activity: A,
              application: P,
              guild: M,
              channel: v,
              className: N,
              onClose: R
          })
        : (0, r.jsx)(m.Z, {
              user: t,
              currentUser: n,
              activity: A,
              application: P,
              guild: M,
              profileGuildId: O,
              channel: v,
              className: N,
              onClose: R
          });
}
