i.d(n, {
    Z: function () {
        return j;
    }
}), i(47120);
var l = i(735250);
i(470079);
var s = i(442837), o = i(974674), t = i(696826), a = i(420660), r = i(233440), d = i(314897), c = i(158776), u = i(699516), I = i(998502), f = i(751009), _ = i(332390), E = i(877485), m = i(204197), Z = i(78675), v = i(438163), S = i(652853), x = i(900687), h = i(228168), N = i(182294), p = i(602091), g = i(231338), T = i(505451);
let C = I.ZP.getEnableHardwareAcceleration() ? o.Xo : o.qE;
function j(e) {
    let {
            user: n,
            displayProfile: i,
            activity: o,
            guildId: I,
            channelId: j,
            transitionState: R,
            viewProfileItem: A,
            onClose: M
        } = e, {theme: P} = (0, S.z)(), {
            avatarSrc: U,
            eventHandlers: O,
            avatarDecorationSrc: L
        } = (0, m.Z)({
            user: n,
            guildId: null == i ? void 0 : i.guildId,
            size: N.EF.SIZE_120
        }), {profileStatusEditEnabled: b} = (0, f.K)({ location: 'SimplifiedUserProfileModalHeader' }), {
            originalFriendingEnabled: y,
            improvedFriendingEnabled: B
        } = (0, E.V)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: D,
            activeInviteToCallCtaEnabled: F
        } = (0, _.l)({ location: 'SimplifiedUserProfileModalHeader' }), G = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), w = (0, s.e7)([d.default], () => d.default.getId() === n.id), [k, Y] = (0, s.Wu)([c.Z], () => {
            let e = c.Z.isMobileOnline(n.id);
            return (0, r.W)(n, j) ? [
                g.Sk.UNKNOWN,
                e
            ] : (0, a.Z)(o) ? [
                g.Sk.STREAMING,
                e
            ] : [
                c.Z.getStatus(n.id),
                e
            ];
        });
    return (0, l.jsxs)('header', {
        children: [
            (0, l.jsx)(Z.Z, {
                user: n,
                displayProfile: i,
                profileType: h.y0.FULL_SIZE,
                hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
            }),
            (0, l.jsxs)('div', {
                className: T.headerInner,
                children: [
                    (0, l.jsx)('div', {
                        ...O,
                        children: (0, l.jsx)(C, {
                            src: U,
                            avatarDecoration: L,
                            size: N.EF.SIZE_120,
                            className: T.avatar,
                            status: k,
                            statusBackdropColor: (0, t.QF)(P),
                            'aria-label': n.username,
                            isMobile: Y,
                            statusTooltip: !0,
                            statusTooltipDelay: h.vB
                        })
                    }),
                    (0, l.jsx)(x.Z, {
                        user: n,
                        isCurrentUser: w,
                        guildId: I,
                        relationshipType: G,
                        originalFriendingEnabled: y,
                        improvedFriendingEnabled: B,
                        persistentCallCtaEnabled: D,
                        activeInviteToCallCtaEnabled: F,
                        viewProfileItem: A,
                        onClose: M
                    }),
                    (0, l.jsx)(v.Z, {
                        user: n,
                        profileType: h.y0.FULL_SIZE,
                        editEnabled: b,
                        hasEntered: R === p.Dv.ENTERED,
                        onClose: M
                    })
                ]
            })
        ]
    });
}
