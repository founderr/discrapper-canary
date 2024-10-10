n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var s = n(512722),
    a = n.n(s),
    l = n(442837),
    r = n(779618),
    o = n(215339),
    c = n(446226),
    u = n(441167),
    d = n(822183),
    h = n(641015),
    p = n(131951),
    m = n(594174),
    _ = n(700785),
    f = n(213652),
    E = n(320427),
    g = n(145010),
    C = n(933686),
    I = n(361057),
    T = n(997614),
    x = n(159909),
    v = n(981631),
    S = n(307410);
function N(e) {
    let { channel: t, hasActiveStream: n, themeable: s = !1 } = e,
        N = (0, l.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return a()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        A = (0, o.j)('VoiceEffectsActionBar'),
        Z = (0, c.Z)(),
        { isSharedCanvasEnabled: M } = d.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: b } = u.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        R = (0, r.Z)(p.Z);
    if (null == t || null != Z) return null;
    let L = (0, h.Z)(t),
        j = _.BT({
            permission: v.Plq.ADD_REACTIONS,
            user: N,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: S.voiceEffectsActionBar,
        children: [
            L &&
                (0, i.jsx)(T.Z, {
                    channel: t,
                    themeable: s
                }),
            j && (0, i.jsx)(C.Z, { channel: t }),
            b && R && (0, i.jsx)(f.Z, { channel: t }),
            A && (0, i.jsx)(I.Z, {}),
            M && n && (0, i.jsx)(E.Z, {}),
            M && n && (0, i.jsx)(g.Z, { channel: t }),
            M && n && (0, i.jsx)(x.Z, {})
        ]
    });
}
