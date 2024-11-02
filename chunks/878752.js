n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(442837),
    s = n(779618),
    o = n(215339),
    c = n(446226),
    u = n(441167),
    d = n(822183),
    h = n(641015),
    m = n(131951),
    p = n(594174),
    f = n(700785),
    g = n(213652),
    C = n(320427),
    x = n(145010),
    v = n(933686),
    _ = n(361057),
    I = n(997614),
    E = n(159909),
    b = n(981631),
    S = n(307410);
function Z(e) {
    let { channel: t, hasActiveStream: n, themeable: l = !1 } = e,
        Z = (0, a.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return r()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        T = (0, o.j)('VoiceEffectsActionBar'),
        N = (0, c.Z)(),
        { isSharedCanvasEnabled: j } = d.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: A } = u.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        y = (0, s.Z)(m.Z);
    if (null == t || null != N) return null;
    let P = (0, h.Z)(t),
        M = f.BT({
            permission: b.Plq.ADD_REACTIONS,
            user: Z,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: S.voiceEffectsActionBar,
        children: [
            P &&
                (0, i.jsx)(I.Z, {
                    channel: t,
                    themeable: l
                }),
            M && (0, i.jsx)(v.Z, { channel: t }),
            A && y && (0, i.jsx)(g.Z, { channel: t }),
            T && (0, i.jsx)(_.Z, { channel: t }),
            j && n && (0, i.jsx)(C.Z, {}),
            j && n && (0, i.jsx)(x.Z, { channel: t }),
            j && n && (0, i.jsx)(E.Z, {})
        ]
    });
}
