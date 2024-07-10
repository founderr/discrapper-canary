n.d(i, {
    Z: function () {
        return A;
    }
});
var l = n(735250), s = n(470079), t = n(442837), o = n(692547), a = n(481060), r = n(239091), d = n(233440), c = n(314897), u = n(158776), I = n(699516), f = n(998502), _ = n(785717), E = n(621853), m = n(204197), Z = n(735336), v = n(520978), S = n(184325), x = n(652853), h = n(225714), p = n(228168), g = n(231338), N = n(689938), T = n(520067);
let C = a.AvatarSizes.SIZE_120, j = f.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function A(e) {
    let {
            displayProfile: i,
            user: f,
            guildId: A,
            channelId: R,
            friendToken: U,
            className: O,
            isStreaming: M,
            hasProfileEffect: L,
            onClose: P
        } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(f.id)), y = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(f.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(f.id)), F = (0, t.e7)([E.Z], () => E.Z.getUserProfile(f.id)), B = (0, t.e7)([c.default], () => c.default.getId() === f.id), {theme: G} = (0, x.z)(), {trackUserProfileAction: w} = (0, _.KZ)(), {
            avatarSrc: k,
            eventHandlers: V,
            avatarDecorationSrc: Y
        } = (0, m.Z)({
            user: f,
            size: C
        }), H = s.useMemo(() => (0, d.W)(f, R), [
            f,
            R
        ]);
    return (0, l.jsxs)('header', {
        className: O,
        children: [
            (0, l.jsx)(Z.Z, {
                displayProfile: i,
                onClose: P,
                user: f,
                profileType: p.y0.MODAL,
                hasProfileEffect: L
            }),
            (0, l.jsxs)('div', {
                className: T.header,
                children: [
                    (0, l.jsx)('div', {
                        ...V,
                        children: (0, l.jsx)(j, {
                            src: k,
                            avatarDecoration: Y,
                            size: C,
                            className: T.avatar,
                            status: H ? g.Sk.UNKNOWN : M ? g.Sk.STREAMING : D,
                            statusBackdropColor: (0, a.getStatusBackdropColor)(G),
                            isMobile: y,
                            statusTooltip: !0,
                            'aria-label': f.username
                        })
                    }),
                    (0, l.jsxs)('div', {
                        className: T.headerTop,
                        children: [
                            (null == F ? void 0 : F.profileFetchFailed) && !f.isClyde() ? (0, l.jsx)(a.Tooltip, {
                                text: N.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, l.jsx)(a.CircleExclamationPointIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: T.warningCircleIcon,
                                    color: o.Z.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, l.jsx)(S.Z, {
                                user: f,
                                className: T.badgeList,
                                guildId: A,
                                size: S.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: S.V.SIZE_18,
                                onBadgeClick: P
                            }),
                            (0, l.jsxs)('div', {
                                className: T.relationshipButtons,
                                children: [
                                    (null == F ? void 0 : F.application) != null && (0, l.jsx)(v.Z, {
                                        className: T.applicationInstallButton,
                                        application: F.application
                                    }),
                                    (0, l.jsx)(h.Z, {
                                        user: f,
                                        isCurrentUser: B,
                                        relationshipType: b,
                                        friendToken: U,
                                        onClose: P
                                    }),
                                    B || f.isNonUserBot() ? null : (0, l.jsx)(a.Clickable, {
                                        focusProps: { offset: { left: 8 } },
                                        onClick: function (e) {
                                            w({ action: 'PRESS_OPTIONS' }), (0, r.jW)(e, async () => {
                                                let {default: e} = await n.e('29136').then(n.bind(n, 193646));
                                                return i => (0, l.jsx)(e, {
                                                    ...i,
                                                    user: f,
                                                    isCurrentUser: B,
                                                    guildId: A,
                                                    relationshipType: b,
                                                    trackUserProfileAction: w,
                                                    onClose: P
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
