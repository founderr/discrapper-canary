n.d(t, {
    T: function () {
        return E;
    },
    Z: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(239091), r = n(129861), o = n(906732), c = n(158776), d = n(785717), u = n(726059), h = n(171368), p = n(981631), m = n(689938), _ = n(735393);
let f = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_40);
function E(e) {
    let {
            user: t,
            status: o,
            onSelect: d
        } = e, u = (0, a.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, i.jsxs)(s.Clickable, {
        className: _.listRow,
        onClick: d,
        onContextMenu: e => {
            (0, l.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('69220'),
                    n.e('86541')
                ]).then(n.bind(n, 881351));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: t
                });
            });
        },
        children: [
            (0, i.jsx)(s.Avatar, {
                src: t.getAvatarURL(void 0, f),
                'aria-label': t.username,
                size: s.AvatarSizes.SIZE_40,
                status: o,
                isMobile: u,
                className: _.listAvatar
            }),
            (0, i.jsx)(r.Z, {
                user: t,
                className: _.listName,
                discriminatorClass: _.listDiscriminator
            })
        ]
    });
}
function C(e) {
    let {
            user: t,
            onClose: n
        } = e, {mutualFriends: a} = (0, u.Z)(t.id), {analyticsLocations: l} = (0, o.ZP)(), {
            guildId: r,
            channelId: c,
            messageId: f,
            roleId: C
        } = (0, d.KZ)(), g = e => {
            n(), (0, h.openUserProfileModal)({
                userId: e,
                guildId: r,
                channelId: c,
                messageId: f,
                roleId: C,
                sourceAnalyticsLocations: l,
                analyticsLocation: { section: p.jXE.USER_PROFILE_MUTUAL_FRIENDS }
            });
        };
    return (0, i.jsx)(s.ScrollerThin, {
        className: _.listScroller,
        fade: !0,
        children: null == a ? (0, i.jsx)('div', {
            className: _.empty,
            children: (0, i.jsx)(s.Spinner, {})
        }) : 0 === a.length ? (0, i.jsxs)('div', {
            className: _.empty,
            children: [
                (0, i.jsx)('div', { className: _.emptyIconFriends }),
                (0, i.jsx)('div', {
                    className: _.emptyText,
                    children: m.Z.Messages.NO_MUTUAL_FRIENDS
                })
            ]
        }) : a.map(e => {
            let {
                key: t,
                user: n,
                status: a
            } = e;
            return (0, i.jsx)(E, {
                user: n,
                status: a,
                onSelect: () => g(n.id)
            }, t);
        })
    });
}
