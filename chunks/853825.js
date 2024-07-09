i.d(n, {
    Z: function () {
        return U;
    }
}), i(47120);
var l = i(735250), s = i(470079), o = i(481060), t = i(727637), a = i(100527), r = i(906732), d = i(680295), c = i(5192), u = i(998502), I = i(785717), f = i(318661), _ = i(721987), E = i(204197), m = i(78675), Z = i(741308), v = i(588822), S = i(900927), x = i(678738), h = i(502762), N = i(530), p = i(679332), g = i(544989), T = i(228168), C = i(981631), j = i(689938), R = i(505451), A = i(247321), M = i(47460);
let P = u.ZP.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;
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
        } = e, {analyticsLocations: B} = (0, r.ZP)([
            ...y,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), D = i === C.ME ? void 0 : i, F = (0, f.ZP)(n.id, D), {theme: G} = (0, _.Z)({
            user: n,
            displayProfile: F
        }), {
            avatarSrc: w,
            eventHandlers: k,
            avatarDecorationSrc: Y
        } = (0, E.Z)({
            user: n,
            guildId: null == F ? void 0 : F.guildId,
            size: o.AvatarSizes.SIZE_120
        }), V = s.createRef(), H = (0, t.Z)(V);
    return (0, l.jsx)(r.Gt, {
        value: B,
        children: (0, l.jsx)(I.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: D,
            channelId: u,
            messageId: U,
            roleId: O,
            showGuildProfile: !0,
            children: (0, l.jsxs)(o.ModalRoot, {
                transitionState: L,
                className: R.root,
                hideShadow: !0,
                'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, l.jsxs)(h.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: T.y0.FULL_SIZE,
                        ref: V,
                        children: [
                            (0, l.jsx)(g.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, l.jsx)(p.Z, { user: n })
                            }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(m.Z, {
                                        user: n,
                                        displayProfile: F,
                                        profileType: T.y0.FULL_SIZE,
                                        hasProfileEffect: (null == F ? void 0 : F.profileEffectId) != null
                                    }),
                                    (0, l.jsx)('div', {
                                        className: R.headerInner,
                                        children: (0, l.jsx)('div', {
                                            ...k,
                                            children: (0, l.jsx)(P, {
                                                src: w,
                                                avatarDecoration: Y,
                                                size: o.AvatarSizes.SIZE_120,
                                                className: R.avatar,
                                                status: void 0,
                                                statusBackdropColor: (0, o.getStatusBackdropColor)(G),
                                                'aria-label': n.username,
                                                isMobile: !1,
                                                statusTooltip: !0,
                                                statusTooltipDelay: T.vB
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: R.body,
                                children: [
                                    (0, l.jsx)(N.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: c.ZP.getName(D, u, n),
                                        pronouns: null == F ? void 0 : F.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(Z.Z, {
                                            displayProfile: F,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: b
                                        })
                                    }),
                                    (0, l.jsx)(h.Z.Overlay, {
                                        className: R.overlay,
                                        children: (0, l.jsxs)('div', {
                                            className: M.container,
                                            children: [
                                                (0, l.jsx)(o.TabBar, {
                                                    className: M.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: C.dG4,
                                                    children: (0, l.jsx)(o.TabBar.Item, {
                                                        className: M.tabBarItem,
                                                        id: T.oh.BOT_INFO,
                                                        'aria-label': j.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                        children: (0, l.jsx)(o.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: j.Z.Messages.USER_PROFILE_ABOUT_ME
                                                        })
                                                    }, T.oh.BOT_INFO)
                                                }),
                                                (0, l.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: A.scroller,
                                                    children: [
                                                        (0, l.jsx)(v.Z, {
                                                            userId: n.id,
                                                            userBio: null == F ? void 0 : F.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, l.jsx)(x.Z, {
                                                            title: j.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                            children: (0, l.jsx)(S.Z, {
                                                                userId: n.id,
                                                                guildId: D,
                                                                tooltipDelay: T.vB
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
                    (null == F ? void 0 : F.profileEffectId) != null && (0, l.jsx)(d.Z, {
                        profileEffectId: null == F ? void 0 : F.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
