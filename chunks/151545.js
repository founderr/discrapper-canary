n.d(t, {
    Z: function () {
        return S;
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
    g = n(409057),
    E = n(443375),
    v = n(128277),
    b = n(263059),
    I = n(981631);
function S(e) {
    let { user: t, currentUser: n, activity: S, className: T, onClose: y, profileGuildId: A } = e,
        N = (0, a.e7)([p.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: C } = c.n.useExperiment(
            {
                guildId: null == N ? void 0 : N.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        R = C && _.Z.can(I.Plq.CONNECT, N),
        O = (null == S ? void 0 : S.type) === I.IIU.HANG_STATUS && R ? N : null,
        { activityReactReplyEnabled: D } = (0, m.F)({ location: 'UserProfileActivityCardWrapper' }),
        L = t.id === n.id,
        x = (0, a.e7)([f.Z, p.Z, d.Z], () => {
            if ((0, s.Z)(S)) {
                var e, n;
                let r = null === (e = p.Z.getVoiceStateForSession(t.id, null == S ? void 0 : S.session_id)) || void 0 === e ? void 0 : e.channelId;
                return f.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != O ? f.Z.getGuild(O.getGuildId()) : null;
        });
    (0, u.q)(null == S ? void 0 : S.application_id);
    let w = (0, a.e7)([l.Z], () => ((null == S ? void 0 : S.application_id) != null ? l.Z.getApplication(S.application_id) : (null == S ? void 0 : S.name) != null ? l.Z.getApplicationByName(S.name) : null));
    if (
        (i.useEffect(() => {
            (null == S ? void 0 : S.type) === I.IIU.HANG_STATUS &&
                R &&
                h.default.track(I.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == O ? void 0 : O.guild_id,
                    channel_id: null == O ? void 0 : O.id
                });
        }, [null == S ? void 0 : S.type, R, O]),
        (null == S ? void 0 : S.type) === I.IIU.HANG_STATUS && !R)
    )
        return null;
    if ((0, o.Z)(S))
        return !D || L || t.bot
            ? (0, r.jsx)(v.Z, {
                  user: t,
                  currentUser: n,
                  activity: S,
                  guild: x,
                  channel: N,
                  className: T,
                  onClose: y
              })
            : (0, r.jsx)(b.Z, {
                  user: t,
                  currentUser: n,
                  activity: S,
                  guild: x,
                  profileGuildId: A,
                  channel: N,
                  className: T,
                  onClose: y
              });
    return !D || L || t.bot
        ? (0, r.jsx)(g.Z, {
              user: t,
              currentUser: n,
              activity: S,
              application: w,
              guild: x,
              channel: N,
              className: T,
              onClose: y
          })
        : (0, r.jsx)(E.Z, {
              user: t,
              currentUser: n,
              activity: S,
              application: w,
              guild: x,
              profileGuildId: A,
              channel: N,
              className: T,
              onClose: y
          });
}
