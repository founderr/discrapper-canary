a.d(s, {
    T: function () {
        return N;
    },
    Z: function () {
        return Z;
    }
});
var t = a(735250);
a(470079);
var i = a(442837),
    l = a(481060),
    n = a(239091),
    r = a(129861),
    c = a(906732),
    d = a(158776),
    o = a(785717),
    x = a(697927),
    u = a(171368),
    m = a(981631),
    j = a(689938),
    v = a(519294);
let h = (0, l.getAvatarSize)(l.AvatarSizes.SIZE_40);
function N(e) {
    let { user: s, status: c, onSelect: o } = e,
        x = (0, i.e7)([d.Z], () => d.Z.isMobileOnline(s.id));
    return (0, t.jsxs)(l.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: v.listRow,
        onClick: o,
        onContextMenu: (e) => {
            (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([a.e('79695'), a.e('69220'), a.e('50261')]).then(a.bind(a, 881351));
                return (a) =>
                    (0, t.jsx)(e, {
                        ...a,
                        user: s
                    });
            });
        },
        children: [
            (0, t.jsx)(l.Avatar, {
                src: s.getAvatarURL(void 0, h),
                'aria-label': s.username,
                size: l.AvatarSizes.SIZE_40,
                status: c,
                isMobile: x,
                className: v.listAvatar
            }),
            (0, t.jsx)(r.Z, {
                user: s,
                className: v.listName,
                discriminatorClass: v.listDiscriminator
            })
        ]
    });
}
function Z(e) {
    let { user: s, onClose: a } = e,
        { mutualFriends: i } = (0, x.Z)(s.id),
        { analyticsLocations: n } = (0, c.ZP)(),
        { context: r, trackUserProfileAction: d } = (0, o.KZ)(),
        h = (e) => {
            a(),
                (0, u.openUserProfileModal)({
                    ...r,
                    userId: e,
                    sourceAnalyticsLocations: n,
                    analyticsLocation: { section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, t.jsx)(l.ScrollerThin, {
        className: v.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, t.jsx)('div', {
                      className: v.empty,
                      children: (0, t.jsx)(l.Spinner, {})
                  })
                : 0 === i.length
                  ? (0, t.jsxs)('div', {
                        className: v.empty,
                        children: [
                            (0, t.jsx)('div', { className: v.emptyIconFriends }),
                            (0, t.jsx)('div', {
                                className: v.emptyText,
                                children: j.Z.Messages.NO_MUTUAL_FRIENDS
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { key: s, user: a, status: i } = e;
                        return (0, t.jsx)(
                            N,
                            {
                                user: a,
                                status: i,
                                onSelect: () => {
                                    d({ action: 'PRESS_MUTUAL_FRIEND' }), h(a.id);
                                }
                            },
                            s
                        );
                    })
    });
}
