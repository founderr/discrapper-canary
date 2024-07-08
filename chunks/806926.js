i.d(n, {
    Z: function () {
        return v;
    }
});
var o = i(735250);
i(470079);
var s = i(442837), t = i(699516), l = i(5192), a = i(877485), r = i(741308), c = i(681837), d = i(91433), u = i(502762), I = i(530), E = i(616140), f = i(107194), _ = i(228168), Z = i(981631), m = i(505451);
function v(e) {
    var n;
    let {
            user: i,
            currentUser: v,
            channelId: S,
            displayProfile: x,
            initialSection: h,
            initialSubsection: N,
            friendToken: g,
            onClose: p
        } = e, C = (0, s.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), {
            originalFriendingEnabled: T,
            improvedFriendingEnabled: R
        } = (0, a.V)({ location: 'SimplifiedUserProfileModalBody' }), M = (0, f.Z)({
            user: i,
            currentUser: v
        });
    return (0, o.jsxs)('div', {
        className: m.body,
        children: [
            (0, o.jsx)(I.Z, {
                user: i,
                profileType: _.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == x ? void 0 : x.guildId, S, i),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(c.Z, { userId: i.id }),
                tags: (0, o.jsx)(r.Z, {
                    displayProfile: x,
                    profileType: _.y0.FULL_SIZE,
                    onClose: p
                })
            }),
            (R || T) && C === Z.OGo.PENDING_INCOMING && (0, o.jsx)(u.Z.Overlay, {
                className: m.friendRequestBannerOverlay,
                children: (0, o.jsx)(d.Z, {
                    user: i,
                    guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
                    channelId: S,
                    friendToken: g,
                    className: m.friendRequestBanner
                })
            }),
            (0, o.jsx)(u.Z.Overlay, {
                className: m.overlay,
                children: (0, o.jsx)(E.Z, {
                    user: i,
                    currentUser: v,
                    displayProfile: x,
                    items: M,
                    initialSection: h,
                    initialSubsection: N,
                    onClose: p
                })
            })
        ]
    });
}
