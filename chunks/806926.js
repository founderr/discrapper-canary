n.d(i, {
    Z: function () {
        return v;
    }
});
var l = n(735250);
n(470079);
var s = n(442837), t = n(699516), o = n(5192), a = n(877485), r = n(741308), d = n(681837), c = n(91433), u = n(502762), I = n(530), f = n(616140), _ = n(107194), E = n(228168), m = n(981631), Z = n(505451);
function v(e) {
    var i;
    let {
            user: n,
            currentUser: v,
            channelId: S,
            displayProfile: x,
            initialSection: h,
            initialSubsection: p,
            friendToken: g,
            onClose: N
        } = e, T = (0, s.e7)([t.Z], () => t.Z.getRelationshipType(n.id)), {
            originalFriendingEnabled: C,
            improvedFriendingEnabled: j
        } = (0, a.V)({ location: 'SimplifiedUserProfileModalBody' }), A = (0, _.Z)({
            user: n,
            currentUser: v
        });
    return (0, l.jsxs)('div', {
        className: Z.body,
        children: [
            (0, l.jsx)(I.Z, {
                user: n,
                profileType: E.y0.FULL_SIZE,
                nickname: o.ZP.getName(null == x ? void 0 : x.guildId, S, n),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, l.jsx)(d.Z, { userId: n.id }),
                tags: (0, l.jsx)(r.Z, {
                    displayProfile: x,
                    profileType: E.y0.FULL_SIZE,
                    onClose: N
                })
            }),
            (j || C) && T === m.OGo.PENDING_INCOMING && (0, l.jsx)(u.Z.Overlay, {
                className: Z.friendRequestBannerOverlay,
                children: (0, l.jsx)(c.Z, {
                    user: n,
                    guildId: null !== (i = null == x ? void 0 : x.guildId) && void 0 !== i ? i : void 0,
                    channelId: S,
                    friendToken: g,
                    className: Z.friendRequestBanner
                })
            }),
            (0, l.jsx)(u.Z.Overlay, {
                className: Z.overlay,
                children: (0, l.jsx)(f.Z, {
                    user: n,
                    currentUser: v,
                    displayProfile: x,
                    items: A,
                    initialSection: h,
                    initialSubsection: p,
                    onClose: N
                })
            })
        ]
    });
}
