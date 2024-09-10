s.d(n, {
    T: function () {
        return m;
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
    a = s(906732),
    c = s(158776),
    d = s(785717),
    u = s(697927),
    I = s(171368),
    _ = s(981631),
    E = s(689938),
    f = s(519294);
let x = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
function m(e) {
    let { user: n, status: a, onSelect: d } = e,
        u = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(n.id));
    return (0, t.jsxs)(o.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: f.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('79695'), s.e('69220'), s.e('50261')]).then(s.bind(s, 881351));
                return (s) =>
                    (0, t.jsx)(e, {
                        ...s,
                        user: n
                    });
            });
        },
        children: [
            (0, t.jsx)(o.Avatar, {
                src: n.getAvatarURL(void 0, x),
                'aria-label': n.username,
                size: o.AvatarSizes.SIZE_40,
                status: a,
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
        { analyticsLocations: l } = (0, a.ZP)(),
        { context: r } = (0, d.KZ)(),
        c = (e) => {
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
                            m,
                            {
                                user: s,
                                status: i,
                                onSelect: () => c(s.id)
                            },
                            n
                        );
                    })
    });
}
