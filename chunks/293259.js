i.d(n, {
    Z: function () {
        return M;
    }
});
var o = i(735250), s = i(470079), t = i(442837), l = i(692547), a = i(481060), r = i(239091), c = i(233440), d = i(314897), u = i(158776), I = i(699516), E = i(998502), _ = i(785717), f = i(621853), Z = i(204197), m = i(735336), v = i(520978), S = i(184325), x = i(652853), N = i(225714), h = i(228168), g = i(231338), p = i(689938), C = i(520067);
let T = a.AvatarSizes.SIZE_120, R = E.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function M(e) {
    let {
            displayProfile: n,
            user: E,
            guildId: M,
            channelId: j,
            friendToken: A,
            className: P,
            isStreaming: U,
            hasProfileEffect: O,
            onClose: L
        } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(E.id)), y = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(E.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(E.id)), B = (0, t.e7)([f.Z], () => f.Z.getUserProfile(E.id)), F = (0, t.e7)([d.default], () => d.default.getId() === E.id), {theme: G} = (0, x.z)(), {trackUserProfileAction: k} = (0, _.KZ)(), {
            avatarSrc: w,
            eventHandlers: Y,
            avatarDecorationSrc: V
        } = (0, Z.Z)({
            user: E,
            size: T
        }), H = s.useMemo(() => (0, c.W)(E, j), [
            E,
            j
        ]);
    return (0, o.jsxs)('header', {
        className: P,
        children: [
            (0, o.jsx)(m.Z, {
                displayProfile: n,
                onClose: L,
                user: E,
                profileType: h.y0.MODAL,
                hasProfileEffect: O
            }),
            (0, o.jsxs)('div', {
                className: C.header,
                children: [
                    (0, o.jsx)('div', {
                        ...Y,
                        children: (0, o.jsx)(R, {
                            src: w,
                            avatarDecoration: V,
                            size: T,
                            className: C.avatar,
                            status: H ? g.Sk.UNKNOWN : U ? g.Sk.STREAMING : D,
                            statusBackdropColor: (0, a.getStatusBackdropColor)(G),
                            isMobile: y,
                            statusTooltip: !0,
                            'aria-label': E.username
                        })
                    }),
                    (0, o.jsxs)('div', {
                        className: C.headerTop,
                        children: [
                            (null == B ? void 0 : B.profileFetchFailed) && !E.isClyde() ? (0, o.jsx)(a.Tooltip, {
                                text: p.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, o.jsx)(a.CircleExclamationPointIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: C.warningCircleIcon,
                                    color: l.Z.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, o.jsx)(S.Z, {
                                user: E,
                                className: C.badgeList,
                                guildId: M,
                                size: S.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: S.V.SIZE_18,
                                onBadgeClick: L
                            }),
                            (0, o.jsxs)('div', {
                                className: C.relationshipButtons,
                                children: [
                                    (null == B ? void 0 : B.application) != null && (0, o.jsx)(v.Z, {
                                        className: C.applicationInstallButton,
                                        application: B.application
                                    }),
                                    (0, o.jsx)(N.Z, {
                                        user: E,
                                        isCurrentUser: F,
                                        relationshipType: b,
                                        friendToken: A,
                                        onClose: L
                                    }),
                                    F || E.isNonUserBot() ? null : (0, o.jsx)(a.Clickable, {
                                        focusProps: { offset: { left: 8 } },
                                        onClick: function (e) {
                                            k({ action: 'PRESS_OPTIONS' }), (0, r.jW)(e, async () => {
                                                let {default: e} = await i.e('29136').then(i.bind(i, 193646));
                                                return n => (0, o.jsx)(e, {
                                                    ...n,
                                                    user: E,
                                                    isCurrentUser: F,
                                                    guildId: M,
                                                    relationshipType: b,
                                                    trackUserProfileAction: k,
                                                    onClose: L
                                                });
                                            });
                                        },
                                        children: (0, o.jsx)(a.MoreVerticalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: C.additionalActionsIcon
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
