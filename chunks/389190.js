s.d(n, {
    T: function () {
        return x;
    },
    Z: function () {
        return Z;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(481060),
    l = s(239091),
    r = s(129861),
    c = s(906732),
    a = s(158776),
    d = s(785717),
    u = s(697927),
    I = s(171368),
    _ = s(981631),
    E = s(689938),
    f = s(519294);
let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
function x(e) {
    let { user: n, status: c, onSelect: d } = e,
        u = (0, i.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
    return (0, t.jsxs)(o.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('79695'), s.e('69220')]).then(s.bind(s, 881351));
                return (s) =>
                    (0, t.jsx)(e, {
                        ...s,
                        user: n
                    });
            });
        },
        children: [
            (0, t.jsx)(o.Avatar, {
                src: n.getAvatarURL(void 0, m),
                'aria-label': n.username,
                size: o.AvatarSizes.SIZE_40,
                status: c,
                isMobile: u,
                className: f.listAvatar
            }),
            (0, t.jsx)(r.Z, {
                user: n,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function Z(e) {
    let { user: n, onClose: s } = e,
        { mutualFriends: i } = (0, u.Z)(n.id),
        { analyticsLocations: l } = (0, c.ZP)(),
        { context: r, trackUserProfileAction: a } = (0, d.KZ)(),
        m = (e) => {
            s(),
                (0, I.openUserProfileModal)({
                    ...r,
                    userId: e,
                    sourceAnalyticsLocations: l,
                    analyticsLocation: { section: _.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, t.jsx)(o.ScrollerThin, {
        className: f.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, t.jsx)('div', {
                      className: f.empty,
                      children: (0, t.jsx)(o.Spinner, {})
                  })
                : 0 === i.length
                  ? (0, t.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, t.jsx)('div', { className: f.emptyIconFriends }),
                            (0, t.jsx)('div', {
                                className: f.emptyText,
                                children: E.Z.Messages.NO_MUTUAL_FRIENDS
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { key: n, user: s, status: i } = e;
                        return (0, t.jsx)(
                            x,
                            {
                                user: s,
                                status: i,
                                onSelect: () => {
                                    a({ action: 'PRESS_MUTUAL_FRIEND' }), m(s.id);
                                }
                            },
                            n
                        );
                    })
    });
}
