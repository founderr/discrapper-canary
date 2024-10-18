n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250),
    i = n(470079),
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
    let { user: t, currentUser: n, activity: A, className: N, onClose: R } = e,
        O = (0, a.e7)([f.Z, d.Z], () => {
            var e;
            return d.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: v } = c.n.useExperiment(
            {
                guildId: null == O ? void 0 : O.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        C = v && E.Z.can(g.Plq.CONNECT, O),
        L = (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS && C ? O : null,
        D = (0, p.F)({ location: 'UserProfileActivityCardWrapper' }),
        y = t.id === n.id,
        b = (0, a.e7)([_.Z, f.Z, d.Z], () => {
            if ((0, s.Z)(A)) {
                var e, n;
                let r = null === (e = f.Z.getVoiceStateForSession(t.id, null == A ? void 0 : A.session_id)) || void 0 === e ? void 0 : e.channelId;
                return _.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
            }
            return null != L ? _.Z.getGuild(L.getGuildId()) : null;
        });
    (0, u.q)(null == A ? void 0 : A.application_id);
    let M = (0, a.e7)([l.Z], () => ((null == A ? void 0 : A.application_id) != null ? l.Z.getApplication(A.application_id) : (null == A ? void 0 : A.name) != null ? l.Z.getApplicationByName(A.name) : null));
    if (
        (i.useEffect(() => {
            (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS &&
                C &&
                h.default.track(g.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == L ? void 0 : L.guild_id,
                    channel_id: null == L ? void 0 : L.id
                });
        }, [null == A ? void 0 : A.type, C, L]),
        (null == A ? void 0 : A.type) === g.IIU.HANG_STATUS && !C)
    )
        return null;
    if ((0, o.Z)(A))
        return !D || y || t.bot
            ? (0, r.jsx)(T.Z, {
                  user: t,
                  currentUser: n,
                  activity: A,
                  guild: b,
                  channel: O,
                  className: N,
                  onClose: R
              })
            : (0, r.jsx)(S.Z, {
                  user: t,
                  currentUser: n,
                  activity: A,
                  guild: b,
                  channel: O,
                  className: N,
                  onClose: R
              });
    return !D || y || t.bot
        ? (0, r.jsx)(I.Z, {
              user: t,
              currentUser: n,
              activity: A,
              application: M,
              guild: b,
              channel: O,
              className: N,
              onClose: R
          })
        : (0, r.jsx)(m.Z, {
              user: t,
              currentUser: n,
              activity: A,
              application: M,
              guild: b,
              channel: O,
              className: N,
              onClose: R
          });
}
