t.d(n, {
    Z: function () {
        return Z;
    }
});
var o = t(735250);
t(470079);
var i = t(442837),
    s = t(699516),
    l = t(5192),
    c = t(648052),
    r = t(681837),
    a = t(91433),
    d = t(502762),
    u = t(530),
    _ = t(740628),
    I = t(643518),
    E = t(228168),
    f = t(981631),
    p = t(272216);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, channelId: h, displayProfile: x, initialSection: m, initialSubsection: S, friendToken: T, onClose: v } = e,
        g = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        A = (0, I.Z)({
            user: t,
            currentUser: Z
        });
    return (0, o.jsxs)('div', {
        className: p.body,
        children: [
            (0, o.jsx)(u.Z, {
                user: t,
                profileType: E.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == x ? void 0 : x.guildId, h, t),
                pronouns: null == x ? void 0 : x.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, o.jsx)(r.Z, { userId: t.id }),
                tags: (0, o.jsx)(c.Z, {
                    displayProfile: x,
                    profileType: E.y0.FULL_SIZE,
                    onClose: v
                })
            }),
            g === f.OGo.PENDING_INCOMING &&
                (0, o.jsx)(d.Z.Overlay, {
                    className: p.friendRequestBannerOverlay,
                    children: (0, o.jsx)(a.Z, {
                        user: t,
                        guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
                        channelId: h,
                        friendToken: T,
                        className: p.friendRequestBanner
                    })
                }),
            (0, o.jsx)(d.Z.Overlay, {
                className: p.overlay,
                children: (0, o.jsx)(_.Z, {
                    user: t,
                    currentUser: Z,
                    displayProfile: x,
                    items: A,
                    initialSection: m,
                    initialSubsection: S,
                    onClose: v
                })
            })
        ]
    });
}
