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
    C = n(131951),
    x = n(594174),
    _ = n(700785),
    v = n(213652),
    I = n(320427),
    E = n(145010),
    b = n(933686),
    N = n(361057),
    S = n(997614),
    Z = n(159909),
    T = n(981631),
    j = n(921944),
    A = n(637335);
function y(e) {
    let { channel: t, hasActiveStream: n, themeable: r = !1 } = e,
        y = (0, s.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return a()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        P = (0, u.Ou)(t),
        M = l.useRef(null),
        R = (0, p.Z)(),
        { isSharedCanvasEnabled: L } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: k } = m.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        O = (0, c.Z)(C.Z),
        D = (0, u.Zm)(t, 'VoiceEffectsActionBar') ? [o.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [w, B] = (0, h.US)(D, void 0, !0),
        U = w === o.z.CONSUMABLE_HD_POTION_UPSELL;
    if (null == t || null != R) return null;
    let H = (0, g.Z)(t),
        G = _.BT({
            permission: T.Plq.ADD_REACTIONS,
            user: y,
            context: t
        });
    return (0, i.jsxs)('div', {
        className: A.voiceEffectsActionBar,
        children: [
            H &&
                (0, i.jsx)(S.Z, {
                    channel: t,
                    themeable: r
                }),
            G && (0, i.jsx)(b.Z, { channel: t }),
            k && O && (0, i.jsx)(v.Z, { channel: t }),
            U &&
                (0, i.jsx)(
                    (e) => {
                        let { channel: t, markAsDismissed: n } = e;
                        return (0, i.jsx)(d.Z, {
                            channel: t,
                            buttonRef: M,
                            dismissed: !1,
                            nudgeAlignIntoViewport: !0,
                            onClick: () => {
                                n(j.L.TAKE_ACTION);
                            },
                            onDismiss: () => {
                                n(j.L.USER_DISMISS);
                            }
                        });
                    },
                    {
                        channel: t,
                        markAsDismissed: B
                    }
                ),
            P &&
                (0, i.jsx)(N.Z, {
                    ref: M,
                    channel: t,
                    glow: U
                }),
            L && n && (0, i.jsx)(I.Z, {}),
            L && n && (0, i.jsx)(E.Z, { channel: t }),
            L && n && (0, i.jsx)(Z.Z, {})
        ]
    });
}
