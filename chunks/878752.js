n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(704215),
    c = n(779618),
    d = n(464792),
    u = n(324085),
    h = n(243778),
    p = n(446226),
    m = n(441167),
    f = n(822183),
    g = n(641015),
    C = n(861254),
    x = n(131951),
    v = n(594174),
    _ = n(700785),
    I = n(213652),
    E = n(320427),
    b = n(145010),
    Z = n(933686),
    N = n(361057),
    S = n(997614),
    T = n(159909),
    j = n(981631),
    A = n(637335);
function y(e) {
    let { channel: t, hasActiveStream: n, themeable: r = !1 } = e,
        y = (0, s.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return a()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { groupedButtons: P } = (0, C.ZP)({ location: 'VoiceEffectsActionBar' }),
        M = (0, u.Ou)(t),
        R = l.useRef(null),
        L = (0, p.Z)(),
        { isSharedCanvasEnabled: k } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: O } = m.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        D = (0, c.Z)(x.Z),
        w = (0, u.Zm)(t, 'VoiceEffectsActionBar') ? [o.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [B, U] = (0, h.US)(w, void 0, !0),
        H = B === o.z.CONSUMABLE_HD_POTION_UPSELL;
    if (null == t || null != L) return null;
    let G = (0, g.Z)(t),
        F = _.BT({
            permission: j.Plq.ADD_REACTIONS,
            user: y,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: A.voiceEffectsActionBar,
        children: [
            !P &&
                G &&
                (0, i.jsx)(S.Z, {
                    channel: t,
                    themeable: r
                }),
            !P && F && (0, i.jsx)(Z.Z, { channel: t }),
            O && D && (0, i.jsx)(I.Z, { channel: t }),
            H &&
                (0, i.jsx)(d.t, {
                    potionRef: R,
                    channel: t,
                    markAsDismissed: U
                }),
            M &&
                (0, i.jsx)(N.Z, {
                    ref: R,
                    channel: t,
                    glow: H
                }),
            k && n && (0, i.jsx)(E.Z, {}),
            k && n && (0, i.jsx)(b.Z, { channel: t }),
            k && n && (0, i.jsx)(T.Z, {})
        ]
    });
}
