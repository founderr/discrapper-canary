n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(430824),
    a = n(594174),
    u = n(979651),
    d = n(471253),
    s = n(200498),
    c = n(88751),
    f = n(267980),
    Z = n(623633),
    g = n(388032);
function m(e) {
    var t;
    let n = (0, Z.Z)(),
        m = null == n ? void 0 : n.id,
        v = null == n ? void 0 : n.guild_id,
        b = (0, l.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        x = (0, l.e7)([u.Z], () => (null != m ? u.Z.getVoiceStateForChannel(m, e.id) : null), [m, e.id]),
        M = (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
        I = (0, f.Z)(),
        h = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [m, e.id]),
        C = (0, s.B)(m);
    if (null == n || null == b || null == x || h.speaker) return null;
    let L = () => {
        M ? (0, d.RK)(n, !1) : (0, d._0)(n, e.id);
    };
    return C
        ? (0, i.jsx)(r.MenuItem, {
              id: 'invite-speaker',
              label: M ? g.intl.string(g.t['W6c/VV']) : g.intl.string(g.t.VUCWcH),
              action: L
          })
        : I && M
          ? (0, i.jsx)(r.MenuItem, {
                id: 'invite-speaker',
                label: g.intl.string(g.t['W6c/VV']),
                action: L
            })
          : null;
}
