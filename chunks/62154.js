t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(699516),
    r = t(5192),
    s = t(111361),
    c = t(816988),
    a = t(648052),
    d = t(537006),
    u = t(681837),
    f = t(91433),
    m = t(502762),
    x = t(530),
    I = t(740628),
    p = t(643518),
    h = t(228168),
    v = t(981631),
    g = t(37682);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, channelId: _, displayProfile: j, initialSection: b, initialSubsection: E, friendToken: N, onClose: S } = e,
        T = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        y = (0, p.Z)({
            user: t,
            currentUser: Z
        }),
        P = t.id === Z.id,
        { dimissibleUpsellsEnabled: C } = (0, c.u)({ location: 'UserProfileModalBody' }),
        A = (0, s.I5)(Z);
    return (0, i.jsxs)('div', {
        className: g.body,
        children: [
            (0, i.jsx)(x.Z, {
                user: t,
                profileType: h.y0.FULL_SIZE,
                nickname: r.ZP.getName(null == j ? void 0 : j.guildId, _, t),
                pronouns: null == j ? void 0 : j.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
                tags: (0, i.jsx)(a.Z, {
                    displayProfile: j,
                    profileType: h.y0.FULL_SIZE,
                    onClose: S
                })
            }),
            T === v.OGo.PENDING_INCOMING &&
                (0, i.jsx)(m.Z.Overlay, {
                    className: g.friendRequestBannerOverlay,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        guildId: null !== (n = null == j ? void 0 : j.guildId) && void 0 !== n ? n : void 0,
                        channelId: _,
                        friendToken: N,
                        className: g.friendRequestBanner
                    })
                }),
            C &&
                P &&
                (0, i.jsx)(d.Z, {
                    isPremiumUser: A,
                    onInteraction: S
                }),
            (0, i.jsx)(m.Z.Overlay, {
                className: g.overlay,
                children: (0, i.jsx)(I.Z, {
                    user: t,
                    currentUser: Z,
                    displayProfile: j,
                    items: y,
                    initialSection: b,
                    initialSubsection: E,
                    onClose: S
                })
            })
        ]
    });
}
