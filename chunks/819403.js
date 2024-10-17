t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    s = t(430824),
    o = t(594174),
    u = t(979651),
    d = t(471253),
    r = t(200498),
    c = t(88751),
    Z = t(267980),
    E = t(623633),
    M = t(689938);
function f(e) {
    var n;
    let t = (0, E.Z)(),
        f = null == t ? void 0 : t.id,
        _ = null == t ? void 0 : t.guild_id,
        I = (0, i.e7)([s.Z], () => s.Z.getGuild(_), [_]),
        g = (0, i.e7)([u.Z], () => (null != f ? u.Z.getVoiceStateForChannel(f, e.id) : null), [f, e.id]),
        A = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        N = (0, Z.Z)(),
        C = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [f, e.id]),
        m = (0, r.B)(f);
    if (null == t || null == I || null == g || C.speaker) return null;
    let T = () => {
        A ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
    };
    return m
        ? (0, l.jsx)(a.MenuItem, {
              id: 'invite-speaker',
              label: A ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: T
          })
        : N && A
          ? (0, l.jsx)(a.MenuItem, {
                id: 'invite-speaker',
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: T
            })
          : null;
}
