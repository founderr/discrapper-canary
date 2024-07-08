i.d(n, {
    Z: function () {
        return U;
    }
}), i(47120);
var o = i(735250), s = i(470079), t = i(481060), l = i(727637), a = i(100527), r = i(906732), c = i(680295), d = i(5192), u = i(998502), I = i(785717), E = i(318661), _ = i(721987), f = i(204197), Z = i(78675), m = i(741308), v = i(588822), S = i(900927), x = i(678738), N = i(502762), h = i(530), g = i(679332), p = i(544989), C = i(228168), T = i(981631), R = i(689938), M = i(505451), j = i(247321), A = i(47460);
let P = u.ZP.getEnableHardwareAcceleration() ? t.AnimatedAvatar : t.Avatar;
function U(e) {
    let {
            user: n,
            guildId: i,
            channelId: u,
            messageId: U,
            roleId: O,
            transitionState: L,
            onClose: b,
            sourceAnalyticsLocations: y = []
        } = e, {analyticsLocations: D} = (0, r.ZP)([
            ...y,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), B = i === T.ME ? void 0 : i, F = (0, E.ZP)(n.id, B), {theme: G} = (0, _.Z)({
            user: n,
            displayProfile: F
        }), {
            avatarSrc: k,
            eventHandlers: w,
            avatarDecorationSrc: Y
        } = (0, f.Z)({
            user: n,
            guildId: null == F ? void 0 : F.guildId,
            size: t.AvatarSizes.SIZE_120
        }), V = s.createRef(), H = (0, l.Z)(V);
    return (0, o.jsx)(r.Gt, {
        value: D,
        children: (0, o.jsx)(I.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: B,
            channelId: u,
            messageId: U,
            roleId: O,
            showGuildProfile: !0,
            children: (0, o.jsxs)(t.ModalRoot, {
                transitionState: L,
                className: M.root,
                hideShadow: !0,
                'aria-label': R.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, o.jsxs)(N.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: C.y0.FULL_SIZE,
                        ref: V,
                        children: [
                            (0, o.jsx)(p.Z, {
                                profileType: C.y0.FULL_SIZE,
                                children: (0, o.jsx)(g.Z, { user: n })
                            }),
                            (0, o.jsxs)('header', {
                                children: [
                                    (0, o.jsx)(Z.Z, {
                                        user: n,
                                        displayProfile: F,
                                        profileType: C.y0.FULL_SIZE,
                                        hasProfileEffect: (null == F ? void 0 : F.profileEffectId) != null
                                    }),
                                    (0, o.jsx)('div', {
                                        className: M.headerInner,
                                        children: (0, o.jsx)('div', {
                                            ...w,
                                            children: (0, o.jsx)(P, {
                                                src: k,
                                                avatarDecoration: Y,
                                                size: t.AvatarSizes.SIZE_120,
                                                className: M.avatar,
                                                status: void 0,
                                                statusBackdropColor: (0, t.getStatusBackdropColor)(G),
                                                'aria-label': n.username,
                                                isMobile: !1,
                                                statusTooltip: !0,
                                                statusTooltipDelay: C.vB
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, o.jsxs)('div', {
                                className: M.body,
                                children: [
                                    (0, o.jsx)(h.Z, {
                                        user: n,
                                        profileType: C.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(B, u, n),
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, o.jsx)(m.Z, {
                                            displayProfile: F,
                                            profileType: C.y0.FULL_SIZE,
                                            onClose: b
                                        })
                                    }),
                                    (0, o.jsx)(N.Z.Overlay, {
                                        className: M.overlay,
                                        children: (0, o.jsxs)('div', {
                                            className: A.container,
                                            children: [
                                                (0, o.jsx)(t.TabBar, {
                                                    className: A.tabBar,
                                                    type: 'top',
                                                    selectedItem: C.oh.BOT_INFO,
                                                    onItemSelect: T.dG4,
                                                    children: (0, o.jsx)(t.TabBar.Item, {
                                                        className: A.tabBarItem,
                                                        id: C.oh.BOT_INFO,
                                                        'aria-label': R.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                        children: (0, o.jsx)(t.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: R.Z.Messages.USER_PROFILE_ABOUT_ME
                                                        })
                                                    }, C.oh.BOT_INFO)
                                                }),
                                                (0, o.jsxs)(t.ScrollerThin, {
                                                    fade: !0,
                                                    className: j.scroller,
                                                    children: [
                                                        (0, o.jsx)(v.Z, {
                                                            userId: n.id,
                                                            userBio: null == F ? void 0 : F.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, o.jsx)(x.Z, {
                                                            title: R.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                            children: (0, o.jsx)(S.Z, {
                                                                userId: n.id,
                                                                guildId: B,
                                                                tooltipDelay: C.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == F ? void 0 : F.profileEffectId) != null && (0, o.jsx)(c.Z, {
                        profileEffectId: null == F ? void 0 : F.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
