i.d(n, {
    Z: function () {
        return M;
    }
}), i(47120);
var o = i(735250);
i(470079);
var s = i(442837), t = i(974674), l = i(696826), a = i(420660), r = i(233440), c = i(314897), d = i(158776), u = i(699516), I = i(998502), E = i(751009), f = i(332390), _ = i(877485), Z = i(505737), m = i(204197), v = i(78675), S = i(438163), x = i(652853), h = i(900687), N = i(228168), g = i(182294), p = i(602091), C = i(231338), T = i(505451);
let R = I.ZP.getEnableHardwareAcceleration() ? t.Xo : t.qE;
function M(e) {
    let {
            user: n,
            displayProfile: i,
            activity: t,
            guildId: I,
            channelId: M,
            transitionState: j,
            viewProfileItem: A,
            onClose: P
        } = e, {theme: U} = (0, x.z)(), O = (0, Z.Z)(n.id, I), {
            avatarSrc: L,
            eventHandlers: b,
            avatarDecorationSrc: y
        } = (0, m.Z)({
            user: n,
            guildId: null == i ? void 0 : i.guildId,
            size: g.EF.SIZE_120
        }), {profileStatusEditEnabled: D} = (0, E.K)({ location: 'SimplifiedUserProfileModalHeader' }), {
            originalFriendingEnabled: B,
            improvedFriendingEnabled: F
        } = (0, _.V)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: G,
            activeInviteToCallCtaEnabled: k
        } = (0, f.l)({ location: 'SimplifiedUserProfileModalHeader' }), w = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), Y = (0, s.e7)([c.default], () => c.default.getId() === n.id), [V, H] = (0, s.Wu)([d.Z], () => {
            let e = d.Z.isMobileOnline(n.id);
            return (0, r.W)(n, M) ? [
                C.Sk.UNKNOWN,
                e
            ] : (0, a.Z)(t) ? [
                C.Sk.STREAMING,
                e
            ] : [
                d.Z.getStatus(n.id),
                e
            ];
        });
    return (0, o.jsxs)('header', {
        children: [
            (0, o.jsx)(v.Z, {
                user: n,
                displayProfile: i,
                profileType: N.y0.FULL_SIZE,
                hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
            }),
            (0, o.jsxs)('div', {
                className: T.headerInner,
                children: [
                    (0, o.jsx)('div', {
                        ...b,
                        children: (0, o.jsx)(R, {
                            src: L,
                            avatarDecoration: y,
                            size: g.EF.SIZE_120,
                            className: T.avatar,
                            status: V,
                            statusBackdropColor: (0, l.QF)(U),
                            'aria-label': n.username,
                            isMobile: H,
                            statusTooltip: !0,
                            statusTooltipDelay: N.vB
                        })
                    }),
                    (0, o.jsx)(h.Z, {
                        user: n,
                        isCurrentUser: Y,
                        guildId: I,
                        canDM: O,
                        relationshipType: w,
                        originalFriendingEnabled: B,
                        improvedFriendingEnabled: F,
                        persistentCallCtaEnabled: G,
                        activeInviteToCallCtaEnabled: k,
                        viewProfileItem: A,
                        onClose: P
                    }),
                    (0, o.jsx)(S.Z, {
                        user: n,
                        profileType: N.y0.FULL_SIZE,
                        editEnabled: D,
                        hasEntered: j === p.Dv.ENTERED,
                        onClose: P
                    })
                ]
            })
        ]
    });
}
