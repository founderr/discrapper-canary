n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(442837),
    s = n(779618),
    o = n(446226),
    c = n(441167),
    d = n(822183),
    u = n(641015),
    h = n(131951),
    p = n(594174),
    m = n(700785),
    f = n(213652),
    g = n(320427),
    C = n(145010),
    x = n(933686),
    v = n(997614),
    _ = n(159909),
    I = n(981631),
    E = n(307410);
function b(e) {
    let { channel: t, hasActiveStream: n, themeable: l = !1 } = e,
        b = (0, a.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return r()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        N = (0, o.Z)(),
        { isSharedCanvasEnabled: Z } = d.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: S } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        T = (0, s.Z)(h.Z);
    if (null == t || null != N) return null;
    let j = (0, u.Z)(t),
        A = m.BT({
            permission: I.Plq.ADD_REACTIONS,
            user: b,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: E.voiceEffectsActionBar,
        children: [
            j &&
                (0, i.jsx)(v.Z, {
                    channel: t,
                    themeable: l
                }),
            A && (0, i.jsx)(x.Z, { channel: t }),
            S && T && (0, i.jsx)(f.Z, { channel: t }),
            Z && n && (0, i.jsx)(g.Z, {}),
            Z && n && (0, i.jsx)(C.Z, { channel: t }),
            Z && n && (0, i.jsx)(_.Z, {})
        ]
    });
}
