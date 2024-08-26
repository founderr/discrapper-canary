t.d(n, {
    Z: function () {
        return x;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(979264),
    l = t(699516),
    r = t(5192),
    a = t(741308),
    c = t(681837),
    d = t(91433),
    u = t(502762),
    I = t(530),
    _ = t(616140),
    E = t(107194),
    f = t(228168),
    m = t(981631),
    p = t(392214);
function x(e) {
    var n;
    let { user: t, currentUser: x, channelId: Z, displayProfile: h, initialSection: v, initialSubsection: S, friendToken: T, onClose: A } = e,
        g = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        N = (0, E.Z)({
            user: t,
            currentUser: x
        });
    return (0, s.jsxs)('div', {
        className: p.body,
        children: [
            (0, s.jsx)(I.Z, {
                user: t,
                profileType: f.y0.FULL_SIZE,
                nickname: r.ZP.getName(null == h ? void 0 : h.guildId, Z, t),
                pronouns: null == h ? void 0 : h.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, s.jsx)(c.Z, { userId: t.id }),
                tags: (0, s.jsx)(a.Z, {
                    displayProfile: h,
                    profileType: f.y0.FULL_SIZE,
                    onClose: A
                })
            }),
            (0, s.jsx)(o.ZP, { userId: t.id }),
            g === m.OGo.PENDING_INCOMING &&
                (0, s.jsx)(u.Z.Overlay, {
                    className: p.friendRequestBannerOverlay,
                    children: (0, s.jsx)(d.Z, {
                        user: t,
                        guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                        channelId: Z,
                        friendToken: T,
                        className: p.friendRequestBanner
                    })
                }),
            (0, s.jsx)(u.Z.Overlay, {
                className: p.overlay,
                children: (0, s.jsx)(_.Z, {
                    user: t,
                    currentUser: x,
                    displayProfile: h,
                    items: N,
                    initialSection: v,
                    initialSubsection: S,
                    onClose: A
                })
            })
        ]
    });
}
