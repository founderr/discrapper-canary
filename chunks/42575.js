n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(194359),
    l = n(906732),
    o = n(388380),
    c = n(171368),
    d = n(626135),
    u = n(321488),
    _ = n(417183),
    E = n(170245),
    h = n(981631),
    m = n(689938),
    I = n(796147);
function p(e) {
    let { user: t, nickname: n, status: p, isFocused: g } = e,
        T = a.useContext(d.AnalyticsContext),
        { analyticsLocations: f } = (0, l.ZP)(),
        C = (e) => {
            null == e || e.stopPropagation(),
                r.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'Friends' },
                    type: void 0,
                    friendToken: void 0,
                    fromFriendSuggestion: !0
                });
        },
        S = (e) => {
            null == e || e.stopPropagation(), o.Z.ignore(t.id);
        },
        N = p === h.Skl.OFFLINE ? h.Skl.UNKNOWN : p;
    return (0, i.jsx)(_.Z, {
        isFocused: g,
        user: t,
        onClick: () =>
            (0, c.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: f,
                analyticsLocation: T.location
            }),
        children: (e) => {
            let a = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.Z, {
                        icon: s.CheckmarkLargeIcon,
                        actionType: u.Z.ActionTypes.ACCEPT,
                        tooltip: m.Z.Messages.FRIEND_REQUEST_ACCEPT,
                        onClick: C,
                        shouldHighlight: e
                    }),
                    (0, i.jsx)(u.Z, {
                        icon: s.XSmallIcon,
                        actionType: u.Z.ActionTypes.DENY,
                        tooltip: m.Z.Messages.FRIEND_REQUEST_IGNORE,
                        onClick: S,
                        shouldHighlight: e
                    })
                ]
            });
            return (0, i.jsxs)('div', {
                className: I.listItemContents,
                children: [
                    (0, i.jsx)(E.Z, {
                        user: t,
                        hovered: e,
                        status: N,
                        subText: n,
                        className: I.__invalid_userInfo
                    }),
                    (0, i.jsx)('div', {
                        className: I.actions,
                        children: a
                    })
                ]
            });
        }
    });
}
