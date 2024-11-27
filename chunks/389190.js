t.d(n, {
    T: function () {
        return h;
    },
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    r = t(239091),
    s = t(129861),
    c = t(906732),
    a = t(158776),
    d = t(785717),
    u = t(697927),
    f = t(171368),
    m = t(981631),
    I = t(388032),
    x = t(731218);
let p = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
function h(e) {
    let { user: n, status: c, onSelect: d } = e,
        u = (0, l.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
    return (0, i.jsxs)(o.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: x.listRow,
        onClick: d,
        onContextMenu: (e) => {
            (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('351')]).then(t.bind(t, 881351));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: n
                    });
            });
        },
        children: [
            (0, i.jsx)(o.Avatar, {
                src: n.getAvatarURL(void 0, p),
                'aria-label': n.username,
                size: o.AvatarSizes.SIZE_40,
                status: c,
                isMobile: u,
                className: x.listAvatar
            }),
            (0, i.jsx)(s.Z, {
                user: n,
                className: x.listName,
                discriminatorClass: x.listDiscriminator
            })
        ]
    });
}
function v(e) {
    let { user: n, onClose: t } = e,
        { mutualFriends: l, isFetching: r } = (0, u.Z)(n.id),
        { analyticsLocations: s } = (0, c.ZP)(),
        { context: a, trackUserProfileAction: p } = (0, d.KZ)(),
        v = (e) => {
            t(),
                (0, f.openUserProfileModal)({
                    ...a,
                    userId: e,
                    sourceAnalyticsLocations: s,
                    analyticsLocation: { section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, i.jsx)(o.ScrollerThin, {
        className: x.listScroller,
        fade: !0,
        children:
            null == l && r
                ? (0, i.jsx)('div', {
                      className: x.empty,
                      children: (0, i.jsx)(o.Spinner, {})
                  })
                : (null != l || r) && (null == l ? void 0 : l.length) !== 0
                  ? null == l
                      ? void 0
                      : l.map((e) => {
                            let { key: n, user: t, status: l } = e;
                            return (0, i.jsx)(
                                h,
                                {
                                    user: t,
                                    status: l,
                                    onSelect: () => {
                                        p({ action: 'PRESS_MUTUAL_FRIEND' }), v(t.id);
                                    }
                                },
                                n
                            );
                        })
                  : (0, i.jsxs)('div', {
                        className: x.empty,
                        children: [
                            (0, i.jsx)('div', { className: x.emptyIconFriends }),
                            (0, i.jsx)('div', {
                                className: x.emptyText,
                                children: I.intl.string(I.t['/5p4g4'])
                            })
                        ]
                    })
    });
}
