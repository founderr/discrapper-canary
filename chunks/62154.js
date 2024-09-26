s.d(n, {
    Z: function () {
        return Z;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    l = s(979264),
    o = s(699516),
    r = s(5192),
    c = s(648052),
    a = s(681837),
    d = s(91433),
    u = s(502762),
    I = s(530),
    _ = s(740628),
    E = s(643518),
    f = s(228168),
    m = s(981631),
    x = s(272216);
function Z(e) {
    var n;
    let { user: s, currentUser: Z, channelId: p, displayProfile: h, initialSection: v, initialSubsection: S, friendToken: T, onClose: g } = e,
        A = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(s.id)),
        N = (0, E.Z)({
            user: s,
            currentUser: Z
        });
    return (0, t.jsxs)('div', {
        className: x.body,
        children: [
            (0, t.jsx)(I.Z, {
                user: s,
                profileType: f.y0.FULL_SIZE,
                nickname: r.ZP.getName(null == h ? void 0 : h.guildId, p, s),
                pronouns: null == h ? void 0 : h.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, t.jsx)(a.Z, { userId: s.id }),
                tags: (0, t.jsx)(c.Z, {
                    displayProfile: h,
                    profileType: f.y0.FULL_SIZE,
                    onClose: g
                })
            }),
            (0, t.jsx)(l.ZP, { userId: s.id }),
            A === m.OGo.PENDING_INCOMING &&
                (0, t.jsx)(u.Z.Overlay, {
                    className: x.friendRequestBannerOverlay,
                    children: (0, t.jsx)(d.Z, {
                        user: s,
                        guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                        channelId: p,
                        friendToken: T,
                        className: x.friendRequestBanner
                    })
                }),
            (0, t.jsx)(u.Z.Overlay, {
                className: x.overlay,
                children: (0, t.jsx)(_.Z, {
                    user: s,
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
