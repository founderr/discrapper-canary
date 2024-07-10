l.d(n, {
    Z: function () {
        return _;
    }
});
var t = l(735250);
l(470079);
var i = l(442837), r = l(481060), a = l(430824), s = l(594174), u = l(979651), o = l(471253), d = l(200498), c = l(88751), Z = l(267980), E = l(623633), M = l(689938);
function _(e) {
    var n;
    let l = (0, E.Z)(), _ = null == l ? void 0 : l.id, f = null == l ? void 0 : l.guild_id, g = (0, i.e7)([a.Z], () => a.Z.getGuild(f), [f]), m = (0, i.e7)([u.Z], () => null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null, [
            _,
            e.id
        ]), R = (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id, I = (0, Z.Z)(), N = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [
            _,
            e.id
        ]), C = (0, d.B)(_);
    if (null == l || null == g || null == m || N.speaker)
        return null;
    let O = () => {
        R ? (0, o.RK)(l, !1) : (0, o._0)(l, e.id);
    };
    return C ? (0, t.jsx)(r.MenuItem, {
        id: 'invite-speaker',
        label: R ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
        action: O
    }) : I && R ? (0, t.jsx)(r.MenuItem, {
        id: 'invite-speaker',
        label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
        action: O
    }) : null;
}
