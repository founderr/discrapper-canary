t.d(n, {
    T: function () {
        return x;
    },
    Z: function () {
        return Z;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(481060),
    l = t(239091),
    r = t(129861),
    a = t(906732),
    c = t(158776),
    d = t(785717),
    u = t(697927),
    _ = t(171368),
    I = t(981631),
    E = t(689938),
    f = t(519294);
let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
function x(e) {
    let { user: n, status: a, onSelect: d } = e,
        u = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(n.id));
    return (0, s.jsxs)(o.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('50261')]).then(t.bind(t, 881351));
                return (t) =>
                    (0, s.jsx)(e, {
                        ...t,
                        user: n
                    });
            });
        },
        children: [
            (0, s.jsx)(o.Avatar, {
                src: n.getAvatarURL(void 0, m),
                'aria-label': n.username,
                size: o.AvatarSizes.SIZE_40,
                status: a,
                isMobile: u,
                className: f.listAvatar
            }),
            (0, s.jsx)(r.Z, {
                user: n,
                className: f.listName,
                discriminatorClass: f.listDiscriminator
            })
        ]
    });
}
function Z(e) {
    let { user: n, onClose: t } = e,
        { mutualFriends: i } = (0, u.Z)(n.id),
        { analyticsLocations: l } = (0, a.ZP)(),
        { context: r } = (0, d.KZ)(),
        c = (e) => {
            t(),
                (0, _.openUserProfileModal)({
                    ...r,
                    userId: e,
                    sourceAnalyticsLocations: l,
                    analyticsLocation: { section: I.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, s.jsx)(o.ScrollerThin, {
        className: f.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, s.jsx)('div', {
                      className: f.empty,
                      children: (0, s.jsx)(o.Spinner, {})
                  })
                : 0 === i.length
                  ? (0, s.jsxs)('div', {
                        className: f.empty,
                        children: [
                            (0, s.jsx)('div', { className: f.emptyIconFriends }),
                            (0, s.jsx)('div', {
                                className: f.emptyText,
                                children: E.Z.Messages.NO_MUTUAL_FRIENDS
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { key: n, user: t, status: i } = e;
                        return (0, s.jsx)(
                            x,
                            {
                                user: t,
                                status: i,
                                onSelect: () => c(t.id)
                            },
                            n
                        );
                    })
    });
}
