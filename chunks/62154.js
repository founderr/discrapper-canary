t.d(n, {
    Z: function () {
        return Z;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(979264),
    l = t(699516),
    r = t(5192),
    c = t(648052),
    a = t(681837),
    d = t(91433),
    u = t(502762),
    _ = t(530),
    I = t(740628),
    E = t(643518),
    f = t(228168),
    m = t(981631),
    x = t(272216);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, channelId: p, displayProfile: h, initialSection: v, initialSubsection: S, friendToken: T, onClose: g } = e,
        A = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        N = (0, E.Z)({
            user: t,
            currentUser: Z
        });
    return (0, s.jsxs)('div', {
        className: x.body,
        children: [
            (0, s.jsx)(_.Z, {
                user: t,
                profileType: f.y0.FULL_SIZE,
                nickname: r.ZP.getName(null == h ? void 0 : h.guildId, p, t),
                pronouns: null == h ? void 0 : h.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, s.jsx)(a.Z, { userId: t.id }),
                tags: (0, s.jsx)(c.Z, {
                    displayProfile: h,
                    profileType: f.y0.FULL_SIZE,
                    onClose: g
                })
            }),
            (0, s.jsx)(o.ZP, { userId: t.id }),
            A === m.OGo.PENDING_INCOMING &&
                (0, s.jsx)(u.Z.Overlay, {
                    className: x.friendRequestBannerOverlay,
                    children: (0, s.jsx)(d.Z, {
                        user: t,
                        guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                        channelId: p,
                        friendToken: T,
                        className: x.friendRequestBanner
                    })
                }),
            (0, s.jsx)(u.Z.Overlay, {
                className: x.overlay,
                children: (0, s.jsx)(I.Z, {
                    user: t,
                    currentUser: Z,
                    displayProfile: h,
                    items: N,
                    initialSection: v,
                    initialSubsection: S,
                    onClose: g
                })
            })
        ]
    });
}
