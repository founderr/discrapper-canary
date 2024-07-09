i.d(n, {
    Z: function () {
        return v;
    }
});
var l = i(735250);
i(470079);
var s = i(442837), o = i(699516), t = i(5192), a = i(877485), r = i(741308), d = i(681837), c = i(91433), u = i(502762), I = i(530), f = i(616140), _ = i(107194), E = i(228168), m = i(981631), Z = i(505451);
function v(e) {
    var n;
    let {
            user: i,
            currentUser: v,
            channelId: S,
            displayProfile: x,
            initialSection: h,
            initialSubsection: N,
            friendToken: p,
            onClose: g
        } = e, T = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(i.id)), {
            originalFriendingEnabled: C,
            improvedFriendingEnabled: j
        } = (0, a.V)({ location: 'SimplifiedUserProfileModalBody' }), R = (0, _.Z)({
            user: i,
            currentUser: v
        });
    return (0, l.jsxs)('div', {
        className: Z.body,
        children: [
            (0, l.jsx)(I.Z, {
                user: i,
                profileType: E.y0.FULL_SIZE,
                nickname: t.ZP.getName(null == x ? void 0 : x.guildId, S, i),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, l.jsx)(d.Z, { userId: i.id }),
                tags: (0, l.jsx)(r.Z, {
                    displayProfile: x,
                    profileType: E.y0.FULL_SIZE,
                    onClose: g
                })
            }),
            (j || C) && T === m.OGo.PENDING_INCOMING && (0, l.jsx)(u.Z.Overlay, {
                className: Z.friendRequestBannerOverlay,
                children: (0, l.jsx)(c.Z, {
                    user: i,
                    guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
                    channelId: S,
                    friendToken: p,
                    className: Z.friendRequestBanner
                })
            }),
            (0, l.jsx)(u.Z.Overlay, {
                className: Z.overlay,
                children: (0, l.jsx)(f.Z, {
                    user: i,
                    currentUser: v,
                    displayProfile: x,
                    items: R,
                    initialSection: h,
                    initialSubsection: N,
                    onClose: g
                })
            })
        ]
    });
}
