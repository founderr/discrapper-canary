r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(194359),
    l = r(906732),
    u = r(822972),
    c = r(314897),
    d = r(699516),
    f = r(785717),
    _ = r(475413),
    h = r(228168),
    p = r(981631),
    m = r(388032);
function g(e) {
    let { user: n, friendToken: r, profileType: g, shouldShowTooltip: E } = e,
        { newestAnalyticsLocation: v } = (0, l.ZP)(),
        { trackUserProfileAction: I } = (0, f.KZ)(),
        T = (0, a.e7)([c.default], () => c.default.getId() === (null == n ? void 0 : n.id)),
        b = (0, a.e7)([d.Z], () => (null != n ? d.Z.getRelationshipType(n.id) : p.OGo.NONE)),
        y = (0, u.Z)({
            user: n,
            color: 'danger',
            location: v,
            onAction: () => I({ action: 'REMOVE_FRIEND' })
        });
    if (null == n || n.bot || T || b === p.OGo.BLOCKED) return null;
    let S = () =>
            (0, i.jsx)(s.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(s.Menu, {
                        navId: 'user-profile-friend-request-buttons',
                        onSelect: void 0,
                        onClose: n,
                        'aria-label': m.intl.string(m.t.Jszi3N),
                        children: y
                    });
                },
                children: (e) =>
                    (0, i.jsx)(_.oY, {
                        shouldShowTooltip: E,
                        icon: s.UserCheckIcon,
                        tooltipText: m.intl.string(m.t.TdEu5e),
                        ...e
                    })
            }),
        A = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(_.oY, {
                      shouldShowTooltip: E,
                      icon: s.UserClockIcon,
                      tooltipText: m.intl.string(m.t.p6IHGB),
                      disabled: !0
                  }),
        N = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(_.oY, {
                      shouldShowTooltip: E,
                      icon: s.UserClockIcon,
                      tooltipText: m.intl.string(m.t.p6IHGB),
                      disabled: !0
                  }),
        C = () =>
            g === h.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(_.oY, {
                      action: 'SEND_FRIEND_REQUEST',
                      icon: s.UserPlusIcon,
                      tooltipText: m.intl.string(m.t.w5uwoK),
                      shouldShowTooltip: E,
                      onClick: () => {
                          o.Z.addRelationship({
                              userId: n.id,
                              friendToken: r,
                              context: { location: v }
                          });
                      }
                  });
    return b === p.OGo.FRIEND ? S() : b === p.OGo.PENDING_INCOMING ? A() : b === p.OGo.PENDING_OUTGOING ? N() : C();
}
