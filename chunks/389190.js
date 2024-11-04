n.d(t, {
    T: function () {
        return C;
    },
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(239091),
    a = n(129861),
    o = n(906732),
    c = n(158776),
    u = n(785717),
    d = n(697927),
    h = n(171368),
    m = n(981631),
    p = n(388032),
    f = n(519294);
let g = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_40);
function C(e) {
    let { user: t, status: o, onSelect: u } = e,
        d = (0, l.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, i.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: u,
        onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t
                    });
            });
        },
        children: [
            (0, i.jsx)(r.Avatar, {
                src: t.getAvatarURL(void 0, g),
                'aria-label': t.username,
                size: r.AvatarSizes.SIZE_40,
                status: o,
                isMobile: d,
                className: f.listAvatar
            }),
            (0, i.jsx)(a.Z, {
                user: t,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function x(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: l } = (0, d.Z)(t.id),
        { analyticsLocations: s } = (0, o.ZP)(),
        { context: a, trackUserProfileAction: c } = (0, u.KZ)(),
        g = (e) => {
            n(),
                (0, h.openUserProfileModal)({
                    ...a,
                    userId: e,
                    sourceAnalyticsLocations: s,
                    analyticsLocation: { section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, i.jsx)(r.ScrollerThin, {
        className: f.listScroller,
        fade: !0,
        children:
            null == l
                ? (0, i.jsx)('div', {
                      className: f.empty,
                      children: (0, i.jsx)(r.Spinner, {})
                  })
                : 0 === l.length
                  ? (0, i.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, i.jsx)('div', { className: f.emptyIconFriends }),
                            (0, i.jsx)('div', {
                                className: f.emptyText,
                                children: p.intl.string(p.t['/5p4g4'])
                            })
                        ]
                    })
                  : l.map((e) => {
                        let { key: t, user: n, status: l } = e;
                        return (0, i.jsx)(
                            C,
                            {
                                user: n,
                                status: l,
                                onSelect: () => {
                                    c({ action: 'PRESS_MUTUAL_FRIEND' }), g(n.id);
                                }
                            },
                            t
                        );
                    })
    });
}
