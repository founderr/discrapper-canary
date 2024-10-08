n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250);
n(470079);
var s = n(512722),
    a = n.n(s),
    l = n(442837),
    r = n(779618),
    o = n(446226),
    c = n(441167),
    u = n(822183),
    d = n(641015),
    h = n(131951),
    p = n(594174),
    m = n(700785),
    _ = n(213652),
    f = n(320427),
    E = n(145010),
    g = n(933686),
    C = n(997614),
    I = n(159909),
    T = n(981631),
    x = n(307410);
function v(e) {
    let { channel: t, hasActiveStream: n, themeable: s = !1 } = e,
        v = (0, l.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return a()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        S = (0, o.Z)(),
        { isSharedCanvasEnabled: N } = u.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: A } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        Z = (0, r.Z)(h.Z);
    if (null == t || null != S) return null;
    let M = (0, d.Z)(t),
        b = m.BT({
            permission: T.Plq.ADD_REACTIONS,
            user: v,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: x.voiceEffectsActionBar,
        children: [
            M &&
                (0, i.jsx)(C.Z, {
                    channel: t,
                    themeable: s
                }),
            b && (0, i.jsx)(g.Z, { channel: t }),
            A && Z && (0, i.jsx)(_.Z, { channel: t }),
            N && n && (0, i.jsx)(f.Z, {}),
            N && n && (0, i.jsx)(E.Z, { channel: t }),
            N && n && (0, i.jsx)(I.Z, {})
        ]
    });
}
