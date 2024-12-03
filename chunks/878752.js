n.d(t, {
    Z: function () {
        return P;
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
    C = n(411840),
    x = n(131951),
    v = n(594174),
    _ = n(700785),
    I = n(213652),
    E = n(320427),
    b = n(145010),
    N = n(933686),
    Z = n(361057),
    S = n(997614),
    T = n(159909),
    j = n(981631),
    A = n(921944),
    y = n(637335);
function P(e) {
    let { channel: t, hasActiveStream: n, themeable: r = !1 } = e,
        P = (0, s.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return a()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { groupedButtons: M } = (0, C.Z)({ location: 'VoiceEffectsActionBar' }),
        R = (0, u.Ou)(t),
        L = l.useRef(null),
        k = (0, p.Z)(),
        { isSharedCanvasEnabled: O } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: D } = m.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        w = (0, c.Z)(x.Z),
        B = (0, u.Zm)(t, 'VoiceEffectsActionBar') ? [o.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [U, H] = (0, h.US)(B, void 0, !0),
        G = U === o.z.CONSUMABLE_HD_POTION_UPSELL;
    if (null == t || null != k) return null;
    let F = (0, g.Z)(t),
        V = _.BT({
            permission: j.Plq.ADD_REACTIONS,
            user: P,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: y.voiceEffectsActionBar,
        children: [
            !M &&
                F &&
                (0, i.jsx)(S.Z, {
                    channel: t,
                    themeable: r
                }),
            !M && V && (0, i.jsx)(N.Z, { channel: t }),
            D && w && (0, i.jsx)(I.Z, { channel: t }),
            G &&
                (0, i.jsx)(
                    (e) => {
                        let { channel: t, markAsDismissed: n } = e;
                        return (0, i.jsx)(d.Z, {
                            channel: t,
                            buttonRef: L,
                            dismissed: !1,
                            nudgeAlignIntoViewport: !0,
                            onClick: () => {
                                n(A.L.TAKE_ACTION);
                            },
                            onDismiss: () => {
                                n(A.L.USER_DISMISS);
                            }
                        });
                    },
                    {
                        channel: t,
                        markAsDismissed: H
                    }
                ),
            R &&
                (0, i.jsx)(Z.Z, {
                    ref: L,
                    channel: t,
                    glow: G
                }),
            O && n && (0, i.jsx)(E.Z, {}),
            O && n && (0, i.jsx)(b.Z, { channel: t }),
            O && n && (0, i.jsx)(T.Z, {})
        ]
    });
}
