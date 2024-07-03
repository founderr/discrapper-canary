n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(727637), l = n(100527), u = n(906732), c = n(680295), d = n(271383), _ = n(430824), E = n(751009), f = n(785717), h = n(318661), p = n(502762), m = n(544989), I = n(481932), T = n(195387), g = n(272510), S = n(171368), A = n(958120), N = n(215633), v = n(23293), O = n(228168), R = n(689938);
function C(e) {
    let {
            user: t,
            currentUser: n,
            guildId: C,
            channelId: y,
            messageId: D,
            roleId: L,
            closePopout: b,
            setPopoutRef: M,
            disableUserProfileLink: P = __OVERLAY__,
            newAnalyticsLocations: U = []
        } = e, {analyticsLocations: w} = (0, u.ZP)([
            ...U,
            l.Z.BITE_SIZE_PROFILE_POPOUT
        ]), x = (0, f.Q1)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: C,
            channelId: y,
            messageId: D,
            roleId: L
        }), G = (0, a.e7)([_.Z], () => null != C ? _.Z.getGuild(C) : null), k = (0, a.e7)([d.ZP], () => null != C ? d.ZP.getMember(C, t.id) : null), {profileStatusEditEnabled: B} = (0, E.K)({ location: 'BiteSizeProfilePopout' }), F = i.useRef(null), V = (0, h.ZP)(t.id, C), H = (0, s.Z)(F);
    i.useEffect(() => {
        null == M || M(null == F ? void 0 : F.current);
    }, [
        F,
        M
    ]);
    let Z = e => {
        null == b || b(), (0, S.openUserProfileModal)({
            sourceAnalyticsLocations: w,
            userId: t.id,
            guildId: C,
            channelId: y,
            messageId: D,
            roleId: L,
            ...e
        });
    };
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(f.Mt, {
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: C,
            channelId: y,
            messageId: D,
            roleId: L,
            shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(o.Dialog, {
                ref: F,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(p.Z, {
                        user: t,
                        displayProfile: V,
                        profileType: O.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(m.Z, {
                                profileType: O.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(T.Z, {
                                        user: t,
                                        guildId: C,
                                        channelId: y,
                                        onClose: b
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        profileType: O.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id && (0, r.jsx)(g.Z, {
                                        user: t,
                                        guildId: C,
                                        viewProfileItem: P ? null : (0, r.jsx)(o.MenuItem, {
                                            id: 'view-profile',
                                            label: R.Z.Messages.VIEW_FULL_PROFILE,
                                            action: () => {
                                                x({
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: w
                                                }), Z();
                                            }
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(v.Z, {
                                user: t,
                                displayProfile: V,
                                guildId: C,
                                channelId: y,
                                statusEditEnabled: B,
                                onOpenProfile: P ? void 0 : Z,
                                onClose: b
                            }),
                            (0, r.jsx)(A.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: V,
                                guild: G,
                                isHovering: H,
                                onOpenProfile: P ? void 0 : Z,
                                channelId: y,
                                onClose: b
                            }),
                            (0, r.jsx)(N.Z, {
                                user: t,
                                guildId: C,
                                channelId: y,
                                onClose: b
                            })
                        ]
                    }),
                    (null == V ? void 0 : V.profileEffectId) != null && (0, r.jsx)(c.Z, {
                        profileEffectId: null == V ? void 0 : V.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
