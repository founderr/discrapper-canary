n.d(i, {
    Z: function () {
        return v;
    }
});
var s = n(735250);
n(470079);
var l = n(442837), t = n(699516), o = n(5192), r = n(877485), a = n(741308), d = n(681837), c = n(91433), u = n(502762), I = n(530), _ = n(616140), f = n(107194), E = n(228168), m = n(981631), S = n(505451);
function v(e) {
    var i;
    let {
            user: n,
            currentUser: v,
            channelId: Z,
            displayProfile: x,
            initialSection: h,
            initialSubsection: p,
            friendToken: g,
            onClose: T
        } = e, N = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(n.id)), {
            originalFriendingEnabled: C,
            improvedFriendingEnabled: j
        } = (0, r.V)({ location: 'SimplifiedUserProfileModalBody' }), A = (0, f.Z)({
            user: n,
            currentUser: v
        });
    return (0, s.jsxs)('div', {
        className: S.body,
        children: [
            (0, s.jsx)(I.Z, {
                user: n,
                profileType: E.y0.FULL_SIZE,
                nickname: o.ZP.getName(null == x ? void 0 : x.guildId, Z, n),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, s.jsx)(d.Z, { userId: n.id }),
                tags: (0, s.jsx)(a.Z, {
                    displayProfile: x,
                    profileType: E.y0.FULL_SIZE,
                    onClose: T
                })
            }),
            (j || C) && N === m.OGo.PENDING_INCOMING && (0, s.jsx)(u.Z.Overlay, {
                className: S.friendRequestBannerOverlay,
                children: (0, s.jsx)(c.Z, {
                    user: n,
                    guildId: null !== (i = null == x ? void 0 : x.guildId) && void 0 !== i ? i : void 0,
                    channelId: Z,
                    friendToken: g,
                    className: S.friendRequestBanner
                })
            }),
            (0, s.jsx)(u.Z.Overlay, {
                className: S.overlay,
                children: (0, s.jsx)(_.Z, {
                    user: n,
                    currentUser: v,
                    displayProfile: x,
                    items: A,
                    initialSection: h,
                    initialSubsection: p,
                    onClose: T
                })
            })
        ]
    });
}
