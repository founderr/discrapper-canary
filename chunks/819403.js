t.d(n, {
    Z: function () {
        return _;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    l = t(481060),
    a = t(430824),
    o = t(594174),
    u = t(979651),
    d = t(471253),
    r = t(200498),
    c = t(88751),
    E = t(267980),
    Z = t(623633),
    M = t(689938);
function _(e) {
    var n;
    let t = (0, Z.Z)(),
        _ = null == t ? void 0 : t.id,
        f = null == t ? void 0 : t.guild_id,
        g = (0, i.e7)([a.Z], () => a.Z.getGuild(f), [f]),
        I = (0, i.e7)([u.Z], () => (null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null), [_, e.id]),
        A = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        N = (0, E.Z)(),
        m = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [_, e.id]),
        T = (0, r.B)(_);
    if (null == t || null == g || null == I || m.speaker) return null;
    let C = () => {
        A ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
    };
    return T
        ? (0, s.jsx)(l.MenuItem, {
              id: 'invite-speaker',
              label: A ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: C
          })
        : N && A
          ? (0, s.jsx)(l.MenuItem, {
                id: 'invite-speaker',
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: C
            })
          : null;
}
