n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(758059),
    s = n(377171),
    l = n(497089),
    u = n(703656),
    c = n(699516),
    d = n(626135),
    _ = n(981631),
    E = n(689938),
    f = n(488496);
function h(e) {
    let { closePopout: t } = e,
        n = (0, i.e7)([c.Z], () => c.Z.getPendingCount());
    return (0, r.jsx)(a.TooltipContainer, {
        text: E.Z.Messages.VIEW_FRIEND_REQUESTS,
        children: (0, r.jsxs)(a.Clickable, {
            className: f.friendRequestsButton,
            onClick: () => {
                d.default.track(_.rMx.NOTIFICATION_CENTER_ACTION, { action_type: l.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, u.uL)(_.Z5c.FRIENDS), o.Z.setSection(_.pJs.PENDING), t();
            },
            children: [
                (0, r.jsx)(a.FriendsIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, r.jsx)(a.NumberBadge, {
                    count: n,
                    color: s.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
