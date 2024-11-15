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
    a = n(481060),
    r = n(239091),
    s = n(129861),
    o = n(906732),
    c = n(158776),
    d = n(785717),
    u = n(697927),
    h = n(171368),
    p = n(981631),
    m = n(388032),
    f = n(952662);
let g = (0, a.getAvatarSize)(a.AvatarSizes.SIZE_40);
function C(e) {
    let { user: t, status: o, onSelect: d } = e,
        u = (0, l.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, i.jsxs)(a.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('44378')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t
                    });
            });
        },
        children: [
            (0, i.jsx)(a.Avatar, {
                src: t.getAvatarURL(void 0, g),
                'aria-label': t.username,
                size: a.AvatarSizes.SIZE_40,
                status: o,
                isMobile: u,
                className: f.listAvatar
            }),
            (0, i.jsx)(s.Z, {
                user: t,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function x(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: l } = (0, u.Z)(t.id),
        { analyticsLocations: r } = (0, o.ZP)(),
        { context: s, trackUserProfileAction: c } = (0, d.KZ)(),
        g = (e) => {
            n(),
                (0, h.openUserProfileModal)({
                    ...s,
                    userId: e,
                    sourceAnalyticsLocations: r,
                    analyticsLocation: { section: p.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, i.jsx)(a.ScrollerThin, {
        className: f.listScroller,
        fade: !0,
        children:
            null == l
                ? (0, i.jsx)('div', {
                      className: f.empty,
                      children: (0, i.jsx)(a.Spinner, {})
                  })
                : 0 === l.length
                  ? (0, i.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, i.jsx)('div', { className: f.emptyIconFriends }),
                            (0, i.jsx)('div', {
                                className: f.emptyText,
                                children: m.intl.string(m.t['/5p4g4'])
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
