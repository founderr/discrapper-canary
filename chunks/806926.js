t.d(n, {
    Z: function () {
        return p;
    }
});
var i = t(735250);
t(470079);
var s = t(442837),
    o = t(699516),
    l = t(5192),
    r = t(741308),
    a = t(681837),
    c = t(91433),
    d = t(502762),
    u = t(530),
    I = t(616140),
    _ = t(107194),
    f = t(228168),
    E = t(981631),
    m = t(392214);
function p(e) {
    var n;
    let { user: t, currentUser: p, channelId: x, displayProfile: v, initialSection: Z, initialSubsection: h, friendToken: S, onClose: T } = e,
        A = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        g = (0, _.Z)({
            user: t,
            currentUser: p
        });
    return (0, i.jsxs)('div', {
        className: m.body,
        children: [
            (0, i.jsx)(u.Z, {
                user: t,
                profileType: f.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == v ? void 0 : v.guildId, x, t),
                pronouns: null == v ? void 0 : v.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(a.Z, { userId: t.id }),
                tags: (0, i.jsx)(r.Z, {
                    displayProfile: v,
                    profileType: f.y0.FULL_SIZE,
                    onClose: T
                })
            }),
            A === E.OGo.PENDING_INCOMING &&
                (0, i.jsx)(d.Z.Overlay, {
                    className: m.friendRequestBannerOverlay,
                    children: (0, i.jsx)(c.Z, {
                        user: t,
                        guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
                        channelId: x,
                        friendToken: S,
                        className: m.friendRequestBanner
                    })
                }),
            (0, i.jsx)(d.Z.Overlay, {
                className: m.overlay,
                children: (0, i.jsx)(I.Z, {
                    user: t,
                    currentUser: p,
                    displayProfile: v,
                    items: g,
                    initialSection: Z,
                    initialSubsection: h,
                    onClose: T
                })
            })
        ]
    });
}
