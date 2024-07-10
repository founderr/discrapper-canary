n.d(t, {
    Z: function () {
        return L;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(727637), l = n(100527), u = n(906732), c = n(680295), d = n(271383), _ = n(430824), E = n(751009), f = n(785717), h = n(318661), p = n(78675), m = n(899007), I = n(438163), T = n(502762), g = n(544989), S = n(481932), A = n(195387), N = n(272510), v = n(171368), O = n(958120), R = n(215633), C = n(228168), y = n(689938), D = n(335182);
function L(e) {
    let {
            user: t,
            currentUser: n,
            guildId: L,
            channelId: b,
            messageId: M,
            roleId: P,
            closePopout: U,
            setPopoutRef: w,
            disableUserProfileLink: x = __OVERLAY__,
            newAnalyticsLocations: G = []
        } = e, {analyticsLocations: k} = (0, u.ZP)([
            ...G,
            l.Z.BITE_SIZE_PROFILE_POPOUT
        ]), B = (0, f.Q1)({
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: L,
            channelId: b,
            messageId: M,
            roleId: P
        }), F = (0, a.e7)([_.Z], () => null != L ? _.Z.getGuild(L) : null), V = (0, a.e7)([d.ZP], () => null != L ? d.ZP.getMember(L, t.id) : null), {profileStatusEditEnabled: H} = (0, E.K)({ location: 'BiteSizeProfilePopout' }), Z = i.useRef(null), Y = (0, h.ZP)(t.id, L), j = (0, s.Z)(Z);
    i.useEffect(() => {
        null == w || w(null == Z ? void 0 : Z.current);
    }, [
        Z,
        w
    ]);
    let W = e => {
        null == U || U(), (0, v.openUserProfileModal)({
            sourceAnalyticsLocations: k,
            userId: t.id,
            guildId: L,
            channelId: b,
            messageId: M,
            roleId: P,
            ...e
        });
    };
    return (0, r.jsx)(u.Gt, {
        value: k,
        children: (0, r.jsx)(f.Mt, {
            layout: 'BITE_SIZE_POPOUT',
            userId: t.id,
            guildId: L,
            channelId: b,
            messageId: M,
            roleId: P,
            shouldTrackViewOnMount: null == V || null != V.fullProfileLoadedTimestamp,
            children: (0, r.jsxs)(o.Dialog, {
                ref: Z,
                'aria-label': t.username,
                children: [
                    (0, r.jsxs)(T.Z, {
                        user: t,
                        displayProfile: Y,
                        profileType: C.y0.BITE_SIZE,
                        children: [
                            (0, r.jsxs)(g.Z, {
                                profileType: C.y0.BITE_SIZE,
                                children: [
                                    (0, r.jsx)(A.Z, {
                                        user: t,
                                        guildId: L,
                                        channelId: b,
                                        onClose: U
                                    }),
                                    (0, r.jsx)(S.Z, {
                                        profileType: C.y0.BITE_SIZE,
                                        user: t
                                    }),
                                    t.id !== n.id && (0, r.jsx)(N.Z, {
                                        user: t,
                                        guildId: L,
                                        viewProfileItem: x ? null : (0, r.jsx)(o.MenuItem, {
                                            id: 'view-profile',
                                            label: y.Z.Messages.VIEW_FULL_PROFILE,
                                            action: () => {
                                                B({
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: k
                                                }), W();
                                            }
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('header', {
                                className: D.header,
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: L,
                                        profileType: C.y0.BITE_SIZE,
                                        hasProfileEffect: (null == Y ? void 0 : Y.profileEffectId) != null
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: L,
                                        channelId: b,
                                        profileType: C.y0.BITE_SIZE,
                                        onOpenProfile: x ? void 0 : W
                                    }),
                                    (0, r.jsx)(I.Z, {
                                        user: t,
                                        profileType: C.y0.BITE_SIZE,
                                        editEnabled: H,
                                        onClose: U
                                    })
                                ]
                            }),
                            (0, r.jsx)(O.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: Y,
                                guild: F,
                                isHovering: j,
                                onOpenProfile: x ? void 0 : W,
                                channelId: b,
                                onClose: U
                            }),
                            (0, r.jsx)(R.Z, {
                                user: t,
                                guildId: L,
                                channelId: b,
                                onClose: U
                            })
                        ]
                    }),
                    (null == Y ? void 0 : Y.profileEffectId) != null && (0, r.jsx)(c.Z, {
                        profileEffectId: null == Y ? void 0 : Y.profileEffectId,
                        isHovering: j
                    })
                ]
            })
        })
    });
}
