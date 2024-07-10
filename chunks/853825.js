n.d(i, {
    Z: function () {
        return M;
    }
}), n(47120);
var l = n(735250), s = n(470079), t = n(481060), o = n(727637), a = n(100527), r = n(906732), d = n(680295), c = n(5192), u = n(998502), I = n(785717), f = n(318661), _ = n(721987), E = n(204197), m = n(78675), Z = n(741308), v = n(588822), S = n(900927), x = n(678738), h = n(502762), p = n(530), g = n(679332), N = n(544989), T = n(228168), C = n(981631), j = n(689938), A = n(505451), R = n(247321), U = n(47460);
let O = u.ZP.getEnableHardwareAcceleration() ? t.AnimatedAvatar : t.Avatar;
function M(e) {
    let {
            user: i,
            guildId: n,
            channelId: u,
            messageId: M,
            roleId: L,
            transitionState: P,
            onClose: b,
            sourceAnalyticsLocations: y = []
        } = e, {analyticsLocations: D} = (0, r.ZP)([
            ...y,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), F = n === C.ME ? void 0 : n, B = (0, f.ZP)(i.id, F), {theme: G} = (0, _.Z)({
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
        }), Y = s.createRef(), H = (0, o.Z)(Y);
    return (0, l.jsx)(r.Gt, {
        value: D,
        children: (0, l.jsx)(I.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: F,
            channelId: u,
            messageId: M,
            roleId: L,
            showGuildProfile: !0,
            children: (0, l.jsxs)(t.ModalRoot, {
                transitionState: P,
                className: A.root,
                hideShadow: !0,
                'aria-label': j.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, l.jsxs)(h.Z, {
                        user: i,
                        displayProfile: B,
                        profileType: T.y0.FULL_SIZE,
                        ref: Y,
                        children: [
                            (0, l.jsx)(N.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, l.jsx)(g.Z, { user: i })
                            }),
                            (0, l.jsxs)('header', {
                                children: [
                                    (0, l.jsx)(m.Z, {
                                        user: i,
                                        displayProfile: B,
                                        profileType: T.y0.FULL_SIZE,
                                        hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
                                    }),
                                    (0, l.jsx)('div', {
                                        className: A.headerInner,
                                        children: (0, l.jsx)('div', {
                                            ...k,
                                            children: (0, l.jsx)(O, {
                                                src: w,
                                                avatarDecoration: V,
                                                size: t.AvatarSizes.SIZE_120,
                                                className: A.avatar,
                                                status: void 0,
                                                statusBackdropColor: (0, t.getStatusBackdropColor)(G),
                                                'aria-label': i.username,
                                                isMobile: !1,
                                                statusTooltip: !0,
                                                statusTooltipDelay: T.vB
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, l.jsx)(p.Z, {
                                        user: i,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: c.ZP.getName(F, u, i),
                                        pronouns: null == B ? void 0 : B.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, l.jsx)(Z.Z, {
                                            displayProfile: B,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: b
                                        })
                                    }),
                                    (0, l.jsx)(h.Z.Overlay, {
                                        className: A.overlay,
                                        children: (0, l.jsxs)('div', {
                                            className: U.container,
                                            children: [
                                                (0, l.jsx)(t.TabBar, {
                                                    className: U.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: C.dG4,
                                                    children: (0, l.jsx)(t.TabBar.Item, {
                                                        className: U.tabBarItem,
                                                        id: T.oh.BOT_INFO,
                                                        'aria-label': j.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                        children: (0, l.jsx)(t.Text, {
                                                            variant: 'text-sm/normal',
                                                            children: j.Z.Messages.USER_PROFILE_ABOUT_ME
                                                        })
                                                    }, T.oh.BOT_INFO)
                                                }),
                                                (0, l.jsxs)(t.ScrollerThin, {
                                                    fade: !0,
                                                    className: R.scroller,
                                                    children: [
                                                        (0, l.jsx)(v.Z, {
                                                            userId: i.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, l.jsx)(x.Z, {
                                                            title: j.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                                                            children: (0, l.jsx)(S.Z, {
                                                                userId: i.id,
                                                                guildId: F,
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
                    (null == B ? void 0 : B.profileEffectId) != null && (0, l.jsx)(d.Z, {
                        profileEffectId: null == B ? void 0 : B.profileEffectId,
                        isHovering: H
                    })
                ]
            })
        })
    });
}
