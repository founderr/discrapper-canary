i.d(n, {
    Z: function () {
        return M;
    }
}), i(47120);
var t = i(735250);
i(470079);
var o = i(442837), s = i(974674), l = i(696826), a = i(420660), r = i(233440), c = i(314897), d = i(158776), u = i(699516), I = i(998502), E = i(751009), _ = i(332390), f = i(877485), Z = i(505737), m = i(204197), S = i(78675), v = i(438163), x = i(652853), h = i(900687), N = i(228168), g = i(182294), C = i(602091), p = i(231338), R = i(505451);
let T = I.ZP.getEnableHardwareAcceleration() ? s.Xo : s.qE;
function M(e) {
    let {
            user: n,
            displayProfile: i,
            activity: s,
            guildId: I,
            channelId: M,
            transitionState: j,
            viewProfileItem: A,
            onClose: P
        } = e, {theme: U} = (0, x.z)(), L = (0, Z.Z)(n.id, I), {
            avatarSrc: O,
            eventHandlers: b,
            avatarDecorationSrc: y
        } = (0, m.Z)({
            user: n,
            guildId: null == i ? void 0 : i.guildId,
            size: g.EF.SIZE_120
        }), {profileStatusEditEnabled: D} = (0, E.K)({ location: 'SimplifiedUserProfileModalHeader' }), {
            originalFriendingEnabled: B,
            improvedFriendingEnabled: F
        } = (0, f.V)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: G,
            activeInviteToCallCtaEnabled: k
        } = (0, _.l)({ location: 'SimplifiedUserProfileModalHeader' }), w = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), Y = (0, o.e7)([c.default], () => c.default.getId() === n.id), [V, H] = (0, o.Wu)([d.Z], () => {
            let e = d.Z.isMobileOnline(n.id);
            return (0, r.W)(n, M) ? [
                p.Sk.UNKNOWN,
                e
            ] : (0, a.Z)(s) ? [
                p.Sk.STREAMING,
                e
            ] : [
                d.Z.getStatus(n.id),
                e
            ];
        });
    return (0, t.jsxs)('header', {
        children: [
            (0, t.jsx)(S.Z, {
                user: n,
                displayProfile: i,
                profileType: N.y0.FULL_SIZE,
                hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
            }),
            (0, t.jsxs)('div', {
                className: R.headerInner,
                children: [
                    (0, t.jsx)('div', {
                        ...b,
                        children: (0, t.jsx)(T, {
                            src: O,
                            avatarDecoration: y,
                            size: g.EF.SIZE_120,
                            className: R.avatar,
                            status: V,
                            statusBackdropColor: (0, l.QF)(U),
                            'aria-label': n.username,
                            isMobile: H,
                            statusTooltip: !0,
                            statusTooltipDelay: N.vB
                        })
                    }),
                    (0, t.jsx)(h.Z, {
                        user: n,
                        isCurrentUser: Y,
                        guildId: I,
                        canDM: L,
                        relationshipType: w,
                        originalFriendingEnabled: B,
                        improvedFriendingEnabled: F,
                        persistentCallCtaEnabled: G,
                        activeInviteToCallCtaEnabled: k,
                        viewProfileItem: A,
                        onClose: P
                    }),
                    (0, t.jsx)(v.Z, {
                        user: n,
                        profileType: N.y0.FULL_SIZE,
                        editEnabled: D,
                        hasEntered: j === C.Dv.ENTERED,
                        onClose: P
                    })
                ]
            })
        ]
    });
}
