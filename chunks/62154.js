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
function p(e) {
    var n;
    let { user: t, currentUser: p, channelId: x, displayProfile: Z, initialSection: h, initialSubsection: v, friendToken: S, onClose: T } = e,
        g = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        A = (0, I.Z)({
            user: t,
            currentUser: p
        });
    return (0, i.jsxs)('div', {
        className: m.body,
        children: [
            (0, i.jsx)(u.Z, {
                user: t,
                profileType: E.y0.FULL_SIZE,
                nickname: l.ZP.getName(null == Z ? void 0 : Z.guildId, x, t),
                pronouns: null == Z ? void 0 : Z.pronouns,
                nicknameVariant: 'heading-xl/bold',
                nicknameIcons: (0, i.jsx)(c.Z, { userId: t.id }),
                tags: (0, i.jsx)(r.Z, {
                    displayProfile: Z,
                    profileType: E.y0.FULL_SIZE,
                    onClose: T
                })
            }),
            g === f.OGo.PENDING_INCOMING &&
                (0, i.jsx)(d.Z.Overlay, {
                    className: m.friendRequestBannerOverlay,
                    children: (0, i.jsx)(a.Z, {
                        user: t,
                        guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
                        channelId: x,
                        friendToken: S,
                        className: m.friendRequestBanner
                    })
                }),
            (0, i.jsx)(d.Z.Overlay, {
                className: m.overlay,
                children: (0, i.jsx)(_.Z, {
                    user: t,
                    currentUser: p,
                    displayProfile: Z,
                    items: A,
                    initialSection: h,
                    initialSubsection: v,
                    onClose: T
                })
            })
        ]
    });
}
