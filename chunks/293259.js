i.d(n, {
    Z: function () {
        return R;
    }
});
var l = i(735250), s = i(470079), o = i(442837), t = i(692547), a = i(481060), r = i(239091), d = i(233440), c = i(314897), u = i(158776), I = i(699516), f = i(998502), _ = i(785717), E = i(621853), m = i(204197), Z = i(735336), v = i(520978), S = i(184325), x = i(652853), h = i(225714), N = i(228168), p = i(231338), g = i(689938), T = i(520067);
let C = a.AvatarSizes.SIZE_120, j = f.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function R(e) {
    let {
            displayProfile: n,
            user: f,
            guildId: R,
            channelId: A,
            friendToken: M,
            className: P,
            isStreaming: U,
            hasProfileEffect: O,
            onClose: L
        } = e, b = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(f.id)), y = (0, o.e7)([u.Z], () => u.Z.isMobileOnline(f.id)), B = (0, o.e7)([u.Z], () => u.Z.getStatus(f.id)), D = (0, o.e7)([E.Z], () => E.Z.getUserProfile(f.id)), F = (0, o.e7)([c.default], () => c.default.getId() === f.id), {theme: G} = (0, x.z)(), {trackUserProfileAction: w} = (0, _.KZ)(), {
            avatarSrc: k,
            eventHandlers: Y,
            avatarDecorationSrc: V
        } = (0, m.Z)({
            user: f,
            size: C
        }), H = s.useMemo(() => (0, d.W)(f, A), [
            f,
            A
        ]);
    return (0, l.jsxs)('header', {
        className: P,
        children: [
            (0, l.jsx)(Z.Z, {
                displayProfile: n,
                onClose: L,
                user: f,
                profileType: N.y0.MODAL,
                hasProfileEffect: O
            }),
            (0, l.jsxs)('div', {
                className: T.header,
                children: [
                    (0, l.jsx)('div', {
                        ...Y,
                        children: (0, l.jsx)(j, {
                            src: k,
                            avatarDecoration: V,
                            size: C,
                            className: T.avatar,
                            status: H ? p.Sk.UNKNOWN : U ? p.Sk.STREAMING : B,
                            statusBackdropColor: (0, a.getStatusBackdropColor)(G),
                            isMobile: y,
                            statusTooltip: !0,
                            'aria-label': f.username
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: T.headerTop,
                        children: [
                            (null == D ? void 0 : D.profileFetchFailed) && !f.isClyde() ? (0, l.jsx)(a.Tooltip, {
                                text: g.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, l.jsx)(a.CircleExclamationPointIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: T.warningCircleIcon,
                                    color: t.Z.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, l.jsx)(S.Z, {
                                user: f,
                                className: T.badgeList,
                                guildId: R,
                                size: S.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: S.V.SIZE_18,
                                onBadgeClick: L
                            }),
                            (0, l.jsxs)('div', {
                                className: T.relationshipButtons,
                                children: [
                                    (null == D ? void 0 : D.application) != null && (0, l.jsx)(v.Z, {
                                        className: T.applicationInstallButton,
                                        application: D.application
                                    }),
                                    (0, l.jsx)(h.Z, {
                                        user: f,
                                        isCurrentUser: F,
                                        relationshipType: b,
                                        friendToken: M,
                                        onClose: L
                                    }),
                                    F || f.isNonUserBot() ? null : (0, l.jsx)(a.Clickable, {
                                        focusProps: { offset: { left: 8 } },
                                        onClick: function (e) {
                                            w({ action: 'PRESS_OPTIONS' }), (0, r.jW)(e, async () => {
                                                let {default: e} = await i.e('29136').then(i.bind(i, 193646));
                                                return n => (0, l.jsx)(e, {
                                                    ...n,
                                                    user: f,
                                                    isCurrentUser: F,
                                                    guildId: R,
                                                    relationshipType: b,
                                                    trackUserProfileAction: w,
                                                    onClose: L
                                                });
                                            });
                                        },
                                        children: (0, l.jsx)(a.MoreVerticalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: T.additionalActionsIcon
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
