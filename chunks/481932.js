n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(906732),
    l = n(822972),
    u = n(314897),
    c = n(699516),
    d = n(785717),
    f = n(475413),
    _ = n(228168),
    h = n(981631),
    p = n(388032);
function m(e) {
    let { user: t, friendToken: n, profileType: m, shouldShowTooltip: g } = e,
        { newestAnalyticsLocation: E } = (0, o.ZP)(),
        { trackUserProfileAction: v } = (0, d.KZ)(),
        I = (0, i.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)),
        S = (0, i.e7)([c.Z], () => (null != t ? c.Z.getRelationshipType(t.id) : h.OGo.NONE)),
        T = (0, l.Z)({
            user: t,
            color: 'danger',
            location: E,
            onAction: () => v({ action: 'REMOVE_FRIEND' })
        });
    return null == t || t.bot || I || S === h.OGo.BLOCKED
        ? null
        : S === h.OGo.FRIEND
          ? (0, r.jsx)(a.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(a.Menu, {
                        navId: 'user-profile-friend-request-buttons',
                        onSelect: void 0,
                        onClose: t,
                        'aria-label': p.intl.string(p.t.Jszi3N),
                        children: T
                    });
                },
                children: (e) =>
                    (0, r.jsx)(f.oY, {
                        shouldShowTooltip: g,
                        icon: a.UserCheckIcon,
                        tooltipText: p.intl.string(p.t.TdEu5e),
                        ...e
                    })
            })
          : S === h.OGo.PENDING_INCOMING || S === h.OGo.PENDING_OUTGOING
            ? m === _.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(f.oY, {
                      shouldShowTooltip: g,
                      icon: a.UserClockIcon,
                      tooltipText: p.intl.string(p.t.p6IHGB),
                      disabled: !0
                  })
            : m === _.y0.FULL_SIZE
              ? null
              : (0, r.jsx)(f.oY, {
                    action: 'SEND_FRIEND_REQUEST',
                    icon: a.UserPlusIcon,
                    tooltipText: p.intl.string(p.t.w5uwoK),
                    shouldShowTooltip: g,
                    onClick: () => {
                        s.Z.addRelationship({
                            userId: t.id,
                            friendToken: n,
                            context: { location: E }
                        });
                    }
                });
}
