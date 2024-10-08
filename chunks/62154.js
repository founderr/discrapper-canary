t.d(n, {
    Z: function () {
        return x;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(699516),
    l = t(5192),
    r = t(648052),
    c = t(681837),
    a = t(91433),
    d = t(502762),
    u = t(530),
    _ = t(740628),
    I = t(643518),
    E = t(228168),
    f = t(981631),
    m = t(272216);
function x(e) {
    var n;
    let { user: t, currentUser: x, channelId: Z, displayProfile: p, initialSection: h, initialSubsection: v, friendToken: S, onClose: T } = e,
        g = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        A = (0, I.Z)({
            user: t,
            currentUser: x
        });
    return (0, s.jsxs)('div', {
        className: m.body,
        children: [
            (0, s.jsx)(u.Z, {
                user: t,
                profileType: E.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == p ? void 0 : p.guildId, Z, t),
                pronouns: null == p ? void 0 : p.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, s.jsx)(c.Z, { userId: t.id }),
                tags: (0, s.jsx)(r.Z, {
                    displayProfile: p,
                    profileType: E.y0.FULL_SIZE,
                    onClose: T
                })
            }),
            g === f.OGo.PENDING_INCOMING &&
                (0, s.jsx)(d.Z.Overlay, {
                    className: m.friendRequestBannerOverlay,
                    children: (0, s.jsx)(a.Z, {
                        user: t,
                        guildId: null !== (n = null == p ? void 0 : p.guildId) && void 0 !== n ? n : void 0,
                        channelId: Z,
                        friendToken: S,
                        className: m.friendRequestBanner
                    })
                }),
            (0, s.jsx)(d.Z.Overlay, {
                className: m.overlay,
                children: (0, s.jsx)(_.Z, {
                    user: t,
                    currentUser: x,
                    displayProfile: p,
                    items: A,
                    initialSection: h,
                    initialSubsection: v,
                    onClose: T
                })
            })
        ]
    });
}
