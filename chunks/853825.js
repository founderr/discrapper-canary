n.d(i, {
    Z: function () {
        return U;
    }
}), n(47120);
var s = n(735250), l = n(470079), t = n(481060), o = n(727637), r = n(100527), a = n(906732), d = n(680295), c = n(5192), u = n(998502), I = n(785717), _ = n(318661), f = n(721987), E = n(204197), m = n(78675), S = n(741308), v = n(588822), Z = n(900927), x = n(678738), h = n(502762), p = n(530), g = n(679332), T = n(544989), N = n(228168), C = n(981631), j = n(689938), A = n(505451), O = n(247321), M = n(47460);
let R = u.ZP.getEnableHardwareAcceleration() ? t.AnimatedAvatar : t.Avatar;
function U(e) {
    let {
            user: i,
            guildId: n,
            channelId: u,
            messageId: U,
            roleId: L,
            transitionState: P,
            onClose: b,
            sourceAnalyticsLocations: y = []
        } = e, {analyticsLocations: D} = (0, a.ZP)([
            ...y,
            r.Z.SIMPLIFIED_PROFILE_MODAL
        ]), F = n === C.ME ? void 0 : n, B = (0, _.ZP)(i.id, F), {theme: G} = (0, f.Z)({
            user: i,
            displayProfile: B
        }), {
            avatarSrc: w,
            eventHandlers: k,
            avatarDecorationSrc: V
        } = (0, E.Z)({
            user: i,
            guildId: null == B ? void 0 : B.guildId,
            size: t.AvatarSizes.SIZE_120
        }), Y = l.createRef(), H = (0, o.Z)(Y);
    return (0, s.jsx)(a.Gt, {
        value: D,
        children: (0, s.jsx)(I.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: F,
            channelId: u,
            messageId: U,
            roleId: L,
            showGuildProfile: !0,
            children: (0, s.jsxs)(t.ModalRoot, {
                transitionState: P,
                className: A.root,
                hideShadow: !0,
                'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(h.Z, {
                        user: i,
                        displayProfile: B,
                        profileType: N.y0.FULL_SIZE,
                        ref: Y,
                        children: [
                            (0, s.jsx)(T.Z, {
                                profileType: N.y0.FULL_SIZE,
                                children: (0, s.jsx)(g.Z, { user: i })
                            }),
                            (0, s.jsxs)('header', {
                                children: [
                                    (0, s.jsx)(m.Z, {
                                        user: i,
                                        displayProfile: B,
                                        profileType: N.y0.FULL_SIZE,
                                        hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
                                    }),
                                    (0, s.jsx)('div', {
                                        className: A.headerInner,
                                        children: (0, s.jsx)('div', {
                                            ...k,
                                            children: (0, s.jsx)(R, {
                                                src: w,
                                                avatarDecoration: V,
                                                size: t.AvatarSizes.SIZE_120,
                                                className: A.avatar,
                                                status: void 0,
                                                statusBackdropColor: (0, t.getStatusBackdropColor)(G),
                                                'aria-label': i.username,
                                                isMobile: !1,
                                                statusTooltip: !0,
                                                statusTooltipDelay: N.vB
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, s.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, s.jsx)(p.Z, {
                                        user: i,
                                        profileType: N.y0.FULL_SIZE,
                                        nickname: c.ZP.getName(F, u, i),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, s.jsx)(S.Z, {
                                            displayProfile: B,
                                            profileType: N.y0.FULL_SIZE,
                                            onClose: b
                                        })
                                    }),
                                    (0, s.jsx)(h.Z.Overlay, {
                                        className: A.overlay,
                                        children: (0, s.jsxs)('div', {
                                            className: M.container,
                                            children: [
                                                (0, s.jsx)(t.TabBar, {
                                                    className: M.tabBar,
                                                    type: 'top',
                                                    selectedItem: N.oh.BOT_INFO,
                                                    onItemSelect: C.dG4,
                                                    children: (0, s.jsx)(t.TabBar.Item, {
                                                        className: M.tabBarItem,
                                                        id: N.oh.BOT_INFO,
                                                        'aria-label': j.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                        children: (0, s.jsx)(t.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: j.Z.Messages.USER_PROFILE_ABOUT_ME
                                                        })
                                                    }, N.oh.BOT_INFO)
                                                }),
                                                (0, s.jsxs)(t.ScrollerThin, {
                                                    fade: !0,
                                                    className: O.scroller,
                                                    children: [
                                                        (0, s.jsx)(v.Z, {
                                                            userId: i.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, s.jsx)(x.Z, {
                                                            title: j.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                            children: (0, s.jsx)(Z.Z, {
                                                                userId: i.id,
                                                                guildId: F,
                                                                tooltipDelay: N.vB
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
                    (null == B ? void 0 : B.profileEffectId) != null && (0, s.jsx)(d.Z, {
                        profileEffectId: null == B ? void 0 : B.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
