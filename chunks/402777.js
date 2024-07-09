n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(735250), a = n(470079), s = n(597312), l = n(727637), r = n(410030), o = n(100527), c = n(906732), d = n(680295), u = n(785717), h = n(318661), p = n(502762), m = n(437758), _ = n(544989), f = n(481932), E = n(272510), C = n(171368), g = n(926150), I = n(308829), x = n(354810), T = n(940885), v = n(625015), N = n(228168), S = n(642402);
function Z(e) {
    let {
            user: t,
            channel: n
        } = e, Z = __OVERLAY__, {analyticsLocations: A} = (0, c.ZP)(o.Z.PROFILE_PANEL), M = (0, h.ZP)(t.id), b = (0, r.ZP)(), R = a.useRef(null), j = (0, l.Z)(R), L = e => {
            (0, C.openUserProfileModal)({
                sourceAnalyticsLocations: A,
                userId: t.id,
                channelId: n.id,
                ...e
            });
        };
    return (0, i.jsx)(c.Gt, {
        value: A,
        children: (0, i.jsx)(u.Mt, {
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id,
            children: (0, i.jsxs)(p.Z, {
                ref: R,
                user: t,
                displayProfile: M,
                profileType: N.y0.PANEL,
                themeOverride: b,
                className: S.container,
                children: [
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsxs)(_.Z, {
                                profileType: N.y0.PANEL,
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: t,
                                        profileType: N.y0.PANEL
                                    }),
                                    t.bot ? (0, i.jsx)(m.Z, { user: t }) : (0, i.jsx)(E.Z, { user: t })
                                ]
                            }),
                            (0, i.jsx)(x.Z, {
                                user: t,
                                displayProfile: M,
                                channel: n,
                                isHovering: j,
                                onOpenProfile: Z ? void 0 : L
                            }),
                            (0, i.jsx)(g.Z, {
                                user: t,
                                displayProfile: M,
                                channel: n,
                                isHovering: j,
                                onOpenProfile: Z ? void 0 : L
                            }),
                            (0, i.jsx)(T.Z, {
                                user: t,
                                channelId: n.id
                            }),
                            (0, i.jsx)(v.Z, {
                                user: t,
                                displayProfile: M
                            })
                        ]
                    }),
                    (0, i.jsx)(I.Z, {
                        user: t,
                        channelId: n.id
                    }),
                    (null == M ? void 0 : M.profileEffectId) != null && (0, i.jsx)(d.Z, {
                        profileEffectId: null == M ? void 0 : M.profileEffectId,
                        isHovering: j
                    })
                ]
            })
        })
    });
}
