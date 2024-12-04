t.d(n, {
    Z: function () {
        return _;
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
    m = t(944043),
    I = t(502762),
    x = t(530),
    p = t(740628),
    h = t(643518),
    v = t(228168),
    Z = t(981631),
    g = t(171865);
function _(e) {
    var n;
    let { user: t, currentUser: _, channelId: j, displayProfile: b, initialSection: E, initialSubsection: N, friendToken: S, onClose: T } = e,
        y = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        P = (0, h.Z)({
            user: t,
            currentUser: _
        }),
        C = r.ZP.useName(null == b ? void 0 : b.guildId, j, t),
        A = t.id === _.id,
        { dimissibleUpsellsEnabled: L } = (0, c.u)({ location: 'UserProfileModalBody' }),
        M = (0, s.I5)(_);
    return (0, i.jsxs)('div', {
        className: g.body,
        children: [
            (0, i.jsx)(x.Z, {
                user: t,
                profileType: v.y0.FULL_SIZE,
                nickname: C,
                pronouns: null == b ? void 0 : b.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
                tags: (0, i.jsx)(a.Z, {
                    displayProfile: b,
                    profileType: v.y0.FULL_SIZE,
                    onClose: T
                })
            }),
            y === Z.OGo.PENDING_INCOMING &&
                (0, i.jsx)(I.Z.Overlay, {
                    className: g.friendRequestBannerOverlay,
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        guildId: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : void 0,
                        channelId: j,
                        friendToken: S,
                        className: g.friendRequestBanner
                    })
                }),
            (0, i.jsx)(m.Z, { user: t }),
            L &&
                A &&
                (0, i.jsx)(d.Z, {
                    isPremiumUser: M,
                    onInteraction: T
                }),
            (0, i.jsx)(I.Z.Overlay, {
                className: g.overlay,
                children: (0, i.jsx)(p.Z, {
                    user: t,
                    currentUser: _,
                    displayProfile: b,
                    items: P,
                    initialSection: E,
                    initialSubsection: N,
                    onClose: T
                })
            })
        ]
    });
}
