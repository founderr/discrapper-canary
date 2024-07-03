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
        } = e, {analyticsLocations: Z} = (0, c.ZP)(o.Z.PROFILE_PANEL), A = (0, h.ZP)(t.id), M = (0, r.ZP)(), b = a.useRef(null), R = (0, l.Z)(b), j = e => {
            (0, C.openUserProfileModal)({
                sourceAnalyticsLocations: Z,
                userId: t.id,
                channelId: n.id,
                ...e
            });
        };
    return (0, i.jsx)(c.Gt, {
        value: Z,
        children: (0, i.jsx)(u.Mt, {
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id,
            children: (0, i.jsxs)(p.Z, {
                ref: b,
                user: t,
                displayProfile: A,
                profileType: N.y0.PANEL,
                themeOverride: M,
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
                                displayProfile: A,
                                channel: n,
                                isHovering: R,
                                onOpenProfile: j
                            }),
                            (0, i.jsx)(g.Z, {
                                user: t,
                                displayProfile: A,
                                channelId: n.id,
                                isHovering: R,
                                onOpenProfile: j
                            }),
                            (0, i.jsx)(T.Z, {
                                user: t,
                                channelId: n.id
                            }),
                            (0, i.jsx)(v.Z, {
                                user: t,
                                displayProfile: A
                            })
                        ]
                    }),
                    (0, i.jsx)(I.Z, {
                        user: t,
                        channelId: n.id
                    }),
                    (null == A ? void 0 : A.profileEffectId) != null && (0, i.jsx)(d.Z, {
                        profileEffectId: null == A ? void 0 : A.profileEffectId,
                        isHovering: R
                    })
                ]
            })
        })
    });
}
