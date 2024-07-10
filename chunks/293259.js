n.d(i, {
    Z: function () {
        return A;
    }
});
var s = n(735250), l = n(470079), t = n(442837), o = n(692547), r = n(481060), a = n(239091), d = n(233440), c = n(314897), u = n(158776), I = n(699516), _ = n(998502), f = n(785717), E = n(621853), m = n(204197), S = n(735336), v = n(520978), Z = n(184325), x = n(652853), h = n(225714), p = n(228168), g = n(231338), T = n(689938), N = n(520067);
let C = r.AvatarSizes.SIZE_120, j = _.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
function A(e) {
    let {
            displayProfile: i,
            user: _,
            guildId: A,
            channelId: O,
            friendToken: M,
            className: R,
            isStreaming: U,
            hasProfileEffect: L,
            onClose: P
        } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), y = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, t.e7)([E.Z], () => E.Z.getUserProfile(_.id)), B = (0, t.e7)([c.default], () => c.default.getId() === _.id), {theme: G} = (0, x.z)(), {trackUserProfileAction: w} = (0, f.KZ)(), {
            avatarSrc: k,
            eventHandlers: V,
            avatarDecorationSrc: Y
        } = (0, m.Z)({
            user: _,
            size: C
        }), H = l.useMemo(() => (0, d.W)(_, O), [
            _,
            O
        ]);
    return (0, s.jsxs)('header', {
        className: R,
        children: [
            (0, s.jsx)(S.Z, {
                displayProfile: i,
                onClose: P,
                user: _,
                profileType: p.y0.MODAL,
                hasProfileEffect: L
            }),
            (0, s.jsxs)('div', {
                className: N.header,
                children: [
                    (0, s.jsx)('div', {
                        ...V,
                        children: (0, s.jsx)(j, {
                            src: k,
                            avatarDecoration: Y,
                            size: C,
                            className: N.avatar,
                            status: H ? g.Sk.UNKNOWN : U ? g.Sk.STREAMING : D,
                            statusBackdropColor: (0, r.getStatusBackdropColor)(G),
                            isMobile: y,
                            statusTooltip: !0,
                            'aria-label': _.username
                        })
                    }),
                    (0, s.jsxs)('div', {
                        className: N.headerTop,
                        children: [
                            (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, s.jsx)(r.Tooltip, {
                                text: T.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, s.jsx)(r.CircleExclamationPointIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    className: N.warningCircleIcon,
                                    color: o.Z.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, s.jsx)(Z.Z, {
                                user: _,
                                className: N.badgeList,
                                guildId: A,
                                size: Z.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: Z.V.SIZE_18,
                                onBadgeClick: P
                            }),
                            (0, s.jsxs)('div', {
                                className: N.relationshipButtons,
                                children: [
                                    (null == F ? void 0 : F.application) != null && (0, s.jsx)(v.Z, {
                                        className: N.applicationInstallButton,
                                        application: F.application
                                    }),
                                    (0, s.jsx)(h.Z, {
                                        user: _,
                                        isCurrentUser: B,
                                        relationshipType: b,
                                        friendToken: M,
                                        onClose: P
                                    }),
                                    B || _.isNonUserBot() ? null : (0, s.jsx)(r.Clickable, {
                                        focusProps: { offset: { left: 8 } },
                                        onClick: function (e) {
                                            w({ action: 'PRESS_OPTIONS' }), (0, a.jW)(e, async () => {
                                                let {default: e} = await n.e('29136').then(n.bind(n, 193646));
                                                return i => (0, s.jsx)(e, {
                                                    ...i,
                                                    user: _,
                                                    isCurrentUser: B,
                                                    guildId: A,
                                                    relationshipType: b,
                                                    trackUserProfileAction: w,
                                                    onClose: P
                                                });
                                            });
                                        },
                                        children: (0, s.jsx)(r.MoreVerticalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: N.additionalActionsIcon
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
