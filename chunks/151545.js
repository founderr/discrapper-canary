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
    g = n(456644),
    E = n(409057),
    v = n(443375),
    I = n(128277),
    T = n(263059),
    b = n(981631);
function S(e) {
    let { user: t, currentUser: n, activity: S, className: y, onClose: A, profileGuildId: N } = e,
        C = (0, a.e7)([p.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: R } = c.n.useExperiment(
            {
                guildId: null == C ? void 0 : C.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        O = R && _.Z.can(b.Plq.CONNECT, C),
        D = (null == S ? void 0 : S.type) === b.IIU.HANG_STATUS && O ? C : null,
        { activityReactReplyEnabled: L } = (0, m.F)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityEnabled: x } = (0, g.i)({
            location: 'UserProfileActivityCardWrapper',
            autoTrackExposure: !1
        }),
        w = t.id === n.id,
        P = (L || x) && !w && !t.bot,
        M = (0, a.e7)([f.Z, p.Z, d.Z], () => {
            if ((0, s.Z)(S)) {
                var e, n;
                let r = null === (e = p.Z.getVoiceStateForSession(t.id, null == S ? void 0 : S.session_id)) || void 0 === e ? void 0 : e.channelId;
                return f.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != D ? f.Z.getGuild(D.getGuildId()) : null;
        });
    (0, u.q)(null == S ? void 0 : S.application_id);
    let k = (0, a.e7)([l.Z], () => ((null == S ? void 0 : S.application_id) != null ? l.Z.getApplication(S.application_id) : (null == S ? void 0 : S.name) != null ? l.Z.getApplicationByName(S.name) : null));
    if (
        (i.useEffect(() => {
            (null == S ? void 0 : S.type) === b.IIU.HANG_STATUS &&
                O &&
                h.default.track(b.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == D ? void 0 : D.guild_id,
                    channel_id: null == D ? void 0 : D.id
                });
        }, [null == S ? void 0 : S.type, O, D]),
        (null == S ? void 0 : S.type) === b.IIU.HANG_STATUS && !O)
    )
        return null;
    if ((0, o.Z)(S))
        return P
            ? (0, r.jsx)(T.Z, {
                  user: t,
                  currentUser: n,
                  activity: S,
                  guild: M,
                  profileGuildId: N,
                  channel: C,
                  className: y,
                  onClose: A
              })
            : (0, r.jsx)(I.Z, {
                  user: t,
                  currentUser: n,
                  activity: S,
                  guild: M,
                  channel: C,
                  className: y,
                  onClose: A
              });
    return P
        ? (0, r.jsx)(v.Z, {
              user: t,
              currentUser: n,
              activity: S,
              application: k,
              guild: M,
              profileGuildId: N,
              channel: C,
              className: y,
              onClose: A
          })
        : (0, r.jsx)(E.Z, {
              user: t,
              currentUser: n,
              activity: S,
              application: k,
              guild: M,
              channel: C,
              className: y,
              onClose: A
          });
}
