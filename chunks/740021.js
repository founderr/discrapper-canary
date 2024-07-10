n.d(i, {
    Z: function () {
        return j;
    }
}), n(47120);
var l = n(735250);
n(470079);
var s = n(442837), t = n(974674), o = n(696826), a = n(420660), r = n(233440), d = n(314897), c = n(158776), u = n(699516), I = n(998502), f = n(751009), _ = n(332390), E = n(877485), m = n(204197), Z = n(78675), v = n(438163), S = n(652853), x = n(900687), h = n(228168), p = n(182294), g = n(602091), N = n(231338), T = n(505451);
let C = I.ZP.getEnableHardwareAcceleration() ? t.Xo : t.qE;
function j(e) {
    let {
            user: i,
            displayProfile: n,
            activity: t,
            guildId: I,
            channelId: j,
            transitionState: A,
            viewProfileItem: R,
            onClose: U
        } = e, {theme: O} = (0, S.z)(), {
            avatarSrc: M,
            eventHandlers: L,
            avatarDecorationSrc: P
        } = (0, m.Z)({
            user: i,
            guildId: null == n ? void 0 : n.guildId,
            size: p.EF.SIZE_120
        }), {profileStatusEditEnabled: b} = (0, f.K)({ location: 'SimplifiedUserProfileModalHeader' }), {
            originalFriendingEnabled: y,
            improvedFriendingEnabled: D
        } = (0, E.V)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: F,
            activeInviteToCallCtaEnabled: B
        } = (0, _.l)({ location: 'SimplifiedUserProfileModalHeader' }), G = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(i.id)), w = (0, s.e7)([d.default], () => d.default.getId() === i.id), [k, V] = (0, s.Wu)([c.Z], () => {
            let e = c.Z.isMobileOnline(i.id);
            return (0, r.W)(i, j) ? [
                N.Sk.UNKNOWN,
                e
            ] : (0, a.Z)(t) ? [
                N.Sk.STREAMING,
                e
            ] : [
                c.Z.getStatus(i.id),
                e
            ];
        });
    return (0, l.jsxs)('header', {
        children: [
            (0, l.jsx)(Z.Z, {
                user: i,
                displayProfile: n,
                profileType: h.y0.FULL_SIZE,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }),
            (0, l.jsxs)('div', {
                className: T.headerInner,
                children: [
                    (0, l.jsx)('div', {
                        ...L,
                        children: (0, l.jsx)(C, {
                            src: M,
                            avatarDecoration: P,
                            size: p.EF.SIZE_120,
                            className: T.avatar,
                            status: k,
                            statusBackdropColor: (0, o.QF)(O),
                            'aria-label': i.username,
                            isMobile: V,
                            statusTooltip: !0,
                            statusTooltipDelay: h.vB
                        })
                    }),
                    (0, l.jsx)(x.Z, {
                        user: i,
                        isCurrentUser: w,
                        guildId: I,
                        relationshipType: G,
                        originalFriendingEnabled: y,
                        improvedFriendingEnabled: D,
                        persistentCallCtaEnabled: F,
                        activeInviteToCallCtaEnabled: B,
                        viewProfileItem: R,
                        onClose: U
                    }),
                    (0, l.jsx)(v.Z, {
                        user: i,
                        profileType: h.y0.FULL_SIZE,
                        editEnabled: b,
                        hasEntered: A === g.Dv.ENTERED,
                        onClose: U
                    })
                ]
            })
        ]
    });
}
